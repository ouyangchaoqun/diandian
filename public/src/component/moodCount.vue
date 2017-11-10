<template>
    <div class="newMoodCount">
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div v-title>我的心情指数</div>
        <div class="swiper-container newMoodCount_swiper">
            <div class="addBg"></div>
            <div class="top_title">开心值</div>
            <div class="bottom_center"></div>
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in data">
                    <div class="topBox">
                        <div class="top_per">{{formatAverage(item.average)}}</div>
                        <div class="topBox_bg">
                            <div class="per"  :style="'height:'+(item.average||0)*100/9+'%'"></div>
                        </div>
                    </div>
                    <div class="bottomBox">
                        <span>{{item.where}}<font v-if="typeIndex!=0">{{searchTypes[typeIndex]}}</font></span>
                    </div>
                </div>
            </div>
        </div>
        <ul class="countDetail">
            <li  @click="goMyIndex()" :class="{active_index:typeIndex==1}">{{dataDetail.where}}{{searchTypes[typeIndex]}}记录 <span class="color_style">{{dataDetail.countDays||0}}天</span> <div class="btn_go_detail" v-if="typeIndex==1">
                心情日历
            </div></li>
            <li>开心 <span class="color_style">{{dataDetail.happyDay||0}}天</span></li>
            <li>最关注 <span >{{dataDetail.gz||'--'}}</span></li>
            <li>最开心 <span >{{dataDetail.happy||'--'}}</span></li>
        </ul>


        <div class="newMoodCount_class">
            <div><span>年</span></div>
            <div><span class="countClass_active">月</span></div>
            <div><span>周</span></div>
        </div>
    </div>
</template>
<style>


</style>


<script type="text/javascript">
    import showLoad from './showLoad.vue';



    export default {
        data() {
            return {
                data:[],
                classFlg:true,
                page:1,
                typeIndex:1,
                dataDetail:{},
                lastIndex:null,
                mySwiper:null,
                loading:false,
                searchTypes:['年','月','周'],
                showLoad: false
            }
        },
        components: {
            'v-showLoad': showLoad
        },
        mounted: function () {
            let _this = this;
            _this.getData(_this.typeIndex);
            _this.initBottomAction();
            xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.center);


        },
        methods: {
            goMyIndex:function () {
                if(this.typeIndex==1){
                    let parm = '';
                    if (this.typeIndex == 1&&this.dataDetail) {

                        let countDate = new Date();
                        let _countMonth =countDate.getMonth();
                        if(this.dataDetail.where<_countMonth-3){
                            parm = "";
                        }else{
                            parm = "&month="+ this.dataDetail.where

                        }
                    }else{

                    }
                    this.$router.push('/myCenter/myIndex?activeIndex=1'+parm);
                }
            },
            initBottomAction:function () {
              let _this=this;
                $('.newMoodCount_class div').on('click',function () {
                    $('.newMoodCount_class span').removeClass('countClass_active');
                    $(this).find('span').addClass('countClass_active');
                    _this.typeIndex = $(this).index();
                    _this.page =1;
                    _this.mySwiper.destroy();
                    _this.getData(_this.typeIndex)
                })

            },
            formatAverage:function (v) {
              return xqzs.toDecimal1(v);
            },
            getData:function (index) {
                let _this = this;
                let countDate = new Date();
                let _countYear = countDate.getFullYear();
                let _countMonth =countDate.getMonth();
                let _countWeek = now_week-1;
                let countType = [
                    {year:_countYear},
                    {year:_countYear,month:_countMonth},
                    {year:_countYear,week:_countWeek}
                ];
                //屏蔽加载中继续加载
                if(this.loading){
                    return ;
                }
                _this.loading=true;
                _this.showLoad=true;
                _this.$http.get(web.API_PATH+'mood/get/user/statistics/info/_userId_/5/'+_this.page,{params:countType[_this.typeIndex]})
                    .then(function (json) {
                        _this.loading=false;
                        _this.showLoad=false;
                        if(_this.page==1){
                            //第一页则直接赋值
                            _this.data = json.data.data.reverse();
                            _this.lastIndex =  _this.data.length
                        }else{
                            _this.lastIndex = json.data.data.reverse().length;
                            _this.data = json.data.data.concat(_this.data);
                        }
                        _this.$nextTick(() => {
                            setTimeout(function () {
                                if(_this.page==1){
                                    _this.initSwiper()
                                }else {
                                    console.log(_this.lastIndex);
                                    _this.mySwiper.update();
                                   setTimeout(function () {
                                       _this.mySwiper.slideTo(_this.lastIndex, 0, false);
                                   },10);
                                    _this.detail(_this.lastIndex)
                                }
                                _this.page++;
                            },10)
                        })

                    })
            },
            initSwiper:function () {
                let _this = this;
                _this.mySwiper = new Swiper('.newMoodCount_swiper',{
                    slidesPerView :5,
                    centeredSlides: true,
                    initialSlide:_this.lastIndex,
                    onSlideChangeEnd: function(swiper){
                        console.log("onSlideChangeEnd")
                        $(".swiper-slide span").removeClass('bg_active')
                        _this.detail(swiper.activeIndex);
                        if(swiper.activeIndex==0){
                            _this.getData(_this.typeIndex)
                        }
                        console.log("------------------------------")

                    },
                    onTap: function(swiper){
                        console.log("onTap")
                        $(".swiper-slide span").removeClass('bg_active')
                        swiper.slideTo(swiper.clickedIndex, 600, false);
                        _this.detail(swiper.activeIndex)
                        if(swiper.activeIndex==0){
                            _this.getData(_this.typeIndex)
                        }
                    } ,
                    onSliderMove: function(swiper, event){
                        console.log("onSliderMove")
                    },
                    onTransitionEnd: function(swiper){
                        console.log("onTransitionEnd")
                    }

                })
                //mySwiper.update()

            },
            detail:function (index) {
                let _this = this;
                $(".swiper-slide span:eq("+(index)+")").addClass('bg_active');
                _this.dataDetail = _this.data[index];
                _this.dataDetail.gz = xqzs.mood.moodScenes[_this.dataDetail.follow_scenes];
                _this.dataDetail.happy = xqzs.mood.moodScenes[_this.dataDetail.happy_scenes];
            }

        },
        created:function () {

        }

    }


