webpackJsonp([15],{120:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var personal={template:"#personal"};__webpack_exports__.default={data:function(){return{birthday:"",user:"",year:"",month:"",day:"",defaultCity:"[330000, 330100, 330102]",provinceName:"",cityName:"",areaName:"",provinceId:"",cityId:"",areaId:""}},mounted:function mounted(){var _this=this,infokey="perfectinfo";xqzs.version.showed(infokey),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){if(null!==data.data.data){if(_this.user=eval(data.data.data),_this.birthday=_this.user.birthday,_this.birthday){var date=_this.birthday.split(",");_this.year=date[0],_this.month=date[1],_this.day=date[2]}_this.provinceName=_this.user.provinceName,_this.cityName=_this.user.cityName,_this.areaName=_this.user.areaName,_this.provinceId=_this.user.provinceId,_this.cityId=_this.user.cityId,_this.areaId=_this.user.areaId,_this.defaultCity=[_this.provinceId,_this.cityId,_this.areaId]}},function(t){})},methods:{showDate:function(){var t=this;weui.datePicker({start:1990,end:(new Date).getFullYear(),onChange:function(t){},onConfirm:function(e){t.year=e[0].value,t.month=e[1].value,t.day=e[2].value,t.birthday=e[0].value+","+e[1].value+","+e[2].value}})},areaPicker:function(){var t=this;$.get("/src/js/city.json",function(e){weui.picker(e,{depth:3,defaultValue:t.defaultCity,onChange:function(t){},onConfirm:function(e){e[0]&&(t.provinceId=e[0].value,t.provinceName=e[0].label),e[1]&&(t.cityId=e[1].value,t.cityName=e[1].label),e[2]?(t.areaId=e[2].value,t.areaName=e[2].label):(t.areaId="",t.areaName="")},id:"cascadePicker"})})},updateHeadpic:function(){this.$http({method:"POST",url:web.API_PATH+"user/update/user/headpic/_userId_"}).then(function(t){1==t.data&&xqzs.weui.toast("success","更新成功",function(){})},function(t){})},msgSubmit:function(){var t=this,e=$(".nickName").val(),a=$(".realName").val(),i=$(".address").val(),s={id:t.user.id,realName:a,nickName:e,birthday:t.birthday,countryId:0,provinceId:t.provinceId,cityId:t.cityId,areaId:t.areaId,address:i};console.log(s),t.$http.post(web.API_PATH+"user/update",s).then(function(e){xqzs.weui.toast("success","修改成功",function(){t.$router.go(-1)})})}}}},142:function(t,e,a){e=t.exports=a(0)(),e.push([t.i,".personal_box{background:#f4f4f4}.line{height:1px;background:#eee;position:absolute;left:15px;bottom:0;width:92%}.list0:first-child{margin-top:15px}.list0{background:#fff;height:60px;line-height:60px;padding:0 15px;position:relative}.list0 input{margin:0}.list02{margin-bottom:15px}.list0 span{float:left;color:#333;font-size:15px}.list0 .mobile{float:right;font-size:15px;color:#999;margin-right:5px}.list0 input{float:right;font-size:14px;color:#999;height:60px;text-align:right;border:0;outline:none}.list0 input::-webkit-input-placeholder{color:#999}.list0 input:-moz-placeholder{color:#999},.list0 input::-moz-placeholder{color:#999}.list0 input:-ms-input-placeholder{color:#999}.list0 img{width:16px;float:right;margin-top:23px}.showdL{float:right;color:#999;font-size:15px}.showdL span{margin-left:5px;color:#999}.list03{border:0;margin-top:30px;padding:0 15px}.weui-picker__indicator{width:100%;height:34px;position:absolute;left:0;top:102px;z-index:3;line-height:34px}#localCity{line-height:inherit;height:auto;padding-top:18px;padding-bottom:11px}#localCity span{float:none}.area{width:65%;text-align:right}",""])},193:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"personal_box"},[i("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("完善资料")]),t._v(" "),i("div",{staticClass:"list0"},[i("span",[t._v("昵称")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model:value",value:t.user.nickName,expression:"user.nickName",arg:"value"}],staticClass:"nickName",attrs:{type:"text",onfocus:"this.value=''",placeholder:"填写昵称"},domProps:{value:t.user.nickName},on:{input:function(e){e.target.composing||(t.user.nickName=e.target.value)}}}),t._v(" "),i("div",{staticClass:"line"})]),t._v(" "),i("div",{staticClass:"list0 list02",on:{click:function(e){t.updateHeadpic()}}},[i("span",[t._v("更新头像")]),t._v(" "),t._m(0)]),t._v(" "),i("router-link",{attrs:{to:"/me/personal/validate"}},[i("div",{staticClass:"list0 list02"},[i("img",{attrs:{src:a(68),alt:""}}),t._v(" "),i("span",[t._v("绑定手机号")]),i("span",{staticClass:"mobile"},[t._v(t._s(t.user.mobile))])])]),t._v(" "),i("div",{staticClass:"list0"},[i("span",[t._v("姓名")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model:value",value:t.user.realName,expression:"user.realName",arg:"value"}],staticClass:"realName",attrs:{type:"text",onfocus:"this.value=''",placeholder:"还未填写（如张三）"},domProps:{value:t.user.realName},on:{input:function(e){e.target.composing||(t.user.realName=e.target.value)}}}),t._v(" "),i("div",{staticClass:"line"})]),t._v(" "),i("div",{staticClass:"list0 list02",on:{click:function(e){t.showDate()}}},[i("span",[t._v("生日")]),t._v(" "),t.birthday?i("div",{staticClass:"showdL"},[i("span",[t._v(t._s(t.year)+"年 ")]),t._v(" "),i("span",[t._v(t._s(t.month)+"月 ")]),t._v(" "),i("span",[t._v(t._s(t.day)+"日 ")])]):i("div",{staticClass:"showdL"},[t._v("\n            请选择日期\n        ")])]),t._v(" "),i("div",{staticClass:"list0 box",attrs:{id:"localCity"},on:{click:function(e){t.areaPicker()}}},[i("span",[t._v("所在地区")]),t._v(" "),i("div",{staticClass:"showdL area"},[i("span",[t._v("中国")]),t._v(" "),t.provinceName?i("span",[t._v(t._s(t.provinceName))]):t._e(),t._v(" "),t.cityName?i("span",[t._v(t._s(t.cityName))]):t._e(),t._v(" "),t.areaName?i("span",[t._v(t._s(t.areaName))]):t._e()]),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("div",{staticClass:"line"})]),t._v(" "),i("div",{staticClass:"list0"},[i("span",[t._v("详细地址")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model:value",value:t.user.address,expression:"user.address",arg:"value"}],staticClass:"address",attrs:{type:"text",placeholder:"还未填写"},domProps:{value:t.user.address},on:{input:function(e){e.target.composing||(t.user.address=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"list03",on:{click:function(e){t.msgSubmit()}}},[i("a",{staticClass:"weui-btn weui-btn_primary"},[t._v("提交")])]),t._v(" "),i("div",{staticStyle:{height:"50px"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",[i("img",{attrs:{src:a(68),alt:""}})])}]}},222:function(t,e,a){var i=a(142);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a(2)("3c30a695",i,!0)},60:function(t,e,a){a(222);var i=a(1)(a(120),a(193),null,null);t.exports=i.exports},68:function(t,e,a){t.exports=a.p+"me_jt.png"}});
//# sourceMappingURL=15.build.js.map?b9649