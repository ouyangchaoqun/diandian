webpackJsonp([39],{131:function(a,s,t){t(621);var e=t(1)(t(274),t(553),null,null);a.exports=e.exports},274:function(a,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={data:function(){return{activePerson:[],cares:[],friends:[],useActive:[],useCare:[],useFriend:[],type:"w",value:"2017-28"}},props:{user:{type:Object}},filters:{shortName:function(a,s){return xqzs.shortname(a,s)}},mounted:function(){var a=this,s=$(window).height()-$(".rankList_tabs").height();$(".swiper-slide").css("height",s),a.type=this.$route.params.Type,a.value=this.$route.params.Value;var s=$(window).height()-$(".rankList_tabs").height();$(".rankSwiper").css("min-height",s-15),console.log(a.type),console.log(a.value),a.$nextTick(function(){var a=new Swiper(".rankSwiper",{speed:500,onSlideChangeStart:function(){$(".rankList_tabs .rankList_tabs_active").removeClass("rankList_tabs_active"),$(".rankList_tabs a").eq(a.activeIndex).addClass("rankList_tabs_active")},onSlideChangeEnd:function(a){$(".swiper-slide").each(function(s){a.activeIndex==s&&($(".rankSwiper").css("height",$(this).height()),console.log("end"+$(".rankSwiper").height()))})}});$(".rankList_tabs a").on("click",function(s){s.preventDefault(),$(".rankList_tabs .rankList_tabs_active").removeClass("rankList_tabs_active"),$(this).addClass("rankList_tabs_active"),a.slideTo($(this).index())})}),a.$http.get(web.API_PATH+"rank/get/record/mood/_userId_/100/"+a.type+"?times="+a.value).then(function(s){if(1==s.body.status){a.useActive=s.body.data.userRank,console.log("1111111111"),s.body.data.userRank.length,a.activePerson=s.body.data.allUserRank;for(var t=0;t<a.activePerson.length;t++)a.$set(a.activePerson,t,a.activePerson[t])}}),a.$http.get(web.API_PATH+"rank/get/care/mood/_userId_/100/"+a.type+"/"+a.value).then(function(s){if(1==s.body.status){a.useCare=s.body.data.myCareRank,console.log(s.body.data.myCareRank),console.log("2222222222222"),s.body.data.myCareRank.length,a.cares=s.body.data.allCareRank;for(var t=0;t<a.cares.length;t++)a.$set(a.cares,t,a.cares[t]);console.log(a.cares)}}),a.$http.get(web.API_PATH+"rank/get/relation/_userId_/100/"+a.type+"/"+a.value).then(function(s){if(1==s.body.status){a.useFriend=s.body.data.myNewFriendRank,s.body.data.myNewFriendRank.length,a.friends=s.body.data.allNewFriendRank;for(var t=0;t<a.friends.length;t++)a.$set(a.friends,t,a.friends[t])}}),a.user&&(xqzs.wx.shareConfig.rank.imgUrl=a.user),xqzs.wx.setConfig(a,!1,xqzs.wx.shareConfig.rank)},methods:{wxFaceUrl:function(a){return xqzs.mood.wxface(a)}}}},350:function(a,s,t){s=a.exports=t(0)(),s.push([a.i,'.swiper-slide{overflow:auto}.rankList_box{width:100%;height:100%;background-color:#f4f4f8}.mid_line1{left:33.33%}.mid_line1,.mid_line2{position:absolute;width:.5px;height:19px;border-left:1px solid hsla(0,1%,66%,.37);top:16.5px}.mid_line2{left:66.66%}.rankList_tabs{height:50px;width:100%;background:#f4f4f8;border-bottom:1px solid #e5e5e5}.bottom_margin{margin-bottom:15px}.memo{font-size:13px;color:#333;margin:15px;text-align:left}.rankList_tabs a{display:block;float:left;width:33.33%;color:#a8a7a7;text-align:center;line-height:51.5px;font-size:15px;text-decoration:none}.rankList_tabs a.rankList_tabs_active{color:#09bb07;position:relative}.rankList_tabs a.rankList_tabs_active:after{content:" ";height:2.5px;overflow:hidden;width:100%;display:block;position:absolute;background:#09bb07;bottom:0;left:0}.my_rank{border-top:15px solid #f4f4f8;height:60px;border-bottom:15px solid #f4f4f8}.my_rank,.rankList_box .rank_list{width:100%;background-color:#fff;position:relative}.rankList_box .rank_list{height:59px}.rankList_box .rank_list:after{content:" ";width:100%;height:1px;position:absolute;right:0;bottom:0;background-color:#eee}.rankList_box .rank_list:last-child:after{content:"";display:none}.rankList_box .rank_index{font-size:16px;position:absolute;left:4%;top:18px;color:#666;font-family:PingFangSC-Regular}.first_1 .img{background:url('+t(485)+") no-repeat;background-size:100% 100%}.first_1 .img,.first_2 .img{width:17px;height:22.5px;position:absolute;left:4%}.first_2 .img{background:url("+t(486)+") no-repeat;background-size:100% 100%}.first_3 .img{background:url("+t(487)+") no-repeat;width:17px;height:22.5px;background-size:100% 100%;position:absolute;left:4%}.rank_face{width:40px;height:40px;position:absolute;top:10px;left:12.4%}.rank_face img{width:100%;border-radius:5px}.rankList_box .rank_name{font-size:14px;position:absolute;top:20px;left:27%}.rank_data,.rank_value{font-size:15px;color:#666;position:absolute;right:4%;top:18px}.rank_img{font-size:14px;color:#666;position:absolute;right:6.8%;top:14px}.rank_img img{width:15px}",""])},485:function(a,s,t){a.exports=t.p+"zb_jb1.png"},486:function(a,s,t){a.exports=t.p+"zb_jb2.png"},487:function(a,s,t){a.exports=t.p+"zb_jb3.png"},553:function(a,s){a.exports={render:function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"rankList_box"},[t("div",{directives:[{name:"title",rawName:"v-title"}]},[a._v("本周Top100")]),a._v(" "),t("div",{staticClass:"mid_line1"}),a._v(" "),t("div",{staticClass:"mid_line2"}),a._v(" "),a._m(0),a._v(" "),t("div",{staticClass:"swiper-container rankSwiper",staticStyle:{width:"100%"}},[t("div",{staticClass:"swiper-wrapper"},[t("div",{staticClass:"swiper-slide"},[a.useCare.length>0?[t("div",{staticClass:"my_rank",class:a.useCare.addClassName},[t("div",{staticClass:"rank_index"},[void 0!=a.useCare[0]&&a.useCare[0].row>=0?t("span",[a._v(a._s(a.useCare[0].row))]):a._e()]),a._v(" "),t("div",{staticClass:"rank_face"},[t("img",{attrs:{src:a.wxFaceUrl(a.useCare[0].faceUrl)}})]),a._v(" "),t("div",{staticClass:"rank_name"},[a._v(a._s(a._f("shortName")(a.useCare[0].nickName,7)))]),a._v(" "),t("div",{staticClass:"rank_value"},[a._v(a._s(a.useCare[0].count)+"次")])])]:a._e(),a._v(" "),!a.useCare.length>0?[t("div",{staticClass:"my_rank"},[a._m(1),a._v(" "),t("div",{staticClass:"rank_face"},[t("img",{attrs:{src:a.user.faceUrl}})]),a._v(" "),t("div",{staticClass:"rank_name"},[a._v(a._s(a._f("shortName")(a.user.nickName,7)))]),a._v(" "),t("div",{staticClass:"rank_value"},[a._v("0次")])])]:a._e(),a._v(" "),t("ul",{staticClass:"bottom_margin"},a._l(a.cares,function(s,e){return void 0==a.useCare[0]||void 0!=a.useCare[0]&&a.useCare[0].row!=e+1?t("li",{key:e,staticClass:"rank_list",class:s.addClassName},[t("div",{staticClass:"rank_index"},[e>=0?t("span",[a._v(a._s(e+1))]):a._e()]),a._v(" "),t("div",{staticClass:"rank_face"},[t("img",{attrs:{src:a.wxFaceUrl(s.faceUrl)}})]),a._v(" "),t("div",{staticClass:"rank_name"},[a._v(a._s(a._f("shortName")(s.nickName,7)))]),a._v(" "),t("div",{staticClass:"rank_value"},[a._v(a._s(s.count)+"次")])]):a._e()})),a._v(" "),t("div",{staticClass:"memo"},[a._v("备注：好友互动数 = 好友对我心情的点赞/拥抱数 + 我对好友心情的点赞/拥抱数")])],2),a._v(" "),t("div",{staticClass:"swiper-slide "},[a.useActive.length>0?[t("div",{staticClass:"my_rank",class:a.useActive.addClassName},[t("div",{staticClass:"rank_index"},[void 0!=a.useActive[0]&&a.useActive[0].row>=0?t("span",[a._v(a._s(a.useActive[0].row))]):a._e()]),a._v(" "),t("div",{staticClass:"rank_face"},[t("img",{attrs:{src:a.wxFaceUrl(a.useActive[0].faceUrl)}})]),a._v(" "),t("div",{staticClass:"rank_name"},[a._v(a._s(a._f("shortName")(a.useActive[0].nickName,7)))]),a._v(" "),t("div",{staticClass:"rank_data"},[a._v(a._s(a.useActive[0].count)+"次")])])]:a._e(),a._v(" "),a.useActive.length<=0?[t("div",{staticClass:"my_rank"},[a._m(2),a._v(" "),t("div",{staticClass:"rank_face"},[t("img",{attrs:{src:a.user.faceUrl}})]),a._v(" "),t("div",{staticClass:"rank_name"},[a._v(a._s(a._f("shortName")(a.user.nickName,7)))]),a._v(" "),t("div",{staticClass:"rank_data"},[a._v("0次")])])]:a._e(),a._v(" "),t("ul",{staticClass:"bottom_margin"},a._l(a.activePerson,function(s,e){return void 0==a.useActive[0]||void 0!=a.useActive[0]&&a.useActive[0].row!=e+1?t("li",{key:e,staticClass:"rank_list",class:s.addClassName},[t("div",{staticClass:"rank_index"},[e>=0?t("span",[a._v(a._s(e+1))]):a._e()]),a._v(" "),t("div",{staticClass:"rank_face"},[t("img",{attrs:{src:a.wxFaceUrl(s.faceUrl)}})]),a._v(" "),t("div",{staticClass:"rank_name"},[a._v(a._s(a._f("shortName")(s.nickName,7)))]),a._v(" "),t("div",{staticClass:"rank_data"},[a._v(a._s(s.count)+"次")])]):a._e()}))],2),a._v(" "),t("div",{staticClass:"swiper-slide "},[a.useFriend.length>0?[t("div",{staticClass:"my_rank",class:a.useFriend.addClassName},[t("div",{staticClass:"rank_index"},[t("span",{staticClass:"img"}),a._v(" "),void 0!=a.useFriend[0]&&a.useFriend[0].row>=0?t("span",[a._v(a._s(a.useFriend[0].row))]):a._e()]),a._v(" "),t("div",{staticClass:"rank_face"},[t("img",{attrs:{src:a.wxFaceUrl(a.useFriend[0].faceUrl)}})]),a._v(" "),t("div",{staticClass:"rank_name"},[a._v(a._s(a._f("shortName")(a.useFriend[0].nickName,7)))]),a._v(" "),t("div",{staticClass:"rank_data"},[a._v(a._s(a.useFriend[0].newfriend)+"位")])])]:a._e(),a._v(" "),a.useFriend.length<=0?[t("div",{staticClass:"my_rank"},[a._m(3),a._v(" "),t("div",{staticClass:"rank_face"},[t("img",{attrs:{src:a.user.faceUrl}})]),a._v(" "),t("div",{staticClass:"rank_name"},[a._v(a._s(a._f("shortName")(a.user.nickName,7)))]),a._v(" "),t("div",{staticClass:"rank_data"},[a._v("0位")])])]:a._e(),a._v(" "),t("ul",{staticClass:"bottom_margin"},a._l(a.friends,function(s,e){return void 0==a.useFriend[0]||void 0!=a.useFriend[0]&&a.useFriend[0].row!=e+1?t("li",{key:e,staticClass:"rank_list",class:s.addClassName},[t("div",{staticClass:"rank_index"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e>=0,expression:"index>=0"}]},[a._v(a._s(e+1))])]),a._v(" "),t("div",{staticClass:"rank_face"},[t("img",{attrs:{src:a.wxFaceUrl(s.faceUrl)}})]),a._v(" "),t("div",{staticClass:"rank_name"},[a._v(a._s(a._f("shortName")(s.nickName,7)))]),a._v(" "),t("div",{staticClass:"rank_data"},[a._v(a._s(s.newfriend)+"位")])]):a._e()}))],2)])])])},staticRenderFns:[function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"rankList_tabs"},[t("a",{staticClass:"rankList_tabs_active",attrs:{hidefocus:"true"}},[a._v("好友互动")]),a._v(" "),t("a",{attrs:{hidefocus:"true"}},[a._v("心情记录")]),a._v(" "),t("a",{attrs:{hidefocus:"true"}},[a._v("新增好友")])])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"rank_index"},[t("span")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"rank_index"},[t("span")])},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("div",{staticClass:"rank_index"},[t("span")])}]}},621:function(a,s,t){var e=t(350);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);t(2)("71f7b612",e,!0)}});
//# sourceMappingURL=39.build.js.map?5c7fdce1