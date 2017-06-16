/**
 * Created by pc on 2017/5/27.
 */
document.body.addEventListener('touchstart', function () { //...空函数即可ios active问题
});

document.body.addEventListener('touchmove', function (event) {
    event.preventDefault();
});
var xqzs = {
    constant:{
        PIC_SMALL:'?x-oss-process=image/resize,h_640,w_640/quality,q_100/auto-orient,0',
        PIC_MIDDLE:'?x-oss-process=image/resize,h_750,w_750/quality,q_100/auto-orient,0'
    },

    weui: {
        removeWhenPageChange:function () {
            $(".weui-mask").remove();
            $("#toast").remove();
            $(".js_dialog").remove();
            $(".actionSheet_wrap").remove();

        },
        toast: function (type, msg, fun) {
            var html = "";
            html += '<div id="toast"><div class="weui-mask_transparent"></div><div class="weui-toast">';
            if (type === "success") {
                html += '<i class="weui-icon-success-no-circle weui-icon_toast"></i>';
            }
            if (type === "fail") {
                html += '<i class="weui-icon-safe-warn weui-icon_toast" style="    font-size: 40px;"></i>';
            }

            html += '<p class="weui-toast_content">' + msg + '</p></div></div>';
            $("body").append(html);
            setTimeout(function () {
                $("#toast").animate({opacity: 0}, 200, function () {
                    $("#toast").remove();
                    fun();
                });
            }, 800);
        },
        loading:function () {
            var id = '_weui_loading_'+new Date().getTime();
            var html = '<div id="'+id+'"><div class="weui-mask"><div style="text-align: center;padding-top:100px;"><div class="weui-loading"></div></div></div></div>';
            $("body").append(html);
            return $('#'+id);
        },
        dialog: function (title, msg, cancelFun, submitFun) {
            if(arguments.length == 1 && typeof arguments[0] == 'object'){
                return this._dialog(arguments[0]);
            }
            if (title === "") title = "提示";
            var html = "";
            html += '<div class="js_dialog"  >';
            html += '   <div class="weui-mask"></div>';
            html += '   <div class="weui-dialog">';
            html += '   <div class="weui-dialog__hd"><strong class="weui-dialog__title">' + title + '</strong></div>';
            html += '   <div class="weui-dialog__bd">' + msg + '</div>';
            html += ' <div class="weui-dialog__ft">';
            html += '    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default cancel">取消</a>';
            html += '   <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary submit">确定</a>';
            html += '   </div>';
            html += '   </div>';
            html += '   </div>';
            $("body").append(html);
            $(".js_dialog .cancel").click(function () {
                $(".js_dialog").animate({opacity: 0}, 200, function () {
                    $(".js_dialog").remove();
                    cancelFun();
                });
            });
            $(".js_dialog .submit").click(function () {
                submitFun();
                $(".js_dialog").animate({opacity: 0}, 200, function () {
                    $(".js_dialog").remove();
                });
            })
        },
        _dialog: function (config) {
            var defaultsize = {
                title: '提示',
                msg:'',
                submitText:'确定',
                submitFun:function () {},
                cancelText:'取消',
                cancelFun:function () {}
            };
            config = $.extend(defaultsize,config);
            var html = "";
            html += '<div class="js_dialog"  >';
            html += '   <div class="weui-mask"></div>';
            html += '   <div class="weui-dialog">';
            html += '   <div class="weui-dialog__hd"><strong class="weui-dialog__title">' + config.title + '</strong></div>';
            html += '   <div class="weui-dialog__bd">' + config.msg + '</div>';
            html += ' <div class="weui-dialog__ft">';
            html += '    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default cancel">'+config.cancelText+'</a>';
            html += '   <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary submit">'+config.submitText+'</a>';
            html += '   </div>';
            html += '   </div>';
            html += '   </div>';
            $("body").append(html);
            $(".js_dialog .cancel").click(function () {
                $(".js_dialog").animate({opacity: 0}, 200, function () {
                    $(".js_dialog").remove();
                    config.cancelFun();
                });
            });
            $(".js_dialog .submit").click(function () {
                config.submitFun();
                $(".js_dialog").animate({opacity: 0}, 200, function () {
                    $(".js_dialog").remove();
                });
            })
        },
        actionSheet: function (tip, actionName, doFun, cancelFun) {
            var html = "";
            html += '<div class="actionSheet_wrap">';
            html += '   <div class="weui-mask cancel active"   ></div>';

            if (xqzs.isIos()) {
                html += '    <div class="weui-actionsheet " id="weui-actionsheet" >';
                html += '    <div class="weui-actionsheet__menu">';
                html += '      <div class="weui-actionsheet__title weui-actionsheet__title-text">' + tip + '</div>';
                html += '      <div class="weui-actionsheet__cell doAction">' + actionName + '</div>';
                html += '    </div>';
                html += '     <div class="weui-actionsheet__action">';
                html += '       <div class="weui-actionsheet__cell  cancel">取消</div>';
                html += '     </div>';
                html += '   </div>';
            }

            if (xqzs.isAndroid()) {
                html += '   <div class="weui-skin_android"   >';
                html += '   <div class="weui-mask cancel active" ></div>';
                html += '   <div class="weui-actionsheet">';
                html += '      <div class="weui-actionsheet__menu">';
                html += '        <div class="weui-actionsheet__cell doAction">' + actionName + '</div>';
                html += '      </div>';
                html += '   </div>';
                html += '   </div>';
            }

            html += '   </div>';
            $("body").append(html);
            setTimeout(function () {
                $(".actionSheet_wrap .weui-actionsheet").addClass(" weui-actionsheet_toggle");
            }, 10)


            $(".actionSheet_wrap .cancel").click(function () {
                $(".actionSheet_wrap .weui-actionsheet").removeClass(" weui-actionsheet_toggle");
                $(".actionSheet_wrap").delay(100).animate({opacity: 0}, 200, function () {
                    $(".actionSheet_wrap").remove();
                    cancelFun();
                });
            });
            $(".actionSheet_wrap .doAction").click(function () {
                doFun();
                $(".actionSheet_wrap .weui-actionsheet").removeClass(" weui-actionsheet_toggle");
                $(".actionSheet_wrap").delay(100).animate({opacity: 0}, 200, function () {
                    $(".actionSheet_wrap").remove();
                });

            })


        }
    },

    dateTime: {
        DATE_TIME: "date_time",
        TIME: "time",
        DATE_PATH: "date_path",
        _format: function (type, time) {
            time = time * 1000;
            var now = new Date(time);
            var year = now.getFullYear();
            var month = now.getMonth() + 1;
            var date = now.getDate();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            if (month < 10) month = "0" + month;
            if (date < 10) date = "0" + date;
            if (hour < 10) hour = "0" + hour;
            if (minute < 10) minute = "0" + minute;
            if (second < 10) second = "0" + second;
            if (type === this.DATE_TIME) {
                return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
            } else if (type === this.TIME) {
                return hour + ":" + minute;
            } else if (type === this.DATE_PATH) {
                return year + "/" + month + "/" + date
            }
        },
        formatTime: function (time) {
            return this._format(this.TIME, time);
        },
        formatDateTime: function (time) {
            return this._format(this.DATE_TIME, time);
        },
        getTimeStamp: function (dateTime) {
            var _timestamp=new Date().getTime();
            if (dateTime) {
                _timestamp = Date.parse(dateTime);
            }
            _timestamp = parseInt(_timestamp / 1000) ;
            return _timestamp;


        }


    },


    /**
     * 是否可以将base64转成blob对象
     * @param dataurl
     * @returns {*}
     */
    dataURLtoBlob: function (dataurl) {
        try {
            var arr = dataurl.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], {
                type: mime
            });
        } catch (e) {
            return false;
        }
    },
    localdb: {
        storage: window.localStorage,
        set: function (key, value) {
            this.storage.setItem(key, value);
        },
        get: function (key) {
            return this.storage.getItem(key);
        },
        remove: function (key) {
            this.storage.removeItem(key);
        },
        clear: function () {
            this.storage.clear();
        }
    },
    resizepicture: function (img, size) {
        var defaultsize = {w: 10, h: 10};
        $.extend(defaultsize, size);
        var imgcss = {};
        var _w = img.data('w') || 1, _h = img.data('h') || 1;
        if (_w * size.h > _h * size.w) {
            var $w = _w * size.h / _h;
            var marginleft = 0;
            if ($w > size.w) {
                marginleft = (size.w - $w) / 2;
            }
            imgcss = {'height': size.h + 'px', 'margin-left': marginleft + 'px', 'width': 'auto'};
        } else {
            var $h = _h * size.w / _w;
            var margintop = 0;
            if ($h > size.h) {
                margintop = (size.h - $h) / 2;
            }
            imgcss = {'width': size.w + 'px', 'margin-top': margintop + 'px', 'height': 'auto'};
        }
        img.css(imgcss);
    },

    mood: {
        canEditTime:20*60,//可以编辑的时间限制
        canRevokeTime:3*60,//可以撤回时间
        moodValueText: ["", "超级不开心",//1
            "很不开心",//2
            "不开心",//3
            "郁闷",//4
            "一般",//5
            "小开心",//6
            "开心",//7
            "很开心",//8
            "超级开心",//9
            "超级开心"//10
        ],
        moodScenes:[
'','学习教育','工作事业','经济','健康','家庭','恋爱婚姻','休闲娱乐','人际关系','天气','生活','运动','其他'
        ],
        moodScenesList:[
            {value:1,src:'study.png',haspic:true,text:'学习教育'},
            {value:2,src:'work.png',haspic:true,text:'工作事业'},
            {value:3,src:'economics.png',haspic:true,text:'经济'},
            {value:4,src:'healthy.png',haspic:true,text:'健康'},
            {value:5,src:'home.png',haspic:true,text:'家庭'},
            {value:6,src:'love.png',haspic:true,text:'恋爱婚姻'},
            {value:7,src:'arder.png',haspic:true,text:'娱乐休闲'},
            {value:8,src:'interpersonal.png',haspic:true,text:'人际关系'},
            {value:9,src:'weather.png',haspic:true,text:'天气'},
            {value:10,src:'life.png',haspic:true,text:'生活'},
            {value:11,src:'sport.png',haspic:true,text:'运动'},
            {value:12,src:'other.png',haspic:true,text:'其他'}
        ],
        /**
         * 是否可以编辑
         * @param mood
         * @returns {boolean}
         */
        canEdit:function (mood) {
            var currTime = xqzs.dateTime.getTimeStamp();
            return currTime - mood.addTime <= this.canEditTime && (mood.content=='' || mood.content==null) && mood.haspicture!=1;
        },
        canClear:function (mood) {
            return (mood.content!='' && mood.content!=null) || mood.haspicture==1;
        },
        canRevoke:function (mood) {
            var currTime = xqzs.dateTime.getTimeStamp();
            return currTime - mood.addTime <= this.canRevokeTime && !this.canClear(mood);
        },
        getTopImg: function () {
            return web.IMG_PATH + "top_img/" + xqzs.dateTime._format(xqzs.dateTime.DATE_PATH, xqzs.dateTime.getTimeStamp()) + ".jpg";
        },
        getCjImg:function (scenesid) {
            for(var i=0,l=this.moodScenesList.length;i<l;i++) {
                if (this.moodScenesList[i].value == scenesid) {
                    return {
                        src:web.IMG_PATH+ this.moodScenesList[i].src,
                        text:this.moodScenesList[i].text
                    };
                }
            }
            return {
                src:'',
                text:''
            }
        },
        setMoodValueStyle:function (mood) {
            mood.moodValueStyle = mood.moodValue <5 ?'unhappy_txt_color' :'happy_txt_color';
        },
        initMoodsData: function (data, timeType,userId) {
            for (var i = 0; i < data.length; i++) {
                data[i].moodValueUrl = web.IMG_PATH + "list_mood_0" + data[i].moodValue + ".png";
                if (!timeType)
                    data[i].formatAddTime = xqzs.dateTime.formatTime(data[i].addTime);
                data[i].link = "#/friendCenter?friendId=" + data[i].userId;
                data[i].hide = false;
                data[i].moodValueText = this.moodValueText[data[i].moodValue];
                this.setMoodValueStyle(data[i]);
                if (data[i].haspicture) {
                    if (data[i].pics !== undefined) {
                        for (var j = 0; j < data[i].pics.length; j++) {
                            data[i].pics[j].smallUrl = data[i].pics[j].picpath + "?x-oss-process=image/resize,h_640,w_640/quality,q_100/auto-orient,0";
                            data[i].pics[j].bigUrl = data[i].pics[j].picpath + "?x-oss-process=image/resize,h_750,w_750/quality,q_100/auto-orient,0";

                        }
                    }

                }


                data[i].hide = false;

                data[i].scense = xqzs.mood.getCjImg(data[i].scenesId);

                //随机头像
                if(data[i].faceIndex!==null)
                data[i].randomFaceUrl= web.IMG_PATH+"anonymous_face/"+data[i].faceIndex +".jpg";

                //心抱抱逻辑
                if(data[i].caremy!==undefined){
                    data[i].isCare= null;
                    if( data[i].caremy!==null  && data[i].caremy!==undefined&& data[i].caremy!=="" )
                    {
                        data[i].isCare=true;
                    }
                }


                if (data[i].isCare!==undefined && parseInt(userId) !== parseInt(data[i].userId)) {
                    if (data[i].moodValue >= 5 && data[i].isCare === null) {
                        data[i].careImg = web.IMG_PATH + "mood_icon_dianz_nor.png";
                    } else if (data[i].moodValue < 5 && data[i].isCare === null) {
                        data[i].careImg = web.IMG_PATH + "mood_icon_baob_nor.png";
                    } else if (data[i].moodValue >= 5 && data[i].isCare !== null) {
                        data[i].careImg = web.IMG_PATH + "mood_icon_dianz_pre.png";
                    } else if (data[i].moodValue < 5 && data[i].isCare !== null) {
                        data[i].careImg = web.IMG_PATH + "mood_icon_baob_pre.png";
                    }
                } else {

                    if (data[i].moodValue >= 5 && data[i].careCount == 0) {
                        data[i].careImg = web.IMG_PATH + "mood_icon_dianz_nor.png";
                    } else if (data[i].moodValue < 5 && data[i].careCount == 0) {
                        data[i].careImg = web.IMG_PATH + "mood_icon_baob_nor.png";
                    } else if (data[i].moodValue >= 5 && data[i].careCount != 0) {
                        data[i].careImg = web.IMG_PATH + "mood_icon_dianz_pre.png";
                    } else if (data[i].moodValue < 5 && data[i].careCount != 0) {
                        data[i].careImg = web.IMG_PATH + "mood_icon_baob_pre.png";
                    }
                }

                //评论emoji
                if(data[i].replies && data[i].replies.length>0){
                    for(var ri=0,rl=data[i].replies.length;ri<rl;ri++){
                        data[i].replies[ri].content = xqzs.face.parseEmoji(data[i].replies[ri].content);
                    }
                }

            }
            return data;
        },
        actionSheetEdit: function (cancelText, sendText, doFun, cancelFun, placeholder) {
            if($("#action_sheet_edit")&& $("#action_sheet_edit").hasClass("action-sheet-edit") ){
               return ;
            } ;
            var html = '<div class="action-sheet-edit" id="action_sheet_edit">';
            html += '   <div class="weui-mask cancel active"   ></div>';
            html += ' <div class="comment_box">';
            /*html += '  <div class="comment_header">';*/
           /* html += '  <span class="cancel">' + cancelText + '</span>';*/
            html += '  <span class="release">' + sendText + '</span>';
           /* html += '  </div>';*/
            html += '  <div contenteditable="true" class="comment_text"></div>';
            html += '  </div>';
            html += '  </div>';

            $("body").append(html);
            
            $(".comment_text").focus().keyup(function () {
                var val = $(this).text();
               /* console.log(val)*/
                if(val.length>0){
                    $(".action-sheet-edit .release").css({'color':"#1aad19",'borderColor':"#1aad19"})
                    $(".comment_p").css('display','none')
                }else{
                    $(".action-sheet-edit .release").css({"color":"rgba(0, 0, 0, 0.2)",'borderColor':"rgba(0, 0, 0, 0.2)"})
                    $(".comment_p").css('display','block')
                }
            })
            setTimeout(function () {
                $(".comment_box").removeClass('subactive').addClass("addactive");
            }, 10);


            $(".action-sheet-edit .cancel").click(function () {
                $(".comment_box").removeClass('addactive').addClass("subactive");
                $(".action-sheet-edit").delay(100).animate({opacity: 0}, 200, function () {
                    $(".action-sheet-edit").remove();
                    cancelFun();
                });
            });
            $(".comment_box .release").click(function () {
                var v = $(".comment_text").val();
                if (v !== "") {
                    doFun(v);
                }
                $(".comment_box").removeClass('addactive').addClass("subactive");
                $(".action-sheet-edit").delay(100).animate({opacity: 0}, 200, function () {
                    $(".action-sheet-edit").remove();
                });

            })


        },
        removeTempPicture: function (dom, $uploadpicinfo) {
            if (dom.length == 0) {
                return;
            }
            var id = dom.find('input[name=moodpicture]').val();
            dom.remove();
            if (id) {
                $.ajax({
                    url: $uploadpicinfo.removepicurl,
                    type: 'POST',
                    data: {token: $uploadpicinfo.token, id: id},
                    dataType: 'JSON',
                    success: function (json) {
                    }
                });
            }
        },
        wxface:function (faceurl) {
            if(faceurl && faceurl!=null && faceurl!=''){
                return faceurl.replace(/\/0$/i, '/132');
            }
            return faceurl;
        }
    },
    friendmood: {
        lastkey: 'friendlastmoodid',
        getlast: function () {
            return xqzs.localdb.get(this.lastkey) || '';
        },
        setlast: function (moodid) {
            var last = this.getlast();
            var tosave = true;
            if (last != '' && /\d+/.test(last)) {
                last = parseFloat(last);
                if (last >= moodid) {
                    tosave = false;
                }
            }
            if (tosave) {
                xqzs.localdb.set(this.lastkey, moodid);
            }
        }

    },
    wx: {
        takePhotos: function (sourceType, maxCount, $uploadpicinfo, $alioss, beforeUploadFun, finishUploadFun, errorFun) { //拍照

            if (typeof(sourceType) === "string") {
                sourceType = [sourceType];
            }
            wx.chooseImage({  //拍照获取图片
                count: maxCount, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: sourceType, // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    beforeUploadFun(localIds.length);
                    for (var i = 0; i < localIds.length; i++) {
                        (function (ix, mylocalIds) {
                            var currLocalId = mylocalIds[ix];
                            wx.getLocalImgData({  // 拿到本地图片
                                localId: currLocalId, // 图片的localID
                                success: function (res) {
                                    var localData = res.localData; // localData是图片的base64数据，可以用img标签显示
                                    if (localData.indexOf(";base64,") > 0) {
                                        localData.replace('jgp', 'jpeg');
                                    } else {
                                        localData = "data:image/jpeg;base64," + localData;
                                    }
                                    xqzs.oss.uploadPicture($uploadpicinfo, $alioss, {base64: localData}, finishUploadFun, errorFun, ix);
                                }
                            });
                        }(i, localIds))
                    }
                }
            });
        },
        /**
         * 图片查看
         * @param currentimg string
         * @param imglist array
         */
        previewImage: function (currentimg, imglist) {
            wx.previewImage({
                current: currentimg, // 当前显示图片的http链接
                urls: imglist // 需要预览的图片http链接列表
            });
        }
    },
    oss: {
        Size: {
            fill: function (width, height) {
                return '?x-oss-process=image/resize,m_fill,h_' + width + ',w_' + height + '/quality,q_100/auto-orient,0';
            },
            resize:function (width, height) {
                return '?x-oss-process=image/resize,h_' + width + ',w_' + height + '/quality,q_100/auto-orient,0';
            }
        },
        /**
         *
         * @param $uploadpicinfo
         * @param $alioss
         * @param rst lrz压缩过的base64编码
         * @param callback
         * @param error
         */
        uploadPicture: function ($uploadpicinfo, $alioss, rst, callback, error, ix) {
            if (typeof ix == 'undefined') {
                ix = 0;
            }
            var that = this;
            var blob = xqzs.dataURLtoBlob(rst.base64);

            if (blob == false) {
                that._uploadBase64($uploadpicinfo, rst, callback, error, ix);
            } else {
                that._uploadOss($alioss, blob, callback, function () {
                    //直传失败
                    that._uploadBase64($uploadpicinfo, rst, callback, error, ix);
                }, ix);
            }
        },
        /**
         * 上传base64编码
         */
        _uploadBase64: function ($uploadpicinfo, rst, callback, error) {

            error();
            return;
            var postdata = {img: rst.base64, token: $uploadpicinfo.token};
            $.ajax({
                url: $uploadpicinfo.uploadbase64url,
                type: 'POST',
                data: postdata,
                dataType: 'json',
                error: function (data, status, e) {
                    if (typeof error == 'function') {
                        error(e);
                    }
                },
                success: function (json) {
                    callback(json);
                }
            })
        },
        /**
         * 直传OSS
         */
        _uploadOss: function ($alioss, blobobj, callback, error, ix) {
            //附加参数
            var postdata = new FormData();
            $alioss.formdataappend(postdata, function () {
                postdata.append('file', blobobj);
                var oss_host = $alioss.host;
                if (oss_host.indexOf('http://') < 0 && oss_host.indexOf('https://') < 0) {
                    oss_host = 'http://' + $alioss.host;
                }
                $.ajax({
                    url: oss_host,
                    type: 'POST',
                    cache: false,
                    data: postdata,
                    processData: false,
                    contentType: false,
                    dataType: 'JSON',
                    success: function (json) {
                        callback(json, ix);
                    },
                    error: function (data, status, e) {
                        if (typeof error == 'function') {
                            error(e, ix);
                        }
                    }
                });
            });
        }


    },
    version: {
        key: function (tp) {
            return '__v_show' + '_' + tp;
        },
        isshow: function (type) {
            var _ = xqzs.localdb.get(this.key(type)) || '';
            return _ == '';
        },
        showed: function (type) {
            xqzs.localdb.set(this.key(type), 'yes');
        }
    },
    isAndroid: function () {
        return navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端
    },
    isIos: function () {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    },
    toDecimal: function (x) {
        var f = parseFloat(x);
        if (isNaN(f)) {
            return;
        }
        f = Math.round(x * 100) / 100;
        return f;
    },
    string:{
        //封装验证手机号码
        checkUserPhoneReg:function() {
            var regExpP = /^1[34578]\d{9}$/; //手机号

            if (regExpP.test($('.input_phone').val())) { //test检测$('#user_phone').val()是否符合regExp格式
                //$('#err-lgU').html('√ 检测通过').css('color', 'green');
                return true;
            }
            return false;
        },
        guid:function (glue) {
            glue = glue||''
            var guid = "";
            for (var i = 1; i <= 32; i++){
                var n = Math.floor(Math.random()*16.0).toString(16);
                guid +=   n;
                if((i==8)||(i==12)||(i==16)||(i==20))
                    guid += glue;
            }
            return guid;
        }
    },
};

