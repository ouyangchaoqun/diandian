webpackJsonp([1],{110:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__banner_vue__=__webpack_require__(73),__WEBPACK_IMPORTED_MODULE_0__banner_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__banner_vue__),myCenter={template:"#myCenter"};__webpack_exports__.default={data:function(){return{myLastMood:null,user:{},friendMoodsSpe:null,friendMoods:null,notice:{count:0},linkTo:"#",noticeLink:"/notice"}},methods:{care:function(t){var a=this;return this.$http.put(web.API_PATH+"mood/care/add",{moodId:t,userId:"omg"}).then(function(i){if(1===i.data.status){for(var e=0;e<a.friendMoodsSpe.length;e++)a.friendMoodsSpe[e].id===t&&(a.friendMoodsSpe[e].careCount=i.data.data,a.friendMoodsSpe[e].hit=!0,a.friendMoodsSpe[e].isCare=!0);for(e=0;e<a.friendMoods.length;e++)a.friendMoods[e].id===t&&(a.friendMoods[e].hit=!0,a.friendMoods[e].careCount=i.data.data,a.friendMoods[e].isCare=!0);console.log(a.friendMoods)}},function(t){}),!1},link:function(t){location.href=t},_createinvite:function(t,a){this.$http({method:"GET",type:"json",url:web.API_PATH+"wei/xin/create/invite/"+t+"/_userId_"}).then(function(t){t&&1==t.data.status&&"function"==typeof a&&a()})},createinvite:function(){var t=this;t._createinvite("link",function(){t._createinvite("card",function(){}),xqzs.weui.dialog({title:"邀请卡已经发送",msg:"前往公众号查看，分享好友互为关注",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(t){}}})})},canWriteMood:function(){},getMoodCount:function(t){this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/get/user/count/_userId_"}).then(function(a){a.data&&1==a.data.status&&"function"==typeof t&&t(a.data.data)})}},mounted:function mounted(){var _this=this;_this.noticeLink=_this.noticeLink+"/?time="+xqzs.dateTime.getTimeStamp(),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),console.log(_this.user),_this.getMoodCount(function(t){t<10?_this.linkTo="/addMood":""==_this.user.mobile||null==_this.user.mobile||void 0==_this.user.mobile?_this.linkTo="/me/personal/validate":_this.linkTo="/addMood"}))},function(t){}),this.$http({method:"GET",type:"json",url:web.API_PATH+"notice/find/new/_userId_"}).then(function(data){null!==data.data.data&&(_this.notice=eval(data.data.data),console.log(_this.notice))},function(t){}),0!==_this.user.isLookFriend&&(this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/query/friend/pull/day/_userId_/1/1"}).then(function(data){1===data.data.status&&null!==data.data.data&&(_this.friendMoodsSpe=eval(data.data.data),_this.friendMoodsSpe=xqzs.mood.initMoodsData(_this.friendMoodsSpe))},function(t){}),this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/query/friend/pull/day/_userId_/0/1"}).then(function(data){1===data.data.status&&null!==data.data.data&&(_this.friendMoods=eval(data.data.data),_this.friendMoods=xqzs.mood.initMoodsData(_this.friendMoods))},function(t){})),this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/find/userlast/_userId_"}).then(function(data){1===data.data.status&&1===data.data.status&&null!==data.data.data&&(_this.myLastMood=eval(data.data.data),_this.myLastMood.moodValueUrl=web.IMG_PATH+"list_mood_0"+_this.myLastMood.moodValue+".png",_this.myLastMood.careListUrl="./myCenter/careMe?moodId="+_this.myLastMood.id,_this.myLastMood.addTime=xqzs.dateTime.formatTime(_this.myLastMood.addTime),console.log(_this.myLastMood))},function(t){})},components:{"v-banner":__WEBPACK_IMPORTED_MODULE_0__banner_vue___default.a}}},147:function(t,a,i){a=t.exports=i(0)(),a.push([t.i,"#tabs{position:fixed;z-index:10000}body,html{width:100%;height:100%;background:#f5f5f5}*{margin:0;padding:0}a{text-decoration:none}li{list-style:none}.addMoodBg{background:rgba(0,0,0,.4);height:100%;width:100%;z-index:10001;position:fixed;display:none}.mycenter{background:#fff;padding:0 20px}.mycenter a{height:72px;display:block}.friend{margin-left:55px;padding-top:28px}.friendName{font-size:16px;color:#000;line-height:0;margin-bottom:11px}.time{font-size:12px;color:#999}.list_left{float:left;position:relative;height:100%}.headerimg{height:40px;width:40px;display:inline-block;border-radius:5px;position:absolute;top:50%;margin-top:-20px}.list_left span{font-size:15px;line-height:72px;color:#000;margin-left:55px}.list_right{float:right;height:72px}.list_right span{color:#666;font-size:15px;line-height:72px}.moodimg{width:34px;height:34px;float:left;margin-top:17px;margin-right:20px}.interaction{float:left;text-align:center;padding-top:15px;font-size:13px;color:#aeaeae;overflow:hidden}.interaction img{width:20px;height:20px}.interaction a{height:20px}.mycenterFill{width:100%;height:10px;background:#eee}.friendCenter{margin-bottom:1px}.share{line-height:36px;height:36px;font-size:14px;margin:30px 15px 60px;color:#696969;display:block;border:1px solid rgba(0,0,0,.2);background:#fff;border-radius:5px;text-align:center;margin-bottom:100px}.share:active{background:#eee}.notice_box{padding:10px;background:#fff;margin-bottom:1px}.notice{height:40px;width:180px;background:#393939;border-radius:5px;margin:0 auto}.notice_friend{height:32px;width:32px;float:left;margin-left:5px;margin-top:3px;display:block;border-radius:3px}.notice div{float:left;height:40px;line-height:40px;color:#f8f5f5;margin-left:32px;font-size:14px}.goNotice{width:16px;display:block;float:right;margin-right:14px;margin-top:12px}",""])},159:function(t,a,i){t.exports=i.p+"face1.png"},160:function(t,a,i){t.exports=i.p+"friend1.png"},169:function(t,a,i){t.exports=i.p+"me1.png"},173:function(t,a,i){t.exports=i.p+"rl1.png"},195:function(t,a,i){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"100%"}},[e("div",{staticClass:"addMoodBg"}),t._v(" "),e("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("心情指数")]),t._v(" "),e("div",{staticClass:"weui-tabbar",attrs:{id:"tabs"}},[e("router-link",{staticClass:"weui-tabbar__item  tab",attrs:{to:t.linkTo}},[e("span",{staticStyle:{display:"inline-block"}},[e("img",{staticClass:"weui-tabbar__icon",attrs:{src:i(159)}})]),t._v(" "),e("p",{staticClass:"weui-tabbar__label"},[t._v("记录心情")])]),t._v(" "),e("router-link",{staticClass:"weui-tabbar__item tab",attrs:{to:"/calendar"}},[e("span",{staticStyle:{display:"inline-block"}},[e("img",{staticClass:"weui-tabbar__icon",attrs:{src:i(173)}})]),t._v(" "),e("p",{staticClass:"weui-tabbar__label"},[t._v("心情日历")])]),t._v(" "),e("router-link",{staticClass:"weui-tabbar__item tab",attrs:{to:"/friendsMoods"}},[e("span",{staticStyle:{display:"inline-block"}},[e("img",{staticClass:"weui-tabbar__icon",attrs:{src:i(160)}})]),t._v(" "),e("p",{staticClass:"weui-tabbar__label"},[t._v("朋友心情")])]),t._v(" "),e("router-link",{staticClass:"weui-tabbar__item tab",attrs:{to:"/me"}},[e("span",{staticStyle:{display:"inline-block"}},[e("img",{staticClass:"weui-tabbar__icon",attrs:{src:i(169)}})]),t._v(" "),e("p",{staticClass:"weui-tabbar__label"},[t._v("我的")])])],1),t._v(" "),e("div",{staticClass:"banner"},[e("v-banner")],1),t._v(" "),t.notice.count?e("router-link",{staticClass:"weui-tabbar__item tab",staticStyle:{padding:"0"},attrs:{to:t.noticeLink}},[e("div",{staticClass:"notice_box"},[e("div",{staticClass:"notice"},[e("img",{staticClass:"notice_friend",attrs:{src:t.notice.lastuser.faceUrl}}),t._v(" "),e("div",[t._v(t._s(t.notice.count)+"条新消息")]),t._v(" "),e("img",{staticClass:"goNotice",attrs:{src:i(82),alt:""}})])])]):t._e(),t._v(" "),e("div",{staticClass:"mycenter_list"},[e("div",{staticClass:"mycenter"},[e("router-link",{attrs:{to:"./myCenter/myIndex"}},[e("div",{staticClass:"list_left"},[e("img",{staticClass:"headerimg",attrs:{src:t.user.faceUrl}}),t._v(" "),t.myLastMood?[e("div",{staticClass:"friend"},[e("p",{staticClass:"friendName"},[t._v(t._s(t.user.nickName))]),t._v(" "),e("p",{staticClass:"time"},[t._v(t._s(t.myLastMood.addTime))])])]:t._e(),t._v(" "),t.myLastMood?t._e():[e("span",[t._v(t._s(t.user.nickName))])]],2),t._v(" "),e("div",{staticClass:"list_right"},[null!=t.myLastMood?[e("img",{staticClass:"moodimg",attrs:{src:t.myLastMood.moodValueUrl}}),t._v(" "),e("div",{staticClass:"interaction"},[e("div",[t._v(t._s(t.myLastMood.careCount))]),t._v(" "),e("router-link",{attrs:{to:t.myLastMood.careListUrl}},[t.myLastMood.moodValue>=5&&t.myLastMood.careCount<=0?e("img",{attrs:{src:i(78),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue>=5&&t.myLastMood.careCount>0?e("img",{attrs:{src:i(67),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue<5&&t.myLastMood.careCount>0?e("img",{attrs:{src:i(66),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue<5&&t.myLastMood.careCount<=0?e("img",{attrs:{src:i(77),alt:""}}):t._e()])],1)]:t._e(),t._v(" "),null==t.myLastMood?[e("span",[t._v("还未记录")])]:t._e()],2)])],1),t._v(" "),e("div",{staticClass:"mycenterFill"}),t._v(" "),null!=t.user.isLookFriend&&0!==t.user.isLookFriend?e("div",{staticClass:"mycenter friendCenter"},[t._l(t.friendMoodsSpe,function(a){return e("div",[e("a",{on:{click:function(i){t.link(a.link)}}},[e("div",{staticClass:"list_left"},[e("img",{staticClass:"headerimg",attrs:{src:a.faceUrl}}),t._v(" "),e("div",{staticClass:"friend"},[null!=a.memoName?e("p",{staticClass:"friendName"},[t._v(t._s(a.memoName))]):t._e(),t._v(" "),null==a.memoName?e("p",{staticClass:"friendName"},[t._v(t._s(a.nickName))]):t._e(),t._v(" "),e("p",{staticClass:"time"},[t._v(t._s(a.outTime))])])]),t._v(" "),e("div",{staticClass:"list_right"},[e("img",{staticClass:"moodimg",attrs:{src:a.moodValueUrl}}),t._v(" "),e("div",{staticClass:"interaction",on:{click:function(i){i.stopPropagation(),t.care(a.id)}}},[e("div",[t._v(t._s(a.careCount))]),t._v(" "),a.moodValue>=5&&null==a.isCare?e("img",{class:{heartUp:a.hit},attrs:{src:i(78),alt:""}}):t._e(),t._v(" "),a.moodValue<5&&null==a.isCare?e("img",{class:{heartUp:a.hit},attrs:{src:i(77),alt:""}}):t._e(),t._v(" "),a.moodValue>=5&&null!=a.isCare?e("img",{class:{heartUp:a.hit},attrs:{src:i(67),alt:""}}):t._e(),t._v(" "),a.moodValue<5&&null!=a.isCare?e("img",{class:{heartUp:a.hit},attrs:{src:i(66),alt:""}}):t._e()])])])])}),t._v(" "),t._l(t.friendMoods,function(a){return e("div",[e("a",{on:{click:function(i){t.link(a.link)}}},[e("div",{staticClass:"list_left"},[e("img",{staticClass:"headerimg",attrs:{src:a.faceUrl}}),t._v(" "),e("div",{staticClass:"friend"},[null!=a.memoName?e("p",{staticClass:"friendName"},[t._v(t._s(a.memoName))]):t._e(),t._v(" "),null==a.memoName?e("p",{staticClass:"friendName"},[t._v(t._s(a.nickName))]):t._e(),t._v(" "),e("p",{staticClass:"time"},[t._v(t._s(a.outTime))])])]),t._v(" "),e("div",{staticClass:"list_right"},[e("img",{staticClass:"moodimg",attrs:{src:a.moodValueUrl}}),t._v(" "),e("div",{staticClass:"interaction",on:{click:function(i){i.stopPropagation(),t.care(a.id)}}},[e("div",[t._v(t._s(a.careCount))]),t._v(" "),a.moodValue>=5&&null==a.isCare?e("img",{class:{heartUp:a.hit},attrs:{src:i(78),alt:""}}):t._e(),t._v(" "),a.moodValue<5&&null==a.isCare?e("img",{class:{heartUp:a.hit},attrs:{src:i(77),alt:""}}):t._e(),t._v(" "),a.moodValue>=5&&null!=a.isCare?e("img",{class:{heartUp:a.hit},attrs:{src:i(67),alt:""}}):t._e(),t._v(" "),a.moodValue<5&&null!=a.isCare?e("img",{class:{heartUp:a.hit},attrs:{src:i(66),alt:""}}):t._e()])])])])})],2):t._e(),t._v(" "),e("a",{staticClass:"share",on:{click:function(a){t.createinvite()}}},[t._v("点击生成邀请卡")])])],1)},staticRenderFns:[]}},224:function(t,a,i){var e=i(147);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(2)("0a51739f",e,!0)},49:function(t,a,i){i(224);var e=i(1)(i(110),i(195),null,null);t.exports=e.exports},66:function(t,a,i){t.exports=i.p+"list_baob_pre.png"},67:function(t,a,i){t.exports=i.p+"list_dianz_pre.png"},70:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.default={data:function(){return{topImg:xqzs.mood.getTopImg()}}}},71:function(t,a,i){a=t.exports=i(0)(),a.push([t.i,".banner{width:100%}.banner img{display:block;width:100%}.index_banner{position:relative}",""])},73:function(t,a,i){i(75);var e=i(1)(i(70),i(74),null,null);t.exports=e.exports},74:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;return(t._self._c||a)("img",{attrs:{src:t.topImg}})},staticRenderFns:[]}},75:function(t,a,i){var e=i(71);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(2)("d4b7634e",e,!0)},77:function(t,a,i){t.exports=i.p+"list_baob_nor.png"},78:function(t,a,i){t.exports=i.p+"list_dianz_nor.png"},82:function(t,a,i){t.exports=i.p+"goto.jpg"}});
//# sourceMappingURL=1.build.js.map?24534279cd3a29dd9e65