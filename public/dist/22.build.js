webpackJsonp([22],{122:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var privacy={template:"#privacy"};__webpack_exports__.default={data:function(){return{user:null,isNotLookFriend:!1,isNotLookMe:!1}},mounted:function mounted(){var _this=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),_this.isNotLookFriend=!_this.user.isLookFriend,_this.isNotLookMe=!_this.user.isLookMe)},function(o){})},methods:{lookMe:function(o){var t=this;t.isNotLookMe=o.target.checked;var e=void 0;!0===t.isNotLookMe&&(e=1),!1===t.isNotLookMe&&(e=0),this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/me/_userId_/"+e}).then(function(o){o.data.status},function(o){})},lookFriend:function(o){var t=this;t.isNotLookFriend=o.target.checked;var e=void 0;!0===t.isNotLookFriend&&(e=1),!1===t.isNotLookFriend&&(e=0),this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/friend/_userId_/"+e}).then(function(o){o.data.status},function(o){})}}}},130:function(o,t,e){t=o.exports=e(0)(),t.push([o.i,".privacy_box{background:#f4f4f8}.privacy{height:50px;background:#fff;padding-left:15px;line-height:50px;position:relative}.privacy div{position:absolute;height:1px;background:#e5e5e5;bottom:0;width:100%}.privacy span{font-size:15px;color:#333}.privacyInput{float:right;margin-top:10px;margin-right:12px}.privacyTop{border-top:1px solid #e5e5e5;overflow:hidden;margin-top:12px}.privacyBottom{border-bottom:1px solid #e5e5e5}",""])},182:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"privacy_box"},[e("div",{directives:[{name:"title",rawName:"v-title"}]},[o._v("隐私设置")]),o._v(" "),e("div",{staticClass:"privacy privacyTop"},[e("span",[o._v("不看好友的心情记录")]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.isNotLookFriend,expression:"isNotLookFriend"}],staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.isNotLookFriend)?o._i(o.isNotLookFriend,null)>-1:o.isNotLookFriend},on:{change:function(t){o.lookFriend(t)},__c:function(t){var e=o.isNotLookFriend,i=t.target,r=!!i.checked;if(Array.isArray(e)){var s=o._i(e,null);r?s<0&&(o.isNotLookFriend=e.concat(null)):s>-1&&(o.isNotLookFriend=e.slice(0,s).concat(e.slice(s+1)))}else o.isNotLookFriend=r}}}),o._v(" "),e("div")]),o._v(" "),e("div",{staticClass:"privacy privacyBottom"},[e("span",[o._v("不让好友看我的心情记录")]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.isNotLookMe,expression:"isNotLookMe"}],staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.isNotLookMe)?o._i(o.isNotLookMe,null)>-1:o.isNotLookMe},on:{change:function(t){o.lookMe(t)},__c:function(t){var e=o.isNotLookMe,i=t.target,r=!!i.checked;if(Array.isArray(e)){var s=o._i(e,null);r?s<0&&(o.isNotLookMe=e.concat(null)):s>-1&&(o.isNotLookMe=e.slice(0,s).concat(e.slice(s+1)))}else o.isNotLookMe=r}}})])])},staticRenderFns:[]}},210:function(o,t,e){var i=e(130);"string"==typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);e(2)("b858a8be",i,!0)},62:function(o,t,e){e(210);var i=e(1)(e(122),e(182),null,null);o.exports=i.exports}});
//# sourceMappingURL=22.build.js.map?a2647