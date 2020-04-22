package com.wugui.datax.admin.core.thread;

import com.wugui.datatx.core.biz.model.ReturnT;
import com.wugui.datax.admin.core.conf.JobAdminConfig;
import com.wugui.datax.admin.core.trigger.TriggerTypeEnum;
import com.wugui.datax.admin.core.util.I18nUtil;
import com.wugui.datax.admin.entity.JobGroup;
import com.wugui.datax.admin.entity.JobInfo;
import com.wugui.datax.admin.entity.JobLog;
import com.wugui.datax.admin.entity.JobUser;
import com.yoozoo.notice.client.model.MailReq;
import com.yoozoo.notice.client.model.SmsReq;
import com.yoozoo.notice.client.model.common.CommonRes;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import java.text.MessageFormat;
import java.util.*;
import java.util.concurrent.TimeUnit;

/**
 * job monitor instance
 *
 * @author xuxueli 2015-9-1 18:05:56
 */
public class JobFailMonitorHelper {

    private static Logger logger = LoggerFactory.getLogger(JobFailMonitorHelper.class);

    private static JobFailMonitorHelper instance = new JobFailMonitorHelper();

    public static JobFailMonitorHelper getInstance() {
        return instance;
    }

    // ---------------------- monitor ----------------------

    private Thread monitorThread;
    private volatile boolean toStop = false;

    public void start() {
        monitorThread = new Thread(new Runnable() {

            @Override
            public void run() {

                // monitor
                while (!toStop) {
                    try {

                        List<Long> failLogIds = JobAdminConfig.getAdminConfig().getJobLogMapper().findFailJobLogIds(1000);
                        if (failLogIds != null && !failLogIds.isEmpty()) {
                            for (long failLogId : failLogIds) {

                                // lock log
                                int lockRet = JobAdminConfig.getAdminConfig().getJobLogMapper().updateAlarmStatus(failLogId, 0, -1);
                                if (lockRet < 1) {
                                    continue;
                                }
                                JobLog log = JobAdminConfig.getAdminConfig().getJobLogMapper().load(failLogId);
                                JobInfo info = JobAdminConfig.getAdminConfig().getJobInfoMapper().loadById(log.getJobId());

                                // 1、fail retry monitor
                                if (log.getExecutorFailRetryCount() > 0) {
                                    JobTriggerPoolHelper.trigger(log.getJobId(), TriggerTypeEnum.RETRY, (log.getExecutorFailRetryCount() - 1), log.getExecutorShardingParam(), log.getExecutorParam());
                                    String retryMsg = "<br><br><span style=\"color:#F39C12;\" > >>>>>>>>>>>" + I18nUtil.getString("jobconf_trigger_type_retry") + "<<<<<<<<<<< </span><br>";
                                    log.setTriggerMsg(log.getTriggerMsg() + retryMsg);
                                    JobAdminConfig.getAdminConfig().getJobLogMapper().updateTriggerInfo(log);
                                }

                                // 2、fail alarm monitor
                                int newAlarmStatus = 0;        // 告警状态：0-默认、-1=锁定状态、1-无需告警、2-告警成功、3-告警失败
                                if (info != null && info.getAuthor() != null && info.getAuthor().trim().length() > 0) {
                                    boolean alarmResult = true;
                                    try {
                                        alarmResult = failAlarm(info, log);
                                    } catch (Exception e) {
                                        alarmResult = false;
                                        logger.error(e.getMessage(), e);
                                    }
                                    newAlarmStatus = alarmResult ? 2 : 3;
                                } else {
                                    newAlarmStatus = 1;
                                }

                                JobAdminConfig.getAdminConfig().getJobLogMapper().updateAlarmStatus(failLogId, -1, newAlarmStatus);
                            }
                        }

                    } catch (Exception e) {
                        if (!toStop) {
                            logger.error(">>>>>>>>>>> datax-web, job fail monitor thread error:{}", e);
                        }
                    }

                    try {
                        TimeUnit.SECONDS.sleep(10);
                    } catch (Exception e) {
                        if (!toStop) {
                            logger.error(e.getMessage(), e);
                        }
                    }

                }

                logger.info(">>>>>>>>>>> datax-web, job fail monitor thread stop");

            }
        });
        monitorThread.setDaemon(true);
        monitorThread.setName("datax-web, admin JobFailMonitorHelper");
        monitorThread.start();
    }

    public void toStop() {
        toStop = true;
        // interrupt and wait
        monitorThread.interrupt();
        try {
            monitorThread.join();
        } catch (InterruptedException e) {
            logger.error(e.getMessage(), e);
        }
    }


    // ---------------------- alarm ----------------------

