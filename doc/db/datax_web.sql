/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50725
 Source Host           : localhost:3306
 Source Schema         : datax_web

 Target Server Type    : MySQL
 Target Server Version : 50725
 File Encoding         : 65001

 Date: 15/12/2019 22:27:10
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for datax_plugin
-- ----------------------------
DROP TABLE IF EXISTS `datax_plugin`;
CREATE TABLE `datax_plugin`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plugin_type` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '插件类型，reader writer',
  `plugin_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '插件名，用作主键',
  `template_json` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT 'json模板',
  `comments` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '注释',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 20 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'datax插件信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of datax_plugin
-- ----------------------------
INSERT INTO `datax_plugin` VALUES (1, 'reader', 'streamreader', '', '内存读取');
INSERT INTO `datax_plugin` VALUES (2, 'writer', 'streamwriter', NULL, '内存写');
INSERT INTO `datax_plugin` VALUES (3, 'reader', 'mysqlreader', NULL, 'mysql读取');
INSERT INTO `datax_plugin` VALUES (4, 'writer', 'mysqlwriter', NULL, 'myysql写');
INSERT INTO `datax_plugin` VALUES (5, 'reader', 'oraclereader', NULL, 'oracle读取');
INSERT INTO `datax_plugin` VALUES (15, 'writer', 'oraclewriter', NULL, 'oracle写');
INSERT INTO `datax_plugin` VALUES (16, 'reader', 'sqlserverreader', NULL, 'sqlserver读');
INSERT INTO `datax_plugin` VALUES (17, 'writer', 'sqlserverwriter', NULL, 'sqlserver写');
INSERT INTO `datax_plugin` VALUES (18, 'reader', 'postgresqlreader', NULL, 'postgresql读');
INSERT INTO `datax_plugin` VALUES (19, 'writer', 'postgresqlwriter', NULL, 'postgresql写');

-- ----------------------------
-- Table structure for job_group
-- ----------------------------
DROP TABLE IF EXISTS `job_group`;
CREATE TABLE `job_group`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_name` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '执行器AppName',
  `title` varchar(12) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '执行器名称',
  `order` int(11) NOT NULL DEFAULT 0 COMMENT '排序',
  `address_type` tinyint(4) NOT NULL DEFAULT 0 COMMENT '执行器地址类型：0=自动注册、1=手动录入',
  `address_list` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器地址列表，多地址逗号分隔',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of job_group
-- ----------------------------
INSERT INTO `job_group` VALUES (1, 'datax-executor', 'datax执行器', 1, 0, NULL);

-- ----------------------------
-- Table structure for job_info
-- ----------------------------
DROP TABLE IF EXISTS `job_info`;
CREATE TABLE `job_info`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_group` int(11) NOT NULL COMMENT '执行器主键ID',
  `job_cron` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '任务执行CRON',
  `job_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `add_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  `author` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '作者',
  `alarm_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报警邮件',
  `executor_route_strategy` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器路由策略',
  `executor_handler` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器任务handler',
  `executor_param` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器任务参数',
  `executor_block_strategy` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '阻塞处理策略',
  `executor_timeout` int(11) NOT NULL DEFAULT 0 COMMENT '任务执行超时时间，单位秒',
  `executor_fail_retry_count` int(11) NOT NULL DEFAULT 0 COMMENT '失败重试次数',
  `glue_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'GLUE类型',
  `glue_source` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT 'GLUE源代码',
  `glue_remark` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'GLUE备注',
  `glue_updatetime` datetime(0) NULL DEFAULT NULL COMMENT 'GLUE更新时间',
  `child_jobid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '子任务ID，多个逗号分隔',
  `trigger_status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '调度状态：0-停止，1-运行',
  `trigger_last_time` bigint(13) NOT NULL DEFAULT 0 COMMENT '上次调度时间',
  `trigger_next_time` bigint(13) NOT NULL DEFAULT 0 COMMENT '下次调度时间',
  `job_json` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'datax运行脚本',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;


