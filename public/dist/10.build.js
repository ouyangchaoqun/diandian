webpackJsonp([10],{113:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(83);o.n(i);e.default={data:function(){return{pageNo:1,num:20,newNotices:[],pageStart:0,pageEnd:0,isNew:1,detailUrl:"./notice/noticeDetail?moodId="}},mounted:function(){var t=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"notice/find/newNotices/_userId_"}).then(function(e){if(t.newNotices=e.data.data.rows,t.newNotices.length>0){t.newNotices=xqzs.mood.initMoodsData(t.newNotices);for(var o=0;o<t.newNotices.length;o++)t.newNotices[o].addtime=xqzs.dateTime.formatTime(t.newNotices[o].addtime);console.log(t.newNotices)}else console.log(t.$route.query.time),t.$http({method:"GET",type:"json",url:web.API_PATH+"notice/find/notices/_userId_/"+t.$route.query.time}).then(function(e){if(console.log(e.data.data.rows),t.newNotices=e.data.data.rows,t.newNotices.length>0){t.newNotices=xqzs.mood.initMoodsData(t.newNotices);for(var o=0;o<t.newNotices.length;o++)t.newNotices[o].addtime=xqzs.dateTime.formatTime(t.newNotices[o].addtime);console.log(t.newNotices)}},function(t){})},function(t){}),this.$http({method:"post",type:"json",url:web.API_PATH+"notice/update/read/_userId_/"+t.$route.query.time}).then(function(t){},function(t){})},methods:{onRefresh:function(t){t()},onInfinite:function(t){var e=this;e.$http.get(web.API_PATH+"notice/query/page/_userId_/"+(e.pageNo+1)+"/"+e.num).then(function(o){e.pageNo++,e.pageEnd=e.num*e.pageNo,e.pageStart=e.pageEnd-e.num;var i=o.data.data.rows;e.pageEnd;i=xqzs.mood.initMoodsData(i);for(var n=0;n<i.length;n++)e.newNotices.push(i[n]);0===i.length?e.isNew=2:e.isNew=0,t()},function(t){console.log("error")})},checkMore:function(){var t=this;t.$http.get(web.API_PATH+"notice/query/page/_userId_/"+t.pageNo+"/"+t.num).then(function(e){var o=e.data.data.rows;o=xqzs.mood.initMoodsData(o),t.newNotices=o;for(var i=0;i<t.newNotices.length;i++)t.newNotices[i].addtime=xqzs.dateTime.formatTime(t.newNotices[i].addtime);0===o.length?t.isNew=2:t.isNew=0},function(t){console.log("error")})}}}},151:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,".bottom{width:100%;padding-bottom:20px;padding-top:20px;color:#999;text-align:center;font-size:14px}.careMe_box{height:100%;background:#fff}.careMe_list{overflow:hidden;border-bottom:1px solid#eee;padding:10px 15px;color:#000;display:block}.careMe_img{height:40px;width:40px;display:block;float:left;border-radius:3px;margin-top:13px}.careMe_div{float:left;margin-left:10px;margin-top:5px}.careMe_div div{font-size:14px;color:#516591}.careMe_div img{width:18px;display:block}.careMe_div p{color:#999;font-size:12px}.careMe_content{height:50px;width:50px;background:#f5f5f5;float:right;margin-top:8px;position:relative}.careMe_content img{height:50px;width:50px;display:block}.noCare_box{position:relative;height:100%}.noCare_box img{width:180px;position:absolute;top:15%;left:50%;margin-left:-90px}.noCare_content{width:100%;position:absolute;top:35%;z-index:1;left:50%;margin-left:-50%}.noCare_content h3{font-size:16px;color:#6c3;font-weight:100;text-align:center;margin-bottom:10px}.noCare_content p{font-size:12px;color:#999;text-align:center;margin-bottom:10px}.noCare_btn{width:90%;position:absolute;bottom:20%;left:50%;margin-left:-45%}",""])},198:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"careMe_box"},[o("v-scroll",{attrs:{"on-refresh":t.onRefresh,"on-infinite":t.onInfinite}},t._l(t.newNotices,function(e){return o("router-link",{staticClass:"careMe_list",attrs:{to:t.detailUrl+e.moodid}},[o("img",{staticClass:"careMe_img",attrs:{src:e.faceUrl,alt:""}}),t._v(" "),o("div",{staticClass:"careMe_div"},[o("div",[t._v(t._s(e.nickName))]),t._v(" "),o("div",[t._v(t._s(e.content))]),t._v(" "),o("p",[t._v(t._s(e.addtime))])]),t._v(" "),o("div",{staticClass:"careMe_content"},[e.moodpicture?o("img",{attrs:{src:e.moodpicture}}):""!=e.moodcontent&&null!=e.moodcontent?o("div",[t._v("\n\t\t\t\t\t"+t._s(e.moodcontent)+"\n\t\t\t\t")]):o("img",{attrs:{src:e.moodValueUrl}})])])})),t._v(" "),o("div",{staticClass:"bottom"},[1==t.isNew?o("a",{attrs:{id:"btnViewMore"},on:{click:function(e){t.checkMore()}}},[t._v("查看更早的消息...")]):0==t.isNew?o("a",[t._v("加载更多")]):o("a",[t._v("没有更多数据")])])],1)},staticRenderFns:[]}},225:function(t,e,o){var i=o(151);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("67a6fe4d",i,!0)},53:function(t,e,o){o(225);var i=o(1)(o(113),o(198),null,null);t.exports=i.exports},78:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1}},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1,height:"height:100px"}},mounted:function(){this.height="height:"+document.body.clientHeight+"px"},methods:{touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var e=t.targetTouches[0].pageY-this.startY-this.startScroll;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0)}},refresh:function(){this.state=2,this.top=this.offset,this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},infinite:function(){this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var e=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-e-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}},80:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,"body,html{height:100%}.yo-scroll{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;background:#f5f5f5}.yo-scroll .inner{position:absolute;top:-2rem;width:100%;transition-duration:.3s}.yo-scroll .pull-refresh{position:relative;left:0;top:0;width:100%;height:2rem;display:flex;align-items:center;justify-content:center}.yo-scroll.touch .inner{transition-duration:0ms}.yo-scroll.down .down-tip,.yo-scroll.refresh .refresh-tip,.yo-scroll.up .up-tip{display:block}.yo-scroll .down-tip,.yo-scroll .refresh-tip,.yo-scroll .up-tip{display:none}.yo-scroll .load-more{height:3rem;display:flex;align-items:center;justify-content:center}.yo-scroll .load-finish{height:2rem;text-align:center}",""])},83:function(t,e,o){o(85);var i=o(1)(o(78),o(84),null,null);t.exports=i.exports},84:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},style:t.height,on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[o("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[o("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[o("span",{staticClass:"down-tip"},[t._v("下拉更新")]),t._v(" "),o("span",{staticClass:"up-tip"},[t._v("松开更新")]),t._v(" "),o("span",{staticClass:"refresh-tip"},[t._v("更新中")])])],2),t._v(" "),t._t("default"),t._v(" "),o("footer",{staticClass:"load-more"},[t._t("load-more",[o("span",[t._v("下拉加载更多")])])],2),t._v(" "),o("footer",{staticClass:"load-finish",staticStyle:{display:"none"}},[t._t("load-finish",[o("span",[t._v("已经加载完成")])])],2)],2)])},staticRenderFns:[]}},85:function(t,e,o){var i=o(80);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("18db66ab",i,!0)}});
//# sourceMappingURL=10.build.js.map