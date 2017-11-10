<template id="propaganda">
    <div style="height: 100%;font-family: STHeitiSC-Light">
        <div class="swiper-container propagandaBox" style="height: 100%">
            <div class="swiper-wrapper">
                <div class="swiper-slide propagandaPage1">
                    <div class="pagediv page1div">
                        <h3>好一点</h3>
                        <p>随时记录和分享心情</p>
                        <p>让每天都能开心快乐一点</p>
                    </div>
                </div>
                <div class="swiper-slide propagandaPage2">
                    <div class="pagediv page2div">
                        <h3>记录</h3>
                        <p>一个表情、一句话、一张图</p>
                        <p>记录着你的喜怒哀乐</p>
                        <p>建立你的私人心情日历</p>
                    </div>
                </div>
                <div class="swiper-slide propagandaPage3">
                    <div class="pagediv page3div">
                        <h3>分享</h3>
                        <p>以匿名的形式分享心情</p>
                        <p>放下顾虑，放飞自我</p>
                        <p>洗尽铅华，传递快乐</p>
                        <div class="page3divModel">
                            <dl>
                                <dt>
                                    <img src="../images/page3imglist1.png" alt="">
                                </dt>
                                <dd>文字心情</dd>
                            </dl>
                            <dl class="dlBorder" >
                                <dt>
                                    <img src="../images/page3imglist2.png" alt="">
                                </dt>
                                <dd>搞笑图片</dd>
                                <div class="borderLeft"></div>
                                <div class="borderRight"></div>
                            </dl>
                            <dl >
                                <dt>
                                    <img src="../images/page3imglist3.png" alt="">
                                </dt>
                                <dd>精彩照片</dd>
                            </dl>
                        </div>
                        <div class="page3divBottom">
                            <div><img src="../images/page3imglist4.png" alt=""><p>点赞</p></div>
                            <div><img src="../images/page3imglist5.png" alt=""><p>拥抱</p></div>
                            <div><img src="../images/page3imglist6.png" alt=""><p>评论</p></div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide propagandaPage4">
                    <div class="pagediv page2div page4div">
                        <h3>关注</h3>
                        <p>开心Or难过</p>
                        <p class="page4Bottom">一颗爱心赞Or大大的拥抱</p>
                        <p>这样的关怀</p>
                        <p>就像一支强心针让你感动</p>
                    </div>
                </div>
                <div class="swiper-slide propagandaPage5">
                    <div class="page5div">
                        <p>从现在开始</p>
                        <p>记录你最重要的每一刻</p>
                        <p>分享你最幸福的每一刻</p>
                        <p>让心情指数</p>
                        <p>成为你我共同的“羁绊”</p>
                        <div class="page5ewm">
                            <div>关注你我 关注心情</div>
                            <img class="page5img1" src="../images/ewm_top.png" alt="">
                            <img class="page5img2" src="../images/ewm.png" alt="">
                            <span>(长按识别二维码加关注)</span>
                        </div>
                    </div>
                </div>
            </div>
            <img class="propagandaJt" src="../images/propagandaJt.png" alt="">
        </div>
    </div>
</template>
<script>
    var propaganda={
        template:'#propaganda'
    };
    export default {
        data() {
            return {

            }
        },
        mounted:function () {
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            console.log(winWidth)
            $('.swiper-slide').css({'width':winWidth})
            var propagandaSwiper = new Swiper ('.propagandaBox', {
                direction: 'vertical',
                onSlideChangeStart: function (swiper) {
                    //alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
                    var index = swiper.activeIndex;



                    if(index==4){
                        $(".propagandaJt").hide()
                    }else{
                        $(".propagandaJt").show()
                    }

                }
            })

            xqzs.wx.shareConfig.me.link= web.BASE_PATH + '#/me/aboutUs',
            xqzs.wx.setConfig(this,false,xqzs.wx.shareConfig.me);

        }
    }


</script>

