webpackJsonp([6],{116:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var noticeDetail={template:"#noticeDetail"};__webpack_exports__.default={data:function(){return{data:null,replies:[],cares:[],mood:{},user:{},editurl:"/myCenter/myIndex/Edit?id="}},mounted:function mounted(){var _this=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"mood/care/query/comment/"+_this.$route.query.moodId}).then(function(t){1==t.data.status&&(_this.data=t.data.data,_this.replies=_this.data.reply,_this.cares=_this.data.care,_this.mood=_this.data.mood,_this.mood.moodValueUrl=web.IMG_PATH+"list_mood_0"+_this.mood.moodValue+".png",_this.mood.moodValueText=xqzs.mood.moodValueText[_this.mood.moodValue],_this.mood.time=xqzs.dateTime.formatTime(_this.mood.addTime)),_this.$nextTick(function(){myResizePicture()})},function(t){}),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){null!==data.data.data&&(_this.user=eval(data.data.data),console.log(_this.user))},function(t){})},methods:{canEdit:function(t){return xqzs.mood.canEdit(t)},replyOrDel:function(t,o,s){var e=this;console.log(this.user),t===e.user.id?e._delComment(o,s):e.addComment(o,s)},_delComment:function(t,o){var s=this;xqzs.weui.actionSheet("删除我的评论?","删除",function(){var e=web.API_PATH+"mood/reply/_userId_/"+t;s.$http.delete(e).then(function(t){1===t.data.status?(s.replies[o].isDel=!0,s.mood.replycount=s.mood.replycount-1):xqzs.weui.toast("fail","删除失败",function(){})}).catch(function(t){})},function(){})},addComment:function(t,o){var s=this,e="";e=s.replies[o].from_nickName,xqzs.mood.actionSheetEdit("取消","发送",function(o){s.$http.put(web.API_PATH+"mood/reply/add",{moodId:s.mood.id,userId:null,replyId:t,content:o}).then(function(t){1===t.data.status&&(xqzs.weui.toast("success","提交成功",function(){}),s.mood.replycount=t.data.data.mood.replycount,s.replies.push(t.data.data.reply))},function(t){}),console.log(o)},function(t){console.log(t)},"回复 "+e)},showBigImg:function(t,o){for(var s=o.path,e=[],a=0;a<t.length;a++)e.push(t[a].path);wx.previewImage({current:s,urls:e})},delMoodContent:function(t){var o=this,s=web.API_PATH+"mood/clean/content/_userId_/"+t;xqzs.weui.dialog("","确定删除吗？",function(){},function(){o.$http.delete(s).then(function(t){1===t.data.status?o.mood.content="":xqzs.weui.toast("fail","删除失败",function(){})})})},formatContent:function(t){return xqzs.face.parse(t)}}}},153:function(t,o,s){o=t.exports=s(0)(),o.push([t.i,".careborder{border-bottom:1px solid #f5f5f5}.careDetail_box{background:#fff;height:100%}",""])},202:function(t,o,s){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"careDetail_box"},[e("div",{staticClass:"myMood_list careborder"},[e("img",{staticClass:"moodImg",attrs:{src:t.mood.moodValueUrl,alt:""}}),t._v(" "),e("div",{staticClass:"moodImg_right"},[e("div",{staticClass:"moodState"},[t._v(t._s(t.mood.moodValueText))]),t._v(" "),e("div",{staticClass:"moodContext",domProps:{innerHTML:t._s(t.formatContent(t.mood.content))}}),t._v(" "),t.canEdit(t.mood)?[e("router-link",{staticClass:"editMood",attrs:{to:t.editurl+t.mood.id}},[t._v("\n                    20分钟内可以补充文字和图片\n                    "),e("img",{attrs:{src:s(82),alt:""}})])]:t._e(),t._v(" "),e("div",{staticClass:"moodPhotoLists"},t._l(t.mood.pics,function(o){return e("div",{staticClass:"moodPhotoList"},[e("img",{attrs:{src:o.path},on:{click:function(s){t.showBigImg(t.mood.pics,o)}}})])})),t._v(" "),e("div",{staticClass:"moodTime"},[e("span",[t._v(t._s(t.mood.time))]),t._v(" "),""!==t.mood.content?e("span",{staticClass:"btn_del",on:{click:function(o){t.delMoodContent(t.mood.id)}}},[t._v("删除")]):t._e(),t._v(" "),e("div",{staticClass:"moodFollow"},[e("span",{staticClass:"followCount"},[t._v(t._s(t.mood.careCount))]),t._v(" "),t.mood.moodValue>=5&&t.mood.careCount>0?e("img",{staticClass:"followtype",attrs:{src:s(68),alt:""}}):t._e(),t._v(" "),t.mood.moodValue>=5&&t.mood.careCount<=0?e("img",{staticClass:"followtype",attrs:{src:s(78),alt:""}}):t._e(),t._v(" "),t.mood.moodValue<5&&t.mood.careCount>0?e("img",{staticClass:"followtype",attrs:{src:s(67),alt:""}}):t._e(),t._v(" "),t.mood.moodValue<5&&t.mood.careCount<=0?e("img",{staticClass:"followtype",attrs:{src:s(77),alt:""}}):t._e(),t._v(" "),e("span",{staticClass:"followCount"},[t._v(t._s(t.mood.replycount))]),t._v(" "),e("img",{staticClass:"followtype",staticStyle:{width:"18px","margin-top":"3px"},attrs:{src:s(69),alt:""}})])])],2),t._v(" "),e("div",{staticClass:"show_box"},[e("div",{staticClass:"arraw"}),t._v(" "),t.cares.length?e("div",{staticClass:"show_top"},[t.mood.moodValue>=5?e("img",{staticClass:"show_img1",attrs:{src:s(68),alt:""}}):t._e(),t._v(" "),t.mood.moodValue<5?e("img",{staticClass:"show_img1",attrs:{src:s(67),alt:""}}):t._e(),t._v(" "),t._l(t.cares,function(t){return e("div",[e("img",{attrs:{src:t.faceUrl,alt:""}})])})],2):t._e(),t._v(" "),e("ul",{staticClass:"show_bottom"},[e("img",{staticClass:"show_img2",attrs:{src:s(69)}}),t._v(" "),t._l(t.replies,function(o,s){return o.isDel?t._e():e("li",{key:s,on:{click:function(e){t.replyOrDel(o.fromuserid,o.id,s)}}},[e("img",{staticClass:"show_bottom_img ",attrs:{src:o.from_faceUrl}}),t._v(" "),e("div",{staticClass:"show_bottom_text"},[e("div",{staticClass:"reply_author"},[e("a",{staticClass:"pname other"},[t._v(t._s(o.from_nickName))])]),t._v(" "),e("div",{staticClass:"reply_content"},[e("span",{staticClass:"text_comment"},[t._v("回复")]),e("a",{staticClass:"pname other"},[t._v(t._s(o.to_nickName))]),t._v(" "),e("span",{staticClass:"text_comment"},[t._v(t._s(o.content))])])])])})],2)])])])},staticRenderFns:[]}},230:function(t,o,s){var e=s(153);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(2)("0777426a",e,!0)},54:function(t,o,s){s(230);var e=s(1)(s(116),s(202),null,null);t.exports=e.exports},67:function(t,o,s){t.exports=s.p+"list_baob_pre.png"},68:function(t,o,s){t.exports=s.p+"list_dianz_pre.png"},69:function(t,o,s){t.exports=s.p+"comments.png"},77:function(t,o,s){t.exports=s.p+"list_baob_nor.png"},78:function(t,o,s){t.exports=s.p+"list_dianz_nor.png"},82:function(t,o,s){t.exports=s.p+"bianji.png"}});
//# sourceMappingURL=6.build.js.map