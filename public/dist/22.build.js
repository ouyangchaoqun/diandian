webpackJsonp([22],{121:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var privacy={template:"#privacy"};__webpack_exports__.default={data:function(){return{user:null,isNotLookFriend:!1,isNotLookMe:!1}},mounted:function mounted(){var _this=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),_this.isNotLookFriend=!_this.user.isLookFriend,_this.isNotLookMe=!_this.user.isLookMe)},function(t){})},methods:{lookMe:function(){var t=this,o=void 0;!0===t.isNotLookMe&&(o=0),!1===t.isNotLookMe&&(o=1),this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/me/_userId_/"+o}).then(function(t){t.data.status},function(t){})},lookFriend:function(){var t=this,o=void 0;!0===t.isNotLookFriend&&(o=0),!1===t.isNotLookFriend&&(o=1),this.$http({method:"POST",url:web.API_PATH+"user/update/my/set/look/friend/_userId_/"+o}).then(function(t){t.data.status},function(t){})}}}},129:function(t,o,e){o=t.exports=e(0)(),o.push([t.i,".privacy_box{padding-top:10px;background:#f4f4f4}.privacy{height:50px;background:#fff;padding-left:15px;line-height:50px;position:relative}.privacy div{position:absolute;height:1px;background:#e5e5e5;bottom:0;width:100%}.privacy span{font-size:15px;color:#333}.privacyInput{float:right;margin-top:10px;margin-right:12px}.privacyTop{border-top:1px solid #e5e5e5}.privacyBottom{border-bottom:1px solid #e5e5e5}",""])},172:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"privacy_box"},[e("div",{staticClass:"privacy privacyTop"},[e("span",[t._v("不看好友的心情记录")]),t._v(" "),e("input",{staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:t.isNotLookFriend},on:{change:function(o){t.isNotLookFriend=o.target.checked},click:function(o){t.lookFriend()}}}),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"privacy privacyBottom"},[e("span",[t._v("不让好友看我的心情记录")]),t._v(" "),e("input",{staticClass:"weui-switch privacyInput",attrs:{type:"checkbox"},domProps:{checked:t.isNotLookMe},on:{change:function(o){t.isNotLookMe=o.target.checked},click:function(o){t.lookMe()}}})])])},staticRenderFns:[]}},199:function(t,o,e){var i=e(129);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(1)("b858a8be",i,!0)},60:function(t,o,e){e(199);var i=e(2)(e(121),e(172),null,null);t.exports=i.exports}});
//# sourceMappingURL=22.build.js.map