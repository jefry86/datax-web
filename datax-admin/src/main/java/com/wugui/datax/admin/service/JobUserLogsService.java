package com.wugui.datax.admin.service;

import com.wugui.datatx.core.biz.model.ReturnT;
import com.wugui.datax.admin.entity.JobTemplate;
import com.wugui.datax.admin.entity.JobUserLogs;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface JobUserLogsService {
    Map<String, Object> pageList(int start, int length, String[] dateTime);

    ReturnT<String> add(JobUserLogs jobUserLogs);
}
