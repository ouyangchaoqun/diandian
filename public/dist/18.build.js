webpackJsonp([18],{146:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{}}}},147:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"",""])},148:function(t,e,i){i(150);var o=i(1)(i(146),i(149),null,null);t.exports=o.exports},149:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"weui-mask_transparent"}),t._v(" "),i("div",{staticClass:"weui-toast"},[i("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),i("p",{staticClass:"weui-toast__content"},[t._v("数据加载中")])])])}]}},150:function(t,e,i){var o=i(147);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("5de0c1c0",o,!0)},151:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(66);e.default={props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1},isPageEnd:!1,isShowMoreText:{type:Boolean,default:!0},isNotRefresh:!0,cutHeight:0},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1,height:"height:100px"}},mounted:function(){var t=this;t.cutHeight||(t.cutHeight=0),this.height="height:"+(document.body.clientHeight-t.cutHeight)+"px",this.loadMoreText(),o.a.$on("scrollMoreTextInit",function(e){t.isShowMoreText=e,t.loadMoreText()}),o.a.$on("scrollHeightInit",function(e){t.cutHeight=e,t.initHeight()})},methods:{initHeight:function(){this.height="height:"+(document.body.clientHeight-this.cutHeight)+"px"},touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var e=t.targetTouches[0].pageY-this.startY-this.startScroll;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0),this.loadMoreText()}},refresh:function(){this.state=2,this.top=this.offset,this.isNotRefresh?this.refreshDone():this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},loadMoreText:function(){console.log(this.isShowMoreText),this.isShowMoreText?this.isPageEnd?($(".load-more").hide(),$(".load-finish").show()):($(".load-finish").hide(),$(".load-more").show()):($(".load-more").hide(),$(".load-finish").hide())},infinite:function(){console.log("Loading"),this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){console.log("done"),this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var e=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-e-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}},152:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,"body,html{height:100%}.yo-scroll{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;background:#f5f5f5}.yo-scroll .inner{position:absolute;top:-2rem;width:100%;transition-duration:.3s}.yo-scroll .pull-refresh{position:relative;left:0;top:0;width:100%;height:2rem;display:flex;align-items:center;justify-content:center}.yo-scroll.touch .inner{transition-duration:0ms}.yo-scroll.down .down-tip,.yo-scroll.refresh .refresh-tip,.yo-scroll.up .up-tip{display:block}.yo-scroll .down-tip,.yo-scroll .refresh-tip,.yo-scroll .up-tip{display:none}.yo-scroll .load-more{height:3rem;display:flex;align-items:center;justify-content:center;text-align:center}.yo-scroll .load-finish{height:2rem;text-align:center}.loadFont{font-size:12px;color:#999}",""])},153:function(t,e,i){i(155);var o=i(1)(i(151),i(154),null,null);t.exports=o.exports},154:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},style:t.height,on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[i("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[i("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isNotRefresh,expression:"!isNotRefresh"}]},[i("span",{staticClass:"down-tip loadFont"},[t._v("下拉更新")]),t._v(" "),i("span",{staticClass:"up-tip loadFont"},[t._v("松开更新")]),t._v(" "),i("span",{staticClass:"refresh-tip loadFont"},[t._v("更新中")])])])],2),t._v(" "),t._t("default"),t._v(" "),i("footer",{staticClass:"load-more"},[t._t("load-more",[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.infiniteLoading,expression:"!infiniteLoading"}],staticClass:"loadFont"},[t._v("上拉加载更多")]),t._v(" "),i("span",{directives:[{name:"show",rawName:"v-show",value:t.infiniteLoading,expression:"infiniteLoading"}],staticClass:"loadFont"},[t._v("数据加载中..")])])],2),t._v(" "),i("footer",{staticClass:"load-finish",staticStyle:{display:"none"}},[t._t("load-finish",[i("span",{staticClass:"loadFont"},[t._v("已经加载完成")])])],2)],2)])},staticRenderFns:[]}},155:function(t,e,i){var o=i(152);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("18db66ab",o,!0)},235:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(148),s=i.n(o),n=i(153),a=i.n(n);e.default={data:function(){return{fabulousLists:[],num:1e4,counter:1,pageStart:0,pageEnd:0,isPageEnd:!1,sleepId:"",type:"",showLoad:!1,isShowMoreText:!0}},components:{"v-showLoad":s.a,"v-scroll":a.a},mounted:function(){this.sleepId=this.$route.query.sleepId,this.type=this.$route.query.type,this.showLoad=!0,this.getFabulousList(),this.updateRead()},methods:{updateRead:function(){this.$http.post(web.API_PATH+"sleep/notice/read/"+this.sleepId+"/"+this.type+"/_userId_",{}).then(function(t){})},getFabulousList:function(){var t=this;t.showLoad=!0,t.$http({method:"GET",url:web.API_PATH+"sleep/query/cares/"+t.sleepId+"/"+t.type+"/"+t.counter+"/"+t.num+"/_userId_"}).then(function(e){1==e.data.status&&(t.fabulousLists=e.data.data.rows),t.showLoad=!1,t.fabulousLists.length<t.num&&(t.isPageEnd=!0)})},onInfinite:function(t){var e=this;e.$http.get(web.API_PATH+"sleep/query/cares/"+e.sleepId+"/"+e.type+"/"+(e.counter+1)+"/"+e.num+"/_userId_").then(function(i){e.counter++,e.pageEnd=e.num*e.counter,e.pageStart=e.pageEnd-e.num;var o=i.data.data.rows,s=0;e.pageEnd;for(console.log(o);s<o.length;s++)e.fabulousLists.push(o[s]);o.length<e.num&&(e.isPageEnd=!0),console.log(e.isPageEnd),t()},function(t){console.log("error")})}}}},329:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,".fabulous_box,.fabulous_box .fabulous_scroll,.fabulous_scroll .inner{height:100%;background:#fff}.noZanBox{margin-top:45%}.noZanImg{display:block;width:9.235rem;margin:0 auto;margin-bottom:1.3rem}.noZanBox div{font-size:.88235rem;color:#999;text-align:center}.fabulousLists li{display:flex;border-bottom:1px solid #eee;padding:.588rem .88235rem;position:relative;line-height:1}.fabulousLists img{display:block;height:2.588rem;width:2.588rem;border-radius:.3rem}.fabulousName{font-size:.88235rem;color:#333;margin-left:.88235rem;margin-top:.88235rem}.fabulousTime{font-size:.765rem;color:#999;position:absolute;right:.88235rem;margin-top:.94rem}",""])},451:function(t,e,i){t.exports=i.p+"noZan.png"},532:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fabulous_box"},[t.fabulousLists?t._e():o("div",{staticClass:"noZanBox"},[o("img",{staticClass:"noZanImg",attrs:{src:i(451),alt:""}}),t._v(" "),o("div",[t._v("还没有人点赞")])]),t._v(" "),o("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("赞我的人")]),t._v(" "),o("ul",{staticClass:"fabulousLists"},[t.showLoad?o("v-showLoad"):t._e(),t._v(" "),t._l(t.fabulousLists,function(e){return o("li",[o("img",{attrs:{src:e.faceUrl,alt:""}}),t._v(" "),o("div",{staticClass:"fabulousName"},[t._v(t._s(e.nickName))]),t._v(" "),o("div",{staticClass:"fabulousTime"},[t._v(t._s(e.friendTime))])])})],2)])},staticRenderFns:[]}},600:function(t,e,i){var o=i(329);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(2)("67ddc702",o,!0)},94:function(t,e,i){i(600);var o=i(1)(i(235),i(532),null,null);t.exports=o.exports}});
//# sourceMappingURL=18.build.js.map?5c7fdce1