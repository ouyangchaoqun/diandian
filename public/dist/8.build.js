webpackJsonp([8],{119:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default={data:function(){return{data:null,replies:[],cares:[],mood:{},editurl:"/myCenter/myIndex/Edit?id="}},props:{user:{type:Object}},mounted:function(){var t=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/care/query/comment/"+t.$route.query.moodId}).then(function(o){1==o.data.status&&(t.data=o.data.data,t.replies=t.data.reply,t.cares=t.data.care,t.mood=t.data.mood,console.log(t.mood),t.mood.moodValueUrl=web.IMG_PATH+"list_mood_0"+t.mood.moodValue+".png",t.mood.moodValueText=xqzs.mood.moodValueText[t.mood.moodValue],t.mood.time=xqzs.dateTime.formatTime(t.mood.addTime),t.mood.scense=xqzs.mood.getCjImg(t.mood.scenesId),xqzs.mood.setMoodValueStyle(t.mood),console.info(t.mood)),t.$nextTick(function(){myResizePicture()})},function(t){}),xqzs.wx.setConfig(t)},filters:{shortName:function(t,o){return xqzs.shortname(t,o)}},computed:{hasInit:function(){return null!=this.data}},methods:{canEdit:function(t){return xqzs.mood.canEdit(t)},canClear:function(t){return xqzs.mood.canClear(t)},replyOrDel:function(t,o,s){var e=this;console.log(this.user),t===e.user.id?e._delComment(o,s):e.addComment(o,s)},emojiContent:function(t){return xqzs.face.parseEmoji(t)},_delComment:function(t,o){var s=this;xqzs.weui.actionSheet("删除我的评论?","删除",function(){var e=web.API_PATH+"mood/reply/_userId_/"+t;s.$http.delete(e).then(function(t){1===t.data.status?(s.replies[o].isDel=!0,s.mood.replycount=s.mood.replycount-1):xqzs.weui.toast("fail","删除失败",function(){})}).catch(function(t){})},function(){})},addComment:function(t,o){var s=this,e="";e=xqzs.shortname(s.replies[o].from_nickName,7),xqzs.mood.actionSheetEdit("取消","发送",function(o){s.$http.put(web.API_PATH+"mood/reply/add",{moodId:s.mood.id,userId:null,replyId:t,content:o}).then(function(t){1===t.data.status&&(xqzs.weui.toast("success","提交成功",function(){}),s.mood.replycount=t.data.data.mood.replycount,s.replies.push(t.data.data.reply))},function(t){}),console.log(o)},function(t){console.log(t)},"回复 "+e)},showBigImg:function(t,o){for(var s=o.path,e=[],a=0;a<t.length;a++)e.push(t[a].path);wx.previewImage({current:s,urls:e})},delMoodContent:function(t){var o=this,s=web.API_PATH+"mood/clean/content/_userId_/"+t;xqzs.weui.dialog("","确定删除吗？",function(){},function(){o.$http.delete(s).then(function(t){1===t.data.status?(o.mood.content="",o.mood.haspicture=0,o.mood.pics=[],o.mood.funnypics=[]):xqzs.weui.toast("fail","删除失败",function(){})})})},formatContent:function(t){return xqzs.mood.formatContent(t)}}}},134:function(t,o,s){o=t.exports=s(0)(),o.push([t.i,".noticeborder{border-bottom:1px solid #eee}.noticeDetail_box{background:#fff;height:100%}.addCj{height:16px;vertical-align:middle;margin-top:-3px;margin-left:5px;display:inline-block}.moodState i{font-size:12px;color:#999;font-style:normal}",""])},182:function(t,o,s){t.exports=s.p+"mood_icon_dianz_nor.png"},202:function(t,o,s){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.hasInit?e("div",{staticClass:"noticeDetail_box"},[e("div",{staticClass:"myMood_list noticeborder"},[e("img",{staticClass:"moodImg",attrs:{src:t.mood.moodValueUrl,alt:""}}),t._v(" "),e("div",{staticClass:"moodImg_right"},[e("div",{staticClass:"moodState",class:t.mood.moodValueStyle},[t._v(t._s(t.mood.moodValueText)+"\n                ")]),t._v(" "),e("div",{staticClass:"moodContext",domProps:{innerHTML:t._s(t.formatContent(t.mood))}}),t._v(" "),t.canEdit(t.mood)?[e("router-link",{staticClass:"editMood",attrs:{to:t.editurl+t.mood.id}},[t._v("\n                    20分钟内可以补充文字和图片\n                    "),e("img",{attrs:{src:s(91),alt:""}})])]:t._e(),t._v(" "),t.mood.pics?e("div",{staticClass:"moodPhotoLists"},[t._l(t.mood.pics,function(o){return e("div",{staticClass:"moodPhotoList"},[e("img",{style:o.styleObject,attrs:{src:o.path,"data-w":o.width,"data-h":o.height},on:{click:function(s){t.showBigImg(t.mood.pics,o)}}})])}),t._v(" "),t.mood.funnypics.length>0?e("div",{staticClass:"moodFunnPicList"},t._l(t.mood.funnypics,function(t){return e("div",{staticClass:"moodFunnyPic"},[e("img",{attrs:{src:t.path,"data-type":"notresize","data-w":t.width,"data-h":t.height}})])})):t._e()],2):t._e(),t._v(" "),e("div",{staticClass:"moodTime"},[e("span",[t._v(t._s(t.mood.time))]),t._v(" "),t.canClear(t.mood)?e("span",{staticClass:"btn_del",on:{click:function(o){t.delMoodContent(t.mood.id)}}},[t._v("删除")]):t._e(),t._v(" "),e("div",{staticClass:"moodFollow"},[e("span",{staticClass:"followCount"},[t._v(t._s(t.mood.careCount))]),t._v(" "),t.mood.moodValue>=5&&t.mood.careCount>0?e("img",{staticClass:"followtype",attrs:{src:s(83),alt:""}}):t._e(),t._v(" "),t.mood.moodValue>=5&&t.mood.careCount<=0?e("img",{staticClass:"followtype",attrs:{src:s(182),alt:""}}):t._e(),t._v(" "),t.mood.moodValue<5&&t.mood.careCount>0?e("img",{staticClass:"followtype",attrs:{src:s(75),alt:""}}):t._e(),t._v(" "),t.mood.moodValue<5&&t.mood.careCount<=0?e("img",{staticClass:"followtype",attrs:{src:s(79),alt:""}}):t._e(),t._v(" "),e("span",{staticClass:"followCount",staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.mood.replycount))]),t._v(" "),e("img",{staticClass:"followtype",attrs:{src:s(76),alt:""}})])])],2),t._v(" "),e("div",{staticClass:"show_box"},[e("div",{staticClass:"arraw"}),t._v(" "),t.cares.length?e("div",{staticClass:"show_top"},[t.mood.moodValue>=5?e("img",{staticClass:"show_img1",attrs:{src:s(83),alt:""}}):t._e(),t._v(" "),t.mood.moodValue<5?e("img",{staticClass:"show_img1",attrs:{src:s(75),alt:""}}):t._e(),t._v(" "),t._l(t.cares,function(t){return e("div",[e("img",{attrs:{src:t.faceUrl,alt:""}})])})],2):t._e(),t._v(" "),t.replies.length>0&&t.cares.length>0?e("div",{staticClass:"line_comment"}):t._e(),t._v(" "),t.replies.length>0?e("ul",{staticClass:"show_bottom"},[e("img",{staticClass:"show_img2",attrs:{src:s(76)}}),t._v(" "),t._l(t.replies,function(o,s){return o.isDel?t._e():e("li",{key:s,on:{click:function(e){t.replyOrDel(o.fromuserid,o.id,s)}}},[e("img",{staticClass:"show_bottom_img ",attrs:{src:o.from_faceUrl}}),t._v(" "),e("div",{staticClass:"show_bottom_text"},[e("div",{staticClass:"reply_author"},[e("a",{staticClass:"pname other",attrs:{href:"javascript:;"}},[t._v(t._s(t._f("shortName")(o.from_nickName,7)))])]),t._v(" "),e("div",{staticClass:"reply_content"},[o.tomoodreplyid>0?[e("span",{staticClass:"text_comment"},[t._v("回复")]),e("a",{staticClass:"pname other",attrs:{href:"javascript:;"}},[t._v(t._s(t._f("shortName")(o.to_nickName,7))+"：")])]:t._e(),t._v(" "),e("span",{staticClass:"text_comment"},[t._v(t._s(t.emojiContent(o.content)))])],2)])])})],2):t._e()])])]):t._e()},staticRenderFns:[]}},230:function(t,o,s){var e=s(134);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(2)("3a3d1888",e,!0)},54:function(t,o,s){s(230);var e=s(1)(s(119),s(202),null,null);t.exports=e.exports},75:function(t,o,s){t.exports=s.p+"list_baob_pre.png"},76:function(t,o,s){t.exports=s.p+"comments.png"},79:function(t,o,s){t.exports=s.p+"list_baob_nor.png"},83:function(t,o,s){t.exports=s.p+"mood_icon_dianz_pre.png"},91:function(t,o,s){t.exports=s.p+"bianji.png"}});
//# sourceMappingURL=8.build.js.map?109b8