    // email alarm template
    private static final String mailBodyTemplate = "<h5>" + I18nUtil.getString("jobconf_monitor_detail") + "：</span>" +
            "<table border=\"1\" cellpadding=\"3\" style=\"border-collapse:collapse; width:80%;margin:20px;\">\n" +
            "   <thead style=\"font-weight: bold;color: #ffffff;background-color: #ff8c00;\" >" +
            "      <tr>\n" +
            "         <td width=\"10%\" >" + I18nUtil.getString("jobinfo_field_id") + "</td>\n" +
            "         <td width=\"20%\" >" + I18nUtil.getString("jobinfo_field_jobdesc") + "</td>\n" +
            "         <td width=\"20%\" >" + I18nUtil.getString("jobinfo_field_jobgroup") + "</td>\n" +
            "         <td width=\"10%\" >" + I18nUtil.getString("jobconf_monitor_alarm_title") + "</td>\n" +
            "      </tr>\n" +
            "   </thead>\n" +
            "   <tbody>\n" +
            "      <tr>\n" +
            "         <td>{0}</td>\n" +
            "         <td>{1}</td>\n" +
            "         <td>{2}</td>\n" +
            "         <td>" + I18nUtil.getString("jobconf_monitor_alarm_type") + "</td>\n" +
            "      </tr>\n" +
            "       <tr>" +
            "       <td style=\"font-weight: bold;color: #ffffff;background-color: #ff8c00;\">" + I18nUtil.getString("jobconf_monitor_alarm_content") + "</td><td colspan='3'>{3}</td>" +
            "       </tr>" +
            "   </tbody>\n" +
            "</table>";

    /**
     * fail alarm
     *
     * @param jobLog
     */
    private boolean failAlarm(JobInfo info, JobLog jobLog) {
        boolean alarmResult = true;

        // send monitor email
        if (info != null && info.getAuthor() != null && info.getAuthor().trim().length() > 0) {

            // alarmContent
            String alarmContent = "Alarm Job LogId=" + jobLog.getId();
            if (jobLog.getTriggerCode() != ReturnT.SUCCESS_CODE) {
                alarmContent += "<br>TriggerMsg=<br>" + jobLog.getTriggerMsg();
            }
            if (jobLog.getHandleCode() > 0 && jobLog.getHandleCode() != ReturnT.SUCCESS_CODE) {
                alarmContent += "<br>HandleCode=" + jobLog.getHandleMsg();
            }

            // email info
            JobGroup group = JobAdminConfig.getAdminConfig().getJobGroupMapper().load(Integer.valueOf(info.getJobGroup()));
            String personal = I18nUtil.getString("admin_name_full");
            String title = I18nUtil.getString("jobconf_monitor");
            String content = MessageFormat.format(mailBodyTemplate,
                    info.getId(),
                    info.getJobDesc(),
                    group != null ? group.getTitle() : "null",
                    alarmContent);

            String smsContent = "经管大数据项目-任务调试失败，ID:" + info.getId() + "，名称:" + info.getJobDesc() + "，详细查看邮件。";
            String[] authors = info.getAuthor().split(",");
            List<JobUser> listUsers = JobAdminConfig.getAdminConfig().getJobUserMapper().getUsersByIds(authors);
            List<String> userNameList = new ArrayList<>();
            listUsers.forEach(user -> {
                userNameList.add(user.getUsername());
            });


//            listUsers.forEach(user -> {
//                        // make mail
//                        try {
//                            MimeMessage mimeMessage = JobAdminConfig.getAdminConfig().getMailSender().createMimeMessage();
//
//                            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
//                            helper.setFrom(JobAdminConfig.getAdminConfig().getEmailUserName(), personal);
//                            helper.setTo(user.getEmail());
//                            helper.setSubject(title);
//                            helper.setText(content, true);
//
//                            JobAdminConfig.getAdminConfig().getMailSender().send(mimeMessage);
//                        } catch (Exception e) {
//                            logger.error(">>>>>>>>>>> datax-web, job fail alarm email send error, JobLogId:{}", jobLog.getId(), e);
//
//                        }
//                        //make sms user.getPhone()
//                    }
//
//            );

            MailReq mailReq = new MailReq();
            mailReq.setContent(content);
            mailReq.setSubject(title);
            mailReq.setTo(userNameList);
            mailReq.setType(0);
            CommonRes mailCommonRes = JobAdminConfig.getAdminConfig().getNoticeClient().sendMail(mailReq);
            if (!mailCommonRes.isOk()) {
                logger.error(">>>>>>>>>>> datax-web, job fail alarm email send error, JobLogId:{},err:{}", jobLog.getId(), mailCommonRes.getMessage());
            }

            SmsReq smsReq = new SmsReq();
            smsReq.setContent(smsContent);
            smsReq.setTo(userNameList);
            smsReq.setType(0);
            CommonRes smsCommonRes = JobAdminConfig.getAdminConfig().getNoticeClient().sendSms(smsReq);

            if (!smsCommonRes.isOk()) {
                logger.error(">>>>>>>>>>> datax-web, job fail alarm sms send error, JobLogId:{},err:{}", jobLog.getId(), smsCommonRes.getMessage());
            }


        }

        // do something, custom alarm strategy, such as sms


        return alarmResult;
    }

}
