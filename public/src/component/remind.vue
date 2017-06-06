<template id="remind">
    <div class="top20_box">
        <div class="remind">
            <span>提醒功能</span>
            <input type="checkbox" v-model="remindMsg" class="weui-switch switchFlag">
        </div>
        <div class="remind" @click = "showTime()"> <!--TODO-->
            <span>时间设定</span>
            <div v-show="remindMsg">
                <span class=" hours showPicker">{{hour}}</span>
                <span>:</span>
                <span class="minutes showPicker">{{minute}}</span>
            </div>
        </div>
        <a class="me_bottom weui-btn weui-btn_primary" @click = "setRemindTime()">提交</a>

    </div>
</template>
<style>
    .top20_box{
        padding-top:20px;
        background: #f5f5f5;
    }
    .remind{
        height:50px;
        padding:0 15px;
        background:#fff;
        margin-bottom: 1px;
        line-height: 50px;
    }


    .switchFlag{
        float: right;
        margin-top:10px;
    }
    .remind span{
        font-size: 15px;
        color:#333333;
    }
    .remind switch{
        float: right;
    }
    .remind div{
        float: right;
    }
    .remind div span{
        margin-right: 4px;
    }
</style>
<script type="text/javascript">
     var remind={
        template:'#remind'
    };
    export default {
        data() {
            return {
                remindMsg: false,
                hour:20,
                minute:30
            }
        },
        mounted: function () {
            let _this = this;

            //用户信息
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'user/find/user/remind/by/user/id/[userId]',
            }).then(function (data) {
                if (data.data.data !== null) {
                    _this.remindMsg = eval(data.data.data);
                    let time = _this.remindMsg.remindtime;
                    time = time.split(":");
                    _this.hour = time[0];
                    _this.minute = time[1];
                }
            }, function (error) {
            });

        },

        methods: {

            showTime: function () {
                let _this = this;
                if(! _this.remindMsg) return;

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
                                _this.hour=result[0].value;
                                _this.minute=result[1].value;

                            }
                        });


            },
            setRemindTime:function(){
                let _this = this;
                if(_this.remindMsg){

                    this.$http.post(web.API_PATH + 'user/save/user/remind',{remindTime:_this.hour+":"+_this.minute,userId:"",id:""},{emulateJSON: true})
                            .then(
                                    (response)=>{
                                        xqzs.weui.toast("success", "修改成功", function () {
                                            window.location.href = "#/"
                                        })
                                    }
                            );

                }else{

                    this.$http.delete(web.API_PATH + 'user/delete/user/remind/by/user/id/[userId]')
                            .then(
                                    (response) => {

                                        xqzs.weui.toast("success", "修改成功", function () {
                                            window.location.href = "#/"
                                        })

                                    }
                            );

                }

            }
        }
    }
    //module.exports=remind
</script>



