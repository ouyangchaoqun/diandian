webpackJsonp([21],{123:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{feedbackFlag:!0}},methods:{onSubmit:function(){var e=this;0==e.feedbackFlag&&this.$http.put(web.API_PATH+"base/feedback/add",{content:e.$refs.content.value,userId:null}).then(function(e){xqzs.weui.toast("success","提交成功",function(){window.location.href="/#me"})},function(e){})},listenProposal:function(){var e=this.proposalCon.length;console.log(e),this.feedbackFlag=!(e>=8)}}}},140:function(e,t,o){t=e.exports=o(0)(),t.push([e.i,".proposal_box{background:#f5f5f5}.feedback{padding:15px;font-size:15px;color:#999;position:relative;height:180px;background:#fff}.feedback textarea{height:150px;width:100%;outline:none;border:0;resize:none;font-size:15px;color:#333}.feedback span{position:absolute;right:20px;bottom:20px}.feedback_btn{padding:0 20px;margin-top:34px}",""])},188:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"proposal_box"},[o("div",{directives:[{name:"title",rawName:"v-title"}]},[e._v("意见反馈")]),e._v(" "),o("div",{staticClass:"feedback"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.proposalCon,expression:"proposalCon"}],ref:"content",attrs:{placeholder:"你好，我是产品经理小珺，欢迎给我们提出产品的使用感受和建议！"},domProps:{value:e.proposalCon},on:{input:[function(t){t.target.composing||(e.proposalCon=t.target.value)},e.listenProposal]}}),e._v(" "),o("span",[e._v("不少于8字!")])]),e._v(" "),o("div",{staticClass:"feedback_btn"},[o("a",{class:{"weui-btn":!0,"weui-btn_primary":!0,"weui-btn_disabled":e.feedbackFlag},on:{click:function(t){e.onSubmit()}}},[e._v("提交")])])])},staticRenderFns:[]}},217:function(e,t,o){var n=o(140);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(2)("149a85e0",n,!0)},62:function(e,t,o){o(217);var n=o(1)(o(123),o(188),null,null);e.exports=n.exports}});
//# sourceMappingURL=21.build.js.map?0688ec26ec7019c248e5