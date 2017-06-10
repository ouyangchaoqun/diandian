webpackJsonp([25],{107:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var friendSet={template:"#friendSet"};__webpack_exports__.default={data:function(){return{hour:"10",minute:"20",user:{},isNotLookFriend:!1,isNotLookMe:!1,memoNameLink:null}},mounted:function mounted(){var _this=this,friendId=this.$route.query.friendId;console.log(friendId),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/friend/set/_userId_/"+friendId}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),_this.isNotLookFriend=!_this.user.isLookFriend,_this.isNotLookMe=!_this.user.isLookMe,_this.memoNameLink="/me/friendsCount/friendSet/setName/?friendId="+_this.user.userId,console.log(_this.user))},function(e){})},methods:{special:function(){var e=this,t=void 0;1==e.user.isSpecial&&(t=1),0==e.user.isSpecial&&(t=0),e.$http.post(web.API_PATH+"user/set/friend/special/_userId_/"+e.user.userId+"/"+t).then(function(e){e.data.status},function(e){})},lookMe:function(){var e=this,t=void 0;!0===e.isNotLookMe&&(t=0),!1===e.isNotLookMe&&(t=1),e.$http.post(web.API_PATH+"user/set/friend/look/me/_userId_/"+e.user.userId+"/"+t).then(function(e){e.data.status},function(e){})},lookFriend:function(){var e=this,t=void 0;!0===e.isNotLookFriend&&(t=0),!1===e.isNotLookFriend&&(t=1),e.$http.post(web.API_PATH+"user/set/friend/look/friend/_userId_/"+e.user.userId+"/"+t).then(function(e){e.data.status},function(e){})}}}},137:function(e,t,i){t=e.exports=i(0)(),t.push([e.i,".friendSetList1{height:60px;padding:10px 15px;background:#fff;margin-top:15px}.friendSetImg{height:60px;width:60px;border-radius:5px;float:left}.friendnickname{float:left;margin-left:15px;padding-top:5px}.nickname{font-size:15px;color:#333;margin-bottom:5px}.Remarks{font-size:12px;color:#868686}.setList{height:44px;background:#fff;line-height:44px;color:#333;font-size:15px;display:block;padding:0 15px;position:relative;margin-top:17px}.setList img{position:absolute;height:20px;width:20px;display:block;right:20px;top:50%;margin-top:-10px}.setListLast{margin-top:1px}.setFlag{position:absolute;right:15px;top:0;margin-top:7px}",""])},185:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"title",rawName:"v-title"}]},[e._v("好友设置")]),e._v(" "),i("div",{staticClass:"friendSetList1"},[i("img",{staticClass:"friendSetImg",attrs:{src:e.user.faceUrl,alt:""}}),e._v(" "),i("div",{staticClass:"friendnickname"},[e.user.memoName&&""!=e.user.memoName?i("div",{staticClass:"nickname"},[e._v(e._s(e.user.memoName))]):e._e(),e._v(" "),e.user.memoName&&""!=e.user.memoName?e._e():i("div",{staticClass:"nickname"},[e._v(e._s(e.user.nickName))]),e._v(" "),e.user.memoName&&""!=e.user.memoName?i("div",{staticClass:"Remarks"},[e._v("昵称："+e._s(e.user.nickName))]):e._e(),e._v(" "),e.user.memoName&&""!=e.user.memoName?e._e():i("div",{staticClass:"Remarks"},[e._v("备注：")])])]),e._v(" "),i("div",{staticClass:"weui-cells"},[i("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:e.memoNameLink}},[i("div",{staticClass:"weui-cell__bd"},[i("div",[e._v("设置备注名")])]),e._v(" "),i("div",{staticClass:"weui-cell__ft"})])],1),e._v(" "),i("div",{staticClass:"setList"},[i("div",[e._v("特别关心")]),e._v(" "),i("input",{staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:e.user.isSpecial},on:{change:function(t){e.user.isSpecial=t.target.checked},click:function(t){e.special()}}})]),e._v(" "),i("div",{staticClass:"setList"},[i("div",[e._v("不看他的心情记录")]),e._v(" "),i("input",{staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:e.isNotLookFriend},on:{change:function(t){e.isNotLookFriend=t.target.checked},click:function(t){e.lookFriend()}}})]),e._v(" "),i("div",{staticClass:"setList setListLast"},[i("div",[e._v("不让TA看我的心情记录")]),e._v(" "),i("input",{staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:e.isNotLookMe},on:{change:function(t){e.isNotLookMe=t.target.checked},click:function(t){e.lookMe()}}})])])},staticRenderFns:[]}},214:function(e,t,i){var s=i(137);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(2)("8fb609bc",s,!0)},47:function(e,t,i){i(214);var s=i(1)(i(107),i(185),null,null);e.exports=s.exports}});
//# sourceMappingURL=25.build.js.map?ccba717ebb25f02fd819