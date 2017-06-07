<template id="optionFrist">
    <div class="optionFrist_box">
        <div v-for="pic in pictures" class="upload-images">
            <div v-if="pic.isloading" class="item">
                <div class="weui-loading"></div>
            </div>
            <div v-else class="item">
                <img src="{{pic.image.path}}"/>
            </div>
        </div>
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
                        this.pictures[i].content = '放置图片';
                        this.pictures[i].image = data;
                    }
                }
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
                var pics = [];
                for (var i = 0, l = this.pictures.length; i < l; i++) {
                    if (this.pictures[i].image) {
                        pics.push(this.pictures[i].image.id)
                    }
                }
                Bus.$emit('picturesChange', pics)
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
    .upload-images{}
    .upload-images .item{float: left;width: 80px;height: 80px;}
</style>



