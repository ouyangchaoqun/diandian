<template id="getUpStatistics">
    <div class="getUpStatistics_box">
        <div v-title>{{sleepTypeName}}统计</div>
        <div class="get_header">
            <div class="getupBgView">
                <div class="addTopBox">
                    <div class="canlendarTopView">
                        <div class="leftBgView" @click="oldMonth">
                            <img class="get_old" src="../images/back_white.png" />
                        </div>
                        <div class="get_centerView">{{cur_year || "--"}}年{{cur_month || "--"}}月</div>
                        <div class="rightBgView" @click="nextMonth">
                            <img class="get_next" src="../images/back_white.png" />
                        </div>
                    </div>
                    <div class="addTopColor">平均<span v-if="!isNight">起床</span><span v-if="isNight">睡觉</span>时间</div>
                    <div class="addTopTime">{{monthInfo.avgTime.timeValue||'--:--'}}</div>
                    <div class="addTopFlex">
                        <div class="flexLine"></div>
                        <div class="addTopFlexItem">
                            {{monthInfo.total}}
                            <div class="addTopColor">累计天数</div>
                        </div>
                        <div>
                            {{monthInfo.careCount}}
                            <div class="addTopColor">收获爱心赞</div>
                        </div>
                    </div>
                </div>

                    <div class="getUpBorder">
                        <div class="addTitleColor">早<span v-if="!isNight">起</span><span v-if="isNight">睡</span>时间统计</div>
                    <div class="get_weekBgView">
                        <div class="weekView" v-for="item in weeks_ch">{{item}}</div>
                    </div>
                    <div class="dateBgView">
                        <div class="get_dateEmptyView" v-for="item in empytGrids">{{item.index}}
                        </div>
                        <div v-for="(item,index) in days" :key="index"
                             :class="[commonClass,_month == cur_month&&index == today-1? 'get_dateSelectView' : '']"
                             >
                            <a href="javascript:;">
                                <div class="get_datesView"><div class="get_yuan">{{item.index+1}}</div>

                                </div>
                               <div class="recordTime" v-if="item.getuptime!=0&&item.getuptime!=-1">{{item.getuptime}}</div>
                                <div class="recordTime" v-if="item.getuptime==0"><img src="../images/norecord.png"/></div>
                                <div class="recordTime" v-if="item.getuptime==-1" style="height: 19px;padding-top: 2px;"></div>
                            </a>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        <div class="getUpSlice" v-if="monthCount!=''">

            <div class="getUpMain">
                <div class="getUpTitle">{{sleepTypeName}}时间段分布</div>
                <div class="get_value" v-for="index in monthCount">
                    <div class="getUp_time">{{index.min}}-{{index.max}}</div>
                    <div class="getUp_progress">
                        <div class="weui-progress">
                            <div class="weui-progress__bar">
                                <div class="weui-progress__inner-bar js_progress" :style="index.width" ></div>
                            </div>
                        </div>
                    </div>
                    <div class="getUp_count">{{index.count}}次</div>
                </div>
            </div>
            <!--<div class="getUpCount">-->
                <!--<p>本月共{{sleepTypeName}}打卡{{monthInfo.total}}天，平均<span v-if="!isNight">起床</span><span v-if="isNight">睡觉</span>时间是{{monthInfo.avgTime.timeValue}}，早于{{monthInfo.earlyThan}}的用户！</p>-->
            <!--</div>-->
        </div>
    </div>
