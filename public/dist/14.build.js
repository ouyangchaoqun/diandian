webpackJsonp([14],{107:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.default={data:function(){return{friend_s:[],friend_g:[],friendCount:0,hasFriend:null}},mounted:function(){var t=this;this.$http.get(web.API_PATH+"user/query/friend/by/user/id/_userId_").then(function(i){if(null!==i.body.data&&void 0!==i.body.data){console.log(i.body.data);var e=i.body.data.generalFriends;t.friend_s=i.body.data.specialFriends;for(var n=0;n<t.friend_s.length;n++)t.friend_s[n].firstCn="",t.friend_s[n].friendLink="/#/friendCenter/?friendId="+t.friend_s[n].id;console.log(e);var r=[];for(var a in e)for(var s=0;s<e[a].length;s++){var o=e[a][s];o.firstCn=a,o.friendLink="/#/friendCenter/?friendId="+o.id,r.push(o)}t.friend_g=r,t.friendCount=t.friend_g.length+t.friend_s.length,t.friendCount>0?t.hasFriend=!0:t.hasFriend=!1}},function(t){})},methods:{_createinvite:function(t,i){this.$http({method:"GET",type:"json",url:web.API_PATH+"wei/xin/create/invite/"+t+"/_userId_"}).then(function(t){t&&1==t.data.status&&"function"==typeof i&&i()})},createinvite:function(){var t=this;t._createinvite("link",function(){t._createinvite("card",function(){}),xqzs.weui.dialog({title:"邀请卡已经发送",msg:"前往公众号查看，分享好友互为关注",submitText:"查看",submitFun:function(){try{WeixinJSBridge.call("closeWindow")}catch(t){}}})})},wxFaceUrl:function(t){return xqzs.mood.wxface(t)}}}},129:function(t,i,e){i=t.exports=e(0)(),i.push([t.i,".noFriends_box{height:100%;position:relative}.noFriends_box img{width:220px;position:absolute;top:90px;left:50%;margin-left:-110px}.noFriend_content{font-size:15px;color:#999;text-align:center;position:absolute;width:100%;left:50%;margin-left:-50%;top:335px}.noFriend_content div{font-size:19px;color:#6c3;margin-bottom:10px}.noFriend_content p{height:30px}.noFriend_btn{width:90%;position:absolute;bottom:100px;left:50%;margin-left:-45%}.friendList_box{background:#fff}.friendsCount_box{margin-top:0;overflow:inherit}.specialCare img{float:left;width:16px;margin-top:7px;margin-right:12px}.friendsCount_box div .weui-cell:first-child:before{display:block}.friendsCount_box .specialCare{line-height:32px}.friendsCount_cell{line-height:25px;padding-left:15px;color:#666;font-size:14px;background:#f4f4f4}.img_frinedsCount{width:40px;height:40px;display:block;border-radius:5px}.name_friendsCount{color:#333;font-size:14px;margin-left:13px}.friendCount{height:56px;line-height:56px!important;text-align:center;color:#898989;font-size:16px;background:#fff}.bgw{background:#fff;padding-bottom:25px}.btn-gray{background:#ebeceb;line-height:30px;text-align:center;margin-left:15px!important;margin-right:15px!important;border-radius:5px;border-color:#ebeceb;overflow:hidden}.btn-gray a{-webkit-tap-highlight-color:rgba(0,0,0,.2)!important;padding:0!important;display:inherit;background:none;font-size:13px;color:#5d5d5d}.bottom-card{background:#fff;padding:7px 0 59px;padding-left:15px;padding-right:15px}.bottom-card .weui-btn{-webkit-tap-highlight-color:rgba(0,0,0,.2)!important}",""])},170:function(t,i,e){t.exports=e.p+"mafriend_icom_special.png"},171:function(t,i,e){t.exports=e.p+"mafriends_pic_bj.png"},181:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"friendList_box"},[n("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("我的好友")]),t._v(" "),null!=t.hasFriend&&1==t.hasFriend?n("div",[t.friend_s.length?n("div",{staticClass:"weui-cells friendsCount_box specialCare_box"},[t._m(0),t._v(" "),t._l(t.friend_s,function(i){return n("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:i.friendLink}},[n("div",{staticClass:"weui-cell__hd"},[n("img",{staticClass:"img_frinedsCount",attrs:{src:t.wxFaceUrl(i.faceUrl),alt:""}})]),t._v(" "),n("div",{staticClass:"weui-cell__bd name_friendsCount"},[i.memoName&&""!==i.memoName?[t._v(t._s(i.memoName))]:""!==i.nickName?[t._v(t._s(i.nickName))]:t._e()],2),t._v(" "),n("div",{staticClass:"weui-cell__ft"})])})],2):t._e(),t._v(" "),n("div",{staticClass:"weui-cells friendsCount_box"},t._l(t.friend_g,function(i,e){return n("div",{key:e},[0==e?n("div",{staticClass:"friendsCount_cell"},[t._v(t._s(t.friend_g[e].firstCn[0]))]):t._e(),t._v(" "),e>0&&t.friend_g[e-1].firstCn[0]!=t.friend_g[e].firstCn[0]?n("div",{staticClass:"friendsCount_cell"},[t._v("\n                    "+t._s(t.friend_g[e].firstCn[0])+"\n                ")]):t._e(),t._v(" "),n("a",{staticClass:"weui-cell weui-cell_access",attrs:{href:i.friendLink}},[n("div",{staticClass:"weui-cell__hd"},[n("img",{staticClass:"img_frinedsCount",attrs:{src:t.wxFaceUrl(i.faceUrl),alt:""}})]),t._v(" "),n("div",{staticClass:"weui-cell__bd name_friendsCount"},[i.memoName&&""!==i.memoName?[t._v(t._s(i.memoName))]:""!==i.nickName?[t._v(t._s(i.nickName))]:t._e()],2),t._v(" "),n("div",{staticClass:"weui-cell__ft"})])])})),t._v(" "),n("div",{staticClass:"friendCount"},[t._v(t._s(t.friendCount)+"位好友")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bottom-card"},[n("div",{staticClass:"plr15 m-30"},[n("div",{staticClass:"weui-btn weui-btn_primary",attrs:{id:"mack_card_all"},on:{click:function(i){t.createinvite()}}},[t._v("生成邀请卡")])])])]):t._e(),t._v(" "),null!=t.hasFriend&&0==t.hasFriend?n("div",{staticClass:"noFriends_box"},[n("img",{attrs:{src:e(171),alt:""}}),t._v(" "),t._m(2),t._v(" "),n("div",{staticClass:"noFriend_btn"},[t._m(3),t._v(" "),n("div",{staticClass:"bottom-card"},[n("div",{staticClass:"plr15 m-30"},[n("div",{staticClass:"weui-btn weui-btn_primary",attrs:{id:"mack_card_all"},on:{click:function(i){t.createinvite()}}},[t._v("生成邀请卡\n                    ")])])])])]):t._e()])},staticRenderFns:[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"friendsCount_cell specialCare"},[n("img",{attrs:{src:e(170),alt:""}}),t._v("特别关心\n            ")])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"bgw"},[e("div",{staticClass:" m-30 btn-gray"},[e("a",{attrs:{href:"http://mp.weixin.qq.com/s/JMW1ZjzUNmP4ZIaH9ot6jw"}},[t._v("朋友太少，怎样邀请好友？")])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"noFriend_content"},[e("div",[t._v("还没有好友")])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"bgw"},[e("div",{staticClass:" m-30 btn-gray"},[e("a",{attrs:{href:"http://mp.weixin.qq.com/s/JMW1ZjzUNmP4ZIaH9ot6jw"}},[t._v("朋友太少，怎样邀请好友？")])])])}]}},209:function(t,i,e){var n=e(129);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(2)("d5595abe",n,!0)},48:function(t,i,e){e(209);var n=e(1)(e(107),e(181),null,null);t.exports=n.exports}});
//# sourceMappingURL=14.build.js.map?287fa