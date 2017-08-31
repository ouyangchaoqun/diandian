<template id="moodCountPage">
    <div style="height: 100%;font-family: STHeitiSC-Light">
        <div v-title>8月心情统计</div>
        <div class="swiper-container  swarppp  bggggg" style="height: 100%">
            <div class="swiper-wrapper ">
                <div class="swiper-slide page1">
                    <div class="toping"></div>
                    <div class="face_bg"><img  v-if="theUser" :src="theUser.faceUrl"/> </div>
                    <div class="name_box_bottom"  v-if="theUser"><span>{{theUser.nickName}}</span></div>
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
                            <div class="title23">比<span>{{happyThan}}%</span>的人都要开心！</div>
                            <div class="content3211">相比{{oldMonth}}月份，你<span class="spanColor" v-if="moodValue<lastMonthMoodValue">没有</span><span class="spanColor" v-if="moodValue>=lastMonthMoodValue">比</span>上个月过得开心，我们希望{{nextMonth}}月份你能<span class="spanColor" v-if="moodValue<lastMonthMoodValue">过得开心快乐一点</span><span class="spanColor" v-if="moodValue>=lastMonthMoodValue">继续保持开心快乐</span>。</div>
                        </template>
                        <template v-if="moodCount<=10">
                            <div class="title23">记录得太少</div>
                            <div class="content3211"> 由于记录数据太少，无法判断你{{countMonth}}月过得是否开心？<br><br>
                                金秋{{nextMonth}}月，愿你成为一个全新的自己，不蹉跎，不虚度。</div>
                        </template>

                    </div>
                    <div class="width_text">日子有大有小，心情冷暖共知；<br>加入我们，一起记录美好时光！</div>

                    <div class="name_box_bottom name_box_bottom2 " @click="follow" v-if="user==null"><span>我也要记录心情</span></div>
                    <div class="name_box_bottom name_box_bottom2 " @click="record" v-if="user!=null&&theUser!=null&&user.id!=theUser.id"><span>我也要记录心情</span></div>
                    <div class="name_box_bottom name_box_bottom2" @click="goMonthAll" v-if="user!=null&&theUser!=null&&user.id==theUser.id"><span>翻看心情日历</span></div>
                </div>
            </div>
            <img class="propagandaJt" src="../images/propagandaJt.png" alt="">
        </div>
        <div id="follow2" style="display: none">
            <div class="dialog_follow">
                <div class="img" v-if="theUser"><img :src="theUser.faceUrl"></div>
                <div class="ewm">

                </div>
                <div class="text" v-if="theUser">
                    长按关注“{{theUser.nickName}}”<br>记录你的心情
                </div>
            </div>
        </div>
        <div id="output" class="output" style="display: none"></div>

    </div>
</template>


