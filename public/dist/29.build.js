webpackJsonp([29],{124:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{}},mounted:function(){var t=this,e=t.$route.query.userid;t.$http.post(web.API_PATH+"user/be/friend/width/ids/"+e+"/_userId_").then(function(n){1===n.data.status||-2===n.data.status||-3===n.data.status?t.$router.push("/friendCenter?friendId="+e):-1===n.data.status&&t.$router.push("/")},function(t){})}}},253:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("成为朋友")])},staticRenderFns:[]}},47:function(t,e,n){var r=n(0)(n(124),n(253),null,null);t.exports=r.exports}});
//# sourceMappingURL=29.build.js.map?4938a