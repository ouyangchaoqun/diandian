<template id="psychtest">
    <div class="psychtest_box">
        <header>
            <div class="test_active">心理测试</div>
            <div>健康测试</div>
            <div>我的测试</div>
        </header>
        <div class="swiper-container textList_box">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <ul>
                        <li v-for="psyItem in psyLists">
                            <router-link :to="{ path: '/psychtestDetail', query: { testId: psyItem.id}}">
                                <div class="textList_title">{{psyItem.title}}</div>
                                <div class="textList_content">{{psyItem.des}}</div>
                                <div class="textList_info">
                                    <span class="textList_cost">{{psyItem.price}}</span>
                                    <span class="textList_count">{{psyItem.count}}人收听过</span>
                                </div>
                                <img class="psychImg" :src="psyItem.pic" alt="">
                            </router-link>

                        </li>
                    </ul>
                </div>
                <div class="swiper-slide initHeight">
                    <ul>
                        <li v-for="heaItem in heaLists">
                            <router-link :to="{ path: '/psychtestDetail', query: { testId: heaItem.id}}">
                                <div class="textList_title">{{heaItem.title}}</div>
                                <div class="textList_content">{{heaItem.des}}</div>
                                <div class="textList_info">
                                    <span class="textList_cost">{{heaItem.price}}</span>
                                    <span class="textList_count">{{heaItem.count}}人收听过</span>
                                </div>
                                <img class="psychImg" :src="heaItem.pic" alt="">
                            </router-link>

                        </li>
                    </ul>
                </div>
                <div class="swiper-slide initHeight">
                    <ul>
                        <li v-for="heaItem in heaLists">
                            <router-link :to="{ path: '/psychtestDetail', query: { testId: heaItem.id}}">
                                <div class="textList_title">{{heaItem.title}}</div>
                                <div class="textList_content">{{heaItem.des}}</div>
                                <div class="textList_info">
                                    <span class="textList_cost">{{heaItem.price}}</span>
                                    <span class="textList_count">{{heaItem.count}}人收听过</span>
                                </div>
                                <img class="psychImg" :src="heaItem.pic" alt="">
                            </router-link>

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
                psyLists:[],
                heaLists:[]
            }
        },
        mounted: function () {
            this.getTextList();
            this.getHeaLists();
            var psychtestSwiper = new Swiper('.textList_box',{
                speed:500,
                onSlideChangeStart: function(){
                    $('.textList_box .initHeight').removeClass('initHeight');
                    $('header div').removeClass('test_active');
                    $('header div').eq(psychtestSwiper.activeIndex).addClass('test_active');
                    $('.textList_box').css('height','auto')
                },
                onSlideChangeEnd:function () {
                    $('.textList_box').height($('.swiper-slide:eq('+psychtestSwiper.activeIndex+')').outerHeight(true))
                }
            });
            $('header div').on('click',function () {
                $('.textList_box .initHeight').removeClass('initHeight');
                $('header div').removeClass('test_active')
                $(this).addClass('test_active')
                psychtestSwiper.slideTo($(this).index());
                $('.textList_box').height($('.swiper-slide:eq('+psychtestSwiper.activeIndex+')').outerHeight(true))
            });
        },
        methods: {
            getTextList:function () {
                let _this=this;
                _this.$http.get(web.API_PATH+'test/get/list/1/1/10').then(response => {
                    if(response.data.status===1){
                        _this.psyLists = response.data.data
                    }
                }, response => {
                    // error

                });
            },
            getHeaLists:function () {
                let _this=this;
                _this.$http.get(web.API_PATH+'test/get/list/2/1/10').then(response => {
                    if(response.data.status===1){
                        _this.heaLists = response.data.data
                    }
                }, response => {
                    // error

                });
            }
        }

    }
</script>
<style>
    .psychtest_box{
        background: #fff;
    }
    header{
        height:44px;
        background: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;
        line-height: 44px;
        color: #7F7D7D;
        font-size: 15px;
        border-bottom: 1px solid #eee;
    }
    header div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        height: 42px;
    }
    .test_active{
        border-bottom: 2px solid #1AAC19;
        color: #333;
    }
    .textList_box li{
        padding:23px 15px 15px 15px;
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
        margin-bottom: 10px;
    }
    .textList_content{
        color: #666;
        font-size: 13px;
        line-height: 18px;
        width: 208px;
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
    .initHeight{
        height:1px;
    }
    .textList_box li:active{
        background:#ececec;
    }
</style>


