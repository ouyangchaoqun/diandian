<template id="Edit">
    <div>
        <div class="edit_box" v-if="!hide">
            <textarea id="edit_mood" v-model="moodcontent" @input="listenContent" placeholder="这一刻的心情......（8个字以上）" maxlength="140"></textarea>
            <div class="edit_loc" @click = "getLoc()">{{showAddress}}<img src="../images/dz_nor.png" alt=""></div>
            <span class="edit_num">{{levelchars}}</span>
        </div>
        <div class="edit_option" v-if="!hide">
            <div>
                <router-link to="/myCenter/myIndex/Edit/optionFrist"><img class="optionFrist" @click="clickoptions('first')" v-bind:src="buttons.first.curr" alt=""></router-link>
                <img v-bind:class="{'optionjt':true,'optionjtFlag':buttons.first.on}" src="../images/jt.gif" alt="" >
            </div>
            <div>
                <router-link to="/myCenter/myIndex/Edit/optionSecond"><img class="optionSecond" @click="clickoptions('second')" v-bind:src="buttons.second.curr" alt="" style="margin-top: -0.3rem"></router-link>
                <img v-bind:class="{'optionjt':true,'optionjtFlag':buttons.second.on}" src="../images/jt.gif" alt="" >
            </div>
            <div>
                <router-link to="/myCenter/myIndex/Edit/optionThird"><img class="optionThird" @click="clickoptions('third')" v-bind:src="buttons.third.curr" alt=""></router-link>
                <img v-bind:class="{'optionjt':true,'optionjtFlag':buttons.third.on}" src="../images/jt.gif" alt="" >
            </div>

            <div><div class="optionFourth" @click="changeisopen()">{{isopen==1?'匿名公开':'不公开'}}</div></div>
            <div><button @click="submitMood()"
                    v-bind:class="{'option_five weui-btn weui-btn_mini weui-btn_primary':true,'weui-btn_disabled':!cansubmit}"
                    v-bind:disabled="!cansubmit" id="publishBtn">发布</button></div>

        </div>

        <router-view style="overflow: scroll"></router-view>

    </div>
</template>

<script type="es6">
    import Bus from './bus.js';
    var Edit={
        template:'#Edit'
    };
    export default {
        data() {
            return {
                moodcontent: '',
                contminlength: 8,
                maxchars:140,
                levelchars:140,
                cansubmit: false,
                moodid: 0,
                isopen: 1,
                address: '',
                showAddress:'点击获取所在位置',
                pictures: [],
                hide:false,
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
                }
            }
        },
        methods: {
            getLoc: function () {
                let that = this;
                var longitude = 120.15507;
                var latitude = 30.274085;
                that.$router.push({path:'/positionList?latitude='+latitude+'&longitude='+longitude});
                that.hide = true;
                return;

                wx.getLocation({
                    type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
                    success: function (res) {
                        var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                        var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                        var speed = res.speed; // 速度，以米/每秒计
                        var accuracy = res.accuracy; // 位置精度

                        that.$router.push({path:'/positionList',params:{latitude:latitude,longitude:longitude}});
                        console.log(latitude, longitude)
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
                    id: that.moodid,
                    isOpen: that.isopen,
                    userId: '_userId_',
                    address: that.address,
                    content: that.moodcontent,
                    pictures: that.pictures
                };
                that.cansubmit = false;
                that.$http({
                    method: 'POST',
                    type: "json",
                    url: web.API_PATH + 'mood/append',
                    data: postdata
                }).then(function (bt) {
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
            }
        },
        mounted: function () {
            let that = this;
            that.moodid = that.$route.query.id;
//            if(typeof that.moodid == 'undefined' || !/\d+/.test(that.moodid)){
//                that.$router.push({path:'/positionList'});
//                return;
//            }

            Bus.$on('selectaddress', address => {
                that.address = address;
                that.setShowAddress();
                that.hide = false;
            });

            Bus.$on('moodContentChange',newcontent=>{
                that.moodcontent = newcontent;
                that.listenContent();
            });
        }
    }
</script>
<style>

    .edit_box{
        height:11.470588235294118rem;
        background: #ffffff;
        width: 100%;
        position: relative;
        padding:1.6rem 0 1rem 0;
        margin-bottom: 1px;
    }
    #edit_mood{
        height:9.764705882352942rem;
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




</style>



