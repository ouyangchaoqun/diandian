<template id="moodCountPie">
    <div class="moodCountPie">
        <div v-title>记录心情统计</div>
        <div class="moodCountPie_box">
            <div class="moodCountName">嗨，ZORO</div>
            <div class="moodCountDay">本月你在这里共记录了<span>20</span>天心情，<span>15</span>天开心，<span>5</span>天不开心。</div>
           <div class="setPieBox">
               <div id="setPie"></div>
               <div class="pieDiv pietopImg">
                   <div class="pieLeft">5天不开心</div>
                   <img src="../images/pieLine1.jpg" alt="">
               </div>
               <div class="pieDiv pietbottomImg" >
                   <div class="pieRight">15天开心</div>
                   <img src="../images/pieLine2.jpg" alt="">
               </div>
           </div>
            <div style="margin-top: -20px;">
                <div class="moodCountDay">你比较关注工作事业方面 记录了<span>5</span>天；在健康运动方面你最开心；在感情感悟方面你不开心。</div>
                <div class="moodCountDay">总体来说，你比<span>58%</span>的人都要开心！</div>
                <div class="moodCountDay">相比于上个月，你（没有）有更开心，希望你在下个月继续保持开心快乐！</div>
                <div class="moodCountDay">日子有大小，心情冷暖共知；加入我们一起记录美好时光。</div>
                <div class="moodCountBtn">过去的日子请翻看：心情日历</div>
            </div>

        </div>

    </div>
</template>
<script type="text/javascript">

    var moodCountPie = {
        template: '#moodCountPie'
    }
    export default {
        data() {
            return {

            }
        },
        mounted:function(){
            this.setPie()
        },
        methods:{
            setPie:function () {
                var chart = null;

                $('#setPie').highcharts({
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false

                    },
                    title: {
                        floating:true,
                        text: '心情指数',
                        style:{
                            fontSize:'0.71rem'
                        }
                    },
                    credits:{
                        enabled:false // 禁用版权信息
                    },
                    tooltip: {//提示框
//                        backgroundColor: '#fff',
//                        shared: true,
//                        crosshairs: true,
//                        useHTML: true,
//                        pointFormat: '<div class="tooltip">{series.name}:{point.percentage:.1f}%',
//                        footerFormat: '</div>',
                        enabled : false
                    },
                    plotOptions: {
                        pie: {
                            startAngle: -30,//开始角度
                            endAngle: 390,
                            allowPointSelect: false,
                            cursor: 'pointer',
                            dataLabels: {
                                distance:20,
//                              connectorWidth: 0, //连接线
                                enabled: false,
                                softConnector: true,
                                format: '{point.y}天{point.name} ',
                                style: {
                                    color:'black'
                                }
                            },
                            point: {
                                events: {
                                    click: function(e) { // 同样的可以在点击事件里处理
                                        chart.setTitle({
                                            text: e.point.name+ '\t'+ e.point.y+'天'
                                        });
                                    }
                                }
                            },
                        }
                    },

                    series: [{
                        type: 'pie',
                        size: '60%',
                        innerSize: '48%',
                        name: '心情指数',
                        colors:[
                            '#fe6103',
                            '#0eb80e'
                        ],
                        data: [
                            {name:'开心',  y: 15},
                            {name: '不开心', y: 5}
                        ]
                    }]
                }, function(c) {
                    // 环形图圆心
                    var centerY = c.series[0].center[1],
                        titleHeight = parseInt(c.title.styles.fontSize);
                    c.setTitle({
                        y:centerY + titleHeight/2
                    });
                    chart = c;
                });
                console.log($('.highcharts-background').attr('fill'))
                $('.highcharts-background').attr('fill','none')
            }
        }

    }
</script>
<style>
    .moodCountPie{
        height:100%;
        background: #fff;
       width:100%;
    }
    .moodCountPie_box{
        margin:1.1rem 0.94rem;
    }
    .moodCountName{
        font-size: 0.88rem;
        color: #342f2f ;
    }
    #setPie{
        height:16.5rem;
        width:17.65rem;
        margin:0 auto;
        margin-top:-5px;
    }
    .moodCountDay{
        color:#504e4e;
        font-size: 0.88rem;
        line-height: 1.65rem;
        text-indent: 1.2rem;
    }
    .moodCountPie_box span{
        color:#fe6c01;
    }
    .moodCountBtn{
        height:2.6rem;
        line-height: 2.6rem;
        color: #504e4e;
        font-size: 0.8rem;
        text-align: center;
        background: rgba(254,108,1,0.1);
        border-radius: 0.6rem;
        margin-top:1.3rem;
    }
    .setPieBox{
        position: relative;
        margin-top:-15px;
    }
    .pieDiv{
        position: absolute;
        left:50%;
        font-size: 0.71rem;
        color: #424444 ;
    }
    .pieDiv img{
        width:5rem;
        display: block;
    }
    .pieLeft{
        text-align: left;
    }
    .pieRight{
        text-align: right;
    }
    .pietopImg{
        top:10%;
        margin-left:-5rem;

    }
    .pietbottomImg{
        bottom:18%;
    }
</style>


