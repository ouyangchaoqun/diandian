<template id="moodCountPage">
    <div style="height: 100%;font-family: STHeitiSC-Light">
        <div class="swiper-container  swarppp  bggggg" style="height: 100%">
            <div class="swiper-wrapper ">
                <div class="swiper-slide page1">
                    <div class="toping"></div>
                    <div class="face_bg"><img :src="user.faceUrl"/> </div>
                    <div class="name_box_bottom"><span>{{user.nickName}}</span></div>
                </div>
                <div class="swiper-slide page2">
                    <div class="setPieBox">
                        <div id="setPie"></div>
                        <div class="pieDiv pietopImg">
                            <div class="pieLeft">{{unhappyDays}}天不开心</div>
                            <img src="../images/pieLine1.png" alt="">
                        </div>
                        <div class="pieDiv pietbottomImg" >
                            <div class="pieRight">{{happyDays}}天开心</div>
                            <img src="../images/pieLine2.png" alt="">
                        </div>
                    </div>
                    <div class="boxboxbox">
                        <div class="boxitemd1">
                            <h4>最关注</h4>
                            <span>{{followText}}</span>
                        </div>
                        <div class="boxitemd2">
                            <h4>最开心</h4>
                            <span>{{happyText}}</span>
                        </div>
                        <div class="boxitemd3">
                           <h4>不开心</h4>
                            <span>{{unhappyText}}</span>
                        </div>

                    </div>
                </div>
                <div class="swiper-slide page3">
                    <div class="box22222 ">
                        <div class="thhd1"></div>

                        <template v-if="moodCount>10">
                            <div class="title23">你比{{happyThan}}%的人都要开心！</div>
                            <div class="content3211">总体来说，你比<span>{{happyThan}}%</span>的人都要开心！相比{{oldMonth}}月份，你<span class="spanColor" v-if="moodValue<lastMonthMoodValue">没有</span><span class="spanColor" v-if="moodValue>=lastMonthMoodValue">比</span>上个月过得开心，我们希望{{nextMonth}}月份你能<span class="spanColor" v-if="moodValue<lastMonthMoodValue">过得开心快乐一点</span><span class="spanColor" v-if="moodValue>=lastMonthMoodValue">继续保持开心快乐</span>。</div>
                        </template>
                        <template v-if="moodCount<=10">
                            <div class="title23">记录的太少</div>
                            <div class="content3211"> 由于记录数据太少，无法判断你{{countMonth}}月过得是否开心？<br>
                                金秋{{nextMonth}}月，愿你成为一个全新的自己，不蹉跎，不虚度。</div>
                        </template>






                    </div>
                    <div class="width_text">日子有大小，心情冷暖共知<br>加入我们一起记录美好时光</div>
                    <div class="name_box_bottom" @click="record"><span>我也要记录心情</span></div>
                </div>
            </div>
            <img class="propagandaJt" src="../images/propagandaJt.png" alt="">
        </div>


    </div>
</template>




