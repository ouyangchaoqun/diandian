webpackJsonp([4],{119:function(t,e,i){i(567);var o=i(1)(i(262),i(499),null,null);t.exports=o.exports},146:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{}}}},147:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"",""])},148:function(t,e,i){i(150);var o=i(1)(i(146),i(149),null,null);t.exports=o.exports},149:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast"},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),i("p",{staticClass:"weui-toast__content"},[t._v("数据加载中")])])])}]}},150:function(t,e,i){var o=i(147);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("5de0c1c0",o,!0)},151:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(66);e.default={props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1},isPageEnd:!1,isShowMoreText:{type:Boolean,default:!0},isNotRefresh:!0,cutHeight:0},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1,height:"height:100px"}},mounted:function(){var t=this;t.cutHeight||(t.cutHeight=0),this.height="height:"+(document.body.clientHeight-t.cutHeight)+"px",this.loadMoreText(),o.a.$on("scrollMoreTextInit",function(e){t.isShowMoreText=e,t.loadMoreText()}),o.a.$on("scrollHeightInit",function(e){t.cutHeight=e,t.initHeight()})},methods:{initHeight:function(){this.height="height:"+(document.body.clientHeight-this.cutHeight)+"px"},touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var e=t.targetTouches[0].pageY-this.startY-this.startScroll;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0),this.loadMoreText()}},refresh:function(){this.state=2,this.top=this.offset,this.isNotRefresh?this.refreshDone():this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},loadMoreText:function(){console.log(this.isShowMoreText),this.isShowMoreText?this.isPageEnd?($(".load-more").hide(),$(".load-finish").show()):($(".load-finish").hide(),$(".load-more").show()):($(".load-more").hide(),$(".load-finish").hide())},infinite:function(){console.log("Loading"),this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){console.log("done"),this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var e=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-e-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}},152:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"body,html{height:100%}.yo-scroll{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;background:#f5f5f5}.yo-scroll .inner{position:absolute;top:-2rem;width:100%;transition-duration:.3s}.yo-scroll .pull-refresh{position:relative;left:0;top:0;width:100%;height:2rem;display:flex;align-items:center;justify-content:center}.yo-scroll.touch .inner{transition-duration:0ms}.yo-scroll.down .down-tip,.yo-scroll.refresh .refresh-tip,.yo-scroll.up .up-tip{display:block}.yo-scroll .down-tip,.yo-scroll .refresh-tip,.yo-scroll .up-tip{display:none}.yo-scroll .load-more{height:3rem;display:flex;align-items:center;justify-content:center;text-align:center}.yo-scroll .load-finish{height:2rem;text-align:center}.loadFont{font-size:12px;color:#999}",""])},153:function(t,e,i){i(155);var o=i(1)(i(151),i(154),null,null);t.exports=o.exports},154:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},style:t.height,on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[i("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[i("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isNotRefresh,expression:"!isNotRefresh"}]},[i("span",{staticClass:"down-tip loadFont"},[t._v("下拉更新")]),t._v(" "),i("span",{staticClass:"up-tip loadFont"},[t._v("松开更新")]),t._v(" "),i("span",{staticClass:"refresh-tip loadFont"},[t._v("更新中")])])])],2),t._v(" "),t._t("default"),t._v(" "),i("footer",{staticClass:"load-more"},[t._t("load-more",[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.infiniteLoading,expression:"!infiniteLoading"}],staticClass:"loadFont"},[t._v("上拉加载更多")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.infiniteLoading,expression:"infiniteLoading"}],staticClass:"loadFont"},[t._v("数据加载中..")])])],2),t._v(" "),i("footer",{staticClass:"load-finish",staticStyle:{display:"none"}},[t._t("load-finish",[i("span",{staticClass:"loadFont"},[t._v("已经加载完成")])])],2)],2)])},staticRenderFns:[]}},155:function(t,e,i){var o=i(152);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("18db66ab",o,!0)},156:function(t,e,i){t.exports=i.p+"step_topjt.png"},164:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(66);e.default={data:function(){return{hasEmptyGrid:!1,cur_year:"",cur_month:"",weeks_ch:["日","一","二","三","四","五","六"],empytGrids:[],days:[],commonClass:"dateView",_month:"",today:"",index:"",isShow:!1,isHidden:!0,swiper_box:!0,dayMoods:[],dayMoods2:[],dayMoods3:[],mySwiper:null,maxMonthNum:4,nowMonth:null,nowYear:null,empLength:null,dayLenght:null}},mounted:function(){this.setNowDate();var t=this;t.mySwiper=new Swiper(".swiper-container",{}),xqzs.wx.setConfig(t),o.a.$on("oldMonthClick",function(){t.oldMonth()})},created:function(){$(".calendar_box").click()},methods:{setNowDate:function(){var t=new Date,e=t.getFullYear(),i=t.getMonth()+1;this.nowYear=e,this.nowMonth=i;var o=(t.getDay(),t.getDate());this.calculateEmptyGrids(e,i),this.calculateDays(e,i);var s=new Date,n=s.getMonth()+1;this.cur_year=e,this.cur_month=i,this._month=n,this.today=o},setContentHeight:function(t){var e=Math.ceil(t/7),i=$(".canlendarTopView").outerHeight(!0)+$(".weekBgView").outerHeight(!0),o=$(".dateView:eq(0)").height();$(".content-slide").height(o*e+i+10)},showSwiper:function(t){for(var e=this,i=0,s=0;s<=t;s++)i+=e.days[s].moods.length;if(e.dayMoods3=[])for(var s=0;s<e.days.length;s++)e.dayMoods3=e.dayMoods3.concat(e.days[s].moods);if(e.days[t].moods.length>0){e.dayMoods=[],e.dayMoods=e.dayMoods3;for(var n=0;n<e.dayMoods.length;n++)e.dayMoods[n].bgUrl=web.IMG_PATH+"list_mood_0"+e.dayMoods[n].moodValue+".png",e.dayMoods[n].dt=e.dayMoods[n].dt.replace("-","年"),e.dayMoods[n].dt=e.dayMoods[n].dt.replace("-","月"),e.dayMoods[n].weekCn=e.weeks_ch[e.dayMoods[n].weekix];this.isShow=!0,this.isHidden=!1,o.a.$emit("dataClick",{isShow:this.isShow,isHidden:this.isHidden,index:i-1,_dayMoods:e.dayMoods})}},getThisMonthDays:function(t,e){return new Date(t,e,0).getDate()},getFirstDayOfWeek:function(t,e){return new Date(Date.UTC(t,e-1,1)).getDay()},calculateEmptyGrids:function(t,e){var i=this,o=this.getFirstDayOfWeek(t,e),s=[];if(o>0){for(var n=0;n<o;n++)s.push({index:n,date:"",smailUrl:""});i.hasEmptyGrid=!0,i.empytGrids=s}else i.hasEmptyGrid=!1,i.empytGrids=[];i.empLength=i.empytGrids.length,console.log(i.empLength)},calculateDays:function(t,e){var i=this,o=web.IMG_PATH+"list_mood_00.png",s=this,n=[],a=this.getThisMonthDays(t,e),r=e;e<10&&(r="0"+r);for(var l=1;l<=a;l++)n.push({index:l-1,date:"",smailUrl:o,moods:[]});this.days=n,n=[],s.$http.get(web.API_PATH+"mood/query/calendar/list/_userId_?date="+t+"-"+r+"-01").then(function(e){if(1===e.data.status){if(a>0)for(var s=1;s<=a;s++){var l=s;s<10&&(l="0"+s);for(var d=t+"-"+r+"-"+l,c=0,h=[],p=0;p<e.data.data.length;p++)d===e.data.data[p].dt&&(c=e.data.data[p].moodValue,h.push(e.data.data[p]));console.log(d);var u=web.IMG_PATH+"list_mood_0"+c+".png";n.push({index:s-1,date:d,smailUrl:u,moods:h})}i.days=n}else for(var f=1;f<=a;f++)n.push({index:f-1,date:"",smailUrl:o,moods:[]})},function(t){for(var e=1;e<=a;e++)n.push({index:e-1,date:"",smailUrl:o,moods:[]})}),s.dayLenght=this.days.length,console.log(s.dayLenght)},oldMonth:function(){if(""==this.$route.params.Id||void 0==this.$route.params.Id||"_userId_"==this.$route.params.Id){var t=this.cur_year,e=this.cur_month,i=this.nowYear,o=this.nowMonth;if(o-=this.maxMonthNum,o<=0&&(i-=1,o=12+o),i!==t||o!==e){var s=e-1,n=t;s<1&&(n=t-1,s=12),this.calculateDays(n,s),this.calculateEmptyGrids(n,s),this.cur_year=n,this.cur_month=s,this.setContentHeight(this.dayLenght+this.empLength)}}},nextMonth:function(){var t=this.cur_year,e=this.cur_month;if(this.nowYear!==t||this.nowMonth!==e){var i=e+1,o=t;i>12&&(o=t+1,i=1),this.calculateDays(o,i),this.calculateEmptyGrids(o,i),this.cur_year=o,this.cur_month=i,this.setContentHeight(this.dayLenght+this.empLength)}},moveStop:function(){$("body").css("overflow","hidden").on("touchmove",function(t){t.preventDefault()})},moveMove:function(){$("body").off().css("overflow","auto")},formatContent:function(t){return xqzs.face.parse(t)}}}},165:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".calendarTemplate_box{height:auto}.show_box_cal{visibility:inherit;position:absolute;top:0;height:100%;width:100%}.hidden_box{visibility:hidden}.calendar_box{height:100%;background:#fff}.rl_header{height:60px;position:relative}.old{left:40px;transform:rotate(180deg);-webkit-transform:rotate(180deg)}.next,.old{height:.588235rem;width:.5588rem;position:absolute;top:15px;display:block}.next{right:40px;margin-top:0!important}.week_day text{flex:1;text-align:center;color:#828080;font-size:12px}.canlendarBgView{flex-grow:1;align-items:center;background:#fff}.canlendarBgView,.canlendarView{display:flex;flex-direction:column}.canlendarTopView{height:36px;font-size:17px;display:flex;display:-webkit-box;display:-webkit-flex;flex-direction:row;align-items:center;justify-content:center;margin-bottom:11px}.canlendarTopView .centerView{margin-top:3px}.leftBgView{text-align:right;height:40px}.centerView,.leftBgView{-webkit-box-flex:1;flex:1}.centerView{height:36px;text-align:center;align-items:center;justify-content:center;color:#666;line-height:36px}.rightBgView{height:40px;-webkit-box-flex:1;flex:1}.weekBgView{height:25px;line-height:25px;display:flex;flex-direction:row;justify-content:center;align-items:center;border-bottom:1px solid hsla(0,0%,93%,.7);padding-bottom:7px;color:#828080}.weekView{flex-grow:1;text-align:center;font-size:12px;float:left;width:14.28571%}.dateBgView{height:auto;width:100%;display:flex;flex-direction:row;flex-wrap:wrap}.dateEmptyView{width:14.28571%;color:#fff;display:flex;align-items:center;justify-content:center;position:relative;float:left;height:66px}.dateEmptyView_right{width:1px;height:100%;right:0;top:0}.dateEmptyView_bottom,.dateEmptyView_right{background:#eee;position:absolute;opacity:.7}.dateEmptyView_bottom{height:1px;width:100%;bottom:0;left:0}.dateView{width:14.28571%;display:flex;background:#fff;flex-direction:column;justify-content:center;position:relative;text-align:center;float:left}.dateView img{height:26px;width:26px;display:block;margin:6px auto;margin-top:4px;margin-bottom:8px}.datesView{height:28px;color:#828080;font-size:13px;display:flex;align-items:flex-end;justify-content:center;margin-bottom:2px;text-align:center}.dateSelectView{background:#fef8e5}.clickBox_time{text-align:center;padding:0 20px;bottom:6px;font-size:14px;color:#999;height:72px;overflow:hidden}.clickBox_bottom{margin-top:6px}.bg_box{position:fixed;top:0;left:0;background:rgba(0,0,0,.6);height:100%;width:100%;z-index:1}.swiper_box{position:absolute;top:25%;left:50%;margin-left:-100px}#bg_back{position:fixed;top:0;left:0;height:100%;width:100%;z-index:1000}.clickBox{width:100%;text-align:center;z-index:100;position:absolute;top:2.52rem;height:auto;transition:top 1s}.clickBox_time{position:absolute;bottom:5%;width:90%;height:30%;left:50%;margin-left:-50%}.clickBox_time span{font-size:12px;color:#999;margin:0 5px;line-height:22px}.swiper-slide{height:auto}",""])},166:function(t,e,i){i(168);var o=i(1)(i(164),i(167),null,null);t.exports=o.exports},167:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"calendarTemplate_box"},[o("div",{staticClass:"canlendarBgView"},[o("div",{staticClass:"canlendarView"},[o("div",{staticClass:"canlendarTopView"},[o("div",{staticClass:"leftBgView",on:{click:t.oldMonth}},[o("img",{staticClass:"old",attrs:{src:i(156)}})]),t._v(" "),o("div",{staticClass:"centerView"},[t._v(t._s(t.cur_year||"--")+"年"+t._s(t.cur_month||"--")+"月")]),t._v(" "),o("div",{staticClass:"rightBgView",on:{click:t.nextMonth}},[o("img",{staticClass:"next",attrs:{src:i(156)}})])]),t._v(" "),o("div",{staticClass:"weekBgView"},t._l(t.weeks_ch,function(e){return o("div",{staticClass:"weekView"},[t._v(t._s(e))])})),t._v(" "),o("div",{staticClass:"dateBgView"},[t._l(t.empytGrids,function(e){return o("div",{staticClass:"dateEmptyView"},[t._v(t._s(e.index)+"\n                        "),o("div",{staticClass:"dateEmptyView_right"}),t._v(" "),o("div",{staticClass:"dateEmptyView_bottom"})])}),t._v(" "),t._l(t.days,function(e,i){return o("div",{key:i,class:[t.commonClass,t._month==t.cur_month&&i==t.today-1?"dateSelectView":""],on:{click:function(e){t.showSwiper(i)}}},[o("a",{attrs:{href:"javascript:;"}},[o("div",{staticClass:"datesView"},[t._v(t._s(e.index+1)+"\n                                "),o("div",{staticClass:"dateEmptyView_right"}),t._v(" "),o("div",{staticClass:"dateEmptyView_bottom"})]),t._v(" "),o("img",{attrs:{src:e.smailUrl}})])])})],2)])]),t._v(" "),o("div",{staticStyle:{height:"10px",background:"#fff"}})])},staticRenderFns:[]}},168:function(t,e,i){var o=i(165);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("c9284074",o,!0)},186:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(66);e.default={data:function(){return{isShow:!1,isHidden:!0,swiper_box:!0,dayMoods:[],mySwiper:null,nowMonth:null,nowYear:null,index:""}},mounted:function(){var t=this;t.mySwiper=new Swiper(".clickBox",{}),xqzs.wx.setConfig(t)},methods:{hideSwiper:function(){var t=this;xqzs.weui.weuiMaskClose(),setTimeout(function(){t.isShow=!1,t.isHidden=!0},200)},formatContent:function(t){return t&&(t=t.replace(/[\n]+/g,"")),xqzs.face.parse(t)},getCalendarTopImg:function(t){return"http://oss.xqzs.cn/xqzs/top_img/"+t.replace(/[年|月]/g,"/")+".jpg"}},updated:function(){xqzs.weui.active($(".dateView a"))},created:function(){var t=this;o.a.$on("dataClick",function(e){t.index=e.index,t.isShow=e.isShow,t.isHidden=e.isHidden,t.dayMoods=e._dayMoods;for(var i=0;i<t.dayMoods.length;i++)t.dayMoods[i].topImage=t.getCalendarTopImg(t.dayMoods[i].dt),t.dayMoods[i].field=xqzs.mood.getCjImg(t.dayMoods[i].scenesId).text;this.$nextTick(function(){null!==t.mySwiper&&t.mySwiper.update(),setTimeout(function(){var t=$(".clickBox").outerHeight(!0),e=$(window).height(),i=(e-t)/2+"px";$(".clickBox").css("top",i)},10),t.mySwiper.slideTo(t.index,0,!1)})}),$(".calendar_box").click()}}},190:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".addPopup{border-radius:5px;width:18.26rem;margin:0 auto;position:relative;overflow:hidden}.addPopup .addPopupBg{width:100%;height:12.35rem;display:block}.addPopup .addPopupMood{height:3.53rem;width:3.53rem;display:block;margin-top:-1.765rem;left:50%;position:absolute;margin-left:-1.765rem;z-index:100}.addPopup .addContent{height:12.35rem;background:#fff;position:relative;padding-top:2.35rem;border-radius:0 0 5px 5px}.addPopupField{color:#363636;font-size:.88235rem;margin-bottom:.5rem}.clickBox_bottom{font-size:.765rem;color:#525151;line-height:1.2rem;padding:0 1.176rem;text-align:left;height:8.4rem;overflow:auto}.addPopupBottom span{color:#fff;font-size:.65rem;line-height:1.2}",""])},195:function(t,e,i){t.exports=i.p+"caendarBottom.png"},206:function(t,e,i){i(211);var o=i(1)(i(186),i(209),null,null);t.exports=o.exports},209:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{on:{click:function(e){t.hideSwiper()}}},[t.isShow?o("div",{staticClass:"weui-mask weui-animate-fade-in",staticStyle:{background:"rgba(0,0,0,0.8)"}}):t._e(),t._v(" "),o("div",{class:[{show_box_cal:t.isShow,hidden_box:t.isHidden}],attrs:{id:"bg_back"}},[o("div",{staticClass:"swiper-container1 clickBox"},[o("div",{staticClass:"swiper-wrapper"},t._l(t.dayMoods,function(e){return o("div",{staticClass:"swiper-slide"},[o("div",{staticClass:"addPopup"},[o("img",{staticClass:"addPopupBg",attrs:{src:e.topImage,alt:""}}),t._v(" "),o("img",{staticClass:"addPopupMood",attrs:{src:e.bgUrl,alt:""}}),t._v(" "),o("div",{staticClass:"addContent"},[o("div",{staticClass:"addPopupField"},[t._v("【在"+t._s(e.field)+"方面】")]),t._v(" "),""!=t.formatContent(e.content)?o("div",{staticClass:"clickBox_bottom",domProps:{innerHTML:t._s(t.formatContent(e.content))}}):t._e(),t._v(" "),""==t.formatContent(e.content)?o("div",{staticClass:"clickBox_bottom"},[t._v("今天没有文字记录,在记录心情之后可以补充文字和图片,让回忆更清晰！")]):t._e()])]),t._v(" "),o("img",{staticStyle:{width:"100%",display:"block","margin-top":"0.3rem"},attrs:{src:i(195),alt:""}}),t._v(" "),o("div",{staticClass:"addPopupBottom"},[o("span",[t._v(t._s(e.dt))]),t._v(" "),o("span",[t._v(t._s(e.time))])])])}))])])])},staticRenderFns:[]}},211:function(t,e,i){var o=i(190);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("e9cc767c",o,!0)},262:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(66),s=i(148),n=i.n(s),a=i(166),r=i.n(a),l=i(206),d=i.n(l),c=i(153);i.n(c);e.default={data:function(){return{showLoad:!1}},props:{user:{type:Object}},filters:{},methods:{},mounted:function(){if(void 0!=this.$route.query.month)for(var t=new Date,e=t.getMonth(),i=e-parseInt(this.$route.query.month),s=0;s<=i;s++)o.a.$emit("oldMonthClick");xqzs.wx.setConfig(this,!1,xqzs.wx.shareConfig.center)},components:{"v-showLoad":n.a,"v-calendarTemplate":r.a,"v-calendarPopup":d.a}}},296:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".newCalendar{background:#fff}",""])},499:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"newCalendar"},[t.showLoad?i("v-showLoad"):t._e(),t._v(" "),i("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("心情日历")]),t._v(" "),i("v-calendarTemplate"),t._v(" "),i("v-calendarPopup")],1)},staticRenderFns:[]}},567:function(t,e,i){var o=i(296);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("a7e26f70",o,!0)}});
//# sourceMappingURL=4.build.js.map?5c7fdce1