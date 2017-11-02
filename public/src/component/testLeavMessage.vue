<template >
    <div class="leavMessage_box">
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="leav_textarea">
            <textarea placeholder="对于测试结果，发表下你的留言呗！" v-input="getMessage()" v-model="mes"></textarea>
        </div>
        <div class="leav_bottom">
            <span class="leav_bottom_left weui-cells_checkbox">
                <label for="s1" class="weui-check__label">
                    <span class="weui-cell__hd" style="position: absolute;top:-1px;">
                        <input type="checkbox" class="weui-check" id="s1" v-model="isLooked">
                        <i class="weui-icon-checked"></i>
                    </span>
                    <span style="font-size: 0.8235rem;color:#999;margin-left: 2rem;">匿名</span>
                </label>
            </span>
            <span class="weui-btn weui-btn_disabled weui-btn_primary" @click="leavMessage()">发表留言</span>
        </div>
    </div>
</template>

<script type="es6">
    import showLoad from './showLoad.vue';
    export default {
        data() {
            return {
                mes:'',
                testId:'',
                resultId:'',
                isLooked:false,
                showLoad:false
            }
        },
        methods: {
            getMessage:function () {
                let _this = this;
                if(_this.mes){
                   $('.leav_bottom .weui-btn').removeClass('weui-btn_disabled')
                }else {
                    $('.leav_bottom .weui-btn').addClass('weui-btn_disabled')
                }
            },
            leavMessage:function () {
                let _this = this;
                _this.showLoad = true
                if(!_this.mes){
                    return
                }
                var messageVal={
                    userId:'',
                    content:_this.mes,
                    testId:_this.testId,
                    isLooked:_this.isLooked?1:0,
                    resultId: _this.resultId
                };
                console.log(messageVal)
                _this.$http.put(web.API_PATH + 'test/evaluate', messageVal)
                    .then(function (bt) {
                        _this.showLoad = false
                        console.log(_this.testId)
                        _this.$router.replace({path:'/psychtestDetail',query:{testId:_this.testId}})
                    })
            },
            getCheck:function () {
                console.log(this.aaa)
            }
        },
        components: {
            'v-showLoad': showLoad
        },
        mounted: function () {

            this.testId = this.$route.query.testId;
            this.resultId = this.$route.query.resultId;
        }

    }


</script>
<style>
     .leavMessage_box{background: #fff;}
     .leavMessage_box .leav_textarea{padding:1.2rem;border-bottom: 1px solid #eee;}
     .leavMessage_box .leav_textarea textarea{font-size:0.8235rem;resize: none;border:0;outline: none;width:100%;height:8rem;line-height: 1.6}
     .leavMessage_box .leav_bottom{padding:0.5rem 0.88235rem;position: relative}
     .leavMessage_box .leav_bottom .weui-btn{float: right;font-size: 0.88235rem;border-radius: 1rem;height:1.88235rem;line-height:1.88235rem;width:6.471rem}
     .leavMessage_box .leav_bottom_left{position: absolute;}
     .leavMessage_box .leav_bottom_left .weui-cells_checkbox{position: absolute;}
     .leavMessage_box .weui-cells_checkbox .weui-icon-checked:before{font-size: 1.2rem}
     .leavMessage_box .weui-check__label:active{background: none !important;}
</style>