<template id="subscribe">
    <div class="subscribe_box">
        <div v-title>精选订阅</div>
        <!--<div class="subtabs">
            <div class="tabHeader">
                <a href="#" hidefocus="true" class="active">订阅推荐</a>
                <a href="#" hidefocus="true">我的订阅</a>
            </div>
        </div>-->
        <div class="moodCount_box">
            <div v-if="subArray.length>0">
                <div class="subscribe_dy"><span>我的订阅</span></div>
                <ul class="subscribeLists">
                    <router-link :to="urlDetail+data.id" v-for="data in subArray"
                                 v-if="subArray.length>0||data.issubscribe==1">
                        <li class="subscribeList">
                            <img class="timing" :src="data.icon" alt="">
                            <div>
                                <h3 class="subMarTop">{{data.title}}</h3>
                                <p>每天{{data.remindtime}}提醒</p>
                            </div>
                         <img  class="details" src="../images/me_jt.png"/>
                        </li>
                    </router-link>
                </ul>
                <div class="noSubscribe" v-if="subArray.length<=0">你暂时还没有任何订阅哦~</div>
            </div>
            <div v-if="isTrue">
                <div class="subscribe_tj"><span>订阅推荐</span></div>
                <ul class="subscribeLists">
                    <router-link :to="url+data.id" v-for="data in dataArray" v-if="data.issubscribe==0">
                        <li class="subscribeList subscribeHeight">
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
        </div>
    </div>
</template>
<script type="text/javascript">

    var subscribe = {
        template: '#subscribe'
    }
    export default {
        data() {
            return {
                dataArray: [],
                url: '/me/subscribe/subscribeList/',
                description: '',
                urlDetail: '/me/subscribe/subscribeDetail/',
                subArray: [],
                isTrue:false
            }
        },
        props: [
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
                for(var i=0 ;i<dataArray.length;i++){

                    if(dataArray[i].issubscribe==0){
                        _this.isTrue=true;
                    }
                }
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
        methods: {
            subText: function (text) {
                var len = 12;
                if (text.length > len) {
                    text = text.substr(0, len) + '...';
                }
                return text;
            }
        },
        mounted: function () {
            var subtabsSwiper = new Swiper('.swiper-container', {
                speed: 500,
                onSlideChangeStart: function () {
                    $(".subtabs .active").removeClass('active');
                    $(".subtabs a").eq(subtabsSwiper.activeIndex).addClass('active');
                }
            });
            $(".subtabs a").on('touchstart mousedown', function (e) {
                e.preventDefault()
                $(".subtabs .active").removeClass('active');
                $(this).addClass('active');
                subtabsSwiper.slideTo($(this).index());
            });

            $(".subtabs a").click(function (e) {
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
    .subscribe_tj {
        height: 1px;
        border-top: 1px solid #cccccc;
        text-align: center;
        width: 238.5px;
        margin-bottom: 25px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
    .subscribe_dy {
        height: 1px;
        border-top: 1px solid #cccccc;
        text-align: center;
        width: 238.5px;
        margin-bottom: 25px;
        margin-left: auto;
        margin-right: auto;
        position: relative;
    }
    .subscribe_dy span{
        position: absolute;
        top: -15px;
        background: #f4f4f8;
        padding: 0 13px;
        color: #999;
        font-size: 16px;
        left: 50%;
        margin-left: -45px;
    }

    .subscribe_tj span {
        position: absolute;
        top: -15px;
        background: #f4f4f8;
        padding: 0 13px;
        color: #999;
        font-size: 16px;
        left: 50%;
        margin-left: -45px;
    }
    .details{
        float: right;
        height: 12.5px;
        margin-top: 15px;
        margin-right:15px;
    }
    .subscribe_box {
        width: 100%;
        height: 100%;
    }

    .subtabs {
        height: 37px;
        background: #fff;
        padding: 15px;
        border-bottom: 1px solid #eee
    }

    .tabHeader {
        height: 37px;
        background: #ebebeb;
        border-radius: 5px;
        padding: 0 2px
    }

    .subtabs a {
        display: block;
        float: left;
        width: 50%;
        color: #bcbcbc;
        text-align: center;
        line-height: 33px;
        height: 33px;
        font-size: 14px;
        text-decoration: none;
        border-radius: 4px;
        margin: 2px 0;
        font-family: PingFangSC-Regular
    }

    .subtabs a.active {
        color: #333;
        position: relative;
        background: #fff;
        font-size: 15px;
        font-family: PingFangSC-Medium
    }

    .subscribeLists {
            margin-bottom: 43px;
    }

    .subscribeList {
        height: 64px;
        border-radius: 7.5px;
        color: #999;
        padding-top: 15px;
        width: 91.3%;
        margin: 14px auto;
        background-color: #ffffff;

    }

    .subscribeHeight {
        height: 76px;
    }

    .subscribeList div {
        float: left;
        margin-left: 20px;
    }

    .subscribeList h3 {
        font-size: 16px;
        color: #666;
        font-weight: bold;
        line-height: 16px;
        margin-bottom: 9px;
        text-align: left;
    }

    .subscribeList p {
        font-size: 13px;
        line-height: 16px;
        margin-bottom: 13px;
        height: 16px;
        text-align: left;
    }

    .subscribeList span {
        font-size: 11px;
        line-height: 11px;
        display: block;
        text-align: left;
    }

    .addSubscribe {
        float: right;
        width: 37px;
        height: 33px;
        margin-top: 14px;
        margin-right: 15px;
    }

    .moodCount_box {
        width: 100%;
        height: auto;
        margin-top: 25px
    }

    .timing {
        width: 44px;
        display: block;
        float: left;
        margin-left: 15px;
    }

    .subMarTop {
        margin-top: 5px;
    }

    .noSubscribe {
        font-size: 15px;
        color: #333;
        margin-top: 50%;
        text-align: center;
    }
</style>


