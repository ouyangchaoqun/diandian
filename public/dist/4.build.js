webpackJsonp([4],{111:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var me={template:"#me"};__webpack_exports__.default={data:function(){return{user:{}}},mounted:function mounted(){var _this=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data))},function(t){})},methods:{_createinvite:function(t,s){this.$http({method:"GET",type:"json",url:web.API_PATH+"wei/xin/create/invite/"+t+"/_userId_"}).then(function(t){t&&1==t.data.status&&"function"==typeof s&&s()})},createinvite:function(){var t=this;t._createinvite("link",function(){t._createinvite("card",function(){}),xqzs.weui.dialog({title:"邀请卡已经发送",msg:"前往公众号查看，分享好友互为关注",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(t){}}})})}}}},139:function(t,s,i){s=t.exports=i(0)(),s.push([t.i,".me_top{background:#f4f4f4;padding:15px 0}.me1_left{width:60px;border-radius:5px;float:left}.me1,.me1_left{height:60px;display:block}.me1{background:#fff;padding:15px}.me1_right{float:left;margin-left:14px}.perfec_top{color:#333;font-size:14px;margin-bottom:12px}.perfec{font-size:12px;color:#666;position:relative}.perfec img{position:absolute;top:-1px;left:55px}.edit,.me1_back{height:20px;width:20px}.me1_back{display:block;float:right;transform:rotate(180deg);margin-top:20px}.me_lists{background:#fff;padding:0 15px;display:block;position:relative}.me_list{height:60px;border-bottom:1px solid #e5e5e5;line-height:60px;padding-left:50px}.listimg1{width:22px;display:block;position:absolute;top:50%;margin-top:-12px;left:20px}.listimg2{display:block;float:right;width:20px;height:20px;transform:rotate(180deg);margin-top:20px}.listtext{font-size:15px;color:#333;float:left}.me_bottom{width:90%;margin:30px auto}.privacyImg{width:16px;margin-top:-12px}.proposalImg{margin-top:-8px}.problemImg{margin-top:-16px}",""])},156:function(t,s,i){t.exports=i.p+"edit.png"},160:function(t,s,i){t.exports=i.p+"listimg1.png"},161:function(t,s,i){t.exports=i.p+"listimg2.png"},162:function(t,s,i){t.exports=i.p+"listimg3.png"},163:function(t,s,i){t.exports=i.p+"listimg4.png"},164:function(t,s,i){t.exports=i.p+"listimg5.png"},165:function(t,s,i){t.exports=i.p+"listimg6.png"},181:function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"me_box"},[a("div",{staticClass:"me_top"},[a("router-link",{staticClass:"me1",attrs:{to:"/me/personal"}},[a("img",{staticClass:"me1_left",attrs:{src:t.user.faceUrl}}),t._v(" "),a("div",{staticClass:"me1_right"},[a("div",{staticClass:"perfec_top"},[t._v(t._s(t.user.nickName))]),t._v(" "),a("div",{staticClass:"perfec"},[a("span",[t._v("完善资料")]),t._v(" "),a("img",{staticClass:"edit",attrs:{src:i(156)}})])]),t._v(" "),a("img",{staticClass:"me1_back",attrs:{src:i(68)}})])],1),t._v(" "),a("router-link",{staticClass:"me_lists ",attrs:{to:"/me/moodCount"}},[a("div",{staticClass:"me_list"},[a("img",{staticClass:"listimg1",attrs:{src:i(160)}}),t._v(" "),a("div",{staticClass:"listtext"},[t._v("我的心情指数")]),t._v(" "),a("img",{staticClass:"listimg2",attrs:{src:i(68)}})])]),t._v(" "),a("router-link",{staticClass:"me_lists",attrs:{to:"/friendList"}},[a("div",{staticClass:"me_list"},[a("img",{staticClass:"listimg1",attrs:{src:i(161)}}),t._v(" "),a("div",{staticClass:"listtext"},[t._v("我的好友")]),t._v(" "),a("img",{staticClass:"listimg2",attrs:{src:i(68)}})])]),t._v(" "),a("router-link",{staticClass:"me_lists",attrs:{to:"/me/remind"}},[a("div",{staticClass:"me_list"},[a("img",{staticClass:"listimg1",attrs:{src:i(162)}}),t._v(" "),a("div",{staticClass:"listtext"},[t._v("心情记录提醒设置")]),t._v(" "),a("img",{staticClass:"listimg2",attrs:{src:i(68)}})])]),t._v(" "),a("router-link",{staticClass:"me_lists",attrs:{to:"/me/privacy"}},[a("div",{staticClass:"me_list"},[a("img",{staticClass:"listimg1 privacyImg",attrs:{src:i(163)}}),t._v(" "),a("div",{staticClass:"listtext"},[t._v("隐私设置")]),t._v(" "),a("img",{staticClass:"listimg2",attrs:{src:i(68)}})])]),t._v(" "),a("router-link",{staticClass:"me_lists",attrs:{to:"/me/problem"}},[a("div",{staticClass:"me_list"},[a("img",{staticClass:"listimg1 problemImg",attrs:{src:i(164)}}),t._v(" "),a("div",{staticClass:"listtext "},[t._v("常见问题Q&A")]),t._v(" "),a("img",{staticClass:"listimg2",attrs:{src:i(68)}})])]),t._v(" "),a("router-link",{staticClass:"me_lists",attrs:{to:"/me/proposal"}},[a("div",{staticClass:"me_list"},[a("img",{staticClass:"listimg1 proposalImg",attrs:{src:i(165)}}),t._v(" "),a("div",{staticClass:"listtext"},[t._v("意见反馈")]),t._v(" "),a("img",{staticClass:"listimg2",attrs:{src:i(68)}})])]),t._v(" "),a("a",{staticClass:"me_bottom weui-btn weui-btn_primary",on:{click:function(s){t.createinvite()}}},[t._v("生成邀请卡")])],1)},staticRenderFns:[]}},209:function(t,s,i){var a=i(139);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(1)("01b21051",a,!0)},50:function(t,s,i){i(209);var a=i(2)(i(111),i(181),null,null);t.exports=a.exports},68:function(t,s,i){t.exports=i.p+"back.png"}});
//# sourceMappingURL=4.build.js.map