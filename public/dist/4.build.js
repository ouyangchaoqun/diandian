webpackJsonp([4],{103:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{}}}},107:function(t,e,o){e=t.exports=o(1)(),e.push([t.i,"",""])},116:function(t,e,o){o(122);var i=o(0)(o(103),o(119),null,null);t.exports=i.exports},119:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"weui-mask_transparent"}),t._v(" "),o("div",{staticClass:"weui-toast"},[o("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),o("p",{staticClass:"weui-toast__content"},[t._v("数据加载中")])])])}]}},122:function(t,e,o){var i=o(107);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("5de0c1c0",i,!0)},134:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(90),n=o.n(i),s=o(116),a=o.n(s);e.default={data:function(){return{counter:1,num:10,pageStart:0,pageEnd:0,listdata:[],downdata:[],showAll:!1,showLoad:!1,isPageEnd:!1,isShowMoreText:!0}},props:{user:{type:Object}},filters:{shortName:function(t,e){return xqzs.shortname(t,e)}},methods:{showOther:function(t){this.downdata[t].showAll=!this.downdata[t].showAll,console.log(this.downdata[t].showAll),this.downdata[t].showordown=this.downdata[t].showAll?"收起":"查看全部",this.$set(this.downdata,t,this.downdata[t]),console.log(this.downdata)},getList:function(){var t=this,e=this;this.showLoad=!0,e.$http.get(web.API_PATH+"mood/query/friend/page/_userId_/1/"+e.num).then(function(o){e.downdata=o.data.data.rows;for(var i=0,n=0,s=o.data.data.rows.length;n<s;n++)i=Math.max(i,o.data.data.rows[n].id);xqzs.friendmood.setlast(i),e.downdata=xqzs.mood.initMoodsData(e.downdata,!1,e.user.id),console.log(e.downdata),e.$nextTick(function(){myResizePicture($(".friends_mood"),"friendImgList","li")}),t.showLoad=!1,e.downdata.length<e.num&&(e.isPageEnd=!0)},function(e){console.log("error"),t.showLoad=!1})},onRefresh:function(t){this.counter=1,this.isPageEnd=!1,this.getList(),t()},onInfinite:function(t){var e=this;e.$http.get(web.API_PATH+"mood/query/friend/page/_userId_/"+(e.counter+1)+"/"+e.num).then(function(o){e.counter++,e.pageEnd=e.num*e.counter,e.pageStart=e.pageEnd-e.num;var i=o.data.data.rows,n=0;e.pageEnd;for(i=xqzs.mood.initMoodsData(i,!1,e.user.id);n<i.length;n++)e.downdata.push(i[n]);e.$nextTick(function(){myResizePicture($(".friends_mood"),"friendImgList","li")}),i.length<e.num&&(e.isPageEnd=!0),console.log(e.isPageEnd),t()},function(t){console.log("error")})},showBigImg:function(t,e){for(var o=e.bigUrl,i=[],n=0;n<t.length;n++)i.push(t[n].bigUrl);wx.previewImage({current:o,urls:i})},addCare:function(t,e){var o=this;t.userId!=o.user.id&&o.$http.put(web.API_PATH+"mood/care/add",{moodId:t.id,userId:null}).then(function(t){1===t.data.status&&(o.downdata[e].caremy=o.user.id,o.downdata[e].hit=!0,o.downdata[e].careCount=t.data.data,o.$set(o.downdata,e,o.downdata[e]),o.downdata=xqzs.mood.initMoodsData(o.downdata,!1,o.user.id),console.log(o.downdata))})},commentOrDel:function(t,e,o,i){var n=this;console.log(t),console.log(n.user.id),t==n.user.id?n._delComment(e,o,i):n.addComment(e,o,i)},_delComment:function(t,e,o){var i=this;xqzs.weui.actionSheet("删除我的评论?","删除",function(){var n=web.API_PATH+"mood/reply/_userId_/"+t;i.$http.delete(n).then(function(t){1===t.data.status?(i.downdata[e].replies.splice(o,1),i.downdata[e].replycount=i.downdata[e].replycount-1,i.$set(i.downdata,e,i.downdata[e])):xqzs.weui.toast("fail","删除失败",function(){})}).catch(function(t){})},function(){})},addComment:function(t,e,o){var i=this,n="评论",s="";console.log(o),void 0!==o&&o>=0&&(n="回复",s=i.downdata[e].replies[o].fromuserid===i.downdata[e].userId?"作者":xqzs.shortname(i.downdata[e].replies[o].from_nickName,7)),xqzs.mood.actionSheetEdit("取消","发送",function(o){i.$http.put(web.API_PATH+"mood/reply/add",{moodId:i.downdata[e].id,userId:null,replyId:t,content:o}).then(function(t){if(1===t.data.status){t.data.data.reply.touserid===i.downdata[e].userId&&(t.data.data.reply.to_nickName="作者"),i.downdata[e].replycount=t.data.data.mood.replycount;var o=t.data.data.reply;o.content=xqzs.face.parseEmoji(o.content),i.downdata[e].replies.push(o),i.$set(i.downdata,e,i.downdata[e])}},function(t){}),console.log(o)},function(t){},n+" "+s)},showComment:function(t,e){var o=this;o.downdata[e].isShowComment?(o.downdata[e].isShowComment=!1,o.$set(o.downdata,e,o.downdata[e])):(!0!==o.downdata[e].isAsk&&o.$http.get(web.API_PATH+"mood/care/query/comment/"+t).then(function(t){o.downdata[e].isAsk=!0,1===t.data.status&&(t.data.data.care.length>0||t.data.data.reply.length>0)&&(o.downdata[e].hasComments=!0,o.downdata[e].careList=t.data.data.care,o.downdata[e].commentList=t.data.data.reply,o.downdata[e].isShowComment=!0),console.log(t.data.data),o.$set(o.downdata,e,o.downdata[e])},function(t){console.log("error")}),o.downdata[e].isShowComment=!0,o.$set(o.downdata,e,o.downdata[e]))},formatContent:function(t){return xqzs.face.parse(t)}},created:function(){var t=this;t.getList(),xqzs.wx.setConfig(t)},components:{"v-scroll":n.a,"v-showLoad":a.a},beforeDestroy:function(){xqzs.weui.removeWhenPageChange()}}},185:function(t,e,o){e=t.exports=o(1)(),e.push([t.i,".showOthercom{font-size:13px;color:#669;margin-top:10px}.friend_header{border-bottom:1px solid #eee;padding:15px;background:#fff}.friend_header a{height:30px;line-height:30px;text-align:center;background:#ebeceb;margin:0 auto;font-size:14px;border:1px solid rgba(0,0,0,.2);border-color:#ebeceb;border-radius:5px;color:#666;display:block}.friend_header a:active{background:rgba(0,0,0,.2)}.friends_mood{margin-bottom:0;border-bottom:1px solid #eee;background:#fff;padding:10px 12px}.friends_mood .mood_text{-webkit-user-select:text!important;-moz-user-select:text!important;user-select:text!important}.friendHeaderImg{width:44px;height:44px;display:block;border-radius:4px;float:left}.friendState{margin-left:56px}.mood_state{font-size:14px;margin-bottom:6px;display:block;line-height:24px}.mood_text{border-radius:4px;word-wrap:break-word;word-break:break-all;overflow:hidden;font-size:14px;line-height:21px;color:#333;padding:4px 16px 8px 0}.stateBottom{height:17px;font-size:12px}.stateBottom .time{font-size:12px;color:#999;float:left;line-height:18px}.time_right{color:#999;float:right}.friendsLoc{font-size:12px;color:#516591;line-height:20px}.time_right img{width:14px;margin-top:3px!important;margin-bottom:4px}.time_right .frined_com,.time_right .frined_zan,.time_right img{vertical-align:middle}.friendImgList{overflow:hidden;margin-bottom:9px;margin-top:2px}.friendImgList.two li{width:7.058823529411765rem;height:5.647058823529412rem}.friendImgList.one li{width:10.07058823529412rem;height:7.623529411764706rem}.friendImgList li{float:left;margin-right:.2941176470588235rem;width:4.6rem;height:4.6rem;overflow:hidden;position:relative}.friendImgList img{display:block}.commont_box{padding:5px 10px;background:#f9f9f9;border-radius:2.5px;position:relative;margin-top:15px!important;clear:both;display:-webkit-box;white-space:normal!important;text-overflow:ellipsis;word-wrap:break-word;-webkit-box-orient:vertical}.commont_box :nth-of-type(2){margin-top:0}.arrow{width:12px;height:12px;background:#f9f9f9;position:absolute;left:20px;top:-6px;transform:rotate(45deg)}.friend_commont{margin-top:5px;font-size:13px;color:#333;line-height:19px}.friend_commont:last-child{margin-bottom:2px}.friend_commont a{-webkit-tap-highlight-color:rgba(0,0,0,.2);width:100%;color:#333;display:block}.name{color:#5e61a2;font-size:13px;font-weight:700}.commont{font-size:13px;color:#333}.addCj{height:16px;vertical-align:middle;margin-top:-3px;margin-left:5px;display:inline-block}.mood_state i{font-size:12px;color:#999;font-style:normal}",""])},262:function(t,e,o){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative"}},[t.showLoad?i("v-showLoad"):t._e(),t._v(" "),i("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("匿名心情")]),t._v(" "),i("v-scroll",{attrs:{"on-refresh":t.onRefresh,"on-infinite":t.onInfinite,isPageEnd:t.isPageEnd,isShowMoreText:t.isShowMoreText}},[i("div",{staticClass:"friends_box"},[i("div",{staticClass:"friend_header"},[i("router-link",{attrs:{to:"/friendList"}},[t._v("以下是我关注的朋友，猜猜TA是谁？")])],1),t._v(" "),t._l(t.downdata,function(e,n){return i("div",{key:n,staticClass:"friends_mood"},[i("img",{staticClass:"friendHeaderImg",attrs:{src:e.randomFaceUrl,alt:""}}),t._v(" "),i("div",{staticClass:"friendState"},[i("span",{staticClass:"mood_state",class:e.moodValueStyle},[t._v(t._s(e.moodValueText)+" ")]),t._v(" "),i("p",{staticClass:"mood_text",domProps:{innerHTML:t._s(t.formatContent(e.content))}}),t._v(" "),e.haspicture?i("ul",{staticClass:"friendImgList"},[t._l(e.pics,function(o){return i("li",[i("img",{style:o.styleObject,attrs:{src:o.smallUrl,"data-bigPic":o.bigUrl,"data-w":o.picwidth,"data-h":o.picheight},on:{click:function(i){t.showBigImg(e.pics,o)}}})])}),t._v(" "),e.funnypics.length>0?i("li",{staticClass:"moodFunnPicList"},t._l(e.funnypics,function(t){return i("div",{staticClass:"moodFunnyPic"},[i("img",{attrs:{src:t.picpath,"data-type":"notresize","data-w":t.picwidth,"data-h":t.picheight}})])})):t._e()],2):t._e(),t._v(" "),e.address?i("div",{staticClass:"friendsLoc"},[t._v(t._s(e.address))]):t._e(),t._v(" "),i("div",{staticClass:"stateBottom"},[i("div",{staticClass:"time"},[t._v(t._s(e.outTime))]),t._v(" "),i("div",{staticClass:"time_right"},[i("div",{staticStyle:{float:"left"}},[i("span",{staticClass:"frined_zan"},[t._v(t._s(e.careCount))]),t._v(" "),i("img",{staticClass:"time_rightimg1",class:{heartUp:e.hit},attrs:{src:e.careImg,alt:""},on:{click:function(o){t.addCare(e,n)}}})]),t._v(" "),i("div",{staticStyle:{float:"left","margin-left":"10px"}},[i("span",{staticClass:"frined_com"},[t._v(t._s(e.replycount))]),t._v(" "),i("img",{staticClass:"time_rightimg2",attrs:{src:o(89),alt:""},on:{click:function(o){t.addComment(e.id,n)}}})])])]),t._v(" "),e.replies.length>0?i("div",{staticClass:"commont_box"},[i("div",{staticClass:"arrow"}),t._v(" "),t._l(e.replies,function(o,s){return!o.isDel&&s<3?i("div",{key:s,staticClass:"friend_commont",on:{click:function(e){t.commentOrDel(o.fromuserid,o.id,n,s)}}},[i("a",{attrs:{href:"javascript:;"}},[0==o.tomoodreplyid||null==o.tomoodreplyid?i("span",{staticClass:"name"},[o.fromuserid==e.userId?[t._v("作者")]:t._e(),o.fromuserid!=e.userId?[t._v(t._s(t._f("shortName")(o.from_nickName,7)))]:t._e(),t._v("：")],2):t._e(),0!=o.tomoodreplyid&&null!=o.tomoodreplyid?[i("span",{staticClass:"name"},[o.fromuserid==e.userId?[t._v("作者")]:t._e(),o.fromuserid!=e.userId?[t._v(t._s(t._f("shortName")(o.from_nickName,7)))]:t._e()],2),t._v("回复"),i("span",{staticClass:"name"},[o.touserid==e.userId?[t._v("作者")]:[t._v(t._s(t._f("shortName")(o.to_nickName,7)))],t._v("：")],2)]:t._e(),i("span",{staticClass:"commont"},[t._v(t._s(o.content))])],2)]):t._e()}),t._v(" "),t._l(e.replies,function(o,s){return!o.isDel&&s>2&&e.showAll?i("div",{key:s,staticClass:"friend_commont",on:{click:function(e){t.commentOrDel(o.fromuserid,o.id,n,s)}}},[i("a",{attrs:{href:"javascript:;"}},[0==o.tomoodreplyid||null==o.tomoodreplyid?i("span",{staticClass:"name"},[o.fromuserid==e.userId?[t._v("作者")]:t._e(),o.fromuserid!=e.userId?[t._v(t._s(t._f("shortName")(o.from_nickName,7)))]:t._e(),t._v("：")],2):t._e(),0!=o.tomoodreplyid&&null!=o.tomoodreplyid?[i("span",{staticClass:"name"},[o.fromuserid==e.userId?[t._v("作者")]:t._e(),o.fromuserid!=e.userId?[t._v(t._s(t._f("shortName")(o.from_nickName,7)))]:t._e()],2),t._v("回复"),i("span",{staticClass:"name"},[o.touserid==e.userId?[t._v("作者")]:[t._v(t._s(t._f("shortName")(o.to_nickName,7)))],t._v("：")],2)]:t._e(),i("span",{staticClass:"commont"},[t._v(t._s(o.content))])],2)]):t._e()}),t._v(" "),e.replies.length>3?i("div",{staticClass:"showOthercom",on:{click:function(e){t.showOther(n)}}},[t._v(t._s(e.showordown))]):t._e()],2):t._e()])])})],2)])],1)},staticRenderFns:[]}},295:function(t,e,o){var i=o(185);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("27f75d9f",i,!0)},55:function(t,e,o){o(295);var i=o(0)(o(134),o(262),null,null);t.exports=i.exports},87:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{offset:{type:Number,default:40},enableInfinite:{type:Boolean,default:!0},enableRefresh:{type:Boolean,default:!0},onRefresh:{type:Function,default:void 0,required:!1},onInfinite:{type:Function,default:void 0,require:!1},isPageEnd:!1,isShowMoreText:!0},data:function(){return{top:0,state:0,startY:0,touching:!1,infiniteLoading:!1,height:"height:100px"}},mounted:function(){this.height="height:"+document.body.clientHeight+"px"},methods:{touchStart:function(t){this.startY=t.targetTouches[0].pageY,this.startScroll=this.$el.scrollTop||0,this.touching=!0},touchMove:function(t){if(this.enableRefresh&&!(this.$el.scrollTop>0)&&this.touching){var e=t.targetTouches[0].pageY-this.startY-this.startScroll;e>0&&t.preventDefault(),this.top=Math.pow(e,.8)+(2===this.state?this.offset:0),2!==this.state&&(this.top>=this.offset?this.state=1:this.state=0)}},touchEnd:function(t){if(this.enableRefresh){if(this.touching=!1,2===this.state)return this.state=2,void(this.top=this.offset);this.top>=this.offset?this.refresh():(this.state=0,this.top=0),this.loadMoreText()}},refresh:function(){this.state=2,this.top=this.offset,this.onRefresh(this.refreshDone)},refreshDone:function(){this.state=0,this.top=0},loadMoreText:function(){this.isShowMoreText?this.isPageEnd?($(".load-more").hide(),$(".load-finish").show()):($(".load-finish").hide(),$(".load-more").show()):($(".load-more").hide(),$(".load-finish").hide())},infinite:function(){console.log("Loading"),this.infiniteLoading=!0,this.onInfinite(this.infiniteDone)},infiniteDone:function(){console.log("done"),this.infiniteLoading=!1},onScroll:function(t){if(this.enableInfinite&&!this.infiniteLoading){var e=this.$el.clientHeight;this.$el.querySelector(".inner").clientHeight-e-this.$el.scrollTop-(this.onRefresh?this.$el.querySelector(".pull-refresh").clientHeight:0)<this.$el.querySelector(".load-more").clientHeight&&this.infinite()}}}}},88:function(t,e,o){e=t.exports=o(1)(),e.push([t.i,"body,html{height:100%}.yo-scroll{position:absolute;top:0;right:0;bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;background:#f5f5f5}.yo-scroll .inner{position:absolute;top:-2rem;width:100%;transition-duration:.3s}.yo-scroll .pull-refresh{position:relative;left:0;top:0;width:100%;height:2rem;display:flex;align-items:center;justify-content:center}.yo-scroll.touch .inner{transition-duration:0ms}.yo-scroll.down .down-tip,.yo-scroll.refresh .refresh-tip,.yo-scroll.up .up-tip{display:block}.yo-scroll .down-tip,.yo-scroll .refresh-tip,.yo-scroll .up-tip{display:none}.yo-scroll .load-more{height:3rem;display:flex;align-items:center;justify-content:center;text-align:center}.yo-scroll .load-finish{height:2rem;text-align:center}.loadFont{font-size:12px;color:#999}",""])},89:function(t,e,o){t.exports=o.p+"comments.png"},90:function(t,e,o){o(92);var i=o(0)(o(87),o(91),null,null);t.exports=i.exports},91:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"yo-scroll",class:{down:0===t.state,up:1==t.state,refresh:2===t.state,touch:t.touching},style:t.height,on:{touchstart:function(e){t.touchStart(e)},touchmove:function(e){t.touchMove(e)},touchend:function(e){t.touchEnd(e)},scroll:function(e){(t.onInfinite||t.infiniteLoading)&&t.onScroll(e)}}},[o("section",{staticClass:"inner",style:{transform:"translate3d(0, "+t.top+"px, 0)"}},[o("header",{staticClass:"pull-refresh"},[t._t("pull-refresh",[o("span",{staticClass:"down-tip loadFont"},[t._v("下拉更新")]),t._v(" "),o("span",{staticClass:"up-tip loadFont"},[t._v("松开更新")]),t._v(" "),o("span",{staticClass:"refresh-tip loadFont"},[t._v("更新中")])])],2),t._v(" "),t._t("default"),t._v(" "),o("footer",{staticClass:"load-more"},[t._t("load-more",[o("span",{staticClass:"loadFont"},[t._v("下拉加载更多")])])],2),t._v(" "),o("footer",{staticClass:"load-finish",staticStyle:{display:"none"}},[t._t("load-finish",[o("span",{staticClass:"loadFont"},[t._v("已经加载完成")])])],2)],2)])},staticRenderFns:[]}},92:function(t,e,o){var i=o(88);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(2)("18db66ab",i,!0)}});
//# sourceMappingURL=4.build.js.map?c61cb