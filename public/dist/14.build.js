webpackJsonp([14],{121:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var personal={template:"#personal"};__webpack_exports__.default={data:function(){return{birthday:"",user:"",year:"",month:"",day:"",defaultCity:"[330000, 330100, 330102]",provinceName:"",cityName:"",areaName:"",provinceId:"",cityId:"",areaId:""}},mounted:function mounted(){var _this=this,infokey="perfectinfo";xqzs.version.showed(infokey),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){if(null!==data.data.data){if(_this.user=eval(data.data.data),_this.birthday=_this.user.birthday,_this.birthday){var date=_this.birthday.split(",");_this.year=date[0],_this.month=date[1],_this.day=date[2]}_this.provinceName=_this.user.provinceName,_this.cityName=_this.user.cityName,_this.areaName=_this.user.areaName,_this.provinceId=_this.user.provinceId,_this.cityId=_this.user.cityId,_this.areaId=_this.user.areaId,_this.defaultCity=[_this.provinceId,_this.cityId,_this.areaId]}},function(t){})},filters:{shortName:function(t,e){return xqzs.shortname(t,e)}},methods:{showDate:function(){var t=this;weui.datePicker({start:1949,defaultValue:[1988,1,1],end:(new Date).getFullYear(),onChange:function(t){},onConfirm:function(e){t.year=e[0].value,t.month=e[1].value,t.day=e[2].value,t.birthday=e[0].value+","+e[1].value+","+e[2].value}})},areaPicker:function(){var t=this;$.get("/src/js/city.json",function(e){weui.picker(e,{depth:3,defaultValue:t.defaultCity,onChange:function(t){},onConfirm:function(e){e[0]&&(t.provinceId=e[0].value,t.provinceName=e[0].label),e[1]&&(t.cityId=e[1].value,t.cityName=e[1].label),e[2]?(t.areaId=e[2].value,t.areaName=e[2].label):(t.areaId="",t.areaName="")},id:"cascadePicker"})})},updateHeadpic:function(){this.$http({method:"POST",url:web.API_PATH+"user/update/user/headpic/_userId_"}).then(function(t){1==t.data&&xqzs.weui.toast("success","更新成功",function(){})},function(t){})},msgSubmit:function(){var t=this,e=$(".nickName").val(),i=$(".realName").val(),a=$(".address").val(),s={id:t.user.id,realName:i,nickName:e,birthday:t.birthday,countryId:0,provinceId:t.provinceId,cityId:t.cityId,areaId:t.areaId,address:a};console.log(s),t.$http.post(web.API_PATH+"user/update",s).then(function(e){xqzs.weui.toast("success","修改成功",function(){t.$router.go(-1)})})}}}},143:function(t,e,i){e=t.exports=i(0)(),e.push([t.i,'.active_tab:active{background:#ececec}.personal_box{background:#f4f4f8}.line{height:1px;background:#eee;position:absolute;left:15px;bottom:0;width:92%}.list0:first-child{margin-top:12px}.list_bottom:after,.list_top:before{width:100%;content:" ";background:#eee;display:block;height:1px;overflow:hidden;position:absolute;top:0;left:0}.list_bottom:after{bottom:0;top:inherit}.list0{background:#fff;height:44px;line-height:44px;padding:0 15px;position:relative}.list0 input{margin:0}.list02{margin-bottom:15px}.list0 span{float:left;color:#333;font-size:15px}.list0 .mobile{float:right;font-size:15px;color:#999;margin-right:20px}.list0 input{float:right;font-size:14px;color:#999;height:44px;text-align:right;border:0;outline:none}.list0 input::-webkit-input-placeholder{color:#999}.list0 input:-moz-placeholder,.list0 input::-moz-placeholder{color:#999}.list0 input:-ms-input-placeholder{color:#999}.list0 img{width:16px;position:absolute;top:14px;right:15px}.showdL{float:right;color:#999;font-size:15px;width:150px;text-align:right}.showdL span{margin-left:5px;float:none;color:#999}.list03{border:0;margin-top:30px;padding:0 15px}.weui-picker__indicator{width:100%;height:34px;position:absolute;left:0;top:102px;z-index:3;line-height:34px}#localCity{line-height:inherit;height:auto;padding-top:9px;padding-bottom:9px}#localCity span{float:none}.area{width:65%;text-align:right}',""])},194:function(t,e,i){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"personal_box"},[a("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("完善资料")]),t._v(" "),a("div",{staticClass:"list0 list_top"},[a("span",[t._v("昵称")]),t._v(" "),a("input",{staticClass:"nickName",attrs:{type:"text",placeholder:"填写昵称",maxlength:"8"},domProps:{value:t.user.nickName}}),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"list0 list02 active_tab list_bottom",on:{click:function(e){t.updateHeadpic()}}},[a("span",[t._v("更新头像")]),t._v(" "),a("img",{attrs:{src:i(66),alt:""}})]),t._v(" "),a("router-link",{attrs:{to:"/me/personal/validate"}},[a("div",{staticClass:"list0 list02 active_tab list_bottom list_top"},[a("img",{attrs:{src:i(66),alt:""}}),t._v(" "),a("span",[t._v("绑定手机号")]),a("span",{staticClass:"mobile"},[t._v(t._s(t.user.mobile))])])]),t._v(" "),a("div",{staticClass:"list0 list_top"},[a("span",[t._v("姓名")]),t._v(" "),a("input",{staticClass:"realName",attrs:{type:"text",placeholder:"还未填写（如张三）"},domProps:{value:t.user.realName}}),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"list0 list02 list_bottom",on:{click:function(e){t.showDate()}}},[a("span",[t._v("生日")]),t._v(" "),t.birthday?a("div",{staticClass:"showdL"},[a("span",[t._v(t._s(t.year)+"年 ")]),t._v(" "),a("span",[t._v(t._s(t.month)+"月 ")]),t._v(" "),a("span",[t._v(t._s(t.day)+"日 ")])]):a("div",{staticClass:"showdL"},[t._v("\n            请选择日期\n        ")])]),t._v(" "),a("div",{staticClass:"list0 box list_top",attrs:{id:"localCity"},on:{click:function(e){t.areaPicker()}}},[a("span",[t._v("所在地区")]),t._v(" "),a("div",{staticClass:"showdL area"},[a("span",[t._v("中国")]),t._v(" "),t.provinceName?a("span",[t._v(t._s(t.provinceName))]):t._e(),t._v(" "),t.cityName?a("span",[t._v(t._s(t.cityName))]):t._e(),t._v(" "),t.areaName?a("span",[t._v(t._s(t.areaName))]):t._e()]),t._v(" "),a("div",{staticStyle:{clear:"both"}}),t._v(" "),a("div",{staticClass:"line"})]),t._v(" "),a("div",{staticClass:"list0 list_bottom"},[a("span",[t._v("详细地址")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model:value",value:t.user.address,expression:"user.address",arg:"value"}],staticClass:"address",attrs:{type:"text",placeholder:"还未填写"},domProps:{value:t.user.address},on:{input:function(e){e.target.composing||(t.user.address=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"list03",on:{click:function(e){t.msgSubmit()}}},[a("a",{staticClass:"weui-btn weui-btn_primary"},[t._v("提交")])]),t._v(" "),a("div",{staticStyle:{height:"50px"}})],1)},staticRenderFns:[]}},222:function(t,e,i){var a=i(143);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(2)("3c30a695",a,!0)},58:function(t,e,i){i(222);var a=i(1)(i(121),i(194),null,null);t.exports=a.exports},66:function(t,e,i){t.exports=i.p+"me_jt.png"}});
//# sourceMappingURL=14.build.js.map?8bf85