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
                            <router-link class="listStyle" :to="{ path: '/psychtestDetail', query: { testId: psyItem.id}}">
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
                <div class="swiper-slide">
                    <ul>
                        <li v-for="heaItem in heaLists">
                            <router-link class="listStyle" :to="{ path: '/psychtestDetail', query: { testId: heaItem.id}}">
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
                <div class="swiper-slide">
                    <ul v-if="myTestLists">
                        <li v-for="(myTestItem,testIndex) in myTestLists">
                            <div class="listStyle listNoBorder">
                                <div class="textList_title">{{myTestItem.title}}</div>
                                <div class="textList_content">{{myTestItem.des}}</div>
                                <div class="textList_info">
                                    <span class="textList_cost">{{myTestItem.price}}</span>
                                    <span class="textList_count">{{myTestItem.count}}人收听过</span>
                                </div>
                                <img class="psychImg" :src="myTestItem.pic" alt="">
                            </div>
                            <div class="addMeTest">
                                完成时间: {{myTestItem.addTime}}
                                <div class="weui-btn weui-btn_primary addTestBtn" v-if="myTestItem.answerId!=null" @click="seeMyResult(testIndex)">查看报告</div>
                                <div class="weui-btn weui-btn_primary addTestBtn" v-if="myTestItem.answerId==null" @click="finishTest(testIndex)">完成测试</div>
                            </div>
                        </li>
                    </ul>
                    <div class="myTest_no" v-if="!myTestLists">
                        <img src="../images/myTest_no.png" alt="">
                        <div>您还没有相关测试~~</div>
                    </div>
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
                heaLists:[],
                myTestLists:[],
                answerId:'',
                testId:''
            }
        },
        mounted: function () {
            this.getTextList();
            this.getHeaLists();
            this.getMyTestLists();
            var minHeight = $(window).height()-$('header').height();
            $(".swiper-slide").css('height',minHeight)
            console.log(minHeight)
            this.$nextTick(function () {
                var psychtestSwiper = new Swiper('.textList_box',{
                    speed:500,
                    onSlideChangeStart: function(){
                        $('header div').removeClass('test_active');
                        $('header div').eq(psychtestSwiper.activeIndex).addClass('test_active');
                        $('.textList_box').css('height','auto')
                        console.log('触发.........')
                    }
                });
                $('header div').on('click',function () {
                    $('header div').removeClass('test_active')
                    $(this).addClass('test_active')
                    psychtestSwiper.slideTo($(this).index());
                });
            })

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
            },
            getMyTestLists:function () {
                let _this=this;
                var time;
                _this.$http.get(web.API_PATH+'test/get/tested/_userId_').then(response => {
                    console.log(response)
                    if(response.data.status===1){
                        _this.myTestLists = response.data.data;
//                        for(var i=0;i<_this.myTestLists.length;i++){
//                            _this.myTestLists[i].add_time =  xqzs.dateTime.formatDateTime(_this.myTestLists[i].add_time).substring(0,10).replace(/\-/g,'.')
//                        }
                        console.log(_this.myTestLists)
                    }
                }, response => {
                    // error

                });
            },
            seeMyResult:function (index) {
                let _this = this;
                _this.answerId = _this.myTestLists[index].answerId
                _this.$router.push('/testResult?answerId='+_this.answerId)

            },
            finishTest:function (index) {
                let _this = this;
                _this.testId = _this.myTestLists[index].id
                _this.$router.push('/testQuestions?testId='+_this.testId)
            }

        }

    }
</script>
<style>
    header{
        height:2.588rem;
        background: #fff;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        text-align: center;
        line-height: 2.588rem;
        color: #7F7D7D;
        font-size: 0.88235rem;
        border-bottom: 1px solid #eee;
        width:100%;
        position: fixed;
        top:0;
        z-index: 100;
    }
    header div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        height: 2.471rem;
    }
    .test_active{
        border-bottom: 2px solid #1AAC19;
        color: #333;
    }
    .textList_box{
        margin-top: 2.588rem;
        margin-bottom: 10px;
        width:100%;
    }
    .listStyle{
        padding:1.35rem 0.88235rem 0.8235rem 0.88235rem;
        border-bottom: 1px solid #eee;
        position: relative;
        height:6rem;
        display: block;
        background: #fff;
    }
    .textList_info{
        font-size: 0.70588rem;
        line-height: 1.1;
        height:0.70588rem;
        position: absolute;
        bottom:0.8235rem;
        left:0.88235rem;
    }
    .textList_title{
        color: #333;
        font-size: 0.941176rem;
        line-height: 1.1;
        margin-bottom: 0.588235rem;
        width:11.7647rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .textList_content{
        color: #666;
        font-size: 0.7647rem;
        line-height: 1.1rem;
        width: 12.235rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:3;
        -webkit-box-orient:vertical;
    }

    .textList_cost{
        float: left;
        color: #FF6600;
        margin-right:7rem;
    }
    .textList_count{
        float: left;
        color: #000;
    }
    .psychImg{
        width:6.470588rem;
        height: 6.470588rem;
        display: block;
        position: absolute;
        right:0.88235rem;
        top:1.17647rem;
    }
    .listStyle:active{
        background:#ececec;
    }
    .addMeTest{
        height:2.3529rem;
        background: #f4f4f4;
        padding:0 0.88235rem;
        line-height:2.3529rem;
        color: #333;
        font-size: 0.70588rem;
        position: relative;
    }
    .listNoBorder{
        border:0;
    }
    .addTestBtn{
        width:5.88rem;
        height:1.764rem;
        font-size: 0.70588rem;
        position: absolute;
        top:50%;
        margin-top:-0.882rem;
        right:0.88235rem;
        line-height: 1.764rem;
        border-radius: 5px;
    }
    .myTest_no{
        font-size: 14px;
        color: #9D9A9A ;
        text-align: center;
    }
    .myTest_no img{
        display: block;
        height:121px;
        margin:60px auto 25px auto;
    }
    .swiper-slide{ overflow: auto}

</style>


