webpackJsonp([12],{114:function(t,i,e){i=t.exports=e(0)(),i.push([t.i,".optionFrist_box{position:relative;padding-top:20px;padding-left:15px}.optionFrist_box .optionjt{left:1.4rem}.optionAdd{height:53px;width:53px}.weui-actionsheet__cell{font-size:16px;color:#545454;height:49px;line-height:49px;padding:0}.weui-mask{background:rgba(0,0,0,.4)}",""])},158:function(t,i,e){t.exports=e.p+"tjzp.gif"},166:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("div",{staticClass:"optionFrist_box"},[o("img",{staticClass:"optionAdd",attrs:{src:e(158),alt:""},on:{click:function(i){t.showAction()}}}),t._v(" "),o("div",{class:{"weui-mask":t.maskFlag},on:{click:function(i){t.hideAction()}}}),t._v(" "),o("div",{class:{"weui-actionsheet":!0,"weui-actionsheet_toggle":t.activeFlag}},[o("div",{staticClass:"weui-actionsheet__menu"},[o("div",{staticClass:"weui-actionsheet__cell",attrs:{id:"btn"},on:{click:function(i){t.getCam()}}},[t._v("拍照")]),t._v(" "),o("div",{staticClass:"weui-actionsheet__cell",on:{click:function(i){t.getPho()}}},[t._v("从手机相册选择")])]),t._v(" "),o("div",{staticClass:"weui-actionsheet__action"},[o("div",{staticClass:"weui-actionsheet__cell",on:{click:function(i){t.hideAction()}}},[t._v("取消")])])])])},staticRenderFns:[]}},189:function(t,i,e){var o=e(114);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e(2)("3537a40e",o,!0)},48:function(t,i,e){e(189);var o=e(1)(e(96),e(166),null,null);t.exports=o.exports},96:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});i.default={data:function(){return{maskFlag:!1,activeFlag:!1}},methods:{showAction:function(){this.maskFlag=!0,this.activeFlag=!0},hideAction:function(){this.activeFlag=!1,this.maskFlag=!1},getCam:function(){wx.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["camera"],success:function(t){var i=t.localIds;console.log(i)}})},getPho:function(){wx.chooseImage({count:3,sizeType:["original","compressed"],sourceType:["album"],success:function(t){var i=t.localIds;console.log(i)}})}}}}});
//# sourceMappingURL=12.build.js.map