<script src="../js/qrcode.min.js"></script>

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
                lastMonthMoodValue:'',
                theUserId:0,
                theUser:null,user:null
            }
        },

        mounted:function(){
            let _this=this;
            if(this.$route.query.userid){
                _this.theUserId=this.$route.query.userid
            }else{
                _this.theUserId="_userId_";
            }


            let data = '';
            if (web.guest) {
                this.isGuest = true;
                data = "?guest=true";

            }
            let userId = _this.$route.query.userid;
             _this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/' + userId + data,
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.theUser = data.data.data;
                    xqzs.wx.setConfig(this, function () {
                        wx.showAllNonBaseMenuItem();
                        var config = {
                            imgUrl: _this.theUser.faceUrl,
                            title: '我的8月很开心，你呢？',
                            desc: '日子有大有小，心情冷暖共知；加入我们，一起记录美好时光。',
                            link: web.BASE_PATH + "guest/#/moodCountPage?year=2017&month=8&userid="+_this.theUserId,
                        };
                        weshare.init(wx, config,function(){},function () {

                        },"title")
                    });
                }
            }, function (error) {
                //error
            });

            _this.$http({
                method: 'GET',
                type: "json",
                url: web.API_PATH + 'user/find/by/user/Id/_userId_'  + data,
            }).then(function (data) {//es5写法
                if (data.data.data !== null) {
                    _this.user = data.data.data;
                }
            }, function (error) {
                //error
            });


            var winWidth = $(window).width();
            var winHeight = $(window).height();
            console.log(winWidth)
            $('.swiper-slide').css({'width':winWidth})
            var propagandaSwiper = new Swiper ('.swarppp', {
                direction: 'vertical',
                onSlideChangeStart: function (swiper) {
                    //alert(swiper.activeIndex) //切换结束时，告诉我现在是第几个slide
                    var index = swiper.activeIndex;

                    if(index==1){
                        _this.setround()
                    }

                    if(index==2){
                        $(".propagandaJt").hide()
                    }else{
                        $(".propagandaJt").show()
                    }

                }

            });





            //二维码
            _this.$http.get(web.API_PATH + 'user/get/qr/code/' + _this.theUserId + data).then(function (data) {//es5写法
                $("#output").empty();
                console.log(_this.toUtf8(data.body.data));
                $('#output').qrcode({
                    width: 100, height: 100,
                    text: _this.toUtf8(data.body.data), background: "#ffffff",
                    foreground: "red"
                });

            }, function (error) {

            });



        },
        methods:{
            convertCanvasToImage: function (canvas) {
                //新Image对象，可以理解为DOM
                var image = new Image();
                // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持
                // 指定格式 PNG
                image.src = canvas.toDataURL("image/png");
                return image;
            },
            toUtf8: function (str) {
                var out, i, len, c;
                out = "";
                len = str.length;
                for (i = 0; i < len; i++) {
                    c = str.charCodeAt(i);
                    if ((c >= 0x0001) && (c <= 0x007F)) {
                        out += str.charAt(i);
                    } else if (c > 0x07FF) {
                        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                        out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    } else {
                        out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                        out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                    }
                }
                return out;
            },

            follow:function () {
                let _this = this;
                xqzs.weui.dialogCustom($("#follow2").html())
                var mycanvas2 = document.getElementsByTagName('canvas')[0];
                console.log(mycanvas2) ;
                var img = _this.convertCanvasToImage(mycanvas2);
                $('.ewm').html('')
                $('.ewm').append(img);
            },
            setround:function () {
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
                let _this=this;
                let data="";
                if (web.guest) {
                    this.isGuest = true;
                    data = "?guest=true";

                }
                this.$http.get(web.API_PATH+'mood/get/user/month/statistics/'+_this.theUserId+'/'+_countYear+'/'+_countMonth+data).then(function (res) {
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
            record:function () {
              this.$router.push("/record")
            },
            goMonthAll:function () {
                this.$router.push("/myCenter/myIndex?month=8&activeIndex=1")

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
                            fontSize:'1.05rem'
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
    .name_box_bottom2 span{ border-radius: 16px}
    .swiper-slide{ position: relative}
    .bggggg{ background: url("../images/mood_count_month_bg.png") no-repeat; background-size: 100% 100%; position: relative}

    .bggggg:before{ content: " " ; display: block; height: 100%; width: 100%; background: rgba(0,0,0,0.2); position: absolute;}



    .dialog_follow {
        width: 66%;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        height: 20.47058823529412rem;
        position: absolute;
        top: 50%;
        margin-top: -10.23529411764706rem;
        left: 17%;
        z-index: 10001;
    }
    .dialog_follow img {
        width: 100%
    }

    .dialog_follow .img {
        height: 11rem;
        overflow: hidden
    }

    .dialog_follow .text {
        text-align: center;
        font-size: 0.8235294117647059rem;
        line-height: 1.5
    }
    .img.smill img {
        width: 10rem;
        height: 10rem;
        margin: 0 auto
    }
    .dialog_follow .img.smill {
        background: #01af00;
        text-align: center;
        height: 10rem;
    }
    .ewm {
        width: 4.329411764705882rem;
        height: 4.329411764705882rem;
        border: 1px solid #ffcdcd;
        margin: 0.8rem auto;
        margin-bottom: 0.65rem;
        padding: 2px;
    }

    .ewm .output {
        width: 100%;
        height: 100%
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

    .setPieBox{ margin-top: 26%}
    .boxboxbox{overflow: hidden;}
    .boxboxbox{   margin: 0 auto;  background: url(../images/boxoboxobo.png) no-repeat;   background-size: 13.95238095238095rem; width: 13.95238095238095rem; height:4.547619047619048rem;      display: flex;  padding-top: .417647058823529rem;
        display: -webkit-box;
        display: -webkit-flex; margin-top: 1%;
    }
    .boxboxbox div{ flex: 1; text-align: center;
            line-height:1.764705882352941rem;


    }
    .boxboxbox div h4{ font-size: 13px; font-weight: normal; color:rgba(255,255,255,0.8);}
    .boxboxbox div span{ font-size: 13px; font-weight: normal; color: #ff6c00;}

    .box22222{ background:url(../images/box22222_bg.png) ; background-size:  14.76470588235294rem;height: 19.67647058823529rem; ; width: 14.76470588235294rem; margin: 0 auto; margin-top: 10%; }

.title23{ color:#fff; font-size: 1rem; text-align: center; width: 100%; margin-top: 4.935294117647059rem;}
    .title23 span{ font-size: 1.6rem; margin: 0 4px;  color:#ff6c00   }
.thhd1{ height: 1px }
.content3211{ text-align: left; margin-top: 10%; font-size: 0.78rem;  color:#fff; padding: 0 28px; line-height: 1.8; }
.width_text{ color:#fff; width: 100%; text-align: center; font-size: 0.78rem; margin-top: 2.5rem;}

.h222{ height: 16px;}

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
        font-size: 0.9rem;
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
        bottom:16%
    }
</style>


