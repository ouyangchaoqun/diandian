webpackJsonp([26],{147:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(32);window.geocoder=null;t.default={data:function(){return{location:{selecindex:-2,city:{},nearpois:[]}}},methods:{getUrlLoc:function(){return{latitude:this.$route.query.latitude,longitude:this.$route.query.longitude}},getaddresscallback:function(e){var t=this,i=e.detail.addressComponents.city,o=e.detail.nearPois;t.location.city={name:i},t.location.nearpois=o},selectloc:function(e){this.location.selecindex=e,o.a.$emit("selectaddress",this.getaddress(e)),this.$router.back()},getaddress:function(e){return e<-1?"":e<0?this.location.city.name:this.location.nearpois[e].name}},mounted:function(){var e=this;window.geocoder=new qq.maps.Geocoder({complete:function(t){e.getaddresscallback(t)}});var t=e.getUrlLoc(),i=new qq.maps.LatLng(t.latitude,t.longitude);window.geocoder.getAddress(i),$(".positionList_box").height($("body").height()),xqzs.wx.setConfig(e)}}},157:function(e,t,i){t=e.exports=i(1)(),t.push([e.i,".positionList_box{overflow-y:auto}.locList{height:50px;margin-bottom:1px;background:#fff;line-height:50px;padding:0 10px}.locList div{float:left}.locList i{float:right;margin-top:13px;display:none}.locList .loc_checked{display:block}.noShow{font-size:14px;color:#516591}.address,.city{font-size:14px;color:#333}.address{line-height:35px}.addressDetails{font-size:12px;color:#999;line-height:5px}",""])},231:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"positionList_box"},[i("div",[e._v(e._s(e.address))]),e._v(" "),i("ul",[i("li",{staticClass:"locList",on:{click:function(t){e.selectloc(-2)}}},[i("div",{staticClass:"noShow"},[e._v("不显示位置")]),e._v(" "),i("i",{class:{"weui-icon-success-no-circle":!0,loc_checked:-2==e.location.selecindex}})]),e._v(" "),i("li",{staticClass:"locList",on:{click:function(t){e.selectloc(-1)}}},[i("div",{staticClass:"city"},[e._v(e._s(e.location.city.name))]),e._v(" "),i("i",{class:{"weui-icon-success-no-circle":!0,loc_checked:-1==e.location.selecindex}})]),e._v(" "),e._l(e.location.nearpois,function(t,o){return i("li",{key:o,staticClass:"locList",on:{click:function(t){e.selectloc(o)}}},[i("div",[i("p",{staticClass:"address"},[e._v(e._s(t.name))]),e._v(" "),i("p",{staticClass:"addressDetails"},[e._v(e._s(t.address))])]),e._v(" "),i("i",{class:{"weui-icon-success-no-circle":!0,loc_checked:e.location.selecindex==o}})])})],2)])},staticRenderFns:[]}},264:function(e,t,i){var o=i(157);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);i(2)("549e893e",o,!0)},66:function(e,t,i){i(264);var o=i(0)(i(147),i(231),null,null);e.exports=o.exports}});
//# sourceMappingURL=26.build.js.map?f92b2