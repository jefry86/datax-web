package com.wugui.datax.admin.mapper;


import com.wugui.datax.admin.entity.JobUserLogs;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import javax.annotation.Resource;
import java.util.List;

@Mapper
@Resource
public interface JobUserLogsMapper {
    List<JobUserLogs> pageList(@Param("offset") int offset,
                               @Param("pagesize") int pagesize,
                               @Param("start_time") int startTime,
                               @Param("end_time") int endTime);

    int pageListCount(@Param("offset") int offset,
                      @Param("pagesize") int pagesize,
                      @Param("start_time") int startTime,
                      @Param("end_time") int endTime);

    void save(JobUserLogs jobUserLogs);
}
