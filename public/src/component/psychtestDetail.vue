<template id="psychtestDetail">
    <div class="psychtestDetail" >
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div v-if="htmlover">
            <div class="psychtestDetail_header" >
                <img :src="testDetail.pic" alt="">
                <h2 class="psychtestDetail_title">{{testDetail.title}}</h2>
                <div class="psychtestDetail_class">{{testDetail.class_name}}</div>
                <div class="psychtestDetail_flex">
                    <div>
                        <span></span>
                        {{testDetail.question_count}}道精选问题
                    </div>
                    <div>
                        <span></span>
                        1份专业报告
                    </div>
                    <div>
                        <span></span>
                        12W+人测试过
                    </div>
                </div>
            </div>
            <div class="psychtestDetail_main">
                <div class="addBottom">
                    <div>
                        <div class="addBottomLine">评测介绍</div>
                        <div class="bottom_line"></div>
                    </div>
                    <div class="addBottomText" v-html="testDetail.des">
                    </div>
                </div>
            </div>
            <div class="psychtestDetail_main psychtestDetail_main_addStyle">
                <div class="addBottom">
                    <div>
                        <div class="addBottomLine">评测须知</div>
                        <div class="bottom_line"></div>
                    </div>
                    <div class="addBottomText" v-html="testDetail.notice">
                    </div>
                </div>
            </div>

            <div class="psych_test_btn_box">
                <!--<template v-if="testDetail.lastAnswerId!=null">-->
                <!--<div class="psych_test_btn_view" @click="viewResult()">查看报告</div>-->
                <!--<div class="psychtestDetail_btn" @click="startTest()">-->
                <!--<template v-if="payed==1">完成测试</template>-->
                <!--<template v-if="payed==0">重新测试</template>-->

                <!--</div>-->
                <!--</template>-->
                <!--<template v-if="testDetail.lastAnswerId==null">-->
                <!--<div class="psychtestDetail_btn" @click="startTest()">-->
                <!--<template v-if="payed==1">完成测试</template>-->
                <!--<template v-if="payed==0">立即测试</template></div>-->
                <!--</template>-->

                <template>
                    <div class="psych_test_btn_price" :class="{noTestStyle:testDetail.lastAnswerId==null}">￥{{testDetail.price.toFixed(2)}} <span>￥{{testDetail.old_price.toFixed(2)}}</span></div>
                    <div class="psych_test_btn_view" v-if="testDetail.lastAnswerId!=null" @click="viewResult()">查看报告</div>
                    <div class="psychtestDetail_btn" :class="{noTestStyle:testDetail.lastAnswerId==null}" @click="startTest()">
                        <template v-if="payed==1">继续测试</template>
                        <template v-if="payed==0">立即购买</template>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    import Bus from '../component/bus.js';
    import showLoad from './showLoad.vue';
    var psychtestDetail = {
        template: '#psychtestDetail'
    }
    export default {
        data() {
            return {
                testId: '',
                testDetail: {},
                payed: 0,
                showLoad: false,
                htmlover:false,
                theUser:null,
            }
        },
        mounted: function () {

            let _this = this;
            _this.showLoad=true;
            _this.testId = _this.$route.query.testId;
            let start = _this.$route.query.start;
            let guestData = ''
            if (web.guest) {
                this.isGuest = true;
                guestData = "?guest=true";
            }

            _this.$http.get(web.API_PATH + 'user/find/by/user/Id/_userId_').then(function (data) {
                if(data.data.status==1){
                    _this.theUser = data.data.data.id
                }else {
                    _this.theUser = 0
                }
                _this.$http.get(web.API_PATH + 'test/get/' + _this.testId +'/'+_this.theUser+guestData).then(response => {
                    _this.showLoad=false;
                    _this.htmlover = true
                    if (response.data.status === 1) {
                        console.log(response.data.data);
                        _this.testDetail = response.data.data;
                        _this.payed = response.data.data.payed;
                        _this.answerId = response.data.data.lastAnswerId;
                        //console.log(_this.payed);
                        if (start && _this.payed) {
                            _this.$router.replace('/testQuestions?testId=' + _this.testId)
                        }
                    }
                    xqzs.wx.setConfig(this, function () {
//                    wx.showAllNonBaseMenuItem();
//                    var config = {
//
//                        imgUrl:_this.testDetail.share_pic,
//                        title: _this.testDetail.share_title,
//                        desc: _this.testDetail.share_description,
//                        link: web.BASE_PATH + "wx/pub/#/psychtestDetail?testId=" + _this.testId,
//                    };
//                    weshare.init(wx,config)
                    });

                }, response => {
                    // error

                });

            })



        },
        components: {
            'v-showLoad': showLoad
        },
        methods: {
            startTest: function () {

                let _this = this;
                console.log(_this.payed);
                if (_this.payed == 1) {
                    _this.$router.replace('/testQuestions?testId=' + _this.testId)
                } else {
                    _this.goPay();
                }

            },

            goPay:function () {
                let _this = this;
                _this.$http.put(web.API_PATH + 'test/create/order/_userId_/' + _this.testId).then(function (res) {
                    let config = res.data.data;
                    let url = web.BASE_PATH + "wxpay.php?appId=" + config.appId + "&timeStamp=" + config.timeStamp + "&nonceStr=" + config.nonceStr + "&package=" + config.package + "&signType=" + config.signType + "&paySign=" + config.paySign + "&reurl=" + encodeURIComponent(window.location.href + "&start=1");
                    window.location.href = url
                })
            },

            viewResult: function () {
                let _this = this;
                if (_this.answerId != null)
                    _this.$router.push('/testResult?answerId=' + _this.answerId)
            }
        }

    }
