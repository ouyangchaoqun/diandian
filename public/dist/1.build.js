webpackJsonp([1],{111:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__banner_vue__=__webpack_require__(74),__WEBPACK_IMPORTED_MODULE_0__banner_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__banner_vue__),myCenter={template:"#myCenter"};__webpack_exports__.default={data:function(){return{myLastMood:null,user:{},friendMoodsSpe:null,friendMoods:null,notice:{count:0},linkTo:"#",noticeLink:"/notice",fillFlag:!1,hasNewFirendMood:!1,newFirendMoodStyle:"",hasNewPerfect:!1,newPerfectStyle:""}},methods:{care:function(t){var e=this;return this.$http.put(web.API_PATH+"mood/care/add",{moodId:t,userId:"omg"}).then(function(i){if(1===i.data.status){for(var a=0;a<e.friendMoodsSpe.length;a++)e.friendMoodsSpe[a].id===t&&(e.friendMoodsSpe[a].careCount=i.data.data,e.friendMoodsSpe[a].hit=!0,e.friendMoodsSpe[a].isCare=!0);for(a=0;a<e.friendMoods.length;a++)e.friendMoods[a].id===t&&(e.friendMoods[a].hit=!0,e.friendMoods[a].careCount=i.data.data,e.friendMoods[a].isCare=!0);console.log(e.friendMoods)}},function(t){}),!1},link:function(t){location.href=t},_createinvite:function(t,e){this.$http({method:"GET",type:"json",url:web.API_PATH+"wei/xin/create/invite/"+t+"/_userId_"}).then(function(t){t&&1==t.data.status&&"function"==typeof e&&e()})},createinvite:function(){var t=this;t._createinvite("link",function(){t._createinvite("card",function(){}),xqzs.weui.dialog({title:"邀请卡已经发送",msg:"前往公众号查看，分享好友互为关注",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(t){}}})})},canWriteMood:function(){},getMoodCount:function(t){this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/get/user/count/_userId_"}).then(function(e){e.data&&1==e.data.status&&"function"==typeof t&&t(e.data.data)})},getFriendLastMood:function(){var t=this,e=xqzs.friendmood.getlast();""!=e&&t.$http.get(web.API_PATH+"mood/find/friendlast/_userId_").then(function(i){if(i&&1==i.data.status){var a=i.data.data,s=a.id;if(console.info(s+"   "+e),s>parseFloat(e)){t.hasNewFirendMood=!0;var o=$("#tabs .tab:eq(0)"),n=(o.width()-32)/2;t.newFirendMoodStyle="right:"+n+"px"}}})},getNewPerfect:function(){if(xqzs.version.isshow("perfectinfo")){this.hasNewPerfect=!0;var t=$("#tabs .tab:eq(0)"),e=(t.width()-32)/2;this.newPerfectStyle="right:"+e+"px"}},hideNewCircle:function(t,e){"mood"==t&&(this.hasNewFirendMood=!1),"perfect"==t&&(this.hasNewPerfect=!1),this.$router.push(e)},wxFaceUrl:function(t){return xqzs.mood.wxface(t)}},computed:{hasLine:function(){return null!=this.friendMoodsSpe&&this.friendMoodsSpe.length>0&&null!=this.friendMoods&&this.friendMoods.length>0}},mounted:function mounted(){var _this=this;_this.getFriendLastMood(),_this.getNewPerfect(),_this.noticeLink=_this.noticeLink+"/?time="+xqzs.dateTime.getTimeStamp(),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),console.log(_this.user),_this.getMoodCount(function(t){t<10?_this.linkTo="/addMood":""==_this.user.mobile||null==_this.user.mobile||void 0==_this.user.mobile?_this.linkTo="/me/personal/validate":_this.linkTo="/addMood"}))},function(t){}),this.$http({method:"GET",type:"json",url:web.API_PATH+"notice/find/new/_userId_"}).then(function(data){null!==data.data.data&&(_this.notice=eval(data.data.data),console.log(_this.notice))},function(t){}),0!==_this.user.isLookFriend&&(this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/query/friend/pull/day/_userId_/1/1"}).then(function(data){1===data.data.status&&null!==data.data.data&&(_this.friendMoodsSpe=eval(data.data.data),_this.friendMoodsSpe=xqzs.mood.initMoodsData(_this.friendMoodsSpe))},function(t){}),this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/query/friend/pull/day/_userId_/0/1"}).then(function(data){1===data.data.status&&null!==data.data.data&&(_this.friendMoods=eval(data.data.data),_this.friendMoods=xqzs.mood.initMoodsData(_this.friendMoods))},function(t){})),this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/find/userlast/_userId_"}).then(function(data){1===data.data.status&&1===data.data.status&&null!==data.data.data&&(_this.myLastMood=eval(data.data.data),_this.myLastMood.moodValueUrl=web.IMG_PATH+"list_mood_0"+_this.myLastMood.moodValue+".png",_this.myLastMood.careListUrl="./myCenter/careMe?moodId="+_this.myLastMood.id,_this.myLastMood.addTime=xqzs.dateTime.formatTime(_this.myLastMood.addTime),console.log(_this.myLastMood))},function(t){})},components:{"v-banner":__WEBPACK_IMPORTED_MODULE_0__banner_vue___default.a}}},148:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".tab{position:relative}.tab .hasnew{background-color:red;border-radius:50%;position:absolute;top:1px;height:8px;width:8px}.tab img{height:24px;width:24px}.friendCenter .addBorder{padding:0 15px;border-bottom:1px solid #eee}#tabs{position:fixed;z-index:10000}body,html{width:100%;height:100%;background:#f5f5f5}*{margin:0;padding:0}a{text-decoration:none}li{list-style:none}.addMoodBg{background:rgba(0,0,0,.4);height:100%;width:100%;z-index:10001;position:fixed;display:none}.mycenter{background:#fff}.mycenter a{height:72px;display:block;padding:0 15px;-webkit-tap-highlight-color:rgba(0,0,0,.2)}.friend{margin-left:55px;padding-top:28px}.friendName{font-size:16px;color:#333;line-height:0;margin-bottom:11px}.time{font-size:14px;color:#999}.list_left{float:left;position:relative;height:100%}.headerimg{height:44px;width:44px;display:inline-block;border-radius:3px;position:absolute;top:50%;margin-top:-20px}.list_left span{font-size:15px;line-height:72px;color:#000;margin-left:55px}.list_right{float:right;height:72px}.list_right span{color:#666;font-size:15px;line-height:72px}.moodimg{width:34px;height:34px;float:left;margin-top:17px;margin-right:20px}.interaction{float:left;text-align:center;padding-top:17px;font-size:13px;color:#aeaeae;overflow:hidden}.interaction div{line-height:14px}.interaction img{width:20px;height:20px}.interaction a{height:20px}.mycenterFill{width:100%;height:10px;background:#eee}.friendCenter{padding:0}.share{line-height:36px;height:36px;font-size:14px;margin:30px 15px 60px;color:#696969;display:block;border:1px solid rgba(0,0,0,.2);background:#fff;border-radius:5px;text-align:center;margin-bottom:78px}.share:active{background:#eee}.notice_box{padding:15px;background:#fff;border-bottom:1px solid #eee}.notice{height:40px;width:180px;background:#393939;border-radius:5px;margin:0 auto}.notice_friend{height:32px;width:32px;float:left;margin-left:5px;margin-top:5px;display:block}.notice div{float:left;height:40px;line-height:40px;color:#fff;margin-left:32px;font-size:13px}.notice .goNotice{width:16px;height:16px;display:block;float:right;margin-right:14px;margin-top:12px}",""])},159:function(t,e,i){t.exports=i.p+"face1.png"},160:function(t,e,i){t.exports=i.p+"friend1.png"},161:function(t,e,i){t.exports=i.p+"iconjt.png"},171:function(t,e,i){t.exports=i.p+"me1.png"},175:function(t,e,i){t.exports=i.p+"rl1.png"},197:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"addMoodBg"}),t._v(" "),a("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("心情指数")]),t._v(" "),a("div",{staticClass:"weui-tabbar",attrs:{id:"tabs"}},[a("router-link",{staticClass:"weui-tabbar__item  tab",attrs:{to:t.linkTo}},[a("span",{staticStyle:{display:"inline-block"}},[a("img",{staticClass:"weui-tabbar__icon",attrs:{src:i(159)}})]),t._v(" "),a("p",{staticClass:"weui-tabbar__label"},[t._v("记录心情")])]),t._v(" "),a("router-link",{staticClass:"weui-tabbar__item tab",attrs:{to:"/calendar"}},[a("span",{staticStyle:{display:"inline-block"}},[a("img",{staticClass:"weui-tabbar__icon",attrs:{src:i(175)}})]),t._v(" "),a("p",{staticClass:"weui-tabbar__label"},[t._v("心情日历")])]),t._v(" "),a("a",{staticClass:"weui-tabbar__item tab",on:{click:function(e){t.hideNewCircle("mood","/friendsMoods")}}},[t._m(0),t._v(" "),a("p",{staticClass:"weui-tabbar__label"},[t._v("朋友心情")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.hasNewFirendMood,expression:"hasNewFirendMood"}],staticClass:"hasnew",style:t.newFirendMoodStyle})]),t._v(" "),a("a",{staticClass:"weui-tabbar__item tab",on:{click:function(e){t.hideNewCircle("perfect","/me")}}},[t._m(1),t._v(" "),a("p",{staticClass:"weui-tabbar__label"},[t._v("我的")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.hasNewPerfect,expression:"hasNewPerfect"}],staticClass:"hasnew",style:t.newPerfectStyle})])],1),t._v(" "),a("div",{staticClass:"banner"},[a("v-banner")],1),t._v(" "),t.notice.count?a("router-link",{staticClass:"weui-tabbar__item tab",staticStyle:{padding:"0"},attrs:{to:t.noticeLink}},[a("div",{staticClass:"notice_box"},[a("div",{staticClass:"notice"},[a("img",{staticClass:"notice_friend",attrs:{src:t.wxFaceUrl(t.notice.lastuser.faceUrl)}}),t._v(" "),a("div",[t._v(t._s(t.notice.count)+" 条新消息")]),t._v(" "),a("img",{staticClass:"goNotice",attrs:{src:i(161),alt:""}})])])]):t._e(),t._v(" "),a("div",{staticClass:"mycenter_list"},[a("div",{staticClass:"mycenter"},[a("router-link",{attrs:{to:"./myCenter/myIndex"}},[a("div",{staticClass:"list_left"},[a("img",{staticClass:"headerimg",attrs:{src:t.wxFaceUrl(t.user.faceUrl)}}),t._v(" "),t.myLastMood?[a("div",{staticClass:"friend"},[a("p",{staticClass:"friendName"},[t._v(t._s(t.user.nickName))]),t._v(" "),a("p",{staticClass:"time"},[t._v(t._s(t.myLastMood.addTime))])])]:t._e(),t._v(" "),t.myLastMood?t._e():[a("span",[t._v(t._s(t.user.nickName))])]],2),t._v(" "),a("div",{staticClass:"list_right"},[null!=t.myLastMood?[a("img",{staticClass:"moodimg",attrs:{src:t.myLastMood.moodValueUrl}}),t._v(" "),a("div",{staticClass:"interaction"},[a("div",[t._v(t._s(t.myLastMood.careCount))]),t._v(" "),a("router-link",{attrs:{to:t.myLastMood.careListUrl}},[t.myLastMood.moodValue>=5&&t.myLastMood.careCount<=0?a("img",{attrs:{src:i(91),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue>=5&&t.myLastMood.careCount>0?a("img",{attrs:{src:i(92),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue<5&&t.myLastMood.careCount>0?a("img",{attrs:{src:i(69),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue<5&&t.myLastMood.careCount<=0?a("img",{attrs:{src:i(77),alt:""}}):t._e()])],1)]:t._e(),t._v(" "),null==t.myLastMood?[a("span",[t._v("还未记录")])]:t._e()],2)])],1),t._v(" "),a("div",{staticClass:"mycenterFill"}),t._v(" "),null!=t.user.isLookFriend&&0!==t.user.isLookFriend?a("div",{staticClass:"mycenter friendCenter"},[t._l(t.friendMoodsSpe,function(e){return a("div",{staticClass:"addBorder"},[a("a",{on:{click:function(i){t.link(e.link)}}},[a("div",{staticClass:"list_left"},[a("img",{staticClass:"headerimg",attrs:{src:t.wxFaceUrl(e.faceUrl)}}),t._v(" "),a("div",{staticClass:"friend"},[null!=e.memoName?a("p",{staticClass:"friendName"},[t._v(t._s(e.memoName))]):t._e(),t._v(" "),null==e.memoName?a("p",{staticClass:"friendName"},[t._v(t._s(e.nickName))]):t._e(),t._v(" "),a("p",{staticClass:"time"},[t._v(t._s(e.outTime))])])]),t._v(" "),a("div",{staticClass:"list_right"},[a("img",{staticClass:"moodimg",attrs:{src:e.moodValueUrl}}),t._v(" "),a("div",{staticClass:"interaction",on:{click:function(i){i.stopPropagation(),t.care(e.id)}}},[a("div",[t._v(t._s(e.careCount))]),t._v(" "),e.moodValue>=5&&null==e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(91),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null==e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(77),alt:""}}):t._e(),t._v(" "),e.moodValue>=5&&null!=e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(92),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null!=e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(69),alt:""}}):t._e()])])])])}),t._v(" "),t.hasLine?a("div",{staticClass:"mycenterFill"}):t._e(),t._v(" "),t._l(t.friendMoods,function(e){return a("div",{staticClass:"addBorder"},[a("a",{on:{click:function(i){t.link(e.link)}}},[a("div",{staticClass:"list_left"},[a("img",{staticClass:"headerimg",attrs:{src:t.wxFaceUrl(e.faceUrl)}}),t._v(" "),a("div",{staticClass:"friend"},[null!=e.memoName?a("p",{staticClass:"friendName"},[t._v(t._s(e.memoName))]):t._e(),t._v(" "),null==e.memoName?a("p",{staticClass:"friendName"},[t._v(t._s(e.nickName))]):t._e(),t._v(" "),a("p",{staticClass:"time"},[t._v(t._s(e.outTime))])])]),t._v(" "),a("div",{staticClass:"list_right"},[a("img",{staticClass:"moodimg",attrs:{src:e.moodValueUrl}}),t._v(" "),a("div",{staticClass:"interaction",on:{click:function(i){i.stopPropagation(),t.care(e.id)}}},[a("div",[t._v(t._s(e.careCount))]),t._v(" "),e.moodValue>=5&&null==e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(91),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null==e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(77),alt:""}}):t._e(),t._v(" "),e.moodValue>=5&&null!=e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(92),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null!=e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(69),alt:""}}):t._e()])])])])})],2):t._e(),t._v(" "),a("a",{staticClass:"share",on:{click:function(e){t.createinvite()}}},[t._v("点击生成邀请卡")])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticStyle:{display:"inline-block"}},[a("img",{staticClass:"weui-tabbar__icon",attrs:{src:i(160)}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticStyle:{display:"inline-block"}},[a("img",{staticClass:"weui-tabbar__icon",attrs:{src:i(171)}})])}]}},226:function(t,e,i){var a=i(148);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(2)("0a51739f",a,!0)},51:function(t,e,i){i(226);var a=i(1)(i(111),i(197),null,null);t.exports=a.exports},69:function(t,e,i){t.exports=i.p+"list_baob_pre.png"},71:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{topImg:xqzs.mood.getTopImg()}}}},72:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".banner{width:100%}.banner img{display:block;width:100%}.index_banner{position:relative}",""])},74:function(t,e,i){i(76);var a=i(1)(i(71),i(75),null,null);t.exports=a.exports},75:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.topImg}})},staticRenderFns:[]}},76:function(t,e,i){var a=i(72);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(2)("d4b7634e",a,!0)},77:function(t,e,i){t.exports=i.p+"list_baob_nor.png"},91:function(t,e,i){t.exports=i.p+"list_icon_dianz_nor.png"},92:function(t,e,i){t.exports=i.p+"list_icon_dianz_pre.png"}});
//# sourceMappingURL=1.build.js.map