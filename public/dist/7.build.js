webpackJsonp([7],{151:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(66);s.default={props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1},isPageEnd:!1,isShowMoreText:{type:Boolean,default:!0},isNotRefresh:!0,cutHeight:0},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1,height:"height:100px"}},mounted:function(){var t=this;t.cutHeight||(t.cutHeight=0),this.height="height:"+(document.body.clientHeight-t.cutHeight)+"px",this.loadMoreText(),i.a.$on("scrollMoreTextInit",function(s){t.isShowMoreText=s,t.loadMoreText()}),i.a.$on("scrollHeightInit",function(s){t.cutHeight=s,t.initHeight()})},methods:{initHeight:function(){this.height="height:"+(document.body.clientHeight-this.cutHeight)+"px"},touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var s=t.targetTouches[0].pageY-this.startY-this.startScroll;s>0&&t.preventDefault(),this.top=Math.pow(s,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0),this.loadMoreText()}},refresh:function(){this.state=2,this.top=this.offset,this.isNotRefresh?this.refreshDone():this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},loadMoreText:function(){console.log(this.isShowMoreText),this.isShowMoreText?this.isPageEnd?($(".load-more").hide(),$(".load-finish").show()):($(".load-finish").hide(),$(".load-more").show()):($(".load-more").hide(),$(".load-finish").hide())},infinite:function(){console.log("Loading"),this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){console.log("done"),this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var s=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-s-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}},152:function(t,s,e){s=t.exports=e(0)(),s.push([t.i,"body,html{height:100%}.yo-scroll{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;background:#f5f5f5}.yo-scroll .inner{position:absolute;top:-2rem;width:100%;transition-duration:.3s}.yo-scroll .pull-refresh{position:relative;left:0;top:0;width:100%;height:2rem;display:flex;align-items:center;justify-content:center}.yo-scroll.touch .inner{transition-duration:0ms}.yo-scroll.down .down-tip,.yo-scroll.refresh .refresh-tip,.yo-scroll.up .up-tip{display:block}.yo-scroll .down-tip,.yo-scroll .refresh-tip,.yo-scroll .up-tip{display:none}.yo-scroll .load-more{height:3rem;display:flex;align-items:center;justify-content:center;text-align:center}.yo-scroll .load-finish{height:2rem;text-align:center}.loadFont{font-size:12px;color:#999}",""])},153:function(t,s,e){e(155);var i=e(1)(e(151),e(154),null,null);t.exports=i.exports},154:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},style:t.height,on:{touchstart:function(s){t.touchStart(s)},touchmove:function(s){t.touchMove(s)},touchend:function(s){t.touchEnd(s)},scroll:function(s){(t.onInfinite||t.infiniteLoading)&&t.onScroll(s)}}},[e("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[e("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.isNotRefresh,expression:"!isNotRefresh"}]},[e("span",{staticClass:"down-tip loadFont"},[t._v("下拉更新")]),t._v(" "),e("span",{staticClass:"up-tip loadFont"},[t._v("松开更新")]),t._v(" "),e("span",{staticClass:"refresh-tip loadFont"},[t._v("更新中")])])])],2),t._v(" "),t._t("default"),t._v(" "),e("footer",{staticClass:"load-more"},[t._t("load-more",[e("span",{directives:[{name:"show",rawName:"v-show",value:!t.infiniteLoading,expression:"!infiniteLoading"}],staticClass:"loadFont"},[t._v("上拉加载更多")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.infiniteLoading,expression:"infiniteLoading"}],staticClass:"loadFont"},[t._v("数据加载中..")])])],2),t._v(" "),e("footer",{staticClass:"load-finish",staticStyle:{display:"none"}},[t._t("load-finish",[e("span",{staticClass:"loadFont"},[t._v("已经加载完成")])])],2)],2)])},staticRenderFns:[]}},155:function(t,s,e){var i=e(152);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(2)("18db66ab",i,!0)},157:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={data:function(){return{topImg:xqzs.mood.getTopImg(),h:320}},mounted:function(){var t=$(window).width();this.h=500*t/750}}},158:function(t,s,e){s=t.exports=e(0)(),s.push([t.i,".banner{width:100%}.banner img{display:block;width:100%}.index_banner{position:relative}",""])},159:function(t,s,e){e(161);var i=e(1)(e(157),e(160),null,null);t.exports=i.exports},160:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("img",{attrs:{src:t.topImg,height:t.h}})},staticRenderFns:[]}},161:function(t,s,e){var i=e(158);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(2)("d4b7634e",i,!0)},174:function(t,s,e){t.exports=e.p+"norecord.png"},187:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e(66);s.default={data:function(){return{moodNum:0,dayNum:0,friendNum:0,linkFriendList:"",linkMoodDat:"",linkOpenMoodCount:""}},props:{mmm:String},methods:{openFriend:function(){""!=this.linkFriendList&&void 0!=this.linkFriendList&&this.$router.push(this.linkFriendList)},openMoodData:function(){""!=this.linkMoodDat&&void 0!=this.linkMoodDat&&this.$router.push(this.linkMoodDat)},openMoodCount:function(){if(""==this.linkMoodCount||void 0==this.linkMoodCount)return void console.log(this.linkMoodCount);console.log(this.linkMoodCount),this.$router.push(this.linkMoodCount)}},mounted:function(){console.log(this.$route.params.Id),""!=this.$route.params.Id&&void 0!=this.$route.params.Id||(this.$route.params.Id="_userId_",this.linkFriendList="/friendList",this.linkMoodDat="/moodData",this.linkMoodCount="/monthStatistics"),this.$http({method:"GET",url:web.API_PATH+"mood/get/user/count/"+this.$route.params.Id}).then(function(t){this.moodNum=t.body.data},function(t){}),this.$http({method:"GET",url:web.API_PATH+"mood/get/user/day/count/"+this.$route.params.Id}).then(function(t){this.dayNum=t.body.data},function(t){}),this.$http({method:"GET",url:web.API_PATH+"user/query/friend/by/user/id/"+this.$route.params.Id}).then(function(t){console.log(t);var s=t.body.data.generalFriends,e=t.body.data.specialFriends.length,i=0;for(var o in s)for(var n in s[o])i++;this.friendNum=i+e},function(t){})}}},189:function(t,s,e){s=t.exports=e(0)(),s.push([t.i,"",""])},196:function(t,s,e){t.exports=e.p+"habitf.png"},197:function(t,s,e){t.exports=e.p+"habitnof.png"},199:function(t,s,e){t.exports=e.p+"indexBanner1.jpg"},207:function(t,s,e){e(210);var i=e(1)(e(187),e(208),null,null);t.exports=i.exports},208:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"IndexAdd"},[e("div",{on:{click:function(s){t.openMoodCount()}}},[e("p",[t._v(t._s(t.dayNum))]),t._v(" "),e("div",[t._v("天记录心情")])]),t._v(" "),e("div",{staticClass:"IndexAddBorder",on:{click:function(s){t.openMoodData()}}},[e("span"),t._v(" "),e("p",[t._v(t._s(t.moodNum))]),t._v(" "),e("div",[t._v("条心情数据")]),t._v(" "),e("span")]),t._v(" "),e("div",{on:{click:function(s){t.openFriend()}}},[e("p",[t._v(t._s(t.friendNum))]),t._v(" "),e("div",[t._v("位好友关注")])])])},staticRenderFns:[]}},210:function(t,s,e){var i=e(189);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(2)("68975bb5",i,!0)},236:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e(153),o=e.n(i),n=e(159),a=e.n(n),l=e(207),r=e.n(l);s.default={data:function(){return{friend:{},isLookFriend:!0,chartData:[{days:["1月1","2","3","4","5","6","7"],moods:[0,0,0,0,0,0,0]},{days:["1月8","9","10","11","12","13","14"],moods:[0,0,0,0,0,0,0]},{days:["1月15","16","17","18","19","20","21"],moods:[0,0,0,0,0,0,0]},{days:["1月22","23","24","25","26","27","28"],moods:[0,0,0,0,0,0,0]}],friendSetLink:"",classGetup:"",classCalendar:"",classHabit:"",classStep:"",moodList:"",todayMood:""}},methods:{stepChange:function(t){return t>=1e4&&(t=parseInt(t/1e3)+"k"),t},getWeekClass:function(){var t=this,s=t.$route.params.Id;t.$http.get(web.API_PATH+"user/index/week/"+s).then(function(s){var e=s.data.data;console.log(e),t.classGetup=e.getUp,t.classCalendar=e.mood,console.log(t.classCalendar.today),t.todayMood=e.mood.today;var i=0;t.todayMood.moodValue?i=t.todayMood.moodValue:(i=0,t.todayMood.moodValue=0),t.todayMood.smailUrl=web.IMG_PATH+"list_mood_0"+i+".png",t.$set(t.todayMood),console.log(t.todayMood),t.classHabit=e.habits,t.classStep=e.weRun;var o=0;t.moodList=e.mood.list;for(var n=0;n<t.moodList.length;n++)t.moodList[n].moodValue?o=t.moodList[n].moodValue:(o=0,t.moodList[n].moodValue=0),t.moodList[n].smailUrl=web.IMG_PATH+"list_mood_0"+o+".png",t.$set(t.moodList,n,t.moodList[n])})},wxFaceUrl:function(t){return xqzs.mood.wxface(t)},initData:function(){var t=this,s=this.$route.params.Id;t.$http.get(web.API_PATH+"mood/get/user/mood/week/"+s).then(function(s){if(console.log(s.data.data[3]),1===s.data.status){for(var e=0;e<s.data.data.length;e++){for(var i={days:[],moods:[]},o=0;o<s.data.data[e].length;o++)i.days.push(s.data.data[e][o].day),i.moods.push(s.data.data[e][o].value);t.$set(t.chartData,e,i)}console.log(t.chartData)}},function(t){}),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/friend/"+s+"/_userId_"}).then(function(e){console.log(e),e.body.data&&(console.log(e.body.data),t.friend=e.body.data,t.nickName=t.friend.outName,t.friendSetLink="/me/friendsCount/friendSet/?friendId="+s)},function(t){}),t.$http.get(web.API_PATH+"user/is/look/friend/_userId_/"+s).then(function(s){console.log(s),s&&1==s.body.status&&(t.isLookFriend=1==s.body.data)})}},mounted:function(){var t=this;t.initData(),t.getWeekClass(),xqzs.wx.setConfig(t,!1,xqzs.wx.shareConfig.me)},components:{"v-banner":a.a,"v-indexCount":r.a,"v-scroll":o.a}}},336:function(t,s,e){s=t.exports=e(0)(),s.push([t.i,".friendIndex_box{background:#fff!important}.friendIndex_box .IndexAdd>div:active{background:none}.friendIndex_box .centerClass{margin-bottom:2rem}.friendIndex_box .index_banner{height:8.8235rem}.index_banner img{height:100%}",""])},538:function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"myIndex_box friendIndex_box"},[i("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("好友"+t._s(t.nickName)+"的主页")]),t._v(" "),i("div",{staticClass:"banner index_banner"},[i("img",{attrs:{src:e(199),alt:""}}),t._v(" "),i("router-link",{staticClass:"headBox",attrs:{to:t.friendSetLink}},[i("div",{staticClass:"userHeaderImg"},[i("img",{attrs:{alt:"",src:t.wxFaceUrl(t.friend.faceUrl)}})])]),t._v(" "),i("div",{staticClass:"addName"},[t._v(t._s(t.nickName))])],1),t._v(" "),i("v-indexCount"),t._v(" "),i("ul",{staticClass:"centerClass"},[i("li",{staticClass:"centerClassItem classGetup"},[i("div",{staticClass:"classImg getUpImg"}),t._v(" "),i("div",{staticClass:"classItem_top"},[t._v("\n                早起打卡\n            ")]),t._v(" "),i("div",{staticClass:"class_title"},[t._m(0),t._v(" "),i("div",{staticClass:"class_titleBottom"},[i("span",{staticStyle:{height:"0.88235rem"}},[t._v(t._s(t.classGetup&&t.classGetup.today.shorttime))]),t._v(" "),i("div",{staticClass:"class_info",staticStyle:{height:"0.588235rem"}},t._l(t.classGetup.list,function(s){return i("div",[""!=s.shorttime?[t._v(t._s(s.shorttime))]:t._e(),t._v(" "),s.weekix<=t.classGetup.today.weekix&&""==s.shorttime?[i("img",{attrs:{src:e(174),alt:""}})]:t._e()],2)}))])])]),t._v(" "),i("li",{staticClass:"centerClassItem classCalendar"},[i("div",{staticClass:"classImg rlImg"}),t._v(" "),i("div",{staticClass:"classItem_top"},[t._v("\n                心情日历\n            ")]),t._v(" "),i("div",{staticClass:"class_title"},[t._m(1),t._v(" "),i("div",{staticClass:"class_titleBottom"},[i("span",[i("img",{attrs:{src:t.todayMood.smailUrl,alt:""}})]),t._v(" "),i("div",{staticClass:"class_info"},t._l(t.moodList,function(t){return i("div",[[i("img",{attrs:{src:t.smailUrl,alt:""}})]],2)}))])])]),t._v(" "),i("li",{staticClass:"centerClassItem classHabit"},[i("div",{staticClass:"classImg xgImg"}),t._v(" "),i("div",{staticClass:"classItem_top"},[t._v("\n                健康习惯\n            ")]),t._v(" "),i("div",{staticClass:"class_title"},[t._m(2),t._v(" "),i("div",{staticClass:"class_titleBottom"},[i("span",{staticStyle:{height:"0.88235rem"}},[t._v(t._s(t.classHabit&&t.classHabit.today.finishNum))]),t._v(" "),i("div",{staticClass:"class_info",staticStyle:{bottom:"-2px"}},t._l(t.classHabit.list,function(s){return i("div",[0!=s.finishNum?[i("img",{attrs:{src:e(196),alt:""}})]:t._e(),t._v(" "),0==s.finishNum&&t.classHabit.today.weekix>s.weekix?[i("img",{attrs:{src:e(197),alt:""}})]:t._e()],2)}))])])]),t._v(" "),i("li",{staticClass:"centerClassItem lastClassItem"},[i("div",{staticClass:"classImg sportImg"}),t._v(" "),i("div",{staticClass:"classItem_top"},[t._v("\n                运动步数\n            ")]),t._v(" "),i("div",{staticClass:"class_title"},[t._m(3),t._v(" "),i("div",{staticClass:"class_titleBottom"},[i("span",{staticStyle:{height:"0.88235rem"}},[t._v(t._s(t.classStep&&t.stepChange(t.classStep.today.step)))]),t._v(" "),i("div",{staticClass:"class_info"},t._l(t.classStep.list,function(s){return i("div",[t.classStep.today.weekix>=s.weekix?[t._v(t._s(t.stepChange(s.step)))]:t._e(),t._v(" "),t.classStep.today.weekix<s.weekix?void 0:t._e()],2)}))])])])])],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"class_titleTop"},[e("span",[t._v("起床时间")]),t._v(" "),e("div",{staticClass:"class_info"},[e("div",[t._v("一")]),t._v(" "),e("div",[t._v("二")]),t._v(" "),e("div",[t._v("三")]),t._v(" "),e("div",[t._v("四")]),t._v(" "),e("div",[t._v("五")]),t._v(" "),e("div",[t._v("六")]),t._v(" "),e("div",[t._v("日")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"class_titleTop"},[e("span",[t._v("今日心情")]),t._v(" "),e("div",{staticClass:"class_info"},[e("div",[t._v("一")]),t._v(" "),e("div",[t._v("二")]),t._v(" "),e("div",[t._v("三")]),t._v(" "),e("div",[t._v("四")]),t._v(" "),e("div",[t._v("五")]),t._v(" "),e("div",[t._v("六")]),t._v(" "),e("div",[t._v("日")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"class_titleTop"},[e("span",[t._v("今日完成")]),t._v(" "),e("div",{staticClass:"class_info"},[e("div",[t._v("一")]),t._v(" "),e("div",[t._v("二")]),t._v(" "),e("div",[t._v("三")]),t._v(" "),e("div",[t._v("四")]),t._v(" "),e("div",[t._v("五")]),t._v(" "),e("div",[t._v("六")]),t._v(" "),e("div",[t._v("日")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"class_titleTop"},[e("span",[t._v("今日步数")]),t._v(" "),e("div",{staticClass:"class_info"},[e("div",[t._v("一")]),t._v(" "),e("div",[t._v("二")]),t._v(" "),e("div",[t._v("三")]),t._v(" "),e("div",[t._v("四")]),t._v(" "),e("div",[t._v("五")]),t._v(" "),e("div",[t._v("六")]),t._v(" "),e("div",[t._v("日")])])])}]}},607:function(t,s,e){var i=e(336);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(2)("54e82b2a",i,!0)},95:function(t,s,e){e(607);var i=e(1)(e(236),e(538),null,null);t.exports=i.exports}});
//# sourceMappingURL=7.build.js.map?5c7fdce1