</script>
<style>
    .psychtestDetail {
        background: #fff;
        height: 100%;
        position: relative;
    }
    .psychtestDetail_header{
        border-bottom: 0.588235rem solid #F2F2F5;
    }
    .psychtestDetail_title {
        color: #000;
        font-size: 1.17647rem;
        margin-top: 1.117647rem;
        margin-bottom: 1rem;
        text-align: center;
    }
    .psychtestDetail_class{
        font-size: 0.8235rem;
        color:#828282;
        line-height: 1;
        margin-bottom: 1.35294rem;
        text-align: center;
    }
   .psychtestDetail .addBottomText img{
        max-width:100%;
       width:auto;
    }
    .psychtestDetail_flex{
        color:#999;
        font-size: 0.70588235rem;
        line-height: 1;
        display: flex;
        display: -webkit-flex;
        text-align: center;
        padding:0 1rem ;
        margin-bottom: 1.4rem;
    }
    .psychtestDetail_flex>div{
        flex: 1;
    }
    .psychtestDetail_flex>div:nth-of-type(1){
        text-align: left;
    }
    .psychtestDetail_flex>div:nth-of-type(3){
        text-align: right;
    }
    .psychtestDetail_flex span{
        width: 5px;
        height: 5px;
        display: inline-block;
        background: #999;
        border-radius: 50%;
        vertical-align: middle;
        margin-top: -3px;
    }
    .psychtestDetail_main{
        padding:1.76471rem;
    }
    .psychtestDetail_main_addStyle{
        background: #f8f8f8;
        margin:0 1.176471rem;
        border-radius: 5px;
        margin-bottom: 3rem;
        padding:1.76471rem 1.176471rem;
    }
    .psychtestDetail img {
        width: 100%;
        display: block;
        margin: 0 auto;
    }

    .psychtestDetail_btn {
        background: #FD7306;
        color: #fff;
        width:30%;
    }
    .psych_test_btn_box .noTestStyle{
        width:55%;
    }
    .psych_test_btn_price{
        width:45%;
        background: #F2F2F5 ;
        color:#FE7301;
        font-size: 1.0588235rem;
    }
    .psych_test_btn_price span{
        color:#666;
        font-size: 0.70588235rem;
        text-decoration: line-through;
        margin-left:0.471rem;
    }

    .psychtestDetail_btn:active {
        background: #d86204;
    }

    .psych_test_btn_view {
        background: #FDA333;
        text-align: center;
        color: #fff;
        width:25%;
    }
    .psych_test_btn_view:active {
        background: #d39207;
    }

    .psych_test_btn_box {
        height: 2.588rem;
        position: fixed;
        bottom: 0;
        width: 100%;
        line-height: 2.588rem;
        border-radius: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;
        font-size: 0.88235rem ;
    }
    .psychtestDetail .addBottomLine{
        font-size: 1.0588235rem;
        margin: 0 auto;
        text-align: center;
        color: #FE7301;
        line-height: 1;
        margin-bottom: 0.588235rem;
    }
    .psychtestDetail .addBottomText{
        padding:0
    }
    .psychtestDetail .addBottomText p:last-of-type{margin: 0}
    .addBottom .bottom_line{width:1.8235rem;height:0.176471rem;background: #DDDDDE;border-radius: 1.5px;margin:0 auto;margin-bottom: 1rem}
</style>