<script type="text/javascript">

    var moodCountPie = {
        template: '#moodCountPage'
    };
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
                followScenesDays:'',
                followText:'',
                happyText:'',
                unhappyText:'',
                countMonth:'',
                nextMonth:'',
                oldMonth:'',
                moodValue:'',
                lastMonthMoodValue:''
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        mounted:function(){
            let _this=this;
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            console.log(winWidth)
            $('.swiper-slide').css({'width':winWidth})
            var propagandaSwiper = new Swiper ('.swarppp', {
                direction: 'vertical'
            });

            xqzs.wx.setConfig(this, function () {
                wx.showAllNonBaseMenuItem();
                var config = {
                    imgUrl: _this.user.faceUrl,
                    title: '我的8月很开心，你呢？',
                    desc: '日子有大有小，心情冷暖共知；加入我们，一起记录美好时光。',
                    link: web.BASE_PATH + "wx/pub?reurl=http%3a%2f%2fm.xqzs.cn%2f%23%2fmoodCountPage%3fyear%3d2017%26month%3d8",
                };
                weshare.init(wx, config)
            });

            var countDate = new Date();
            var _countYear = this.$route.query.year||countDate.getFullYear();
            var _countMonth = this.$route.query.month||countDate.getMonth();
            this.countMonth = _countMonth;
            if(this.countMonth==12){
                this.nextMonth=1
            }else {
                this.nextMonth=parseInt(this.countMonth)+1
            }
            if(this.countMonth==1){
                this.oldMonth=12

            }else {
                this.oldMonth=parseInt(this.countMonth)-1
            }
            this.$http.get(web.API_PATH+'mood/get/user/month/statistics/_userId_/'+_countYear+'/'+_countMonth+'').then(function (res) {
                console.log(res.data)
                var response = res.data.data;
                if(res.data.status==1){

                    this.moodCount=response.moodCount;
                    this.happyDays=response.happyDays;
                    this.unhappyDays= response.unhappyDays;


                    if(response.moodCount==0){
                        this.setPie(1,1)
                        this.unhappyProportion='50%'
                        this.happyProportion='50%'
                        return
                    }
                    this.unhappyProportion = Math.round(this.unhappyDays/this.moodCount*100)+'%';
                    this.happyProportion = Math.round(this.happyDays/this.moodCount*100)+'%';

                    this.followScenes = xqzs.mood.getCjImg(response.followScenes).src;
                    this.happyScenes = xqzs.mood.getCjImg(response.happyScenes).src;
                    this.unHappyScenes = xqzs.mood.getCjImg(response.unHappyScenes).src;
                    this.followText = xqzs.mood.getCjImg(response.followScenes).text;
                    this.happyText = xqzs.mood.getCjImg(response.happyScenes).text;
                    this.unhappyText = xqzs.mood.getCjImg(response.unHappyScenes).text;
                    this.followScenesDays = response.followScenesDays;
                    this.happyThan = Math.round(response.happyThan*100);
                    this.moodvalue = response.moodValue;
                    this.lastMonthMoodValue = response.lastMonthMoodValue;
                    this.setPie(this.happyDays,this.unhappyDays);
                }

            })

        },
        methods:{

            //http://m.xqzs.cn/wx/pub?reurl=http%3A%2F%2Fm.xqzs.cn%2F%23%2Fme%2Fpersonal
            record:function () {
              this.$router.push("/record")
            },
            setPie:function (happyDay,unhappyDay) {
                //happyDay = happyDay||1;
                //unhappyDay = unhappyDay||1
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
                        text: "共"+_this.moodCount+"天",
                        style:{
                            color:"#fff",
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
//                            startAngle: -30,//开始角度
//                            endAngle: 390,
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
//                                events: {
//                                    click: function(e) { // 同样的可以在点击事件里处理
//                                        chart.setTitle({
//                                            text: e.point.name+ '\t'+ e.point.y+'天'
//                                        });
//                                    }
//                                }
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
    .toping{ background: url(../images/toping.png) no-repeat ; background-size: 15.5rem; width: 15.5rem; height: 8rem; position: absolute ;  left: 50%; margin-left: -7.75rem; top:10%}
    .face_bg{ background: url(../images/face_bg.png); background-size: 11.79411764705882rem; width: 11.79411764705882rem; height: 11.79411764705882rem; margin-left: -5.897058823529412rem; position: absolute; left:50%;
        top: 40%;}
    .face_bg img{ width: 56%; height: 56%; margin: 22%;  border-radius: 50%;}
    .name_box_bottom{
         text-align: center; position: absolute; bottom: 13%;
        left: 0%; width: 100%;
    }
    .name_box_bottom span{ font-size: 0.8823529411764706rem;
        height: 32px;line-height: 32px; border: 1px solid #fff; text-align: center;display: inline-block; padding: 0 30px; color:#fff;
    }
    .swiper-slide{ position: relative}
    .bggggg{ background: url("../images/mood_count_month_bg.png") no-repeat; background-size: 100% 100%}

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

    .setPieBox{ margin-top: 40%}
    .boxboxbox{    margin: 0 auto;  background: url(../images/boxoboxobo.png) no-repeat;   background-size: 13.95238095238095rem; width: 13.95238095238095rem; height:4.547619047619048rem;      display: flex;  padding-top: .417647058823529rem;
        display: -webkit-box;
        display: -webkit-flex; margin-top: 1%}
    .boxboxbox div{ flex: 1; text-align: center;
            line-height:30px;


    }
    .boxboxbox div h4{ font-size: 13px; font-weight: normal; color:rgba(255,255,255,0.8);}
    .boxboxbox div span{ font-size: 13px; font-weight: normal; color: #ff6c00;}

    .box22222{ background:url(../images/box22222_bg.png) ; background-size:  14.76470588235294rem;height: 19.67647058823529rem; ; width: 14.76470588235294rem; margin: 0 auto; margin-top: 15%; }

.title23{ color:#ff6c00; font-size: 1rem; text-align: center; width: 100%; margin-top: 4.235294117647059rem;}
.thhd1{ height: 1px }
.content3211{ text-align: left; margin-top: 10%; font-size: 0.78rem;  color:#fff; padding: 0 28px; }
.width_text{ color:#fff; width: 100%; text-align: center; font-size: 0.78rem; margin-top: 2.5rem;}


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
        height:18.5rem;
        width:18.65rem;
        margin:0 auto;
        margin-top:-0.29rem;
    }
    .moodCountDay{
        color:#504e4e;
        font-size: 0.88rem;
        line-height: 1.65rem;
        text-indent: 1.2rem;
    }
    .moodCountDay img{
        height: 1rem;
        width:1rem;
        display: inline-block;
        vertical-align:middle;
        margin: 0 6px;
        margin-top:0.01rem;
    }
    .moodCountPie_box span{
        color:#fe6c01;
    }
    .moodCountDay .spanColor{
        color: #504e4e;
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
        margin-bottom:1.8rem;
        display: block;
    }
    .moodCountBtn:active{
        background: rgba(254,108,1,0.3);
    }
    .setPieBox{
        position: relative;

    }
    .pieDiv{
        position: absolute;
        left:50%;
        font-size: 0.71rem;
        color: #fff ;
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


