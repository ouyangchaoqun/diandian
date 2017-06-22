<template id="subscribeDetail">
    <div>
        <div class="subscribeList_box">
            <div class="subscribeList_header">
                <img :src="detail.cover" alt="">
                <img :src="detail.icon" alt="">
                <div>{{detail.subscribecount}}人已订阅</div>
            </div>
            <div class="subscribeListMiddle">
                <h3>{{detail.title}}</h3>
                <div>{{detail.description}}</div>
            </div>
            <div class="subscribeListBottom">
                <div>推送设置</div>
                <div class="timeSet" @click="showTime()">时间设定
                    <img src="../images/me_jt.png" alt="">
                    <div class="timeSetRight">
                        <span class="hours showPicker">{{hour}}</span>
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
    </div>
</template>
<script type="text/javascript">

    var subscribeDetail={
        template:'#subscribeDetail'
    }
    export default {
        data() {
            return {
                isSub:false,
                unsubscribe_box:false,
                dataArray:[],
                issubscribe:'',
                detail:{}
            }
        },
        beforeCreate: function () {
            console.log("beforeCreate")
            let _this = this;
            var subsid = _this.$route.params.id;
            //用户信息
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'subscribe/query/detail/with/user/'+subsid+'/_userId_',
            }).then(function (data) {
                console.log(data)
                _this.detail = data.data.data
                var timies = _this.detail.remindtime.split(':');
                _this.hour = timies[0];
                _this.minute = timies[1];
            }, function (data) {
            });
        },
        methods:{
            showTime: function () {
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
                weui.picker(
                    hours, minutes, {
                        onConfirm: function (result) {
                            _this.hour = result[0].value;
                            _this.minute = result[1].value;
                            var postdata = {subscriptionId:_this.detail.id,userId:'',remindTime:_this.detail.hour+':'+_this.detail.minute};
                            console.log(postdata)
                            _this.$http.put(web.API_PATH + 'subscribe/subscribe',postdata)
                                .then(function (res) {
                                    console.log(res)
                                    xqzs.weui.toast("success", "设置成功", function () {
                                    })
                                });
                        }
                    });
            },
            setRemindTime: function () {
                let _this = this;
                var postdata = {subscriptionId:this.$route.params.id,userId:'',remindTime:this.hour+':'+this.minute};
                _this.$http.put(web.API_PATH + 'subscribe/subscribe',postdata)
                    .then(function (res) {
                        console.log(res)
                        xqzs.weui.toast("success", "取消订阅", function () {
                            _this.$router.go(-1);
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
                let _this = this;
                var postdata = {subscriptionId:this.$route.params.id,userId:''};
                _this.$http.put(web.API_PATH + 'subscribe/unsubscribe',postdata)
                    .then(function (res) {
                        console.log(res)
                         xqzs.weui.toast("success", "取消订阅", function () {
                         _this.$router.go(-1);
                         })

                    });

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
        width: 200px;
        left:50%;
        margin-left: -100px;
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
        height: 54px;
        overflow-y: scroll;
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


