<template >
    <div style="height: 100%"  class="more_box wbg" >
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div v-title>健康测试</div>
        <v-tab  tab="more"></v-tab>
        <div class="box_content">
            <div class="banner swiper-container  swiper_banner">
                <div class="swiper-wrapper">
                    <div class="sw swiper-slide">
                    <a class="item" @click="luck()">
                        <div class="img">
                            <img src="../images/luck/lucky.png">
                        </div>
                        <div class="title"></div>

                    </a>
                    </div>

                    <div class="sw swiper-slide">
                        <a class="item" href="http://mp.weixin.qq.com/s/S8zNN8Mvzl6dG0HfUrMyaw">
                            <div class="img">
                                <img src="../images/more_banner2.jpg">
                            </div>

                        </a>
                    </div>



                    <div class="sw swiper-slide" v-for="item in bannerTest">
                        <router-link :to="{ path: '/psychtestDetail', query: { testId: item.id}}">
                        <img :src="item.banner_pic">
                        <div class="title"></div>
                        <div class="sub_title"></div>
                        </router-link>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="new_add_test test_box">
                <div class="title">
                    <div class="left_icon"></div>
                    <div class="n"><span>新品</span>首发</div>
                </div>
                <div class="sub_title">用新的视角遇见更好的自己</div>
                <div class="list swiper-container new_swiper">
                    <div class="swiper-wrapper">
                        <div class="item swiper-slide" v-for="item in newTest">
                            <router-link :to="{ path: '/psychtestDetail', query: { testId: item.id}}">
                                <div class="img">
                                    <img :src="item.pic+'?x-oss-process=image/resize,m_fill,h_200,w_200'">
                                    <div class="time">{{item.count}}人测过</div>
                                </div>
                                <div class="t">{{(item.title)}}</div>
                                <div class="price">¥{{formatPrice(item.price)}}</div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pre_sell_test test_box">
                <div class="title">
                    <div class="left_icon"></div>
                    <div class="n"><span>探索营</span></div>
                </div>
                <div class="sub_title">主动探索未知的自己</div>
                <div class="list swiper-container pre_swiper">
                    <div class="swiper-wrapper">
                        <div class="item swiper-slide" v-for="item in wantTest">
                            <router-link :to="{ path: '/psychtestDetail', query: { testId: item.id}}">
                                <div class="img">
                                    <img :src="item.pic+'?x-oss-process=image/resize,m_fill,h_200,w_200'">
                                    <div class="time">{{item.wantCount}}人想测</div>
                                </div>
                                <div class="t">{{(item.title)}}</div>
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
                            <div class="right"><img :src="item.pic+'?x-oss-process=image/resize,m_fill,h_200,w_200'"></div>
                            <div class="left">
                                <div class="tc">
                                    <div class="t">{{item.title}}</div>
                                    <div class="sub_t">{{item.sub_title}}</div>
                                </div>
                                <div class="price">¥{{formatPrice(item.price)}}<span>¥{{formatPrice(item.old_price)}}</span></div>
                                <div class="done_count">{{item.count}}人已测</div>
                            </div>

                            <div class="clear"></div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script type="es6">
    import showLoad from './showLoad.vue';
    import tab from './lib/tab.vue';

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
            'v-showLoad': showLoad,
            'v-tab': tab
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
                    pagination : '.swiper-pagination',
                    autoplay:5000,
                    onSlideChangeEnd: function(swiper){
                         $(".more_box .banner .wait div").removeClass("on").each(function (i) {
                            if(swiper.activeIndex==i){
                                $(this).addClass("on");
                            }
                        })
                    }

                });


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
                       let h=0;
                       $(".new_add_test .item .t").each(function (i) {
                           if($(this).height()>h){
                               h=$(this).height();
                           }
                       });
                       $(".new_add_test .item .t").height(h)
                       h=0;
                       $(".pre_sell_test  .item .t").each(function (i) {
                           if($(this).height()>h){
                               h=$(this).height();
                           }
                       });
                       $(".pre_sell_test  .item .t").height(h)


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
            xqzs.wx.setConfig(this,false,xqzs.wx.shareConfig.more);
            xqzs.localdb.set(xqzs.localdb.keys.MORE_HOT_POINT_CLICKED_KEY,true);

            this.$nextTick(function () {
                $(".box_content").height($(document).height()-xqzs.equipment.tabHeight()-2)
            })

        },

    }


