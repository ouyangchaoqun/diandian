webpackJsonp([13],{103:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var personal={template:"#personal"};__webpack_exports__.default={data:function(){return{birthday:"",user:"",year:"",month:"",day:"",defaultCity:"[330000, 330100, 330102]",provinceName:"",cityName:"",areaName:"",provinceId:"",cityId:"",areaId:""}},mounted:function mounted(){var _this=this;this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/[userId]"}).then(function(data){if(null!==data.data.data){if(_this.user=eval(data.data.data),_this.birthday=_this.user.birthday,_this.birthday){var date=_this.birthday.split(",");_this.year=date[0],_this.month=date[1],_this.day=date[2]}_this.provinceName=_this.user.provinceName,_this.cityName=_this.user.cityName,_this.areaName=_this.user.areaName,_this.provinceId=_this.user.provinceId,_this.cityId=_this.user.cityId,_this.areaId=_this.user.areaId,_this.defaultCity=[_this.provinceId,_this.cityId,_this.areaId]}},function(t){})},methods:{showDate:function(){var t=this;weui.datePicker({start:1990,end:(new Date).getFullYear(),onChange:function(t){},onConfirm:function(e){t.year=e[0].value,t.month=e[1].value,t.day=e[2].value,t.birthday=e[0].value+","+e[1].value+","+e[2].value}})},areaPicker:function(){var t=this;$.get("/src/js/city.json",function(e){weui.picker(e,{depth:3,defaultValue:t.defaultCity,onChange:function(t){},onConfirm:function(e){t.provinceId=e[0].value,t.cityId=e[1].value,t.areaId=e[2].value,t.provinceName=e[0].label,t.cityName=e[1].label,t.areaName=e[2].label},id:"cascadePicker"})})},updateHeadpic:function(){this.$http({method:"POST",url:web.API_PATH+"user/update/user/headpic/[userId]"}).then(function(t){null!==t.data.status&&xqzs.weui.toast("success","更新成功",function(){})},function(t){})},msgSubmit:function(){var t=this,e=$(".nickName").val(),a=$(".realName").val(),s=$(".address").val(),i={id:t.user.id,realName:a,nickName:e,birthday:t.birthday,countryId:0,provinceId:t.provinceId,cityId:t.cityId,areaId:t.areaId,address:s};console.log(i),t.$http.post(web.API_PATH+"user/update",i).then(function(t){xqzs.weui.toast("success","修改成功",function(){window.location.href="#/"})})}}}},125:function(t,e,a){e=t.exports=a(1)(),e.push([t.i,".personal_box{height:100%;background:#eee}.list0{background:#fff;height:60px;margin-bottom:1px;line-height:60px;padding:0 10px}.list0 input{margin:0}.list02{margin-bottom:10px}.list0 span{float:left;color:#333;font-size:15px}.list0 .mobile{float:right;font-size:15px;color:#999}.list0 input{float:right;font-size:14px;color:#999;height:60px;text-align:right}.list0 img{width:20px;height:20px;float:right;margin-top:20px}.showdL{float:right;color:#999}.showdL span{margin-left:5px;color:#999}.list03{border:0;margin-top:44px;background:#eee;padding:0 10px}",""])},177:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"personal_box"},[s("div",{staticClass:"list0"},[s("span",[t._v("昵称")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model:value",value:t.user.nickName,expression:"user.nickName",arg:"value"}],staticClass:"nickName",attrs:{type:"text",onfocus:"this.value=''",placeholder:"填写昵称"},domProps:{value:t.user.nickName},on:{input:function(e){e.target.composing||(t.user.nickName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"list0 list02",on:{click:function(e){t.updateHeadpic()}}},[s("span",[t._v("更新头像")]),t._v(" "),t._m(0)]),t._v(" "),s("router-link",{attrs:{to:"/me/personal/validate"}},[s("div",{staticClass:"list0 list02"},[s("img",{attrs:{src:a(64),alt:""}}),t._v(" "),s("span",[t._v("绑定手机号")]),s("span",{staticClass:"mobile"},[t._v(t._s(t.user.mobile))])])]),t._v(" "),s("div",{staticClass:"list0"},[s("span",[t._v("姓名")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model:value",value:t.user.realName,expression:"user.realName",arg:"value"}],staticClass:"realName",attrs:{type:"text",onfocus:"this.value=''",placeholder:"还未填写（如张三）"},domProps:{value:t.user.realName},on:{input:function(e){e.target.composing||(t.user.realName=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"list0 list02",on:{click:function(e){t.showDate()}}},[s("span",[t._v("生日")]),t._v(" "),t.birthday?s("div",{staticClass:"showdL"},[s("span",[t._v(t._s(t.year)+"年 ")]),t._v(" "),s("span",[t._v(t._s(t.month)+"月 ")]),t._v(" "),s("span",[t._v(t._s(t.day)+"日 ")])]):s("div",{staticClass:"showdL"},[t._v("\n            请选择日期\n        ")])]),t._v(" "),s("div",{staticClass:"list0 box",attrs:{id:"localCity"},on:{click:function(e){t.areaPicker()}}},[s("span",[t._v("所在地区")]),t._v(" "),s("div",{staticClass:"showdL"},[s("span",[t._v("中国")]),t._v(" "),s("span",[t._v(t._s(t.provinceName))]),t._v(" "),s("span",[t._v(t._s(t.cityName))]),t._v(" "),s("span",[t._v(t._s(t.areaName))])])]),t._v(" "),s("div",{staticClass:"list0"},[s("span",[t._v("详细地址")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model:value",value:t.user.address,expression:"user.address",arg:"value"}],staticClass:"address",attrs:{type:"text",placeholder:"还未填写"},domProps:{value:t.user.address},on:{input:function(e){e.target.composing||(t.user.address=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"list03",on:{click:function(e){t.msgSubmit()}}},[s("a",{staticClass:"weui-btn weui-btn_primary"},[t._v("提交")])])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",[s("img",{attrs:{src:a(64),alt:""}})])}]}},201:function(t,e,a){var s=a(125);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(2)("3c30a695",s,!0)},53:function(t,e,a){a(201);var s=a(0)(a(103),a(177),null,null);t.exports=s.exports},64:function(t,e,a){t.exports=a.p+"goto.jpg"}});
//# sourceMappingURL=13.build.js.map