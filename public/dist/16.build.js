webpackJsonp([16],{152:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{hour:"08",minute:"00",isSub:!1,detail:{}}},beforeCreate:function(){console.log("beforeCreate");var i=this,t=i.$route.params.id;this.$http({method:"GET",url:web.API_PATH+"subscribe/query/detail/with/user/"+t+"/_userId_"}).then(function(t){console.log(t),i.detail=t.data.data,console.log(i.detail),i.detail.remindtime=i.detail.remindtime||"08:00";var e=i.detail.remindtime.split(":");console.log(e),i.hour=e[0],i.minute=e[1]},function(i){})},methods:{showTime:function(){var i=this;if(1!=i.detail.issubscribe){for(var t,e=[],s=0;s<24;s++)t=s<10?{label:"0"+s,value:"0"+s}:{label:""+s,value:""+s},e.push(t);var o=[];for(s=0;s<60;s++)t=s<10?{label:"0"+s,value:"0"+s}:{label:""+s,value:""+s},o.push(t);weui.picker(e,o,{onConfirm:function(t){var e={subscriptionId:i.detail.id,userId:"",remindTime:i.hour+":"+i.minute};console.log(e),i.hour=t[0].value,i.minute=t[1].value,i.$http.put(web.API_PATH+"subscribe/subscribe",e).then(function(i){console.log(i)})}})}},setRemindTime:function(){var i=this,t={subscriptionId:this.$route.params.id,userId:"",remindTime:this.hour+":"+this.minute};console.log(t),i.$http.put(web.API_PATH+"subscribe/subscribe",t).then(function(t){console.log(t),xqzs.weui.toast("success","订阅成功",function(){i.$router.push("/me/subscribe")})})}}}},155:function(i,t,e){t=i.exports=e(1)(),t.push([i.i,".subscribeList_box{height:100%;background:#f4f4f8}.subscribeList_header{position:relative}.subscribeList_header img{display:block}.subscribeList_header img:first-of-type{height:90px;width:100%}.subscribeList_header img:nth-of-type(2){height:60px;position:absolute;left:50%;margin-left:-30px;top:60px}.subscribeList_header div{font-size:12px;color:#fff;text-align:center;position:absolute;top:33px;width:200px;left:50%;margin-left:-100px}.subscribeListMiddle{height:90px;background:#fff;padding-top:50px;text-align:left;font-size:12px;color:#999;margin-bottom:15px}.description{height:54px;overflow-y:scroll}.subscribeListMiddle h3{font-size:15px;line-height:15px;color:#333;margin-bottom:12px;text-align:center}.subscribeListMiddle div{padding:0 25px;line-height:18px}.subscribeListBottom{height:100px;background:#fff;padding-left:15px;margin-bottom:30px}.subscribeListBottom div{height:49px;line-height:49px;border-bottom:1px solid #e5e5e5;font-size:16px;font-weight:600;color:#333}.subscribeListBottom .timeSet{border:0;height:50px;line-height:50px;font-size:15px;font-weight:400;padding-right:15px}.subscribeListSet{padding:0 15px}.showPicker{font-size:15px}.timeSet .timeSetRight{float:right;border:0;font-weight:400;margin-right:13px;color:#999}.timeSet img{float:right;height:16px;margin-top:18px}.weui-picker{z-index:10005}",""])},229:function(i,t,e){i.exports={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",[s("div",{staticClass:"subscribeList_box"},[s("div",{staticClass:"subscribeList_header"},[s("img",{attrs:{src:i.detail.cover,alt:""}}),i._v(" "),s("img",{attrs:{src:i.detail.icon,alt:""}}),i._v(" "),s("div",[i._v(i._s(i.detail.subscribecount)+"人已订阅")])]),i._v(" "),s("div",{staticClass:"subscribeListMiddle"},[s("h3",[i._v(i._s(i.detail.title))]),i._v(" "),s("div",{staticClass:"description"},[i._v(i._s(i.detail.description))])]),i._v(" "),s("div",{staticClass:"subscribeListBottom"},[s("div",[i._v("推送设置")]),i._v(" "),s("div",{staticClass:"timeSet",on:{click:function(t){i.showTime()}}},[i._v("时间设定\n            "),s("img",{attrs:{src:e(74),alt:""}}),i._v(" "),s("div",{staticClass:"timeSetRight"},[s("span",{staticClass:" hours showPicker"},[i._v(i._s(i.hour))]),i._v("\n                :\n                "),s("span",{staticClass:"minutes showPicker"},[i._v(i._s(i.minute))])])])]),i._v(" "),s("div",{staticClass:"subscribeListSet"},[1==!i.detail.issubscribe?s("button",{staticClass:"weui-btn weui-btn_primary",on:{click:function(t){i.setRemindTime()}}},[i._v("订阅")]):i._e(),i._v(" "),1==i.detail.issubscribe?s("button",{staticClass:"weui-btn weui-btn_primary weui-btn_disabled"},[i._v("已订阅")]):i._e()])])])},staticRenderFns:[]}},261:function(i,t,e){var s=e(155);"string"==typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);e(2)("39aa831b",s,!0)},72:function(i,t,e){e(261);var s=e(0)(e(152),e(229),null,null);i.exports=s.exports},74:function(i,t,e){i.exports=e.p+"me_jt.png"}});
//# sourceMappingURL=16.build.js.map?cba42