webpackJsonp([18],{126:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var setName={template:"#setName"};__webpack_exports__.default={data:function(){return{friendId:this.$route.query.friendId,friendDetail:{}}},mounted:function mounted(){var _this=this,friendId=this.$route.query.friendId;this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/friend/set/_userId_/"+friendId}).then(function(data){null!==data.data.data&&(_this.friendDetail=eval(data.data.data))},function(e){})},methods:{setMemoName:function(){var e=this,t=e.$refs.name.value;console.log(t),""!==t&&e.$http.post(web.API_PATH+"user/save/memo/name/_userId_/"+e.friendId,{memoName:t}).then(function(t){1===t.data.status&&e.$router.back(-1)},function(e){})}}}},147:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".setName{color:#909090;font-size:16px;padding:16px}.setName_box input{height:50px;line-height:50px;color:#333;font-size:16px;width:100%;text-indent:15px;outline:none;border:0}.me_bottom{margin-top:30px;padding:0 15px}",""])},198:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setName_box"},[n("div",{staticClass:"setName"},[e._v("设置备注名")]),e._v(" "),n("input",{ref:"name",attrs:{type:"text",placeholder:"添加备注名"},domProps:{value:e.friendDetail.memoName}}),e._v(" "),n("div",{staticClass:"me_bottom"},[n("div",{staticClass:"weui-btn weui-btn_primary",on:{click:function(t){e.setMemoName()}}},[e._v(" 提交")])])])},staticRenderFns:[]}},227:function(e,t,n){var a=n(147);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n(2)("02222046",a,!0)},66:function(e,t,n){n(227);var a=n(1)(n(126),n(198),null,null);e.exports=a.exports}});
//# sourceMappingURL=18.build.js.map?e2476