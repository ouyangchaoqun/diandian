webpackJsonp([25],{108:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var friendSet={template:"#friendSet"};__webpack_exports__.default={data:function(){return{hour:"10",minute:"20",user:{},isNotLookFriend:!1,isNotLookMe:!1,memoNameLink:null,isSpecial:!1}},mounted:function mounted(){var _this=this,friendId=this.$route.query.friendId;console.log(friendId),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/friend/set/_userId_/"+friendId}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),1==_this.user.isSpecial?_this.isSpecial=!0:_this.isSpecial=!1,_this.isNotLookFriend=!_this.user.isLookFriend,_this.isNotLookMe=!_this.user.isLookMe,_this.memoNameLink="/me/friendsCount/friendSet/setName/?friendId="+_this.user.userId,console.log(_this.user))},function(e){})},filters:{shortName:function(e,t){return xqzs.shortname(e,t)}},methods:{bigFace:function(){var e=this;wx.previewImage({current:e.user.faceUrl,urls:[e.user.faceUrl]})},special:function(e){var t=this;t.isSpecial=e.target.checked;var i=void 0;1==t.isSpecial&&(i=0),0==t.isSpecial&&(i=1),t.$http.post(web.API_PATH+"user/set/friend/special/_userId_/"+t.user.userId+"/"+i).then(function(e){e.data.status},function(e){})},lookMe:function(e){var t=this;t.isNotLookMe=e.target.checked;var i=void 0;!0===t.isNotLookMe&&(i=1),!1===t.isNotLookMe&&(i=0),t.$http.post(web.API_PATH+"user/set/friend/look/me/_userId_/"+t.user.userId+"/"+i).then(function(e){e.data.status},function(e){})},lookFriend:function(e){var t=this;t.isNotLookFriend=e.target.checked;var i=void 0;!0===t.isNotLookFriend&&(i=1),!1===t.isNotLookFriend&&(i=0),t.$http.post(web.API_PATH+"user/set/friend/look/friend/_userId_/"+t.user.userId+"/"+i).then(function(e){e.data.status},function(e){})}}}},138:function(e,t,i){t=e.exports=i(0)(),t.push([e.i,'.friendSet .weui-cells{margin-top:15px}.friendSet .weui-cells:before{border-top:1px solid #eee;-webkit-transform:scaleY(1);transform:scaleY(1)}.friendSet .weui-cells:after{border-bottom:1px solid #eee;-webkit-transform:scaleY(1);transform:scaleY(1)}.friendSet .weui-cell{font-size:15px}.friendSetList1{height:60px;padding:10px 15px;background:#fff;margin-top:12px;position:relative}.friendSetImg{height:60px;width:60px;border-radius:5px;float:left}.friendnickname{float:left;margin-left:13px;padding-top:6px}.friendSet .nickname{font-size:16px;color:#333;line-height:18px;margin-bottom:8px}.Remarks{font-size:14px;color:#868686}.setList{height:44px;background:#fff;line-height:44px;color:#333;font-size:15px;display:block;padding:0 15px;position:relative;margin-top:15px}.friendSetList1:after,.friendSetList1:before,.setList:after,.setList:before{width:100%;content:" ";background:#eee;display:block;height:1px;overflow:hidden;position:absolute;top:0;left:0}.friendSetList1:after,.setList:after{top:inherit;bottom:0}.setListLast:before{display:none}.setList img{position:absolute;height:20px;width:20px;display:block;right:20px;top:50%;margin-top:-10px}.setListLast{margin-top:0}.setFlag{position:absolute;right:15px;top:0;margin-top:7px}',""])},189:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"friendSet"},[i("div",{directives:[{name:"title",rawName:"v-title"}]},[e._v("好友设置")]),e._v(" "),i("div",{staticClass:"friendSetList1"},[i("img",{staticClass:"friendSetImg",attrs:{src:e.user.faceUrl,alt:""},on:{click:function(t){e.bigFace()}}}),e._v(" "),i("div",{staticClass:"friendnickname"},[e.user.memoName&&""!=e.user.memoName?i("div",{staticClass:"nickname"},[e._v(e._s(e._f("shortName")(e.user.memoName,12)))]):e._e(),e._v(" "),e.user.memoName&&""!=e.user.memoName?e._e():i("div",{staticClass:"nickname"},[e._v(e._s(e._f("shortName")(e.user.nickName,12)))]),e._v(" "),e.user.memoName&&""!=e.user.memoName?i("div",{staticClass:"Remarks"},[e._v("昵称："+e._s(e._f("shortName")(e.user.nickName,12)))]):e._e(),e._v(" "),e.user.memoName&&""!=e.user.memoName?e._e():i("div",{staticClass:"Remarks"},[e._v("备注：")])])]),e._v(" "),i("div",{staticClass:"weui-cells"},[i("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:e.memoNameLink}},[i("div",{staticClass:"weui-cell__bd"},[i("div",[e._v("设置备注名")])]),e._v(" "),i("div",{staticClass:"weui-cell__ft"})])],1),e._v(" "),i("div",{staticClass:"setList"},[i("div",[e._v("特别关心")]),e._v(" "),i("input",{staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:e.isSpecial},on:{change:function(t){e.special(t)}}})]),e._v(" "),i("div",{staticClass:"setList"},[i("div",[e._v("不看他的心情记录")]),e._v(" "),i("input",{staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:e.isNotLookFriend},on:{change:function(t){e.lookFriend(t)}}})]),e._v(" "),i("div",{staticClass:"setList setListLast"},[i("div",[e._v("不让TA看我的心情记录")]),e._v(" "),i("input",{staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:e.isNotLookMe},on:{change:function(t){e.lookMe(t)}}})])])},staticRenderFns:[]}},218:function(e,t,i){var s=i(138);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(2)("8fb609bc",s,!0)},49:function(e,t,i){i(218);var s=i(1)(i(108),i(189),null,null);e.exports=s.exports}});
//# sourceMappingURL=25.build.js.map?47c71