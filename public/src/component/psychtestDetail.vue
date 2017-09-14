<template id="psychtestDetail">
    <div class="psychtestDetail">
       <h2 class="psychtestDetail_title">{{testDetail.title}}</h2>
        <div class="psychtestDetail_count">{{testDetail.count}}人测过</div>
        <img :src="testDetail.pic" alt="">
        <div class="psychtestDetail_content">{{testDetail.des}}</div>
        <div class="psychtestDetail_Price"><span class="nowPrice">￥{{testDetail.price}}</span><span class="oldPrice">￥{{testDetail.old_price}}</span></div>
        <div class="psychtestDetail_item">
            <div>{{testDetail.question_count}}道精选问题</div>
            <div>{{testDetail.count}}人已经测试</div>
        </div>
        <div class="psych_test_btn_box">
        <template v-if="testDetail.answerId!=null">
                <div class="psych_test_btn_view" @click="viewResult()">查看报告</div>
                <!--<div class="psychtestDetail_btn" @click="startTest()">重新测试</div>-->
        </template>
        <template v-if="testDetail.answerId==null">
            <div class="psychtestDetail_btn" @click="startTest()">立即测试</div>
        </template>
        </div>

    </div>
</template>
<script type="text/javascript">
    var psychtestDetail = {
        template: '#psychtestDetail'
    }
    export default {
        data() {
            return {
                testId:'',
                testDetail:{},
                payed:''
            }
        },
        mounted: function () {
            let _this = this;
            _this.testId = _this.$route.query.testId;
            let start  = _this.$route.query.start;
            _this.$http.get(web.API_PATH+'test/get/'+_this.testId+'/_userId_').then(response => {
                if(response.data.status===1){
                    console.log(response.data.data);
                    _this.testDetail = response.data.data;
                    _this.payed = response.data.data.payed;
                    _this.answerId=  response.data.data.answerId;
                    console.log(_this.payed);
                    if(start&&_this.payed){
                        _this.$router.push('/testQuestions?testId='+_this.testId)
                    }
                }
            }, response => {
                // error

            });
        },
        methods: {
            startTest:function () {

                let _this = this;
                if( _this.payed==1){
                    _this.$router.push('/testQuestions?testId='+_this.testId)
                }else{
                    _this.$http.put(web.API_PATH + 'test/create/order/_userId_/'+_this.testId).then(function (res) {
                            let config = res.data.data;
                            let url = web.BASE_PATH + "wxpay.php?appId=" + config.appId + "&timeStamp=" + config.timeStamp + "&nonceStr=" + config.nonceStr + "&package=" + config.package + "&signType=" + config.signType + "&paySign=" + config.paySign + "&reurl=" + encodeURIComponent(window.location.href+"&start=1");
                            window.location.href = url
                        })
                }

            },
            viewResult:function () {
                let _this= this ;
                if(_this.answerId!=null)
                _this.$router.push('/testResult?answerId='+_this.answerId)
            }
        }

    }
</script>
<style>
    .psychtestDetail{
        background: #fff;
        height:100%;
        position: relative;
    }
    .psychtestDetail_title{
        color:#333;
        font-size: 20px;
        line-height: 1;
        margin-top: 30px;
        margin-bottom: 15px;
        text-align: center;
    }
    .psychtestDetail_count{
        color: #666;
        font-size: 12px;
        line-height: 1;
        text-align: center;
    }
    .psychtestDetail img{
        width:345px;
        display: block;
        margin:15px auto;
    }
    .psychtestDetail_content{
        padding:0 15px;
        color: #333;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 35px;
    }
    .psychtestDetail_Price{
        text-align: center;
        line-height: 1;
        margin-bottom: 31px;
    }
    .nowPrice{
        color: #D55C03;
        font-size: 24px;
    }
    .oldPrice{
        color: #666;
        font-size: 15px;
        text-decoration: line-through;
    }
    .psychtestDetail_item{
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;
        font-size: 12px;
        color: #666;
        padding-top: 13px;
        border-top: 1px solid #eee;
        line-height: 1;
    }
    .psychtestDetail_item div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
    .psychtestDetail_btn{
        background: #1AAD19;
        text-align: center; color:#fff;
    }
.psych_test_btn_view{
    background: #E4E4E4;
    text-align: center; color:#666;
}
    .psych_test_btn_box{
        height:43px;
        position: absolute;
        bottom: 0;
        width: 100%;
        line-height: 43px;
        border-radius: 0;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;

    }
    .psych_test_btn_box div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }
</style>