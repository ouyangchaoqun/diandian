<template id="optionFrist">
    <div class="optionFrist_box">
        <div v-for="pic in pictures"><div id="{{pic.id}}" class="{{pic.class}}">{{pic.text}}</div></div>
        <img v-if="canupload" class="optionAdd" src="../images/tjzp.gif" alt="" @click="showAction()">
        <div :class="{'weui-mask':maskFlag}" @click = "hideAction()"></div>
        <div :class="{'weui-actionsheet':true,'weui-actionsheet_toggle':activeFlag}">
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell" @click = "getCam()" id="btn">拍照</div>
                <div class="weui-actionsheet__cell" @click = "getPho()">从手机相册选择</div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" @click = "hideAction()">取消</div>
            </div>
        </div>


    </div>
</template>

<script type="text/javascript">

    var optionFrist={
        template:'#optionFrist'
    };
    export default {
        data() {
            return {
                maskFlag:false,
                activeFlag:false,
                maxPhotoCount:3,
                uploadpicinfo: {
                    token:'',
                    smallpic:'',
                    middlepic:'',
                    removepicurl:web.BASE_PATH + 'api/removepicture',
                    uploadbase64url:web.BASE_PATH + 'api/upfilebase64',
                    aliossgeturl:web.BASE_PATH+'aliyunapi/oss_getsetting'
                },
                alioss: null,
                pictures:[]
            }
        },
        methods:{
            showAction:function () {
                this.maskFlag = true
                this.activeFlag = true
            },
            hideAction:function () {
                this.activeFlag = false
                this.maskFlag = false
            },
            //图片占位
            _showloadingpic:function (containersize,id) {
                id = 'up_loading_'+id;
                this.pictures.push({content:'loading',class:'loading',id:id});
            },
            //
            _fillloadingpic:function (id,content) {
                id = 'up_loading_'+id;
                for(var i =0,l=this.pictures.length;i<l;i++){
                    if( id == this.pictures[i].id ){
                        this.pictures[i].class = '';
                        this.pictures[i].content = '放置图片';
                    }
                }
            },

            //删掉
            _picUpRemoveLoading:function (isshow,containersize,content,id) {
                var classname = 'up-loading';
                id = 'up_loading_'+id;



                if(isshow){
                    var loadingpics = $('.imglist li.up-loading').length;
                    var loadedpics = $('.imglist input[name=moodpicture]').length;
                    var currentpics = loadingpics + loadedpics;
                    //style="height:'+containersize.h+'px;width:'+containersize.w+'px;"
                    var loadsize = 50;
                    var loadingdiv = '<li class="'+classname+'" id="'+id+'"><div class="weui-loading" style="height:'+loadsize+'px;width:'
                        +loadsize+'px;margin-top:'+(containersize.h-loadsize)/2+'px;margin-left:'+(containersize.w-loadsize)/2+'px"></div></li>';
                    $('.imglist li.upfile').before(loadingdiv);
                    currentpics++;
                    if (currentpics < maxfilecount) {
                    } else {
                        $('.imglist li.upfile').hide();
                    }
                }else{
                    if(typeof content !='undefined'){
                        $('.imglist li#'+id).removeClass(classname).html(content);
                        $('.imglist li#'+id).find('.del-img').unbind('click').bind('click',function () {
                            $.xqzs.mood.removeTempPicture($(this).parent().parent(),uploadpicinfo);
                            //
                            var count =  getallowuploadcount();
                            if(count>0) {
                                $('.imglist li.upfile').show();
                            }
                        })
                    }else{
                        $('.imglist li#'+id).remove();
                    }
                }
            },
            format_show_upload_pic:function(containersize,data) {
                var imgstyle = '';
                if (data.width > data.height) {
                    $w = data.width * containersize.h / data.height;
                    imgstyle = 'height:' + containersize.h + 'px;margin-left:' + ((containersize.w - $w) / 2) + 'px;width:auto';
                } else if (data.width < data.height) {
                    $h = data.height * containersize.w / data.width;
                    imgstyle = 'width:' + containersize.w + 'px;margin-top:' + ((containersize.h - $h) / 2) + 'px;height:auto';
                } else {
                    imgstyle = 'width:' + containersize.w + 'px;height:' + containersize.h + 'px';
                }
                var size = (data.width > data.height) ? ' height="100%" ' : ' width="100%" ';

                var appendhtml = '<div style="height:' + containersize.h + 'px" class="img-priview"><div class="del-img"></div><img class="upload-view" style="'
                    + imgstyle + '" src="' + data.path + uploadpicinfo.smallpic + '" data-bigsrc="' + data.path + uploadpicinfo.middlepic
                    + '" /><input type="hidden" name="moodpicture" value="' + data.id + '" /></div>';
                return appendhtml;
            },
            bind_image_slides_priview:function () {
                $('.imglist img').unbind('click').bind('click',function () {
                    var current = $(this).data('bigsrc');
                    var $data = [];
                    $('img',$('.imglist')).each(function () {
                        $data.push($(this).data('bigsrc'));
                    });
                    xqzs.wx.previewImage(current,$data);
                    // weui.galleryslide.init($data,{autoSwipe:false,index:index});
                });
            },
            uploadImage:function (sourceType) {
                let that = this;
                var id = 'uf_'+new Date().getTime();
                var containersize = {
                    w: $('.imglist').data('width'),
                    h: $('.imglist').data('height')
                };
                //
                console.info(that.uploadpicinfo);
                console.info(that.alioss);
                xqzs.wx.takePhotos(sourceType,that.maxPhotoCount,that.uploadpicinfo,that.alioss,function (filecount) {
                    for(var i=0;i<filecount;i++){
                        that._showloadingpic(containersize,id+i);
                    }
                },function (json,ix) {
                    var appendhtml = that.format_show_upload_pic(containersize,json.data);
                    that._fillloadingpic(id+ix,appendhtml);
                    //
                    that.bind_image_slides_priview();

                },function (e) {
                    console.info(e);
                })
            },
            getCam:function () {
                this.uploadImage('camera');
            },
            getPho:function () {
                this.uploadImage('album');
            }
        },
        mounted:function () {
            this.uploadpicinfo = {
                token: xqzs.string.guid(),
                smallpic: xqzs.constant.PIC_SMALL,
                middlepic: xqzs.constant.PIC_MIDDLE,
                removepicurl: web.BASE_PATH + 'api/removepicture',
                uploadbase64url: web.BASE_PATH + 'api/upfilebase64',
                aliossgeturl: web.BASE_PATH + 'api/aliyunapi/oss_getsetting'
            };
            this.alioss = new aliyunoss({
                url:this.uploadpicinfo.aliossgeturl,
                token:this.uploadpicinfo.token
            });
        },
        computed:{
            canupload:function () {
                return this.pictures.length < this.maxPhotoCount;
            }
        }
    }

</script>
<style>
    .optionFrist_box{
        position: relative;
        padding-top:20px;
        padding-left:15px;
    }
    .optionFrist_box .optionjt{
        left:1.4rem;
    }
    .optionAdd{
        height: 53px;
        width:53px;

    }
    .weui-actionsheet__cell{
        font-size: 16px;
        color: #545454;
        height: 49px;
        line-height: 49px;
        padding:0;
    }
    .weui-mask{
        background: rgba(0,0,0,0.4);
    }
</style>



