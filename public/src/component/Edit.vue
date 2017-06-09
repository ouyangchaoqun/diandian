<template id="Edit">
    <div>
        <v-funny></v-funny>
        <div v-if="!showPositionList" class="edit_box">
            <div class="addEdit" :class="moodcolorstyle">
                <img v-bind:src="moodImage">
                <div class="addEdit_right">
                    <div class="addEdit_status">{{moodText}}</div>
                    <div class="addEdit_scene">{{scenesText}}</div>
                </div>
            </div>

            <textarea id="edit_mood" v-model="moodcontent" @input="listenContent" placeholder="这一刻的心情......" maxlength="140"></textarea>
            <div class="edit_loc" @click = "getLoc()">{{showAddress}}<img src="../images/dz_nor.png" alt=""></div>
            <span class="edit_num">{{levelchars}}</span>
        </div>
        <div v-if="!showPositionList" class="edit_option">
            <div>
                <div><img class="optionFrist" @click="clickoptions('first')" v-bind:src="buttons.first.curr" alt=""></div>
                <img v-bind:class="{'optionjt':true,'optionjtFlag':buttons.first.on}" src="../images/jt.gif" alt="" >
            </div>
            <div>
                <div><img class="optionSecond" @click="clickoptions('second')" v-bind:src="buttons.second.curr" alt=""></div>
                <img v-bind:class="{'optionjt':true,'optionjtFlag':buttons.second.on}" src="../images/jt.gif" alt="" >
            </div>
            <div>
                <div><img class="optionThird" @click="clickoptions('third')" v-bind:src="buttons.third.curr" alt=""></div>
                <img v-bind:class="{'optionjt':true,'optionjtFlag':buttons.third.on}" src="../images/jt.gif" alt="" >
            </div>

            <div><div class="optionFourth" :class="openstyle" @click="changeisopen()">{{isopen==1?'匿名公开':'不公开'}}</div></div>
            <div><button @click="submitMood()"
                    v-bind:class="{'option_five weui-btn weui-btn_mini weui-btn_primary':true}" id="publishBtn">发布</button></div>

        </div>
        <div v-if="!showPositionList" :class="{'weui-mask':maskFlag}" @click = "hideAction()" style="z-index: 1"></div>
        <div v-if="!showPositionList" :class="{'weui-actionsheet':true,'weui-actionsheet_toggle':activeFlag}">
            <div class="weui-actionsheet__menu">
                <div class="weui-actionsheet__cell" @click = "getCam()" id="btn">拍照</div>
                <div class="weui-actionsheet__cell" @click = "getPho()">从手机相册选择</div>
            </div>
            <div class="weui-actionsheet__action">
                <div class="weui-actionsheet__cell" @click = "hideAction()">取消</div>
            </div>
        </div>
       <!-- <router-view style="overflow: scroll" v-bind:frmparentpictures="pictureListForUpload"></router-view>-->
        <div v-if="!showPositionList" class="swiper-container edit_lists" style="height:280px;">
            <div class="swiper-wrapper">
                <div class="swiper-slidetrue" v-show="buttons.first.on"><!--optionFrist-->
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
                    </div>
                </div>
                <div class="swiper-slide" v-show="buttons.second.on"><!--optionSecond-->
                    <div class="optionSecond_box">
                        <div class="swiper-container exp_box">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="expLists expage1">
                                        <div>
                                            <div v-for="exp in getFaceHtml(0,8)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                        </div>
                                        <div >
                                            <div v-for="exp in getFaceHtml(8,8)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-for="exp in getFaceHtml(16,7)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                            <div><img src="../images/del.png" class="delexp"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="expLists">
                                        <div>
                                            <div v-for="exp in getFaceHtml(23,8)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-for="exp in getFaceHtml(31,8)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-for="exp in getFaceHtml(39,7)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                            <div><img src="../images/del.png" class="delexp"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="expLists">
                                        <div>
                                            <div v-for="exp in getFaceHtml(46,8)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-for="exp in getFaceHtml(54,8)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-for="exp in getFaceHtml(62,7)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                            <div><img src="../images/del.png" class="delexp"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="expLists">
                                        <div>
                                            <div v-for="exp in getFaceHtml(69,8)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-for="exp in getFaceHtml(77,7)">
                                                <a :class="getFaceClass(exp.id)" :data="getFaceText(exp.t)"></a>
                                            </div>
                                            <div><img src="../images/del.png" class="delexp"/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-pagination" id="pagination"></div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide" v-show="buttons.third.on">
                </div>
            </div>
        </div>
        <!--positionList-->
        <div class="positionList_box" v-if="showPositionList">
            <ul>
                <li class="locList" @click="selectloc(-2)">
                    <div class="noShow">不显示位置</div>
                    <i v-bind:class="{'weui-icon-success-no-circle':true,'loc_checked':location.selecindex==-2}"></i>
                </li>
                <li class="locList" @click="selectloc(-1)">
                    <div class="city">{{location.city.name}}</div>
                    <i v-bind:class="{'weui-icon-success-no-circle':true,'loc_checked':location.selecindex==-1}"></i>
                </li>
                <li class="locList" v-for="(address,index) in location.nearpois" v-bind:key="index" @click="selectloc(index)">
                    <div>
                        <p class="address">{{address.name}}</p>
                        <p class="addressDetails">{{address.address}}</p>
                    </div>
                    <i v-bind:class="{'weui-icon-success-no-circle':true,'loc_checked':location.selecindex==index}"></i>
                </li>
            </ul>
        </div>
        <!--positionList end-->
    </div>
