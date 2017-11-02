<template >
    <div style="height: 100%"  class="more_box wbg" >
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div v-title>发现</div>
        <div class="banner swiper-container  swiper_banner">
            <div class="swiper-wrapper">
                <div class="sw swiper-slide">
                <a class="item" @click="luck()">
                    <div class="img">
                        <img src="../images/luck/lucky.png">
                    </div>
                    <div class="title">十一月星座运势已新鲜出炉，测一测你的运势!</div>
                    <div class="info">
                        <div class="left">20w+人已测</div>
                        <div class="right">免费</div>
                        <div class="clear"></div>
                    </div>
                </a>
                </div>
                <div class="sw swiper-slide" v-for="item in bannerTest">
                    <router-link :to="{ path: '/psychtestDetail', query: { testId: item.id}}">
                    <img :src="item.banner_pic">
                    <div class="title">{{item.title}}</div>
                    <div class="sub_title">{{item.sub_title}}</div>
                    </router-link>
                </div>
            </div>
            <div class="wait"><div ></div></div>
        </div>
        <div class="new_add_test test_box">
            <div class="title">
                <div class="left_icon"></div>
                <div class="n"><span>新品</span>发布</div>
            </div>
            <div class="sub_title">用新的视角遇见更好的自己</div>
            <div class="list swiper-container new_swiper">
                <div class="swiper-wrapper">
                    <div class="item swiper-slide" v-for="item in newTest">
                        <router-link :to="{ path: '/psychtestDetail', query: { testId: item.id}}">
                            <div class="img">
                                <img :src="item.pic">
                                <div class="time">{{formatTime(item.add_time)}}</div>
                            </div>
                            <div class="t">{{leftTitle(item.title)}}</div>
                            <div class="price">¥{{formatPrice(item.price)}}</div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="pre_sell_test test_box">
            <div class="title">
                <div class="left_icon"></div>
                <div class="n"><span>预售</span>评测</div>
            </div>
            <div class="sub_title">用新的视角遇见更好的自己</div>
            <div class="list swiper-container pre_swiper">
                <div class="swiper-wrapper">
                    <div class="item swiper-slide" v-for="item in wantTest">
                        <router-link :to="{ path: '/psychtestDetail', query: { testId: item.id}}">
                            <div class="img">
                                <img :src="item.pic">
                                <div class="time">{{item.count}}想测</div>
                            </div>
                            <div class="t">{{leftTitle(item.title)}}</div>
                            <div class="price">¥{{formatPrice(item.price)}}</div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="hot_test">
            <div class="title" @click="goTestList()">精选评测 <div class="more_test"><span>更多</span></div></div>
            <div class="list">
                <div class="item"  v-for="item in featureTest">
                    <router-link :to="{ path: '/psychtestDetail', query: { testId: item.id}}">
                        <div class="left">
                            <div class="t">{{item.title}}</div>
                            <div class="sub_t">{{item.sub_title}}</div>
                            <div class="price">¥{{formatPrice(item.price)}}<span>¥{{formatPrice(item.old_price)}}</span></div>
                            <div class="done_count">{{item.count}}人已测</div>
                        </div>
                        <div class="right"><img :src="item.pic"></div>
                        <div class="clear"></div>
                    </router-link>
                </div>
            </div>
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
                showLoad: false,
                mySwiperNew:null,
                mySwiperPre:null,
                mySwiperBanner:null,
                bannerTest:null,
                featureTest:null,
                newTest:null,
                wantTest:null,


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
            goTestList:function () {
                this.$router.push("/test/list")
            },
            formatPrice:function (v) {
               return xqzs.string.formatPrice(v);
            },
            leftTitle:function (v) {
                return xqzs.shortname(v,7)
            },
            formatTime:function (v) {
               return xqzs.dateTime.formatDate(v)
            },
            initWaitAction:function () {
                $(".more_box .banner .wait div").width(0).animate({"width":"0"},0,function () {
                    $(".more_box .banner .wait div").animate({"width":"100%"},5000)
                })
            },
            initSwippers:function () {
                let _this= this;
                _this.mySwiperBanner = new Swiper('.swiper_banner',{
                    slidesPerView :1,
                    autoplay:5000,
                    onSlideChangeStart: function(swiper){
                       _this.initWaitAction()
                    }

                });
                 _this.initWaitAction()

                _this.mySwiperPre = new Swiper('.pre_swiper',{
                    slidesPerView :3,
                })
                _this.mySwiperBanner = new Swiper('.new_swiper',{
                    slidesPerView :3,
                })
            },

            getTextList:function () {
                let _this=this;
                _this.showLoad=true;

                _this.$http.get(web.API_PATH+'test/get/home/page/_userId_/6/6/6/6').then(response => {
                    _this.showLoad=false;
                    if(response.data.status===1){
                        _this.bannerTest = response.data.data.banner.rows ;
                        _this.featureTest = response.data.data.feature.rows;
                        _this.newTest =response.data.data.new.rows;
                        _this.wantTest = response.data.data.want.rows
                    }
                   _this.$nextTick(function () {
                       _this.initSwippers();
                   })


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
    .more_box{ background: #fff !important}
    .more_box .banner{  color:#fff; width: 100%; height: 11.8rem; overflow: hidden; position: relative}
    .more_box .banner .title{  color:#fff;  font-size: 0.88235rem; font-weight: bold; position: absolute; bottom:2.6rem; left:0.88235rem;  z-index: 3}
    .more_box .banner .sub_title{position: absolute;color:#fff; bottom:1.26rem;font-size: 0.7058823529411765rem;left:0.88235rem;;  z-index: 3 }
    .more_box .banner .wait{ height:0.1764705882352941rem; width: 100%; background: #ccc ; position: absolute; bottom:0 ; left:0 ; z-index: 100}
    .more_box .banner .wait div{ height:0.1764705882352941rem; width: 0%;  background: #00B400 ;  }

    .more_box .banner .sw a:before{ height: 100%; width: 100%; position: absolute; top:0; left:0 ; z-index: 2 ; content:  ' '; background: rgba(0,0,0,0.2) }
    .more_box .banner .sw{ position: relative; height: 100%}
    .more_box .banner .sw img{ width: 100%}
    .more_box .test_box{ border-bottom: #eee solid  0.5882352941176471rem;}
    .more_box .test_box .title{ font-size: 1.058823529411765rem; font-weight: bold;  color:#333; line-height: 1 ; padding-top: 0.88235rem }
    .more_box .new_add_test .title span{ color:#00B400;}


    .more_box .test_box .img:before{ height: 100%; width: 100%; position: absolute; top:0; left:0 ; z-index: 2 ; content:  ' '; background: rgba(0,0,0,0.2) }
    .more_box .test_box .sub_title{ color:#999; font-size:0.7058823529411765rem; margin-left: 0.88235rem; margin-top: 0.6rem; }
    .more_box .test_box .title .left_icon{ height:0.9117647058823529rem; width: 0.3823529411764706rem; background: #00B400; float:left; margin-top: 0.2rem; margin-right: 0.4rem; position: relative }
    .more_box .test_box .title .left_icon:before{ content: ' '; display: block;   width: 0;
        height: 0;
        border-bottom: 0.9117647058823529rem solid #fff;
        border-left:  0.1rem solid transparent; position: absolute; bottom:0 ; right:0}
    .more_box .pre_sell_test .title span{ color:#DB0000;}
    .more_box .pre_sell_test .title .left_icon{   background: #DB0000;  }


    .more_box .test_box  .list{ padding: 0.88235rem;height: 8.4rem; overflow: hidden}
    .more_box .test_box  .item{  padding-bottom: 0.5rem;}
    .more_box .test_box  .item .img{ height:6.176470588235294rem; width: 6.176470588235294rem; border-radius: 6px; overflow: hidden; position: relative}
    .more_box .test_box  .item .img img{ height: 100%; width: 100%;}
    .more_box .test_box  .item .img .time{ color:#fff; position: absolute; bottom:0.2rem; left:0.2rem; z-index: 3}
    .more_box .test_box  .item .t{ color:#333; font-size: 0.7647058823529412rem; margin-top: 0.3rem;}
    .more_box .test_box  .item .price{ color:#FF6600;font-size: 0.7647058823529412rem;}

    .more_box   .hot_test .title{ font-size: 1.058823529411765rem; color:#333;padding-left: 0.88235rem;padding-top: 0.88235rem; font-weight: bold;    line-height: 1.2rem;; padding-bottom: 0.8rem}
    .more_box   .hot_test .title:active{ background: #f1f1f1}
    .more_box   .hot_test .item{ padding: 0.88235rem;}
    .more_box   .hot_test .list{ padding: 0;   line-height: 1}
    .more_box   .hot_test .item:first-child{ padding-top: 0.2rem;}

    .more_box   .hot_test .list .item{ border-bottom: 1px solid #eee}
    .more_box   .hot_test .list .left{ width: 13.5rem;float:left; position: relative}
    .more_box   .hot_test .list .right{ width:5.294117647058824rem; float:right; }
    .more_box   .hot_test .list .right img{width:5.294117647058824rem;height:5.294117647058824rem; border-radius: 6px;}
    .more_box   .hot_test .list .t{ font-size: 0.88235rem; color:#333; line-height: 1.4rem; width: 90%;font-weight: bold}
    .more_box   .hot_test .list .sub_t{font-size: 0.7058823529411765rem; color:#999; margin-top: 0.3rem;}
    .more_box   .hot_test .list .price{ color:#FF6600;;font-size: 0.7647058823529412rem; margin-top: 1rem;}
    .more_box   .hot_test .list .price span{color:#999; font-size: 0.6470588235294118rem; text-decoration:line-through; margin-left: 0.3rem }
    .more_box   .hot_test .list  .done_count{ color:#999; font-size: 0.6470588235294118rem; position: absolute; right:0.88235rem;;  bottom:0rem; }
    .more_box .more_test{ font-size:0.7647058823529412rem; ; font-weight:  normal; color:#999; float:right; margin-right: 0.88235rem;}
    .more_box .more_test span{ display: inline-block; float:left;}
    .more_box .more_test:after{ display: inline-block; float:left;content: ' '; background: url(../images/more_more.png) no-repeat; background-size: 0.4117647058823529rem; height: 0.7058823529411765rem; width: 0.4117647058823529rem; margin-top: 0.18rem; margin-left: 0.4rem}


    .clear{ clear:both  }
    .more_box { background: #F4F4F7 }
    /*.list{ padding: 0.735rem 0.588235rem;}*/
    /*.list .item{ background: #fff; display: block; margin-bottom: 0.88235rem; color:#333}*/
    /*.list .item .img img{ width: 100%; height:11.176471rem}*/
    /*.list .item .title{ text-align: left; font-size: 0.88235rem; font-weight: bold; line-height: 1.8rem; margin:  0 0.65235rem;}*/
    /*.list .item .info {  margin-top: 0.3rem ; padding-bottom: 0.6rem;}*/
    /*.list .item .info .left{  float:left; background: url(../images/fire.png) no-repeat; padding-left: 1.1rem; height:1.088235294117647rem; line-height: 1.088235294117647rem; background-size: 0.9411764705882353rem; font-size: 0.7058823529411765rem; color:#999; margin-left: 0.88235rem}*/
    /*.list .item .info .right{ font-size: 0.9411764705882353rem; color:#FE7301; text-align: right; float:right; width: 200px; margin-right: 0.88235rem; line-height: 1}*/
    /*.list .item .info .right span{font-size: 0.70588235rem;color:#666;text-decoration: line-through;margin-left: 0.471rem;}*/

</style>