webpackJsonp([26],{195:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div")},staticRenderFns:[]}},40:function(t,e,n){var r=n(0)(n(97),n(195),null,null);t.exports=r.exports},97:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={data:function(){return{}},mounted:function(){var t=this,e=t.$route.query.userid;t.$http.post(web.API_PATH+"user/be/friend/width/ids/"+e+"/_userId_").then(function(t){1===t.data.status||-2===t.data.status||-3===t.data.status?location.href=web.BASE_PATH+"#/friendCenter?friendId="+e:-1===t.data.status&&(location.href=web.BASE_PATH)},function(t){})}}}});
//# sourceMappingURL=26.build.js.map