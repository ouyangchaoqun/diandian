webpackJsonp([49],{187:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var collect={template:"#collect"};__webpack_exports__.default={data:function(){return{feedbackFlag:!0,user:{},mobile:"",contactname:"",isOutMaxLen:!1}},methods:{onSubmit:function(){var t=this;0==t.feedbackFlag&&this.$http.put(web.API_PATH+"base/feedback/add",{content:t.$refs.content.value,userId:null,contactname:t.contactname,mobile:t.mobile,guest:"guest"}).then(function(t){xqzs.weui.toast("success","提交成功",function(){window.history.go(-1)})},function(t){})},listenProposal:function(){var t=this.proposalCon.length;console.log(t),this.feedbackFlag=!(t>=1&&t<200),this.isOutMaxLen=!(t<200)}},mounted:function mounted(){var _this=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),_this.mobile=_this.user.mobile,_this.contactname=_this.user.realName)},function(t){}),xqzs.wx.setConfig(this)}}},233:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,'.proposal_box{background:#f4f4f8}.feedback{padding:15px;font-size:15px;color:#999;position:relative;height:180px;background:#fff}.feedback textarea{height:150px;width:100%;outline:none;border:0;resize:none;font-size:16px;color:#333}.feedback span{position:absolute;right:15px;bottom:10px;font-size:14px}.feedback_btn{padding:0 15px;margin-top:30px}.redmax{color:red}.list0:first-child{margin-top:12px}.list_top:after,.list_top:before{width:100%;content:" ";background:#eee;display:block;height:1px;overflow:hidden;position:absolute;top:0;left:0}.list_top:after{bottom:0;top:inherit}.list0{background:#fff;height:44px;line-height:44px;padding:0 15px;position:relative;margin:8px 0}.list0 input{margin:0}.list0 span{float:left;color:#333;font-size:15px}.list0 input{float:right;font-size:16px;color:#999;height:44px;text-align:right;border:0;outline:none}.list0 input::-webkit-input-placeholder{color:#999}.list0 input:-moz-placeholder,.list0 input::-moz-placeholder{color:#999}.list0 input:-ms-input-placeholder{color:#999}.list0 img{width:16px;position:absolute;top:14px;right:15px}',""])},383:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"proposal_box"},[o("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("有奖征集")]),t._v(" "),o("div",{staticClass:"feedback"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.proposalCon,expression:"proposalCon"}],ref:"content",attrs:{placeholder:"有奖征集（名字+内涵意义）"},domProps:{value:t.proposalCon},on:{input:[function(e){e.target.composing||(t.proposalCon=e.target.value)},t.listenProposal]}}),t._v(" "),o("span",{class:{redmax:t.isOutMaxLen}},[t._v("字数少于200字")])]),t._v(" "),o("div",{staticClass:"list0 list_top"},[o("span",[t._v("姓名")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contactname,expression:"contactname"}],staticClass:"name",attrs:{type:"text",placeholder:"选填",maxlength:"8"},domProps:{value:t.contactname},on:{input:function(e){e.target.composing||(t.contactname=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"list0 list_top"},[o("span",[t._v("手机号码")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"mobile",attrs:{type:"text",placeholder:"选填",maxlength:"11"},domProps:{value:t.mobile},on:{input:function(e){e.target.composing||(t.mobile=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"feedback_btn"},[o("a",{class:{"weui-btn":!0,"weui-btn_primary":!0,"weui-btn_disabled":t.feedbackFlag},on:{click:function(e){t.onSubmit()}}},[t._v("提交")])])])},staticRenderFns:[]}},435:function(t,e,o){var a=o(233);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o(2)("a5c0ef86",a,!0)},75:function(t,e,o){o(435);var a=o(1)(o(187),o(383),null,null);t.exports=a.exports}});
//# sourceMappingURL=49.build.js.map?6c92a