
<template >
    <div class="habit_card_box" >
        <div v-title>健康习惯</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="top">
            <div class="h1" v-if="data.todayHabit&&finishPer(data.todayHabit)==100">{{data.count+1}}个</div>
            <div class="h1"v-else="">{{data.count}}个</div>

            <div class="h2">100%完美的日子</div>
            <div class="h3">「在{{year}}年{{lastTxt}}天里要继续你努力」</div>
        </div>
        <div class="cards swiper-container">
            <div class="swiper-wrapper">


                <div class="swiper-slide"  v-if="data.todayHabit&&data.todayHabit.length>0">
                    <div class="item ">
                        <div class="img">
                            <img :src="getTopImg()" />
                        </div>
                        <div class="habits">
                            <span v-for="habit in data.todayHabit">
                                <img :src="habit.iconFinish"  v-if="habit.finish"/>
                                <img :src="habit.iconNotFinish"  v-else=""/>
                            </span>

                        </div>
                        <div class="txt" v-if="finishPer(data.todayHabit)==100">{{data.todayHabit.length}}个好习惯全部完成</div>
                        <div class="txt" v-else="">今日完成{{finishCount(data.todayHabit)}}个好习惯</div>
                        <div class="day">{{formatTime()}}</div>
                    </div>
                </div>

                <div class="swiper-slide"  v-for="(item,index) in data.habitList">
                    <div class="item ">
                        <div class="img">
                            <img :src="getTopImg(item.timestamp)" />
                        </div>
                        <div class="habits">
                             <span v-for="habit in item.habits">
                                <img :src="habit.iconFinish"  v-if="habit.finish"/>
                                <img :src="habit.iconNotFinish"  v-else=""/>
                            </span>

                        </div>
                        <div class="txt" v-if="finishPer(item.habits)==100">{{item.habits.length}}个好习惯全部完成</div>
                        <div class="txt" v-else="">今日完成{{finishCount(item.habits)}}个好习惯</div>

                        <div class="day">{{item.year}}-{{item.month}}-{{item.day}}</div>
                    </div>
                </div>
                <div class="swiper-slide"  >
                </div>
            </div>
        </div>

        <div class="share_btn" @click="share()">分享好习惯</div>
    </div>
