webpackJsonp([22],{118:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var privacy={template:"#privacy"};__webpack_exports__.default={data:function(){return{user:null,isNotLookFriend:!1,isNotLookMe:!1}},mounted:function mounted(){var _this=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),_this.isNotLookFriend=!_this.user.isLookFriend,_this.isNotLookMe=!_this.user.isLookMe)},function(o){})},methods:{lookMe:function(){var o=this;this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/me/_userId_/"+o.user.isLookMe}).then(function(o){o.data.status},function(o){})},lookFriend:function(){var o=this;this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/friend/_userId_/"+o.user.isLookFriend}).then(function(o){o.data.status},function(o){})}}}},127:function(o,t,e){t=o.exports=e(0)(),t.push([o.i,".privacy_box{padding-top:10px;background:#f4f4f4}.privacy{height:50px;background:#fff;padding-left:15px;line-height:50px;position:relative}.privacy div{position:absolute;height:1px;background:#e5e5e5;bottom:0;width:100%}.privacy span{font-size:15px;color:#333}.privacyInput{float:right;margin-top:10px;margin-right:12px}.privacyTop{border-top:1px solid #e5e5e5}.privacyBottom{border-bottom:1px solid #e5e5e5}",""])},190:function(o,t){o.exports={render:function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"privacy_box"},[e("div",{staticClass:"privacy privacyTop"},[e("span",[o._v("不看好友的心情记录")]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.isNotLookFriend,expression:"isNotLookFriend"}],staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.isNotLookFriend)?o._i(o.isNotLookFriend,null)>-1:o.isNotLookFriend},on:{click:function(t){o.lookFriend()},__c:function(t){var e=o.isNotLookFriend,i=t.target,s=!!i.checked;if(Array.isArray(e)){var r=o._i(e,null);s?r<0&&(o.isNotLookFriend=e.concat(null)):r>-1&&(o.isNotLookFriend=e.slice(0,r).concat(e.slice(r+1)))}else o.isNotLookFriend=s}}}),o._v(" "),e("div")]),o._v(" "),e("div",{staticClass:"privacy privacyBottom"},[e("span",[o._v("不让好友看我的心情记录")]),o._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:o.isNotLookMe,expression:"isNotLookMe"}],staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(o.isNotLookMe)?o._i(o.isNotLookMe,null)>-1:o.isNotLookMe},on:{click:function(t){o.lookMe()},__c:function(t){var e=o.isNotLookMe,i=t.target,s=!!i.checked;if(Array.isArray(e)){var r=o._i(e,null);s?r<0&&(o.isNotLookMe=e.concat(null)):r>-1&&(o.isNotLookMe=e.slice(0,r).concat(e.slice(r+1)))}else o.isNotLookMe=s}}})])])},staticRenderFns:[]}},217:function(o,t,e){var i=e(127);"string"==typeof i&&(i=[[o.i,i,""]]),i.locals&&(o.exports=i.locals);e(2)("b858a8be",i,!0)},60:function(o,t,e){e(217);var i=e(1)(e(118),e(190),null,null);o.exports=i.exports}});
//# sourceMappingURL=22.build.js.map