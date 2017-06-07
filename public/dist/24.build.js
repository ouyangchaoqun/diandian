webpackJsonp([24],{103:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var friendSet={template:"#friendSet"};__webpack_exports__.default={data:function(){return{hour:"10",minute:"20",user:{},isNotLookFriend:null,isNotLookMe:null,memoNameLink:null}},mounted:function mounted(){var _this=this,friendId=this.$route.query.friendId;console.log(friendId),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/friend/set/_userId_/"+friendId}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),_this.isNotLookFriend=!_this.user.isLookFriend,_this.isNotLookMe=!_this.user.isLookMe,_this.memoNameLink="/me/friendsCount/friendSet/setName/?friendId="+_this.user.userId,console.log(_this.user))},function(e){})},methods:{special:function(){var e=this,i=void 0;1==e.user.isSpecial&&(i=1),0==e.user.isSpecial&&(i=0),e.$http.post(web.API_PATH+"user/set/friend/special/_userId_/"+e.user.userId+"/"+i).then(function(e){e.data.status},function(e){})},lookMe:function(){var e=this,i=void 0;!0===e.isNotLookMe&&(i=0),!1===e.isNotLookMe&&(i=1),e.$http.post(web.API_PATH+"user/set/friend/look/me/_userId_/"+e.user.userId+"/"+i).then(function(e){e.data.status},function(e){})},lookFriend:function(){var e=this,i=void 0;!0===e.isNotLookFriend&&(i=0),!1===e.isNotLookFriend&&(i=1),e.$http.post(web.API_PATH+"user/set/friend/look/friend/_userId_/"+e.user.userId+"/"+i).then(function(e){e.data.status},function(e){})}}}},133:function(e,i,s){i=e.exports=s(1)(),i.push([e.i,".friendSetList1{height:60px;padding:10px 15px;background:#fff;margin-top:15px}.friendSetImg{height:60px;width:60px;border-radius:5px;float:left}.friendnickname{float:left;margin-left:15px;padding-top:5px}.nickname{font-size:15px;color:#333;margin-bottom:5px}.Remarks{font-size:12px;color:#868686}.setList{height:44px;background:#fff;line-height:44px;color:#333;font-size:15px;display:block;padding:0 15px;position:relative;margin-top:17px}.setList img{position:absolute;height:20px;width:20px;display:block;right:20px;top:50%;margin-top:-10px}.setListLast{margin-top:1px}.setFlag{position:absolute;right:15px;top:0;margin-top:7px}",""])},183:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",[s("div",{staticClass:"friendSetList1"},[s("img",{staticClass:"friendSetImg",attrs:{src:e.user.faceUrl,alt:""}}),e._v(" "),s("div",{staticClass:"friendnickname"},[e.user.memoName&&""!=e.user.memoName?s("div",{staticClass:"nickname"},[e._v(e._s(e.user.memoName))]):e._e(),e._v(" "),e.user.memoName&&""!=e.user.memoName?e._e():s("div",{staticClass:"nickname"},[e._v(e._s(e.user.nickName))]),e._v(" "),e.user.memoName&&""!=e.user.memoName?s("div",{staticClass:"Remarks"},[e._v("昵称："+e._s(e.user.nickName))]):e._e(),e._v(" "),e.user.memoName&&""!=e.user.memoName?e._e():s("div",{staticClass:"Remarks"},[e._v("备注：")])])]),e._v(" "),s("div",{staticClass:"weui-cells"},[s("router-link",{staticClass:"weui-cell weui-cell_access",attrs:{to:e.memoNameLink}},[s("div",{staticClass:"weui-cell__bd"},[s("div",[e._v("设置备注名")])]),e._v(" "),s("div",{staticClass:"weui-cell__ft"})])],1),e._v(" "),s("div",{staticClass:"setList"},[s("div",[e._v("特别关心")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.isSpecial,expression:"user.isSpecial"}],staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.user.isSpecial)?e._i(e.user.isSpecial,null)>-1:e.user.isSpecial},on:{click:function(i){e.special()},__c:function(i){var s=e.user.isSpecial,t=i.target,o=!!t.checked;if(Array.isArray(s)){var a=e._i(s,null);o?a<0&&(e.user.isSpecial=s.concat(null)):a>-1&&(e.user.isSpecial=s.slice(0,a).concat(s.slice(a+1)))}else e.user.isSpecial=o}}})]),e._v(" "),s("div",{staticClass:"setList"},[s("div",[e._v("不看他的心情记录")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isNotLookFriend,expression:"isNotLookFriend"}],staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isNotLookFriend)?e._i(e.isNotLookFriend,null)>-1:e.isNotLookFriend},on:{click:function(i){e.lookFriend()},__c:function(i){var s=e.isNotLookFriend,t=i.target,o=!!t.checked;if(Array.isArray(s)){var a=e._i(s,null);o?a<0&&(e.isNotLookFriend=s.concat(null)):a>-1&&(e.isNotLookFriend=s.slice(0,a).concat(s.slice(a+1)))}else e.isNotLookFriend=o}}})]),e._v(" "),s("div",{staticClass:"setList setListLast"},[s("div",[e._v("不让TA看我的心情记录")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.isNotLookMe,expression:"isNotLookMe"}],staticClass:"weui-switch setFlag",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isNotLookMe)?e._i(e.isNotLookMe,null)>-1:e.isNotLookMe},on:{click:function(i){e.lookMe()},__c:function(i){var s=e.isNotLookMe,t=i.target,o=!!t.checked;if(Array.isArray(s)){var a=e._i(s,null);o?a<0&&(e.isNotLookMe=s.concat(null)):a>-1&&(e.isNotLookMe=s.slice(0,a).concat(s.slice(a+1)))}else e.isNotLookMe=o}}})])])},staticRenderFns:[]}},210:function(e,i,s){var t=s(133);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);s(2)("8fb609bc",t,!0)},46:function(e,i,s){s(210);var t=s(0)(s(103),s(183),null,null);e.exports=t.exports}});
//# sourceMappingURL=24.build.js.map