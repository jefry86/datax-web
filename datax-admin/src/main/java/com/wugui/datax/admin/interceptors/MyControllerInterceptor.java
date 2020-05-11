package com.wugui.datax.admin.interceptors;

import com.wugui.datax.admin.entity.JobUserLogs;
import com.wugui.datax.admin.service.JobUserLogsService;
import com.wugui.datax.admin.service.impl.JobUserLogsImpl;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.lang.annotation.Annotation;

@Slf4j
public class MyControllerInterceptor implements HandlerInterceptor {

    @Autowired
    JobUserLogsImpl jobUserLogsService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String uid = (String) authentication.getCredentials();
        String params = request.getQueryString();
        String uri = request.getServletPath();

        String desc = "";

        ApiOperation annotation = ((HandlerMethod) handler).getMethodAnnotation(ApiOperation.class);
        if (annotation != null) {
            desc = annotation.value();
        }
        long time = System.currentTimeMillis() / 1000;
        if (params == null) {
            params = "";
        }
        if (uri == null) {
            return;
        }

        JobUserLogs jobUserLogs = new JobUserLogs();
        jobUserLogs.setParams(params);
        jobUserLogs.setDesc(desc);
        jobUserLogs.setUid(Integer.parseInt(uid));
        jobUserLogs.setDtCreate((int) time);
        jobUserLogs.setDtUpdate((int) time);
        jobUserLogs.setUri(uri);
        jobUserLogsService.add(jobUserLogs);

    }

}