</script>
<style>
    .more_box{ background: #fff !important}
    .box_content{ overflow-y: scroll}
    .more_box .banner{  color:#fff; width: 100%; height: 11.8rem; overflow: hidden; position: relative}
    .more_box .banner .title{  color:#fff;  font-size: 0.88235rem; font-weight: bold; position: absolute; bottom:2.6rem; left:0.88235rem;  z-index: 3}
    .more_box .banner .sub_title{position: absolute;color:#fff; bottom:1.26rem;font-size: 0.7058823529411765rem;left:0.88235rem;;  z-index: 3 }
    .more_box .banner .wait{ height:0.1764705882352941rem; width: 100%; background: rgba(0,0,0,0.1) ; position: absolute; bottom:0 ; left:0 ; z-index: 100;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;}
    .more_box .banner .wait div{ height:0.1764705882352941rem;      -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1; }
    .more_box .banner .wait div.on{ background: rgba(0, 248, 0, 0.6)
    }

    .swiper-pagination-bullet-active{ background:  rgba(0, 248, 0, 0.6)}
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        bottom: 4px;
    }

    .more_box .banner .sw{ position: relative; height: 100%}
    .more_box .banner .sw img{ width: 100%}
    .more_box .test_box{ border-bottom: #f1f1f1 solid  0.5882352941176471rem;}
    .more_box .test_box .title{ font-size: 1.058823529411765rem; font-weight: bold;  color:#333; line-height: 1 ; padding-top: 0.88235rem ; letter-spacing: 1px}
    .more_box .new_add_test .title span{ color:#DB0000;}


    .more_box .test_box .img:before{ height: 26%; width: 100%; position: absolute; bottom:0; left:0 ; z-index: 2 ; content:  ' ';
        background-image:-webkit-linear-gradient(to top, rgba(0,0,0,0.1),  rgba(0,0,0,0)); background-image:linear-gradient(to top,rgba(0,0,0,0.2),  rgba(0,0,0,0));

    }
    .more_box .test_box .sub_title{ color:#999; font-size:0.5882352941176471rem; margin-left: 0.88235rem; margin-top: 0.4rem; }
    .more_box .test_box .title .left_icon{ height:0.9117647058823529rem; width: 0.3823529411764706rem; background: #DB0000; float:left; margin-top: 0.05rem; margin-right: 0.4rem; position: relative }
    .more_box .test_box .title .left_icon:before{ content: ' '; display: block;   width: 0;
        height: 0;
        border-bottom: 0.9117647058823529rem solid #fff;
        border-left:  0.1rem solid transparent; position: absolute; bottom:0 ; right:0}
    .more_box .pre_sell_test .title span{ color:#00B400;}
    .more_box .pre_sell_test .title .left_icon{   background: #00B400;  }


    .more_box .test_box  .list{ padding: 0.88235rem; padding-bottom: 0.3rem;   }
    .more_box .test_box  .item{  padding-bottom: 0.5rem; margin-right: 0.2rem;}
    .more_box .test_box  .item .img{ height:6.176470588235294rem; width: 6.176470588235294rem; border-radius: 6px; overflow: hidden; position: relative}
    .more_box .test_box  .item .img img{ min-height: 100%; min-width: 100%; max-width: 100%}
    .more_box .test_box  .item .img .time{ color:#fff; position: absolute; bottom:0.2rem; left:0.5rem; z-index: 3; font-size: 0.5882352941176471rem;}
    .more_box .test_box  .item .t{ color:#555; font-size: 0.7647058823529412rem; margin-top: 0.3rem;  line-height: 1.4em; width: 6.3rem;}
    .more_box .test_box  .item .price{ color:#FF6600;font-size: 0.7647058823529412rem; }

    .more_box   .hot_test .title{ font-size: 1.058823529411765rem; color:#555;padding-left: 0.88235rem;padding-top: 0.88235rem; font-weight: bold;    line-height: 1.2rem;; padding-bottom: 0.8rem}
    .more_box   .hot_test .title:active{ background: #f1f1f1}
    .more_box   .hot_test .item{padding: 0.88235rem 0; padding-right: 0.88235rem  }
    .more_box   .hot_test .list{ padding-bottom: 0.88235rem;    line-height: 1}

    .more_box   .hot_test .list .item{ position: relative ; padding-left: 0.88235rem;
        overflow: hidden;}
    .more_box   .hot_test .list .item:active{ background: #f1f1f1}
    .more_box .hot_test .list .item:after{content:' '; height:  1px; width:100%; background: #eee; display: block; position: absolute; bottom:0; left:0.88235rem; }
    .more_box   .hot_test .list .left{  position: relative}
    .more_box   .hot_test .list .left  .tc{ height: 3.3rem}
    .more_box   .hot_test .list .right{ width:5.294117647058824rem; float:right;height:5.294117647058824rem;border-radius: 3px; overflow: hidden; margin-left: 0.4rem; }
    .more_box   .hot_test .list .right img{height: 100%;min-width: 100%; }
    .more_box   .hot_test .list .t{ font-size: 0.8235294117647059rem; color:#555; line-height: 1.235294117647059rem; font-weight: bold}
    .more_box   .hot_test .list .sub_t{font-size: 0.7058823529411765rem; color:#999; margin-top: 0.3rem;}
    .more_box   .hot_test .list .price{ color:#FF6600;;font-size: 0.7647058823529412rem; margin-top: 1rem;}
    .more_box   .hot_test .list .price span{color:#999; font-size: 0.6470588235294118rem; text-decoration:line-through; margin-left: 0.3rem; font-weight: normal }
    .more_box   .hot_test .list  .done_count{ color:#999; font-size: 0.6470588235294118rem; position: absolute; right:6rem;;  bottom:0rem; }
    .more_box .more_test{ font-size:0.7647058823529412rem; ; font-weight:  normal; color:#999; float:right; margin-right: 0.88235rem;}
    .more_box .more_test span{ display: inline-block; float:left;}
    .more_box .more_test:after{ display: inline-block; float:left;content: ' '; background: url(../images/more_more.png) no-repeat; background-size: 0.4117647058823529rem; height: 0.7058823529411765rem; width: 0.4117647058823529rem; margin-top: 0.18rem; margin-left: 0.4rem}


    .clear{ clear:both  }
    .more_box { background: #F4F4F7 }
    /*.list{ padding: 0.735rem 0.588235rem;}*/
    /*.list .item{ background: #fff; display: block; margin-bottom: 0.88235rem; color:#555}*/
    /*.list .item .img img{ width: 100%; height:11.176471rem}*/
    /*.list .item .title{ text-align: left; font-size: 0.88235rem; font-weight: bold; line-height: 1.8rem; margin:  0 0.65235rem;}*/
    /*.list .item .info {  margin-top: 0.3rem ; padding-bottom: 0.6rem;}*/
    /*.list .item .info .left{  float:left; background: url(../images/fire.png) no-repeat; padding-left: 1.1rem; height:1.088235294117647rem; line-height: 1.088235294117647rem; background-size: 0.9411764705882353rem; font-size: 0.7058823529411765rem; color:#999; margin-left: 0.88235rem}*/
    /*.list .item .info .right{ font-size: 0.9411764705882353rem; color:#FE7301; text-align: right; float:right; width: 200px; margin-right: 0.88235rem; line-height: 1}*/
    /*.list .item .info .right span{font-size: 0.70588235rem;color:#666;text-decoration: line-through;margin-left: 0.471rem;}*/

</style>