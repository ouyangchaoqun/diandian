webpackJsonp([15],{110:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={data:function(){return{maskFlag:!1,activeFlag:!1,maxPhotoCount:3,uploadpicinfo:{token:"",smallpic:"",middlepic:"",removepicurl:web.BASE_PATH+"api/removepicture",uploadbase64url:web.BASE_PATH+"api/upfilebase64",aliossgeturl:web.BASE_PATH+"aliyunapi/oss_getsetting"},alioss:null,pictures:[]}},methods:{showAction:function(){this.maskFlag=!0,this.activeFlag=!0},hideAction:function(){this.activeFlag=!1,this.maskFlag=!1},_showloadingpic:function(i,t){t="up_loading_"+t,this.pictures.push({content:"loading",class:"loading",id:t})},_fillloadingpic:function(i,t){i="up_loading_"+i;for(var e=0,o=this.pictures.length;e<o;e++)i==this.pictures[e].id&&(this.pictures[e].class="",this.pictures[e].content="放置图片")},_picUpRemoveLoading:function(i,t,e,o){if(o="up_loading_"+o,i){var n=$(".imglist li.up-loading").length,s=$(".imglist input[name=moodpicture]").length,a=n+s,l='<li class="up-loading" id="'+o+'"><div class="weui-loading" style="height:50px;width:50px;margin-top:'+(t.h-50)/2+"px;margin-left:"+(t.w-50)/2+'px"></div></li>';$(".imglist li.upfile").before(l),a++,a<maxfilecount||$(".imglist li.upfile").hide()}else void 0!==e?($(".imglist li#"+o).removeClass("up-loading").html(e),$(".imglist li#"+o).find(".del-img").unbind("click").bind("click",function(){$.xqzs.mood.removeTempPicture($(this).parent().parent(),uploadpicinfo),getallowuploadcount()>0&&$(".imglist li.upfile").show()})):$(".imglist li#"+o).remove()},format_show_upload_pic:function(i,t){var e="";t.width>t.height?($w=t.width*i.h/t.height,e="height:"+i.h+"px;margin-left:"+(i.w-$w)/2+"px;width:auto"):t.width<t.height?($h=t.height*i.w/t.width,e="width:"+i.w+"px;margin-top:"+(i.h-$h)/2+"px;height:auto"):e="width:"+i.w+"px;height:"+i.h+"px";t.width,t.height;return'<div style="height:'+i.h+'px" class="img-priview"><div class="del-img"></div><img class="upload-view" style="'+e+'" src="'+t.path+uploadpicinfo.smallpic+'" data-bigsrc="'+t.path+uploadpicinfo.middlepic+'" /><input type="hidden" name="moodpicture" value="'+t.id+'" /></div>'},bind_image_slides_priview:function(){$(".imglist img").unbind("click").bind("click",function(){var i=$(this).data("bigsrc"),t=[];$("img",$(".imglist")).each(function(){t.push($(this).data("bigsrc"))}),xqzs.wx.previewImage(i,t)})},uploadImage:function(i){var t=this,e="uf_"+(new Date).getTime(),o={w:$(".imglist").data("width"),h:$(".imglist").data("height")};console.info(t.uploadpicinfo),console.info(t.alioss),xqzs.wx.takePhotos(i,t.maxPhotoCount,t.uploadpicinfo,t.alioss,function(i){for(var n=0;n<i;n++)t._showloadingpic(o,e+n)},function(i,n){var s=t.format_show_upload_pic(o,i.data);t._fillloadingpic(e+n,s),t.bind_image_slides_priview()},function(i){console.info(i)})},getCam:function(){this.uploadImage("camera")},getPho:function(){this.uploadImage("album")}},mounted:function(){this.uploadpicinfo={token:xqzs.string.guid(),smallpic:xqzs.constant.PIC_SMALL,middlepic:xqzs.constant.PIC_MIDDLE,removepicurl:web.BASE_PATH+"api/removepicture",uploadbase64url:web.BASE_PATH+"api/upfilebase64",aliossgeturl:web.BASE_PATH+"aliyunapi/oss_getsetting"},this.alioss=new aliyunoss({url:this.uploadpicinfo.aliossgeturl,token:this.uploadpicinfo.token})},computed:{canupload:function(){return this.pictures.length<this.maxPhotoCount}}}},130:function(i,t,e){t=i.exports=e(1)(),t.push([i.i,".optionFrist_box{position:relative;padding-top:20px;padding-left:15px}.optionFrist_box .optionjt{left:1.4rem}.optionAdd{height:53px;width:53px}.weui-actionsheet__cell{font-size:16px;color:#545454;height:49px;line-height:49px;padding:0}.weui-mask{background:rgba(0,0,0,.4)}",""])},173:function(i,t,e){i.exports=e.p+"tjzp.gif"},181:function(i,t,e){i.exports={render:function(){var i=this,t=i.$createElement,o=i._self._c||t;return o("div",{staticClass:"optionFrist_box"},[i._l(i.pictures,function(t){return o("div",[o("div",{staticClass:"{{pic.class}}",attrs:{id:"{{pic.id}}"}},[i._v(i._s(t.text))])])}),i._v(" "),i.canupload?o("img",{staticClass:"optionAdd",attrs:{src:e(173),alt:""},on:{click:function(t){i.showAction()}}}):i._e(),i._v(" "),o("div",{class:{"weui-mask":i.maskFlag},on:{click:function(t){i.hideAction()}}}),i._v(" "),o("div",{class:{"weui-actionsheet":!0,"weui-actionsheet_toggle":i.activeFlag}},[o("div",{staticClass:"weui-actionsheet__menu"},[o("div",{staticClass:"weui-actionsheet__cell",attrs:{id:"btn"},on:{click:function(t){i.getCam()}}},[i._v("拍照")]),i._v(" "),o("div",{staticClass:"weui-actionsheet__cell",on:{click:function(t){i.getPho()}}},[i._v("从手机相册选择")])]),i._v(" "),o("div",{staticClass:"weui-actionsheet__action"},[o("div",{staticClass:"weui-actionsheet__cell",on:{click:function(t){i.hideAction()}}},[i._v("取消")])])])],2)},staticRenderFns:[]}},208:function(i,t,e){var o=e(130);"string"==typeof o&&(o=[[i.i,o,""]]),o.locals&&(i.exports=o.locals);e(2)("3537a40e",o,!0)},54:function(i,t,e){e(208);var o=e(0)(e(110),e(181),null,null);i.exports=o.exports}});
//# sourceMappingURL=15.build.js.map