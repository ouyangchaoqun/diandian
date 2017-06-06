<template id="Edit">
    <div>
        <div class="edit_box" v-if="!hide">
            <textarea id="edit_mood" v-model="moodcontent" @input="listenContent" placeholder="这一刻的心情......（8个字以上）" maxlength="140"></textarea>
            <div class="edit_loc" @click = "getLoc()">{{address}}<img src="../images/dz_nor.png" alt=""></div>
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
                    userId: '[userId]',
                    address: that.address,
                    content: that.moodcontent,
                    pictures: that.pictures
                };
                console.info(postdata);
                return;
                that.$http({
                    method: 'PUT',
                    type: "json",
                    url: web.API_PATH + 'mood/append',
                    data: postdata
                }).then(function (bt) {
                    if (bt.data && bt.data.status == 1) {
                    }
                });
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
                that.hide = false;
                $('.edit_loc').html(that.showAddress);
            });

            Bus.$on('moodContentChange',newcontent=>{
                that.moodcontent = newcontent;
                that.listenContent();
            });
        },
        computed:{
            showAddress:function () {
                return this.address+'  asdasdsa';
                return this.address==''?'点击获取所在位置':this.address;
            }
        }
    }




</script>
<style>
.edit_box{
    height:19.5rem;
    background: #ffffff;
    width: 100%;
    position: relative;
    padding:1.6rem 0 1rem 0;
    margin-bottom: 1px;
}
#edit_mood{
    height:16.6rem;
    width: 90%;
    outline: none;
    width:90%;
    resize: none;
    border:0;
    margin: 0 auto;
    display: block;
    color: #999999;
    font-size: 1.5rem;
    overflow: hidden;
}
    .edit_loc{
        width: 131px;
        height: 26px;
        border:1px solid #dcdcdc;
        font-size: 12px;
        color: #949292;
        line-height: 26px;
        position: absolute;
        bottom:1rem;
        left:1.5rem;
        padding-right:10px;
        border-radius: 15px;
        display: block;
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
        right:1.5rem;
        bottom: 1.5rem;
    }
    .edit_option{
        height:3.7rem;
        background: #ffffff;
        padding-top: 1.5rem;
        display: flex;
        padding-left: 1rem;
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
        width:2rem;
    }
    .optionSecond{
        width:2.4rem;
    }
    .optionThird{
        width: 2.3rem;
    }
    .optionFourth{
        width:7rem;
        font-size: 12px;
        color: #999999;
        border:1px solid #dcdcdc;
        margin: 0 auto;
        text-align: center;
        height:2rem;
        line-height: 2rem;
        border-radius: 8px;
    }
    .option_five{
        margin-top: -0.3rem;
        height:2.5rem;
        width:6rem;
        margin-left: 2rem;
    }
     .edit_option .optionjt{
         position: absolute;
         left:50%;
         margin-left:-1.2rem;
         width:2.4rem;
         bottom:-2px;
        visibility: hidden;
    }
    .edit_option .optionjtFlag{
        visibility: visible;
    }





</style>