</template>
<script type="text/javascript">
    import banner from "./banner.vue";
    import calendarTemplate from './calendarTemplate.vue'

    var calendar = {
        template: '#calendar'
    }
    export default {
        components: {
            "v-banner": banner,
            'v-calendarTemplate':calendarTemplate
        },
        data() {
            return {
                hasEmptyGrid: false,
                cur_year: '',
                cur_month: '',
                weeks_ch: ['日', '一', '二', '三', '四', '五', '六'],
                empytGrids: [],
                days: [],
                commonClass: 'get_dateView',
                _month: '',
                today: '',
                index: '',
                isa: false,
                isb: true,
                swiper_box: true,
                dayMoods: [],
                mySwiper: null,
                maxMonthNum: 4,
                nowMonth: null,
                nowYear: null,
                cur_day:null,
                monthCount:'',
                allInfo:'',
                monthInfo:{avgTime:'--:--'},
                isNight:false,
                sleepTypeName:"早起"
            }
        },

        mounted: function () {
            console.log(this.$route.query.type)
            if(this.$route.query.type==2){
                this.isNight = false;
                this.sleepTypeName="早起";
            }else{
                this.isNight = true
                this.sleepTypeName="早睡";
            }

            this.setNowDate();
            //轮播配置
            let _this = this;
            _this.mySwiper = new Swiper('.swiper-container', {});
            xqzs.wx.setConfig(_this);


            if(_this.$route.query.month!=undefined) {
                let date = new Date();
                let _month = date.getMonth();
                let count = _month - parseInt(_this.$route.query.month);
                for(let i=0;i<=count;i++){
                    _this.oldMonth();
                }
            }

        },
        /*components:{
         "v-swiper_box":swiper_box
         },*/
        created: function () {
            $(".calendar_box").click()
        },
        methods: {
            setNowDate: function () {
                let date = new Date();
                var now = "";
                now = date.getFullYear() + "-"; //读英文就行了
                if (date.getMonth() < 10) {
                    if((date.getMonth() + 1)<10){ now = now + "0" + (date.getMonth() + 1) + "-" }
                    else{now = now + (date.getMonth() + 1) + "-"}
                } else {
                now = now + (date.getMonth() + 1) + "-";//取月的时候取的是当前月-1如果想取当前月+1就可以了
                }
                if(date.getDate()<10){
                    now = now +"0"+ date.getDate();
                }else {
                    now = now + date.getDate();
                }
                let cur_year = date.getFullYear();
                /**年份 */
                let cur_month = date.getMonth() + 1;
                /**月 */
                this.cur_day=now;
                console.log(this.cur_day)
                this.nowYear = cur_year;
                this.nowMonth = cur_month;
                let todayIndex = date.getDay() - 1;
                let today = date.getDate();
                /**日 */
                //console.log(today)
                this.calculateEmptyGrids(cur_year, cur_month);
                /**调用计算空格子*/
                this.calculateDays(cur_year, cur_month);
                let date2 = new Date();
                let _month = date2.getMonth() + 1;
                this.cur_year = cur_year;
                this.cur_month = cur_month;
                this._month = _month;
                this.today = today
                //console.log(today)
                //console.log(cur_month)

            },
            getThisMonthDays(year, month) {
                return new Date(year, month, 0).getDate();
            },
            getFirstDayOfWeek(year, month) {
                return new Date(Date.UTC(year, month - 1, 1)).getDay();
            },
            calculateEmptyGrids(year, month) {
                /**计算空格子*/
                let _this = this;
                var firstDayOfWeek = this.getFirstDayOfWeek(year, month);

                var empytGrids = []
                if (firstDayOfWeek > 0) {
                    for (var i = 0; i < firstDayOfWeek; i++) {
                        empytGrids.push({index: i, date: "", smailUrl: ""});
                    }
                    _this.hasEmptyGrid = true;
                    _this.empytGrids = empytGrids;

                } else {
                    _this.hasEmptyGrid = false;
                    _this.empytGrids = []
                }


            },
            calculateDays(year, month) {
                let noRecord = web.IMG_PATH + "list_mood_0" + 0 + ".png";
                let _this = this;
                let days = [];
                let thisMonthDays = this.getThisMonthDays(year, month);
                let monthchange = month;
                if (month < 10) monthchange = "0" + monthchange;


                for (let i = 1; i <= thisMonthDays; i++) {
                    days.push({index: i - 1, date: "", smailUrl: noRecord, moods: []});
                }
                console.log("1111111111")
                    console.log(this.days)
                this.days = days;
                days = [];
                _this.$http.get(web.API_PATH + 'record/sleep/get/statistics/month/_userId_/'+_this.$route.query.type+'/'+year+'/'+month).then(response => {
                    if (response.data.status === 1) {
                        console.log("22222222222222222")
                        console.log(response.data.data)
                        //进度条统计
                        this.monthCount=response.data.data.distribute;
                        var allcount=0;
                        for(var k=0;k<this.monthCount.length;k++){
                            allcount+=this.monthCount[k].count;
                        }
                        for(var q=0;q<this.monthCount.length;q++){
                            if(allcount>0) {
                                this.monthCount[q].width = "width: " + ((this.monthCount[q].count / allcount) * 100) + "%;"
                            }
                            else{
                                this.monthCount[q].width="width:0%;"
                            }
                        }
                        //文字统计
                        this.allInfo=response.data.data.info;
                        this.monthInfo=response.data.data.month;
                        console.log(this.monthInfo)
                        //日历输出
                        if (thisMonthDays > 0) {
                            for (let i = 1; i <= thisMonthDays; i++) {
                                let dayChange = i;
                                if (i < 10) dayChange = "0" + i;
                                let dateStr = year + "-" + monthchange + "-" + dayChange;
                                let shorttime = 0;

                                for (let j = 0; j < response.data.data.daily.length; j++) {
                                    if (dateStr === response.data.data.daily[j].date) {
                                        shorttime = response.data.data.daily[j].shorttime;
                                    }
                                }
                                if(dateStr<=this.cur_day){
                                days.push({index: i - 1, date: dateStr, getuptime:shorttime});
                                }
                                else if(dateStr>this.cur_day){
                                days.push({index: i - 1, date: dateStr, getuptime: -1});
                                }else{

                                days.push({index: i - 1, date: dateStr, getuptime: shorttime});
                                }
                            }
                        }
                        this.days = days;
                    } else {
                        for (let i = 1; i <= thisMonthDays; i++) {
                            days.push({index: i - 1, date: "", getuptime: 0, moods: []});
                        }
                    }
                }, response => {
                    for (let i = 1; i <= thisMonthDays; i++) {
                        days.push({index: i - 1, date: "", getuptime: 0, moods: []});
                    }
                });

                //
            },
            oldMonth: function () {                             //上个月
                let cur_year = this.cur_year;
                let cur_month = this.cur_month;

                //阻止前面的的月份
                let firstYear = this.nowYear;
                let firstMonth = this.nowMonth;
                firstMonth = firstMonth - this.maxMonthNum;
                if (firstMonth <= 0) {
                    firstYear = firstYear - 1;
                    firstMonth = 12 + firstMonth;
                }
                if (firstYear === cur_year && firstMonth === cur_month) {
                    return;
                }


                let newMonth = cur_month - 1;
                let newYear = cur_year;
                if (newMonth < 1) {
                    newYear = cur_year - 1;
                    newMonth = 12;
                }
                this.calculateDays(newYear, newMonth);
                this.calculateEmptyGrids(newYear, newMonth);
                this.cur_year = newYear,
                        this.cur_month = newMonth
            },
            nextMonth: function () {                             //下个月
                let cur_year = this.cur_year;
                let cur_month = this.cur_month;

                //阻止后面的月份
                if (this.nowYear === cur_year && this.nowMonth === cur_month) {
                    return;
                }

                let newMonth = cur_month + 1;
                let newYear = cur_year;
                if (newMonth > 12) {
                    newYear = cur_year + 1;
                    newMonth = 1;
                }

                this.calculateDays(newYear, newMonth);
                this.calculateEmptyGrids(newYear, newMonth);

                this.cur_year = newYear;
                this.cur_month = newMonth;
            },

            hideSwiper: function () {                                 //轮播隐藏事件
                let _this= this;
                xqzs.weui.weuiMaskClose();
                setTimeout(function () {
                    _this.isa = false;
                    _this.isb = true;
                    _this.moveMove();
                },200)

            },

            /***禁止滑动***/
            moveStop: function () {
                $('body').css('overflow', 'hidden') .on('touchmove', function(e) {
                    e.preventDefault();
                })
            },

            /***取消滑动限制***/
            moveMove: function () {
                $('body').off().css('overflow', 'auto');
            },
            formatContent:function (c) {
                return xqzs.face.parse(c);
            }
        },
        updated:function () {
            xqzs.weui.active($(".get_dateView a"))
        }

    }
