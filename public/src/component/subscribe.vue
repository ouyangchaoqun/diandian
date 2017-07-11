<template id="subscribe">
    <div class="subscribe_box" style="padding-top: 20px">
        <div v-title>精选订阅</div>
        <!--<div class="subtabs">
            <div class="tabHeader">
                <a href="#" hidefocus="true" class="active">订阅推荐</a>
                <a href="#" hidefocus="true">我的订阅</a>
            </div>
        </div>-->
        <div style="font-size: 16px;color: #999;text-align: center;margin-bottom: 15px">订阅推荐</div>
        <div class="swiper-container moodCount_box">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <ul class="subscribeLists">
                        <router-link :to="url+data.id" v-for="data in dataArray">
                            <li class="subscribeList subscribeHeight">
                                <img class="timing" :src="data.icon" alt="">
                                <div>
                                    <h3>{{data.title}}</h3>
                                    <p class="description" v-html="subText(data.description)"></p>
                                    <span>{{data.subscribecount}}人已订阅</span>
                                </div>
                                <img class="addSubscribe" src="../images/add.png" alt="" v-if="!data.issubscribe==1">
                                <img class="addSubscribe" src="../images/checked.png" alt="" v-if="data.issubscribe==1">
                            </li>
                        </router-link>

                    </ul>
                </div>
                <div class="swiper-slide">
                    <ul class="subscribeLists" >
                        <router-link :to="urlDetail+data.id" v-for="data in subArray" v-if="subArray.length>0||data.issubscribe==1">
                            <li class="subscribeList">
                                <img class="timing" :src="data.icon" alt="">
                                <div>
                                    <h3 class="subMarTop">{{data.title}}</h3>
                                    <p>每天{{data.remindtime}}提醒</p>
                                </div>
                            </li>
                        </router-link>
                    </ul>
                    <div class="noSubscribe" v-if="subArray.length<=0">你暂时还没有任何订阅哦~</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

    var subscribe={
        template:'#subscribe'
    }
    export default {
        data() {
            return {
                dataArray:[],
                url:'/me/subscribe/subscribeList/',
                description:'',
                urlDetail:'/me/subscribe/subscribeDetail/',
                subArray:[]
            }
        },
        props:[
            'issubscribe'
        ],
        beforeCreate: function () {

            console.log("beforeCreate")
            let _this = this;
            //用户信息
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'subscribe/query/subscribes/by/user/_userId_',
            }).then(function (data) {
                var dataArray = data.data.data
                console.log(dataArray);
                _this.dataArray = dataArray;
            }, function (data) {
            });
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'subscribe/query/users/subscribes/_userId_',
            }).then(function (data) {
                var subArray = data.data.data;
                console.log(subArray)
                _this.subArray = subArray;
            }, function (data) {
            });
        },
        methods:{
            subText:function (text) {
                var len = 12;
                if(text.length>len){
                    text = text.substr(0,len)+'...';
                }
                return text;
            }
        },
        mounted:function () {
            var subtabsSwiper = new Swiper('.swiper-container',{
                speed:500,
                onSlideChangeStart: function(){
                    $(".subtabs .active").removeClass('active');
                    $(".subtabs a").eq(subtabsSwiper.activeIndex).addClass('active');
                }
            });
            $(".subtabs a").on('touchstart mousedown',function(e){
                e.preventDefault()
                $(".subtabs .active").removeClass('active');
                $(this).addClass('active');
                subtabsSwiper.slideTo($(this).index());
            });

            $(".subtabs a").click(function(e){
                e.preventDefault();
            });

            //swiperIndex
         /*   var swiperIndex = this.$route.query.isBack || 0;
            console.log(this.$route.query)
            console.info(swiperIndex);
            subtabsSwiper.slideTo(swiperIndex);*/
        }

    }
</script>
<style>
    .subscribe_box{
        width: 100%;
        height: 100%;
        background: #ffffff !important;
    }
    .subtabs{
        height:37px;
        background:#fff;
        padding:15px;
        border-bottom: 1px solid #eee
    }
    .tabHeader{
        height:37px;
        background:#ebebeb;
        border-radius: 5px;
        padding:0 2px
    }
    .subtabs a{
        display:block;
        float:left;
        width:50%;
        color:#bcbcbc;
        text-align:center;
        line-height:33px;
        height:33px;
        font-size:14px;
        text-decoration:none;
        border-radius: 4px;
        margin:2px 0;
        font-family: PingFangSC-Regular
    }
    .subtabs a.active{
        color:#333;
        position: relative;
        background: #fff;
        font-size: 15px;
        font-family: PingFangSC-Medium
    }
    .subscribeLists{padding:0 15px 0 15px}
    .subscribeList{
        height: 62px;
        border-bottom: 1px solid #eee;
        color: #999;
        padding-top: 15px;
    }
    .subscribeHeight{
        height: 77px;
    }
    .subscribeList div{
        float: left;
        margin-left: 20px;
    }
   .subscribeList h3{
       font-size: 16px;
       color: #333;
       font-weight: normal;
       line-height: 16px;
       margin-bottom: 9px;
   }
   .subscribeList p{
       font-size: 13px;
       line-height: 16px;
       margin-bottom: 12px;
       height: 16px;
   }
    .subscribeList span{
        font-size: 11px;
        line-height: 11px;
        display:block;
    }
    .addSubscribe{
        float: right;
        width:37px;
        height: 33px;
    }
    .moodCount_box{
        width:100%;
        height:auto;
    }
    .timing{
        width: 41px;
        display: block;
        float: left;
    }
    .subMarTop{
        margin-top: 5px;
    }
    .noSubscribe{
        font-size: 15px;
        color: #333;
        margin-top: 50%;
        text-align: center;
    }
</style>


