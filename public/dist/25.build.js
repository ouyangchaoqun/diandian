webpackJsonp([25],{107:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var friendSet={template:"#friendSet"};__webpack_exports__.default={data:function(){return{hour:"10",minute:"20",user:{},isNotLookFriend:!1,isNotLookMe:!1,memoNameLink:null}},mounted:function mounted(){var _this=this,friendId=this.$route.query.friendId;console.log(friendId),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/friend/set/_userId_/"+friendId}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),_this.isNotLookFriend=!_this.user.isLookFriend,_this.isNotLookMe=!_this.user.isLookMe,_this.memoNameLink="/me/friendsCount/friendSet/setName/?friendId="+_this.user.userId,console.log(_this.user))},function(e){})},methods:{special:function(e){var t=this;t.user.isSpecial=e.target.checked;var s=void 0;1==t.user.isSpecial&&(s=0),0==t.user.isSpecial&&(s=1),t.$http.post(web.API_PATH+"user/set/friend/special/_userId_/"+t.user.userId+"/"+s).then(function(e){e.data.status},function(e){})},lookMe:function(e){var t=this;t.isNotLookMe=e.target.checked;var s=void 0;!0===t.isNotLookMe&&(s=1),!1===t.isNotLookMe&&(s=0),t.$http.post(web.API_PATH+"user/set/friend/look/me/_userId_/"+t.user.userId+"/"+s).then(function(e){e.data.status},function(e){})},lookFriend:function(e){var t=this;t.isNotLookFriend=e.target.checked;var s=void 0;!0===t.isNotLookFriend&&(s=1),!1===t.isNotLookFriend&&(s=0),t.$http.post(web.API_PATH+"user/set/friend/look/friend/_userId_/"+t.user.userId+"/"+s).then(function(e){e.data.status},function(e){})}}}},137:function(e,t,s){t=e.exports=s(0)(),t.push([e.i,".friendSetList1{height:60px;padding:10px 15px;background:#fff;margin-top:15px}.friendSetImg{height:60px;width:60px;border-radius:5px;float:left}.friendnickname{float:left;margin-left:15px;padding-top:5px}.nickname{font-size:15px;color:#333;margin-bottom:5px}.Remarks{font-size:12px;color:#868686}.setList{height:44px;background:#fff;line-height:44px;color:#333;font-size:15px;display:block;padding:0 15px;position:relative;margin-top:17px}.setList img{position:absolute;height:20px;width:20px;display:block;right:20px;top:50%;margin-top:-10px}.setListLast{margin-top:1px}.setFlag{position:absolute;right:15px;top:0;margin-top:7px}",""])},185:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{directives:[{name:"title",rawName:"v-title"}]},[e._v("好友设置")]),e._v(" "),s("div",{staticClass:"friendSetList1"},[s("img",{staticClass:"friendSetImg",attrs:{src:e.user.faceUrl,alt:""}}),e._v(" "),s("div",{staticClass:"friendnickname"},[e.user.memoName&&""!=e.user.memoName?s("div",{staticClass:"nickname"},[e._v(e._s(e.user.memoName))]):e._e(),e._v(" "),e.user.memoName&&""!=e.user.memoName?e._e():s("div",{staticClass:"nickname"},[e._v(e._s(e.user.nickName))]),e._v(" "),e.user.memoName&&""!=e.user.memoName?s("div",{staticClass:"Remarks"},[e._v("昵称："+e._s(e.user.nickName))]):e._e(),e._v(" "),e.user.memoName&&""!=e.user.memoName?e._e():s("div",{staticClass:"Remarks"},[e._v("备注：")])])]),e._v(" "),s("div",{staticClass:"weui-cells"},[s("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:e.memoNameLink}},[s("div",{staticClass:"weui-cell__bd"},[s("div",[e._v("设置备注名")])]),e._v(" "),s("div",{staticClass:"weui-cell__ft"})])],1),e._v(" "),s("div",{staticClass:"setList"},[s("div",[e._v("特别关心")]),e._v(" "),s("input",{staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:e.user.isSpecial},on:{change:function(t){e.special(t)}}})]),e._v(" "),s("div",{staticClass:"setList"},[s("div",[e._v("不看他的心情记录")]),e._v(" "),s("input",{staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:e.isNotLookFriend},on:{change:function(t){e.lookFriend(t)}}})]),e._v(" "),s("div",{staticClass:"setList setListLast"},[s("div",[e._v("不让TA看我的心情记录")]),e._v(" "),s("input",{staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:e.isNotLookMe},on:{change:function(t){e.lookMe(t)}}})])])},staticRenderFns:[]}},214:function(e,t,s){var i=s(137);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(2)("8fb609bc",i,!0)},47:function(e,t,s){s(214);var i=s(1)(s(107),s(185),null,null);e.exports=i.exports}});
//# sourceMappingURL=25.build.js.map?24534279cd3a29dd9e65