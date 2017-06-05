<template id="chart">
    <div>
        <div class="bgs">
            <div class="title">心情指数</div>
            <div class="step">
                <div class="swiper-container swiper-container-h">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div id="d0" class="odiv"></div>
                        </div>
                        <div class="swiper-slide">
                            <div id="d1" class="odiv"></div>
                        </div>
                        <div class="swiper-slide">
                            <div id="d2" class="odiv"></div>
                        </div>
                        <div class="swiper-slide">
                            <div id="d3" class="odiv"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script type="es6">


    var chart = {
        template: '#chart'
    }

    export default {
        data() {
            return {}
        },
        props: ['chartData'],
        watch: {
            chartData: function (data) {
                var tagetwidth = window.innerWidth * 1.04;
                var tagetHeight = window.innerHeight * 0.2848;
                $('.odiv').width(tagetwidth);
                $('.odiv').height(tagetHeight);
                this.makeCharts(data, tagetwidth, tagetHeight);  //图标生成器

                console.log("chartData:" + this.chartData);
            }
        },
        updated: function () {
            console.log("chartDataupdate" + this.chartData);
        },
        methods: {
            makeCharts: function (data, width, height) {
                var mySwiper = new Swiper('.swiper-container', {
                    direction: 'horizontal',
                    loop: false,
                    initialSlide: 3,

                    //解决安卓机卡顿问题开始


                    mode: 'horizontal',
                    freeMode: false,
                    touchRatio: 0.5,
                    longSwipesRatio: 0.1,
                    threshold: 50,
                    followFinger: false,
                    observer: true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents: true,//修改swiper的父元素时，自动初始化swiper

                    //解决安卓机卡顿问题结束

                    onSlideChangeStart: function (swiper) {

                        //alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
                        var index = swiper.activeIndex;

                        var obj = {
                            id: 'd' + index,
                            days: data[index].days,
                            moods: data[index].moods,
                            width: width,
                            height: height

                        };

                        getChart(obj);
                        var cutLeft = 18;

                        $("svg").css({"margin-left": "-" + cutLeft + "px"});
                        $("svg image").attr("x", cutLeft);
                        $(".highcharts-xaxis-labels ").each(function (i) {
                            $(this).find("text").each(function (j) {
                                if (j == 0) $(this).attr("x", parseFloat($(this).attr("x")) + cutLeft)
                            })
                        });

                        $(".highcharts-xaxis-labels  text ").each(function (i) {
                            if ($(".highcharts-xaxis-labels  text ").length - 1 == i) {
                                $(this).css("fill", "#8cfff6")
                            }

                        });

                        $(".odiv>div").each(function () {
                                $(this).css({"width": $(this).width() - cutLeft + "px", "border-radius": "10px"})

                            }
                        )

                    }


                })


            }

        },
        mounted: function () {

        }
    }


</script>


<style type="text/css">
    html, body, div {
        margin: 0;
        padding: 0;
    }
    .chart_box{
        height:190px;
        padding:40px 0 20px 0;
        background: #ffffff;
        margin-bottom: 5px;
    }


    .highcharts-series-group {
        margin-right: 120px;

    }

    .step {
        width: 100%;
        overflow: hidden;
    }

    .swiper-wrapper {
        -webkit-perspective: 3000;
        -webkit-backface-visibility: hidden;
    }

    .main-color .highcharts-graph {
        stroke: #fff;
    }

    .main-color, .main-color .highcharts-point {
        fill: #ff6600;
    }

    .highcharts-graph.highcharts-negative {
        stroke: #999;
    }

    .highcharts-area.highcharts-negative {
        fill: #999;
    }

    .highcharts-point.highcharts-negative {
        fill: #999; /*点的颜色*/
    }

    .bgs {
        background: url("../images/bj.jpg");
        background-size: 100% 100%;
        margin: 0 10px;
        position: relative;
        border-radius: 6px;
        height: 190px
    }

    .bgs .title {
        position: absolute;
        top: 3px;
        left: 50%;
        margin-left: -24px;
        font-size: 12px;
        color: #5cd9d1
    }

</style>

