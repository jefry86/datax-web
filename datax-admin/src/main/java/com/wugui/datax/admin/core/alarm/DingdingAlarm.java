package com.wugui.datax.admin.core.alarm;


import com.youzu.jefry.notification.util.NotificationException;
import com.youzu.jefry.notification.util.dingding.DingdingMessageImpl;
import com.youzu.jefry.notification.util.dingding.DingdingNotificationMsgImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.text.SimpleDateFormat;
import java.util.Date;

@Component
@Slf4j
public class DingdingAlarm {
    @Value("${yoozoo.dingding.app-id}")
    private String AppId;

    @Value("${yoozoo.dingding.app-key}")
    private String AppKey;

    @Value("${yoozoo.title}")
    private String Title;

    @Value("${yoozoo.dingding.url}")
    private String Url;

    public void send(String account, String content) {

        log.debug("app_id:" + AppId + ";app_key:" + AppKey);

        String dingdingContent = new StringBuffer()
                .append("【" + Title + "】")
                .append(content)
                .toString();

        DingdingMessageImpl dingdingMessage = new DingdingMessageImpl();
        dingdingMessage.setMsgType("action_card");
        dingdingMessage.setRedirect("whole");
        dingdingMessage.setListType("0");
        dingdingMessage.setTitle(Title);
        dingdingMessage.setContent(dingdingContent);
        dingdingMessage.setUserAccount(account);
        dingdingMessage.setSingleUrl(Url);
        dingdingMessage.setSingleTitle("查看详情");

        DingdingNotificationMsgImpl dingdingNotificationMsg = new DingdingNotificationMsgImpl(AppId, AppKey);
        try {
            dingdingNotificationMsg.send(dingdingMessage);
        } catch (NotificationException notificationException) {
            log.error("钉钉消息发送失败，error:" + notificationException.getMessage());
        }

    }
}
