webpackJsonp([0],{100:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var __WEBPACK_IMPORTED_MODULE_0__chart_vue__=__webpack_require__(82),__WEBPACK_IMPORTED_MODULE_0__chart_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__chart_vue__),__WEBPACK_IMPORTED_MODULE_1__banner_vue__=__webpack_require__(69),__WEBPACK_IMPORTED_MODULE_1__banner_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__banner_vue__),__WEBPACK_IMPORTED_MODULE_2__lib_scroll_vue__=__webpack_require__(83),__WEBPACK_IMPORTED_MODULE_2__lib_scroll_vue___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_scroll_vue__),myIndex={template:"#myIndex"};__webpack_exports__.default={data:function(){return{user:{},counter:1,num:10,pageStart:0,pageEnd:0,listdata:[],downdata:[],currTime:xqzs.dateTime.getTimeStamp(),topImg:xqzs.mood.getTopImg(),chartData:[{days:["1月1","2","3","4","5","6","7"],moods:[3,5,9,6,4,3,5]},{days:["1月8","9","10","11","12","13","14"],moods:[1,3,7,6,4,2,6]},{days:["1月15","16","17","18","19","20","21"],moods:[7,8,9,0,4,0,5]},{days:["1月22","23","24","25","26","27","28"],moods:[5,1,2,3,4,5,6]}]}},methods:{commentOrDel:function(t,e,s,i){var a=this;t===a.user.id?a._delComment(e,s,i):a.addComment(e,s,i)},_delComment:function(t,e,s){var i=this;xqzs.weui.actionSheet("删除我的评论?","删除",function(){var a=web.API_PATH+"mood/reply/[userId]/"+t;i.$http.delete(a).then(function(t){1===t.data.status?(i.downdata[e].commentList[s].isDel=!0,i.$set(i.downdata,e,i.downdata[e])):xqzs.weui.toast("fail","删除失败",function(){})}).catch(function(t){})},function(){})},addComment:function(t,e,s){var i=this;xqzs.mood.actionSheetEdit("取消","发送",function(s){i.$http.put(web.API_PATH+"mood/reply/add",{moodId:i.downdata[e].id,userId:null,replyId:t,content:s}).then(function(t){1===t.data.status&&(xqzs.weui.toast("success","提交成功",function(){}),i.downdata[e].commentList.push(t.data.data.reply),i.$set(i.downdata,e,i.downdata[e]),console.log(t.data.data.reply))},function(t){}),console.log(s)},function(t){console.log(t)},"回复 "+i.downdata[e].commentList[s].from_nickName)},showComment:function(t,e){var s=this;s.downdata[e].isShowComment?(s.downdata[e].isShowComment=!1,s.$set(s.downdata,e,s.downdata[e])):(!0!==s.downdata[e].isAsk&&s.$http.get(web.API_PATH+"mood/care/query/comment/"+t).then(function(t){s.downdata[e].isAsk=!0,1===t.data.status&&(t.data.data.care.length>0||t.data.data.reply.length>0)&&(s.downdata[e].hasComments=!0,s.downdata[e].careList=t.data.data.care,s.downdata[e].commentList=t.data.data.reply,s.downdata[e].isShowComment=!0),console.log(t.data.data),s.$set(s.downdata,e,s.downdata[e])},function(t){console.log("error")}),s.downdata[e].isShowComment=!0,s.$set(s.downdata,e,s.downdata[e]))},empty:function(t,e){var s=this;xqzs.weui.dialog("","确定删除吗？",function(){},function(){s._empty(t,e)})},_empty:function(t,e){var s=this,i=web.API_PATH+"mood/clean/content/[userId]/"+t;s.$http.delete(i).then(function(t){1===t.data.status?(s.downdata[e].content="",s.$set(s.downdata,e,s.downdata[e])):xqzs.weui.toast("fail","删除失败",function(){})}).catch(function(t){})},revoke:function(t,e){var s=this;xqzs.weui.dialog("","确定撤回吗？",function(){},function(){s._revoke(t,e)})},_revoke:function(t,e){var s=this,i=web.API_PATH+"mood/[userId]/"+t;s.$http.delete(i,{emulateJSON:!0}).then(function(t){1===t.data.status?(s.downdata[e].hide=!0,s.$set(s.downdata,e,s.downdata[e]),xqzs.weui.toast("success","撤回成功",function(){})):xqzs.weui.toast("fail","撤回失败",function(){}),console.log(t)}).catch(function(t){})},showBigImg:function(t,e){for(var s=e.bigUrl,i=[],a=0;a<t.length;a++)i.push(t[a].bigUrl);wx.previewImage({current:s,urls:i})},getList:function(){var t=this;t.$http.get(web.API_PATH+"mood/query/user/page/[userId]/1/"+t.num).then(function(e){t.downdata=e.data.data.rows,t.downdata=xqzs.mood.initMoodsData(t.downdata),console.log(t.downdata),t.$nextTick(function(){myResizePicture()})},function(t){console.log("error")})},onRefresh:function(t){this.getList(),t()},onInfinite:function(t){var e=this,s=this;s.$http.get(web.API_PATH+"mood/query/user/page/[userId]/"+(s.counter+1)+"/"+s.num).then(function(i){s.counter++,s.pageEnd=s.num*s.counter,s.pageStart=s.pageEnd-s.num;var a=i.data.data.rows,o=0;s.pageEnd;for(a=xqzs.mood.initMoodsData(a);o<a.length;o++)s.downdata.push(a[o]);if(s.$nextTick(function(){myResizePicture()}),0===a.length)return e.$el.querySelector(".load-more").style.display="none",void(e.$el.querySelector(".load-finish").style.display="block");t()},function(t){console.log("error")})}},mounted:function mounted(){var _this=this;this.getList(),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/[userId]"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data))},function(t){}),_this.$http.get(web.API_PATH+"mood/get/user/mood/week/[userId]").then(function(t){if(1===t.data.status){for(var e=0;e<t.data.data.length;e++){for(var s={days:[],moods:[]},i=0;i<t.data.data[e].length;i++)s.days.push(t.data.data[e][i].day),s.moods.push(t.data.data[e][i].value);_this.$set(_this.chartData,e,s)}console.log(_this.chartData)}}).catch(function(t){})},components:{"v-scroll":__WEBPACK_IMPORTED_MODULE_2__lib_scroll_vue___default.a,"v-chart":__WEBPACK_IMPORTED_MODULE_0__chart_vue___default.a,"v-banner":__WEBPACK_IMPORTED_MODULE_1__banner_vue___default.a}}},135:function(t,e,s){e=t.exports=s(1)(),e.push([t.i,"",""])},137:function(t,e,s){t.exports=s.p+"bianji.png"},189:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},[i("v-scroll",{attrs:{"on-refresh":t.onRefresh,"on-infinite":t.onInfinite}},[i("div",{staticClass:"myIndex_box"},[i("div",{staticClass:"banner index_banner"},[i("v-banner"),t._v(" "),i("div",{staticClass:"userHeaderImg"},[i("img",{attrs:{src:t.user.faceUrl,alt:""}})])],1),t._v(" "),i("div",{staticClass:"chart_box"},[i("v-chart",{attrs:{chartData:t.chartData}})],1),t._v(" "),t._l(t.downdata,function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:!e.hide,expression:"!item.hide"}],key:a,staticClass:"myMood_list"},[i("img",{staticClass:"moodImg",attrs:{src:e.moodValueUrl,alt:""}}),t._v(" "),i("div",{staticClass:"moodImg_right"},[i("div",{staticClass:"moodState",class:{unhappy_txt_color:e.moodValue<=4,happy_txt_color:e.moodValue>4}},[t._v("\n                        "+t._s(e.moodValueText)+"\n                    ")]),t._v(" "),t.currTime-e.addTime<=1200&&(""==e.content||null==e.content)?[i("router-link",{staticClass:"editMood",attrs:{to:e.editLink}},[t._v("\n                            20分钟内可以补充文字和图片\n                            "),i("img",{attrs:{src:s(137),alt:""}})])]:t._e(),t._v(" "),""!=e.content&&null!=e.content?[i("div",{staticClass:"moodContext"},[t._v(t._s(e.content))]),t._v(" "),e.haspicture?i("div",{staticClass:"moodPhotoLists"},t._l(e.pics,function(s){return i("div",{staticClass:"moodPhotoList"},[i("img",{style:s.styleObject,attrs:{src:s.smallUrl,"data-bigPic":s.bigUrl,"data-w":s.picwidth,"data-h":s.picheight},on:{click:function(i){t.showBigImg(e.pics,s)}}})])})):t._e()]:t._e(),t._v(" "),""!=e.content&&null!=e.content?i("div",{staticClass:"moodLoc"},[t._v(t._s(e.address))]):t._e(),t._v(" "),i("div",{staticClass:"moodTime"},[i("span",[t._v(t._s(e.outTime))]),t._v(" "),t.currTime-e.addTime<=180&&(""==e.content||null==e.content)?i("span",{staticClass:"btn_del",on:{click:function(s){t.revoke(e.id,a)}}},[t._v("撤回")]):t._e(),t._v(" "),""!=e.content&&null!=e.content?i("span",{staticClass:"btn_del",on:{click:function(s){t.empty(e.id,a)}}},[t._v("删除")]):t._e(),t._v(" "),i("div",{staticClass:"moodFollow",on:{click:function(s){t.showComment(e.id,a)}}},[i("span",{staticClass:"followCount"},[t._v(t._s(e.careCount))]),t._v(" "),i("img",{staticClass:"followtype",attrs:{src:e.careImg,alt:""}}),t._v(" "),null!==e.content&&""!==e.content?[i("span",{staticClass:"followCount"},[t._v(t._s(e.replycount))]),t._v(" "),i("img",{staticClass:"followtype",staticStyle:{width:"18px","margin-top":"3px"},attrs:{src:s(68),alt:""}})]:t._e()],2)])],2),t._v(" "),e.hasComments&&e.isShowComment?i("div",{staticClass:"show_box"},[i("div",{staticClass:"arraw"}),t._v(" "),i("div",{staticClass:"show_top"},[i("img",{staticClass:"show_img1",attrs:{src:s(63)}}),t._v(" "),t._l(e.careList,function(t){return i("img",{attrs:{src:t.faceUrl}})})],2),t._v(" "),i("ul",{staticClass:"show_bottom"},[i("img",{staticClass:"show_img2",attrs:{src:s(68)}}),t._v(" "),t._l(e.commentList,function(s,o){return s.isDel?t._e():i("li",{key:o,attrs:{"data-replyid":s.id,"data-moodid":e.id,"data-userid":s.fromuserid,"data-ajaxresult":"hasface"},on:{click:function(e){t.commentOrDel(s.fromuserid,s.id,a,o)}}},[i("img",{staticClass:"show_bottom_img",attrs:{src:s.from_faceUrl}}),t._v(" "),i("div",{staticClass:"show_bottom_text"},[i("div",{staticClass:"reply_author"},[i("a",{staticClass:"pname other",attrs:{href:"javascript:;"}},[t._v(t._s(s.from_nickName))])]),t._v(" "),i("div",{staticClass:"reply_content"},[s.tomoodreplyid>0?[i("span",{staticClass:"text_comment"},[t._v("回复")]),i("a",{staticClass:"pname other",attrs:{href:"javascript:;"}},[t._v(t._s(s.to_nickName)+"：")])]:t._e(),t._v(" "),i("span",{staticClass:"text_comment"},[t._v(t._s(s.content))])],2)])])})],2)]):t._e()])})],2)])],1)},staticRenderFns:[]}},212:function(t,e,s){var i=s(135);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(2)("53b9f6d5",i,!0)},50:function(t,e,s){s(212);var i=s(0)(s(100),s(189),null,null);t.exports=i.exports},63:function(t,e,s){t.exports=s.p+"list_dianz_pre.png"},66:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{topImg:xqzs.mood.getTopImg()}}}},67:function(t,e,s){e=t.exports=s(1)(),e.push([t.i,".banner{width:100%}.banner img{display:block;width:100%}.index_banner{position:relative}",""])},68:function(t,e,s){t.exports=s.p+"comments.png"},69:function(t,e,s){s(71);var i=s(0)(s(66),s(70),null,null);t.exports=i.exports},70:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("img",{attrs:{src:t.topImg}})},staticRenderFns:[]}},71:function(t,e,s){var i=s(67);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(2)("d4b7634e",i,!0)},74:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{}},props:["chartData"],watch:{chartData:function(t){var e=1.04*window.innerWidth,s=.2848*window.innerHeight;$(".odiv").width(e),$(".odiv").height(s),this.makeCharts(t,e,s),console.log("chartData:"+this.chartData)}},updated:function(){console.log("chartDataupdate"+this.chartData)},methods:{makeCharts:function(t,e,s){new Swiper(".swiper-container",{direction:"horizontal",loop:!1,initialSlide:3,mode:"horizontal",freeMode:!1,touchRatio:.5,longSwipesRatio:.1,threshold:50,followFinger:!1,observer:!0,observeParents:!0,onSlideChangeStart:function(i){var a=i.activeIndex,o={id:"d"+a,days:t[a].days,moods:t[a].moods,width:e,height:s};getChart(o);$("svg").css({"margin-left":"-18px"}),$("svg image").attr("x",18),$(".highcharts-xaxis-labels ").each(function(t){$(this).find("text").each(function(t){0==t&&$(this).attr("x",parseFloat($(this).attr("x"))+18)})}),$(".highcharts-xaxis-labels  text ").each(function(t){$(".highcharts-xaxis-labels  text ").length-1==t&&$(this).css("fill","#8cfff6")}),$(".odiv>div").each(function(){$(this).css({width:$(this).width()-18+"px","border-radius":"10px"})})}})}},mounted:function(){}}},75:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1}},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1,height:"height:100px"}},mounted:function(){this.height="height:"+document.body.clientHeight+"px"},methods:{touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var e=t.targetTouches[0].pageY-this.startY-this.startScroll;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0)}},refresh:function(){this.state=2,this.top=this.offset,this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},infinite:function(){this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var e=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-e-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}},76:function(t,e,s){e=t.exports=s(1)(),e.push([t.i,"body,div,html{margin:0;padding:0}.chart_box{height:190px;padding:40px 0 20px;background:#fff;margin-bottom:5px}.highcharts-series-group{margin-right:120px}.step{width:100%;overflow:hidden}.swiper-wrapper{-webkit-perspective:3000;-webkit-backface-visibility:hidden}.main-color .highcharts-graph{stroke:#fff}.main-color,.main-color .highcharts-point{fill:#f60}.highcharts-graph.highcharts-negative{stroke:#999}.highcharts-area.highcharts-negative,.highcharts-point.highcharts-negative{fill:#999}.bgs{background:url("+s(78)+");background-size:100% 100%;margin:0 10px;position:relative;border-radius:6px;height:190px}.bgs .title{position:absolute;top:3px;left:50%;margin-left:-24px;font-size:12px;color:#5cd9d1}",""])},77:function(t,e,s){e=t.exports=s(1)(),e.push([t.i,"body,html{height:100%}.yo-scroll{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;background:#f5f5f5}.yo-scroll .inner{position:absolute;top:-2rem;width:100%;transition-duration:.3s}.yo-scroll .pull-refresh{position:relative;left:0;top:0;width:100%;height:2rem;display:flex;align-items:center;justify-content:center}.yo-scroll.touch .inner{transition-duration:0ms}.yo-scroll.down .down-tip,.yo-scroll.refresh .refresh-tip,.yo-scroll.up .up-tip{display:block}.yo-scroll .down-tip,.yo-scroll .refresh-tip,.yo-scroll .up-tip{display:none}.yo-scroll .load-more{height:3rem;display:flex;align-items:center;justify-content:center}.yo-scroll .load-finish{height:2rem;text-align:center}",""])},78:function(t,e,s){t.exports=s.p+"bj.jpg"},82:function(t,e,s){s(86);var i=s(0)(s(74),s(84),null,null);t.exports=i.exports},83:function(t,e,s){s(87);var i=s(0)(s(75),s(85),null,null);t.exports=i.exports},84:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bgs"},[s("div",{staticClass:"title"},[t._v("心情指数")]),t._v(" "),s("div",{staticClass:"step"},[s("div",{staticClass:"swiper-container swiper-container-h"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"odiv",attrs:{id:"d0"}})]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"odiv",attrs:{id:"d1"}})]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"odiv",attrs:{id:"d2"}})]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"odiv",attrs:{id:"d3"}})])])])])])])}]}},85:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},style:t.height,on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[s("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[s("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[s("span",{staticClass:"down-tip"},[t._v("下拉更新")]),t._v(" "),s("span",{staticClass:"up-tip"},[t._v("松开更新")]),t._v(" "),s("span",{staticClass:"refresh-tip"},[t._v("更新中")])])],2),t._v(" "),t._t("default"),t._v(" "),s("footer",{staticClass:"load-more"},[t._t("load-more",[s("span",[t._v("下拉加载更多")])])],2),t._v(" "),s("footer",{staticClass:"load-finish",staticStyle:{display:"none"}},[t._t("load-finish",[s("span",[t._v("已经加载完成")])])],2)],2)])},staticRenderFns:[]}},86:function(t,e,s){var i=s(76);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(2)("12f12071",i,!0)},87:function(t,e,s){var i=s(77);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(2)("18db66ab",i,!0)}});
//# sourceMappingURL=0.build.js.map