webpackJsonp([17],{139:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.default={data:function(){return{hour:"",minute:"",isSub:!1,unsubscribe_box:!1,dataArray:[],issubscribe:"",detail:{}}},beforeCreate:function(){console.log("beforeCreate");var t=this,i=t.$route.params.id;this.$http({method:"GET",url:web.API_PATH+"subscribe/query/detail/with/user/"+i+"/_userId_"}).then(function(i){console.log(i),t.detail=i.data.data,t.detail.remindtime=t.detail.remindtime||"08:00";var e=t.detail.remindtime.split(":");t.hour=e[0],t.minute=e[1]},function(t){})},methods:{showTime:function(){for(var t,i=this,e=[],s=0;s<24;s++)t=s<10?{label:"0"+s,value:"0"+s}:{label:""+s,value:""+s},e.push(t);var o=[];for(s=0;s<60;s++)t=s<10?{label:"0"+s,value:"0"+s}:{label:""+s,value:""+s},o.push(t);weui.picker(e,o,{onConfirm:function(t){i.hour=t[0].value,i.minute=t[1].value;var e={subscriptionId:i.detail.id,userId:"",remindTime:i.hour+":"+i.minute};console.log(e),i.$http.put(web.API_PATH+"subscribe/subscribe",e).then(function(t){console.log(t),xqzs.weui.toast("success","设置成功",function(){})})}})},show_unsubscribeBox:function(){var t=this;xqzs.weui.actionSheet("确定要取消订阅该内容吗？","取消订阅",function(){var i={subscriptionId:t.$route.params.id,userId:""};t.$http.put(web.API_PATH+"subscribe/unsubscribe",i).then(function(i){console.log(i),xqzs.weui.toast("success","取消成功",function(){t.$router.go(-1)})})},function(){})}}}},152:function(t,i,e){i=t.exports=e(0)(),i.push([t.i,".subscribeList_box{height:100%;background:#f4f4f8}.subscribeList_header{position:relative}.subscribeList_header img{display:block}.subscribeList_header img:first-of-type{height:90px;width:100%}.subscribeList_header img:nth-of-type(2){height:60px;position:absolute;left:50%;margin-left:-30px;top:60px}.subscribeList_header div{font-size:12px;color:#fff;text-align:center;position:absolute;top:33px;width:200px;left:50%;margin-left:-100px}.subscribeListMiddle{height:90px;background:#fff;padding-top:50px;text-align:left;font-size:12px;color:#999;margin-bottom:15px}.subscribeListMiddle h3{font-size:15px;line-height:15px;color:#333;margin-bottom:12px;text-align:center}.subscribeListMiddle div{padding:0 25px;line-height:18px;height:54px;overflow-y:scroll}.subscribeListBottom{height:100px;background:#fff;padding-left:15px;margin-bottom:30px}.subscribeListBottom div{height:49px;line-height:49px;border-bottom:1px solid #e5e5e5;font-size:16px;font-weight:600;color:#333}.subscribeListBottom .timeSet{border:0;height:50px;line-height:50px;font-size:15px;font-weight:400;padding-right:15px}.subscribeListSet{padding:0 15px}.subBtn:active{background:rgba(0,0,0,.2)}.showPicker{font-size:15px}.timeSet .timeSetRight{float:right;border:0;font-weight:400;margin-right:13px;color:#999}.timeSet img{float:right;height:16px;margin-top:18px}.weui-picker{z-index:10005}.subBtn{color:#999}.unsubscribe{color:red}",""])},224:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"subscribeList_box"},[s("div",{staticClass:"subscribeList_header"},[s("img",{attrs:{src:t.detail.cover,alt:""}}),t._v(" "),s("img",{attrs:{src:t.detail.icon,alt:""}}),t._v(" "),s("div",[t._v(t._s(t.detail.subscribecount)+"人已订阅")])]),t._v(" "),s("div",{staticClass:"subscribeListMiddle"},[s("h3",[t._v(t._s(t.detail.title))]),t._v(" "),s("div",[t._v(t._s(t.detail.description))])]),t._v(" "),s("div",{staticClass:"subscribeListBottom"},[s("div",[t._v("推送设置")]),t._v(" "),s("div",{staticClass:"timeSet",on:{click:function(i){t.showTime()}}},[t._v("时间设定\n                "),s("img",{attrs:{src:e(74),alt:""}}),t._v(" "),s("div",{staticClass:"timeSetRight"},[s("span",{staticClass:"hours showPicker"},[t._v(t._s(t.hour))]),t._v("\n                    :\n                    "),s("span",{staticClass:"minutes showPicker"},[t._v(t._s(t.minute))])])])]),t._v(" "),s("div",{staticClass:"subscribeListSet"},[s("button",{staticClass:"weui-btn subBtn",on:{click:t.show_unsubscribeBox}},[t._v("取消订阅")])])])])},staticRenderFns:[]}},256:function(t,i,e){var s=e(152);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(2)("563f9258",s,!0)},71:function(t,i,e){e(256);var s=e(1)(e(139),e(224),null,null);t.exports=s.exports},74:function(t,i,e){t.exports=e.p+"me_jt.png"}});
//# sourceMappingURL=17.build.js.map?535cc