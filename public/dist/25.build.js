webpackJsonp([25],{145:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var privacy={template:"#privacy"};__webpack_exports__.default={data:function(){return{user:null,isNotLookFriend:!1,isNotLookMe:!1}},mounted:function mounted(){var _this=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),_this.isNotLookFriend=!_this.user.isLookFriend,_this.isNotLookMe=!_this.user.isLookMe)},function(o){}),xqzs.wx.setConfig(_this)},methods:{lookMe:function(o){var t=this;t.isNotLookMe=o.target.checked;var e=void 0;!0===t.isNotLookMe&&(e=1),!1===t.isNotLookMe&&(e=0),this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/me/_userId_/"+e}).then(function(o){o.data.status},function(o){})},lookFriend:function(o){var t=this;t.isNotLookFriend=o.target.checked;var e=void 0;!0===t.isNotLookFriend&&(e=1),!1===t.isNotLookFriend&&(e=0),this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/friend/_userId_/"+e}).then(function(o){o.data.status},function(o){})}}}},159:function(o,t,e){t=o.exports=e(1)(),t.push([o.i,".privacyList{margin-top:12px;background:#fff;border-top:1px solid #eee;border-bottom:1px solid #eee}.privacy_box{background:#f4f4f8}.privacy{height:52px;background:#fff;margin-left:15px;line-height:52px;position:relative}.privacy div{position:absolute;height:1px;background:#e5e5e5;bottom:0;width:100%}.privacy span{font-size:15px;color:#333}.privacyInput{float:right;margin-top:11px;margin-right:15px}.privacyTop{border-bottom:1px solid #eee}",""])},233:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"privacy_box"},[e("div",{directives:[{name:"title",rawName:"v-title"}]},[o._v("隐私设置")]),o._v(" "),e("div",{staticClass:"privacyList"},[e("div",{staticClass:"privacy privacyTop"},[e("span",[o._v("不看好友的心情记录")]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.isNotLookFriend,expression:"isNotLookFriend"}],staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.isNotLookFriend)?o._i(o.isNotLookFriend,null)>-1:o.isNotLookFriend},on:{change:function(t){o.lookFriend(t)},__c:function(t){var e=o.isNotLookFriend,i=t.target,s=!!i.checked;if(Array.isArray(e)){var r=o._i(e,null);s?r<0&&(o.isNotLookFriend=e.concat(null)):r>-1&&(o.isNotLookFriend=e.slice(0,r).concat(e.slice(r+1)))}else o.isNotLookFriend=s}}})]),o._v(" "),e("div",{staticClass:"privacy privacyBottom"},[e("span",[o._v("不让好友看我的心情记录")]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.isNotLookMe,expression:"isNotLookMe"}],staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.isNotLookMe)?o._i(o.isNotLookMe,null)>-1:o.isNotLookMe},on:{change:function(t){o.lookMe(t)},__c:function(t){var e=o.isNotLookMe,i=t.target,s=!!i.checked;if(Array.isArray(e)){var r=o._i(e,null);s?r<0&&(o.isNotLookMe=e.concat(null)):r>-1&&(o.isNotLookMe=e.slice(0,r).concat(e.slice(r+1)))}else o.isNotLookMe=s}}})])])])},staticRenderFns:[]}},265:function(o,t,e){var i=e(159);"string"==typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);e(2)("b858a8be",i,!0)},65:function(o,t,e){e(265);var i=e(0)(e(145),e(233),null,null);o.exports=i.exports}});
//# sourceMappingURL=25.build.js.map?42b21