</template>
<style>
    .habit_card_box{ background: #fff ; width: 100%; overflow: hidden}
    .habit_card_box .top{ margin:1.4705882352941176470588235294118rem;}
    .habit_card_box .top>div{text-align: right; line-height: 1; color:#333}
    .habit_card_box .h1{ font-size: 2.1176470588235294117647058823529rem; }
    .habit_card_box .h2{ font-size: 1.3529411764705882352941176470588rem; margin-top: 0.85294117647058823529411764705882rem; }
    .habit_card_box .h3{font-size:0.76470588235294117647058823529412rem; margin-top:0.67647058823529411764705882352941rem; color:#666 !important;}

    .habit_card_box .cards{ margin-top:5rem; margin-left: 1.8rem; overflow: visible}

    .habit_card_box .cards .item{ width: 220px; -webkit-box-shadow:0px 0px 13px rgba(0,0,0,.18); box-shadow:0px 0px 13px  rgba(0,0,0,.18); overflow: hidden;}
    .habit_card_box .cards .item .img{ width: 100%; height:147px; }
    .habit_card_box .cards .item .img img{ width: 100%; height: 100%}
    .habit_card_box .cards .item .habits{ margin: 1.4705882352941176470588235294118rem 0.5rem; margin-bottom: 1rem; text-align: right   }
    .habit_card_box .cards .item .habits img{height:1rem; }
    .habit_card_box .cards .item .habits span{ display: inline-block; width:1.46rem;  text-align: center}

    .habit_card_box .cards .item  .txt{ font-size:0.82352941176470588235294117647059rem; color:#666; line-height: 1; text-align: right; margin-right: 0.9rem; }
    .habit_card_box .cards .item  .day{ color:#999; font-size: 0.70588235294117647058823529411765rem; text-align: right;margin-right: 0.9rem; margin-top:0.4rem; margin-bottom: 0.8rem; }

    .habit_card_box  .share_btn{line-height: 2rem; height: 2rem; border-radius: 0.4rem; border: 1px solid #FF9900;  color:#FF9900;font-size:0.88235rem;  display: inline-block; position: fixed; bottom:1.8rem; width: 8rem; left:50%; margin-left:-4rem; text-align: center; background: #fff }
    .habit_card_box  .share_btn:active{ border: 1px solid #e38000; color:#e38000 }
    .habit_card_box  .swiper-slide-active{
        animation: bigs .5s; -webkit-animation: bigs .5s;
        animation-fill-mode:forwards;
        -webkit-animation-fill-mode:forwards;}

    @keyframes  bigs {
        from {-webkit-transform:scale(1);
            -moz-transform:scale(1);}
        to{-webkit-transform:scale(1.1);
            -moz-transform:scale(1.1);}
    }


</style>
<script type="text/javascript">
    import showLoad from './showLoad.vue';
    export default {
        data() {
            return {
                showLoad:false,
                data:{},
                year:2017,
                lastTxt:'',
                index:0
            }
        },

        mounted: function () {
            $(".cards ").css({"margin-left":($(window).width()-220)/2})

            this.getCards();
            this.initTime();
        },
        methods:{
            initTime:function () {
                let date = new Date();
                this.year=date.getFullYear();
                let month=  date.getMonth()+1;
                let day= date.getDate()
                let yearCurDayIndex= this.yearCurDayIndex( this.year,month,day);
                let yearDayCount=this.yearDayCount( this.year);

                console.log(yearCurDayIndex)
                if(yearCurDayIndex>=180){
                    this.lastTxt= "剩余的"+ ( yearDayCount-yearCurDayIndex)+""
                }else{
                    this.lastTxt= "第"+yearCurDayIndex+""
                }
            },

            isLeapYr: function (yr) {
                //判断闰年
                return (yr % 4 === 0 && yr % 100 !== 0) || (yr % 100 === 0 && yr % 400 === 0);
            },
            yearCurDayIndex: function (y, m, d) {
                let mdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                let mSum = 0;
                let sum = 0;
                //如果是闰年的话，那么2月份就应该有29天
                this.isLeapYr(y) ? mdays[1] = 29 : mdays[1];
                //计算该月份之前的总天数，比如m=3，那么就计算1和2月的总天数
                for (var i = 0; i < m - 1; i++) {
                    mSum += mdays[i];
                    console.log( mdays[i])
                }
                //加上当月天数
                sum = mSum + d;
                return sum;
            },
            yearDayCount:function (y) {
                let mdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                let mSum = 0;
                this.isLeapYr(y) ? mdays[1] = 29 : mdays[1];
                for (var i = 0; i < 12; i++) {
                    mSum += mdays[i];
                }
                return mSum;
            },


            formatTime:function (time) {
                if(!time){
                    time =xqzs.dateTime.getTimeStamp();
                }
                return xqzs.dateTime.formatYearDate(time)
            },
            finishPer:function (list) {
                let count=0;
                for( let i = 0;i<list.length;i++){
                    if(list[i].finish){
                        count++
                    }
                }
                return parseInt(count*100/list.length);
            },
            finishCount:function (list) {
                let count=0;
                for( let i = 0;i<list.length;i++){
                    if(list[i].finish){
                        count++
                    }
                }
                return count;
            },
            getCards:function () {
                let _this = this;
                _this.showLoad = true;
                _this.$http.get(web.API_PATH + 'habit/get/card/page/_userId_/1/60').then(response => {
                    _this.showLoad = false;
                    if (response.data.status === 1) {
                        _this.data = response.data.data;
                        _this.$nextTick(function () {
                            _this.mySwiperPre = new Swiper('.cards', {
                                slidesPerView: 2,
                                width: 510,
                                onInit: function(swiper){



                                },
                                onSlideChangeEnd: function(swiper){
                                    _this.index=swiper.activeIndex;
                                }
                            });


                        })
                    }
                }, response => {
                    _this.showLoad = false;
                });


            },
            getTopImg:function (time) {
                return  xqzs.mood.getTopImg(time);
            },
            share:function () {
                let _this = this;

                //时间获取
                let year ,month ,day;
                let isToday=false;
                let index=0;
                if(_this.data.todayHabit.length>0){
                    if(_this.index==0){
                        let date= new Date();
                        year=date.getFullYear();
                        month=date.getMonth()+1;
                        day=date.getDate();
                        isToday=true;
                    }else{
                        index =_this.index-1;
                    }
                }else{
                    index =_this.index;
                }
                if(!isToday&&_this.data.habitList&&_this.data.habitList[index]){
                    year=_this.data.habitList[index].year;
                    month=_this.data.habitList[index].month;
                    day=_this.data.habitList[index].day;
                }

                _this.showLoad = true; //{userId}/{year}/{month}/{day}
                _this.$http.get(web.API_PATH + 'habit/get/habit/card/_userId_/'+year+"/"+month+"/"+day).then(response => {
                     if (response.data.status == 1) {
                        _this.showLoad = false;
                        xqzs.weui.dialog({
                            title: '习惯卡片已经发送',
                            msg: '前往公众号查看你的习惯卡片',
                            submitText: '查看',
                            submitFun: function () {
                                try {
                                    WeixinJSBridge.call('closeWindow');
                                } catch (e) {
                                }
                            }
                        })

                    }

                }, function (error) {
                    _this.showLoad = false;
                });
            }
        },
        components: {
            'v-showLoad': showLoad
        }
    }

</script>
