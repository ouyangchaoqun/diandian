<template id="privacy">
    <div class="top20_box">
        <div class="privacy">
            <span>不看好友的心情记录</span>
            <input type="checkbox" class="weui-switch switchFlag" v-model="isNotLookFriend"  @click="lookFriend()" >
        </div>
        <div class="privacy">
            <span>不让好友看我的心情记录</span>
            <input type="checkbox" class="weui-switch switchFlag"  v-model="isNotLookMe"  @click="lookMe()">
        </div>
    </div>
</template>
<style>
    .privacy {
        height: 50px;
        background: #fff;
        margin-bottom: 1px;
        padding: 0 15px;
        line-height: 50px;
    }

    .privacy span {
        font-size: 15px;
        color: #333333;
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
                isNotLookFriend:null,
                isNotLookMe:null
            }
        },
        mounted: function () {
            let _this = this;

            //用户信息
            this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/[userId]',
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
                //
                this.$http({
                    method: 'POST',
                    url: web.API_PATH + 'user/update/my/set/look/me/[userId]/'+_this.user.isLookMe,
                }).then(function (data) {//es5写法
                    if (data.data.status !== null) {

                    }
                }, function (error) {
                    //error
                });
            },

            lookFriend:function () {
                let _this = this;
                //
                this.$http({
                    method: 'POST',
                    url: web.API_PATH + 'user/update/my/set/look/friend/[userId]/'+_this.user.isLookFriend,
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


