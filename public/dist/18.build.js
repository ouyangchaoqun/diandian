webpackJsonp([18],{125:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{friendId:this.$route.query.friendId}},methods:{setMemoName:function(){var e=this,t=e.$refs.name.value;console.log(t),""!==t&&e.$http.post(web.API_PATH+"user/save/memo/name/_userId_/"+e.friendId,{memoName:t}).then(function(t){1===t.data.status&&e.$router.back(-1)},function(e){})}}}},147:function(e,t,n){t=e.exports=n(0)(),t.push([e.i,".setName{color:#909090;font-size:16px;margin-top:20px;margin-left:15px}.setName_box input{height:44px;line-height:44px;color:#333;font-size:16px;width:100%;padding-left:15px}",""])},187:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"setName_box"},[n("div",{staticClass:"setName"},[e._v("设置备注名")]),e._v(" "),n("input",{ref:"name",attrs:{type:"text",placeholder:"添加备注名"}}),e._v(" "),n("div",{staticClass:"me_bottom"},[n("div",{staticClass:"weui-btn weui-btn_primary",on:{click:function(t){e.setMemoName()}}},[e._v(" 提交")])])])},staticRenderFns:[]}},216:function(e,t,n){var s=n(147);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);n(1)("02222046",s,!0)},64:function(e,t,n){n(216);var s=n(2)(n(125),n(187),null,null);e.exports=s.exports}});
//# sourceMappingURL=18.build.js.map