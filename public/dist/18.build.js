webpackJsonp([18],{107:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var remind={template:"#remind"};__webpack_exports__.default={data:function(){return{remindMsg:!1,hour:20,minute:30}},mounted:function mounted(){var _this=this;this.$http({method:"GET",url:web.API_PATH+"user/find/user/remind/by/user/id/[userId]"}).then(function(data){if(null!==data.data.data){_this.remindMsg=eval(data.data.data);var time=_this.remindMsg.remindtime;time=time.split(":"),_this.hour=time[0],_this.minute=time[1]}},function(e){})},methods:{showTime:function(){var e=this;if(e.remindMsg){for(var i,t=[],s=0;s<24;s++)i=s<10?{label:"0"+s,value:"0"+s}:{label:""+s,value:""+s},t.push(i);var n=[];for(s=0;s<60;s++)i=s<10?{label:"0"+s,value:"0"+s}:{label:""+s,value:""+s},n.push(i);weui.picker(t,n,{onConfirm:function(i){e.hour=i[0].value,e.minute=i[1].value}})}},setRemindTime:function(){var e=this;e.remindMsg?this.$http.post(web.API_PATH+"user/save/user/remind",{remindTime:e.hour+":"+e.minute,userId:"",id:""},{emulateJSON:!0}).then(function(e){xqzs.weui.toast("success","修改成功",function(){window.location.href="#/"})}):this.$http.delete(web.API_PATH+"user/delete/user/remind/by/user/id/[userId]").then(function(e){xqzs.weui.toast("success","修改成功",function(){window.location.href="#/"})})}}}},118:function(e,i,t){i=e.exports=t(1)(),i.push([e.i,".top20_box{padding-top:20px}.remind{height:50px;padding:0 15px;background:#fff;margin-bottom:1px;line-height:50px}.switchFlag{float:right}.remind span{font-size:15px;color:#333}.remind div,.remind switch{float:right}.remind div span{margin-right:4px}",""])},170:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"top20_box"},[t("div",{staticClass:"remind"},[t("span",[e._v("提醒功能")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.remindMsg,expression:"remindMsg"}],staticClass:"weui-switch switchFlag",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.remindMsg)?e._i(e.remindMsg,null)>-1:e.remindMsg},on:{__c:function(i){var t=e.remindMsg,s=i.target,n=!!s.checked;if(Array.isArray(t)){var r=e._i(t,null);n?r<0&&(e.remindMsg=t.concat(null)):r>-1&&(e.remindMsg=t.slice(0,r).concat(t.slice(r+1)))}else e.remindMsg=n}}})]),e._v(" "),t("div",{staticClass:"remind",on:{click:function(i){e.showTime()}}},[t("span",[e._v("时间设定")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.remindMsg,expression:"remindMsg"}]},[t("span",{staticClass:" hours showPicker"},[e._v(e._s(e.hour))]),e._v(" "),t("span",[e._v(":")]),e._v(" "),t("span",{staticClass:"minutes showPicker"},[e._v(e._s(e.minute))])])]),e._v(" "),t("a",{staticClass:"me_bottom weui-btn weui-btn_primary",on:{click:function(i){e.setRemindTime()}}},[e._v("提交")])])},staticRenderFns:[]}},194:function(e,i,t){var s=t(118);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);t(2)("76ffbce8",s,!0)},57:function(e,i,t){t(194);var s=t(0)(t(107),t(170),null,null);e.exports=s.exports}});
//# sourceMappingURL=18.build.js.map