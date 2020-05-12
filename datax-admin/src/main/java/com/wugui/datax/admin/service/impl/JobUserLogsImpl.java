package com.wugui.datax.admin.service.impl;

import com.wugui.datatx.core.biz.model.ReturnT;
import com.wugui.datax.admin.entity.JobUser;
import com.wugui.datax.admin.entity.JobUserLogs;
import com.wugui.datax.admin.mapper.JobUserLogsMapper;
import com.wugui.datax.admin.mapper.JobUserMapper;
import com.wugui.datax.admin.service.JobUserLogsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

@Service
@Slf4j
public class JobUserLogsImpl implements JobUserLogsService {
    @Autowired
    private JobUserLogsMapper jobUserLogsMapper;

    @Override
    public Map<String, Object> pageList(int start, int length, String nickname, String[] dateTime) {

        int startTime = 0;
        int endTime = 0;
        if (dateTime != null && dateTime.length > 0) {
            SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            try {
                Date startDate = simpleDateFormat.parse(dateTime[0]);
                startTime = (int) (startDate.getTime() / 1000);

                Date endDate = simpleDateFormat.parse(dateTime[1]);
                endTime = (int) (endDate.getTime() / 1000);
            } catch (ParseException e) {
                log.error(e.getMessage());
            }
        }

        List<JobUserLogs> list = jobUserLogsMapper.pageList(start, length, nickname, startTime, endTime);
        int recordsTotal = jobUserLogsMapper.pageListCount(start, length, nickname, startTime, endTime);

        // package result
        Map<String, Object> maps = new HashMap<>();
        maps.put("recordsTotal", recordsTotal);        // 总记录数
        maps.put("recordsFiltered", recordsTotal);    // 过滤后的总记录数
        maps.put("data", list);                    // 分页列表
        return maps;
    }

    @Override
    public ReturnT<String> add(JobUserLogs jobUserLogs) {
        jobUserLogsMapper.save(jobUserLogs);
        return null;
    }
}
