<template id="privacy">
    <div class="privacy_box">
        <div v-title>隐私设置</div>
        <div class="privacyList">
            <div class="privacy privacyTop">
                <span>不看好友的心情记录</span>
                <input type="checkbox" class="weui-switch privacyInput"  v-model="isNotLookFriend"    @change="lookFriend($event)" >

            </div>
            <div class="privacy privacyBottom">
                <span>不让好友看我的心情记录</span>
                <input type="checkbox" class="weui-switch privacyInput"   v-model="isNotLookMe"     @change="lookMe($event)">
            </div>
        </div>

    </div>
</template>
<style>
    .privacyList{
        margin-top: 12px;
        background: #fff;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
    .privacy_box{
        background: #f4f4f8;
    }
    .privacy {
        height: 52px;
        background: #fff;
        margin-left:15px;
        line-height: 52px;
        position: relative;
    }
    .privacy div{
        position: absolute;
        height:1px;
        background: #e5e5e5;
        bottom:0;
        width: 100%;
    }
    .privacy span {
        font-size: 15px;
        color: #333333;
    }
    .privacyInput{
        float: right;
        margin-top:11px;
        margin-right: 15px;
    }
    .privacyTop{

        border-bottom: 1px solid #eee;
    }
</style>
<script  >
    var privacy = {
        template: '#privacy'
    }
    export default {
        data() {
            return {
                user: null,
                isNotLookFriend:false,
                isNotLookMe:false

            }
        },
        mounted: function () {
            let _this = this;

            //用户信息
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_',
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    //console.log(data);
                    _this.user = eval(data.data.data);
                    _this.isNotLookFriend=! _this.user.isLookFriend;
                    _this.isNotLookMe=! _this.user.isLookMe;

                }
            }, function (error) {
                //error
            });
            xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.me);


        },
        methods:{
            lookMe:function ($event) {
                let _this = this;

                _this.isNotLookMe =  $event.target.checked
                let flag;
                if(_this.isNotLookMe===true){flag=1}
                if(_this.isNotLookMe===false){flag=0}
                //
                this.$http({
                    method: 'POST',
                    url: web.API_PATH + 'user/update/my/set/look/me/_userId_/'+flag,
                }).then(function (data) {//es5写法
                    if (data.data.status !== null) {

                    }
                }, function (error) {
                    //error
                });
            },

            lookFriend:function ($event) {
                let _this = this;
                _this.isNotLookFriend =  $event.target.checked
                let flag;
                if(_this.isNotLookFriend===true){flag=1}
                if(_this.isNotLookFriend===false){flag=0}
                //
                this.$http({
                    method: 'POST',
                    url: web.API_PATH + 'user/update/my/set/look/friend/_userId_/'+flag,
                }).then(function (data) {//es5写法
                    if (data.data.status !== null) {

                    }
                }, function (error) {
                    //error
                });
            }
        }


    }

</script>


