webpackJsonp([19],{116:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var remind={template:"#remind"};__webpack_exports__.default={data:function(){return{remindMsg:!1,hour:20,minute:30}},mounted:function mounted(){var _this=this;this.$http({method:"GET",url:web.API_PATH+"user/find/user/remind/by/user/id/_userId_"}).then(function(data){if(null!==data.data.data){_this.remindMsg=eval(data.data.data);var time=_this.remindMsg.remindtime;time=time.split(":"),_this.hour=time[0],_this.minute=time[1]}},function(e){})},methods:{showTime:function(){var e=this;if(e.remindMsg){for(var i,t=[],n=0;n<24;n++)i=n<10?{label:"0"+n,value:"0"+n}:{label:""+n,value:""+n},t.push(i);var s=[];for(n=0;n<60;n++)i=n<10?{label:"0"+n,value:"0"+n}:{label:""+n,value:""+n},s.push(i);weui.picker(t,s,{onConfirm:function(i){e.hour=i[0].value,e.minute=i[1].value}})}},setRemindTime:function(){var e=this;e.remindMsg?this.$http.post(web.API_PATH+"user/save/user/remind",{remindTime:e.hour+":"+e.minute,userId:"",id:""},{emulateJSON:!0}).then(function(e){xqzs.weui.toast("success","修改成功",function(){window.location.href="#/"})}):this.$http.delete(web.API_PATH+"user/delete/user/remind/by/user/id/_userId_").then(function(e){xqzs.weui.toast("success","修改成功",function(){window.location.href="#/"})})}}}},127:function(e,i,t){i=e.exports=t(1)(),i.push([e.i,".top20_box{padding-top:20px;background:#f5f5f5}.remind{height:50px;padding:0 15px;background:#fff;margin-bottom:1px;line-height:50px}.switchFlag{float:right;margin-top:10px}.remind span{font-size:15px;color:#333}.remind div,.remind switch{float:right}.remind div span{margin-right:4px}",""])},178:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"top20_box"},[t("div",{staticClass:"remind"},[t("span",[e._v("提醒功能")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.remindMsg,expression:"remindMsg"}],staticClass:"weui-switch switchFlag",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.remindMsg)?e._i(e.remindMsg,null)>-1:e.remindMsg},on:{__c:function(i){var t=e.remindMsg,n=i.target,s=!!n.checked;if(Array.isArray(t)){var r=e._i(t,null);s?r<0&&(e.remindMsg=t.concat(null)):r>-1&&(e.remindMsg=t.slice(0,r).concat(t.slice(r+1)))}else e.remindMsg=s}}})]),e._v(" "),t("div",{staticClass:"remind",on:{click:function(i){e.showTime()}}},[t("span",[e._v("时间设定")]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.remindMsg,expression:"remindMsg"}]},[t("span",{staticClass:" hours showPicker"},[e._v(e._s(e.hour))]),e._v(" "),t("span",[e._v(":")]),e._v(" "),t("span",{staticClass:"minutes showPicker"},[e._v(e._s(e.minute))])])]),e._v(" "),t("a",{staticClass:"me_bottom weui-btn weui-btn_primary",on:{click:function(i){e.setRemindTime()}}},[e._v("提交")])])},staticRenderFns:[]}},205:function(e,i,t){var n=t(127);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(2)("76ffbce8",n,!0)},62:function(e,i,t){t(205);var n=t(0)(t(116),t(178),null,null);e.exports=n.exports}});
//# sourceMappingURL=19.build.js.map