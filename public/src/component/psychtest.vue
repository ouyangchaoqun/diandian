<template id="psychtest">
    <div class="psychtest_box">
        <header>
            <div class="test_active">心理测试</div>
            <div>健康测试</div>
        </header>
        <div class="swiper-container textList_box">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <ul>
                        <li>
                            <h2 class="textList_title">你有爱情恐惧症吗？</h2>
                            <div class="textList_content">爱情就像一场赌博，你越恐惧越得不到幸福。你会因为曾今的伤害而不敢接受新的恋情吗？</div>
                            <div class="textList_info">
                                <span class="textList_cost">免费</span>
                                <span class="textList_count">555人收听过</span>
                            </div>
                            <img class="psychImg" src="../images/psychtext1.jpg" alt="">
                        </li>
                        <li>
                            <h2 class="textList_title">你有爱情恐惧症吗？</h2>
                            <div class="textList_content">爱情就像一场赌博，你越恐惧越得不到幸福。你会因为曾今的伤害而不敢接受新的恋情吗？</div>
                            <div class="textList_info">
                                <span class="textList_cost">免费</span>
                                <span class="textList_count">555人收听过</span>
                            </div>
                            <img class="psychImg" src="../images/psychtext1.jpg" alt="">
                        </li>
                        <li>
                            <h2 class="textList_title">你有爱情恐惧症吗？</h2>
                            <div class="textList_content">爱情就像一场赌博，你越恐惧越得不到幸福。你会因为曾今的伤害而不敢接受新的恋情吗？</div>
                            <div class="textList_info">
                                <span class="textList_cost">免费</span>
                                <span class="textList_count">555人收听过</span>
                            </div>
                            <img class="psychImg" src="../images/psychtext1.jpg" alt="">
                        </li>
                    </ul>
                </div>
                <div class="swiper-slide">
                    <ul>
                        <li>
                            <h2 class="textList_title">你有爱情恐惧症吗？</h2>
                            <div class="textList_content">爱情就像一场赌博，你越恐惧越得不到幸福。你会因为曾今的伤害而不敢接受新的恋情吗？</div>
                            <div class="textList_info">
                                <span class="textList_cost">免费</span>
                                <span class="textList_count">555人收听过</span>
                            </div>
                            <img class="psychImg" src="../images/psychtext1.jpg" alt="">
                        </li>
                        <li>
                            <h2 class="textList_title">你有爱情恐惧症吗？</h2>
                            <div class="textList_content">爱情就像一场赌博，你越恐惧越得不到幸福。你会因为曾今的伤害而不敢接受新的恋情吗？</div>
                            <div class="textList_info">
                                <span class="textList_cost">免费</span>
                                <span class="textList_count">555人收听过</span>
                            </div>
                            <img class="psychImg" src="../images/psychtext1.jpg" alt="">
                        </li>
                        <li>
                            <h2 class="textList_title">你有爱情恐惧症吗？</h2>
                            <div class="textList_content">爱情就像一场赌博，你越恐惧越得不到幸福。你会因为曾今的伤害而不敢接受新的恋情吗？</div>
                            <div class="textList_info">
                                <span class="textList_cost">免费</span>
                                <span class="textList_count">555人收听过</span>
                            </div>
                            <img class="psychImg" src="../images/psychtext1.jpg" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
    var psychtest = {
        template: '#psychtest'
    }
    export default {
        data() {
            return {

            }
        },
        mounted: function () {
            var psychtestSwiper = new Swiper('.textList_box',{
                speed:500,
                onSlideChangeStart: function(){
                    $('header div').removeClass('test_active');
                    $('header div').eq(psychtestSwiper.activeIndex).addClass('test_active');
                    $('.textList_box').css('height','auto')
                },
                onSlideChangeEnd:function () {
                    $('.textList_box').height($('.swiper-slide:eq('+psychtestSwiper.activeIndex+')').outerHeight(true))
                }
            });
            $('header div').on('click',function () {
                $('header div').removeClass('test_active')
                $(this).addClass('test_active')
                psychtestSwiper.slideTo($(this).index());
                $('.textList_box').height($('.swiper-slide:eq('+textList_box.activeIndex+')').outerHeight(true))
            })
        },
        methods: {

        }

    }
</script>
<style>
    .psychtest_box{
        background: #fff;
    }
    header{
        height:44px;
        background: #ECECEC;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;
        line-height: 44px;
        color: #C4C2C2;
        font-size: 15px;
    }
    header div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        height: 42px;
        border-bottom: 2px solid #ECECEC;
    }
    .test_active{
        border-color: #1AAC19;
        background: #fff;
        color: #1AAC19;
    }
    .textList_box li{
        padding:24px 15px;
        border-bottom: 1px solid #eee;
        position: relative;
    }
    .textList_info{
        font-size: 12px;
        line-height: 1;
        height:12px;
    }
    .textList_title{
        color: #333;
        font-size: 16px;
        line-height: 1;
        margin-bottom: 8px;
    }
    .textList_content{
        color: #666;
        font-size: 13px;
        line-height: 18px;
        width: 208px;
        margin-bottom: 12px;
    }

    .textList_cost{
        float: left;
        color: #FF6600;
        margin-right:128px;
    }
    .textList_count{
        float: left;
        color: #000;
    }
    .psychImg{
        width:110px;
        height: 110px;
        display: block;
        position: absolute;
        right:15px;
        top:20px;
    }
</style>


