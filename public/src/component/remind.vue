<template id="remind">
    <div class="remind_box">
        <div v-title>定时提醒</div>
        <div class="remind remind1">
            <span>提醒功能</span>
            <input type="checkbox"  v-model="isRemind"    @change="change($event)"
                   class="weui-switch switchFlag">

        </div>
        <div class="remind remind2" @click="showTime()">
            <span>时间设定</span>
            <div v-show="isRemind">
                <span class="showPicker">{{hour}}</span>
                <span>:</span>
                <span class="showPicker">{{minute}}</span>
            </div>
        </div>
        <a v-if="!isRemind" class="me_bottom weui-btn weui-btn_primary weui-btn_disabled"
           @click="setRemindTime()">提交</a>
        <a v-if="isRemind" class="me_bottom weui-btn weui-btn_primary" @click="setRemindTime()">提交</a>

    </div>
</template>
<style>
    .remind_box {
        background: #f4f4f8;
    }

    .remind {
        height: 54px;
        padding-left: 15px;
        background: #fff;
        line-height: 54px;
    }

    .remind1 {
        margin-top: 12px;
        border-bottom: 1px solid #eee;
        overflow: hidden;
    }

    .remind2 {
        border-bottom: 1px solid #eee;
    }

    .switchFlag {
        float: right;
        margin-top: 11px;
        margin-right: 15px;
    }

    .remind span {
        font-size: 15px;
        color: #333333;
    }

    .remind switch {
        float: right;
    }

    .remind div {
        float: right;
        margin-right:15px;
    }
    .me_bottom {
        margin: 0 15px;
        margin-top: 30px;
    }
</style>
<script type="text/javascript">
    var remind = {
        template: '#remind'
    };
    export default {
        data() {
            return {
                remindMsg: false,
                hour: 20,
                minute: 30,
                isRemind: false
            }
        },
        beforeCreate: function () {
            console.log("beforeCreate")
            let _this = this;

            //用户信息
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'user/find/user/remind/by/user/id/_userId_',
            }).then(function (data) {
                console.log(data.data);
                if (data.data.data !== null) {
                    _this.remindMsg = eval(data.data.data);
                    let time = _this.remindMsg.remindtime;
                    time = time.split(":");
                    _this.hour = time[0];
                    _this.minute = time[1];
                    _this.isRemind = true;


                }
            }, function (error) {
            });
        },
        created: function () {
            console.log("created")

        },
        beforeMount: function () {
            console.log("beforeMount")

        },

        mounted: function () {
            xqzs.wx.setConfig(this);
        },

        methods: {

            showTime: function () {
                let _this = this;
                if (!_this.isRemind) return;

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
                            console.log(result)
                            _this.hour = result[0].value !== '' ? result[0].value : result[0];
                            _this.minute = result[1].value !== '' ? result[1].value : result[1];
                        }
                    });
            },
            setRemindTime: function () {
                let _this = this;
                if (_this.isRemind) {

                    this.$http.post(web.API_PATH + 'user/save/user/remind', {
                        remindTime: _this.hour + ":" + _this.minute,
                        userId: "",
                        id: ""
                    }, {emulateJSON: true})
                        .then(function (response) {
                                xqzs.weui.toast("success", "设置成功", function () {
                                    _this.$router.go(-1);
                                })
                            });
                }

            },
            change: function ($event) {
                this.isRemind=$event.target.checked;
                console.log(this.isRemind);
                if (this.isRemind === false) {
                    this.$http.delete(web.API_PATH + 'user/delete/user/remind/by/user/id/_userId_')
                        .then(function (response) {
                                console.log("del");
                            }
                        );
                }

            }
        }
    }
    //module.exports=remind

</script>



