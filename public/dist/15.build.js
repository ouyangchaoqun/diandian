webpackJsonp([15],{110:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{maskFlag:!1,activeFlag:!1,maxPhotoCount:3,uploadpicinfo:{token:"",smallpic:"",middlepic:"",removepicurl:web.BASE_PATH+"api/removepicture",uploadbase64url:web.BASE_PATH+"api/upfilebase64",aliossgeturl:web.BASE_PATH+"aliyunapi/oss_getsetting"},alioss:null,pictures:[]}},methods:{showAction:function(){this.maskFlag=!0,this.activeFlag=!0},hideAction:function(){this.activeFlag=!1,this.maskFlag=!1},_showloadingpic:function(i){i="up_loading_"+i,this.pictures.push({isloading:!0,id:i})},_fillloadingpic:function(i,t){i="up_loading_"+i;for(var e=0,s=this.pictures.length;e<s;e++)i==this.pictures[e].id&&(this.pictures[e].isloading=!1,this.pictures[e].content="放置图片",this.pictures[e].image=t)},uploadImage:function(i){var t=this,e="uf_"+(new Date).getTime();xqzs.wx.takePhotos(i,t.maxPhotoCount,t.uploadpicinfo,t.alioss,function(i){for(var s=0;s<i;s++)t._showloadingpic(e+s)},function(i,s){t._fillloadingpic(e+s,i.data)},function(i){console.info(i)})},getCam:function(){this.uploadImage("camera")},getPho:function(){this.uploadImage("album")},updatePics:function(){for(var i=[],t=0,e=this.pictures.length;t<e;t++)this.pictures[t].image&&i.push(this.pictures[t].image.id);Bus.$emit("picturesChange",i)}},mounted:function(){this.uploadpicinfo={token:xqzs.string.guid(),smallpic:xqzs.constant.PIC_SMALL,middlepic:xqzs.constant.PIC_MIDDLE,removepicurl:web.BASE_PATH+"api/removepicture",uploadbase64url:web.BASE_PATH+"api/upfilebase64",aliossgeturl:web.BASE_PATH+"api/aliyunapi/oss_getsetting"},this.alioss=new aliyunoss({url:this.uploadpicinfo.aliossgeturl,token:this.uploadpicinfo.token})},computed:{canupload:function(){return this.pictures.length<this.maxPhotoCount}}}},130:function(i,t,e){t=i.exports=e(1)(),t.push([i.i,".optionFrist_box{position:relative;padding-top:20px;padding-left:15px}.optionFrist_box .optionjt{left:1.4rem}.optionAdd{height:53px;width:53px}.weui-actionsheet__cell{font-size:16px;color:#545454;height:49px;line-height:49px;padding:0}.weui-mask{background:rgba(0,0,0,.4)}.upload-images .item{float:left;width:80px;height:80px}",""])},173:function(i,t,e){i.exports=e.p+"tjzp.gif"},181:function(i,t,e){i.exports={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"optionFrist_box"},[i._l(i.pictures,function(i){return s("div",{staticClass:"upload-images"},[i.isloading?s("div",{staticClass:"item"},[s("div",{staticClass:"weui-loading"})]):s("div",{staticClass:"item"},[s("img",{attrs:{src:"{{pic.image.path}}"}})])])}),i._v(" "),i.canupload?s("img",{staticClass:"optionAdd",attrs:{src:e(173),alt:""},on:{click:function(t){i.showAction()}}}):i._e(),i._v(" "),s("div",{class:{"weui-mask":i.maskFlag},on:{click:function(t){i.hideAction()}}}),i._v(" "),s("div",{class:{"weui-actionsheet":!0,"weui-actionsheet_toggle":i.activeFlag}},[s("div",{staticClass:"weui-actionsheet__menu"},[s("div",{staticClass:"weui-actionsheet__cell",attrs:{id:"btn"},on:{click:function(t){i.getCam()}}},[i._v("拍照")]),i._v(" "),s("div",{staticClass:"weui-actionsheet__cell",on:{click:function(t){i.getPho()}}},[i._v("从手机相册选择")])]),i._v(" "),s("div",{staticClass:"weui-actionsheet__action"},[s("div",{staticClass:"weui-actionsheet__cell",on:{click:function(t){i.hideAction()}}},[i._v("取消")])])])],2)},staticRenderFns:[]}},208:function(i,t,e){var s=e(130);"string"==typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);e(2)("3537a40e",s,!0)},54:function(i,t,e){e(208);var s=e(0)(e(110),e(181),null,null);i.exports=s.exports}});
//# sourceMappingURL=15.build.js.map