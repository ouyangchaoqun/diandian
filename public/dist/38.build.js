webpackJsonp([38],{118:function(t,a,i){t.exports=i.p+"me_jt.png"},211:function(module,__webpack_exports__,__webpack_require__){"use strict";Object.defineProperty(__webpack_exports__,"__esModule",{value:!0});var personal={template:"#personal"};__webpack_exports__.default={data:function(){return{birthday:"",user:"",year:"",month:"",day:"",defaultCity:"[330000, 330100, 330102]",provinceName:"",cityName:"",areaName:"",provinceId:"",cityId:"",areaId:"",isLunar:0,lunarDateData:[],solarDateDate:[],isLeapMonth:!1}},mounted:function mounted(){var _this=this,infokey="perfectinfo";xqzs.version.showed(infokey),this.$http({method:"GET",type:"json",url:web.API_PATH+"user/find/by/user/Id/_userId_"}).then(function(data){if(null!==data.data.data){if(_this.user=eval(data.data.data),_this.birthday=_this.user.birthday,_this.birthday){var date=_this.birthday.split(",");_this.year=date[0],_this.month=date[1],_this.day=date[2],1!=_this.user.isLunar&&2!=_this.user.isLunar||(_this.isLunar=!0,_this.yearN=date[0]+"年",_this.monthN=calendar.toChinaMonth(date[1]),2==_this.user.isLunar&&(_this.isLeapMonth=!0,_this.monthN="闰"+_this.monthN),_this.dayN=calendar.toChinaDay(date[2]))}_this.provinceName=_this.user.provinceName,_this.cityName=_this.user.cityName,_this.areaName=_this.user.areaName,_this.provinceId=_this.user.provinceId,_this.cityId=_this.user.cityId,_this.areaId=_this.user.areaId,_this.defaultCity=[_this.provinceId,_this.cityId,_this.areaId]}},function(t){}),xqzs.wx.setConfig(_this),this.lunarDateData=xqzs.dateTime.getLunarData(1949,2017),this.solarDateDate=xqzs.dateTime.getSolarData(1949,2017)},filters:{shortName:function(t,a){return xqzs.shortname(t,a)}},methods:{lutSelect:function(t){var a=this;if(0==t){if(!this.isLunar)return;if(this.birthday&&""!=this.birthday){var i=this.birthday.split(","),e=calendar.lunar2solar(parseInt(i[0]),parseInt(i[1]),parseInt(i[2]),a.isLeapMonth);this.birthday=e.cYear+","+e.cMonth+","+e.cDay,console.log(e),a.year=e.cYear,a.month=e.cMonth,a.day=e.cDay}this.isLunar=!1}else if(1==t){if(this.isLunar)return;if(this.isLunar=!0,this.birthday&&""!=this.birthday){var s=this.birthday.split(","),n=calendar.solar2lunar(s[0],s[1],s[2]);console.log(n),this.birthday=n.lYear+","+n.lMonth+","+n.lDay,a.isLeapMonth=n.isLeap,a.yearN=n.lYear+"年",a.monthN=n.IMonthCn,a.dayN=n.IDayCn,a.year=n.lYear,a.month=n.lMonth,a.day=n.lDay,n.isLeap&&(a.month=n.lMonth+"_1")}}},showDate:function(){var t=this,a=[1988,1,1];""!=this.year&&""!=this.month&&""!=this.day&&(a=[this.year,this.month,this.day]),console.log(a),this.isLunar?weui.picker(this.lunarDateData,{depth:3,defaultValue:a,id:"id"+Math.random(),onChange:function(t){console.log(t)},onConfirm:function(a){t.yearN=a[0].label,t.monthN=a[1].label,t.dayN=a[2].label,console.log(t.monthN);var i=a[1].value;"string"==typeof i&&i.indexOf("_")?(t.isLeapMonth=!0,i=a[1].value.split("_")[0]):t.isLeapMonth=!1,t.year=a[0].value,t.month=a[1].value,t.day=a[2].value,t.birthday=a[0].value+","+i+","+a[2].value}}):weui.picker(this.solarDateDate,{depth:3,defaultValue:a,id:"id"+Math.random(),onChange:function(t){console.log(t)},onConfirm:function(a){t.year=a[0].value,t.month=a[1].value,t.day=a[2].value,t.birthday=a[0].value+","+a[1].value+","+a[2].value}})},areaPicker:function(){var t=this;$.get("/src/js/city.json",function(a){weui.picker(a,{depth:3,defaultValue:t.defaultCity,onChange:function(t){},onConfirm:function(a){a[0]&&(t.provinceId=a[0].value,t.provinceName=a[0].label),a[1]&&(t.cityId=a[1].value,t.cityName=a[1].label),a[2]?(t.areaId=a[2].value,t.areaName=a[2].label):(t.areaId="",t.areaName="")},id:"cascadePicker"})})},updateHeadpic:function(){this.$http({method:"POST",url:web.API_PATH+"user/update/user/headpic/_userId_"}).then(function(t){1==t.data&&xqzs.weui.toast("success","更新成功",function(){})},function(t){})},msgSubmit:function(){var t=this,a=$(".nickName").val(),i=$(".realName").val(),e=$(".address").val(),s={id:t.user.id,realName:i,nickName:a,birthday:t.birthday,countryId:0,provinceId:t.provinceId,cityId:t.cityId,areaId:t.areaId,address:e,isLunar:t.isLunar?t.isLeapMonth?2:1:0};console.log(s),t.$http.post(web.API_PATH+"user/update",s).then(function(a){xqzs.weui.toast("success","修改成功",function(){t.$router.go(-1)})})}}}},264:function(t,a,i){a=t.exports=i(0)(),a.push([t.i,'.lut{float:left;background:#ececec;color:#333;height:30px;line-height:30px;padding:0 10px;margin-top:6px;font-size:14px;margin-left:10px}.lut:nth-child(3){margin-left:0}.lut.on{float:left;background:#0bb20c;color:#fff}.active_tab:active{background:#ececec}.personal_box{background:#f4f4f8}.line{height:1px;background:#eee;position:absolute;left:15px;bottom:0;width:92%}.list0:first-child{margin-top:12px}.list_bottom:after,.list_top:before{width:100%;content:" ";background:#eee;display:block;height:1px;overflow:hidden;position:absolute;top:0;left:0}.list_bottom:after{bottom:0;top:inherit}.list0{background:#fff;height:44px;line-height:44px;padding:0 15px;position:relative}.list0 input{margin:0}.list02{margin-bottom:15px}.list0 span{float:left;color:#333;font-size:15px}.list0 .mobile{float:right;font-size:15px;color:#999;margin-right:20px}.list0 input{float:right;font-size:14px;color:#999;height:44px;text-align:right;border:0;outline:none}.list0 input::-webkit-input-placeholder{color:#999}.list0 input:-moz-placeholder,.list0 input::-moz-placeholder{color:#999}.list0 input:-ms-input-placeholder{color:#999}.list0 img{width:16px;position:absolute;top:14px;right:15px}.showdL{float:right;color:#999;font-size:15px;width:150px;text-align:right}.showdL span{margin-left:5px;float:none;color:#999}.list03{border:0;margin-top:30px;padding:0 15px}.weui-picker__indicator{width:100%;height:34px;position:absolute;left:0;top:102px;z-index:3;line-height:34px}#localCity{line-height:inherit;height:auto;padding-top:9px;padding-bottom:9px}#localCity span{float:none}.area{width:65%;text-align:right}',""])},413:function(t,a,i){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"personal_box"},[e("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("完善资料")]),t._v(" "),e("div",{staticClass:"list0 list_top"},[e("span",[t._v("昵称")]),t._v(" "),e("input",{staticClass:"nickName",attrs:{type:"text",placeholder:"填写昵称",maxlength:"8"},domProps:{value:t.user.nickName}}),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"list0 list02 active_tab list_bottom",on:{click:function(a){t.updateHeadpic()}}},[e("span",[t._v("更新头像")]),t._v(" "),e("img",{attrs:{src:i(118),alt:""}})]),t._v(" "),e("router-link",{attrs:{to:"/me/personal/validate"}},[e("div",{staticClass:"list0 list02 active_tab list_bottom list_top"},[e("img",{attrs:{src:i(118),alt:""}}),t._v(" "),e("span",[t._v("绑定手机号")]),e("span",{staticClass:"mobile"},[t._v(t._s(t.user.mobile))])])]),t._v(" "),e("div",{staticClass:"list0 list_top"},[e("span",[t._v("姓名")]),t._v(" "),e("input",{staticClass:"realName",attrs:{type:"text",placeholder:"还未填写（如张三）"},domProps:{value:t.user.realName}}),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"list0 list02 list_bottom",on:{click:function(a){t.showDate()}}},[e("span",[t._v("生日")]),t._v(" "),e("div",{staticClass:"lut",class:{on:!t.isLunar},on:{click:function(a){a.stopPropagation(),t.lutSelect(0)}}},[t._v("阳历")]),t._v(" "),e("div",{staticClass:"lut",class:{on:t.isLunar},on:{click:function(a){a.stopPropagation(),t.lutSelect(1)}}},[t._v("阴历")]),t._v(" "),t.birthday?e("div",{staticClass:"showdL"},[t.isLunar?t._e():[e("span",[t._v(t._s(t.year)+"年 ")]),t._v(" "),e("span",[t._v(t._s(t.month)+"月 ")]),t._v(" "),e("span",[t._v(t._s(t.day)+"日 ")])],t._v(" "),t.isLunar?[e("span",[t._v(t._s(t.yearN)+" ")]),t._v(" "),e("span",[t._v(t._s(t.monthN)+" ")]),t._v(" "),e("span",[t._v(t._s(t.dayN)+" ")])]:t._e()],2):e("div",{staticClass:"showdL"},[t._v("\n            请选择日期\n        ")])]),t._v(" "),e("div",{staticClass:"list0 box list_top",attrs:{id:"localCity"},on:{click:function(a){t.areaPicker()}}},[e("span",[t._v("所在地区")]),t._v(" "),e("div",{staticClass:"showdL area"},[e("span",[t._v("中国")]),t._v(" "),t.provinceName?e("span",[t._v(t._s(t.provinceName))]):t._e(),t._v(" "),t.cityName?e("span",[t._v(t._s(t.cityName))]):t._e(),t._v(" "),t.areaName?e("span",[t._v(t._s(t.areaName))]):t._e()]),t._v(" "),e("div",{staticStyle:{clear:"both"}}),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"list0 list_bottom"},[e("span",[t._v("详细地址")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model:value",value:t.user.address,expression:"user.address",arg:"value"}],staticClass:"address",attrs:{type:"text",placeholder:"还未填写"},domProps:{value:t.user.address},on:{input:function(a){a.target.composing||(t.user.address=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"list03",on:{click:function(a){t.msgSubmit()}}},[e("a",{staticClass:"weui-btn weui-btn_primary"},[t._v("提交")])]),t._v(" "),e("div",{staticStyle:{height:"50px"}})],1)},staticRenderFns:[]}},466:function(t,a,i){var e=i(264);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);i(2)("3c30a695",e,!0)},97:function(t,a,i){i(466);var e=i(1)(i(211),i(413),null,null);t.exports=e.exports}});
//# sourceMappingURL=38.build.js.map?6c92a