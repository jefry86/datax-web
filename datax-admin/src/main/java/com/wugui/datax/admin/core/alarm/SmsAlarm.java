package com.wugui.datax.admin.core.alarm;


import com.youzu.jefry.notification.util.NotificationException;
import com.youzu.jefry.notification.util.sms.SmsMessageImpl;
import com.youzu.jefry.notification.util.sms.SmsNotificationMsgImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class SmsAlarm {
    @Value("${yoozoo.sms.app-id}")
    private String AppId;

    @Value("${yoozoo.sms.app-key}")
    private String AppKey;

    @Value("${yoozoo.title}")
    private String Title;

    public void send(String phones, String content) {
        SmsMessageImpl smsMessage = new SmsMessageImpl();
        String smsContent = new StringBuffer()
                .append("[" + Title + "] ")
                .append(content)
                .toString();
        smsMessage.setContent(smsContent);
        smsMessage.setPhones(phones);

        SmsNotificationMsgImpl smsNotificationMsg = new SmsNotificationMsgImpl(AppId, AppKey);
        try {
            smsNotificationMsg.send(smsMessage);
        } catch (NotificationException notificationException) {
            log.error(notificationException.getMessage());
        }
    }
}
