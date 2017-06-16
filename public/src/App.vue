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


            console.log("建立");
        }



    }
</script>
<style>

    #app {
        height: 100%;
    }
</style>
