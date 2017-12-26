<template id="chart">
    <div>
        <div class="bgs" style="overflow: hidden" :style="chartStyle">
            <div class="title">心情指数</div>
            <div class="step">
                <div class="swiper-container swiper-container-h chartSwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide swiper-no-swiping">
                            <div id="d0" class="odiv"></div>
                        </div>
                        <div class="swiper-slide swiper-no-swiping">
                            <div id="d1" class="odiv"></div>
                        </div>
                        <div class="swiper-slide swiper-no-swiping" >
                            <div id="d2" class="odiv"></div>
                        </div>
                        <div class="swiper-slide" >
                            <div id="d3" class="odiv"></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    var chart = {
        template: '#chart'
    }

    export default {
        data() {
            return {
                chartStyle:'',
                chartShow:false,

            }
        },
        props: ['chartData'],
        watch: {
            chartData: function (data) {
                var tagetwidth = window.innerWidth * 1.04;
                var tagetHeight = window.innerHeight * 0.3228;
                $('.odiv').width(tagetwidth);
                $('.odiv').height(tagetHeight);

                this.makeCharts(data, tagetwidth, tagetHeight);  //图标生成器

                console.log("chartData:" + this.chartData);
                console.log(this.$route.params.Id)
            }
        },
        updated: function () {
            console.log("chartDataupdate" + this.chartData);

        },
        created:function () {
            let tagetHeight = window.innerHeight * 0.3228;
            this.chartStyle="height:"+tagetHeight+"px";
        },
        methods: {

            getChart: function (o) {
                Highcharts.chart(o.id, {

                    navigation: {menuItemHoverStyle: {'color': 'red'}},

                    chart: {
                        alignTicks: false,
                        type: 'column',
                        zoomType: 'none',//x轴是否允许拉伸
                        height: o.height + 'px',
                        width: o.width,
                        margin: [0, 0, 0, 0],

                        // spacingRight:20,
                        //spacingLeft:90,
                        //plotBackgroundImage: 'img/bj.png' //加入背景图片
                        backgroundColor: 'rgba(0,0,0,0)'
                    },
                    legend: false,//是否允许有图例出现
                    credits: {
                        enabled: false,//隐藏highchart网址
                    },
                    exporting: {// exporting 是否隐藏print标签
                        enabled: false
                    },
                    labels: {//在这里可以进行图标样式设置
                        items: [{
                            html: '<span></span>',
                            style: {left: '240px', top: '30px', color: '#ffffff', fontSize: '30px'}
                        }, {
                            html: '',
                            style: {left: '30px', top: '30px', color: '#ffffff', fontSize: '15px'}
                        }]
                    },
                    title: {
                        text: '',
                        align: 'center',
                        y: 7,
                        style: {'color': '#5cd9d1', 'font-size': '13px', 'font-family': 'arial',}


                    },
                    subtitle: { //副标题
                        text: document.ontouchstart === undefined ?
                            '' : ''
                    },
                    xAxis: {
                        lineWidth: 0,//x轴横坐标的横线的显示度
                        tickWidth: 0, //x轴横坐标下面的刻度的显示度
                        minRange: 6, //控制x方向刻度个数

                        categories: o.days,//['2月1', '2', '3', '4', '5','6','7'],
                        labels: {
                            y: -6, //横坐标向上或者向下移动；
                            style: {
                                color: '#5cd9d1', //x轴刻度值颜色
                                fontSize: '11px' // 字体大小
                            }
                        }


                    },
                    yAxis: {
                        gridLineColor: 'white',
                        allowDecimals: true,    //是否允许小数
                        min: 0,
                        max: 11.5,
                        title: false,
                        gridLineWidth: 0,
                        labels: false,
                        tickPositions: [-1.4, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.4]
                    },

                    plotOptions: { //情节选项
                        series: {
                            animation: {
                                duration: 1300  //动画时间

                            },
                            /*events:{
                              click:function (e) {
                                  alert(e.point.y)
                              }
                            },*/
                            fillOpacity: 0.2,  //默认是0.75
                            //className: 'main-color',
                            // negativeColor: false,
//          threshold: 2
                        },
//      spline:{
//      	events:{//监听点的鼠标事件
//                    click: function() {
//                    	alert(11)
//                    }
//                },
//
//      }


                    },
                    //折线部分
                    series: [   //系列
                        {
                            type: 'area',
                            connectNulls: false,
                            color: '#8cfff6',
                            dashStyle: 'solid', //折线的类型
                            lineColor: '#8cfff6',  //折线的颜色
                            lineWidth: 1,
                            name: ' ',
                            negativeColor: '#8cfff6',
                            trackByArea: true,
                            series: false,
                            data: o.moods,//[0,1,2,3,5,7,9],
                            zones: [{
                                color: '#8cfff6',

                                value: 5,
                                dashStyle: 'solid' //dot
                            }],


                            states: {
                                hover: {
                                    enabled: true,//鼠标放上去线的状态控制
                                    lineWidth: 1
                                }
                            },

                            marker: {
                                lineWidth: 0,
                                radius: 3,
                                fillColor: '#8cfff6', //标记点的颜色
                                states: {
                                    hover: {
                                        fillColor: '#8cfff6',
                                        lineWidth: 0
                                    }
                                },


                            }
                        }
                    ],

                    tooltip: {//鼠标移到图形上时显示的提示框
                        borderColor: 'rgba(0,0,0,0)',
                        borderWidth: 0,
                        shadow: false,
                        backgroundColor: 'rgba(0,0,0,0)',
                        enabled: true,
                        animation: true,
                        style: {                      // 文字内容相关样式
                            color: "#8cfff6",
                            fontSize: "14px",
                            fontWeight: "blod"
                        }

                        , formatter: function () {
                            $(".highcharts-xaxis-labels  text ").css("fill", "#5cd9d1");
                            var index = this.point.index;
                            $(".highcharts-xaxis-labels  text ").each(function (i) {
                                $(".highcharts-xaxis-labels  text ").each(function (j) {
                                    if ($(".highcharts-xaxis-labels  text ").length - 1 == j) {
                                        $(this).css("fill", "#8cfff6")
                                    }
                                });
                                if (index == i) {
                                    $(this).css("fill", "#8cfff6")
                                }
                            });

                            return '<b>' + this.y + '</b>'
                        }


                    }


                });

                setTimeout(function () {
                    $(".highcharts-root").css({width:o.width,height:o.height});
                },200)

            },
            makeCharts: function (data, width, height) {
                let _this=this;
                console.log(this.$route.params.Id)
                var noSwiping=false;
                if(this.$route.params.Id!=''&&this.$route.params.Id!=undefined&&this.$route.params.Id!='_userId_'){
                    noSwiping=true;
                }


                var mySwiper = new Swiper('.chartSwiper', {
                    direction: 'horizontal',
                    loop: false,
                    initialSlide: 4,
                    noSwiping:noSwiping,
                    touchMoveStopPropagation : false,



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

                        _this.getChart(obj);
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

    .chart_box {

        padding: 15px 0 10px 0;
        background: #ffffff;
        margin-bottom: 12px;
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