</template>

<script type="es6">
    import insert from "../js/insert";
    import funny from './funny.vue';
    var Edit={
        template:'#Edit'
    };
    export default {
        data() {
            return {
                showPositionList:false,
                moodid:0,
                moodcontent: '',
                contminlength: 8,
                maxchars:140,
                levelchars:140,
                cansubmit: true,
                moodValue:0,
                scenesId:0,
                isopen: 1,
                address: '',
                showAddress:'点击获取所在位置',
                pictures: [],
                pictureids: [] ,
                buttons:{
                    'first':{
                        'curr':web.IMG_PATH+'zp_nor.png',
                        'nor':web.IMG_PATH+'zp_nor.png',
                        'pre':web.IMG_PATH+'zp_pre.png',
                        'on':false
                    },
                    'second':{
                        'curr':web.IMG_PATH+'bq_nor.png',
                        'nor':web.IMG_PATH+'bq_nor.png',
                        'pre':web.IMG_PATH+'bq_pre.png',
                        'on':false
                    },
                    'third':{
                        'curr':web.IMG_PATH+'gxtp_nor.png',
                        'nor':web.IMG_PATH+'gxtp_nor.png',
                        'pre':web.IMG_PATH+'gxtp_pre.png',
                        'on':false
                    }
                },
                pictureListForUpload:[],
                maskFlag: false,     //optionFrist
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
                alioss: null,//optionFrist end
                location:{
                    selecindex:-2,
                    city:{},
                    nearpois:[]
                }
            }
        },
        methods: {
            getLoc: function () {
                let that = this;

                wx.getLocation({
                    type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var speed = res.speed; // 速度，以米/每秒计
                        var accuracy = res.accuracy; // 位置精度

                        that.showPositionList=true;
                        var latLng = new qq.maps.LatLng(latitude, longitude);
                        window['geocoder'].getAddress(latLng);
                    },
                    cancel: function (res) {
                        alert('用户拒绝授权获取地理位置');
                    }
                });
                console.log('获取经纬度')
            },
            listenContent: function () {
                var length = this.moodcontent.length;
                if(length > this.maxchars){
                    this.moodcontent = this.moodcontent.substring(0,this.maxchars);
                    this.levelchars = 0;
                }else{
                    this.levelchars = this.maxchars - length;
                }
            },
            clickoptions:function(indexcode){
                var that = this;
                for(var o in this.buttons) {
                    var ison = indexcode == o;
                    that.buttons[o].on = ison;
                    that.buttons[o].curr = ison ? that.buttons[o].pre : that.buttons[o].nor;
                }
                //
                if(indexcode == 'first'){
                    if(that.pictures.length == 0){
                        that. showAction();
                    }
                }
            },
            changeisopen:function () {
                let that = this;
                that.isopen = 1 - that.isopen;
            },
            submitMood:function () {
                let that = this;
                if(!that.cansubmit){
                    return;
                }
                var postdata = {
                    moodValue:that.moodValue,
                    scenesId:that.scenesId,
                    isOpen: that.isopen,
                    userId: '_userId_',
                    address: that.address,
                    content: that.moodcontent,
                    pictures: that.pictureids
                };
                that.cansubmit = false;
                var apiurl = 'mood/add';
                if(that.moodid > 0 ){
                    apiurl = 'mood/append';
                    postdata['id'] = that.moodid;
                }
                that.$http.put(web.API_PATH + apiurl,postdata)
                    .then(function (bt) {
                    if (bt.data && bt.data.status == 1) {
                        ///myCenter/myIndex
                        that.$router.push({path:'/myCenter/myIndex'});
                    }
                });
            },
            setShowAddress:function () {
                if (this.address == '') {
                    this.showAddress = '不显示地址';
                } else {
                    this.showAddress = this.address;
                }
            },
            //optionFrist
            showAction:function () {
                this.maskFlag = true
                this.activeFlag = true
            },
            hideAction:function () {
                this.activeFlag = false
                this.maskFlag = false
            },
            deletePic:function (i) {
                this.pictures = this.pictures.slice(0, i).concat(this.pictures.slice(i + 1, this.pictures.length));
                this.updatePics();
            },
            smallPic:function (src) {
                return src + xqzs.oss.Size.fill(65,65);
            },
            viewBigPics:function (src) {
                var pics = [];
                src = src + xqzs.oss.Size.resize(750, 750)
                for (var i = 0, l = this.pictures.length; i < l; i++) {
                    if (this.pictures[i].image) {
                        pics.push(this.pictures[i].image.path + xqzs.oss.Size.resize(750, 750));
                    }
                }
                xqzs.wx.previewImage(src, pics)
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
                    that.hideAction();
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
                var picids = [];
                for (var i = 0, l = that.pictures.length; i < l; i++) {
                    if (that.pictures[i].image) {
                        picids.push(that.pictures[i].image.id)
                    }
                }
                that.pictureids = picids;
            },
            //positionList
            getaddresscallback: function (result) {
                var that = this;
                var emptyaddress = '所在位置';

                var city = result.detail.addressComponents.city;
                var nearPois = result.detail.nearPois;

                that.location.city = {name:city};
                that.location.nearpois = nearPois;
            },
            selectloc:function (i) {
                this.location.selecindex = i;
                this.address = this.getaddress(i);
                this.setShowAddress();
                this.showPositionList = false;
            },
            getaddress:function (ix) {
                if(ix < -1)
                    return '';
                else if(ix < 0){
                    return this.location.city.name;
                }else{
                    return this.location.nearpois[ix].name;
                }
            },
            //positionList
            checkInit:function () {
                let that = this;
                var id = that.$route.query.id;
                if(typeof id != 'undefined' && /^\d+$/.test(id)){
                    that.loadMood(id);
                }else{
                    that.moodValue = that.$route.query.moodValue;
                    that.scenesId = that.$route.query.scenesId;
                    if (typeof that.moodValue == 'undefined' || !/^\d+$/.test(that.moodValue)
                        || typeof that.scenesId == 'undefined' || !/^\d+$/.test(that.scenesId)) {
                        return false;
                    }
                }
                return true;
            },
            canedit:function (mood) {
                if ((mood.content == null || mood.content == '')
                    &&(mood.haspicture!=1)) {
                    return true;
                }
                return false;
            },
            loadMood:function (id) {
                var that = this;
                var loading = xqzs.weui.loading();
                //mood/query/detail/{id}
                this.$http.get(web.API_PATH +'mood/query/detail/'+id).then(function (bt) {
                    loading.remove();
                    var flag = false;
                    if( bt.data && bt.data.status == 1 && bt.data.data) {
                        var _mood = bt.data.data;
                        flag=true;
                        if(that.canedit(_mood)){
                            that.moodid = _mood.id;
                            that.moodValue = _mood.moodValue;
                            that.scenesId = _mood.scenesId;
                            if(_mood.address!=null && _mood.address!=''){
                                that.address = _mood.address;
                                that.setShowAddress();
                            }
                        }
                    }
                    if(!flag){
                        //that.$router.push({path:'/'});
                    }
                });
            },
            getFaceHtml:function(start,len) {
                return xqzs.face.getFaceData(start,len);
            },
            getFaceClass:function (id) {
                return 'exp exp'+id;
            },
            getFaceText:function (text) {
                return '['+text+']';
            }
        },
        mounted: function () {
            let that = this;
            if(!that.checkInit()){
                that.$router.push({path:'/'});
                return;
            }
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
            //optionFrist end

            //optionSecond
            $(document).ready(function(){
                $('.expLists a').click(function (event) {
                    //
                    event.preventDefault();
                    event.stopPropagation();
                    if(that.moodcontent.length < that.maxchars){
                        var _newvalue_ = that.moodcontent;
                        var exp = $(this).attr('data');
                        _newvalue_ +=exp;
                        if(_newvalue_.length <= that.maxchars){
                            that.moodcontent = _newvalue_;
                            that.listenContent();
                        }
                    }
                });
            });
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                pagination: '.swiper-pagination',
                observer:true,
                observeParents:true
            });
            $('.delexp').click(function () {
                var oldContent =  $('#edit_mood').val()
                //console.log(oldContent)
                var newContent = oldContent.substr(0,oldContent.length-1)
                //console.log(newContent)
                $('#edit_mood').val(newContent)
            })
            //optionSecond   end
            //positionList
            window['geocoder'] = new qq.maps.Geocoder({
                complete : function(result){
                    that.getaddresscallback(result);
                }
            });
            //positionList  end
        },
        computed:{
            moodImage:function () {
                var v = this.moodValue;
                if (v < 10) {
                    v = '0' + v;
                }
                return web.IMG_PATH + 'list_mood_' + v + '.png';
            },
            moodText:function () {
                return xqzs.mood.moodValueText[this.moodValue];
            },
            scenesText:function () {
                return xqzs.mood.moodScenes[this.scenesId];
            },
            canupload:function () {
                return this.pictures.length < this.maxPhotoCount;
            },
            moodcolorstyle:function () {
                return (this.moodValue >= 7 ? 'addEdit1' : (this.moodValue <= 3 ? 'addEdit2' : 'addEdit3'));
            },
            openstyle:function () {
                return this.isopen==1?'':'green';
            }
        },
        components: {
            "v-funny": funny
        }
    }
