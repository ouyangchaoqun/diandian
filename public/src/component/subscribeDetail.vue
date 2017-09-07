<template id="subscribeDetail">
    <div>
        <div class="subscribeList_box">
            <div class="subscribeList_header">
                <img :src="detail.cover" alt="">
                <img :src="detail.icon" alt="">
            </div>
            <div class="subscribeListMiddle">
                <p>{{detail.subscribecount}}人已设置</p>
                <h3>{{detail.title}}</h3>
                <div>{{detail.description}}</div>
            </div>
            <div class="subscribeListBottom">
                <div>推送设置</div>
                <div class="timeSet" @click="showTime()">提醒时间
                    <img src="../images/me_jt.png" alt="">
                    <div class="timeSetRight">
                        <span class="hours showPicker">{{hour}}</span>
                        :
                        <span class="minutes showPicker">{{minute}}</span>
                    </div>

                </div>
            </div>
            <div class="subscribeListSet">
                <button v-if="!detail.issubscribe==1" class="weui-btn weui-btn_primary">设置提醒</button>
                <button class="weui-btn subBtn" @click="show_unsubscribeBox" v-if="detail.issubscribe==1">取消提醒</button>
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
                hour:'--',
                minute:'--',
                isSub:false,
                unsubscribe_box:false,
                dataArray:[],
                issubscribe:'',
                detail:{},
                minHour:0,
                maxHour:24,
                defaultArray:[]
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
                _this.detail.remindtime = _this.detail.remindtime||'--:--';
                _this.detail.defaulttime = _this.detail.defaulttime;
                console.log(_this.detail.defaulttime)
                var timies = _this.detail.remindtime.split(':');
                var defaulttime = _this.detail.defaulttime.toString().split('')
                if(defaulttime.length<4){
                    defaulttime.unshift('0')
                }
                _this.defaultArray[0] = defaulttime[0]+defaulttime[1]
                _this.defaultArray[1] = defaulttime[2]+defaulttime[3]
                console.log(_this.defaultArray)
                _this.hour = timies[0];
                _this.minute = timies[1];
                _this.minHour= parseInt(_this.detail.mintime /100);
                _this.maxHour= parseInt(_this.detail.maxtime /100);
            }, function (data) {
            });
        },
        mounted:function () {

        },
        methods:{
            showTime: function () {
                let _this = this;
                var hours = [];
                var obj;
                for (var i =  _this.minHour; i <=  _this.maxHour; i++) {
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
                        defaultValue:_this.defaultArray,
                        onConfirm: function (result) {
                            _this.hour = result[0].value;
                            _this.minute = result[1].value;
                            var postdata = {subscriptionId:_this.detail.id,userId:'',remindTime:_this.hour+':'+_this.minute};
                            console.log(postdata)

                            _this.$http.put(web.API_PATH + 'subscribe/subscribe',postdata)
                                .then(function (res) {
                                    console.log(res)
                                    xqzs.weui.toast("success", "设置成功", function () {
                                        _this.setRemindTime()
                                    })
                                });
                        }
                    });
            },
            show_unsubscribeBox:function () {
                let _this = this;
                xqzs.weui.actionSheet("确定要取消提醒吗？","取消提醒",function () {

                    var postdata = {subscriptionId:_this.$route.params.id,userId:''};
                    _this.$http.put(web.API_PATH + 'subscribe/unsubscribe',postdata)
                        .then(function (res) {
                            console.log(res)
                            xqzs.weui.toast("success", "取消成功", function () {
                                _this.$router.go(-1);
                            })

                        });
                },function () {

                })

 
            },
            setRemindTime: function () {
                let _this = this;
                //用户信息
                var postdata = {subscriptionId:this.$route.params.id,userId:'',remindTime:this.hour+':'+this.minute};
                console.log(postdata)
                _this.$http.put(web.API_PATH + 'subscribe/subscribe',postdata)
                        .then(function (res) {
                            console.log(res)
                            _this.$router.go(-1);
                        });
            }


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
        border-radius: 50%;

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
        background: #fff;
        padding-top: 40px;
        text-align: left;
        font-size: 12px;
        color: #999;
        margin-bottom: 15px;
        padding-bottom: 20px;
    }
    .subscribeListMiddle h3{
        font-size: 15px;
        line-height: 15px;
        color: #666;
        margin-bottom: 12px;
        text-align: center;
    }
    .subscribeListMiddle p{
        text-align: center;
        padding-bottom: 12px;
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
        color: #666;
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
    .subBtn:active{
        background: rgba(0,0,0,0.2);
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


