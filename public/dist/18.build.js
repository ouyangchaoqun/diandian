webpackJsonp([18],{126:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var remind={template:"#remind"};__webpack_exports__.default={data:function(){return{remindMsg:!1,hour:20,minute:30,isRemind:!1}},beforeCreate:function beforeCreate(){console.log("beforeCreate");var _this=this;this.$http({method:"GET",url:web.API_PATH+"user/find/user/remind/by/user/id/_userId_"}).then(function(data){if(console.log(data.data),null!==data.data.data){_this.remindMsg=eval(data.data.data);var time=_this.remindMsg.remindtime;time=time.split(":"),_this.hour=time[0],_this.minute=time[1],_this.isRemind=!0}},function(e){})},created:function(){console.log("created")},beforeMount:function(){console.log("beforeMount")},mounted:function(){},methods:{showTime:function(){var e=this;if(e.isRemind){for(var i,t=[],n=0;n<24;n++)i=n<10?{label:"0"+n,value:"0"+n}:{label:""+n,value:""+n},t.push(i);var s=[];for(n=0;n<60;n++)i=n<10?{label:"0"+n,value:"0"+n}:{label:""+n,value:""+n},s.push(i);weui.picker(t,s,{onConfirm:function(i){console.log(i),e.hour=""!==i[0].value?i[0].value:i[0],e.minute=""!==i[1].value?i[1].value:i[1]}})}},setRemindTime:function(){var e=this;e.isRemind&&this.$http.post(web.API_PATH+"user/save/user/remind",{remindTime:e.hour+":"+e.minute,userId:"",id:""},{emulateJSON:!0}).then(function(i){xqzs.weui.toast("success","设置成功",function(){e.$router.go(-1)})})},change:function(e){this.isRemind=e.target.checked,console.log(this.isRemind),!1===this.isRemind&&this.$http.delete(web.API_PATH+"user/delete/user/remind/by/user/id/_userId_").then(function(e){console.log("del")})}}}},136:function(e,i,t){i=e.exports=t(0)(),i.push([e.i,".remind_box{background:#f4f4f8}.remind{height:54px;padding-left:15px;background:#fff;line-height:54px}.remind1{margin-top:12px;overflow:hidden}.remind1,.remind2{border-bottom:1px solid #eee}.switchFlag{float:right;margin-top:11px;margin-right:15px}.remind span{font-size:15px;color:#333}.remind switch{float:right}.remind div{float:right;margin-right:15px}.me_bottom{margin:0 15px;margin-top:30px}",""])},187:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"remind_box"},[t("div",{directives:[{name:"title",rawName:"v-title"}]},[e._v("定时提醒")]),e._v(" "),t("div",{staticClass:"remind remind1"},[t("span",[e._v("提醒功能")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.isRemind,expression:"isRemind"}],staticClass:"weui-switch switchFlag",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isRemind)?e._i(e.isRemind,null)>-1:e.isRemind},on:{change:function(i){e.change(i)},__c:function(i){var t=e.isRemind,n=i.target,s=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);s?r<0&&(e.isRemind=t.concat(null)):r>-1&&(e.isRemind=t.slice(0,r).concat(t.slice(r+1)))}else e.isRemind=s}}})]),e._v(" "),t("div",{staticClass:"remind remind2",on:{click:function(i){e.showTime()}}},[t("span",[e._v("时间设定")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isRemind,expression:"isRemind"}]},[t("span",{staticClass:" hours showPicker"},[e._v(e._s(e.hour))]),e._v(" "),t("span",[e._v(":")]),e._v(" "),t("span",{staticClass:"minutes showPicker"},[e._v(e._s(e.minute))])])]),e._v(" "),e.isRemind?e._e():t("a",{staticClass:"me_bottom weui-btn weui-btn_primary weui-btn_disabled",on:{click:function(i){e.setRemindTime()}}},[e._v("提交")]),e._v(" "),e.isRemind?t("a",{staticClass:"me_bottom weui-btn weui-btn_primary",on:{click:function(i){e.setRemindTime()}}},[e._v("提交")]):e._e()])},staticRenderFns:[]}},215:function(e,i,t){var n=t(136);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(2)("76ffbce8",n,!0)},63:function(e,i,t){t(215);var n=t(1)(t(126),t(187),null,null);e.exports=n.exports}});
//# sourceMappingURL=18.build.js.map?d963c