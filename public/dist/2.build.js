webpackJsonp([2],{109:function(t,e,i){t.exports=i.p+"list_icon_dianz_nor.png"},110:function(t,e,i){t.exports=i.p+"list_icon_dianz_pre.png"},134:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__banner_vue__=__webpack_require__(79),__WEBPACK_IMPORTED_MODULE_0__banner_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__banner_vue__),__WEBPACK_IMPORTED_MODULE_1__bus_js__=__webpack_require__(31),myCenter={template:"#myCenter"};__webpack_exports__.default={data:function(){return{myLastMood:null,notice:{count:0},linkTo:"#",noticeLink:"/notice",fillFlag:!1,hasNewFirendMood:!1,newFirendMoodStyle:"",hasNewPerfect:!1,newPerfectStyle:"",recordImg:web.IMG_PATH+"face1.png",calendarImg:web.IMG_PATH+"rl1.png",friendsImg:web.IMG_PATH+"friend1.png",meImg:web.IMG_PATH+"me1.png",recordOn:!1,calendarOn:!1,friendsOn:!1,meOn:!1,scrollTop:0}},filters:{shortName:function(t,e){return xqzs.shortname(t,e)}},props:{user:{type:Object},friendMoodsSpe:{type:Object},friendMoods:{type:Object},myLastMood:{type:Object}},methods:{record:function(){var t=this;this.recordImg=web.IMG_PATH+"face2.png",this.recordOn=!0,setTimeout(function(){t.$router.push(t.linkTo)},2)},calendar:function(){var t=this;this.calendarImg=web.IMG_PATH+"rl2.png",this.calendarOn=!0,setTimeout(function(){t.$router.push("/calendar")},2)},care:function(t){var e=this;return this.$http.put(web.API_PATH+"mood/care/add",{moodId:t,userId:"omg"}).then(function(i){if(1===i.data.status){for(var a=0;a<e.friendMoodsSpe.length;a++)e.friendMoodsSpe[a].id===t&&(e.friendMoodsSpe[a].careCount=i.data.data,e.friendMoodsSpe[a].hit=!0,e.friendMoodsSpe[a].isCare=!0);for(a=0;a<e.friendMoods.length;a++)e.friendMoods[a].id===t&&(e.friendMoods[a].hit=!0,e.friendMoods[a].careCount=i.data.data,e.friendMoods[a].isCare=!0);console.log(e.friendMoods)}},function(t){}),!1},link:function(t){this.$router.push(t)},friendLink:function(t){this.$router.push({name:"friendUrl",params:{Id:t}})},_createinvite:function(t,e){this.$http({method:"GET",type:"json",url:web.API_PATH+"wei/xin/create/invite/"+t+"/_userId_"}).then(function(t){t&&1==t.data.status&&"function"==typeof e&&e()})},createinvite:function(){var t=this;t._createinvite("link",function(){t._createinvite("card",function(){}),xqzs.weui.dialog({title:"邀请卡已经发送",msg:"前往公众号查看，分享好友互为关注",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(t){}}})})},canWriteMood:function(){},getMoodCount:function(t){this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/get/user/count/_userId_"}).then(function(e){e.data&&1==e.data.status&&"function"==typeof t&&t(e.data.data)})},getFriendLastMood:function(){var t=this,e=xqzs.friendmood.getlast();""!=e&&t.$http.get(web.API_PATH+"mood/find/friendlast/_userId_").then(function(i){if(i&&1==i.data.status){var a=i.data.data,n=a.id;if(console.info(n+"   "+e),n>parseFloat(e)){t.hasNewFirendMood=!0;var s=$("#tabs .tab:eq(0)"),o=(s.width()-32)/2;t.newFirendMoodStyle="right:"+o+"px"}}})},getNewPerfect:function(){if(xqzs.version.isshow("perfectinfo")){this.hasNewPerfect=!0;var t=$("#tabs .tab:eq(0)"),e=(t.width()-32)/2;this.newPerfectStyle="right:"+e+"px"}},hideNewCircle:function(t,e){var i=this;"mood"==t&&(this.friendsImg=web.IMG_PATH+"friend2.png",this.friendsOn=!0,this.hasNewFirendMood=!1),"perfect"==t&&(this.meImg=web.IMG_PATH+"me2.png",this.meOn=!0,this.hasNewPerfect=!1),setTimeout(function(){i.$router.push(e)},2)},wxFaceUrl:function(t){return xqzs.mood.wxface(t)}},computed:{hasLine:function(){return null!=this.friendMoodsSpe&&this.friendMoodsSpe.length>0&&null!=this.friendMoods&&this.friendMoods.length>0}},mounted:function mounted(){var _this=this;if(xqzs.wx.setConfig(_this),$(".weui-tab__panel").scroll(function(){xqzs.localdb.set("indexScrollTop",$(this).scrollTop())}),_this.noticeLink=_this.noticeLink+"/?time="+xqzs.dateTime.getTimeStamp(),_this.getMoodCount(function(t){t<10?_this.linkTo="/addMood":""==_this.user.mobile||null==_this.user.mobile||void 0==_this.user.mobile?_this.linkTo="/me/personal/validate":_this.linkTo="/addMood"}),__WEBPACK_IMPORTED_MODULE_1__bus_js__.a.$emit("initHomeData"),_this.getFriendLastMood(),_this.getNewPerfect(),_this.$http({method:"GET",type:"json",url:web.API_PATH+"notice/find/new/_userId_"}).then(function(data){null!==data.data.data&&(_this.notice=eval(data.data.data),console.log(_this.notice))},function(t){}),window.screen.height==$(window).height()){if(320==window.screen.width&&548==window.screen.availHeight){var style="<style id='iphone5style'>.transitionBox .child-view{height:504px !important;}</style>";$(".child-view").append(style)}}else $("#iphone5style").remove()},updated:function(){var t=$(".mycenter>a ,.addBorder>a");xqzs.weui.active(t),$(".interaction").on("touchstart",function(){event.stopPropagation()})},components:{"v-banner":__WEBPACK_IMPORTED_MODULE_0__banner_vue___default.a}}},178:function(t,e,i){e=t.exports=i(1)(),e.push([t.i,".tab{position:relative}.tab .hasnew{background-color:red;border-radius:50%;position:absolute;top:1px;height:8px!important;width:8px!important}.tab img{height:24px;width:24px}.tabOn{color:#6cb954}.friendCenter .addBorder{border-bottom:1px solid #eee}#tabs{z-index:10000;background:#fff;height:47px;border-top:1px solid #ddd;padding-top:1px}#tabs:before{display:none}#tabs .weui-tabbar__label{color:#777}#tabs a span{display:inline-block;height:24px;width:24px}#tabs a span.recordImg{background:url("+i(193)+") no-repeat;background-size:24px}#tabs a span.calendarImg{background:url("+i(222)+") no-repeat;background-size:24px 24px}#tabs a span.friendsImg{background:url("+i(195)+") no-repeat;background-size:24px}#tabs a span.meImg{background:url("+i(206)+") no-repeat;background-size:24px}#tabs a:active span.recordImg{background:url("+i(194)+") no-repeat;background-size:24px}#tabs a:active span.calendarImg{background:url("+i(223)+") no-repeat;background-size:24px 24px}#tabs a:active span.friendsImg{background:url("+i(196)+") no-repeat;background-size:24px}#tabs a:active span.meImg{background:url("+i(207)+") no-repeat;background-size:24px}#tabs a:active .weui-tabbar__label{color:#6cb954}body,html{width:100%;height:100%;background:#f5f5f5}*{margin:0;padding:0}a{text-decoration:none}li{list-style:none}.addMoodBg{background:rgba(0,0,0,.6);height:100%;width:100%;z-index:0;position:fixed;top:0;display:none}.mycenter{background:#fff}.mycenter a{height:72px;display:block;padding:0 15px;padding-right:0}.friend{margin-left:59px;padding-top:12px}.friendName{font-size:16px;color:#333;width:128px;overflow:hidden;text-overflow:ellipsis}.time{font-size:14px;color:#999}.list_left{float:left;position:relative;height:100%}.headerimg{height:44px;width:44px;display:inline-block;border-radius:3px;position:absolute;top:50%;margin-top:-22px}.list_left span{font-size:15px;line-height:72px;color:#000;margin-left:59px}.list_right{float:right;height:72px}.list_right span{color:#666;font-size:15px;line-height:72px}.list_right span.noRecord{margin-right:24px}.moodimg{width:34px;height:34px;float:left;margin-top:17px;margin-right:4px}.interaction{float:left;text-align:center;padding:15px;padding-top:16px;padding-left:16px;padding-right:14px;font-size:13px;color:#aeaeae;overflow:hidden}.interaction div{line-height:14px}.interaction img{display:block;margin-top:2px;width:20px;height:20px}.interaction a{height:20px;padding:0}.mycenterFill{width:100%;height:12px;background:#f4f4f8}.friendCenter{padding:0}.share{line-height:40px;height:40px;font-size:14px;margin:25px 15px 30px;color:#696969;display:block;border:1px solid rgba(0,0,0,.2);background:#fff;border-radius:5px;text-align:center}.share:active{background:#ececec}.notice_box{background:#fff;border-bottom:1px solid #eee}.notice_box_p{padding:16px 0}.notice{height:40px;width:180px;background:#393939;border-radius:5px;margin:0 auto}.notice:active{background:#1f1f1f}.notice_friend{height:32px;width:32px;float:left;margin-left:5px;margin-top:5px;display:block}.notice div{float:left;height:40px;line-height:40px;color:#fff;margin-left:32px;font-size:13px}.notice .goNotice{width:16px;height:16px;display:block;float:right;margin-right:14px;margin-top:12px}.notice img{height:30px;width:30px}",""])},193:function(t,e,i){t.exports=i.p+"face1.png"},194:function(t,e,i){t.exports=i.p+"face2.png"},195:function(t,e,i){t.exports=i.p+"friend1.png"},196:function(t,e,i){t.exports=i.p+"friend2.png"},197:function(t,e,i){t.exports=i.p+"iconjt.png"},206:function(t,e,i){t.exports=i.p+"me1.png"},207:function(t,e,i){t.exports=i.p+"me2.png"},222:function(t,e,i){t.exports=i.p+"rl1.png"},223:function(t,e,i){t.exports=i.p+"rl2.png"},251:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{height:"100%"}},[a("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("心情指数")]),t._v(" "),a("div",{staticClass:"weui-tabbar",attrs:{id:"tabs"}},[a("a",{staticClass:"weui-tabbar__item  tab",on:{click:function(e){t.record()}}},[a("span",{staticClass:"recordImg"}),t._v(" "),a("p",{staticClass:"weui-tabbar__label",class:{tabOn:t.recordOn}},[t._v("记录心情")])]),t._v(" "),a("a",{staticClass:"weui-tabbar__item tab ",on:{click:function(e){t.calendar()}}},[a("span",{staticClass:"calendarImg"}),t._v(" "),a("p",{staticClass:"weui-tabbar__label",class:{tabOn:t.calendarOn}},[t._v("心情日历")])]),t._v(" "),a("a",{staticClass:"weui-tabbar__item tab",on:{click:function(e){t.hideNewCircle("mood","/friendsMoods")}}},[a("span",{staticClass:"friendsImg"}),t._v(" "),a("p",{staticClass:"weui-tabbar__label",class:{tabOn:t.friendsOn}},[t._v("朋友心情")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.hasNewFirendMood,expression:"hasNewFirendMood"}],staticClass:"hasnew",style:t.newFirendMoodStyle})]),t._v(" "),a("a",{staticClass:"weui-tabbar__item tab",on:{click:function(e){t.hideNewCircle("perfect","/me")}}},[a("span",{staticClass:"meImg"}),t._v(" "),a("p",{staticClass:"weui-tabbar__label",class:{tabOn:t.meOn}},[t._v("我的")]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.hasNewPerfect,expression:"hasNewPerfect"}],staticClass:"hasnew",style:t.newPerfectStyle})])]),t._v(" "),a("div",{staticClass:"weui-tab__panel"},[a("div",{staticClass:"banner"},[a("v-banner")],1),t._v(" "),t.notice.count?a("router-link",{staticClass:"weui-tabbar__item tab",staticStyle:{padding:"0"},attrs:{to:t.noticeLink}},[a("div",{staticClass:"notice_box notice_box_p"},[a("div",{staticClass:"notice"},[a("img",{staticClass:"notice_friend",attrs:{src:t.wxFaceUrl(t.notice.lastuser.faceUrl)}}),t._v(" "),a("div",[t._v(t._s(t.notice.count)+" 条新消息")]),t._v(" "),a("img",{staticClass:"goNotice",attrs:{src:i(197),alt:""}})])])]):t._e(),t._v(" "),a("div",{staticClass:"mycenter_list"},[a("div",{staticClass:"mycenter"},[a("a",{on:{click:function(e){t.link("/myCenter/myIndex")}}},[a("div",{staticClass:"list_left"},[a("img",{staticClass:"headerimg",attrs:{src:t.wxFaceUrl(t.user.faceUrl)}}),t._v(" "),t.myLastMood?[a("div",{staticClass:"friend"},[a("p",{staticClass:"friendName"},[t._v(t._s(t._f("shortName")(t.user.nickName,7)))]),t._v(" "),a("p",{staticClass:"time"},[t._v(t._s(t.myLastMood.addTime))])])]:t._e(),t._v(" "),t.myLastMood?t._e():[a("span",[t._v(t._s(t._f("shortName")(t.user.nickName,7)))])]],2),t._v(" "),a("div",{staticClass:"list_right"},[null!=t.myLastMood?[a("img",{staticClass:"moodimg",attrs:{src:t.myLastMood.moodValueUrl}}),t._v(" "),a("div",{staticClass:"interaction",on:{click:function(e){e.stopPropagation(),t.link(t.myLastMood.careListUrl)}}},[a("div",[t._v(t._s(t.myLastMood.careCount))]),t._v(" "),t.myLastMood.moodValue>=5&&t.myLastMood.careCount<=0?a("img",{attrs:{src:i(109),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue>=5&&t.myLastMood.careCount>0?a("img",{attrs:{src:i(110),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue<5&&t.myLastMood.careCount>0?a("img",{attrs:{src:i(82),alt:""}}):t._e(),t._v(" "),t.myLastMood.moodValue<5&&t.myLastMood.careCount<=0?a("img",{attrs:{src:i(88),alt:""}}):t._e()])]:t._e(),t._v(" "),null==t.myLastMood?[a("span",{staticClass:"noRecord"},[t._v("还未记录")])]:t._e()],2)])]),t._v(" "),a("div",{staticClass:"mycenterFill"}),t._v(" "),null!=t.user.isLookFriend&&0!==t.user.isLookFriend?a("div",{staticClass:"mycenter friendCenter"},[t._l(t.friendMoodsSpe,function(e){return a("div",{staticClass:"addBorder"},[a("a",{on:{click:function(i){t.friendLink(e.userId)}}},[a("div",{staticClass:"list_left"},[a("img",{staticClass:"headerimg",attrs:{src:t.wxFaceUrl(e.faceUrl)}}),t._v(" "),a("div",{staticClass:"friend"},[null!=e.memoName?a("p",{staticClass:"friendName"},[t._v(t._s(t._f("shortName")(e.memoName,7)))]):t._e(),t._v(" "),null==e.memoName?a("p",{staticClass:"friendName"},[t._v(t._s(t._f("shortName")(e.nickName,7)))]):t._e(),t._v(" "),a("p",{staticClass:"time"},[t._v(t._s(e.outTime))])])]),t._v(" "),a("div",{staticClass:"list_right"},[a("img",{staticClass:"moodimg",attrs:{src:e.moodValueUrl}}),t._v(" "),a("div",{staticClass:"interaction",on:{click:function(i){i.stopPropagation(),t.care(e.id)}}},[a("div",[t._v(t._s(e.careCount))]),t._v(" "),e.moodValue>=5&&null==e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(109),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null==e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(88),alt:""}}):t._e(),t._v(" "),e.moodValue>=5&&null!=e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(110),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null!=e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(82),alt:""}}):t._e()])])])])}),t._v(" "),t.hasLine?a("div",{staticClass:"mycenterFill"}):t._e(),t._v(" "),t._l(t.friendMoods,function(e){return a("div",{staticClass:"addBorder"},[a("a",{on:{click:function(i){t.friendLink(e.userId)}}},[a("div",{staticClass:"list_left"},[a("img",{staticClass:"headerimg",attrs:{src:t.wxFaceUrl(e.faceUrl)}}),t._v(" "),a("div",{staticClass:"friend"},[null!=e.memoName?a("p",{staticClass:"friendName"},[t._v(t._s(t._f("shortName")(e.memoName,7)))]):t._e(),t._v(" "),null==e.memoName?a("p",{staticClass:"friendName"},[t._v(t._s(t._f("shortName")(e.nickName,7)))]):t._e(),t._v(" "),a("p",{staticClass:"time"},[t._v(t._s(e.outTime))])])]),t._v(" "),a("div",{staticClass:"list_right"},[a("img",{staticClass:"moodimg",attrs:{src:e.moodValueUrl}}),t._v(" "),a("div",{staticClass:"interaction",on:{click:function(i){i.stopPropagation(),t.care(e.id)}}},[a("div",[t._v(t._s(e.careCount))]),t._v(" "),e.moodValue>=5&&null==e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(109),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null==e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(88),alt:""}}):t._e(),t._v(" "),e.moodValue>=5&&null!=e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(110),alt:""}}):t._e(),t._v(" "),e.moodValue<5&&null!=e.isCare?a("img",{class:{heartUp:e.hit},attrs:{src:i(82),alt:""}}):t._e()])])])])})],2):t._e(),t._v(" "),a("a",{staticClass:"share",on:{click:function(e){t.createinvite()}}},[t._v("点击生成邀请卡")])])],1),t._v(" "),a("div",{staticClass:"addMoodBg"})])},staticRenderFns:[]}},284:function(t,e,i){var a=i(178);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(2)("0a51739f",a,!0)},54:function(t,e,i){i(284);var a=i(0)(i(134),i(251),null,null);t.exports=a.exports},77:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{topImg:xqzs.mood.getTopImg()}}}},78:function(t,e,i){e=t.exports=i(1)(),e.push([t.i,".banner{width:100%}.banner img{display:block;width:100%}.index_banner{position:relative}",""])},79:function(t,e,i){i(81);var a=i(0)(i(77),i(80),null,null);t.exports=a.exports},80:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.topImg}})},staticRenderFns:[]}},81:function(t,e,i){var a=i(78);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(2)("d4b7634e",a,!0)},82:function(t,e,i){t.exports=i.p+"list_baob_pre.png"},88:function(t,e,i){t.exports=i.p+"list_baob_nor.png"}});
//# sourceMappingURL=2.build.js.map?65d3e