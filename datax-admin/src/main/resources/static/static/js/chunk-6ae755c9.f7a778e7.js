(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ae755c9"],{"05ce":function(e,t,a){},"20e8":function(e,t,a){"use strict";var r=a("cd86"),o=a.n(r);o.a},"222c":function(e,t,a){"use strict";var r=a("25b6"),o=a.n(r);o.a},"25b6":function(e,t,a){},"2b10":function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"j",(function(){return i})),a.d(t,"h",(function(){return l})),a.d(t,"i",(function(){return n})),a.d(t,"b",(function(){return s})),a.d(t,"k",(function(){return u})),a.d(t,"a",(function(){return c})),a.d(t,"g",(function(){return p})),a.d(t,"f",(function(){return d})),a.d(t,"e",(function(){return m})),a.d(t,"c",(function(){return f}));var r=a("b775");function o(e){return Object(r["a"])({url:"api/job/pageList",method:"get",params:e})}function i(e){return Object(r["a"])({url:"/api/job/trigger",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/api/job/start?id="+e,method:"post"})}function n(e){return Object(r["a"])({url:"/api/job/stop?id="+e,method:"post"})}function s(){return Object(r["a"])({url:"api/jobGroup/list",method:"get"})}function u(e){return Object(r["a"])({url:"/api/job/update",method:"post",data:e})}function c(e){return Object(r["a"])({url:"/api/job/add/",method:"post",data:e})}function p(e){return Object(r["a"])({url:"/api/job/remove/"+e,method:"post"})}function d(e){return Object(r["a"])({url:"/api/job/nextTriggerTime?cron="+e,method:"get"})}function m(e){return Object(r["a"])({url:"api/user/list",method:"get",params:e})}function f(e){return Object(r["a"])({url:"api/job/list",method:"get",params:e})}},"333d":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},o=[];a("c5f6");Math.easeInOutQuad=function(e,t,a,r){return e/=r/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function n(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var r=n(),o=e-r,s=20,u=0;t="undefined"===typeof t?500:t;var c=function e(){u+=s;var n=Math.easeInOutQuad(u,r,o,t);l(n),u<t?i(e):a&&"function"===typeof a&&a()};c()}var u={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},c=u,p=(a("e498"),a("2877")),d=Object(p["a"])(c,r,o,!1,null,"6af373ef",null);t["a"]=d.exports},"39ed":function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"f",(function(){return i})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return n})),a.d(t,"b",(function(){return s}));var r=a("b775");function o(){return Object(r["a"])({url:"/api/jobGroup/list",method:"get"})}function i(e){return Object(r["a"])({url:"/api/jobGroup/update",method:"post",data:e})}function l(e){return Object(r["a"])({url:"/api/jobGroup/save",method:"post",data:e})}function n(e){return Object(r["a"])({url:"/api/jobGroup/loadById?id="+e,method:"post"})}function s(e){return Object(r["a"])({url:"/api/jobGroup/remove?id="+e,method:"post"})}},"44c8":function(e,t,a){},6724:function(e,t,a){"use strict";a("8d41");var r="@@wavesContext";function o(e,t){function a(a){var r=Object.assign({},t.value),o=Object.assign({ele:e,type:"hit",color:"rgba(0, 0, 0, 0.15)"},r),i=o.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var l=i.getBoundingClientRect(),n=i.querySelector(".waves-ripple");switch(n?n.className="waves-ripple":(n=document.createElement("span"),n.className="waves-ripple",n.style.height=n.style.width=Math.max(l.width,l.height)+"px",i.appendChild(n)),o.type){case"center":n.style.top=l.height/2-n.offsetHeight/2+"px",n.style.left=l.width/2-n.offsetWidth/2+"px";break;default:n.style.top=(a.pageY-l.top-n.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",n.style.left=(a.pageX-l.left-n.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return n.style.backgroundColor=o.color,n.className="waves-ripple z-active",!1}}return e[r]?e[r].removeHandle=a:e[r]={removeHandle:a},a}var i={bind:function(e,t){e.addEventListener("click",o(e,t),!1)},update:function(e,t){e.removeEventListener("click",e[r].removeHandle,!1),e.addEventListener("click",o(e,t),!1)},unbind:function(e){e.removeEventListener("click",e[r].removeHandle,!1),e[r]=null,delete e[r]}},l=function(e){e.directive("waves",i)};window.Vue&&(window.waves=i,Vue.use(l)),i.install=l;t["a"]=i},7456:function(e,t,a){},"8d41":function(e,t,a){},"8f79":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务名称"},model:{value:e.listQuery.jobDesc,callback:function(t){e.$set(e.listQuery,"jobDesc",t)},expression:"listQuery.jobDesc"}}),e._v(" "),a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"负责人"},model:{value:e.listQuery.author,callback:function(t){e.$set(e.listQuery,"author",t)},expression:"listQuery.author"}}),e._v(" "),a("el-select",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务类型"},model:{value:e.listQuery.glueType,callback:function(t){e.$set(e.listQuery,"glueType",t)},expression:"listQuery.glueType"}},e._l(e.glueTypes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.fetchData}},[e._v("\n      搜索\n    ")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("\n      添加\n    ")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.id))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"任务名称",align:"center",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.jobDesc))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Cron",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.jobCron))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"路由策略",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.routeStrategies.find((function(e){return e.value===t.row.executorRouteStrategy})).label))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#00A854","active-value":1,"inactive-color":"#F04134","inactive-value":0},on:{change:function(a){return e.changeSwitch(t.row)}},model:{value:t.row.triggerStatus,callback:function(a){e.$set(t.row,"triggerStatus",a)},expression:"scope.row.triggerStatus"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"注册节点",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"bottom",width:"500"},on:{show:function(a){return e.loadById(t.row)}}},[a("el-table",{attrs:{data:e.registerNode}},[a("el-table-column",{attrs:{width:"150",property:"title",label:"执行器名称"}}),e._v(" "),a("el-table-column",{attrs:{width:"150",property:"appName",label:"appName"}}),e._v(" "),a("el-table-column",{attrs:{width:"150",property:"registryList",label:"机器地址"}})],1),e._v(" "),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"下次触发时间",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-popover",{attrs:{placement:"bottom",width:"300"},on:{show:function(a){return e.nextTriggerTime(t.row)}}},[a("h5",{domProps:{innerHTML:e._s(e.triggerNextTimes)}}),e._v(" "),a("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("查看")])],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"执行状态",align:"center",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(e.statusList.find((function(e){return e.value===t.row.lastHandleCode})).label))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.row;return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handlerExecute(r)}}},[e._v("\n          执行一次\n        ")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handlerViewLog(r)}}},[e._v("\n          查询日志\n        ")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.handlerUpdate(r)}}},[e._v("\n          编辑\n        ")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){return e.handlerDelete(r)}}},[e._v("\n          删除\n        ")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.current,limit:e.listQuery.size},on:{"update:page":function(t){return e.$set(e.listQuery,"current",t)},"update:limit":function(t){return e.$set(e.listQuery,"size",t)},pagination:e.fetchData}}),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"1000px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"110px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"执行器",prop:"jobGroup"}},[a("el-select",{attrs:{placeholder:"请选择执行器"},model:{value:e.temp.jobGroup,callback:function(t){e.$set(e.temp,"jobGroup",t)},expression:"temp.jobGroup"}},e._l(e.executorList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务名称",prop:"jobDesc"}},[a("el-input",{attrs:{size:"medium",placeholder:"请输入任务描述"},model:{value:e.temp.jobDesc,callback:function(t){e.$set(e.temp,"jobDesc",t)},expression:"temp.jobDesc"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"路由策略",prop:"executorRouteStrategy"}},[a("el-select",{attrs:{placeholder:"请选择路由策略"},model:{value:e.temp.executorRouteStrategy,callback:function(t){e.$set(e.temp,"executorRouteStrategy",t)},expression:"temp.executorRouteStrategy"}},e._l(e.routeStrategies,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"Cron",prop:"jobCron"}},[a("el-input",{attrs:{placeholder:"请输入Cron表达式"},model:{value:e.temp.jobCron,callback:function(t){e.$set(e.temp,"jobCron",t)},expression:"temp.jobCron"}})],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"阻塞处理",prop:"executorBlockStrategy"}},[a("el-select",{attrs:{placeholder:"请选择阻塞处理策略"},model:{value:e.temp.executorBlockStrategy,callback:function(t){e.$set(e.temp,"executorBlockStrategy",t)},expression:"temp.executorBlockStrategy"}},e._l(e.blockStrategies,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"负责人",prop:"author"}},[a("el-select",{attrs:{multiple:"",placeholder:"请输入负责人","value-key":"id"},model:{value:e.temp.author,callback:function(t){e.$set(e.temp,"author",t)},expression:"temp.author"}},e._l(e.authorList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.nickname,value:e}})})),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务类型",prop:"glueType"}},[a("el-select",{attrs:{placeholder:"任务脚本类型"},model:{value:e.temp.glueType,callback:function(t){e.$set(e.temp,"glueType",t)},expression:"temp.glueType"}},e._l(e.glueTypes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"父任务ID"}},[a("el-select",{attrs:{multiple:"",placeholder:"父任务ID","value-key":"id"},model:{value:e.temp.parentJobId,callback:function(t){e.$set(e.temp,"parentJobId",t)},expression:"temp.parentJobId"}},e._l(e.JobIdList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.jobDesc,value:e}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"子任务ID"}},[a("el-select",{attrs:{multiple:"",placeholder:"子任务ID","value-key":"id"},model:{value:e.temp.childJobId,callback:function(t){e.$set(e.temp,"childJobId",t)},expression:"temp.childJobId"}},e._l(e.JobIdList,(function(e){return a("el-option",{key:e.id,attrs:{label:e.jobDesc,value:e}})})),1)],1)],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"超时时间(分钟)"}},[a("el-input-number",{attrs:{min:0,max:20},model:{value:e.temp.executorTimeout,callback:function(t){e.$set(e.temp,"executorTimeout",t)},expression:"temp.executorTimeout"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"失败重试次数"}},[a("el-input-number",{attrs:{min:0,max:20},model:{value:e.temp.executorFailRetryCount,callback:function(t){e.$set(e.temp,"executorFailRetryCount",t)},expression:"temp.executorFailRetryCount"}})],1)],1)],1),e._v(" "),"BEAN"===e.temp.glueType?a("el-row",{attrs:{gutter:20}},[a("el-col",[a("el-form-item",{attrs:{label:"增量时间字段"}},[a("el-input",{attrs:{placeholder:"-DlastTime='%s' -DcurrentTime='%s'"},model:{value:e.temp.replaceParam,callback:function(t){e.$set(e.temp,"replaceParam",t)},expression:"temp.replaceParam"}})],1)],1)],1):e._e(),e._v(" "),"BEAN"===e.temp.glueType?a("el-row",{directives:[{name:"show",rawName:"v-show",value:e.temp.replaceParam,expression:"temp.replaceParam"}],attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"增量时间格式",prop:"replaceParamType"}},[a("el-select",{attrs:{placeholder:"增量时间格式"},on:{change:e.incStartTimeFormat},model:{value:e.temp.replaceParamType,callback:function(t){e.$set(e.temp,"replaceParamType",t)},expression:"temp.replaceParamType"}},e._l(e.replaceFormatTypes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"增量开始时间",prop:"incStartTime"}},[a("el-date-picker",{staticStyle:{width:"60%"},attrs:{type:"datetime",placeholder:"首次增量使用",format:"yyyy-MM-dd HH:mm:ss"},model:{value:e.temp.incStartTime,callback:function(t){e.$set(e.temp,"incStartTime",t)},expression:"temp.incStartTime"}})],1)],1)],1):e._e(),e._v(" "),"BEAN"===e.temp.glueType?a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"分区字段"}},[a("el-input",{staticStyle:{width:"56%"},attrs:{placeholder:"请输入分区字段"},model:{value:e.partitionField,callback:function(t){e.partitionField=t},expression:"partitionField"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:7}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.partitionField,expression:"partitionField"}],attrs:{label:"分区时间"}},[a("el-select",{attrs:{placeholder:"分区时间格式"},model:{value:e.timeFormatType,callback:function(t){e.timeFormatType=t},expression:"timeFormatType"}},e._l(e.timeFormatTypes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),e._v(" "),a("el-col",{directives:[{name:"show",rawName:"v-show",value:e.partitionField,expression:"partitionField"}],attrs:{span:5}},[a("el-input-number",{staticStyle:{width:"65%"},attrs:{min:-20,max:0},model:{value:e.timeOffset,callback:function(t){e.timeOffset=t},expression:"timeOffset"}})],1)],1):e._e(),e._v(" "),"BEAN"===e.temp.glueType?a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"JVM启动参数"}},[a("el-input",{attrs:{placeholder:"-Xms1024m -Xmx1024m -XX:+HeapDumpOnOutOfMemoryError"},model:{value:e.temp.jvmParam,callback:function(t){e.$set(e.temp,"jvmParam",t)},expression:"temp.jvmParam"}})],1)],1)],1):e._e()],1),e._v(" "),"BEAN"===e.temp.glueType?a("json-editor",{ref:"jsonEditor",model:{value:e.jobJson,callback:function(t){e.jobJson=t},expression:"jobJson"}}):e._e(),e._v(" "),"GLUE_SHELL"===e.temp.glueType?a("shell-editor",{ref:"shellEditor",model:{value:e.glueSource,callback:function(t){e.glueSource=t},expression:"glueSource"}}):e._e(),e._v(" "),"GLUE_PYTHON"===e.temp.glueType?a("python-editor",{ref:"pythonEditor",model:{value:e.glueSource,callback:function(t){e.glueSource=t},expression:"glueSource"}}):e._e(),e._v(" "),"GLUE_POWERSHELL"===e.temp.glueType?a("powershell-editor",{ref:"powershellEditor",model:{value:e.glueSource,callback:function(t){e.glueSource=t},expression:"glueSource"}}):e._e(),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("\n        取消\n      ")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateData()}}},[e._v("\n        确定\n      ")])],1)],1)],1)},o=[],i=(a("28a5"),a("39ed")),l=a("2b10"),n=a("6724"),s=a("333d"),u=a("fa7e"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shell-editor"},[a("textarea",{ref:"textarea"})])},p=[],d=a("56b3"),m=a.n(d);a("0dd0"),a("a7be"),a("acdf"),a("f9d4"),a("8822");a("02f0");var f={name:"ShellEditor",props:["value"],data:function(){return{shellEditor:!1}},watch:{value:function(e){var t=this.shellEditor.getValue();e!==t&&this.shellEditor.setValue(this.value)}},mounted:function(){var e=this;this.shellEditor=m.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-sh",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.shellEditor.setValue(this.value),this.shellEditor.on("change",(function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.shellEditor.getValue()}}},h=f,b=(a("dce6"),a("2877")),v=Object(b["a"])(h,c,p,!1,null,"783af5a8",null),g=v.exports,y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"python-editor"},[a("textarea",{ref:"textarea"})])},S=[];a("db91");var x={name:"PythonEditor",props:["value"],data:function(){return{pythonEditor:!1}},watch:{value:function(e){var t=this.pythonEditor.getValue();e!==t&&this.pythonEditor.setValue(this.value)}},mounted:function(){var e=this;this.pythonEditor=m.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"text/x-python",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.pythonEditor.setValue(this.value),this.pythonEditor.on("change",(function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.pythonEditor.getValue()}}},w=x,_=(a("20e8"),Object(b["a"])(w,y,S,!1,null,"74d561f1",null)),j=_.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"powershell-editor"},[a("textarea",{ref:"textarea"})])},E=[];a("9da3");var k={name:"PowershellEditor",props:["value"],data:function(){return{powershellEditor:!1}},watch:{value:function(e){var t=this.powershellEditor.getValue();e!==t&&this.powershellEditor.setValue(this.value)}},mounted:function(){var e=this;this.powershellEditor=m.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"powershell",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.powershellEditor.setValue(this.value),this.powershellEditor.on("change",(function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.powershellEditor.getValue()}}},J=k,I=(a("fab6"),Object(b["a"])(J,T,E,!1,null,"7f6ac95b",null)),L=I.exports,$={name:"JobInfo",components:{Pagination:s["a"],JsonEditor:u["a"],ShellEditor:g,PythonEditor:j,PowershellEditor:L},directives:{waves:n["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){var e=this,t=function(t,a,r){e.temp.replaceParam&&!e.temp.incStartTime&&r(new Error("incStartTime is required")),r()};return{list:null,listLoading:!0,total:0,listQuery:{current:1,size:10,jobGroup:0,triggerStatus:-1,jobDesc:"",glueType:"",author:""},dialogPluginVisible:!1,pluginData:[],dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},rules:{jobGroup:[{required:!0,message:"jobGroup is required",trigger:"change"}],executorRouteStrategy:[{required:!0,message:"executorRouteStrategy is required",trigger:"change"}],executorBlockStrategy:[{required:!0,message:"executorBlockStrategy is required",trigger:"change"}],glueType:[{required:!0,message:"jobType is required",trigger:"change"}],jobDesc:[{required:!0,message:"jobDesc is required",trigger:"blur"}],jobCron:[{required:!0,message:"jobCron is required",trigger:"blur"}],author:[{required:!0,message:"author is required",trigger:"blur"}],incStartTime:[{trigger:"blur",validator:t}]},temp:{id:void 0,jobGroup:"",jobCron:"",jobDesc:"",executorRouteStrategy:"",executorBlockStrategy:"",childJobId:"",parentJobId:"",executorFailRetryCount:"",alarmEmail:"",executorTimeout:"",author:"",jobConfigId:"",executorHandler:"",glueType:"",glueSource:"",jobJson:"",executorParam:"",replaceParam:"",replaceParamType:"UnitTime",jvmParam:"",incStartTime:"",partitionInfo:""},resetTemp:function(){this.temp=this.$options.data().temp,this.jobJson="",this.glueSource="",this.timeOffset=0,this.timeFormatType="yyyy-MM-dd",this.partitionField=""},executorList:"",authorList:"",JobIdList:"",blockStrategies:[{value:"SERIAL_EXECUTION",label:"单机串行"},{value:"DISCARD_LATER",label:"丢弃后续调度"},{value:"COVER_EARLY",label:"覆盖之前调度"}],routeStrategies:[{value:"FIRST",label:"第一个"},{value:"LAST",label:"最后一个"},{value:"ROUND",label:"轮询"},{value:"RANDOM",label:"随机"},{value:"CONSISTENT_HASH",label:"一致性HASH"},{value:"LEAST_FREQUENTLY_USED",label:"最不经常使用"},{value:"LEAST_RECENTLY_USED",label:"最近最久未使用"},{value:"FAILOVER",label:"故障转移"},{value:"BUSYOVER",label:"忙碌转移"}],glueTypes:[{value:"BEAN",label:"DataX任务"},{value:"GLUE_SHELL",label:"Shell任务"},{value:"GLUE_PYTHON",label:"Python任务"},{value:"GLUE_POWERSHELL",label:"PowerShell任务"}],triggerNextTimes:"",registerNode:[],jobJson:"",glueSource:"",timeOffset:0,timeFormatType:"yyyy-MM-dd",partitionField:"",timeFormatTypes:[{value:"yyyy-MM-dd",label:"yyyy-MM-dd"},{value:"yyyyMMdd",label:"yyyyMMdd"},{value:"yyyy/MM/dd",label:"yyyy/MM/dd"}],replaceFormatTypes:[{value:"yyyy/MM/dd",label:"日期"},{value:"HH:mm:ss",label:"时间"},{value:"yyyy/MM/dd HH:mm:ss",label:"日期+时间"},{value:"UnitTime",label:"时间戳"}],statusList:[{value:500,label:"失败"},{value:502,label:"失败(超时)"},{value:200,label:"成功"},{value:0,label:"无"}]}},created:function(){this.fetchData(),this.getExecutor(),this.getUsers(),this.getJobIdList()},methods:{getExecutor:function(){var e=this;l["b"]().then((function(t){var a=t.content;e.executorList=a}))},getUsers:function(){var e=this;l["e"]().then((function(t){var a=t.content;e.authorList=a}))},getJobIdList:function(){var e=this;l["c"]().then((function(t){var a=t.content;e.JobIdList=a}))},fetchData:function(){var e=this;this.listLoading=!0,l["d"](this.listQuery).then((function(t){var a=t.content;e.total=a.recordsTotal,e.list=a.data,e.listLoading=!1}))},incStartTimeFormat:function(e){},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},createData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){if(e.temp.author){var a=[];for(var r in e.temp.author)a.push(e.temp.author[r].id);e.temp.author=a.toString()}if(e.temp.childJobId){var o=[];for(var i in e.temp.childJobId)o.push(e.temp.childJobId[i].id);e.temp.childJobId=o.toString()}if(e.temp.parentJobId){var n=[];for(var s in e.temp.parentJobId)n.push(e.temp.parentJobId[s].id);e.temp.parentJobId=n.toString()}e.temp.jobJson=e.jobJson,e.temp.glueSource=e.glueSource,e.temp.executorHandler="BEAN"===e.temp.glueType?"executorJobHandler":"",e.partitionField&&(e.temp.partitionInfo=e.partitionField+","+e.timeOffset+","+e.timeFormatType),l["a"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Created Successfully",type:"success",duration:2e3})}))}}))},handlerUpdate:function(e){var t=this;this.resetTemp(),this.temp=Object.assign({},e),this.temp.jobJson&&(this.jobJson=JSON.parse(this.temp.jobJson)),this.glueSource=this.temp.glueSource;var a=[],r=[],o=[],i=[];if(this.JobIdList){for(var l in this.JobIdList)this.JobIdList[l].id!==this.temp.id&&i.push(this.JobIdList[l]);this.JobIdList=i}if(this.temp.author){var n=this.temp.author.split(",");for(var s in n)for(var u in this.authorList)this.authorList[u].id==n[s]&&a.push(this.authorList[u]);this.temp.author=a}if(this.temp.childJobId){var c=this.temp.childJobId.split(",");for(var p in console.log(c),console.log(this.JobIdList),c)for(var d in this.JobIdList)this.JobIdList[d].id==c[p]&&r.push(this.JobIdList[d]);this.temp.childJobId=r}if(console.log(this.temp.childJobId),this.temp.parentJobId){var m=this.temp.parentJobId.split(",");for(var f in m)for(var h in this.JobIdList)this.JobIdList[h].id==m[f]&&o.push(this.JobIdList[h]);this.temp.parentJobId=o}if(this.temp.partitionInfo){var b=this.temp.partitionInfo.split(",");this.partitionField=b[0],this.timeOffset=b[1],this.timeFormatType=b[2]}this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},updateData:function(){var e=this;this.$refs["dataForm"].validate((function(t){if(t){if(e.temp.author){var a=[];for(var r in e.temp.author)a.push(e.temp.author[r].id);e.temp.author=a.toString()}if(e.temp.childJobId){var o=[];for(var i in e.temp.childJobId)o.push(e.temp.childJobId[i].id);e.temp.childJobId=o.toString()}if(e.temp.parentJobId){var n=[];for(var s in e.temp.parentJobId)n.push(e.temp.parentJobId[s].id);e.temp.parentJobId=n.toString()}e.temp.executorHandler="BEAN"===e.temp.glueType?"executorJobHandler":"",e.temp.jobJson="string"!==typeof e.jobJson?JSON.stringify(e.jobJson):e.jobJson,e.temp.glueSource=e.glueSource,e.partitionField&&(e.temp.partitionInfo=e.partitionField+","+e.timeOffset+","+e.timeFormatType),l["k"](e.temp).then((function(){e.fetchData(),e.dialogFormVisible=!1,e.$notify({title:"Success",message:"Update Successfully",type:"success",duration:2e3})}))}}))},handlerDelete:function(e){var t=this;this.$confirm("确定删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){l["g"](e.id).then((function(e){t.fetchData(),t.$notify({title:"Success",message:"Delete Successfully",type:"success",duration:2e3})}))}))},handlerExecute:function(e){var t=this;this.$confirm("确定执行吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a={};a.jobId=e.id,a.executorParam=e.executorParam,l["j"](a).then((function(e){t.$notify({title:"Success",message:"Execute Successfully",type:"success",duration:2e3})}))}))},handlerViewLog:function(e){this.$router.push({path:"/datax/log/jobLog",query:{jobId:e.id}})},handlerStart:function(e){var t=this;l["h"](e.id).then((function(e){t.$notify({title:"Success",message:"Start Successfully",type:"success",duration:2e3})}))},handlerStop:function(e){var t=this;l["i"](e.id).then((function(e){t.$notify({title:"Success",message:"Start Successfully",type:"success",duration:2e3})}))},changeSwitch:function(e){1===e.triggerStatus?this.handlerStart(e):this.handlerStop(e)},nextTriggerTime:function(e){var t=this;l["f"](e.jobCron).then((function(e){var a=e.content;t.triggerNextTimes=a.join("<br>")}))},loadById:function(e){var t=this;i["e"](e.jobGroup).then((function(e){t.registerNode=[];var a=e.content;t.registerNode.push(a)}))}}},C=$,F=(a("fe6f"),Object(b["a"])(C,r,o,!1,null,null,null));t["default"]=F.exports},c319:function(e,t,a){},cd86:function(e,t,a){},dce6:function(e,t,a){"use strict";var r=a("44c8"),o=a.n(r);o.a},e498:function(e,t,a){"use strict";var r=a("7456"),o=a.n(r);o.a},fa7e:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"json-editor"},[a("textarea",{ref:"textarea"})])},o=[],i=a("56b3"),l=a.n(i);a("0dd0"),a("a7be"),a("acdf"),a("f9d4"),a("8822"),a("d2de");a("ae67");var n={name:"JsonEditor",props:["value"],data:function(){return{jsonEditor:!1}},watch:{value:function(e){var t=this.jsonEditor.getValue();e!==t&&this.jsonEditor.setValue(JSON.stringify(this.value,null,2))}},mounted:function(){var e=this;this.jsonEditor=l.a.fromTextArea(this.$refs.textarea,{lineNumbers:!0,mode:"application/json",gutters:["CodeMirror-lint-markers"],theme:"rubyblue",lint:!0}),this.jsonEditor.setValue(JSON.stringify(this.value,null,2)),this.jsonEditor.on("change",(function(t){e.$emit("changed",t.getValue()),e.$emit("input",t.getValue())}))},methods:{getValue:function(){return this.jsonEditor.getValue()}}},s=n,u=(a("222c"),a("2877")),c=Object(u["a"])(s,r,o,!1,null,"7b489788",null);t["a"]=c.exports},fab6:function(e,t,a){"use strict";var r=a("05ce"),o=a.n(r);o.a},fe6f:function(e,t,a){"use strict";var r=a("c319"),o=a.n(r);o.a}}]);