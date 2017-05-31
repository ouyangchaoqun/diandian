<template id="moodCount">
    <div class="moodCount_bgbox">
        <div class="tabs">
            <a href="#" hidefocus="true" class="active">每周心情指数</a>
            <a href="#" hidefocus="true">每月心情指数</a>
            <a href="#" hidefocus="true">每年心情指数</a>
        </div>
        <div class="swiper-container moodCount_box">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <ul>
                      <li class="countList">
                          <p class="count1">2017年第21周</p>
                          <p class="count2">本周你记录了2天，2天开心，0天不开心</p>
                          <p class="count2">你比88%都开心哦~</p>
                          <img src="../images/goto.jpg" alt="">
                      </li>
                      <li class="countList">
                          <p class="count1">2017年第21周</p>
                          <p class="count2">本周你记录了2天，2天开心，0天不开心</p>
                          <p class="count2">你比88%都开心哦~</p>
                          <img src="../images/goto.jpg" alt="">
                      </li>
                  </ul>
                </div>
                <div class="swiper-slide">
                    <ul>
                        <li class="countList">
                            <p class="count1">2017年第21周</p>
                            <p class="count2">本周你记录了2天，2天开心，0天不开心</p>
                            <p class="count2">你比88%都开心哦~</p>
                            <img src="../images/goto.jpg" alt="">
                        </li>
                        <li class="countList">
                            <p class="count1">2017年第21周</p>
                            <p class="count2">本周你记录了2天，2天开心，0天不开心</p>
                            <p class="count2">你比88%都开心哦~</p>
                            <img src="../images/goto.jpg" alt="">
                        </li>
                    </ul>

                </div>
                <div class="swiper-slide">

                    <ul>
                        <li class="countList">
                            <p class="count1">2017年第21周</p>
                            <p class="count2">本周你记录了2天，2天开心，0天不开心</p>
                            <p class="count2">你比88%都开心哦~</p>
                            <img src="../images/goto.jpg" alt="">
                        </li>
                        <li class="countList">
                            <p class="count1">2017年第21周</p>
                            <p class="count2">本周你记录了2天，2天开心，0天不开心</p>
                            <p class="count2">你比88%都开心哦~</p>
                            <img src="../images/goto.jpg" alt="">
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

            }
        },
        mounted:function () {
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
        }

    }
</script>
<style>
    .moodCount_bgbox{width: 100%;height: 100%;}
    .tabs{height:40px;width: 100%;}
    .tabs a{display:block;float:left;width:33.33%;color:#666666;text-align:center;line-height:40px;font-size:15px;text-decoration:none;}
    .tabs a.active{color:#339900;border-bottom: 3px solid #339900}
    .moodCount_box{width:100%;height:100%;}
    .countList{margin-bottom: 1px;padding:10px 15px;position: relative;background:#ffffff}
    .count1{color:#333333;font-size: 16px;margin-bottom:10px;}
    .count2{color:#a9a9a9;font-size: 12px}
    .countList img{position:absolute;height:20px;width:20px;display:block;right:20px;top:50%; margin-top:-10px;
    }
</style>


