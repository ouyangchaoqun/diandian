<template id="subscribeDetail">
    <div class="subscribeList_box">
        <div class="subscribeList_header">
            <img src="../images/subscribanner1.png" alt="">
            <img src="../images/timing.png" alt="">
            <div>4468人已订阅</div>
        </div>
        <div class="subscribeListMiddle">
            <h3>记录心情定时提醒</h3>
            <div>每天定时提醒你记录此刻心情每天定时提醒你记录此刻心情每天定时提醒你记录此刻心情每天定时提醒你记录此刻心情每天定时提醒你记录此刻心情</div>
        </div>
        <div class="subscribeListBottom">
            <div>推送设置</div>
            <div class="timeSet" @click="showTime()">时间设定
                <img src="../images/me_jt.png" alt="">
                <div class="timeSetRight">
                    <span class=" hours showPicker">{{hour}}</span>
                    :
                    <span class="minutes showPicker">{{minute}}</span>
                </div>

            </div>
        </div>
        <div class="subscribeListSet">
            <button class="weui-btn subBtn" @click="show_unsubscribeBox">取消订阅</button>
        </div>
        <div v-if="unsubscribe_box">
            <div class="weui-mask"></div>
            <div class="weui-actionsheet weui-actionsheet_toggle">
                <div class="weui-actionsheet__title">
                    <p class="weui-actionsheet__title-text">确定要取消订阅该内容吗？</p></div>
                <div class="weui-actionsheet__menu">
                    <div class="weui-actionsheet__cell unsubscribe" @click="delSubscribe">
                        取消订阅
                    </div>
                </div>
                <div class="weui-actionsheet__action">
                    <div class="weui-actionsheet__cell" @click="hide_unsubscribeBox">取消</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

    var subscribeDetail={
        template:'#subscribeDetail'
    }
    export default {
        data() {
            return {
                hour: '08',
                minute: '00',
                isSub:false,
                unsubscribe_box:false
            }
        },
        methods:{
            showTime: function () {
                console.log(111)
                let _this = this;
                var hours = [];
                var obj;
                for (var i = 0; i < 24; i++) {
                    if (i < 10) {
                        obj = {
                            label: '0' + i,
                            value: '0' + i
                        }
                    } else {
                        obj = {
                            label: '' + i,

                            value: '' + i
                        }
                    }
                    hours.push(obj)
                }
                console.log(hours)
                var minutes = [];
                for (i = 0; i < 60; i++) {
                    if (i < 10) {
                        obj = {
                            label: '0' + i,
                            value: '0' + i
                        }
                    } else {
                        obj = {
                            label: '' + i,
                            value: '' + i
                        }
                    }
                    minutes.push(obj)
                }
                console.log(minutes)

                weui.picker(
                    hours, minutes, {
                        onConfirm: function (result) {
                            console.log(result)
                            _this.hour = result[0].value !== '' ? result[0].value : result[0];
                            _this.minute = result[1].value !== '' ? result[1].value : result[1];
                        }
                    });
            },
            setRemindTime: function () {
                let _this = this;
                this.$http.post(web.API_PATH + 'user/save/user/remind', {
                    remindTime: _this.hour + ":" + _this.minute,
                    userId: "",
                    id: ""
                }, {emulateJSON: true})
                    .then(function (response) {
                        xqzs.weui.toast("success", "设置成功", function () {
                        })
                    });
            },
            show_unsubscribeBox:function () {
                this.unsubscribe_box = true
            },
            hide_unsubscribeBox:function () {
                this.unsubscribe_box = false
            },
            delSubscribe:function () {
                this.unsubscribe_box = false;

            }
        },
        mounted:function () {

        }

    }
</script>
<style>
    .subscribeList_box{
        height:100%;
        background: #f4f4f8;
    }
    .subscribeList_header{
        position: relative;
    }
    .subscribeList_header img{
        display: block;
    }
    .subscribeList_header img:nth-of-type(1){
        height: 90px;
        width:100%;
    }
    .subscribeList_header img:nth-of-type(2){
        height: 60px;
        position: absolute;
        left:50%;
        margin-left: -30px;
        top: 60px;
    }
    .subscribeList_header div{
        font-size: 12px;
        color: #fff;
        text-align: center;
        position: absolute;
        top: 33px;
        width: 80px;
        left:50%;
        margin-left: -40px;
    }
    .subscribeListMiddle{
        height: 90px;
        background: #fff;
        padding-top: 50px;
        text-align: left;
        font-size: 12px;
        color: #999;
        margin-bottom: 32px;
    }
    .subscribeListMiddle h3{
        font-size: 15px;
        line-height: 15px;
        color: #333;
        margin-bottom: 12px;
        text-align: center;
    }
    .subscribeListMiddle div{
        padding:0 25px;
        line-height: 18px;
    }
    .subscribeListBottom{
        height: 100px;
        background: #fff;
        padding-left: 15px;
        margin-bottom: 30px;
    }
    .subscribeListBottom div{
        height: 49px;
        line-height: 49px;
        border-bottom: 1px solid #e5e5e5;
        font-size: 16px;
        font-weight: 600;
        color: #333;
    }
    .subscribeListBottom .timeSet{
        border:0;
        height: 50px;
        line-height: 50px;
        font-size: 15px;
        font-weight: normal;
        padding-right: 15px;
    }
    .subscribeListSet{
        padding:0 15px;
    }
    .showPicker{
        font-size: 15px;

    }
    .timeSet .timeSetRight{
        float: right;
        border:0;
        font-weight: normal;
        margin-right: 13px;
        color: #999;
    }
    .timeSet img{
        float: right;
        height: 16px;
        margin-top: 18px;
    }
    .weui-picker{
        z-index:10005;
    }
    .subBtn{
        color: #999;
    }
    .unsubscribe{
        color: #ff0000;
    }
</style>


