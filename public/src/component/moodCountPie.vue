<template id="moodCountPie">
    <div class="moodCountPie">
        <div v-title>记录心情统计</div>
        <div class="moodCountPie_box">
            <div class="moodCountName">嗨，{{user.nickName}}</div>
            <div class="moodCountDay">本月你在这里共记录了<span>{{moodCount}}</span>天心情，<span>{{happyDays}}</span>天开心，<span>{{unhappyDays}}</span>天不开心。</div>
           <div class="setPieBox">
               <div id="setPie"></div>
               <div class="pieDiv pietopImg">
                   <div class="pieLeft">{{unhappyProportion}}不开心</div>
                   <img src="../images/pieLine1.jpg" alt="">
               </div>
               <div class="pieDiv pietbottomImg" >
                   <div class="pieRight">{{happyProportion}}开心</div>
                   <img src="../images/pieLine2.jpg" alt="">
               </div>
           </div>
            <div style="margin-top: -20px;">
                <div class="moodCountDay">你比较关注工作事业方面 <img :src="followScenes" alt="">记录了<span>{{followScenesDays}}</span>天；在健康运动方面<img :src="happyScenes" alt="">你最开心；在感情感悟方面<img :src="unHappyScenes" alt="">你不开心。</div>
                <div class="moodCountDay">总体来说，你比<span>{{happyThan}}%</span>的人都要开心！相比于上个月，你（没有）有更开心，希望你在下个月继续保持开心快乐！</div>
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
                moodCount:'',
                unhappyDays:'',
                happyDays:'',
                happyProportion:'',
                unhappyProportion:'',
                followScenes:'',
                happyScenes:'',
                unHappyScenes:'',
                happyThan:'',
                followScenesDays:''
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        mounted:function(){
            var countDate = new Date();
            var countYear = this.$route.year||countDate.getFullYear();
            var countMonth = this.$route.month||countDate.getMonth();
            this.$http.get(web.API_PATH+'mood/get/user/month/statistics/_userId_/'+countYear+'/'+countMonth+'').then(function (res) {
                console.log(res.data)
                var response = res.data.data
                if(res.data.status==1){
                    this.moodCount=response.moodCount
                    this.happyDays=response.happyDays
                    this.unhappyDays=response.unhappyDays
                    this.unhappyProportion = Math.round(this.unhappyDays/this.moodCount*100)+'%'
                    this.happyProportion = Math.round(this.happyDays/this.moodCount*100)+'%'
                    this.followScenes = xqzs.mood.getCjImg(response.followScenes).src
                    this.happyScenes = xqzs.mood.getCjImg(response.happyScenes).src
                    this.unHappyScenes = xqzs.mood.getCjImg(response.unHappyScenes).src
                    this.followScenesDays = response.followScenesDays
                    this.happyThan = Math.round(response.happyThan*100)
                    this.setPie(this.happyDays,this.unhappyDays)
                }

            })

        },
        methods:{
            setPie:function (happyDay,unhappyDay) {
                var chart = null;
                var _this = this;
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
                            {name:'开心',  y: happyDay},
                            {name: '不开心', y: unhappyDay}
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
    .moodCountDay img{
        height: 18px;
        width:18px;
        display: inline-block;
        vertical-align:middle;
        margin-top:-3px;
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


