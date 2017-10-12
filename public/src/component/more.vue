<template >
    <div style="height: 100%"  class="more_box" >

        <div v-title>发现</div>
        <div class="list">
            <a class="item" @click="luck()">
                <div class="img">
                    <img src="../images/luck/lucky.png">
                </div>
                <div class="title">十月份星座运势已经新鲜出炉，测一测你的运势!</div>
                <div class="info">
                    <div class="left">100人已测</div>
                    <div class="right">免费</div>
                    <div class="clear"></div>
                </div>
            </a>

        </div>
    </div>
</template>

<script type="es6">


    export default {
        data() {
            return {

            }
        },
        props:{
            user:{
                type:Object
            }
        },
        methods: {
            luck:function () {

                let _this= this;
                if(this.user){
                    this.goLuck();
                }else{

                    this.$http({
                        method: 'GET',
                        type: "json",
                        url: web.API_PATH + 'user/find/by/user/Id/_userId_',
                    }).then(function (data) {//es5写法
                        if (data.data.data !== null && data.data.data != undefined) {
                            _this.user = data.data.data;
                         }

                     }, function (error) {
                     });
                }

            },
            goLuck:function () {
                this.$router.push("/constellationLuck?userid="+this.user.id)
            }
        },


        mounted: function () {


            xqzs.wx.setConfig(_this);


        },

    }


</script>
<style>
    .clear{ clear:both  }
    .more_box { background: #F4F4F7 }

    .list{ padding: 0.88235rem;}
    .list .item{ background: #fff; display: block; margin-bottom: 0.88235rem; color:#333}
    .list .item .img img{ width: 100%; }
    .list .item .title{ text-align: left; font-size: 0.88235rem; font-weight: bold; line-height: 1.8rem; margin:  0 0.65235rem;}
    .list .item .info {  margin-top: 0.3rem ; padding-bottom: 0.6rem;}
    .list .item .info .left{  float:left; background: url(../images/fire.png) no-repeat; padding-left: 1.1rem; height:1.088235294117647rem; line-height: 1.088235294117647rem; background-size: 0.9411764705882353rem; font-size: 0.7058823529411765rem; color:#999; margin-left: 0.88235rem}
    .list .item .info .right{ font-size: 0.9411764705882353rem; color:#FE7301; text-align: right; float:right; width: 200px; margin-right: 0.88235rem; line-height: 1}


</style>