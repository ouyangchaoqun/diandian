webpackJsonp([22],{122:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var privacy={template:"#privacy"};__webpack_exports__.default={data:function(){return{user:null,isNotLookFriend:!1,isNotLookMe:!1}},mounted:function mounted(){var _this=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),_this.isNotLookFriend=!_this.user.isLookFriend,_this.isNotLookMe=!_this.user.isLookMe)},function(t){})},methods:{lookMe:function(t){var e=this;e.isNotLookMe=t.target.checked;var o=void 0;!0===e.isNotLookMe&&(o=1),!1===e.isNotLookMe&&(o=0),this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/me/_userId_/"+o}).then(function(t){t.data.status},function(t){})},lookFriend:function(t){var e=this;e.isNotLookFriend=t.target.checked;var o=void 0;!0===e.isNotLookFriend&&(o=1),!1===e.isNotLookFriend&&(o=0),this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/friend/_userId_/"+o}).then(function(t){t.data.status},function(t){})}}}},130:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,".privacy_box{background:#f4f4f4}.privacy{height:50px;background:#fff;padding-left:15px;line-height:50px;position:relative}.privacy div{position:absolute;height:1px;background:#e5e5e5;bottom:0;width:100%}.privacy span{font-size:15px;color:#333}.privacyInput{float:right;margin-top:10px;margin-right:12px}.privacyTop{border-top:1px solid #e5e5e5;overflow:hidden;margin-top:15px}.privacyBottom{border-bottom:1px solid #e5e5e5}",""])},174:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"privacy_box"},[o("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("隐私设置")]),t._v(" "),o("div",{staticClass:"privacy privacyTop"},[o("span",[t._v("不看好友的心情记录")]),t._v(" "),o("input",{staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:t.isNotLookFriend},on:{change:function(e){t.lookFriend(e)}}}),t._v(" "),o("div")]),t._v(" "),o("div",{staticClass:"privacy privacyBottom"},[o("span",[t._v("不让好友看我的心情记录")]),t._v(" "),o("input",{staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:t.isNotLookMe},on:{change:function(e){t.lookMe(e)}}})])])},staticRenderFns:[]}},202:function(t,e,o){var i=o(130);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("b858a8be",i,!0)},62:function(t,e,o){o(202);var i=o(1)(o(122),o(174),null,null);t.exports=i.exports}});
//# sourceMappingURL=22.build.js.map?d2802