</script>

<style>
    .newMoodCount_swiper{background: linear-gradient(to bottom, rgba(24,188,132,1), rgba(20,151,160,1)); height: 17.4176471rem;}
    .newMoodCount_swiper .top_title{font-size: 0.70588rem;color:rgba(255,255,255,0.5);position: absolute;right:0.70588rem;top:0.70588rem;}
    .newMoodCount_swiper .addBg{height:3.1176471rem;width:100%;position: absolute;bottom:0;background: #0D7D7F}
    .bottom_center{width:0.5rem;height:0.5rem;background: #fff;transform:rotate(45deg);position: absolute;bottom:-0.25rem;left:50%;margin-left: -0.25rem;z-index: 3}
    .newMoodCount_swiper .swiper-slide{text-align: center;}
    .newMoodCount_swiper .swiper-slide .bottomBox{background: #0D7D7F;height: 3.1176471rem;line-height: 3.1176471rem;color:rgba(81,226,223,1);font-size: 0.8235294117647059rem;}
    .newMoodCount_swiper .swiper-slide .bottomBox span{width:2.0588rem;height:2.0588rem;border-radius: 50%;display: inline-block;line-height: 2.0588rem;}
    .newMoodCount_swiper .swiper-slide .bottomBox .bg_active{background: rgba(5,69,70,1);color:#fff;}
    .newMoodCount_swiper .topBox{height:11.5rem;padding-top: 2.8rem;position: relative}
    .newMoodCount_swiper .topBox_bg{height:10.9rem;border-radius: 0.5rem;background: rgba(229,229,229,0.2);width:0.88235rem;margin:0 auto;position: relative}
    .newMoodCount_swiper .top_per{position: absolute;top:1.6rem;font-size: 0.76471rem;color:rgba(255,255,255,1);text-align: center;width:100%;}
    .newMoodCount_swiper .per{background: rgba(155,255,252,1);border-radius: 0.5rem;width:100%;height:0;position: absolute;bottom:0}
    .newMoodCount_class{
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;width:80%;padding:0 10%; margin-bottom: 1.7rem; margin-top: 1.7rem;}
    .newMoodCount_class div{flex:1; -webkit-box-flex: 1;
        -webkit-flex: 1;}
    .newMoodCount_class div .countClass_active{background:#09BB07}
    .newMoodCount_class div:nth-of-type(2){flex:2}
    .newMoodCount_class span{width:2.35rem;height:2.35rem;border-radius: 50%;background: #ccc;color:#fff;font-size: 1.0588235rem;line-height: 2.35rem;text-align: center;display: block;margin:0 auto}
    .countDetail li{height:3.0588rem;line-height: 3.0588rem;background: #fff;padding:0 1.6471rem 0 1.471rem;border-bottom: 1px solid #E5E5E5;font-size: 0.941176471rem;color:#333;}
    .countDetail li span{float: right;color:#999}
    .countDetail li .color_style{color:#FC9B02}
    .btn_go_detail{
        height: 1.6rem;
        line-height:  1.6rem !important;
        color: #09BB07;
        font-size: 0.8rem;
        text-align: center;
        border: 1px solid #09BB07;
        border-radius: 0.9rem;
        display: inline-block;
        padding:0 0.6rem; margin-left: 0.5rem;
     }
    .countDetail .active_index:active   .btn_go_detail{ border: 1px solid #099107;color: #099107;}

</style>

