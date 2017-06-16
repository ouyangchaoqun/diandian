<template>
    <div id="app">
        <router-view></router-view>

    </div>
</template>
<script type="es6">

    export default {
        name: 'app',
        data() {
            return {
                wxConfig: {},
            }
        },
        created: function () {
            let _this=this;

            this.$http.get(web.API_PATH+'wei/xin/config').then(response => {
                _this.wxConfig = response.body;

                wx.config( _this.wxConfig);
                wx.ready(()=>{
                    wx.hideAllNonBaseMenuItem();
                    console.log('wx.ready');
                });

                wx.error(function(res){
                    //可以更新签名
                });
            }, response => {
                // error callback
            });
            if(!cookie.get("openId")){
                cookie.set("openId","oVLAc0m8L3Yq8cvAU5vRDnjqCpTQ");
                //todo 通过code获取 openId

            }

            console.log("建立");
        },
        updated: function () {
            console.log("rupdat222222e");

            this.$nextTick(function () {
                $('a').on('touchmove',function(e) {
                    $(this).parents("a").css({"pointer-events":"none"})
                }).on('touchend',function(e) {
                    var _this=this;
                    setTimeout(function () {
                        $(_this).parents("a").css({"pointer-events":""})
                    },200)
                });
            })
            document.addEventListener("touchmove", function() {



            });
        }


    }
</script>
<style>

    #app {
        height: 100%;
    }
</style>
