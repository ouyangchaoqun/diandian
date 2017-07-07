webpackJsonp([12],{130:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var careMe={template:"#careMe"};__webpack_exports__.default={data:function(){return{myLastMood:[],careFriends:[],detailUrl:"",showList:!1,showEmpty:!1}},mounted:function(){var t=this;t.getMoodDetail(),xqzs.wx.setConfig(t)},filters:{shortName:function(t,e){return xqzs.shortname(t,e)}},methods:{formatContent:function(t){return xqzs.face.parse(t)},getMoodDetail:function getMoodDetail(){var _this=this;_this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/query/detail/"+_this.$route.query.moodId}).then(function(data){console.log(data),data.data.data&&(_this.myLastMood=eval(data.data.data),_this.myLastMood.moodValueUrl=web.IMG_PATH+"list_mood_0"+_this.myLastMood.moodValue+".png",_this.detailUrl="/moodDetail?moodId="+_this.myLastMood.id,_this.getMoodCareList())},function(t){})},getMoodCareList:function(){var t=this;t.$http({method:"GET",type:"json",url:web.API_PATH+"mood/care/query/"+t.$route.query.moodId+"/_userId_"}).then(function(e){console.log(e),e.data.data.length>0?(t.careFriends=e.data.data,t.showList=!0):t.showEmpty=!0,console.log(t.careFriends.length)},function(t){})},_createinvite:function(t,e){this.$http({method:"GET",type:"json",url:web.API_PATH+"wei/xin/create/invite/"+t+"/_userId_"}).then(function(t){t&&1==t.data.status&&"function"==typeof e&&e()})},createinvite:function(){var t=this;t._createinvite("link",function(){t._createinvite("card",function(){}),xqzs.weui.dialog({title:"邀请卡已经发送",msg:"前往公众号查看，分享好友互为关注",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(t){}}})})}}}},163:function(t,e,o){e=t.exports=o(1)(),e.push([t.i,".careMe_box{height:100%;position:relative;background:#fff}.careMe_list{height:60px;border-bottom:1px solid #eee;padding:10px 15px;display:block}.careMe_img{height:44px;width:44px;display:block;float:left;border-radius:3px}.careMe_div{float:left;margin-left:10px;padding-top:2px}.careMe_div div{color:#5e61a2;font-size:13px;line-height:13px;width:120px;overflow:hidden;text-overflow:ellipsis}.careMe_div img{width:14px;display:block;padding:8px 0 8px 2px}.careMe_div p{color:#999;font-size:12px;line-height:12px}.careMe_content{width:60px;height:60px;float:right;overflow:hidden;position:relative;font-size:12px;color:#333}.careMe_content .moodpic{height:60px;width:60px;margin-top:-30px;margin-left:-30px}.careMe_content .moodpic,.careMe_content img{display:block;position:absolute;top:50%;left:50%}.careMe_content img{height:32px;width:32px;margin-top:-16px;margin-left:-16px}.noCare_box{position:relative;height:100%;background:#fff!important}.noCare_box img{width:15rem;position:absolute;top:3rem;left:50%;margin-left:-7.5rem}.noCare_content{width:100%;position:absolute;top:300px;z-index:1;left:50%;margin-left:-50%}.noCare_content h3{font-size:18px;color:#6c3;font-weight:100;text-align:center;margin-bottom:10px}.noCare_content p{font-size:14px;color:#999;text-align:center;height:24px}.noCare_btn{width:90%;position:absolute;bottom:3rem;left:50%;margin-left:-45%}",""])},212:function(t,e,o){t.exports=o.p+"nocare_pic_bj.png"},237:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"careMe_box"},[i("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("关心我的朋友")]),t._v(" "),t.showList?i("div",t._l(t.careFriends,function(e){return i("router-link",{staticClass:"careMe_list",attrs:{to:t.detailUrl}},[i("img",{staticClass:"careMe_img",attrs:{src:e.faceUrl,alt:""}}),t._v(" "),i("div",{staticClass:"careMe_div"},[i("div",[t._v(t._s(t._f("shortName")(e.nickName,7)))]),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.myLastMood.moodValue>=5,expression:"myLastMood.moodValue>=5"}],staticClass:"careimg1",attrs:{src:o(97),alt:""}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.myLastMood.moodValue<5,expression:"myLastMood.moodValue<5"}],attrs:{src:o(84),alt:""}}),t._v(" "),i("p",[t._v(t._s(e.addTime))])]),t._v(" "),i("div",{staticClass:"careMe_content"},[t.myLastMood.pics&&t.myLastMood.pics.length>0?i("img",{staticClass:"moodpic",attrs:{src:t.myLastMood.pics[0].path}}):t.myLastMood.content?i("div",{domProps:{innerHTML:t._s(t.formatContent(t.myLastMood.content))}}):i("img",{attrs:{src:t.myLastMood.moodValueUrl}})])])})):t._e(),t._v(" "),t.showEmpty?i("div",{staticClass:"noCare_box"},[i("img",{attrs:{src:o(212),alt:""}}),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"noCare_btn"},[i("button",{staticClass:"weui-btn weui-btn_primary",on:{click:function(e){t.createinvite()}}},[t._v("生成邀请卡")])])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"noCare_content"},[o("h3",[t._v("还没有关心我的好友")]),t._v(" "),o("p",[t._v("赶紧去生成邀请卡，分享好友互为关注")]),t._v(" "),o("p",[t._v("邀更多好友来一起参与记录和互为关心")])])}]}},270:function(t,e,o){var i=o(163);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("45b43f0f",i,!0)},50:function(t,e,o){o(270);var i=o(0)(o(130),o(237),null,null);t.exports=i.exports},84:function(t,e,o){t.exports=o.p+"list_baob_pre.png"},97:function(t,e,o){t.exports=o.p+"mood_icon_dianz_pre.png"}});
//# sourceMappingURL=12.build.js.map?f92b2