function myResizePicture(listObj,imgListStr,containerStr) {
    if(!listObj){
        listObj=   $('.myMood_list')
    }
    if(!imgListStr){
        imgListStr=  "moodPhotoLists";
    }
    if(!containerStr){
        containerStr="div";
    }

    var maxsize = 750;
    $.each(listObj, function (index, obj) {

        var imgList = $(obj).find('.'+imgListStr)

        var n = imgList.children().length;
        if (n == 1) {
            imgList.addClass('one');
        } else if (n == 2) {
            imgList.addClass('two');
        }

        if (n > 0) {
            //
            var container = imgList.find(''+containerStr+':eq(0)');
            var images = imgList.find('img');
            var containersize = {
                w: container.width(),
                h: container.height()
            }


            images.each(function () {
                if($(this).data('type') && $(this).data('type')=='notresize' ){
                    return false;
                }
                //var spliter = 'x';
                //$p = $(this).parent('a').data('size').split(spliter);
                //var iw = parseInt($p[0],10), ih = parseInt($p[1],10);
                var iw = parseInt($(this).data('w'), 10), ih = parseInt($(this).data('h'), 10);


                if (iw > maxsize && ih > maxsize) {
                    if (iw > ih) {
                        iw = parseInt(iw * maxsize / ih, 10);
                        ih = maxsize;
                    }
                    else {
                        ih = parseInt(ih * maxsize / iw, 10);
                        iw = maxsize;
                    }
                    //$(this).parent('a').data('size',iw+spliter+ih);
                }
                var imgstyle = {};
                if (iw * containersize.h > ih * containersize.w) {
                    var $w = iw * containersize.h / ih;
                    var marginleft = 0;
                    if ($w > containersize.w) {
                        marginleft = (containersize.w - $w) / 2;
                    }
                    // imgstyle =
                    //     'height:'+ containersize.h + 'px;margin-left:'+ marginleft + 'px;width:auto'
                    // ;
                    imgstyle = {"height": containersize.h + 'px', "margin-left": marginleft + 'px', 'width': 'auto'};
                } else {
                    var $h = ih * containersize.w / iw;
                    var margintop = 0;
                    if ($h > containersize.h) {
                        margintop = (containersize.h - $h) / 2;
                    }
                    //imgstyle = 'width: '+ containersize.w + 'px;margin-top:'+ margintop + 'px;height:auto';
                    imgstyle = {"width": containersize.w + 'px', "margin-top": margintop + 'px', 'height': 'auto'};
                }

                $(this).css(imgstyle)

            })
        }
    })
}


