webpackJsonp([13],{108:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{friend_s:[],friend_g:[],friendCount:0,hasFriend:null,scrollTop:0}},mounted:function(){var e=this;$(".friendList_box").scroll(function(){xqzs.localdb.set("friendsScrollTop",$(this).scrollTop())}),e.getFriends(),xqzs.wx.setConfig(e)},filters:{shortName:function(e,t){return xqzs.shortname(e,t)}},methods:{getFriends:function(){var e=this;this.$http.get(web.API_PATH+"user/query/friend/by/user/id/_userId_").then(function(t){if(null!==t.body.data&&void 0!==t.body.data){console.log(t.body.data);var i=t.body.data.generalFriends;e.friend_s=t.body.data.specialFriends;for(var n=0;n<e.friend_s.length;n++)e.friend_s[n].firstCn="",e.friend_s[n].friendLink="/#/friendCenter/?friendId="+e.friend_s[n].id;console.log(i);var r=[];for(var s in i)for(var a=0;a<i[s].length;a++){var o=i[s][a];o.firstCn=s,o.friendLink="/#/friendCenter/?friendId="+o.id,r.push(o)}e.friend_g=r,e.friendCount=e.friend_g.length+e.friend_s.length,e.friendCount>0?e.hasFriend=!0:e.hasFriend=!1}},function(e){})},_createinvite:function(e,t){this.$http({method:"GET",type:"json",url:web.API_PATH+"wei/xin/create/invite/"+e+"/_userId_"}).then(function(e){e&&1==e.data.status&&"function"==typeof t&&t()})},createinvite:function(){var e=this;e._createinvite("link",function(){e._createinvite("card",function(){}),xqzs.weui.dialog({title:"邀请卡已经发送",msg:"前往公众号查看，分享好友互为关注",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(e){}}})})},wxFaceUrl:function(e){return xqzs.mood.wxface(e)}},updated:function(){var e=$(".weui-cell_access");xqzs.weui.active(e)}}},131:function(e,t,i){t=e.exports=i(0)(),t.push([e.i,".weui-cell_access:active{background:#fff}.left_zero:before{left:0!important}.noFriends_box{height:100%;position:relative}.noFriends_box img{width:220px;position:absolute;top:90px;left:50%;margin-left:-110px}.noFriend_content{font-size:15px;color:#999;text-align:center;position:absolute;width:100%;left:50%;margin-left:-50%;top:335px}.noFriend_content div{font-size:19px;color:#6c3;margin-bottom:10px}.noFriend_content p{height:30px}.noFriend_btn{width:90%;position:absolute;bottom:100px;left:50%;margin-left:-45%}.friendList_box{background:#fff}.friendsCount_box:before{border-top:none}.friendsCount_box{margin-top:0;overflow:inherit}.friendsCount_box .weui-cell{padding:9px 15px}.friendsCount_box .weui-cell:before{border-top:1px solid #eee!important;-webkit-transform:scaleY(1);transform:scaleY(1)}.friendsCount_box.weui-cells:after{border-bottom:1px solid #eee;-webkit-transform:scaleY(1);transform:scaleY(1)}.specialCare img{float:left;width:16px;margin-top:7px;margin-right:12px}.friendsCount_box div .weui-cell:first-child:before{display:block}.friendsCount_box .specialCare{line-height:32px}.friendsCount_cell{padding-left:15px;color:#666;font:12px/25px arial;background:#f4f4f8;border-top:1px solid #eee}.specialCare_box.weui-cells:after{border-bottom:none}.img_frinedsCount{width:38px;height:38px;display:block;border-radius:5px}.name_friendsCount{color:#333;font-size:15px;margin-left:13px}.friendCount{height:74px;line-height:74px!important;text-align:center;color:#898989;font-size:16px;background:#fff}.bgw{background:#fff;padding-bottom:23px}.btn-gray{background:#ebeceb;line-height:30px;text-align:center;margin-left:15px!important;margin-right:15px!important;border-radius:5px;border-color:#ebeceb;overflow:hidden}.btn-gray a{padding:0!important;display:inherit;background:none;font-size:14px;color:#5d5d5d}.btn-gray a:active{background:rgba(0,0,0,.2)}.bottom-card{background:#fff;padding:7px 0 30px;padding-left:15px;padding-right:15px}.bottom-card .weui-btn{-webkit-tap-highlight-color:rgba(0,0,0,.2)!important}",""])},170:function(e,t,i){e.exports=i.p+"mafriend_icom_special.png"},171:function(e,t,i){e.exports=i.p+"mafriends_pic_bj.png"},183:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"friendList_box"},[n("div",{directives:[{name:"title",rawName:"v-title"}]},[e._v("我的好友")]),e._v(" "),null!=e.hasFriend&&1==e.hasFriend?n("div",[e.friend_s.length?n("div",{staticClass:"weui-cells friendsCount_box specialCare_box"},[e._m(0),e._v(" "),e._l(e.friend_s,function(t,i){return n("a",{key:i,staticClass:"weui-cell weui-cell_access",class:{left_zero:0==i},attrs:{href:t.friendLink}},[n("div",{staticClass:"weui-cell__hd"},[n("img",{staticClass:"img_frinedsCount",attrs:{src:e.wxFaceUrl(t.faceUrl),alt:""}})]),e._v(" "),n("div",{staticClass:"weui-cell__bd name_friendsCount"},[t.memoName&&""!==t.memoName?[e._v(e._s(e._f("shortName")(t.memoName,16)))]:""!==t.nickName?[e._v(e._s(e._f("shortName")(t.nickName,16)))]:e._e()],2),e._v(" "),n("div",{staticClass:"weui-cell__ft"})])})],2):e._e(),e._v(" "),n("div",{staticClass:"weui-cells friendsCount_box"},e._l(e.friend_g,function(t,i){return n("div",{key:i},[0==i?n("div",{staticClass:"friendsCount_cell"},[e._v(e._s(e.friend_g[i].firstCn[0]))]):e._e(),e._v(" "),i>0&&e.friend_g[i-1].firstCn[0]!=e.friend_g[i].firstCn[0]?n("div",{staticClass:"friendsCount_cell"},[e._v("\n                    "+e._s(e.friend_g[i].firstCn[0])+"\n                ")]):e._e(),e._v(" "),n("a",{staticClass:"weui-cell weui-cell_access",class:{left_zero:0==i||i>0&&e.friend_g[i-1].firstCn[0]!=e.friend_g[i].firstCn[0]},attrs:{href:t.friendLink}},[n("div",{staticClass:"weui-cell__hd"},[n("img",{staticClass:"img_frinedsCount",attrs:{src:e.wxFaceUrl(t.faceUrl),alt:""}})]),e._v(" "),n("div",{staticClass:"weui-cell__bd name_friendsCount"},[t.memoName&&""!==t.memoName?[e._v(e._s(e._f("shortName")(t.memoName,16)))]:""!==t.nickName?[e._v(e._s(e._f("shortName")(t.nickName,16)))]:e._e()],2),e._v(" "),n("div",{staticClass:"weui-cell__ft"})])])})),e._v(" "),n("div",{staticClass:"friendCount"},[e._v(e._s(e.friendCount)+"位好友")]),e._v(" "),e._m(1),e._v(" "),n("div",{staticClass:"bottom-card"},[n("div",{staticClass:"plr15 m-30"},[n("div",{staticClass:"weui-btn weui-btn_primary",on:{click:function(t){e.createinvite()}}},[e._v("生成邀请卡")])])])]):e._e(),e._v(" "),null!=e.hasFriend&&0==e.hasFriend?n("div",{staticClass:"noFriends_box"},[n("img",{attrs:{src:i(171),alt:""}}),e._v(" "),e._m(2),e._v(" "),n("div",{staticClass:"noFriend_btn"},[e._m(3),e._v(" "),n("div",{staticClass:"bottom-card"},[n("div",{staticClass:"plr15 m-30"},[n("div",{staticClass:"weui-btn weui-btn_primary",on:{click:function(t){e.createinvite()}}},[e._v("生成邀请卡\n                    ")])])])])]):e._e()])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"friendsCount_cell specialCare"},[n("img",{attrs:{src:i(170),alt:""}}),e._v("特别关心\n            ")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bgw"},[i("div",{staticClass:" m-30 btn-gray"},[i("a",{attrs:{href:"http://mp.weixin.qq.com/s/JMW1ZjzUNmP4ZIaH9ot6jw"}},[e._v("朋友太少，怎样邀请好友？")])])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"noFriend_content"},[i("div",[e._v("还没有好友")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bgw"},[i("div",{staticClass:" m-30 btn-gray"},[i("a",{attrs:{href:"http://mp.weixin.qq.com/s/JMW1ZjzUNmP4ZIaH9ot6jw"}},[e._v("朋友太少，怎样邀请好友？")])])])}]}},210:function(e,t,i){var n=i(131);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2)("d5595abe",n,!0)},46:function(e,t,i){i(210);var n=i(1)(i(108),i(183),null,null);e.exports=n.exports}});
//# sourceMappingURL=13.build.js.map?4479c