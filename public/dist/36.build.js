webpackJsonp([36],{103:function(t,i,a){a(571);var e=a(1)(a(245),a(503),null,null);t.exports=e.exports},146:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.default={data:function(){return{}}}},147:function(t,i,a){i=t.exports=a(0)(),i.push([t.i,"",""])},148:function(t,i,a){a(150);var e=a(1)(a(146),a(149),null,null);t.exports=e.exports},149:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",[a("div",{staticClass:"weui-mask_transparent"}),t._v(" "),a("div",{staticClass:"weui-toast"},[a("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),a("p",{staticClass:"weui-toast__content"},[t._v("数据加载中")])])])}]}},150:function(t,i,a){var e=a(147);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(2)("5de0c1c0",e,!0)},245:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=a(148),s=a.n(e);i.default={data:function(){return{showLoad:!1,data:{},year:2017,lastTxt:"",index:0}},mounted:function(){$(".cards ").css({"margin-left":($(window).width()-220)/2}),this.getCards(),this.initTime()},methods:{initTime:function(){var t=new Date;this.year=t.getFullYear();var i=t.getMonth()+1,a=t.getDate(),e=this.yearCurDayIndex(this.year,i,a),s=this.yearDayCount(this.year);console.log(e),this.lastTxt=e>=180?"剩余的"+(s-e):"第"+e},isLeapYr:function(t){return t%4==0&&t%100!=0||t%100==0&&t%400==0},yearCurDayIndex:function(t,i,a){var e=[31,28,31,30,31,30,31,31,30,31,30,31],s=0;this.isLeapYr(t)?e[1]=29:e[1];for(var r=0;r<i-1;r++)s+=e[r],console.log(e[r]);return s+a},yearDayCount:function(t){var i=[31,28,31,30,31,30,31,31,30,31,30,31],a=0;this.isLeapYr(t)?i[1]=29:i[1];for(var e=0;e<12;e++)a+=i[e];return a},formatTime:function(t){return t||(t=xqzs.dateTime.getTimeStamp()),xqzs.dateTime.formatYearDate(t)},finishPer:function(t){for(var i=0,a=0;a<t.length;a++)t[a].finish&&i++;return parseInt(100*i/t.length)},finishCount:function(t){for(var i=0,a=0;a<t.length;a++)t[a].finish&&i++;return i},getCards:function(){var t=this;t.showLoad=!0,t.$http.get(web.API_PATH+"habit/get/card/page/_userId_/1/60").then(function(i){t.showLoad=!1,1===i.data.status&&(t.data=i.data.data,t.$nextTick(function(){t.mySwiperPre=new Swiper(".cards",{slidesPerView:2,width:510,onInit:function(t){},onSlideChangeEnd:function(i){t.index=i.activeIndex}})}))},function(i){t.showLoad=!1})},getTopImg:function(t){return xqzs.mood.getTopImg(t)},share:function(){var t=this,i=void 0,a=void 0,e=void 0,s=!1,r=0;if(t.data.todayHabit.length>0)if(0==t.index){var n=new Date;i=n.getFullYear(),a=n.getMonth()+1,e=n.getDate(),s=!0}else r=t.index-1;else r=t.index;!s&&t.data.habitList&&(i=t.data.habitList[r].year,a=t.data.habitList[r].month,e=t.data.habitList[r].day),t.showLoad=!0,t.$http.get(web.API_PATH+"habit/get/habit/card/_userId_/"+i+"/"+a+"/"+e).then(function(i){1==i.data.status&&(t.showLoad=!1,xqzs.weui.dialog({title:"习惯卡片已经发送",msg:"前往公众号查看你的习惯卡片",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(t){}}}))},function(i){t.showLoad=!1})}},components:{"v-showLoad":s.a}}},300:function(t,i,a){i=t.exports=a(0)(),i.push([t.i,".habit_card_box{background:#fff;width:100%;overflow:hidden}.habit_card_box .top{margin:1.4705882352941178rem}.habit_card_box .top>div{text-align:right;line-height:1;color:#333}.habit_card_box .h1{font-size:2.1176470588235294rem}.habit_card_box .h2{font-size:1.3529411764705883rem;margin-top:.8529411764705882rem}.habit_card_box .h3{font-size:.7647058823529411rem;margin-top:.6764705882352942rem;color:#666!important}.habit_card_box .cards{margin-top:5rem;margin-left:1.8rem;overflow:visible}.habit_card_box .cards .item{width:220px;box-shadow:0 0 13px rgba(0,0,0,.18);overflow:hidden}.habit_card_box .cards .item .img{width:100%;height:147px}.habit_card_box .cards .item .img img{width:100%;height:100%}.habit_card_box .cards .item .habits{margin:1.4705882352941178rem .5rem;margin-bottom:1rem;text-align:right}.habit_card_box .cards .item .habits img{height:1rem}.habit_card_box .cards .item .habits span{display:inline-block;width:1.46rem;text-align:center}.habit_card_box .cards .item .txt{font-size:.8235294117647058rem;color:#666;line-height:1;text-align:right;margin-right:.9rem}.habit_card_box .cards .item .day{color:#999;font-size:.7058823529411765rem;text-align:right;margin-right:.9rem;margin-top:.4rem;margin-bottom:.8rem}.habit_card_box .share_btn{line-height:2rem;height:2rem;border-radius:.4rem;border:1px solid #f90;color:#f90;font-size:.88235rem;display:inline-block;position:fixed;bottom:1.8rem;width:8rem;left:50%;margin-left:-4rem;text-align:center;background:#fff}.habit_card_box .share_btn:active{border:1px solid #e38000;color:#e38000}.habit_card_box .swiper-slide-active{animation:bigs .5s;-webkit-animation:bigs .5s;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards}@keyframes bigs{0%{-webkit-transform:scale(1);-moz-transform:scale(1)}to{-webkit-transform:scale(1.1);-moz-transform:scale(1.1)}}",""])},503:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"habit_card_box"},[a("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("健康习惯")]),t._v(" "),t.showLoad?a("v-showLoad"):t._e(),t._v(" "),a("div",{staticClass:"top"},[t.data.todayHabit&&100==t.finishPer(t.data.todayHabit)?a("div",{staticClass:"h1"},[t._v(t._s(t.data.count+1)+"个")]):a("div",{staticClass:"h1"},[t._v(t._s(t.data.count)+"个")]),t._v(" "),a("div",{staticClass:"h2"},[t._v("100%完美的日子")]),t._v(" "),a("div",{staticClass:"h3"},[t._v("「在"+t._s(t.year)+"年"+t._s(t.lastTxt)+"天里要继续你努力」")])]),t._v(" "),a("div",{staticClass:"cards swiper-container"},[a("div",{staticClass:"swiper-wrapper"},[t.data.todayHabit&&t.data.todayHabit.length>0?a("div",{staticClass:"swiper-slide"},[a("div",{staticClass:"item "},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.getTopImg()}})]),t._v(" "),a("div",{staticClass:"habits"},t._l(t.data.todayHabit,function(t){return a("span",[t.finish?a("img",{attrs:{src:t.iconFinish}}):a("img",{attrs:{src:t.iconNotFinish}})])})),t._v(" "),100==t.finishPer(t.data.todayHabit)?a("div",{staticClass:"txt"},[t._v(t._s(t.data.todayHabit.length)+"个好习惯全部完成")]):a("div",{staticClass:"txt"},[t._v("今日完成"+t._s(t.finishCount(t.data.todayHabit))+"个好习惯")]),t._v(" "),a("div",{staticClass:"day"},[t._v(t._s(t.formatTime()))])])]):t._e(),t._v(" "),t._l(t.data.habitList,function(i,e){return a("div",{staticClass:"swiper-slide"},[a("div",{staticClass:"item "},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.getTopImg(i.timestamp)}})]),t._v(" "),a("div",{staticClass:"habits"},t._l(i.habits,function(t){return a("span",[t.finish?a("img",{attrs:{src:t.iconFinish}}):a("img",{attrs:{src:t.iconNotFinish}})])})),t._v(" "),100==t.finishPer(i.habits)?a("div",{staticClass:"txt"},[t._v(t._s(i.habits.length)+"个好习惯全部完成")]):a("div",{staticClass:"txt"},[t._v("今日完成"+t._s(t.finishCount(i.habits))+"个好习惯")]),t._v(" "),a("div",{staticClass:"day"},[t._v(t._s(i.year)+"-"+t._s(i.month)+"-"+t._s(i.day))])])])}),t._v(" "),a("div",{staticClass:"swiper-slide"})],2)]),t._v(" "),a("div",{staticClass:"share_btn",on:{click:function(i){t.share()}}},[t._v("分享好习惯")])],1)},staticRenderFns:[]}},571:function(t,i,a){var e=a(300);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(2)("34efa34d",e,!0)}});
//# sourceMappingURL=36.build.js.map?5c7fdce1