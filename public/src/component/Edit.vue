<template id="Edit">
    <div>
        <div v-if="!showPositionList" class="edit_box">
            <div class="addEdit">
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
                <div><img class="optionSecond" @click="clickoptions('second')" v-bind:src="buttons.second.curr" alt="" style="margin-top: -0.3rem"></div>
                <img v-bind:class="{'optionjt':true,'optionjtFlag':buttons.second.on}" src="../images/jt.gif" alt="" >
            </div>
            <div>
                <div><img class="optionThird" @click="clickoptions('third')" v-bind:src="buttons.third.curr" alt=""></div>
                <img v-bind:class="{'optionjt':true,'optionjtFlag':buttons.third.on}" src="../images/jt.gif" alt="" >
            </div>

            <div><div class="optionFourth" @click="changeisopen()">{{isopen==1?'匿名公开':'不公开'}}</div></div>
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
                <div class="swiper-slide"><!--optionFrist-->
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
                <div class="swiper-slide"><!--optionSecond-->
                    <div class="optionSecond_box">
                        <div class="swiper-container exp_box">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <div class="expLists expage1">
                                        <div>
                                            <div><a class="exp1" data="[微笑]"></a></div>
                                            <div><a class="exp2" data="[撇嘴]"></a></div>
                                            <div><a class="exp3" data="[色]"   ></a></div>
                                            <div><a class="exp4" data="[发呆]" ></a></div>
                                            <div><a class="exp5" data="[得意]" ></a></div>
                                            <div><a class="exp6" data="[流泪]" ></a></div>
                                            <div><a class="exp7" data="[害羞]" ></a></div>
                                            <div><a class="exp8" data="[闭嘴]" ></a></div>
                                        </div>
                                        <div >
                                            <div><a class="exp9" data="[睡]" ></a></div>
                                            <div><a class="exp10" data="[大哭]"></a></div>
                                            <div><a class="exp11" data="[尴尬]"></a></div>
                                            <div><a class="exp12" data="[发怒]"></a></div>
                                            <div><a class="exp13" data="[调皮]" ></a></div>
                                            <div><a class="exp14" data="[呲牙]" ></a></div>
                                            <div><a class="exp15" data="[惊讶]" ></a></div>
                                            <div><a class="exp16" data="[难过]" ></a></div>
                                        </div>
                                        <div>
                                            <div><a class="exp17" data="[囧]" ></a></div>
                                            <div><a class="exp18" data="[抓狂]" ></a></div>
                                            <div><a class="exp19" data="[吐]" ></a></div>
                                            <div><a class="exp20" data="[偷笑]" ></a></div>
                                            <div><a class="exp21" data="[愉快]" ></a></div>
                                            <div><a class="exp22" data="[白眼]" ></a></div>
                                            <div><a class="exp23" data="[傲慢]" ></a></div>
                                            <div><img src="../images/del.png" class="delexp"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="expLists">
                                        <div>
                                            <div><a class="exp24" data="[困]" ></a></div>
                                            <div><a class="exp25" data="[惊恐]" ></a></div>
                                            <div><a class="exp26" data="[流汗]" ></a></div>
                                            <div><a class="exp27" data="[憨笑]" ></a></div>
                                            <div><a class="exp28" data="[悠闲]" ></a></div>
                                            <div><a class="exp29" data="[奋斗]" ></a></div>
                                            <div><a class="exp30" data="[咒骂]" ></a></div>
                                            <div><a class="exp31" data="[疑问]" ></a></div>
                                        </div>
                                        <div>
                                            <div><a class="exp32" data="[嘘]" ></a></div>
                                            <div><a class="exp33" data="[晕]" ></a></div>
                                            <div><a class="exp34" data="[衰]" ></a></div>
                                            <div><a class="exp35" data="[骷髅]" ></a></div>
                                            <div><a class="exp36" data="[敲打]" ></a></div>
                                            <div><a class="exp37" data="[再见]" ></a></div>
                                            <div><a class="exp38" data="[擦汗]" ></a></div>
                                            <div><a class="exp39" data="[抠鼻]" ></a></div>
                                        </div>
                                        <div>

                                            <div><a class="exp40" data="[鼓掌]" ></a></div>
                                            <div><a class="exp41" data="[坏笑]" ></a></div>
                                            <div><a class="exp42" data="[左哼哼]" ></a></div>
                                            <div><a class="exp43" data="[右哼哼]" ></a></div>
                                            <div><a class="exp44" data="[哈欠]" ></a></div>
                                            <div><a class="exp45" data="[鄙视]" ></a></div>
                                            <div><a class="exp46" data="[委屈]" ></a></div>
                                            <div><img src="../images/del.png" class="delexp"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="expLists">
                                        <div>
                                            <div><a class="exp47" data="[快哭了]" ></a></div>
                                            <div><a class="exp48" data="[阴险]" ></a></div>
                                            <div><a class="exp49" data="[亲亲]" ></a></div>
                                            <div><a class="exp50" data="[可怜]" ></a></div>
                                            <div><a class="exp51" data="[菜刀]" ></a></div>
                                            <div><a class="exp52" data="[西瓜]" ></a></div>
                                            <div><a class="exp53" data="[啤酒]" ></a></div>
                                            <div><a class="exp54" data="[咖啡]" ></a></div>
                                        </div>
                                        <div>
                                            <div><a class="exp55" data="[猪头]" ></a></div>
                                            <div><a class="exp56" data="[玫瑰]" ></a></div>
                                            <div><a class="exp57" data="[凋谢]" ></a></div>
                                            <div><a class="exp58" data="[嘴唇]" ></a></div>
                                            <div><a class="exp59" data="[爱心]" ></a></div>
                                            <div><a class="exp60" data="[心碎]" ></a></div>
                                            <div><a class="exp61" data="[蛋糕]" ></a></div>
                                            <div><a class="exp62" data="[炸弹]" ></a></div>
                                        </div>
                                        <div>
                                            <div><a class="exp63" data="[便便]" ></a></div>
                                            <div><a class="exp64" data="[月亮]" ></a></div>
                                            <div><a class="exp65" data="[太阳]" ></a></div>
                                            <div><a class="exp66" data="[拥抱]" ></a></div>
                                            <div><a class="exp67" data="[强]" ></a></div>
                                            <div><a class="exp68" data="[弱]" ></a></div>
                                            <div><a class="exp69" data="[握手]" ></a></div>
                                            <div><img src="../images/del.png" class="delexp"/></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-slide">
                                    <div class="expLists">
                                        <div>
                                            <div><a class="exp70" data="[胜利]" ></a></div>
                                            <div><a class="exp71" data="[抱拳]" ></a></div>
                                            <div><a class="exp72" data="[勾引]" ></a></div>
                                            <div><a class="exp73" data="[拳头]" ></a></div>
                                            <div><a class="exp74" data="[OK]" ></a></div>
                                            <div><a class="exp75" data="[跳跳]" ></a></div>
                                            <div><a class="exp76" data="[发抖]" ></a></div>
                                            <div><a class="exp77" data="[怄火]" ></a></div>

                                        </div>
                                        <div>
                                            <div><a class="exp78" data="[转圈]" ></a></div>
                                            <div><a class="exp79" data="[嘿哈]" ></a></div>
                                            <div><a class="exp80" data="[捂脸]" ></a></div>
                                            <div><a class="exp81" data="[奸笑]" ></a></div>
                                            <div><a class="exp82" data="[机智]" ></a></div>
                                            <div><a class="exp83" data="[皱眉]" ></a></div>
                                            <div><a class="exp84" data="[耶]" ></a></div>
                                            <div><img src="../images/del.png" class="delexp"/></div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="swiper-pagination" id="pagination"></div>
                        </div>
                    </div>

                </div>
                <div class="swiper-slide">
                    搞笑图片
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
    import insert from "../js/insert"
    var Edit={
        template:'#Edit'
    };
    export default {
        data() {
            return {
                showPositionList:false,
                moodcontent: '',
                contminlength: 8,
                maxchars:140,
                levelchars:140,
                cansubmit: false,
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
                        'on':false,
                    },
                    'second':{
                        'curr':web.IMG_PATH+'bq_nor.png',
                        'nor':web.IMG_PATH+'bq_nor.png',
                        'pre':web.IMG_PATH+'bq_pre.png',
                        'on':false,
                    },
                    'third':{
                        'curr':web.IMG_PATH+'gxtp_nor.png',
                        'nor':web.IMG_PATH+'gxtp_nor.png',
                        'pre':web.IMG_PATH+'gxtp_pre.png',
                        'on':false,
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
                this.cansubmit = this.moodcontent.length >= this.contminlength;
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
            },
            changeisopen:function () {
                let that = this;
                that.isopen = 1 - that.isopen;
            },
            submitMood:function () {
                let that = this;
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
                that.$http.put(web.API_PATH + 'mood/add',postdata)
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
                that.moodValue = that.$route.query.moodValue;
                that.scenesId = that.$route.query.scenesId;
                if (typeof that.moodValue == 'undefined' || !/\d+/.test(that.moodValue)
                    || typeof that.scenesId == 'undefined' || !/\d+/.test(that.scenesId)) {
                    return false;
                }
                return true;
            }
        },
        mounted: function () {
            let that = this;
            if(!that.checkInit()){
                that.$router.push({path:'/'});
                return;
            }
            //

            var tabsSwiper = new Swiper('.edit_lists',{
                speed:500
            });
            $(".edit_option div").on('mousedown',function(){
                tabsSwiper.slideTo($(this).index());
            });

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

            //optionSecond
            let max = 140;
            $(document).ready(function(){
                $('.expLists a').click(function (event) {

                    if($('#edit_mood').val().length<140){
                        event.preventDefault();
                        event.stopPropagation();
                        var exp = $(this).attr('data')
                        $("#edit_mood").insertContent(exp);

                        $('.edit_num').text(max-$('#edit_mood').val().length);

                        that.moodcontent = $('#edit_mood').val();
                        that.listenContent();
                    }
                });
            });
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                pagination: '.swiper-pagination'
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
        width:1.1764705882352942rem;
    }
    .optionSecond{
        width:1.411764705882353rem;
    }
    .optionThird{
        width: 1.352941176470588rem;
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
    .expLists a{
        height:1.5294117647058825rem;
        width:1.5294117647058825rem;
        display: block;
        background-position: 0 0;
        margin: 0 auto;
        background-image:url("../images/exp.png");
        background-size: cover;
    }

    .expLists .exp2{
        background-position: 0 -1.5882352941176472rem;
    }
    .expLists .exp3{
        background-position: 0 -3.1764705882352944rem;
    }
    .expLists .exp4{
        background-position: 0 -4.823529411764706rem;
    }
    .expLists .exp5{
        background-position: 0 -6.411764705882353rem;
    }
    .expLists .exp6{
        background-position: 0 -8rem;
    }
    .expLists .exp7{
        background-position: 0 -9.647058823529411rem;
    }
    .expLists .exp8{
        background-position: 0 -11.176470588235295rem;
    }
    .expLists .exp9{
        background-position: 0 -12.823529411764707rem;
    }

    .expLists .exp10{
        background-position: 0 -14.411764705882353rem;
    }
    .expLists .exp11{
        background-position: 0 -16rem;
    }
    .expLists .exp12{
        background-position: 0 -17.588235294117645rem;
    }
    .expLists .exp13{
        background-position: 0 -19.176470588235297rem;
    }
    .expLists .exp14{
        background-position: 0 -20.823529411764707rem;
    }
    .expLists .exp15{
        background-position: 0 -22.47058823529412rem;
    }
    .expLists .exp16{
        background-position: 0 -24.058823529411764rem;
    }
    .expLists .exp17{
        background-position: 0 -25.647058823529413rem;
    }
    .expLists .exp18{
        background-position: 0 -27.235294117647058rem;
    }
    .expLists .exp19{
        background-position: 0 -28.764705882352942rem;
    }
    .expLists .exp20{
        background-position: 0 -30.411764705882355rem;
    }
    .expLists .exp21{
        background-position: 0 -32rem;
    }
    .expLists .exp22{
        background-position: 0 -33.64705882352941rem;
    }
    .expLists .exp23{
        background-position: 0 -35.23529411764706rem;
    }
    .expLists .exp24{
        background-position: 0 -36.82352941176471rem;
    }
    .expLists .exp25{
        background-position: 0 -38.47058823529412rem;
    }
    .expLists .exp26{
        background-position: 0 -39.94117647058824rem;
    }
    .expLists .exp27{
        background-position: 0 -41.58823529411765rem;
    }
    .expLists .exp28{
        background-position: 0 -43.23529411764706rem;
    }
    .expLists .exp29{
        background-position: 0 -44.88235294117647rem;
    }
    .expLists .exp30{
        background-position: 0 -46.470588235294116rem;
    }
    .expLists .exp31{
        background-position: 0 -48.05882352941177rem;
    }
    .expLists .exp32{
        background-position: 0 -49.70588235294118rem;
    }
    .expLists .exp33{
        background-position: 0 -51.294117647058826rem;
    }
    .expLists .exp34{
        background-position: 0 -52.88235294117648rem;
    }
    .expLists .exp35{
        background-position: 0 -54.529411764705884rem;
    }
    .expLists .exp36{
        background-position: 0 -56.117647058823536rem;
    }
    .expLists .exp37{
        background-position: 0 -57.64705882352941rem;
    }
    .expLists .exp38{
        background-position: 0 -59.235294117647065rem;
    }
    .expLists .exp39{
        background-position: 0 -60.88235294117647rem;
    }
    .expLists .exp40{
        background-position: 0 -62.47058823529412rem;
    }
    .expLists .exp41{
        background-position: 0 -64.05882352941177rem;
    }
    .expLists .exp42{
        background-position: 0 -65.6470588235294rem;
    }
    .expLists .exp43{
        background-position: 0 -67.23529411764706rem;
    }
    .expLists .exp44{
        background-position: 0 -68.82352941176471rem;
    }
    .expLists .exp45{
        background-position: 0 -70.52941176470588rem;
    }
    .expLists .exp46{
        background-position: 0 -72.05882352941177rem;
    }
    .expLists .exp47{
        background-position: 0 -73.52941176470588rem;
    }
    .expLists .exp48{
        background-position: 0 -75.05882352941177rem;
    }
    .expLists .exp49{
        background-position: 0 -76.64705882352942rem;
    }
    .expLists .exp50{
        background-position: 0 -78.1764705882353rem;
    }
    .expLists .exp51{
        background-position: 0 -79.76470588235294rem;
    }
    .expLists .exp52{
        background-position: 0 -81.29411764705883rem;
    }
    .expLists .exp53{
        background-position: 0 -82.82352941176471rem;
    }
    .expLists .exp54{
        background-position: 0 -84.29411764705883rem;
    }
    .expLists .exp55{
        background-position: 0 -85.82352941176471rem;
    }
    .expLists .exp56{
        background-position: 0 -87.41176470588235rem;
    }
    .expLists .exp57{
        background-position: 0 -89.00000000000001rem;
    }
    .expLists .exp58{
        background-position: 0 -90.47058823529413rem;
    }
    .expLists .exp59{
        background-position: 0 -92.05882352941177rem;
    }
    .expLists .exp60{
        background-position: 0 -93.6470588235294rem;
    }
    .expLists .exp61{
        background-position: 0 -95.23529411764706rem;
    }
    .expLists .exp62{
        background-position: 0 -96.64705882352942rem;
    }
    .expLists .exp63{
        background-position: 0 -98.23529411764706rem;
    }
    .expLists .exp64{
        background-position: 0 -99.64705882352942rem;
    }
    .expLists .exp65{
        background-position: 0 -101.17647058823529rem;
    }
    .expLists .exp66{
        background-position: 0 -102.70588235294117rem;
    }
    .expLists .exp67{
        background-position: 0 -104.23529411764706rem;
    }
    .expLists .exp68{
        background-position: 0 -105.70588235294117rem;
    }
    .expLists .exp69{
        background-position: 0 -107.3529411764706rem;
    }
    .expLists .exp70{
        background-position: 0 -108.82352941176471rem;
    }
    .expLists .exp71{
        background-position: 0 -110.29411764705883rem;
    }
    .expLists .exp72{
        background-position: 0 -111.76470588235294rem;
    }
    .expLists .exp73{
        background-position: 0 -113.29411764705883rem;
    }
    .expLists .exp74{
        background-position: 0 -114.94117647058825rem;
    }
    .expLists .exp75{
        background-position: 0 -116.3529411764706rem;
    }
    .expLists .exp76{
        background-position: 0 -117.88235294117648rem;
    }
    .expLists .exp77{
        background-position: 0 -119.41176470588236rem;
    }
    .expLists .exp78{
        background-position: 0 -120.94117647058823rem;
    }
    .expLists .exp79{
        background-position: 0 -122.64705882352942rem;
    }
    .expLists .exp80{
        background-position: 0 -124.17647058823529rem;
    }
    .expLists .exp81{
        background-position: 0 -125.6470588235294rem;
    }
    .expLists .exp82{
        background-position: 0 -127.23529411764707rem;
    }
    .expLists .exp83{
        background-position: 0 -128.8235294117647rem;
    }
    .expLists .exp84{
        background-position: 0 -130.35294117647058rem;
    }
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