<style>
 .propagandaBox .swiper-slide{
     background-size: cover;
     text-align: center;
     position: relative;

 }
 .pagediv{
     margin: 53px auto;
 }
 .page1div{
     color: #333;
 }
 .page2div{
     color: #fff;
 }
 .page3div{
     color: #ccc;
 }
 .page1div h3{
     font-size: 34px;
     line-height: 34px;
     margin-bottom: 25px;
     font-weight: normal;
 }
 .page1div p{
     font-size: 17px;
     line-height: 17px;
     margin-bottom: 10px;
 }
 .page2div h3{
     font-size: 34px;
     line-height: 34px;
     margin-bottom: 17px;
     font-weight: normal;
 }
 .page2div p{
     font-size: 15px;
     line-height: 15px;
     margin-bottom: 11px;
 }
 .page3div h3{
     font-size: 34px;
     line-height: 34px;
     margin-bottom: 17px;
     font-weight: normal;
 }
 .page3div p{
     font-size: 15px;
     line-height: 15px;
     margin-bottom: 11px;
 }

 .page3div dl{
     float: left;
     background: rgba(0,0,0,0);
 }
 .page3divModel{
     display: flex;
     margin:0 auto;
     margin-top: 32px;
     font-size: 12px;
     line-height: 12px;
     width: 240px;
     height:auto;
 }
 .page3divModel dl{
   flex-grow: 1;
 }
 .page3divModel img{
     height: 27px;
     display: block;
     margin:0 auto;
     margin-bottom: 8px;
 }
 .dlBorder{
     position: relative;
 }
 .dlBorder div{
     width: 1px;
     height:90%;
     background: #ccc;
     position: absolute;
     top:-5px;
 }
 .borderLeft{
     left:0;

 }
 .borderRight{
     right:0;
 }
 .page3divBottom{
     margin:0 auto;
     margin-top: 53px;
     width: 270px;
 }
 .page3divBottom img{
     width: 80px;
 }
 .page3divBottom div{
    margin:0 5px;
     float: left;
     position: relative;
 }
 .page3divBottom p{
     font-size: 15px;
     color: #fbf8f8;
     position: absolute;
     top: 15px;
     left: 50%;
     margin-left: -15px;
 }
 .page4div h3{
     margin-bottom: 24px;
 }
 .page4div p{
     margin-bottom: 13px;
 }
 .page4div .page4Bottom{
     margin-bottom: 24px;
 }
 .page5div{
    font-size: 18px;
     color: #333;
     margin:0 auto;
     margin-top: 75px;
     width: 200px;
 }
 .page5div p{
     text-align: left;
 }
 .page5ewm{
     position: absolute;
     bottom:80px;
     left:50%;
     width: 200px;
     margin-left: -100px;
 }
 .page5ewm div{
     font-size: 15px;
     margin-bottom: 10px;
 }
 .page5ewm span{
     font-size: 12px;
 }
 .page5ewm img{
     margin: 0 auto;
     display: block;
 }
 .page5ewm .page5img1{
     width: 18px;
     margin-bottom: 10px;
 }
 .page5ewm .page5img2{
     width: 100px;
     margin-bottom: 8px;
 }

.propagandaPage1{
    background: url("../images/page1.jpg") no-repeat;
}
.propagandaPage2{
    background: url("../images/page2.jpg") no-repeat;
}
.propagandaPage3{
    background: url("../images/page3.jpg") no-repeat;
}
.propagandaPage4{
    background: url("../images/page4.jpg") no-repeat;
}
.propagandaPage5{
    background: url("../images/page5.jpg") no-repeat;
}
 .propagandaJt{
    position: absolute;
    left: 50%;
    z-index: 99;
    width:30px;
    margin-left: -15px;
     animation: jt_top 1s linear infinite;
    }
 @keyframes jt_top
 {
     from {bottom: 20px;}
     to {bottom: 40px;}
 }

</style>