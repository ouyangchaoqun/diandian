webpackJsonp([12],{135:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});s.default={data:function(){return{dataArray:[],url:"/me/subscribe/subscribeList/",description:"",urlDetail:"/me/subscribe/subscribeDetail/",subArray:[]}},props:["issubscribe"],beforeCreate:function(){console.log("beforeCreate");var t=this;this.$http({method:"GET",url:web.API_PATH+"subscribe/query/subscribes/by/user/_userId_"}).then(function(s){var i=s.data.data;console.log(i),t.dataArray=i},function(t){}),this.$http({method:"GET",url:web.API_PATH+"subscribe/query/users/subscribes/_userId_"}).then(function(s){var i=s.data.data;console.log(i),t.subArray=i},function(t){})},methods:{subText:function(t){return t.length>12&&(t=t.substr(0,12)+"..."),t}},mounted:function(){var t=new Swiper(".swiper-container",{speed:500,onSlideChangeStart:function(){$(".subtabs .active").removeClass("active"),$(".subtabs a").eq(t.activeIndex).addClass("active")}});$(".subtabs a").on("touchstart mousedown",function(s){s.preventDefault(),$(".subtabs .active").removeClass("active"),$(this).addClass("active"),t.slideTo($(this).index())}),$(".subtabs a").click(function(t){t.preventDefault()});var s=this.$route.query.swiperindex||0;console.info(1212),t.slideTo(s)}}},143:function(t,s,i){s=t.exports=i(0)(),s.push([t.i,".subscribe_box{width:100%;height:100%;background:#fff!important}.subtabs{height:37px;background:#fff;padding:15px;border-bottom:1px solid #eee}.tabHeader{height:37px;background:#ebebeb;border-radius:5px;padding:0 2px}.subtabs a{display:block;float:left;width:50%;color:#bcbcbc;text-align:center;line-height:33px;height:33px;font-size:14px;text-decoration:none;border-radius:4px;margin:2px 0;font-family:PingFangSC-Regular}.subtabs a.active{color:#333;position:relative;background:#fff;font-size:15px;font-family:PingFangSC-Medium}.subscribeLists{padding:0 15px}.subscribeList{height:62px;border-bottom:1px solid #eee;color:#999;padding-top:15px}.subscribeHeight{height:77px}.subscribeList div{float:left;margin-left:20px}.subscribeList h3{font-size:16px;color:#333;font-weight:400;line-height:16px;margin-bottom:9px}.subscribeList p{font-size:13px;line-height:16px;margin-bottom:12px;height:16px}.subscribeList span{font-size:11px;line-height:11px;display:block}.addSubscribe{float:right;width:37px;height:33px}.moodCount_box{width:100%;height:auto}.timing{width:41px;display:block;float:left}.subMarTop{margin-top:5px}.noSubscribe{font-size:15px;color:#333;margin-top:50%;text-align:center}",""])},171:function(t,s,i){t.exports=i.p+"add.png"},172:function(t,s,i){t.exports=i.p+"checked.png"},216:function(t,s,i){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"subscribe_box"},[e("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("精选订阅")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"swiper-container moodCount_box"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("ul",{staticClass:"subscribeLists"},t._l(t.dataArray,function(s){return e("router-link",{attrs:{to:t.url+s.id}},[e("li",{staticClass:"subscribeList subscribeHeight"},[e("img",{staticClass:"timing",attrs:{src:s.icon,alt:""}}),t._v(" "),e("div",[e("h3",[t._v(t._s(s.title))]),t._v(" "),e("p",{staticClass:"description",domProps:{innerHTML:t._s(t.subText(s.description))}}),t._v(" "),e("span",[t._v(t._s(s.subscribecount)+"人已订阅")])]),t._v(" "),1==!s.issubscribe?e("img",{staticClass:"addSubscribe",attrs:{src:i(171),alt:""}}):t._e(),t._v(" "),1==s.issubscribe?e("img",{staticClass:"addSubscribe",attrs:{src:i(172),alt:""}}):t._e()])])}))]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("ul",{staticClass:"subscribeLists"},t._l(t.subArray,function(s){return t.subArray.length>0||1==s.issubscribe?e("router-link",{attrs:{to:t.urlDetail+s.id}},[e("li",{staticClass:"subscribeList"},[e("img",{staticClass:"timing",attrs:{src:s.icon,alt:""}}),t._v(" "),e("div",[e("h3",{staticClass:"subMarTop"},[t._v(t._s(s.title))]),t._v(" "),e("p",[t._v("每天"+t._s(s.remindtime)+"提醒")])])])]):t._e()})),t._v(" "),t.subArray.length<=0?e("div",{staticClass:"noSubscribe"},[t._v("你暂时还没有任何订阅哦~")]):t._e()])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"subtabs"},[i("div",{staticClass:"tabHeader"},[i("a",{staticClass:"active",attrs:{href:"#",hidefocus:"true"}},[t._v("订阅推荐")]),t._v(" "),i("a",{attrs:{href:"#",hidefocus:"true"}},[t._v("我的订阅")])])])}]}},247:function(t,s,i){var e=i(143);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(2)("43fd09c0",e,!0)},68:function(t,s,i){i(247);var e=i(1)(i(135),i(216),null,null);t.exports=e.exports}});
//# sourceMappingURL=12.build.js.map?9befa