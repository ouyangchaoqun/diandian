<template id="testResult">
    <div class="testResult">
        <div class="testResult_top">
            {{testResult_top}}
        </div>
        <div class="textResult_option" v-if="result.result!=null">
            <div class="textResulth1"><img src="../images/textdg.png" alt="">测试结果</div>
            <div class="textResulth2">{{result.result}}</div>
        </div>
        <div class="textResult_des" v-if="result.content!=null">
            <div class="textResulth1"><img src="../images/textsm.png" alt="">说明</div>
            <div class="textResult_main">{{result.content}}</div>
        </div>
        <!--<div class="weui-btn weui-btn_primary textResult_btn" @click="testAgain()">重新测试</div>-->
    </div>
</template>
<script type="text/javascript">
    var testResult = {
        template: '#testResult'
    }
    export default {
        data() {
            return {
                answerId: '',
                result: {},
                testResult_top: ''
            }
        },
        mounted: function () {
            let _this = this;
            _this.answerId = _this.$route.query.answerId;
            _this.$http.get(web.API_PATH + 'test/get/scoreonly/' + _this.answerId + '').then(response => {
                if (response.data.status == 1) {
                    _this.result = response.data.data
                    _this.$http.get(web.API_PATH + 'test/get/' + _this.result.testId + '/_userId_').then(response => {
                        _this.testResult_top = response.data.data.title;
                    }, response => {
                        // error
                    });
                }
            }, response => {
                // error
            });


        },
        methods: {

            testAgain: function () {
                let _this = this;
                _this.$http.put(web.API_PATH + 'test/create/order/_userId_/' + _this.result.testId).then(function (res) {
                    let config = res.data.data;
                    let url = web.BASE_PATH + "wxpay.php?appId=" + config.appId + "&timeStamp=" + config.timeStamp + "&nonceStr=" + config.nonceStr + "&package=" + config.package + "&signType=" + config.signType + "&paySign=" + config.paySign + "&reurl=" + encodeURIComponent(window.location.href + "&start=1");
                    window.location.href = url
                })
            },
        }

    }
</script>
<style>
    .testResult {
        background: #fff;
    }

    .testResult_top {
        height: 3.71rem;
        line-height: 3.71rem;
        font-size: 1.0588rem;
        color: #333;
        border-bottom: 1px solid #eee;
        padding-left: 0.88235rem;
    }

    .textResult_option {
        padding: 0.941rem 0 1.0588rem 0.88235rem;
        border-bottom: 1px solid #eee;
    }

    .testResult img {
        display: inline-block;
        height: 0.88235rem;
        width: 0.88235rem;
        margin-top: -1px;
        float: left;
        margin-right: 0.588rem;
    }

    .textResulth1 {
        color: #666;
        font-size: 0.765rem;
        line-height: 1;
        margin-bottom: 1rem;
    }

    .textResulth2 {
        color: #333333;
        font-size: 1.0588rem;
        line-height: 1;
    }

    .textResult_des {
        padding: 2.0588rem 0.88235rem 4.4rem 0.88235rem;
    }

    .textResult_main {
        color: #333;
        font-size: 0.8235rem;
        line-height: 1.4rem;
    }

    .textResult_btn {
        width: 11rem;
    }
</style>