<template id="optionSecond">
    <div class="optionSecond_box">
        <img class="optionjt" src="../images/jt.gif" alt="">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="expLists expage1">
                        <div class="expLists1">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                        </div>
                        <div class="expLists2">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                        </div>
                        <div class="expLists3">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                        </div>
                        <div class="expLists4">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                        </div>
                        <div class="expLists5">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a ></a></div>
                            <div><a></a></div>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide">
                    <div class="expLists expage2">
                        <div class="expLists6">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                        </div>
                        <div class="expLists7">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                        </div>
                        <div class="expLists8">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                        </div>
                        <div class="expLists9">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                        </div>
                        <div class="expLists10">
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a href=""></a></div>
                            <div><a ></a></div>
                            <div><a ></a></div>
                            <div><a ></a></div>
                            <div><a ></a></div>
                            <div><a ></a></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination" id="pagination"></div>
        </div>
       
    </div>
</template>

<script type="text/javascript">

    var optionSecond={
        template:'#optionSecond'
    };
    export default {
        data() {
            return {

            }
        },
        mounted(){
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal',
                pagination: '.swiper-pagination'
            })
        }
    }

</script>
<style>
    html {
        font-size: 10px;
    }

    body ,html{
        font-size: 12px;
    }


    @media only screen and (min-width: 320px) {
        html {
            font-size:10.24px !important;
        }
    }

    @media only screen and (min-width: 481px) {
        html {
            font-size:94%!important
        }
    }

    @media only screen and (min-width: 561px) {
        html {
            font-size:109%!important
        }
    }

    @media only screen and (min-width: 640px) {
        html {
            font-size: 125% !important;
        }
    }

    @media only screen and (min-width: 750px) {
        html {
            font-size: 150% !important;
        }
    }

    @media only screen and (min-width: 1242px) {
        html {
            font-size: 187.5% !important;
        }
    }

    .optionSecond_box{
        position: relative;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 2rem;
    }
    .optionSecond_box .optionjt{
        left:5.8rem;
    }
    .expLists1,.expLists2,.expLists3,.expLists4,.expLists5,.expLists6,.expLists7,.expLists8,.expLists9,.expLists10{
        display: flex;
        margin-bottom: 1rem;
    }
    .expLists1 div,.expLists2 div, .expLists3 div,.expLists4 div,.expLists5 div,.expLists6 div,.expLists7 div,.expLists8 div,.expLists9 div,.expLists10 div{
        flex-grow: 1;
    }
    .expLists a{
        height:2.6rem;
        width:2.6rem;
        display: block;
        background-position: 0 0;
        margin: 0 auto;
    }
    .expage1 a{
        background:url("../images/1.png");
        background-size: cover;
    }
    .expage2 a{
        background: url("../images/2.png");
        background-size: cover;
    }
    .expLists1 div:nth-of-type(2) a{
        background-position: 0 -2.7rem;
    }
    .expLists1 div:nth-of-type(3) a{
        background-position: 0 -5.4rem;
    }
    .expLists1 div:nth-of-type(4) a{
        background-position: 0 -8.2rem;
    }
    .expLists1 div:nth-of-type(5) a{
        background-position: 0 -10.9rem;
    }
    .expLists1 div:nth-of-type(6) a{
        background-position: 0 -13.6rem;
    }
    .expLists1 div:nth-of-type(7) a{
        background-position: 0 -16.4rem;
    }
    .expLists1 div:nth-of-type(8) a{
        background-position: 0 -19rem;
    }
    .expLists1 div:nth-of-type(9) a{
        background-position: 0 -21.8rem;
    }

    .expLists2 div:nth-of-type(1) a{
        background-position: 0 -24.5rem;
    }
    .expLists2 div:nth-of-type(2) a{
        background-position: 0 -27.2rem;
    }
    .expLists2 div:nth-of-type(3) a{
        background-position: 0 -29.9rem;
    }
    .expLists2 div:nth-of-type(4) a{
        background-position: 0 -32.6rem;
    }
    .expLists2 div:nth-of-type(5) a{
        background-position: 0 -35.4rem;
    }
    .expLists2 div:nth-of-type(6) a{
        background-position: 0 -38.2rem;
    }
    .expLists2 div:nth-of-type(7) a{
        background-position: 0 -40.9rem;
    }
    .expLists2 div:nth-of-type(8) a{
        background-position: 0 -43.6rem;
    }
    .expLists2 div:nth-of-type(9) a{
        background-position: 0 -46.3rem;
    }
    .expLists3 div:nth-of-type(1) a{
        background-position: 0 -48.9rem;
    }
    .expLists3 div:nth-of-type(2) a{
        background-position: 0 -51.7rem;
    }
    .expLists3 div:nth-of-type(3) a{
        background-position: 0 -54.4rem;
    }
    .expLists3 div:nth-of-type(4) a{
        background-position: 0 -57.2rem;
    }
    .expLists3 div:nth-of-type(5) a{
        background-position: 0 -59.9rem;
    }
    .expLists3 div:nth-of-type(6) a{
        background-position: 0 -62.6rem;
    }
    .expLists3 div:nth-of-type(7) a{
        background-position: 0 -65.4rem;
    }
    .expLists3 div:nth-of-type(8) a{
        background-position: 0 -67.9rem;
    }
    .expLists3 div:nth-of-type(9) a{
        background-position: 0 -70.7rem;
    }
    .expLists4 div:nth-of-type(1) a{
        background-position: 0 -73.5rem;
    }
    .expLists4 div:nth-of-type(2) a{
        background-position: 0 -76.3rem;
    }
    .expLists4 div:nth-of-type(3) a{
        background-position: 0 -79rem;
    }
    .expLists4 div:nth-of-type(4) a{
        background-position: 0 -81.7rem;
    }
    .expLists4 div:nth-of-type(5) a{
        background-position: 0 -84.5rem;
    }
    .expLists4 div:nth-of-type(6) a{
        background-position: 0 -87.2rem;
    }
    .expLists4 div:nth-of-type(7) a{
        background-position: 0 -89.9rem;
    }
    .expLists4 div:nth-of-type(8) a{
        background-position: 0 -92.7rem;
    }
    .expLists4 div:nth-of-type(9) a{
        background-position: 0 -95.4rem;
    }
    .expLists5 div:nth-of-type(1) a{
        background-position: 0 -98rem;
    }
    .expLists5 div:nth-of-type(2) a{
        background-position: 0 -100.7rem;
    }
    .expLists5 div:nth-of-type(3) a{
        background-position: 0 -103.5rem;
    }
    .expLists5 div:nth-of-type(4) a{
        background-position: 0 -106.2rem;
    }
    .expLists5 div:nth-of-type(5) a{
        background-position: 0 -108.9rem;
    }
    .expLists5 div:nth-of-type(6) a{
        background-position: 0 -111.6rem;
    }
    .expLists5 div:nth-of-type(7) a{
        background-position: 0 -114.3rem;
    }
    .expLists5 div:nth-of-type(8) a{
       background: #f5f5f5;
    }
    .expLists5 div:nth-of-type(9) a{
        width: 2.7rem;
        height:1.9rem;
        background: url("../images/del.gif");
        background-size: cover;
        margin-top: 5px;
    }
    .expLists6 div:nth-of-type(1) a{
        background:url("../images/1.png");
        background-position: 0 -117rem;
        background-size: cover;
    }
    .expLists6 div:nth-of-type(2) a{
        background-position: 0 0rem;
    }
    .expLists6 div:nth-of-type(3) a{
        background-position: 0 -5.2rem;
    }
    .expLists6 div:nth-of-type(4) a{
        background-position: 0 -7.7rem;
    }
    .expLists6 div:nth-of-type(5) a{
        background-position: 0 -10.3rem;
    }
    .expLists6 div:nth-of-type(6) a{
        background-position: 0 -12.9rem;
    }
    .expLists6 div:nth-of-type(7) a{
        background-position: 0 -15.6rem;
    }
    .expLists6 div:nth-of-type(8) a{
        background-position: 0 -18.2rem;
    }
    .expLists6 div:nth-of-type(9) a{
        background-position: 0 -20.8rem;
    }
    .expLists7 div:nth-of-type(1) a{
        background-position: 0 -23.4rem;
    }
    .expLists7 div:nth-of-type(2) a{
        background-position: 0 -26rem;
    }
    .expLists7 div:nth-of-type(3) a{
        background-position: 0 -28.7rem;
    }
    .expLists7 div:nth-of-type(4) a{
        background-position: 0 -31.2rem;
    }
    .expLists7 div:nth-of-type(5) a{
        background-position: 0 -33.8rem;
    }
    .expLists7 div:nth-of-type(6) a{
        background-position: 0 -36.5rem;
    }
    .expLists7 div:nth-of-type(7) a{
        background-position: 0 -39.2rem;
    }
    .expLists7 div:nth-of-type(8) a{
        background-position: 0 -41.9rem;
    }
    .expLists7 div:nth-of-type(9) a{
        background-position: 0 -44.3rem;
    }
    .expLists8 div:nth-of-type(1) a{
        background-position: 0 -47rem;
    }
    .expLists8 div:nth-of-type(2) a{
        background-position: 0 -49.4rem;
    }
    .expLists8 div:nth-of-type(3) a{
        background-position: 0 -52rem;
    }
    .expLists8 div:nth-of-type(4) a{
        background-position: 0 -54.7rem;
    }
    .expLists8 div:nth-of-type(5) a{
        background-position: 0 -57.3rem;
    }
    .expLists8 div:nth-of-type(6) a{
        background-position: 0 -59.8rem;
    }
    .expLists8 div:nth-of-type(7) a{
        background-position: 0 -62.6rem;
    }
    .expLists8 div:nth-of-type(8) a{
        background-position: 0 -65.1rem;
    }
    .expLists8 div:nth-of-type(9) a{
        background-position: 0 -67.6rem;
    }
    .expLists9 div:nth-of-type(1) a{
        background-position: 0 -70.3rem;
    }
    .expLists9 div:nth-of-type(2) a{
        background-position: 0 -72.9rem;
    }
    .expLists9 div:nth-of-type(3) a{
        background-position: 0 -75.5rem;
    }
    .expLists9 div:nth-of-type(4) a{
        background-position: 0 -78rem;
    }
    .expLists9 div:nth-of-type(5) a{
        background-position: 0 -80.6rem;
    }
    .expLists9 div:nth-of-type(6) a{
        background-position: 0 -83.2rem;
    }
    .expLists9 div:nth-of-type(7) a{
        background-position: 0 -85.8rem;
    }
    .expLists9 div:nth-of-type(8) a{
        background-position: 0 -88.6rem;
    }
    .expLists9 div:nth-of-type(9) a{
        background-position: 0 -91.2rem;
    }
    .expLists10 div:nth-of-type(1) a{
        background-position: 0 -93.7rem;
    }
    .expLists10 div:nth-of-type(2) a{
        background-position: 0 -96.4rem;
    }
    .expLists10 div:nth-of-type(3) a{
        background-position: 0 -99rem;
    }
    .expLists10 div:nth-of-type(4) a{
        background-position: 0 -101.7rem;
    }
    .expLists10 div:nth-of-type(5) a{
        background: #f5f5f5;
    }
    .expLists10 div:nth-of-type(6) a{
        background: #f5f5f5;
    }
    .expLists10 div:nth-of-type(7) a{
        background: #f5f5f5;
    }
    .expLists10 div:nth-of-type(8) a{
        background: #f5f5f5;
    }
    .expLists10 div:nth-of-type(9) a{
        width: 2.7rem;
        height:1.9rem;
        background: url("../images/del.gif");
        background-size: cover;
        margin-top: 5px;
    }
    .swiper-pagination-bullet{
        background: #d5d5d7;
    }
    .swiper-pagination-bullet-active{
        background:#88888a;
    }
    .swiper-container{
        height:25rem;
    }
    #pagination{
        position: absolute;
        bottom:3rem;
    }

</style>