-- ----------------------------
-- Table structure for job_jdbc_datasource
-- ----------------------------
DROP TABLE IF EXISTS `job_jdbc_datasource`;
CREATE TABLE `job_jdbc_datasource`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `datasource_name` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '数据源名称',
  `datasource_group` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'Default' COMMENT '数据源分组',
  `jdbc_username` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '用户名',
  `jdbc_password` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `jdbc_url` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'jdbc url',
  `jdbc_driver_class` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'jdbc驱动类',
  `status` tinyint(1) NOT NULL DEFAULT 1 COMMENT '状态：0删除 1启用 2禁用',
  `create_by` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '创建人',
  `create_date` datetime(0) NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `update_by` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '更新人',
  `update_date` datetime(0) NULL DEFAULT NULL COMMENT '更新时间',
  `comments` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci COMMENT = 'jdbc数据源配置' ROW_FORMAT = Dynamic;


-- ----------------------------
-- Table structure for job_lock
-- ----------------------------
DROP TABLE IF EXISTS `job_lock`;
CREATE TABLE `job_lock`  (
  `lock_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '锁名称',
  PRIMARY KEY (`lock_name`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of job_lock
-- ----------------------------
INSERT INTO `job_lock` VALUES ('schedule_lock');

-- ----------------------------
-- Table structure for job_log
-- ----------------------------
DROP TABLE IF EXISTS `job_log`;
CREATE TABLE `job_log`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `job_group` int(11) NOT NULL COMMENT '执行器主键ID',
  `job_id` int(11) NOT NULL COMMENT '任务，主键ID',
  `executor_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器地址，本次执行的地址',
  `executor_handler` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器任务handler',
  `executor_param` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器任务参数',
  `executor_sharding_param` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器任务分片参数，格式如 1/2',
  `executor_fail_retry_count` int(11) NULL DEFAULT 0 COMMENT '失败重试次数',
  `trigger_time` datetime(0) NULL DEFAULT NULL COMMENT '调度-时间',
  `trigger_code` int(11) NOT NULL COMMENT '调度-结果',
  `trigger_msg` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '调度-日志',
  `handle_time` datetime(0) NULL DEFAULT NULL COMMENT '执行-时间',
  `handle_code` int(11) NOT NULL COMMENT '执行-状态',
  `handle_msg` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT '执行-日志',
  `alarm_status` tinyint(4) NOT NULL DEFAULT 0 COMMENT '告警状态：0-默认、1-无需告警、2-告警成功、3-告警失败',
  `process_id` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'datax进程Id',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `I_trigger_time`(`trigger_time`) USING BTREE,
  INDEX `I_handle_code`(`handle_code`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 60 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;


-- ----------------------------
-- Table structure for job_log_report
-- ----------------------------
DROP TABLE IF EXISTS `job_log_report`;
CREATE TABLE `job_log_report`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `trigger_day` datetime(0) NULL DEFAULT NULL COMMENT '调度-时间',
  `running_count` int(11) NOT NULL DEFAULT 0 COMMENT '运行中-日志数量',
  `suc_count` int(11) NOT NULL DEFAULT 0 COMMENT '执行成功-日志数量',
  `fail_count` int(11) NOT NULL DEFAULT 0 COMMENT '执行失败-日志数量',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `i_trigger_day`(`trigger_day`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of job_log_report
-- ----------------------------
INSERT INTO `job_log_report` VALUES (20, '2019-12-07 00:00:00', 0, 0, 0);
INSERT INTO `job_log_report` VALUES (21, '2019-12-10 00:00:00', 77, 52, 23);
INSERT INTO `job_log_report` VALUES (22, '2019-12-11 00:00:00', 9, 2, 11);
INSERT INTO `job_log_report` VALUES (23, '2019-12-13 00:00:00', 9, 48, 74);
INSERT INTO `job_log_report` VALUES (24, '2019-12-12 00:00:00', 10, 8, 30);
INSERT INTO `job_log_report` VALUES (25, '2019-12-14 00:00:00', 78, 45, 66);
INSERT INTO `job_log_report` VALUES (26, '2019-12-15 00:00:00', 24, 76, 9);
INSERT INTO `job_log_report` VALUES (27, '2019-12-16 00:00:00', 23, 85, 10);

-- ----------------------------
-- Table structure for job_logglue
-- ----------------------------
DROP TABLE IF EXISTS `job_logglue`;
CREATE TABLE `job_logglue`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_id` int(11) NOT NULL COMMENT '任务，主键ID',
  `glue_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'GLUE类型',
  `glue_source` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT 'GLUE源代码',
  `glue_remark` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'GLUE备注',
  `add_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for job_registry
-- ----------------------------
DROP TABLE IF EXISTS `job_registry`;
CREATE TABLE `job_registry`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `registry_group` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `registry_key` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `registry_value` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `i_g_k_v`(`registry_group`, `registry_key`, `registry_value`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 26 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;



-- ----------------------------
-- Table structure for job_user
-- ----------------------------
DROP TABLE IF EXISTS `job_user`;
CREATE TABLE `job_user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '账号',
  `password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '密码',
  `role` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '角色：0-普通用户、1-管理员',
  `permission` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '权限：执行器ID列表，多个逗号分割',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `i_username`(`username`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of job_user
-- ----------------------------
INSERT INTO `job_user` VALUES (1, 'admin', '$2a$10$2KCqRbra0Yn2TwvkZxtfLuWuUP5KyCWsljO/ci5pLD27pqR3TV1vy', 'ROLE_ADMIN', NULL);



/**
v2.1.1脚本更新
*/
ALTER TABLE `job_info`
ADD COLUMN `replace_param` VARCHAR(100) NULL DEFAULT NULL COMMENT '动态参数' AFTER `job_json`,
ADD COLUMN `jvm_param` VARCHAR(200) NULL DEFAULT NULL COMMENT 'jvm参数' AFTER `replace_param`,
ADD COLUMN `time_offset` INT(11) NULL DEFAULT '0'COMMENT '时间偏移量'  AFTER `jvm_param`;
/**
增量改版脚本更新
 */
ALTER TABLE `job_info` DROP COLUMN `time_offset`;
ALTER TABLE `job_info`
ADD COLUMN `inc_start_time` DATETIME NULL DEFAULT NULL COMMENT '增量初始时间' AFTER `jvm_param`;

-- ----------------------------
-- Table structure for job_template
-- ----------------------------
DROP TABLE IF EXISTS `job_template`;
CREATE TABLE `job_template`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `job_group` int(11) NOT NULL COMMENT '执行器主键ID',
  `job_cron` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT '任务执行CRON',
  `job_desc` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `add_time` datetime(0) NULL DEFAULT NULL,
  `update_time` datetime(0) NULL DEFAULT NULL,
  `author` varchar(64) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '作者',
  `alarm_email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '报警邮件',
  `executor_route_strategy` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器路由策略',
  `executor_handler` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器任务handler',
  `executor_param` varchar(512) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '执行器参数',
  `executor_block_strategy` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '阻塞处理策略',
  `executor_timeout` int(11) NOT NULL DEFAULT 0 COMMENT '任务执行超时时间，单位秒',
  `executor_fail_retry_count` int(11) NOT NULL DEFAULT 0 COMMENT '失败重试次数',
  `glue_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL COMMENT 'GLUE类型',
  `glue_source` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL COMMENT 'GLUE源代码',
  `glue_remark` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'GLUE备注',
  `glue_updatetime` datetime(0) NULL DEFAULT NULL COMMENT 'GLUE更新时间',
  `child_jobid` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '子任务ID，多个逗号分隔',
  `trigger_last_time` bigint(13) NOT NULL DEFAULT 0 COMMENT '上次调度时间',
  `trigger_next_time` bigint(13) NOT NULL DEFAULT 0 COMMENT '下次调度时间',
  `job_json` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT 'datax运行脚本',
  `replace_param` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT '动态参数',
  `jvm_param` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL COMMENT 'jvm参数',
  `inc_start_time` datetime(0) NULL DEFAULT NULL COMMENT '增量初始时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

/**
添加数据源字段
 */
ALTER TABLE `job_jdbc_datasource`
ADD COLUMN `datasource` VARCHAR(45) NOT NULL COMMENT '数据源' AFTER `datasource_name`;

/**
添加分区字段
 */
ALTER TABLE `job_info`
ADD COLUMN `partition_info` VARCHAR(100) NULL DEFAULT NULL COMMENT '分区信息' AFTER `inc_start_time`;

ALTER TABLE `job_template`
ADD COLUMN `partition_info` VARCHAR(100) NULL DEFAULT NULL COMMENT '分区信息' AFTER `inc_start_time`;

/**
2.1.1版本新增----------------------------------------------------------------------------------------------
 */

/**
最近一次执行状态
 */
ALTER TABLE `job_info`
ADD COLUMN `last_handle_code` INT(11) NULL DEFAULT '0' COMMENT '最近一次执行状态' AFTER `partition_info`;

/**
zookeeper地址
 */
ALTER TABLE `job_jdbc_datasource`
ADD COLUMN `zk_adress` VARCHAR(200) NULL DEFAULT NULL AFTER `jdbc_driver_class`;

ALTER TABLE `job_info`
CHANGE COLUMN `executor_timeout` `executor_timeout` INT(11) NOT NULL DEFAULT '0' COMMENT '任务执行超时时间，单位分钟' ;

/**
用户名密码改为非必填
 */
ALTER TABLE `job_jdbc_datasource`
CHANGE COLUMN `jdbc_username` `jdbc_username` VARCHAR(100) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL COMMENT '用户名' ,
CHANGE COLUMN `jdbc_password` `jdbc_password` VARCHAR(200) CHARACTER SET 'utf8mb4' NULL DEFAULT NULL COMMENT '密码' ;
/**
添加mongodb数据库名字段
 */
ALTER TABLE `job_jdbc_datasource`
ADD COLUMN `database_name` VARCHAR(45) NULL DEFAULT NULL COMMENT '数据库名' AFTER `datasource_group`;
/**
添加执行器资源字段
 */
ALTER TABLE `job_registry`
ADD COLUMN `cpu_usage` DOUBLE NULL AFTER `registry_value`,
ADD COLUMN `memory_usage` DOUBLE NULL AFTER `cpu_usage`,
ADD COLUMN `load_average` DOUBLE NULL AFTER `memory_usage`;

-- ----------------------------
-- Table structure for job_permission
-- ----------------------------
DROP TABLE IF EXISTS `job_permission`;
CREATE TABLE `job_permission`  (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '权限名',
  `description` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限描述',
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pid` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;



ALTER TABLE `job_info`
ADD COLUMN `replace_param_type` varchar(255) NULL COMMENT '增量时间格式' AFTER `last_handle_code`;
ALTER TABLE `job_template`
ADD COLUMN `replace_param_type` varchar(255) NULL COMMENT '增量时间格式' AFTER `last_handle_code`;

ALTER TABLE `job_user`
ADD COLUMN `nickname` varchar(255) NULL COMMENT '昵称' AFTER `permission`,
ADD COLUMN `email` varchar(255) NULL COMMENT '邮箱' AFTER `email`,
ADD COLUMN `phone` varchar(255) NULL COMMENT '手机号码' AFTER `phone`;

ALTER TABLE `job_info`
ADD COLUMN `job_project` varchar(255) NULL COMMENT '所属项目' AFTER `job_desc`;

ALTER TABLE `job_template`
ADD COLUMN `job_project` varchar(255) NULL COMMENT '所属项目' AFTER `parent_jobid`;


ALTER TABLE `job_log`
ADD COLUMN `exp_time` int(0) NULL DEFAULT 0 COMMENT '消耗时间' AFTER `process_id`;

CREATE TABLE `job_user_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT '用户ID',
  `uri` varchar(255) DEFAULT NULL COMMENT '操作的uri',
  `params` varchar(255) DEFAULT NULL COMMENT '请求的参数',
  `desc` text COMMENT '操作说明',
  `dt_create` int(255) DEFAULT NULL COMMENT '创建时间',
  `dt_update` int(255) DEFAULT NULL COMMENT '更新时间',
  `status` int(255) DEFAULT '1' COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;

CREATE TABLE `job_permission_role`  (
  `id` int(0) NOT NULL,
  `role_id` int(0) NULL COMMENT '角色ID',
  `permission_id` int(0) NULL COMMENT '权限ID',
  `dt_create` int NULL COMMENT '创建时间',
  `dt_modify` int NULL COMMENT '更新时间',
  `status` tinyint NULL DEFAULT 1 COMMENT '是否可用',
  PRIMARY KEY (`id`)
);

CREATE TABLE `job_role_user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `job_user_id` int(0) NULL,
  `job_role_id` int(0) NULL,
  `dt_create` int(255) NULL,
  `dt_modify` integer(255) NULL,
  `status` tinyint NULL,
  PRIMARY KEY (`id`)
);