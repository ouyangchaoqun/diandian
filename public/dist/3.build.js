webpackJsonp([3],{109:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(76);i.default={props:["moodvalue"],data:function(){return{funnytypes:[],activedIndex:0,funnyExpWidth:0}},methods:{getFunnyTypes:function(t){var i=this;i.$http.get(web.API_PATH+"funny/query/types").then(function(e){e.data&&1==e.data.status&&(i.funnytypes=e.data.data,"function"==typeof t&&t())})},getFunnyPictures:function(t){var i=this,e=i.funnytypes[t];i.$http.get(web.API_PATH+"funny/query/page/by/type/"+e.id+"/1/100").then(function(e){e.data&&1==e.data.status&&(i.funnytypes[t].pictures=e.data.data.rows,i.$set(i.funnytypes,t,i.funnytypes[t]))})},changeTypes:function(t){this.activedIndex=t,this.getFunnyPictures(t)},setFigureStyle:function(t,i,e){var s=this,n="width:"+s.funnyExpWidth+"px;height:"+s.funnyExpWidth+"px;background:url("+e+") no-repeat center;";return n+=t>i?"backgroundSize:100% auto":"backgroundSize:auto 100%"},selectGif:function(t){s.a.$emit("funnyPictureChange",t)}},mounted:function(){var t=this;t.getFunnyTypes(function(){t.funnytypes.length>0&&t.getFunnyPictures(0)}),t.funnyExpWidth=27.8745644*$(".funny_exp").width()/100-2}}},144:function(t,i,e){i=t.exports=e(0)(),i.push([t.i,".addEdit{height:65px;margin-bottom:15px}.addEdit1{background:#fff5eb;color:#fc6103}.addEdit2{background:#f1f1f1;color:#1aac19}.addEdit3{background:#e8f7e8;color:#747474}.green{color:green!important;border-color:green!important}#publishBtn{height:30px!important;vertical-align:bottom}.addEdit img{width:40px;height:40px;margin-left:15px;float:left;margin-top:12px}.addEdit_right{float:left;margin-left:13px;margin-top:6px}.addEdit_status{font-size:18px;margin-bottom:2px}.addEdit_scene{color:#333;font-size:13px}.optionFrist_box{position:relative;padding-top:20px;padding-left:15px}.optionFrist_box .optionjt{left:1.4rem}.optionAdd{height:65px;width:65px}.weui-actionsheet__cell{font-size:16px;color:#545454;height:49px;line-height:49px;padding:0}.weui-mask{background:rgba(0,0,0,.4)}.upload-images{float:left}.item-up-btn,.upload-images .item,.upload-images .item-image img{width:65px;height:65px}.item-up-btn,.upload-images .item{float:left}.upload-images .item{margin-top:0;margin-right:20px}.weui-loading{width:30px;height:30px;margin:12px 0 0 12px}.upload-images .item-image{position:relative}.upload-images .item-image .del-img{position:absolute;right:-10px;top:-10px;width:20px;height:20px;background-image:url("+e(155)+");background-size:20px}.edit_box{height:13.470588235294118rem;background:#fff;width:100%;position:relative;padding:0 0 1rem;margin-bottom:1px}#edit_mood{height:7.764705882352942rem;outline:none;width:90%;resize:none;border:0;margin:0 auto;color:#999;font-size:.8823529411764706rem}#edit_mood,.edit_loc{display:block;overflow:hidden}.edit_loc{min-width:131px;max-width:181px;height:26px;border:1px solid #dcdcdc;font-size:12px;color:#949292;line-height:26px;position:absolute;bottom:.5882352941176471rem;left:.8823529411764706rem;padding-right:10px;border-radius:15px}.edit_loc img{float:left;display:block;width:14px;margin-top:4px;margin-left:10px;margin-right:5px}.edit_num{font-size:12px;color:#999;position:absolute;right:.8823529411764706rem;bottom:.8823529411764706rem}.edit_option{height:2.1764705882352944rem;background:#fff;padding-top:.8823529411764706rem;display:flex;padding-left:.5882352941176471rem}.edit_option div{flex-grow:1;position:relative}.edit_option img{display:block;margin:0 auto}.optionFrist{width:1.35294118rem}.optionSecond{width:1.55294118rem;margin-top:-.2rem!important}.optionThird{width:1.35294118rem}.optionFourth{width:4.11764705882353rem;font-size:12px;color:#999;border:1px solid #dcdcdc;margin:0 auto;text-align:center;height:1.1764705882352942rem;line-height:1.1764705882352942rem;border-radius:8px}.option_five{margin-top:-.17647058823529413rem;height:1.4705882352941178rem;width:3.5294117647058822rem;margin-left:1.1764705882352942rem}.edit_option .optionjt{position:absolute;left:50%;margin-left:-.7058823529411765rem;width:1.411764705882353rem;bottom:-2px;visibility:hidden}.edit_option .optionjtFlag{visibility:visible}.test{height:1.5294117647058825rem;width:1.5294117647058825rem;background-size:cover;display:inline-block;vertical-align:middle}.optionSecond_box{position:relative;padding-left:.5882352941176471rem;padding-right:.5882352941176471rem;padding-top:1.1764705882352942rem;background:#f5f5f5}.optionSecond_box .optionjt{left:3.411764705882353rem}.expLists div{display:flex;flex-grow:1;margin-bottom:.29411764705882354rem}.delexp{height:1.1176470588235294rem;margin:0 auto;padding-top:.17647058823529413rem}.swiper-pagination-bullet{background:#d5d5d7}.swiper-pagination-bullet-active{background:#88888a}.exp_box{height:8.823529411764707rem}#pagination{position:absolute;bottom:.5882352941176471rem}.positionList_box{overflow-y:auto}.locList{height:50px;margin-bottom:1px;background:#fff;line-height:50px;padding:0 10px}.locList div{float:left}.locList i{float:right;margin-top:13px;display:none}.locList .loc_checked{display:block}.noShow{font-size:14px;color:#516591}.address,.city{font-size:14px;color:#333}.address{line-height:35px}.addressDetails{font-size:12px;color:#999;line-height:5px}",""])},149:function(t,i,e){i=t.exports=e(0)(),i.push([t.i,".funny_ul{height:100%;overflow-y:scroll;width:23.4666%;background:#eee}.exp_active figure{float:left;display:block!important;width:27.8745644%;height:27.8745644%;overflow:hidden;margin-right:4.181184%;margin-bottom:10px;border:1px solid #ccc}.funny_exp div{margin-left:4.181184%;display:none}.funny_box{height:100%;background:#fff}.funny_ul li{font-size:15px;color:#999;height:44px;line-height:44px;background:#eee;text-align:center;border-left:3px solid #eee;position:relative}.funny_ul .funny_active{border-left:3px solid #1cac1b;background:#fff;color:#1cac1b}.funny_exp{position:absolute;width:75.53333%;top:0;right:-5px;overflow-y:scroll;padding-top:10px;height:600px}.funny_exp .exp_active{display:block}",""])},155:function(t,i,e){t.exports=e.p+"close.png"},156:function(t,i,e){t.exports=e.p+"dz_nor.png"},175:function(t,i,e){e(226);var s=e(1)(e(109),e(198),null,null);t.exports=s.exports},192:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{directives:[{name:"title",rawName:"v-title"}]},[t._v("此刻心情")]),t._v(" "),t.showPositionList("funny")?s("v-funny",{attrs:{moodvalue:t.moodValue}}):t._e(),t._v(" "),t.showPositionList("")?s("div",{staticClass:"edit_box"},[s("div",{staticClass:"addEdit",class:t.moodcolorstyle},[s("img",{attrs:{src:t.moodImage}}),t._v(" "),s("div",{staticClass:"addEdit_right"},[s("div",{staticClass:"addEdit_status"},[t._v(t._s(t.moodText))]),t._v(" "),s("div",{staticClass:"addEdit_scene"},[t._v(t._s(t.scenesText))])])]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.moodcontent,expression:"moodcontent"}],attrs:{id:"edit_mood",placeholder:"这一刻的心情......",maxlength:"140"},domProps:{value:t.moodcontent},on:{input:[function(i){i.target.composing||(t.moodcontent=i.target.value)},t.listenContent]}}),t._v(" "),s("div",{staticClass:"edit_loc",on:{click:function(i){t.getLoc()}}},[t._v(t._s(t.showAddress)),s("img",{attrs:{src:e(156),alt:""}})]),t._v(" "),s("span",{staticClass:"edit_num"},[t._v(t._s(t.levelchars))])]):t._e(),t._v(" "),t.showPositionList("")?s("div",{staticClass:"edit_option"},[s("div",[s("div",[s("img",{staticClass:"optionFrist",attrs:{src:t.buttons.first.curr,alt:""},on:{click:function(i){t.clickoptions("first")}}})]),t._v(" "),s("img",{class:{optionjt:!0,optionjtFlag:t.buttons.first.on},attrs:{src:e(91),alt:""}})]),t._v(" "),s("div",[s("div",[s("img",{staticClass:"optionSecond",attrs:{src:t.buttons.second.curr,alt:""},on:{click:function(i){t.clickoptions("second")}}})]),t._v(" "),s("img",{class:{optionjt:!0,optionjtFlag:t.buttons.second.on},attrs:{src:e(91),alt:""}})]),t._v(" "),s("div",[s("div",[s("img",{staticClass:"optionThird",attrs:{src:t.buttons.third.curr,alt:""},on:{click:function(i){t.clickoptions("third")}}})]),t._v(" "),s("img",{class:{optionjt:!0,optionjtFlag:t.buttons.third.on},attrs:{src:e(91),alt:""}})]),t._v(" "),s("div",[s("div",{staticClass:"optionFourth",class:t.openstyle,on:{click:function(i){t.changeisopen()}}},[t._v(t._s(1==t.isopen?"匿名公开":"不公开"))])]),t._v(" "),s("div",[s("button",{class:{"option_five weui-btn weui-btn_mini weui-btn_primary":!0},attrs:{id:"publishBtn"},on:{click:function(i){t.submitMood()}}},[t._v("发布")])])]):t._e(),t._v(" "),t.showPositionList("")?s("div",{class:{"weui-mask":t.maskFlag},staticStyle:{"z-index":"1"},on:{click:function(i){t.hideAction()}}}):t._e(),t._v(" "),t.showPositionList("")?s("div",{class:{"weui-actionsheet":!0,"weui-actionsheet_toggle":t.activeFlag}},[s("div",{staticClass:"weui-actionsheet__menu"},[s("div",{staticClass:"weui-actionsheet__cell",attrs:{id:"btn"},on:{click:function(i){t.getCam()}}},[t._v("拍照")]),t._v(" "),s("div",{staticClass:"weui-actionsheet__cell",on:{click:function(i){t.getPho()}}},[t._v("从手机相册选择")])]),t._v(" "),s("div",{staticClass:"weui-actionsheet__action"},[s("div",{staticClass:"weui-actionsheet__cell",on:{click:function(i){t.hideAction()}}},[t._v("取消")])])]):t._e(),t._v(" "),t.showPositionList("")?s("div",{staticClass:"swiper-container edit_lists",staticStyle:{height:"280px"}},[s("div",{staticClass:"swiper-wrapper"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.buttons.first.on,expression:"buttons.first.on"}],staticClass:"swiper-slidetrue"},[s("div",{staticClass:"optionFrist_box"},[t._l(t.bindpictures,function(i,e){return s("div",{key:e,staticClass:"upload-images"},[i.isloading?s("div",{staticClass:"item"},[s("div",{staticClass:"weui-loading"})]):s("div",{staticClass:"item item-image"},[s("div",{staticClass:"del-img",on:{click:function(i){t.deletePic(e)}}}),t._v(" "),s("img",{attrs:{src:t.smallPic(i.image.path)},on:{click:function(e){t.viewBigPics(i.image.path)}}})])])}),t._v(" "),t.canupload?s("div",{staticClass:"item item-up-btn"},[s("img",{staticClass:"optionAdd",attrs:{src:e(92),alt:""},on:{click:function(i){t.showAction()}}})]):t._e()],2)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.buttons.second.on,expression:"buttons.second.on"}],staticClass:"swiper-slide"},[s("div",{staticClass:"optionSecond_box"},[s("div",{staticClass:"swiper-container exp_box"},[s("div",{staticClass:"swiper-wrapper"},[s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"expLists expage1"},[s("div",t._l(t.getFaceHtml(0,8),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])})),t._v(" "),s("div",t._l(t.getFaceHtml(8,8),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])})),t._v(" "),s("div",[t._l(t.getFaceHtml(16,7),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])}),t._v(" "),t._m(0)],2)])]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"expLists"},[s("div",t._l(t.getFaceHtml(23,8),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])})),t._v(" "),s("div",t._l(t.getFaceHtml(31,8),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])})),t._v(" "),s("div",[t._l(t.getFaceHtml(39,7),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])}),t._v(" "),t._m(1)],2)])]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"expLists"},[s("div",t._l(t.getFaceHtml(46,8),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])})),t._v(" "),s("div",t._l(t.getFaceHtml(54,8),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])})),t._v(" "),s("div",[t._l(t.getFaceHtml(62,7),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])}),t._v(" "),t._m(2)],2)])]),t._v(" "),s("div",{staticClass:"swiper-slide"},[s("div",{staticClass:"expLists"},[s("div",t._l(t.getFaceHtml(69,8),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])})),t._v(" "),s("div",[t._l(t.getFaceHtml(77,7),function(i){return s("div",[s("a",{class:t.getFaceClass(i.id),attrs:{data:t.getFaceText(i.t)}})])}),t._v(" "),t._m(3)],2)])])]),t._v(" "),s("div",{staticClass:"swiper-pagination",attrs:{id:"pagination"}})])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.buttons.third.on,expression:"buttons.third.on"}],staticClass:"swiper-slide"})])]):t._e(),t._v(" "),t.showPositionList("position")?s("div",{staticClass:"positionList_box"},[s("ul",[s("li",{staticClass:"locList",on:{click:function(i){t.selectloc(-2)}}},[s("div",{staticClass:"noShow"},[t._v("不显示位置")]),t._v(" "),s("i",{class:{"weui-icon-success-no-circle":!0,loc_checked:-2==t.location.selecindex}})]),t._v(" "),s("li",{staticClass:"locList",on:{click:function(i){t.selectloc(-1)}}},[s("div",{staticClass:"city"},[t._v(t._s(t.location.city.name))]),t._v(" "),s("i",{class:{"weui-icon-success-no-circle":!0,loc_checked:-1==t.location.selecindex}})]),t._v(" "),t._l(t.location.nearpois,function(i,e){return s("li",{key:e,staticClass:"locList",on:{click:function(i){t.selectloc(e)}}},[s("div",[s("p",{staticClass:"address"},[t._v(t._s(i.name))]),t._v(" "),s("p",{staticClass:"addressDetails"},[t._v(t._s(i.address))])]),t._v(" "),s("i",{class:{"weui-icon-success-no-circle":!0,loc_checked:t.location.selecindex==e}})])})],2)]):t._e()],1)},staticRenderFns:[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("img",{staticClass:"delexp",attrs:{src:e(72)}})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("img",{staticClass:"delexp",attrs:{src:e(72)}})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("img",{staticClass:"delexp",attrs:{src:e(72)}})])},function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("img",{staticClass:"delexp",attrs:{src:e(72)}})])}]}},198:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"funny_box"},[e("ul",{staticClass:"funny_ul"},t._l(t.funnytypes,function(i,s){return e("li",{key:s,class:{funny_active:s==t.activedIndex},on:{click:function(i){t.changeTypes(s)}}},[t._v("\n            "+t._s(i.name)+"\n        ")])})),t._v(" "),e("div",{staticClass:"funny_exp"},t._l(t.funnytypes,function(i,s){return e("div",{key:s,class:{exp_active:s==t.activedIndex}},t._l(i.pictures,function(i){return e("figure",{style:t.setFigureStyle(i.width,i.height,i.path),on:{click:function(e){t.selectGif(i)}}})}))}))])},staticRenderFns:[]}},221:function(t,i,e){var s=e(144);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(2)("130b8cb2",s,!0)},226:function(t,i,e){var s=e(149);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(2)("ea9d3e5e",s,!0)},39:function(t,i,e){e(221);var s=e(1)(e(99),e(192),null,null);t.exports=s.exports},72:function(t,i,e){t.exports=e.p+"del.png"},76:function(t,i,e){"use strict";var s=e(97),n=e.n(s);i.a=new n.a},88:function(t,i){$(function(){!function(t){t.fn.extend({insertContent:function(i,e){var s=t(this)[0];if(document.selection){this.focus();var n=document.selection.createRange();n.text=i,this.focus(),n.moveStart("character",-a);var o=n.text.length;if(2==arguments.length){var a=s.value.length;n.moveEnd("character",o+e),e<=0?n.moveStart("character",o-2*e-i.length):n.moveStart("character",o-e-i.length),n.select()}}else if(s.selectionStart||"0"==s.selectionStart){var c=s.selectionStart,r=s.selectionEnd,d=s.scrollTop;s.value=s.value.substring(0,c)+i+s.value.substring(r,s.value.length),this.focus(),s.selectionStart=c+i.length,s.selectionEnd=c+i.length,s.scrollTop=d,2==arguments.length&&(s.setSelectionRange(c-e,s.selectionEnd+e),this.focus())}else this.value+=i,this.focus()}})}(jQuery)})},91:function(t,i,e){t.exports=e.p+"jt.gif"},92:function(t,i,e){t.exports=e.p+"tjzp.gif"},99:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=e(88),n=(e.n(s),e(175)),o=e.n(n),a=e(76);i.default={data:function(){return{showModule:"",moodid:0,moodcontent:"",contminlength:8,maxchars:140,levelchars:140,cansubmit:!0,moodValue:0,scenesId:0,isopen:1,address:"",showAddress:"点击获取所在位置",pictures:[],funnypicture:[],buttons:{first:{curr:web.IMG_PATH+"zp_nor.png",nor:web.IMG_PATH+"zp_nor.png",pre:web.IMG_PATH+"zp_pre.png",on:!1},second:{curr:web.IMG_PATH+"bq_nor.png",nor:web.IMG_PATH+"bq_nor.png",pre:web.IMG_PATH+"bq_pre.png",on:!1},third:{curr:web.IMG_PATH+"gxtp_nor.png",nor:web.IMG_PATH+"gxtp_nor.png",pre:web.IMG_PATH+"gxtp_pre.png",on:!1}},pictureListForUpload:[],maskFlag:!1,activeFlag:!1,maxPhotoCount:3,uploadpicinfo:{token:"",smallpic:"",middlepic:"",removepicurl:web.BASE_PATH+"api/removepicture",uploadbase64url:web.BASE_PATH+"api/upfilebase64",aliossgeturl:web.BASE_PATH+"aliyunapi/oss_getsetting"},alioss:null,location:{selecindex:-2,city:{},nearpois:[]}}},methods:{getLoc:function(){var t=this;wx.getLocation({type:"gcj02",success:function(i){var e=i.latitude,s=i.longitude;i.speed,i.accuracy;t.showModule="position";var n=new qq.maps.LatLng(e,s);window.geocoder.getAddress(n)},cancel:function(t){alert("用户拒绝授权获取地理位置")}}),console.log("获取经纬度")},listenContent:function(){var t=this.moodcontent.length;t>this.maxchars?(this.moodcontent=this.moodcontent.substring(0,this.maxchars),this.levelchars=0):this.levelchars=this.maxchars-t},clickoptions:function(t){var i=this;for(var e in this.buttons){var s=t==e;i.buttons[e].on=s,i.buttons[e].curr=s?i.buttons[e].pre:i.buttons[e].nor}"first"==t&&0==i.pictures.length&&i.showAction(),"third"==t&&(this.showModule="funny")},changeisopen:function(){var t=this;t.isopen=1-t.isopen},submitMood:function(){var t=this;if(t.cansubmit){var i={moodValue:t.moodValue,scenesId:t.scenesId,isOpen:t.isopen,userId:"_userId_",address:t.address,content:t.moodcontent,pictures:t.getUploadPictureIds(),gifs:t.getFunnyPictureIds()};t.cansubmit=!1;var e="mood/add";t.moodid>0&&(e="mood/append",i.id=t.moodid),console.info(i),t.$http.put(web.API_PATH+e,i).then(function(i){i.data&&1==i.data.status&&t.$router.push({path:"/myCenter/myIndex"})})}},setShowAddress:function(){""==this.address?this.showAddress="不显示地址":this.showAddress=this.address},showAction:function(){this.maskFlag=!0,this.activeFlag=!0},hideAction:function(){this.activeFlag=!1,this.maskFlag=!1},deletePic:function(t){this.pictures=this.pictures.slice(0,t).concat(this.pictures.slice(t+1,this.pictures.length))},smallPic:function(t){return t+xqzs.oss.Size.fill(65,65)},viewBigPics:function(t){var i=[];t+=xqzs.oss.Size.resize(750,750);for(var e=0,s=this.pictures.length;e<s;e++)this.pictures[e].image&&i.push(this.pictures[e].image.path+xqzs.oss.Size.resize(750,750));xqzs.wx.previewImage(t,i)},_showloadingpic:function(t){t="up_loading_"+t,this.pictures.push({isloading:!0,id:t})},_fillloadingpic:function(t,i){t="up_loading_"+t;for(var e=0,s=this.pictures.length;e<s;e++)t==this.pictures[e].id&&(this.pictures[e].isloading=!1,this.pictures[e].image=i)},uploadImage:function(t){var i=this,e="uf_"+(new Date).getTime();xqzs.wx.takePhotos(t,i.maxPhotoCount,i.uploadpicinfo,i.alioss,function(t){for(var s=0;s<t;s++)i._showloadingpic(e+s);i.hideAction()},function(t,s){i._fillloadingpic(e+s,t.data)},function(t){console.info(t)})},getCam:function(){this.uploadImage("camera")},getPho:function(){this.uploadImage("album")},getUploadPictureIds:function(){for(var t=this,i=[],e=0,s=t.pictures.length;e<s;e++)t.pictures[e].image&&i.push(t.pictures[e].image.id);return i},getFunnyPictureIds:function(){for(var t=this,i=[],e=0,s=t.funnypicture.length;e<s;e++)t.funnypicture[e].image&&i.push(t.funnypicture[e].image.id);return i},getaddresscallback:function(t){var i=this,e=t.detail.addressComponents.city,s=t.detail.nearPois;i.location.city={name:e},i.location.nearpois=s},selectloc:function(t){this.location.selecindex=t,this.address=this.getaddress(t),this.setShowAddress(),this.showModule=""},getaddress:function(t){return t<-1?"":t<0?this.location.city.name:this.location.nearpois[t].name},checkInit:function(){var t=this,i=t.$route.query.id;if(void 0!==i&&/^\d+$/.test(i))t.loadMood(i);else if(t.moodValue=t.$route.query.moodValue,t.scenesId=t.$route.query.scenesId,void 0===t.moodValue||!/^\d+$/.test(t.moodValue)||void 0===t.scenesId||!/^\d+$/.test(t.scenesId))return!1;return!0},canedit:function(t){return(null==t.content||""==t.content)&&1!=t.haspicture},loadMood:function(t){var i=this,e=xqzs.weui.loading();this.$http.get(web.API_PATH+"mood/query/detail/"+t).then(function(t){e.remove();if(t.data&&1==t.data.status&&t.data.data){var s=t.data.data;!0,i.canedit(s)&&(i.moodid=s.id,i.moodValue=s.moodValue,i.scenesId=s.scenesId,null!=s.address&&""!=s.address&&(i.address=s.address,i.setShowAddress()))}})},getFaceHtml:function(t,i){return xqzs.face.getFaceData(t,i)},getFaceClass:function(t){return"exp exp"+t},getFaceText:function(t){return"["+t+"]"},showPositionList:function(t){return this.showModule==t}},mounted:function(){var t=this;if(!t.checkInit())return void t.$router.push({path:"/"});a.a.$on("funnyPictureChange",function(i){if(t.showModule="",t.clickoptions("first"),!t.canupload)return void xqzs.weui.toast("fail","最多三张",function(){});t.funnypicture.push({isloading:!1,image:{path:i.path,id:i.id}}),console.info(i)}),this.uploadpicinfo={token:xqzs.string.guid(),smallpic:xqzs.constant.PIC_SMALL,middlepic:xqzs.constant.PIC_MIDDLE,removepicurl:web.BASE_PATH+"api/removepicture",uploadbase64url:web.BASE_PATH+"api/upfilebase64",aliossgeturl:web.BASE_PATH+"api/aliyunapi/oss_getsetting"},this.alioss=new aliyunoss({url:this.uploadpicinfo.aliossgeturl,token:this.uploadpicinfo.token}),$(document).ready(function(){$(".expLists a").click(function(i){if(i.preventDefault(),i.stopPropagation(),t.moodcontent.length<t.maxchars){var e=t.moodcontent;e+=$(this).attr("data"),e.length<=t.maxchars&&(t.moodcontent=e,t.listenContent())}})});new Swiper(".swiper-container",{direction:"horizontal",pagination:".swiper-pagination",observer:!0,observeParents:!0});$(".delexp").click(function(){var t=$("#edit_mood").val(),i=t.substr(0,t.length-1);$("#edit_mood").val(i)}),window.geocoder=new qq.maps.Geocoder({complete:function(i){t.getaddresscallback(i)}})},computed:{moodImage:function(){var t=this.moodValue;return t<10&&(t="0"+t),web.IMG_PATH+"list_mood_"+t+".png"},moodText:function(){return xqzs.mood.moodValueText[this.moodValue]},scenesText:function(){return xqzs.mood.moodScenes[this.scenesId]},canupload:function(){return this.bindpictures.length<this.maxPhotoCount},moodcolorstyle:function(){return this.moodValue>=7?"addEdit1":this.moodValue<=3?"addEdit2":"addEdit3"},openstyle:function(){return 1==this.isopen?"":"green"},bindpictures:function(){return this.pictures.concat(this.funnypicture)}},components:{"v-funny":o.a}}}});
//# sourceMappingURL=3.build.js.map?85fa879c05fea559e852