package com.wugui.datatx.core.handler;

import com.wugui.datatx.core.biz.model.ReturnT;
import com.wugui.datatx.core.biz.model.TriggerParam;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * job handler
 *
 * @author xuxueli 2015-12-19 19:06:38
 */
public abstract class IJobHandler {


	/** success */
	public static final ReturnT<String> SUCCESS = new ReturnT<>(200, "success");
	/** fail */
	public static final ReturnT<String> FAIL = new ReturnT<>(500, "fail");
	/** fail timeout */
	public static final ReturnT<String> FAIL_TIMEOUT = new ReturnT<>(502, "timeout");

	public static final ConcurrentMap<String, String> jobTmpFiles = new ConcurrentHashMap<>();

	public Long expTime;
	/**
	 * execute handler, invoked when executor receives a scheduling request
	 *
	 * @param tgParam
	 * @return
	 * @throws Exception
	 */
	public abstract ReturnT<String> execute(TriggerParam tgParam) throws Exception;

	/**
	 * init handler, invoked when JobThread init
	 */
	public void init() {
		// do something
	}


	/**
	 * destroy handler, invoked when JobThread destroy
	 */
	public void destroy() {
		// do something
	}


}
