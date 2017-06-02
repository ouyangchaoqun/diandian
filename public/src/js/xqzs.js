/**
 * Created by pc on 2017/5/27.
 */

var xqzs = {
    weui: {
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
        dialog: function (title, msg, cancelFun, submitFun) {

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
            var timestamp = Date.parse(new Date());
            if (dateTime) {
                timestamp = Date.parse(dateTime);
            }
            timestamp = timestamp / 1000;
            return timestamp;


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

        moodValueText: ["", "超级不开心",//1
            "很不开心",//2
            "不开心",//2
            "郁闷",//4
            "一般",//5
            "小开心",//6
            "开心",//7
            "很开心",//8
            "超级开心",//9
            "超级开心"//10
        ],
        getTopImg: function () {
            return web.IMG_PATH + "top_img/" + xqzs.dateTime._format(xqzs.dateTime.DATE_PATH, xqzs.dateTime.getTimeStamp()) + ".jpg";
        },
        initMoodsData: function (data, timeType) {
            for (var i = 0; i < data.length; i++) {
                data[i].moodValueUrl = web.IMG_PATH + "list_mood_0" + data[i].moodValue + ".png";
                if (!timeType)
                    data[i].formatAddTime = xqzs.dateTime.formatTime(data[i].addTime);
                data[i].link = "#/myCenter/friendIndex?friendId=" + data[i].id;
                data[i].hide = false;
                data[i].moodValueText = this.moodValueText[data[i].moodValue];
                data[i].editLink = "/myCenter/myIndex/Edit?id=" + data[i].id;
                if (data[i].haspicture) {
                    if (data[i].pics !== undefined) {
                        for (var j = 0; j < data[i].pics.length; j++) {
                            data[i].pics[j].smallUrl = data[i].pics[j].picpath + "?x-oss-process=image/resize,h_640,w_640/quality,q_100";
                            data[i].pics[j].bigUrl = data[i].pics[j].picpath + "?x-oss-process=image/resize,h_750,w_750/quality,q_100";

                        }
                    }

                }

                //心抱抱逻辑
                if (data[i].isCare !== undefined) {
                    if (data[i].moodValue >= 5 && data[i].isCare === null) {
                        data[i].careImg = web.IMG_PATH + "list_dianz_nor.png";
                    } else if (data[i].moodValue < 5 && data[i].isCare === null) {
                        data[i].careImg = web.IMG_PATH + "list_baob_nor.png";
                    } else if (data[i].moodValue >= 5 && data[i].isCare !== null) {
                        data[i].careImg = web.IMG_PATH + "list_dianz_pre.png";
                    } else if (data[i].moodValue < 5 && data[i].isCare !== null) {
                        data[i].careImg = web.IMG_PATH + "list_baob_pre.png";
                    }
                } else {
                    if (data[i].moodValue >= 5 && data[i].careCount === 0) {
                        data[i].careImg = web.IMG_PATH + "list_dianz_nor.png";
                    } else if (data[i].moodValue < 5 && data[i].careCount === 0) {
                        data[i].careImg = web.IMG_PATH + "list_baob_nor.png";
                    } else if (data[i].moodValue >= 5 && data[i].careCount !== 0) {
                        data[i].careImg = web.IMG_PATH + "list_dianz_pre.png";
                    } else if (data[i].moodValue < 5 && data[i].careCount !== 0) {
                        data[i].careImg = web.IMG_PATH + "list_baob_pre.png";
                    }
                }


            }
            return data;
        },
        actionSheetEdit: function (cancelText, sendText, doFun, cancelFun, placeholder) {
            var html = '<div class="action-sheet-edit">';
            html += '   <div class="weui-mask cancel active"   ></div>';
            html += ' <div class="comment_box">';
            html += '  <div class="comment_header">';
            html += '  <span class="cancel">' + cancelText + '</span>';
            html += '  <span class="release">' + sendText + '</span>';
            html += '  </div>';
            html += '  <textarea placeholder="' + placeholder + '" class="comment_text"></textarea>';
            html += '  </div>';
            html += '  </div>';

            $("body").append(html);
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
        }
    },
    friendmood: {
        lastkey: 'friendlastmoodid',
        getlast: function () {
            return $.xqzs.localdb.get(this.lastkey) || '';
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
                $.xqzs.localdb.set(this.lastkey, moodid);
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
                                    $.xqzs.oss.uploadPicture($uploadpicinfo, $alioss, {base64: localData}, finishUploadFun, errorFun, ix);
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
            var blob = $.xqzs.dataURLtoBlob(rst.base64);

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
            var _ = $.xqzs.localdb.get(this.key(type)) || '';
            return _ == '';
        },
        showed: function (type) {
            $.xqzs.localdb.set(this.key(type), 'yes');
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
    }

};

function myResizePicture() {
    var maxsize = 750;
    $.each($('.myMood_list'), function (index, obj) {

        var imgList = $(obj).find('.moodPhotoLists')

        var n = imgList.children().length;
        if (n == 1) {
            imgList.addClass('one');
        } else if (n == 2) {
            imgList.addClass('two');
        }

        if (n > 0) {
            //
            var container = imgList.find('div:eq(0)');
            var images = imgList.find('img');
            var containersize = {
                w: container.width(),
                h: container.height()
            }


            images.each(function () {
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

