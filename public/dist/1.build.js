webpackJsonp([1],{111:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__banner_vue__=__webpack_require__(74),__WEBPACK_IMPORTED_MODULE_0__banner_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__banner_vue__),myCenter={template:"#myCenter"};__webpack_exports__.default={data:function(){return{myLastMood:null,user:{},friendMoodsSpe:null,friendMoods:null,notice:{count:0},linkTo:"#",noticeLink:"/notice",fillFlag:!1,hasNewFirendMood:!1,newFirendMoodStyle:"",hasNewPerfect:!1,newPerfectStyle:"",recordImg:web.IMG_PATH+"face1.png",calendarImg:web.IMG_PATH+"rl1.png",friendsImg:web.IMG_PATH+"friend1.png",meImg:web.IMG_PATH+"me1.png",recordOn:!1,calendarOn:!1,friendsOn:!1,meOn:!1}},methods:{record:function(){var t=this;this.recordImg=web.IMG_PATH+"face2.png",this.recordOn=!0,setTimeout(function(){t.$router.push(t.linkTo)},2)},calendar:function(){var t=this;this.calendarImg=web.IMG_PATH+"rl2.png",this.calendarOn=!0,setTimeout(function(){t.$router.push("/calendar")},2)},care:function(t){var e=this;return this.$http.put(web.API_PATH+"mood/care/add",{moodId:t,userId:"omg"}).then(function(a){if(1===a.data.status){for(var i=0;i<e.friendMoodsSpe.length;i++)e.friendMoodsSpe[i].id===t&&(e.friendMoodsSpe[i].careCount=a.data.data,e.friendMoodsSpe[i].hit=!0,e.friendMoodsSpe[i].isCare=!0);for(i=0;i<e.friendMoods.length;i++)e.friendMoods[i].id===t&&(e.friendMoods[i].hit=!0,e.friendMoods[i].careCount=a.data.data,e.friendMoods[i].isCare=!0);console.log(e.friendMoods)}},function(t){}),!1},link:function(t){location.href=t},_createinvite:function(t,e){this.$http({method:"GET",type:"json",url:web.API_PATH+"wei/xin/create/invite/"+t+"/_userId_"}).then(function(t){t&&1==t.data.status&&"function"==typeof e&&e()})},createinvite:function(){var t=this;t._createinvite("link",function(){t._createinvite("card",function(){}),xqzs.weui.dialog({title:"邀请卡已经发送",msg:"前往公众号查看，分享好友互为关注",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(t){}}})})},canWriteMood:function(){},getMoodCount:function(t){this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/get/user/count/_userId_"}).then(function(e){e.data&&1==e.data.status&&"function"==typeof t&&t(e.data.data)})},getFriendLastMood:function(){var t=this,e=xqzs.friendmood.getlast();""!=e&&t.$http.get(web.API_PATH+"mood/find/friendlast/_userId_").then(function(a){if(a&&1==a.data.status){var i=a.data.data,s=i.id;if(console.info(s+"   "+e),s>parseFloat(e)){t.hasNewFirendMood=!0;var o=$("#tabs .tab:eq(0)"),n=(o.width()-32)/2;t.newFirendMoodStyle="right:"+n+"px"}}})},getNewPerfect:function(){if(xqzs.version.isshow("perfectinfo")){this.hasNewPerfect=!0;var t=$("#tabs .tab:eq(0)"),e=(t.width()-32)/2;this.newPerfectStyle="right:"+e+"px"}},hideNewCircle:function(t,e){var a=this;"mood"==t&&(this.friendsImg=web.IMG_PATH+"friend2.png",this.friendsOn=!0,this.hasNewFirendMood=!1),"perfect"==t&&(this.meImg=web.IMG_PATH+"me2.png",this.meOn=!0,this.hasNewPerfect=!1),setTimeout(function(){a.$router.push(e)},2)},wxFaceUrl:function(t){return xqzs.mood.wxface(t)}},computed:{hasLine:function(){return null!=this.friendMoodsSpe&&this.friendMoodsSpe.length>0&&null!=this.friendMoods&&this.friendMoods.length>0}},mounted:function mounted(){var _this=this;_this.getFriendLastMood(),_this.getNewPerfect(),console.log(this.meImg),_this.noticeLink=_this.noticeLink+"/?time="+xqzs.dateTime.getTimeStamp(),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),console.log(_this.user),_this.getMoodCount(function(t){t<10?_this.linkTo="/addMood":""==_this.user.mobile||null==_this.user.mobile||void 0==_this.user.mobile?_this.linkTo="/me/personal/validate":_this.linkTo="/addMood"}))},function(t){}),this.$http({method:"GET",type:"json",url:web.API_PATH+"notice/find/new/_userId_"}).then(function(data){null!==data.data.data&&(_this.notice=eval(data.data.data),console.log(_this.notice))},function(t){}),0!==_this.user.isLookFriend&&(this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/query/friend/pull/day/_userId_/1/1"}).then(function(data){1===data.data.status&&null!==data.data.data&&(_this.friendMoodsSpe=eval(data.data.data),_this.friendMoodsSpe=xqzs.mood.initMoodsData(_this.friendMoodsSpe))},function(t){}),this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/query/friend/pull/day/_userId_/0/1"}).then(function(data){1===data.data.status&&null!==data.data.data&&(_this.friendMoods=eval(data.data.data),_this.friendMoods=xqzs.mood.initMoodsData(_this.friendMoods))},function(t){})),this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/find/userlast/_userId_"}).then(function(data){1===data.data.status&&1===data.data.status&&null!==data.data.data&&(_this.myLastMood=eval(data.data.data),_this.myLastMood.moodValueUrl=web.IMG_PATH+"list_mood_0"+_this.myLastMood.moodValue+".png",_this.myLastMood.careListUrl="./myCenter/careMe?moodId="+_this.myLastMood.id,_this.myLastMood.addTime=xqzs.dateTime.formatTime(_this.myLastMood.addTime),console.log(_this.myLastMood))},function(t){})},components:{"v-banner":__WEBPACK_IMPORTED_MODULE_0__banner_vue___default.a}}},148:function(t,e,a){e=t.exports=a(0)(),e.push([t.i,".tab{position:relative}.tab .hasnew{background-color:red;border-radius:50%;position:absolute;top:1px;height:8px!important;width:8px!important}.tab img{height:24px;width:24px}.tabOn{color:#6cb954}.friendCenter .addBorder{border-bottom:1px solid #eee}#tabs{position:fixed;z-index:10000;background:#fff;height:47px;border-top:1px solid #ddd;padding-top:1px}#tabs:before{display:none}#tabs .weui-tabbar__label{color:#777}#tabs a span{display:inline-block;height:24px;width:24px}#tabs a span.recordImg{background:url("+a(159)+") no-repeat;background-size:24px}#tabs a span.calendarImg{background:url("+a(176)+") no-repeat;background-size:24px 24px}#tabs a span.friendsImg{background:url("+a(161)+") no-repeat;background-size:24px}#tabs a span.meImg{background:url("+a(172)+") no-repeat;background-size:24px}#tabs a:active span.recordImg{background:url("+a(160)+") no-repeat;background-size:24px}#tabs a:active span.calendarImg{background:url("+a(177)+") no-repeat;background-size:24px 24px}#tabs a:active span.friendsImg{background:url("+a(162)+") no-repeat;background-size:24px}#tabs a:active span.meImg{background:url("+a(173)+") no-repeat;background-size:24px}#tabs a:active .weui-tabbar__label{color:#6cb954}body,html{width:100%;height:100%;background:#f5f5f5}*{margin:0;padding:0}a{text-decoration:none}li{list-style:none}.addMoodBg{background:rgba(0,0,0,.4);height:100%;width:100%;z-index:0;position:fixed;display:none}.mycenter{background:#fff}.mycenter a{height:72px;display:block;padding:0 15px;padding-right:0}.mycenter a:active{background:#ececec}.friend{margin-left:59px;padding-top:12px}.friendName{font-size:16px;color:#333;width:120px;overflow:hidden;text-overflow:ellipsis}.time{font-size:14px;color:#999}.list_left{float:left;position:relative;height:100%}.headerimg{height:44px;width:44px;display:inline-block;border-radius:3px;position:absolute;top:50%;margin-top:-22px}.list_left span{font-size:15px;line-height:72px;color:#000;margin-left:55px}.list_right{float:right;height:72px}.list_right span{color:#666;font-size:15px;line-height:72px}.list_right span.noRecord{margin-right:15px}.moodimg{width:34px;height:34px;float:left;margin-top:17px;margin-right:4px}.interaction{float:left;text-align:center;padding:15px;padding-top:16px;padding-left:16px;padding-right:14px;font-size:13px;color:#aeaeae;overflow:hidden}.interaction div{line-height:14px}.interaction img{display:block;margin-top:2px;width:20px;height:20px}.interaction a{height:20px;padding:0}.mycenterFill{width:100%;height:12px;background:#f5f5f5}.friendCenter{padding:0}.share{line-height:36px;height:36px;font-size:14px;margin:30px 15px 60px;color:#696969;display:block;border:1px solid rgba(0,0,0,.2);background:#fff;border-radius:5px;text-align:center;margin-bottom:78px}.share:active{background:#ececec}.notice_box{background:#fff;border-bottom:1px solid #eee}.notice_box_p{padding:16px 0}.notice{height:40px;width:180px;background:#393939;border-radius:5px;margin:0 auto;-webkit-tap-highlight-color:rgba(0,0,0,.2)}.notice_friend{height:32px;width:32px;float:left;margin-left:5px;margin-top:5px;display:block}.notice div{float:left;height:40px;line-height:40px;color:#fff;margin-left:32px;font-size:13px}.notice .goNotice{width:16px;height:16px;display:block;float:right;margin-right:14px;margin-top:12px}.notice img{height:30px;width:30px}",""])},159:function(t,e,a){t.exports=a.p+"face1.png"},160:function(t,e,a){t.exports=a.p+"face2.png"},161:function(t,e,a){t.exports=a.p+"friend1.png"},162:function(t,e,a){t.exports=a.p+"friend2.png"},163:function(t,e,a){t.exports=a.p+"iconjt.png"},172:function(t,e,a){t.exports=a.p+"me1.png"},173:function(t,e,a){t.exports=a.p+"me2.png"},176:function(t,e,a){t.exports=a.p+"rl1.png"},177:function(t,e,a){t.exports=a.p+"rl2.png"},199:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"100%"}},[i("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("心情指数")]),t._v(" "),i("div",{staticClass:"weui-tabbar",attrs:{id:"tabs"}},[i("a",{staticClass:"weui-tabbar__item  tab",on:{click:function(e){t.record()}}},[i("span",{staticClass:"recordImg"}),t._v(" "),i("p",{staticClass:"weui-tabbar__label",class:{tabOn:t.recordOn}},[t._v("记录心情")])]),t._v(" "),i("a",{staticClass:"weui-tabbar__item tab ",on:{click:function(e){t.calendar()}}},[i("span",{staticClass:"calendarImg"}),t._v(" "),i("p",{staticClass:"weui-tabbar__label",class:{tabOn:t.calendarOn}},[t._v("心情日历")])]),t._v(" "),i("a",{staticClass:"weui-tabbar__item tab",on:{click:function(e){t.hideNewCircle("mood","/friendsMoods")}}},[i("span",{staticClass:"friendsImg"}),t._v(" "),i("p",{staticClass:"weui-tabbar__label",class:{tabOn:t.friendsOn}},[t._v("朋友心情")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.hasNewFirendMood,expression:"hasNewFirendMood"}],staticClass:"hasnew",style:t.newFirendMoodStyle})]),t._v(" "),i("a",{staticClass:"weui-tabbar__item tab",on:{click:function(e){t.hideNewCircle("perfect","/me")}}},[i("span",{staticClass:"meImg"}),t._v(" "),i("p",{staticClass:"weui-tabbar__label",class:{tabOn:t.meOn}},[t._v("我的")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.hasNewPerfect,expression:"hasNewPerfect"}],staticClass:"hasnew",style:t.newPerfectStyle})])]),t._v(" "),i("div",{staticClass:"banner"},[i("v-banner")],1),t._v(" "),t.notice.count?i("router-link",{staticClass:"weui-tabbar__item tab",staticStyle:{padding:"0"},attrs:{to:t.noticeLink}},[i("div",{staticClass:"notice_box notice_box_p"},[i("div",{staticClass:"notice"},[i("img",{staticClass:"notice_friend",attrs:{src:t.wxFaceUrl(t.notice.lastuser.faceUrl)}}),t._v(" "),i("div",[t._v(t._s(t.notice.count)+" 条新消息")]),t._v(" "),i("img",{staticClass:"goNotice",attrs:{src:a(163),alt:""}})])])]):t._e(),t._v(" "),i("div",{staticClass:"mycenter_list"},[i("div",{staticClass:"mycenter"},[i("router-link",{attrs:{to:"./myCenter/myIndex"}},[i("div",{staticClass:"list_left"},[i("img",{staticClass:"headerimg",attrs:{src:t.wxFaceUrl(t.user.faceUrl)}}),t._v(" "),t.myLastMood?[i("div",{staticClass:"friend"},[i("p",{staticClass:"friendName"},[t._v(t._s(t.user.nickName))]),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(t.myLastMood.addTime))])])]:t._e(),t._v(" "),t.myLastMood?t._e():[i("span",[t._v(t._s(t.user.nickName))])]],2),t._v(" "),i("div",{staticClass:"list_right"},[null!=t.myLastMood?[i("img",{staticClass:"moodimg",attrs:{src:t.myLastMood.moodValueUrl}}),t._v(" "),i("div",{staticClass:"interaction"},[i("div",[t._v(t._s(t.myLastMood.careCount))]),t._v(" "),i("router-link",{attrs:{to:t.myLastMood.careListUrl}},[t.myLastMood.moodValue>=5&&t.myLastMood.careCount<=0?i("img",{attrs:{src:a(91),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue>=5&&t.myLastMood.careCount>0?i("img",{attrs:{src:a(92),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue<5&&t.myLastMood.careCount>0?i("img",{attrs:{src:a(69),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue<5&&t.myLastMood.careCount<=0?i("img",{attrs:{src:a(77),alt:""}}):t._e()])],1)]:t._e(),t._v(" "),null==t.myLastMood?[i("span",{staticClass:"noRecord"},[t._v("还未记录")])]:t._e()],2)])],1),t._v(" "),i("div",{staticClass:"mycenterFill"}),t._v(" "),null!=t.user.isLookFriend&&0!==t.user.isLookFriend?i("div",{staticClass:"mycenter friendCenter"},[t._l(t.friendMoodsSpe,function(e){return i("div",{staticClass:"addBorder"},[i("a",{on:{click:function(a){t.link(e.link)}}},[i("div",{staticClass:"list_left"},[i("img",{staticClass:"headerimg",attrs:{src:t.wxFaceUrl(e.faceUrl)}}),t._v(" "),i("div",{staticClass:"friend"},[null!=e.memoName?i("p",{staticClass:"friendName"},[t._v(t._s(e.memoName))]):t._e(),t._v(" "),null==e.memoName?i("p",{staticClass:"friendName"},[t._v(t._s(e.nickName))]):t._e(),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(e.outTime))])])]),t._v(" "),i("div",{staticClass:"list_right"},[i("img",{staticClass:"moodimg",attrs:{src:e.moodValueUrl}}),t._v(" "),i("div",{staticClass:"interaction",on:{click:function(a){a.stopPropagation(),t.care(e.id)}}},[i("div",[t._v(t._s(e.careCount))]),t._v(" "),e.moodValue>=5&&null==e.isCare?i("img",{class:{heartUp:e.hit},attrs:{src:a(91),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null==e.isCare?i("img",{class:{heartUp:e.hit},attrs:{src:a(77),alt:""}}):t._e(),t._v(" "),e.moodValue>=5&&null!=e.isCare?i("img",{class:{heartUp:e.hit},attrs:{src:a(92),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null!=e.isCare?i("img",{class:{heartUp:e.hit},attrs:{src:a(69),alt:""}}):t._e()])])])])}),t._v(" "),t.hasLine?i("div",{staticClass:"mycenterFill"}):t._e(),t._v(" "),t._l(t.friendMoods,function(e){return i("div",{staticClass:"addBorder"},[i("a",{on:{click:function(a){t.link(e.link)}}},[i("div",{staticClass:"list_left"},[i("img",{staticClass:"headerimg",attrs:{src:t.wxFaceUrl(e.faceUrl)}}),t._v(" "),i("div",{staticClass:"friend"},[null!=e.memoName?i("p",{staticClass:"friendName"},[t._v(t._s(e.memoName))]):t._e(),t._v(" "),null==e.memoName?i("p",{staticClass:"friendName"},[t._v(t._s(e.nickName))]):t._e(),t._v(" "),i("p",{staticClass:"time"},[t._v(t._s(e.outTime))])])]),t._v(" "),i("div",{staticClass:"list_right"},[i("img",{staticClass:"moodimg",attrs:{src:e.moodValueUrl}}),t._v(" "),i("div",{staticClass:"interaction",on:{click:function(a){a.stopPropagation(),t.care(e.id)}}},[i("div",[t._v(t._s(e.careCount))]),t._v(" "),e.moodValue>=5&&null==e.isCare?i("img",{class:{heartUp:e.hit},attrs:{src:a(91),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null==e.isCare?i("img",{class:{heartUp:e.hit},attrs:{src:a(77),alt:""}}):t._e(),t._v(" "),e.moodValue>=5&&null!=e.isCare?i("img",{class:{heartUp:e.hit},attrs:{src:a(92),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null!=e.isCare?i("img",{class:{heartUp:e.hit},attrs:{src:a(69),alt:""}}):t._e()])])])])})],2):t._e(),t._v(" "),i("a",{staticClass:"share",on:{click:function(e){t.createinvite()}}},[t._v("点击生成邀请卡")])]),t._v(" "),i("div",{staticClass:"addMoodBg"})],1)},staticRenderFns:[]}},228:function(t,e,a){var i=a(148);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(2)("0a51739f",i,!0)},51:function(t,e,a){a(228);var i=a(1)(a(111),a(199),null,null);t.exports=i.exports},69:function(t,e,a){t.exports=a.p+"list_baob_pre.png"},71:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{topImg:xqzs.mood.getTopImg()}}}},72:function(t,e,a){e=t.exports=a(0)(),e.push([t.i,".banner{width:100%}.banner img{display:block;width:100%}.index_banner{position:relative}",""])},74:function(t,e,a){a(76);var i=a(1)(a(71),a(75),null,null);t.exports=i.exports},75:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.topImg}})},staticRenderFns:[]}},76:function(t,e,a){var i=a(72);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(2)("d4b7634e",i,!0)},77:function(t,e,a){t.exports=a.p+"list_baob_nor.png"},91:function(t,e,a){t.exports=a.p+"list_icon_dianz_nor.png"},92:function(t,e,a){t.exports=a.p+"list_icon_dianz_pre.png"}});
//# sourceMappingURL=1.build.js.map?7f9ee