;(function () {
    var aliyunoss = function (config) {
        this.accessid = '';
        this.accesskey = '';
        this.host = '';
        this.policyBase64 = '';
        this.signature = '';
        this.callbackbody = '';
        this.filename = '';
        this.key = '';
        this.expire = 0;
        this.g_object_name = '';
        this.g_object_name_type = '';
        this.now = 0;
        this.issynctime = false;
        this.serverurl = config.url;
        this.token = config.token || this.randomid();
    }
    aliyunoss.prototype = {
        send_request: function (callback, config) {
            var that = this;
            $.ajax({
                url: that.serverurl,
                type: config.type || 'POST',
                data: {token: that.token},
                dataType: config.dataType || '',
                success: function (data) {
                    callback(data);
                }
            });
        },
        get_signature: function (callback) {
            //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
            if (this.expire < this.now + 3) {
                var that = this;
                that.cleartimer();
                that.send_request(function (data) {
                    //var body = this.send_request();
                    if (data && data.status == 1) {
                        var obj = data.data;
                        that.host = obj['host'];
                        that.policyBase64 = obj['policy'];
                        that.accessid = obj['accessid'];
                        that.signature = obj['signature'];
                        that.now = parseInt(obj['now']);
                        that.expire = parseInt(obj['expire']);
                        that.callbackbody = obj['callback'];
                        that.key = obj['dir'];
                        that.synctime();
                    }
                    callback();
                }, {
                    type: 'post',
                    dataType: 'JSON'
                });
            } else {
                callback();
            }
        },
        cleartimer: function () {
            var that = this;
            if (typeof that.intervaler != 'undefined') {
                clearInterval(that.intervaler);
            }
        },
        synctime: function () {
            var that = this;
            that.intervaler = setInterval(function () {
                that.now += 1;
            }, 1000);
        },
        randomid: function () {
            var len = 32;
            var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
            var maxPos = chars.length;
            var randomid = '';
            for (i = 0; i < len; i++) {
                randomid += chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return randomid;
        },
        //附加参数
        formdataappend: function (postdata, callback) {
            var that = this;
            that.get_signature(function () {
                postdata.append('key', that.key + that.randomid() + '.jpg');
                postdata.append('policy', that.policyBase64);
                postdata.append('OSSAccessKeyId', that.accessid);
                postdata.append('callback', that.callbackbody);
                postdata.append('signature', that.signature);
                postdata.append('token', that.token);

                callback();
            });
        }
    }
    window['aliyunoss'] = aliyunoss;
}());
