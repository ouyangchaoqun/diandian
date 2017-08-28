<template id="moodCount">
    <div class="moodCount_bgbox">
        <div v-title>我的心情指数</div>
        <div class="tabs">
            <a href="#" hidefocus="true" class="active">每周心情指数</a>
            <a href="#" hidefocus="true">每月心情指数</a>
            <a href="#" hidefocus="true">每年心情指数</a>
        </div>
        <div class="swiper-container moodCount_box">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <ul>
                      <li class="countList" v-for="week in weeks">
                          <p class="count1">{{week.year}}年第{{week.week}}周</p>
                          <p class="count2">本周你记录了{{week.allDay}}天，{{week.happyDay}}天开心，{{week.unHappyDay}}天不开心</p>
                          <p class="count2">你比{{week.comparison}}%都开心哦~</p>
                          <img src="../images/me_jt.png" alt="">
                      </li>
                  </ul>
                </div>
                <div class="swiper-slide">
                    <ul>


                        <li class="countList" v-for="month in months">
                            <router-link  :to="{ path: '/moodCountPie', query: { year: month.year,month: month.month}}" >
                                <p class="count1">{{month.year}}年第{{month.month}}月</p>
                                <p class="count2">本月你记录了{{month.allDay}}天，{{month.happyDay}}天开心，{{month.unHappyDay}}天不开心</p>
                                <p class="count2">你比{{month.comparison}}%都开心哦~</p>
                                <img src="../images/me_jt.png" alt="">
                            </router-link>
                        </li>

                    </ul>

                </div>
                <div class="swiper-slide">

                    <ul>
                        <li class="countList" v-for="year in years">
                            <p class="count1">{{year.year}}年</p>
                            <p class="count2">本年你记录了{{year.allDay}}天，{{year.happyDay}}天开心，{{year.unHappyDay}}天不开心</p>
                            <p class="count2">你比{{year.comparison}}%都开心哦~</p>
                            <img src="../images/me_jt.png" alt="">
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

    var moodCount={
        template:'#moodCount'
    }
    export default {
        data() {
            return {
                weeks:[],
                months:[],
                years:[]
            }
        },
        mounted:function () {
            let _this=this;
            _this.$http.get(web.API_PATH+'mood/query/statistics/weeks/_userId_').then(response => {
                if(response.data.status===1){
                    _this.weeks=response.data.data;
                    for(let i=0;i<_this.weeks.length;i++){
                        _this.weeks[i].comparison = xqzs.toDecimal(_this.weeks[i].comparison*100);
                        _this.weeks[i].allDay = parseInt(_this.weeks[i].happyDay ) + parseInt(_this.weeks[i].unHappyDay ) ;
                        _this.$set(_this.weeks,i,_this.weeks[i]);
                    }
                }
            }, response => {
                // error
            });


            _this.$http.get(web.API_PATH+'mood/query/statistics/months/_userId_').then(response => {
                if(response.data.status===1){
                    _this.months=response.data.data;
                    for(let i=0;i<_this.months.length;i++){
                        _this.months[i].comparison = xqzs.toDecimal(_this.months[i].comparison*100);
                        _this.months[i].allDay = parseInt(_this.months[i].happyDay ) + parseInt(_this.months[i].unHappyDay ) ;
                        _this.$set(_this.months,i,_this.months[i]);
                    }
                }
            }, response => {
                // error
            });


            _this.$http.get(web.API_PATH+'mood/query/statistics/years/_userId_').then(response => {
                if(response.data.status===1){
                    _this.years=response.data.data;
                    for(let i=0;i<_this.years.length;i++){
                        _this.years[i].comparison = xqzs.toDecimal(_this.years[i].comparison*100);
                        _this.years[i].allDay = parseInt(_this.years[i].happyDay ) + parseInt(_this.years[i].unHappyDay ) ;
                        _this.$set(_this.years,i,_this.years[i]);
                    }
                }
            }, response => {
                // error
            });
            var tabsSwiper = new Swiper('.swiper-container',{
                speed:500,
                onSlideChangeStart: function(){
                    $(".tabs .active").removeClass('active');
                    $(".tabs a").eq(tabsSwiper.activeIndex).addClass('active');
                }
            });
            $(".tabs a").on('touchstart mousedown',function(e){
                e.preventDefault()
                $(".tabs .active").removeClass('active');
                $(this).addClass('active');
                tabsSwiper.slideTo($(this).index());
            });

            $(".tabs a").click(function(e){
                e.preventDefault();
            });
            xqzs.wx.setConfig(_this);
        }

    }
</script>
<style>
    .moodCount_bgbox{width: 100%;height: 100%;background: #ffffff !important;}
    .tabs{height:45px;width: 100%;background:#f8f8f8;border-bottom: 1px solid #e5e5e5}
    .tabs a{display:block;float:left;width:33.33%;color:#666666;text-align:center;line-height:46px;font-size:15px;text-decoration:none;}
    .tabs a.active{color:#339900;position: relative}
    .tabs a.active:after{ content: " "; height: 2px ;overflow: hidden; width: 100%; display: block; position: absolute; background: #339900; bottom:0;left:0}
   /* .moodCount_box{width:100%;height:100%;}*/
    .countList{border-bottom:1px solid #eeeeee;padding:10px 15px;position: relative;background:#ffffff}
    .count1{color:#333333;font-size: 15px;margin-bottom:10px;}
    .count2{color:#a9a9a9;font-size: 15px}
    .countList img{position:absolute;height:20px;width:20px;display:block;right:10px;top:50%; margin-top:-10px;
    }
</style>


