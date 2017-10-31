<template >
    <div style="height: 100%"  class="more_box" >
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div v-title>发现</div>
        <div class="list">
            <a class="item" @click="luck()">
                <div class="img">
                    <img src="../images/luck/lucky.png">
                </div>
                <div class="title">十月份星座运势已经新鲜出炉，测一测你的运势!</div>
                <div class="info">
                    <div class="left">20w+人已测</div>
                    <div class="right">免费</div>
                    <div class="clear"></div>
                </div>
            </a>
            <router-link :to="{ path: '/psychtestDetail', query: { testId: psyItem.id}}" class="item" v-for="psyItem in psyLists">
                <div class="img">
                    <img :src="psyItem.pic">
                </div>
                <div class="title">{{psyItem.title}}</div>
                <div class="info">
                    <div class="left">{{psyItem.count}}人已测</div>
                    <div class="right">￥{{psyItem.price.toFixed(2)}}<span>{{psyItem.old_price.toFixed(2)}}</span> </div>
                    <div class="clear"></div>
                </div>
            </router-link>

        </div>

    </div>
</template>

<script type="es6">
    import showLoad from './showLoad.vue';

    export default {
        data() {
            return {
                count:1100,
                psyLists:[],
                showLoad: false
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        components: {
            'v-showLoad': showLoad
        },
        methods: {
            getTextList:function () {
                let _this=this;
                _this.showLoad=true;
                _this.$http.get(web.API_PATH+'test/get/list/0/1/20').then(response => {
                    _this.showLoad=false;
                    if(response.data.status===1){
                        _this.psyLists = response.data.data
                    }
                }, response => {
                    _this.showLoad=false;

                });
            },
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
                            _this.goLuck();
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
            this.getTextList();
            let date=new Date();
            this.count = date.getFullYear()*100+date.getMonth()*10+date.getDay()*8+date.getHours()*6+date.getMinutes()*2 ;
            xqzs.wx.setConfig(this);

            xqzs.localdb.set(xqzs.localdb.keys.MORE_HOT_POINT_CLICKED_KEY,true);


        },

    }


</script>
<style>
    .clear{ clear:both  }
    .more_box { background: #F4F4F7 }
    .list{ padding: 0.735rem 0.588235rem;}
    .list .item{ background: #fff; display: block; margin-bottom: 0.88235rem; color:#333}
    .list .item .img img{ width: 100%; height:11.176471rem}
    .list .item .title{ text-align: left; font-size: 0.88235rem; font-weight: bold; line-height: 1.8rem; margin:  0 0.65235rem;}
    .list .item .info {  margin-top: 0.3rem ; padding-bottom: 0.6rem;}
    .list .item .info .left{  float:left; background: url(../images/fire.png) no-repeat; padding-left: 1.1rem; height:1.088235294117647rem; line-height: 1.088235294117647rem; background-size: 0.9411764705882353rem; font-size: 0.7058823529411765rem; color:#999; margin-left: 0.88235rem}
    .list .item .info .right{ font-size: 0.9411764705882353rem; color:#FE7301; text-align: right; float:right; width: 200px; margin-right: 0.88235rem; line-height: 1}
    .list .item .info .right span{font-size: 0.70588235rem;color:#666;text-decoration: line-through;margin-left: 0.471rem;}

</style>