webpackJsonp([7],{121:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});o.default={data:function(){return{data:null,replies:[],cares:[],mood:{},editurl:"/myCenter/myIndex/Edit?id="}},props:{user:{type:Object}},mounted:function(){var t=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/care/query/comment/"+t.$route.query.moodId}).then(function(o){1==o.data.status&&(t.data=o.data.data,t.replies=t.data.reply,t.cares=t.data.care,t.mood=t.data.mood,console.log(t.mood),t.mood.moodValueUrl=web.IMG_PATH+"list_mood_0"+t.mood.moodValue+".png",t.mood.moodValueText=xqzs.mood.moodValueText[t.mood.moodValue],t.mood.time=xqzs.dateTime.formatTime(t.mood.addTime),t.mood.scense=xqzs.mood.getCjImg(t.mood.scenesId),xqzs.mood.setMoodValueStyle(t.mood),console.info(t.mood)),t.$nextTick(function(){myResizePicture()})},function(t){}),xqzs.wx.setConfig(t)},filters:{shortName:function(t,o){return xqzs.shortname(t,o)}},computed:{hasInit:function(){return null!=this.data}},methods:{canEdit:function(t){return xqzs.mood.canEdit(t)},canClear:function(t){return xqzs.mood.canClear(t)},replyOrDel:function(t,o,e){var s=this;console.log(this.user),t===s.user.id?s._delComment(o,e):s.addComment(o,e)},emojiContent:function(t){return xqzs.face.parseEmoji(t)},_delComment:function(t,o){var e=this;xqzs.weui.actionSheet("删除我的评论?","删除",function(){var s=web.API_PATH+"mood/reply/_userId_/"+t;e.$http.delete(s).then(function(t){1===t.data.status?(e.replies[o].isDel=!0,e.mood.replycount=e.mood.replycount-1):xqzs.weui.toast("fail","删除失败",function(){})}).catch(function(t){})},function(){})},addComment:function(t,o){var e=this,s="";s=xqzs.shortname(e.replies[o].from_nickName,7),xqzs.mood.actionSheetEdit("取消","发送",function(o){e.$http.put(web.API_PATH+"mood/reply/add",{moodId:e.mood.id,userId:null,replyId:t,content:o}).then(function(t){1===t.data.status&&(xqzs.weui.toast("success","提交成功",function(){}),e.mood.replycount=t.data.data.mood.replycount,e.replies.push(t.data.data.reply))},function(t){}),console.log(o)},function(t){console.log(t)},"回复 "+s)},showBigImg:function(t,o){for(var e=o.path,s=[],a=0;a<t.length;a++)s.push(t[a].path);wx.previewImage({current:e,urls:s})},delMoodContent:function(t){var o=this,e=web.API_PATH+"mood/clean/content/_userId_/"+t;xqzs.weui.dialog("","确定删除吗？",function(){},function(){o.$http.delete(e).then(function(t){1===t.data.status?(o.mood.content="",o.mood.haspicture=0,o.mood.pics=[],o.mood.funnypics=[]):xqzs.weui.toast("fail","删除失败",function(){})})})},formatContent:function(t){return xqzs.mood.formatContent(t)}}}},141:function(t,o,e){o=t.exports=e(0)(),o.push([t.i,".noticeborder{border-bottom:1px solid #eee}.noticeDetail_box{background:#fff;height:100%}.addCj{height:16px;vertical-align:middle;margin-top:-3px;margin-left:5px;display:inline-block}.moodState i{font-size:12px;color:#999;font-style:normal}",""])},192:function(t,o,e){t.exports=e.p+"mood_icon_dianz_nor.png"},214:function(t,o,e){t.exports={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return t.hasInit?s("div",{staticClass:"noticeDetail_box"},[s("div",{staticClass:"myMood_list noticeborder"},[s("img",{staticClass:"moodImg",attrs:{src:t.mood.moodValueUrl,alt:""}}),t._v(" "),s("div",{staticClass:"moodImg_right"},[s("div",{staticClass:"moodState",class:t.mood.moodValueStyle},[t._v(t._s(t.mood.moodValueText)+"\n                ")]),t._v(" "),s("div",{staticClass:"moodContext",domProps:{innerHTML:t._s(t.formatContent(t.mood))}}),t._v(" "),t.canEdit(t.mood)?[s("router-link",{staticClass:"editMood",attrs:{to:t.editurl+t.mood.id}},[t._v("\n                    20分钟内可以补充文字和图片\n                    "),s("img",{attrs:{src:e(94),alt:""}})])]:t._e(),t._v(" "),t.mood.pics?s("div",{staticClass:"moodPhotoLists"},t._l(t.mood.pics,function(o){return s("div",{staticClass:"moodPhotoList"},[s("img",{attrs:{src:o.path},on:{click:function(e){t.showBigImg(t.mood.pics,o)}}})])})):t._e(),t._v(" "),s("div",{staticClass:"moodTime"},[s("span",[t._v(t._s(t.mood.time))]),t._v(" "),t.canClear(t.mood)?s("span",{staticClass:"btn_del",on:{click:function(o){t.delMoodContent(t.mood.id)}}},[t._v("删除")]):t._e(),t._v(" "),s("div",{staticClass:"moodFollow"},[s("span",{staticClass:"followCount"},[t._v(t._s(t.mood.careCount))]),t._v(" "),t.mood.moodValue>=5&&t.mood.careCount>0?s("img",{staticClass:"followtype",attrs:{src:e(87),alt:""}}):t._e(),t._v(" "),t.mood.moodValue>=5&&t.mood.careCount<=0?s("img",{staticClass:"followtype",attrs:{src:e(192),alt:""}}):t._e(),t._v(" "),t.mood.moodValue<5&&t.mood.careCount>0?s("img",{staticClass:"followtype",attrs:{src:e(79),alt:""}}):t._e(),t._v(" "),t.mood.moodValue<5&&t.mood.careCount<=0?s("img",{staticClass:"followtype",attrs:{src:e(83),alt:""}}):t._e(),t._v(" "),s("span",{staticClass:"followCount",staticStyle:{"margin-left":"10px"}},[t._v(t._s(t.mood.replycount))]),t._v(" "),s("img",{staticClass:"followtype",attrs:{src:e(80),alt:""}})])])],2),t._v(" "),s("div",{staticClass:"show_box"},[s("div",{staticClass:"arraw"}),t._v(" "),t.cares.length?s("div",{staticClass:"show_top"},[t.mood.moodValue>=5?s("img",{staticClass:"show_img1",attrs:{src:e(87),alt:""}}):t._e(),t._v(" "),t.mood.moodValue<5?s("img",{staticClass:"show_img1",attrs:{src:e(79),alt:""}}):t._e(),t._v(" "),t._l(t.cares,function(t){return s("div",[s("img",{attrs:{src:t.faceUrl,alt:""}})])})],2):t._e(),t._v(" "),t.replies.length>0&&t.cares.length>0?s("div",{staticClass:"line_comment"}):t._e(),t._v(" "),t.replies.length>0?s("ul",{staticClass:"show_bottom"},[s("img",{staticClass:"show_img2",attrs:{src:e(80)}}),t._v(" "),t._l(t.replies,function(o,e){return o.isDel?t._e():s("li",{key:e,on:{click:function(s){t.replyOrDel(o.fromuserid,o.id,e)}}},[s("img",{staticClass:"show_bottom_img ",attrs:{src:o.from_faceUrl}}),t._v(" "),s("div",{staticClass:"show_bottom_text"},[s("div",{staticClass:"reply_author"},[s("a",{staticClass:"pname other"},[t._v(t._s(t._f("shortName")(o.from_nickName,7)))])]),t._v(" "),s("div",{staticClass:"reply_content"},[s("span",{staticClass:"text_comment"},[t._v("回复")]),s("a",{staticClass:"pname other"},[t._v(t._s(t._f("shortName")(o.to_nickName,7)))]),t._v(" "),s("span",{staticClass:"text_comment"},[t._v(t._s(t.emojiContent(o.content)))])])])])})],2):t._e()])])]):t._e()},staticRenderFns:[]}},245:function(t,o,e){var s=e(141);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(2)("3a3d1888",s,!0)},55:function(t,o,e){e(245);var s=e(1)(e(121),e(214),null,null);t.exports=s.exports},79:function(t,o,e){t.exports=e.p+"list_baob_pre.png"},80:function(t,o,e){t.exports=e.p+"comments.png"},83:function(t,o,e){t.exports=e.p+"list_baob_nor.png"},87:function(t,o,e){t.exports=e.p+"mood_icon_dianz_pre.png"},94:function(t,o,e){t.exports=e.p+"bianji.png"}});
//# sourceMappingURL=7.build.js.map?04506