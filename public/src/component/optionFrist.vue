<template id="optionFrist">
    <div class="optionFrist_box">
        <div v-for="(pic,index) in pictures" v-bind:key="index" class="upload-images">
            <div v-if="pic.isloading" class="item">
                <div class="weui-loading"></div>
            </div>
            <div class="item item-image" v-else>
                <div class="del-img" @click="deletePic(index)"></div>
                <img v-bind:src="smallPic(pic.image.path)" @click="viewBigPics(pic.image.path)"/>
            </div>
        </div>
        <div v-if="canupload" class="item item-up-btn">
            <img class="optionAdd" src="../images/tjzp.gif" alt="" @click="showAction()">
        </div>
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
    import Bus from './bus.js';
    var optionFrist={
        template:'#optionFrist'
    };
    export default {
        props:['fromparentpictures'],
        data() {
            return {
                maskFlag: false,
                activeFlag: false,
                maxPhotoCount: 3,
                uploadpicinfo: {
                    token: '',
                    smallpic: '',
                    middlepic: '',
                    removepicurl: web.BASE_PATH + 'api/removepicture',
                    uploadbase64url: web.BASE_PATH + 'api/upfilebase64',
                    aliossgeturl: web.BASE_PATH + 'aliyunapi/oss_getsetting'
                },
                alioss: null,
                pictures: []
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
            deletePic:function (i) {
                this.pictures.shift(i);
                this.updatePics();
            },
            smallPic:function (src) {
                return src + xqzs.oss.Size.fill(78,78);
            },
            viewBigPics:function (src) {
                var pics = [];
                for (var i = 0, l = this.pictures.length; i < l; i++) {
                    if (this.pictures[i].image) {
                        pics.push(this.pictures[i].image.path+ xqzs.oss.Size.resize(750,750))
                    }
                }
                xqzs.wx.previewImage(src,pics)
            },
            //图片占位
            _showloadingpic:function (id) {
                id = 'up_loading_'+id;
                this.pictures.push({isloading:true,id:id});
            },
            //
            _fillloadingpic:function (id,data) {
                id = 'up_loading_'+id;
                for(var i =0,l=this.pictures.length;i<l;i++) {
                    if (id == this.pictures[i].id) {
                        this.pictures[i].isloading = false;
                        this.pictures[i].image = data;
                    }
                }
                this.updatePics();
            },
            uploadImage:function (sourceType) {
                let that = this;
                var id = 'uf_'+new Date().getTime();
                //
                xqzs.wx.takePhotos(sourceType,that.maxPhotoCount,that.uploadpicinfo,that.alioss,function (filecount) {
                    for(var i=0;i<filecount;i++){
                        that._showloadingpic(id+i);
                    }
                },function (json,ix) {
                    that._fillloadingpic(id+ix,json.data);
                },function (e) {
                    console.info(e);
                })
            },
            getCam:function () {
                this.uploadImage('camera');
            },
            getPho:function () {
                this.uploadImage('album');
            },
            updatePics:function () {
                var that = this;
                var pics = [];
                for (var i = 0, l = that.pictures.length; i < l; i++) {
                    if (that.pictures[i].image) {
                        pics.push(that.pictures[i].image.id)
                    }
                }
                Bus.$emit('picturesChange', pics);
            }
        },
        mounted:function () {
            //optionFrist
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

            this.pictures = this.frmparentpictures || [];
            //optionFrist end
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

    .upload-images{}
    .upload-images .item,.item-up-btn{float: left;width: 78px;height: 78px;margin-right:10px;}
    .upload-images .item{border: solid 1px #ccc;}
    .item-up-btn{text-align: center;padding-top: 13px;height: 67px}
    .weui-loading{width: 40px;height: 40px;margin: 19px 0 0 19px;}
    .upload-images .item-image{position: relative}
    .upload-images .item-image .del-img{position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        height: 20px;
        background-image: url(../images/writer_icon_fork.png);
        background-size: 20px;}
    .upload-images .item-image image{width: 78px;height: 78px;}
</style>



