package com.wugui.datatx.core.biz.model;

import java.io.Serializable;

/**
 * Created by xuxueli on 17/3/2.
 */
public class HandleCallbackParam implements Serializable {
    private static final long serialVersionUID = 42L;

    private long logId;
    private long logDateTim;

    public long getExpTime() {
        return expTime;
    }

    public void setExpTime(long expTime) {
        this.expTime = expTime;
    }

    private long expTime;

    private ReturnT<String> executeResult;

    public HandleCallbackParam(){}
    public HandleCallbackParam(long logId, long logDateTim, ReturnT<String> executeResult,Long expTime) {
        this.logId = logId;
        this.logDateTim = logDateTim;
        this.executeResult = executeResult;
        this.expTime = expTime;
    }

    public long getLogId() {
        return logId;
    }

    public void setLogId(long logId) {
        this.logId = logId;
    }

    public long getLogDateTim() {
        return logDateTim;
    }

    public void setLogDateTim(long logDateTim) {
        this.logDateTim = logDateTim;
    }

    public ReturnT<String> getExecuteResult() {
        return executeResult;
    }

    public void setExecuteResult(ReturnT<String> executeResult) {
        this.executeResult = executeResult;
    }

    @Override
    public String toString() {
        return "HandleCallbackParam{" +
                "logId=" + logId +
                ", logDateTim=" + logDateTim +
                ", expTime=" + expTime +
                ", executeResult=" + executeResult +
                '}';
    }
}
