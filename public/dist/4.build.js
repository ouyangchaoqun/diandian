webpackJsonp([4],{112:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var me={template:"#me"};__webpack_exports__.default={data:function(){return{user:{},hasNewPerfect:!1}},mounted:function mounted(){var _this=this;_this.getNewPerfect(),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data))},function(t){})},filters:{shortName:function(t,i){return xqzs.shortname(t,i)}},methods:{_createinvite:function(t,i){this.$http({method:"GET",type:"json",url:web.API_PATH+"wei/xin/create/invite/"+t+"/_userId_"}).then(function(t){t&&1==t.data.status&&"function"==typeof i&&i()})},createinvite:function(){var t=this;t._createinvite("link",function(){t._createinvite("card",function(){}),xqzs.weui.dialog({title:"邀请卡已经发送",msg:"前往公众号查看，分享好友互为关注",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(t){}}})})},getNewPerfect:function(){xqzs.version.isshow("perfectinfo")&&(this.hasNewPerfect=!0)}}}},140:function(t,i,s){i=t.exports=s(0)(),i.push([t.i,".me_box{background:#fff}.me_top{background:#f4f4f8;padding:12px 0}.me1_left{width:60px;border-radius:4px;float:left}.me1,.me1_left{height:60px;display:block;position:relative}.me1{background:#fff;padding:15px;-webkit-tap-highlight-color:rgba(0,0,0,.2)}.me1_right{position:absolute;left:88px;top:16px}.me1 .hasnew{background-color:red;border-radius:50%;position:absolute;top:12px;left:70px;height:8px;width:8px;z-index:999}.perfec_top{color:#333;font-size:16px;line-height:30px}.perfec{font-size:14px;color:#999;position:relative}.perfec span{line-height:24px}.perfec img{position:absolute;top:0;left:66px;border-radius:4px}.edit{height:22px;width:22px}.me1_back{display:block;float:right;width:16px;margin-top:20px}.me_lists{background:#fff;padding:0 15px;display:block;position:relative}.me_lists:active{background:#ececec}.me_list{height:58px;border-bottom:1px solid #eee;line-height:58px;padding-left:41px}.listimg1{width:21px;display:block;position:absolute;top:50%;margin-top:-10px;left:16.5px}.listimg1.record{margin-top:-11px}.listimg1.remindImgIcon{width:20px;margin-top:-11px}.listimg20{width:20px;display:block;position:absolute;top:50%;margin-top:-10px;left:20px}.listimg2{display:block;float:right;width:16px;margin-top:20px}.listtext{font-size:15px;color:#333;float:left}.me_bottom{padding:0 15px;margin-top:30px}.privacyImg{width:18px;margin-top:-11px;height:21px;left:18px}.proposalImg{margin-top:-8px}.problemImg{margin-top:-16px}.listimgSal{width:20px;margin-top:-8px;left:18px}.listimgPro{width:22px;margin-top:-12px}",""])},156:function(t,i,s){t.exports=s.p+"aboutMe.jpg"},164:function(t,i,s){t.exports=s.p+"info_icon_por.png"},165:function(t,i,s){t.exports=s.p+"listimg1.png"},166:function(t,i,s){t.exports=s.p+"listimg2.png"},167:function(t,i,s){t.exports=s.p+"listimg3.png"},168:function(t,i,s){t.exports=s.p+"listimg4.png"},169:function(t,i,s){t.exports=s.p+"listimg6.png"},191:function(t,i,s){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"me_box"},[e("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("个人中心")]),t._v(" "),e("div",{staticClass:"me_top"},[e("router-link",{staticClass:"me1",attrs:{to:"/me/personal"}},[e("span",{directives:[{name:"show",rawName:"v-show",value:t.hasNewPerfect,expression:"hasNewPerfect"}],staticClass:"hasnew"}),t._v(" "),e("img",{staticClass:"me1_left",attrs:{src:t.user.faceUrl}}),t._v(" "),e("div",{staticClass:"me1_right"},[e("div",{staticClass:"perfec_top"},[t._v(t._s(t._f("shortName")(t.user.nickName,6)))]),t._v(" "),e("div",{staticClass:"perfec"},[e("span",[t._v("完善资料")]),t._v(" "),e("img",{staticClass:"edit",attrs:{src:s(164)}})])]),t._v(" "),e("img",{staticClass:"me1_back",attrs:{src:s(68)}})])],1),t._v(" "),e("router-link",{staticClass:"me_lists",attrs:{to:"/me/moodCount"}},[e("div",{staticClass:"me_list"},[e("img",{staticClass:"listimg1 record",attrs:{src:s(165)}}),t._v(" "),e("div",{staticClass:"listtext"},[t._v("我的心情指数")]),t._v(" "),e("img",{staticClass:"listimg2",attrs:{src:s(68)}})])]),t._v(" "),e("router-link",{staticClass:"me_lists",attrs:{to:"/friendList"}},[e("div",{staticClass:"me_list"},[e("img",{staticClass:"listimg1",attrs:{src:s(166)}}),t._v(" "),e("div",{staticClass:"listtext"},[t._v("我的好友")]),t._v(" "),e("img",{staticClass:"listimg2",attrs:{src:s(68)}})])]),t._v(" "),e("router-link",{staticClass:"me_lists",attrs:{to:"/me/remind"}},[e("div",{staticClass:"me_list"},[e("img",{staticClass:"listimg1 remindImgIcon",attrs:{src:s(167)}}),t._v(" "),e("div",{staticClass:"listtext"},[t._v("心情记录提醒设置")]),t._v(" "),e("img",{staticClass:"listimg2",attrs:{src:s(68)}})])]),t._v(" "),e("router-link",{staticClass:"me_lists",attrs:{to:"/me/privacy"}},[e("div",{staticClass:"me_list"},[e("img",{staticClass:"listimg1 privacyImg",attrs:{src:s(168)}}),t._v(" "),e("div",{staticClass:"listtext"},[t._v("隐私设置")]),t._v(" "),e("img",{staticClass:"listimg2",attrs:{src:s(68)}})])]),t._v(" "),e("router-link",{staticClass:"me_lists",attrs:{to:"/me/proposal"}},[e("div",{staticClass:"me_list"},[e("img",{staticClass:"listimg1 listimgSal",attrs:{src:s(169)}}),t._v(" "),e("div",{staticClass:"listtext"},[t._v("意见反馈")]),t._v(" "),e("img",{staticClass:"listimg2",attrs:{src:s(68)}})])]),t._v(" "),e("router-link",{staticClass:"me_lists",attrs:{to:"/me/problem"}},[e("div",{staticClass:"me_list"},[e("img",{staticClass:"listimg1 listimgPro",attrs:{src:s(156)}}),t._v(" "),e("div",{staticClass:"listtext "},[t._v("关于我们")]),t._v(" "),e("img",{staticClass:"listimg2",attrs:{src:s(68)}})])]),t._v(" "),e("div",{staticClass:"me_bottom"},[e("a",{staticClass:"weui-btn weui-btn_primary",on:{click:function(i){t.createinvite()}}},[t._v("生成邀请卡")])]),t._v(" "),e("div",{staticStyle:{height:"50px"}})],1)},staticRenderFns:[]}},220:function(t,i,s){var e=s(140);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(2)("01b21051",e,!0)},52:function(t,i,s){s(220);var e=s(1)(s(112),s(191),null,null);t.exports=e.exports},68:function(t,i,s){t.exports=s.p+"me_jt.png"}});
//# sourceMappingURL=4.build.js.map?22ec6