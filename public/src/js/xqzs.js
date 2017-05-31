/**
 * Created by pc on 2017/5/27.
 */

var xqzs = {
    weui: {
        toast:function (type,msg,fun) {
            var html  ="";
            html+= '<div id="toast"><div class="weui-mask_transparent"></div><div class="weui-toast">';
            if(type==="success"){
                html+= '<i class="weui-icon-success-no-circle weui-icon_toast"></i>';
            }
            html+=  '<p class="weui-toast_content">'+msg+'</p></div></div>';
            $("body").append(html);
            setTimeout(function () {
                $("#toast").animate({opacity:0},200,function () {
                    $("#toast").remove();
                    fun();
                });
            },800);

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
    }
};



