webpackJsonp([19],{138:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{isGetingCodeIn:!1,interValObj:null,time:60,getCodeBtnText:"获取验证码",isShowMessage:!1,isMobileRight:!1,isErrorCode:!1,mobile:"",code:"",message:"验证码已发送，请注意查收短信",isShowErrorMobileMsg:!1,isShowErrorCodeMsg:!1,isAllInput:!1,codeError:!1}},mounted:function(){var e=this;$(".input_phone").keyup(function(){11==e.mobile.length?xqzs.string.checkUserPhoneReg(e.mobile)?(e.isShowErrorMobileMsg=!1,e.isMobileRight=!0):(e.isMobileRight=!1,e.isShowErrorMobileMsg=!0,e.isAllInput=!1):(e.isMobileRight=!1,e.isShowErrorMobileMsg=!1,e.isAllInput=!1),console.log(e.isMobileRight)}),$(".input_code").keyup(function(){4==$(".input_code").val().length?(e.isErrorCode=!1,!0===e.isMobileRight&&(e.isAllInput=!0)):(e.isAllInput=!1,e.isErrorCode=!0)}),$(".input_phone").focus(function(){e.isShowErrorMobileMsg=!1}),xqzs.wx.setConfig(e)},methods:{submit:function(){var e=this;1==e.isAllInput&&e.$http.post(web.API_PATH+"user/update/mobile/by/code/mobile/_userId_",{mobile:e.mobile,code:e.code}).then(function(t){1===t.data.status?xqzs.weui.toast("success","验证成功",function(){e.$router.go(-1)}):-2!==t.data.status&&-3!==t.data.status||(e.isShowErrorCodeMsg=!0,e.isShowMessage=!1,e.codeError=!0)},function(e){})},getCode:function(){var e=this;e.isMobileRight&&!e.isGetingCodeIn&&e.$http.post(web.API_PATH+"base/verification/code/get/code",{mobile:e.mobile}).then(function(t){1===t.data.status?(e.codeError=!1,e.interValObj=setInterval(function(){e.setRemainTime()},1e3),e.isShowMessage=!0,e.isShowErrorCodeMsg=!1,e.message="验证码已发送，请注意查收短信"):-1===t.data.status?(e.isShowMessage=!0,e.isShowErrorCodeMsg=!1,e.message="请勿频繁获取验证码"):-2===t.data.status?(e.isShowMessage=!0,e.isShowErrorCodeMsg=!1,e.message="手机号码不能为空"):-3===t.data.status&&(e.isShowMessage=!0,e.isShowErrorCodeMsg=!1,e.message="手机号码格式不正确")},function(e){})},setRemainTime:function(){var e=this;0==e.time?(clearInterval(e.interValObj),e.getCodeBtnText="获取验证码",e.isGetingCodeIn=!1,e.isShowMessage=!1,e.isShowErrorCodeMsg=!1,e.time=60):(e.time--,e.getCodeBtnText="重获验证码("+e.time+")",e.isGetingCodeIn=!0,e.codeError?(e.isShowMessage=!1,e.isShowErrorCodeMsg=!0):(e.isShowMessage=!0,e.isShowErrorCodeMsg=!1))}}}},164:function(e,t,i){t=e.exports=i(0)(),t.push([e.i,".validate_box{padding:20px 15px;background:#fff;height:100%}.validate_top{margin-bottom:32px}.validate_top h1{font-size:18px;color:#f90;margin-bottom:18px}.validate_top p{font-size:15px;color:#878686;text-align:center}input{height:20px;outline:none;line-height:20px;margin-top:12px}#_phonebtn{width:36%;height:46px;font-size:12px;padding:0;text-align:center}.input_code,.input_phone{font-size:15px;color:#333}.input_code{width:100%}.validate_div{height:44px;margin-bottom:26px;position:relative}.validate_phone{border:1px solid #d2d2d2;height:44px;border-radius:5px;padding-left:15px;padding-right:7px;float:left;width:50%;overflow:hidden}#_phonebtn{float:right;font-size:14px}.validate_code{height:44px;border:1px solid #d2d2d2;border-radius:5px;margin-bottom:30px;padding-left:15px;position:relative}#errorCode,#errorMobile{color:#fc0303}#errorCode,#errorMobile,#message{font-size:11px;position:absolute;left:15px;top:50px}#message{color:#999}input:-ms-input-placeholder{color:rgba(0,0,0,.2)}input::-webkit-input-placeholder{color:rgba(0,0,0,.2)}input:-moz-placeholder,input::-moz-placeholder{color:rgba(0,0,0,.2)}",""])},237:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{directives:[{name:"title",rawName:"v-title"}]},[e._v("绑定手机")]),e._v(" "),i("div",{staticClass:"validate_box"},[e._m(0),e._v(" "),i("div",{staticClass:"validate_div"},[i("div",{staticClass:"validate_phone"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],staticClass:"input_phone",attrs:{type:"tel",oninput:"if(value.length>11)value=value.slice(0,11)",placeholder:"请输入您的手机号"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}}),e._v(" "),!e.isMobileRight&&e.isShowErrorMobileMsg?i("p",{attrs:{id:"errorMobile"}},[e._v("手机格式错误")]):e._e()]),e._v(" "),i("button",{staticClass:"weui-btn weui-btn_plain-primary ",class:{"weui-btn_plain-disabled":!e.isMobileRight||e.isGetingCodeIn},attrs:{href:"javascript:;",id:"_phonebtn"},on:{click:function(t){e.getCode()}}},[e._v(e._s(e.getCodeBtnText)+"\n            ")])]),e._v(" "),i("div",{staticClass:"validate_code"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"input_code",attrs:{type:"tel",placeholder:"请输入您收到的验证码",maxlength:"4"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e._v(" "),e.isShowErrorCodeMsg?i("p",{attrs:{id:"errorCode"}},[e._v("验证码错误")]):e._e(),e._v(" "),e.isShowMessage?i("p",{attrs:{id:"message"}},[e._v(e._s(e.message))]):e._e()]),e._v(" "),i("div",[i("button",{staticClass:"weui-btn  weui-btn_primary",class:{"weui-btn_disabled":!e.isAllInput},attrs:{id:"sublim",href:"javascript:;"},on:{click:function(t){e.submit()}}},[e._v("确定\n            ")])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"validate_top"},[i("h1",[e._v("温馨提示")]),e._v(" "),i("p",[e._v("为确保您的数据安全，请先验证手机号！")])])}]}},268:function(e,t,i){var o=i(164);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(2)("65abde90",o,!0)},71:function(e,t,i){i(268);var o=i(1)(i(138),i(237),null,null);e.exports=o.exports}});
//# sourceMappingURL=19.build.js.map?42485