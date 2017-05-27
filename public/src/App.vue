<template>
    <div id="app">
        <router-view></router-view>
        <div class="weui-tabbar" id="tabs">
            <router-link to='/writeMood' class="weui-tabbar__item  tab">
				<span style="display: inline-block;">
					<img src="./images/face1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">记录心情</p>
            </router-link>

            <router-link to='/calendar' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="./images/rl1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">心情日历</p>
            </router-link>

            <router-link to='/friends' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="./images/friend1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">朋友心情</p>
            </router-link>

            <router-link to='/me' class="weui-tabbar__item tab">
				<span style="display: inline-block;">
					<img src="./images/me1.png" class="weui-tabbar__icon"/>
				</span>
                <p class="weui-tabbar__label">我的</p>
            </router-link>

        </div>

    </div>
</template>
<script type="es6">
    import wx from 'weixin-js-sdk';

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
                console.log(_this.wxConfig );
                wx.ready(()=>{
                    console.log('wx.ready');
                });

                wx.error(function(res){

                    console.log(_this.wxConfig);

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
        }


    }
</script>
<style>
    #tabs {
        position: fixed;
    }

    #app {
        height: 100%;
    }
</style>
