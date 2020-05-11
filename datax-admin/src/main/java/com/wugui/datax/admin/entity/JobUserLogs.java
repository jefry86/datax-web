package com.wugui.datax.admin.entity;

import lombok.Data;
import org.springframework.stereotype.Service;

@Data
@Service
public class JobUserLogs {
    int id;
    int uid;
    String uri;
    String params;
    String desc;
    int dtCreate;
    int dtUpdate;
    int status;
    String fdtcreate;
    String nickname;
}
