<template id="privacy">
    <div class="privacy_box">
        <div v-title>隐私设置</div>
        <div class="privacy privacyTop">
                <span>不看好友的心情记录</span>
                <input type="checkbox" class="weui-switch privacyInput"  :checked="isNotLookFriend" @change="isNotLookFriend = $event.target.checked"    @click="lookFriend()" >
            <div></div>
        </div>
        <div class="privacy privacyBottom">
            <span>不让好友看我的心情记录</span>
            <input type="checkbox" class="weui-switch privacyInput"   :checked="isNotLookMe" @change="isNotLookMe = $event.target.checked"   @click="lookMe()">
        </div>
    </div>
</template>
<style>
    .privacy_box{
        background: #f4f4f4;
    }
    .privacy {
        margin-top: 10px;
        height: 50px;
        background: #fff;
        padding-left:15px;
        line-height: 50px;
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
        margin-top:10px;
        margin-right: 12px;
    }
    .privacyTop{
        border-top: 1px solid #e5e5e5;
        overflow: hidden;
    }
    .privacyBottom{
        border-bottom: 1px solid #e5e5e5;
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



        },
        methods:{
            lookMe:function () {
                let _this = this;
                let flag;
                if(_this.isNotLookMe===true){flag=0}
                if(_this.isNotLookMe===false){flag=1}
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

            lookFriend:function () {
                let _this = this;
                let flag;
                if(_this.isNotLookFriend===true){flag=0}
                if(_this.isNotLookFriend===false){flag=1}
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


