webpackJsonp([15],{111:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{maskFlag:!1,activeFlag:!1,maxPhotoCount:3,uploadpicinfo:{token:"",smallpic:"",middlepic:"",removepicurl:web.BASE_PATH+"api/removepicture",uploadbase64url:web.BASE_PATH+"api/upfilebase64",aliossgeturl:web.BASE_PATH+"aliyunapi/oss_getsetting"},alioss:null,pictures:[{isloading:!0,id:123},{isloading:!1,image:{height:640,id:"462",path:"http://oss.hh-idea.com/2017-06/07/4oci5wrblgnucfg9kpyct24pfhnzvo7l.jpg"}}]}},methods:{showAction:function(){this.maskFlag=!0,this.activeFlag=!0},hideAction:function(){this.activeFlag=!1,this.maskFlag=!1},smallPic:function(i){return i+xqzs.oss.Size.fill(78,78)},viewBigPics:function(i){for(var t=[],e=0,s=this.pictures.length;e<s;e++)this.pictures[e].image&&t.push(this.pictures[e].image.path+xqzs.oss.Size.resize(750,750));xqzs.wx.previewImage(i,t)},_showloadingpic:function(i){i="up_loading_"+i,this.pictures.push({isloading:!0,id:i})},_fillloadingpic:function(i,t){i="up_loading_"+i;for(var e=0,s=this.pictures.length;e<s;e++)i==this.pictures[e].id&&(this.pictures[e].isloading=!1,this.pictures[e].image=t)},uploadImage:function(i){var t=this,e="uf_"+(new Date).getTime();xqzs.wx.takePhotos(i,t.maxPhotoCount,t.uploadpicinfo,t.alioss,function(i){for(var s=0;s<i;s++)t._showloadingpic(e+s)},function(i,s){t._fillloadingpic(e+s,i.data)},function(i){console.info(i)})},getCam:function(){this.uploadImage("camera")},getPho:function(){this.uploadImage("album")},updatePics:function(){for(var i=[],t=0,e=this.pictures.length;t<e;t++)this.pictures[t].image&&i.push(this.pictures[t].image.id);Bus.$emit("picturesChange",i)}},mounted:function(){this.uploadpicinfo={token:xqzs.string.guid(),smallpic:xqzs.constant.PIC_SMALL,middlepic:xqzs.constant.PIC_MIDDLE,removepicurl:web.BASE_PATH+"api/removepicture",uploadbase64url:web.BASE_PATH+"api/upfilebase64",aliossgeturl:web.BASE_PATH+"api/aliyunapi/oss_getsetting"},this.alioss=new aliyunoss({url:this.uploadpicinfo.aliossgeturl,token:this.uploadpicinfo.token})},computed:{canupload:function(){return this.pictures.length<this.maxPhotoCount}}}},131:function(i,t,e){t=i.exports=e(1)(),t.push([i.i,".optionFrist_box{position:relative;padding-top:20px;padding-left:15px}.optionFrist_box .optionjt{left:1.4rem}.optionAdd{height:53px;width:53px}.weui-actionsheet__cell{font-size:16px;color:#545454;height:49px;line-height:49px;padding:0}.weui-mask{background:rgba(0,0,0,.4)}.item-up-btn,.upload-images .item{float:left;width:78px;height:78px;margin-right:10px}.upload-images .item{border:1px solid #ccc}.item-up-btn{text-align:center;padding-top:13px;height:67px}.weui-loading{width:40px;height:40px;margin:19px 0 0 19px}.upload-images .item-image image{width:78px;height:78px}",""])},173:function(i,t,e){i.exports=e.p+"tjzp.gif"},181:function(i,t,e){i.exports={render:function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"optionFrist_box"},[i._l(i.pictures,function(t){return s("div",{staticClass:"upload-images"},[t.isloading?s("div",{staticClass:"item"},[s("div",{staticClass:"weui-loading"})]):s("div",{staticClass:"item item-image"},[s("img",{attrs:{src:i.smallPic(t.image.path)},on:{click:function(e){i.viewBigPics(t.image.path)}}})])])}),i._v(" "),i.canupload?s("div",{staticClass:"item item-up-btn"},[s("img",{staticClass:"optionAdd",attrs:{src:e(173),alt:""},on:{click:function(t){i.showAction()}}})]):i._e(),i._v(" "),s("div",{class:{"weui-mask":i.maskFlag},on:{click:function(t){i.hideAction()}}}),i._v(" "),s("div",{class:{"weui-actionsheet":!0,"weui-actionsheet_toggle":i.activeFlag}},[s("div",{staticClass:"weui-actionsheet__menu"},[s("div",{staticClass:"weui-actionsheet__cell",attrs:{id:"btn"},on:{click:function(t){i.getCam()}}},[i._v("拍照")]),i._v(" "),s("div",{staticClass:"weui-actionsheet__cell",on:{click:function(t){i.getPho()}}},[i._v("从手机相册选择")])]),i._v(" "),s("div",{staticClass:"weui-actionsheet__action"},[s("div",{staticClass:"weui-actionsheet__cell",on:{click:function(t){i.hideAction()}}},[i._v("取消")])])])],2)},staticRenderFns:[]}},208:function(i,t,e){var s=e(131);"string"==typeof s&&(s=[[i.i,s,""]]),s.locals&&(i.exports=s.locals);e(2)("3537a40e",s,!0)},54:function(i,t,e){e(208);var s=e(0)(e(111),e(181),null,null);i.exports=s.exports}});
//# sourceMappingURL=15.build.js.map