</script>
<style>
    .addEdit{
        height:65px;
        margin-bottom:15px;
    }
    .addEdit1{background: #fff5eb;color:#fc6103}
    .addEdit2{background: #f1f1f1;color:#1aac19}
    .addEdit3{background: #e8f7e8;color:#747474}
    .green{color:#008000 !important;border-color:#008000!important}
    #publishBtn{height:30px !important;vertical-align: bottom;}
    .addEdit img{
        width:40px;
        height:40px;
        margin-left: 15px;
        float: left;
        margin-top:12px;
    }
    .addEdit_right{
        float: left;
        margin-left:13px;
        margin-top:6px;
    }
    .addEdit_status{
        font-size: 18px;
        margin-bottom: 2px;
    }
    .addEdit_scene{
        color: #333333;
        font-size: 13px;
    }
    .optionFrist_box{
        position: relative;
        padding-top:20px;
        padding-left:15px;
    }
    .optionFrist_box .optionjt{
        left:1.4rem;
    }
    .optionAdd{
        height: 65px;
        width:65px;
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
    .upload-images{float: left}
    .upload-images .item-image img,.upload-images .item,.item-up-btn{width: 65px;height: 65px;}
    .upload-images .item,.item-up-btn{float: left}
    .upload-images .item{margin-top: 0px;margin-right:20px;}
    /*.item-up-btn{text-align: center;padding-top: 13px;height: 67px}*/
    .weui-loading{width: 30px;height: 30px;margin: 12px 0 0 12px;}
    .upload-images .item-image{position: relative}
    .upload-images .item-image .del-img{position: absolute;right: -10px;top: -10px;width: 20px;height: 20px;background-image: url(../images/close.png);background-size: 20px;}

    .edit_box{
        height:13.470588235294118rem;
        background: #ffffff;
        width: 100%;
        position: relative;
        padding:0 0 1rem 0;
        margin-bottom: 1px;
    }
    #edit_mood{
        height:7.764705882352942rem;
        width: 90%;
        outline: none;
        width:90%;
        resize: none;
        border:0;
        margin: 0 auto;
        display: block;
        color: #999999;
        font-size: 0.8823529411764706rem;
        overflow: hidden;
    }
    .edit_loc{
        min-width: 131px;
        max-width: 181px;
        height: 26px;
        border:1px solid #dcdcdc;
        font-size: 12px;
        color: #949292;
        line-height: 26px;
        position: absolute;
        bottom:0.5882352941176471rem;
        left:0.8823529411764706rem;
        padding-right:10px;
        border-radius: 15px;
        display: block;
        overflow: hidden;
    }
    .edit_loc img{
        float: left;
        display: block;
        width: 14px;
        margin-top: 4px;
        margin-left:10px;
        margin-right:5px;
    }
    .edit_num{
        font-size: 12px;
        color: #999999;
        position: absolute;
        right:0.8823529411764706rem;
        bottom: 0.8823529411764706rem;
    }
    .edit_option{
        height:2.1764705882352944rem;
        background: #ffffff;
        padding-top: 0.8823529411764706rem;
        display: flex;
        padding-left: 0.5882352941176471rem;
    }
    .edit_option div{
        flex-grow: 1;
        position: relative;
    }

    .edit_option img{
        display: block;
        margin: 0 auto;
    }
    .optionFrist{
        width:1.35294118rem;
    }
    .optionSecond{
        width:1.55294118rem;margin-top: -0.2rem !important;
    }
    .optionThird{
        width: 1.35294118rem;
    }
    .optionFourth{
        width:4.11764705882353rem;
        font-size: 12px;
        color: #999999;
        border:1px solid #dcdcdc;
        margin: 0 auto;
        text-align: center;
        height:1.1764705882352942rem;
        line-height: 1.1764705882352942rem;
        border-radius: 8px;
    }
    .option_five{
        margin-top: -0.17647058823529413rem;
        height:1.4705882352941178rem;
        width:3.5294117647058822rem;
        margin-left: 1.1764705882352942rem;
    }
    .edit_option .optionjt{
        position: absolute;
        left:50%;
        margin-left:-0.7058823529411765rem;
        width:1.411764705882353rem;
        bottom:-2px;
        visibility: hidden;
    }
    .edit_option .optionjtFlag{
        visibility: visible;
    }
    /*optionSecond*/
    .test{
        height: 1.5294117647058825rem;width: 1.5294117647058825rem;background-size: cover;display: inline-block;
        vertical-align: middle;
    }


    .optionSecond_box{
        position: relative;
        padding-left: 0.5882352941176471rem;
        padding-right: 0.5882352941176471rem;
        padding-top: 1.1764705882352942rem;
        background: #f5f5f5;
    }
    .optionSecond_box .optionjt{
        left:3.411764705882353rem;
    }
    .expLists div{
        display: flex;
        flex-grow: 1;
        margin-bottom: 0.29411764705882354rem;
    }
    /* .expLists1,.expLists2,.expLists3,.expLists4,.expLists5,.expLists6,.expLists7,.expLists8,.expLists9,.expLists10{
         display: flex;
         margin-bottom: 0.5882352941176471rem;
     }
     .expLists1 div,.expLists2 div, .expLists3 div,.expLists4 div,.expLists5 div,.expLists6 div,.expLists7 div,.expLists8 div,.expLists9 div,.expLists10 div{
         flex-grow: 1;
     }*/
    .delexp{
        height:1.1176470588235294rem;
        margin: 0 auto;
        padding-top: 0.17647058823529413rem;
    }
    .swiper-pagination-bullet{
        background: #d5d5d7;
    }
    .swiper-pagination-bullet-active{
        background:#88888a;
    }
    .exp_box{
        height:8.823529411764707rem;
    }
    #pagination{
        position: absolute;
        bottom:0.5882352941176471rem;
    }
    /*optionSecond end*/

    /*positionList*/
    .positionList_box{
        overflow-y: auto;
    }
    .locList{
        height:50px;
        margin-bottom: 1px;
        background: #ffffff;
        line-height: 50px;
        padding:0 10px;
    }
    .locList div{
        float: left;
    }
    .locList i{
        float: right;
        margin-top:13px;
        display: none;
    }
    .locList .loc_checked{
        display: block;
    }
    .noShow{
        font-size: 14px;
        color: #516591;
    }
    .city{
        font-size: 14px;
        color: #333333;
    }
    .address{
        font-size: 14px;
        color: #333333;
        line-height: 35px;
    }
    .addressDetails{
        font-size: 12px;
        color: #999999;
        line-height: 5px;
    }
    /*positionList end*/

</style>



