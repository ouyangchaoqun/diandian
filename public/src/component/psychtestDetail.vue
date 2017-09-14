<template id="psychtestDetail">
    <div class="psychtestDetail">
       <h2 class="psychtestDetail_title">{{textDetail.title}}</h2>
        <div class="psychtestDetail_count">{{textDetail.count}}人测过</div>
        <img :src="textDetail.pic" alt="">
        <div class="psychtestDetail_content">{{textDetail.des}}</div>
        <div class="psychtestDetail_Price"><span class="nowPrice">￥{{textDetail.price}}</span><span class="oldPrice">￥{{textDetail.old_price}}</span></div>
        <div class="psychtestDetail_item">
            <div>{{textDetail.question_count}}道精选问题</div>
            <div>{{textDetail.count}}人已经测试</div>
        </div>
        <div class="weui-btn weui-btn_primary psychtestDetail_btn" @click="startText()">立即测试</div>
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
                textDetail:{},
                payed:''
            }
        },
        mounted: function () {
            let _this = this;
            _this.testId = _this.$route.query.testId;
            _this.$http.get(web.API_PATH+'test/get/'+_this.testId+'/'+1303).then(response => {
                if(response.data.status===1){
                    console.log(response.data.data)
                    _this.textDetail = response.data.data
                    _this.payed = response.data.data.payed
                    console.log(_this.payed)
                }
            }, response => {
                // error

            });
        },
        methods: {
            startText:function () {
                let _this = this;
                _this.$router.push('/testQuestions?testId='+_this.testId)
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
        height:43px;
        position: absolute;
        bottom: 0;
        width: 100%;
        line-height: 43px;
        border-radius: 0;
    }
</style>