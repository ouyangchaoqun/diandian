webpackJsonp([37],{101:function(t,e,s){s(461);var i=s(1)(s(216),s(408),null,null);t.exports=i.exports},216:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s(53);e.default={data:function(){return{psyLists:[],heaLists:[],myTestLists:[],answerId:"",testId:"",activeIndex:0,psychtestSwiper:null}},mounted:function(){var t=this;this.getTextList(),this.getHeaLists(),this.getMyTestLists();var e=$(window).height()-$("header").height();$(".swiper-slide").css("height",e),console.log(e),this.$nextTick(function(){t.psychtestSwiper=new Swiper(".textList_box",{speed:500,onSlideChangeStart:function(){$("header div").removeClass("test_active"),$("header div").eq(t.psychtestSwiper.activeIndex).addClass("test_active"),$(".textList_box").css("height","auto"),console.log("触发.........")}});var e=cookie.get("activeIndex");e&&(t.psychtestSwiper.slideTo(e),cookie.set("activeIndex",0))}),$("header div").on("click",function(){$("header div").removeClass("test_active"),$(this).addClass("test_active"),t.psychtestSwiper.slideTo($(this).index()),cookie.setNoexpires("activeIndex",$(this).index())})},methods:{detail:function(t){this.$router.push("/psychtestDetail?testId="+t)},getTextList:function(){var t=this;t.$http.get(web.API_PATH+"test/get/list/1/1/10").then(function(e){1===e.data.status&&(t.psyLists=e.data.data)},function(t){})},getHeaLists:function(){var t=this;t.$http.get(web.API_PATH+"test/get/list/2/1/10").then(function(e){1===e.data.status&&(t.heaLists=e.data.data)},function(t){})},getMyTestLists:function(){var t=this;t.$http.get(web.API_PATH+"test/get/tested/_userId_").then(function(e){console.log(e),1===e.data.status&&(t.myTestLists=e.data.data,console.log(t.myTestLists))},function(t){})},seeMyResult:function(t){var e=this;e.answerId=e.myTestLists[t].answerId,e.$router.push("/testResult?answerId="+e.answerId)},finishTest:function(t){var e=this;e.testId=e.myTestLists[t].id,e.$router.push("/testQuestions?testId="+e.testId)}}}},259:function(t,e,s){e=t.exports=s(0)(),e.push([t.i,".textList_box li:last-of-type{margin-bottom:15px}header{height:2.588rem;background:#fff;display:-webkit-box;display:flex;text-align:center;line-height:2.588rem;color:#7f7d7d;font-size:.88235rem;border-bottom:1px solid #eee;width:100%;position:fixed;top:0;z-index:100}header div{-webkit-box-flex:1;flex:1;height:2.471rem}.test_active{border-bottom:2px solid #1aac19;color:#333}.textList_box{margin-top:2.588rem;margin-bottom:10px;width:100%}.listStyle{padding:1.35rem .88235rem .8235rem;border-bottom:1px solid #eee;position:relative;height:6rem;display:block;background:#fff}.textList_info{font-size:.70588rem;line-height:1.1;height:.70588rem;position:absolute;bottom:.8235rem;left:.88235rem;width:12.235rem}.textList_title{color:#333;font-size:.941176rem;line-height:1.1;margin-bottom:.588235rem;width:11.7647rem;white-space:nowrap}.textList_content,.textList_title{overflow:hidden;text-overflow:ellipsis}.textList_content{color:#666;font-size:.7647rem;line-height:1.1rem;width:12.235rem;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.textList_cost{float:left;color:#f60}.textList_count{float:right;color:#000}.psychImg{width:6.470588rem;height:6.470588rem;display:block;position:absolute;right:.88235rem;top:1.17647rem}.listStyle:active{background:#ececec}.addMeTest{height:2.3529rem;background:#f4f4f4;padding:0 .88235rem;line-height:2.3529rem;color:#333;font-size:.70588rem;position:relative}.listNoBorder{border:0}.addTestBtn{width:5.88rem;height:1.764rem;font-size:.70588rem;position:absolute;top:50%;margin-top:-.882rem;right:.88235rem;line-height:1.764rem;border-radius:5px}.myTest_no{font-size:14px;color:#9d9a9a;text-align:center}.myTest_no img{display:block;height:121px;margin:60px auto 25px}.swiper-slide{overflow:auto}",""])},332:function(t,e,s){t.exports=s.p+"myTest_no.png"},408:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"psychtest_box"},[t._m(0),t._v(" "),i("div",{staticClass:"swiper-container textList_box"},[i("div",{staticClass:"swiper-wrapper"},[i("div",{staticClass:"swiper-slide"},[i("ul",t._l(t.psyLists,function(e){return i("li",[i("router-link",{staticClass:"listStyle",attrs:{to:{path:"/psychtestDetail",query:{testId:e.id}}}},[i("div",{staticClass:"textList_title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"textList_content"},[t._v(t._s(e.des))]),t._v(" "),i("div",{staticClass:"textList_info"},[i("span",{staticClass:"textList_cost"},[t._v("￥"+t._s(e.price))]),t._v(" "),i("span",{staticClass:"textList_count"},[t._v(t._s(e.count)+"人测试过")])]),t._v(" "),i("img",{staticClass:"psychImg",attrs:{src:e.pic,alt:""}})])],1)}))]),t._v(" "),i("div",{staticClass:"swiper-slide"},[i("ul",t._l(t.heaLists,function(e){return i("li",[i("router-link",{staticClass:"listStyle",attrs:{to:{path:"/psychtestDetail",query:{testId:e.id}}}},[i("div",{staticClass:"textList_title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"textList_content"},[t._v(t._s(e.des))]),t._v(" "),i("div",{staticClass:"textList_info"},[i("span",{staticClass:"textList_cost"},[t._v("￥"+t._s(e.price))]),t._v(" "),i("span",{staticClass:"textList_count"},[t._v(t._s(e.count)+"人测试过")])]),t._v(" "),i("img",{staticClass:"psychImg",attrs:{src:e.pic,alt:""}})])],1)}))]),t._v(" "),i("div",{staticClass:"swiper-slide"},[t.myTestLists&&0!=t.myTestLists.length?i("ul",t._l(t.myTestLists,function(e,s){return i("li",[i("a",{on:{click:function(s){t.detail(e.id)}}},[i("div",{staticClass:"listStyle listNoBorder"},[i("div",{staticClass:"textList_title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"textList_content"},[t._v(t._s(e.des))]),t._v(" "),i("div",{staticClass:"textList_info"},[i("span",{staticClass:"textList_cost"},[t._v("￥"+t._s(e.price))]),t._v(" "),i("span",{staticClass:"textList_count"},[t._v(t._s(e.count)+"人测试过")])]),t._v(" "),i("img",{staticClass:"psychImg",attrs:{src:e.pic,alt:""}})]),t._v(" "),i("div",{staticClass:"addMeTest"},[null!=e.answerId?[t._v("完成时间: "+t._s(e.addTime))]:t._e(),t._v(" "),null==e.answerId?[t._v("未完成")]:t._e(),t._v(" "),null!=e.answerId?i("div",{staticClass:"weui-btn weui-btn_primary addTestBtn",on:{click:function(e){e.stopPropagation(),t.seeMyResult(s)}}},[t._v("查看报告")]):t._e(),t._v(" "),null==e.answerId?i("div",{staticClass:"weui-btn weui-btn_primary addTestBtn",on:{click:function(e){e.stopPropagation(),t.finishTest(s)}}},[t._v("完成测试")]):t._e()],2)])])})):t._e(),t._v(" "),t.myTestLists&&0==t.myTestLists.length?i("div",{staticClass:"myTest_no"},[i("img",{attrs:{src:s(332),alt:""}}),t._v(" "),i("div",[t._v("您还没有相关测试~~")])]):t._e()])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("div",{staticClass:"test_active"},[t._v("心理测试")]),t._v(" "),s("div",[t._v("健康测试")]),t._v(" "),s("div",[t._v("我的测试")])])}]}},461:function(t,e,s){var i=s(259);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(2)("a97c2bda",i,!0)}});
//# sourceMappingURL=37.build.js.map?6c92a