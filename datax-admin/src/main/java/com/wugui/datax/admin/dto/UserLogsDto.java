package com.wugui.datax.admin.dto;

import lombok.Data;

@Data
public class UserLogsDto {
    int current;
    int size;
    String[] dateTime;
}
