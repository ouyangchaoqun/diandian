webpackJsonp([9],{117:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(78);o.n(i);e.default={data:function(){return{pageNo:1,num:20,newNotices:[],pageStart:0,pageEnd:0,isNew:1,detailUrl:"/moodDetail?moodId="}},filters:{shortName:function(t,e){return xqzs.shortname(t,e)}},mounted:function(){var t=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"notice/find/newNotices/_userId_"}).then(function(e){if(t.newNotices=e.data.data.rows,t.newNotices.length>0){t.newNotices=xqzs.mood.initMoodsData(t.newNotices);for(var o=0;o<t.newNotices.length;o++)t.newNotices[o].addtime=xqzs.dateTime.formatTime(t.newNotices[o].addtime);console.log(t.newNotices)}else console.log(t.$route.query.time),t.$http({method:"GET",type:"json",url:web.API_PATH+"notice/find/notices/_userId_/"+t.$route.query.time}).then(function(e){if(console.log(e.data.data.rows),t.newNotices=e.data.data.rows,t.newNotices.length>0){t.newNotices=xqzs.mood.initMoodsData(t.newNotices);for(var o=0;o<t.newNotices.length;o++)t.newNotices[o].addtime=xqzs.dateTime.formatTime(t.newNotices[o].addtime);console.log(t.newNotices)}},function(t){})},function(t){}),this.$http({method:"post",type:"json",url:web.API_PATH+"notice/update/read/_userId_/"+t.$route.query.time}).then(function(t){},function(t){})},methods:{checkMore:function(){var t=this;t.$http.get(web.API_PATH+"notice/query/page/_userId_/"+t.pageNo+"/"+t.num).then(function(e){var o=e.data.data.rows;o=xqzs.mood.initMoodsData(o);for(var i=0;i<o.length;i++)o[i].addtime=xqzs.dateTime.formatTime(o[i].addtime),t.newNotices.push(o[i]);0===o.length?t.isNew=2:t.isNew=0},function(t){console.log("error")}),t.pageNo=t.pageNo+1}}}},154:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,".noticeStatus{padding:8px 0 8px 2px;line-height:15px}.notice_div .careStatus img{width:14px}.notice_div .noticeName{color:#5e61a2}.nobg{background:none!important}.bottom{width:100%;padding-bottom:20px;padding-top:20px;color:#999;text-align:center;font-size:14px}.notice_box{height:100%;background:#fff}.notice_list{overflow:hidden;border-bottom:1px solid#eee;padding:10px 15px;color:#000;display:block}.notice_img{height:44px;width:44px;display:block;float:left;border-radius:3px}.notice_div{float:left;margin-left:10px;width:12rem;padding-top:2px}.notice_div div{font-size:13px;color:#000;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;line-height:13px}.noticeText{padding:8px 0 8px 2px}.notice_div img{width:14px;display:block}.notice_div p{color:#999;font-size:12px;line-height:12px}.notice_content{width:60px;height:60px;float:right;overflow:hidden;position:relative;font-size:13px;color:#666}.picMood{height:32px;width:32px;display:block;position:absolute;top:50%;left:50%;margin-top:-16px;margin-left:-16px}.picContent{height:60px;width:60px}",""])},206:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notice_box"},[o("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("消息")]),t._v(" "),o("v-scroll",{attrs:{"on-refresh":t.onRefresh,"on-infinite":t.onInfinite}},t._l(t.newNotices,function(e){return o("router-link",{staticClass:"notice_list",attrs:{to:t.detailUrl+e.moodid}},[o("img",{staticClass:"notice_img",attrs:{src:e.faceUrl,alt:""}}),t._v(" "),o("div",{staticClass:"notice_div"},[o("div",{staticClass:"noticeName"},[t._v(t._s(t._f("shortName")(e.nickName,7)))]),t._v(" "),e.content?o("div",{staticClass:"noticeText"},[t._v(t._s(e.content))]):t._e(),t._v(" "),"care"==e.tp?o("div",{staticClass:"noticeStatus"},[o("img",{attrs:{src:e.careImg,alt:""}})]):t._e(),t._v(" "),o("p",[t._v(t._s(e.addtime))])]),t._v(" "),o("div",{staticClass:"notice_content",class:{nobg:""!=e.moodcontent&&null!=e.moodcontent}},[e.moodpicture?o("img",{staticClass:"picContent",attrs:{src:e.moodpicture}}):""!=e.moodcontent&&null!=e.moodcontent?o("div",[t._v("\n\t\t\t\t\t"+t._s(e.moodcontent)+"\n\t\t\t\t")]):o("img",{staticClass:"picMood",attrs:{src:e.moodValueUrl}})])])})),t._v(" "),o("div",{staticClass:"bottom"},[1==t.isNew?o("a",{attrs:{id:"btnViewMore"},on:{click:function(e){t.checkMore()}}},[t._v("查看更早的消息...")]):0==t.isNew?o("a",{on:{click:function(e){t.checkMore()}}},[t._v("加载更多")]):o("a",[t._v("没有更多数据")])])],1)},staticRenderFns:[]}},233:function(t,e,o){var i=o(154);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("67a6fe4d",i,!0)},54:function(t,e,o){o(233);var i=o(1)(o(117),o(206),null,null);t.exports=i.exports},75:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1}},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1,height:"height:100px"}},mounted:function(){this.height="height:"+document.body.clientHeight+"px"},methods:{touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var e=t.targetTouches[0].pageY-this.startY-this.startScroll;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0)}},refresh:function(){this.state=2,this.top=this.offset,this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},infinite:function(){this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var e=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-e-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}},76:function(t,e,o){e=t.exports=o(0)(),e.push([t.i,"body,html{height:100%}.yo-scroll{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;background:#f5f5f5}.yo-scroll .inner{position:absolute;top:-2rem;width:100%;transition-duration:.3s}.yo-scroll .pull-refresh{position:relative;left:0;top:0;width:100%;height:2rem;display:flex;align-items:center;justify-content:center}.yo-scroll.touch .inner{transition-duration:0ms}.yo-scroll.down .down-tip,.yo-scroll.refresh .refresh-tip,.yo-scroll.up .up-tip{display:block}.yo-scroll .down-tip,.yo-scroll .refresh-tip,.yo-scroll .up-tip{display:none}.yo-scroll .load-more{height:3rem;display:flex;align-items:center;justify-content:center}.yo-scroll .load-finish{height:2rem;text-align:center}.loadFont{font-size:12px;color:#999}",""])},78:function(t,e,o){o(80);var i=o(1)(o(75),o(79),null,null);t.exports=i.exports},79:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},style:t.height,on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[o("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[o("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[o("span",{staticClass:"down-tip loadFont"},[t._v("下拉更新")]),t._v(" "),o("span",{staticClass:"up-tip loadFont"},[t._v("松开更新")]),t._v(" "),o("span",{staticClass:"refresh-tip loadFont"},[t._v("更新中")])])],2),t._v(" "),t._t("default"),t._v(" "),o("footer",{staticClass:"load-more"},[t._t("load-more",[o("span",{staticClass:"loadFont"},[t._v("下拉加载更多")])])],2),t._v(" "),o("footer",{staticClass:"load-finish",staticStyle:{display:"none"}},[t._t("load-finish",[o("span",{staticClass:"loadFont"},[t._v("已经加载完成")])])],2)],2)])},staticRenderFns:[]}},80:function(t,e,o){var i=o(76);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("18db66ab",i,!0)}});
//# sourceMappingURL=9.build.js.map?8f05a