</script>

<style>
    .getUpStatistics_box {
        height: 100%;
        background: #fff;
    }
    .get_header {

        position: relative;

    }
    .recordTime{
        color: #0D0D0D;
        font-size:0.64rem;
    }
    .get_old {
        left: 40px;
        height: 1rem;
        width: 0.6rem;
        position: absolute;
        top: 15px;
        display: block;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
    }

    .get_next {
        right: 40px;
        height:1rem;
        width: 0.6rem;
        position: absolute;
        top: 15px;
        display: block;
    }

    .getUpBorder{
        border-radius: 10px;
        width: 95%;
        margin: 0 auto;
        background-color: #fff;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: -2rem;
        box-shadow: 0px 2px 10px 2px rgba(102,102,102,0.2);
    }
    .week_day text {
        flex: 1;
        text-align: center;
        color: #828080;
        font-size: 12px;
    }

    .getupBgView {

        align-items: center;

    }
    .canlendarTopView {
        height: 2.11rem;
        font-size: 1rem;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.647rem;
    }
    .canlendarTopView .get_centerView{ margin-top: 0.7rem;}

    .leftBgView {
        text-align: right;
        height: 2.35rem;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        flex-direction: row-reverse;
    }

    .get_centerView {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        height: 2.12rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        line-height: 2.12rem;
        margin-top: 15px;
    }

    .rightBgView {
        height: 2.35rem;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        flex-direction: row;
    }

    .get_weekBgView {
        height: 1.47rem;
        line-height: 1.47rem;
        padding-bottom: 0.412rem;
        color:#828080
    }

    .get_weekView {
        flex-grow: 1;
        text-align: center;
        font-size: 0.70rem;
        float: left;
        width: 12.85%;
    }

    .dateBgView {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .get_dateEmptyView {
        width: 14.28571%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        float: left;
        border-top: 1px solid #eee;
    }



    .get_dateView {
        width: 14.28571%;
        background: #ffffff;
        position: relative;
        text-align: center;
        float: left;
        height: 2.64rem;
        border-top: 1px solid #eee;
    }

    .get_dateView img {
        height: 1.53rem;
        width: 1.53rem;
        display: block;
        margin: 0.35px auto;
        margin-top: 0.235rem;
        margin-bottom: 0.47rem;
    }

    .get_datesView {
        height: 1.176rem;
        color: #828080;
        font-size: 0.64rem;
        align-items: flex-end;
        justify-content: center;
        text-align: center;
    }

    .get_dateSelectView .get_datesView .get_yuan {
        width: 1.176rem;
        height: 1.176rem;
        color: #0BB20C;
        margin: 0 auto;
        margin-top: 0.176rem;
    }
    .getUpTitle{
        text-align: center;
    }
    .getUpMain{
        width: 95%;
        margin: 0 auto;
        margin-top: 0.82rem;
        background-color: #fff;
        border-radius: 10px;
        padding: 0.7rem 0;
        box-shadow: 0px 2px 10px 2px rgba(102,102,102,0.2);
    }
    .get_value{
        height: 2.35rem;
        position: relative;
    }
    .getUp_time{
        font-size: 0.70rem;
        position: absolute;
        left: 1.17rem;
        top: 50%;
        margin-top: -0.47rem;
    }
    .getUp_progress{
        width: 55%;
        position: absolute;
        left: 5.88rem;
        top: 50%;
        margin-top: -0.441175rem;
    }
    .getUp_count{
        position: absolute;
        right: 1.17rem;
        top:50%;
        margin-top: -0.588rem;
        font-size: 0.70rem;
    }
    .getUpCount{
        text-align: center;
        margin-top: 1.47rem;
        margin-bottom: 20px;
    }
    .getUpCount p{
        font-size: 0.7rem;
        color: rgba(99,106,116,1);
    }
    .get_top{
        margin-top: 0.82rem;
    }
     .get_dateView .recordTime img{
            height: 0.94rem;
        margin: 0 auto;
        display: block;
         width: auto;
    }
     .get_value .weui-progress__bar{
        height: 0.88235rem;
        background: rgba(245,245,245,1);
        border-radius: 7px;
    }

     .get_value .weui-progress__inner-bar {
        border-radius: 7px;
         background: linear-gradient(to right,rgba(24,188,132,1), rgba(20,151,160,1));;
    }

    .get_yuan{
        height: 1.176rem;
        margin-top: 0.176rem;
    }
    .addTopBox{
        height:18.471rem;
        background: linear-gradient(rgba(24,188,132,1), rgba(20,151,160,1));
        color:#fff;
    }
    .addTopColor{font-size: 0.88235rem;color:rgba(255,255,255,0.6);text-align: center;line-height: 1;margin-bottom: 1.1rem;padding-top:0.8rem;}
    .addTopTime{text-align: center;font-size: 3.471rem;margin-bottom: 1.4rem;line-height: 1}
    .addTopFlex{width:72%;margin:0 auto;display: flex;font-size: 1.76471rem;border-top: 1px solid rgba(255,255,255,0.3);position: relative;line-height: 1;padding-top:1.2rem;}
    .addTopFlex>div{flex:1;text-align: center;}
    .addTopFlexItem{padding-right:6rem}
    .flexLine{position: absolute;left:50%;width:1px;height:2.588rem;background:rgba(255,255,255,0.3); }
    .addTitleColor{color:#303030;font-size: 0.88235rem;text-align: center;margin-bottom: 1rem}
    .getUpSlice{margin-bottom: 3.5rem;padding-top: 0.88235rem}
</style>