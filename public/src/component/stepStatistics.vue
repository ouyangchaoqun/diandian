<template id="stepStatistics">
    <div class="stepStatistics">
        <div v-title>步数统计</div>
        <div class="get_header">
            <div class="getupBgView">
                    <div class="canlendarTopView">
                        <div class="leftBgView" @click="oldMonth">
                            <img class="get_old" src="../images/step_topjt.png" />
                        </div>
                        <div class="get_centerView">{{cur_year || "--"}}-{{cur_month || "--"}}</div>
                        <div class="rightBgView" @click="nextMonth">
                            <img class="get_next" src="../images/step_topjt.png" />
                        </div>
                    </div>
                    <div class="getUpBorder">
                    <div class="get_weekBgView">
                        <div class="weekView" v-for="item in weeks_ch">{{item}}</div>
                    </div>
                    <div class="dateBgView">
                        <div class="get_dateEmptyView" v-for="item in empytGrids">{{item.index}}
                        </div>
                        <div v-for="(item,index) in days" :key="index"
                             :class="[commonClass,_month == cur_month&&index == today-1? 'get_dateSelectView' : '']"
                             @click="showDay(index)">
                            <a href="javascript:;">
                                <div class="get_datesView"><div class="get_yuan">{{index+1}}</div>

                                </div>
                               <div class="recordTime" v-if="index<=today-1||!isLast">
                                    {{stepChange(item.step)}}
                               </div>
                            </a>
                        </div>
                    </div>
                    </div>
            </div>

        </div>
        <div style="height:0.588235rem;background: rgba(238,237,237,1)"></div>
        <ul class="stepStatistics_info">
            <li>
                <img src="../images/stepInfo1.png" alt="">今日步数<div>{{stepChange(showInfo.step)}}<span>步</span></div>
            </li>
            <li>
                <img src="../images/stepInfo2.png" alt="">行走距离<div>{{showKm}}<span>公里</span></div>
            </li>
            <li>
                <img src="../images/stepInfo3.png" alt="">消耗卡路里<div>{{showPower}}<span>大卡</span></div>
            </li>
        </ul>
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
                showInfo:'',
                showKm:'',
                showPower:'',
                user:'',
                isLast:false,
            }
        },
        mounted: function () {
            this.setNowDate();
            this.getUser()
            //轮播配置
            let _this = this;
            _this.mySwiper = new Swiper('.swiper-container', {});
            if(_this.user&&_this.user.faceUrl)xqzs.wx.shareConfig.rank=_this.user.faceUrl;
             xqzs.wx.setConfig(_this,false,xqzs.wx.shareConfig.rank);

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
            stepChange:function (n) {
                if(n>=10000){
                    n = parseInt(n/1000) + 'k';
                }
                return n;
            },
            getUser:function () {
                var _this = this;
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.data !== null) {
                        _this.user = eval(data.data.data);
                    }
                }, function (error) {
                    //error
                });
            },
            showDay:function (day) {//下方展示信息
                var _this = this;
                _this.showInfo = _this.days[day];
                console.log(_this.user)
                if(_this.user.sex==2){
                    _this.showKm = (_this.showInfo .step*0.66/1000).toFixed(1);
                    _this.showPower = parseInt(_this.showKm*35)
                }else{
                    _this.showKm = (_this.showInfo .step*0.74/1000).toFixed(1);
                    _this.showPower = parseInt(_this.showKm*40)
                }
                console.log(_this.showKm)
                console.log(_this.showPower)
                    $('.get_dateView').click(function () {
                    $('.get_dateView').removeClass('get_dateSelectView')
                    $(this).addClass('get_dateSelectView')
                })
            },
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
                if(cur_year==this.cur_year&&cur_month==this.cur_month){
                    this.isLast = true;
                }else{
                    this.isLast = false;
                }


                /**月 */
                this.cur_day=now;
                console.log(this.cur_day)
                this.nowYear = cur_year;
                this.nowMonth = cur_month;
                let todayIndex = date.getDay() - 1;
                let today = date.getDate();
                console.log('today'+today)
                /**日 */
                this.calculateEmptyGrids(cur_year, cur_month);
                /**调用计算空格子*/
                this.calculateDays(cur_year, cur_month,today);
                let date2 = new Date();
                let _month = date2.getMonth() + 1;
                this.cur_year = cur_year;
                this.cur_month = cur_month;
                this._month = _month;
                this.today = today;

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
                        empytGrids.push({index: i, date: "", step: ""});
                    }
                    _this.hasEmptyGrid = true;
                    _this.empytGrids = empytGrids;

                } else {
                    _this.hasEmptyGrid = false;
                    _this.empytGrids = []
                }


            },
            calculateDays(year, month,clickDay) {
                let _this = this;
                let days = [];
                let thisMonthDays = this.getThisMonthDays(year, month);
                let monthchange = month;
                if (month < 10) monthchange = "0" + monthchange;
                console.log(month+'month')

                for (let i = 1; i <= thisMonthDays; i++) {
                    days.push({index: i - 1, date: "", step: ''});
                }
                this.days = days;
                days = [];
                _this.$http.get(web.API_PATH + 'werun/month/statistics/_userId_'+'?date='+year+'-'+monthchange+'-'+clickDay).then(response => {
                    if (response.data.status === 1) {
                    _this.days = response.data.data;
                    console.log(_this.days)
                    _this.showDay(clickDay-1)
                    } else {

                    }
                }, response => {

                });

                //
            },

            oldMonth: function () {                             //上个月
                let cur_year = this.cur_year;
                let cur_month = this.cur_month;
                let defauDay = '01';
                $('.get_dateView').removeClass('get_dateSelectView')
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
                this.calculateDays(newYear, newMonth,defauDay);

                this.calculateEmptyGrids(newYear, newMonth);
                this.cur_year = newYear,
                        this.cur_month = newMonth
            },
            nextMonth: function () {                             //下个月
                let cur_year = this.cur_year;
                let cur_month = this.cur_month;
                let defauDay = '01';
                $('.get_dateView').removeClass('get_dateSelectView')
                //阻止后面的月份
                if (this.nowYear === cur_year && this.nowMonth === cur_month) {
                    return;
                }

                let newMonth = cur_month + 1;
                let date = new Date();
                let nowMonth = date.getMonth()+1;
                if(newMonth==nowMonth){
                    defauDay = date.getDate();
                }
                let newYear = cur_year;
                if (newMonth > 12) {
                    newYear = cur_year + 1;
                    newMonth = 1;
                }

                this.calculateDays(newYear, newMonth,defauDay);

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
    .stepStatistics_info li{
        padding-left:1.176471rem;
        padding-right: 1.471rem;
        height:2.88rem;
        line-height: 2.88rem;
        border-bottom: 1px solid #eee;
        font-size: 0.8235rem;
        color:rgba(153,153,153,1);
        clear: both;
    }
    .stepStatistics_info li img{
        width:0.70588rem;
        margin-right: 0.88235rem;
        vertical-align: middle;
    }
    .stepStatistics_info li div{
        float: right;
        color:rgba(102,102,102,1);
        font-size: 1.0588rem;
    }
    .stepStatistics_info li div span{
        font-size: 0.6471rem;
        margin-left: 0.294rem;
    }
    .stepStatistics {
        height: 100%;
        background: #fff;
    }
    .stepStatistics .get_header {

        position: relative;

    }
    .stepStatistics .recordTime{
        color: rgba(102,204,153,1);
        font-size:0.70588rem;
    }
    .stepStatistics .get_old {
        left: 40px;
        height: 0.588235rem;
        width: 0.5588rem;
        position: absolute;
        top: 15px;
        display: block;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
    }

    .stepStatistics .get_next {
        right: 40px;
        height: 0.588235rem;
        width: 0.5588rem;
        position: absolute;
        top: 15px;
        display: block;
    }

    .stepStatistics .getUpBorder{
        margin: 0 auto;
        background-color: #fff;
        padding-top: 0.588235rem;
        padding-bottom: 10px;
    }
    .stepStatistics .week_day text {
        flex: 1;
        text-align: center;
        color: #828080;
        font-size: 12px;
    }

    .stepStatistics .getupBgView {

        align-items: center;

    }
    .stepStatistics .canlendarTopView {
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
    .stepStatistics .getupBgView .canlendarTopView{
        height:2.4rem;
        color:rgba(51,51,51,1);
        font-size: 0.88235rem;
        line-height: 2.4rem;
        margin-bottom: 0;
    }
    .stepStatistics .leftBgView {
        text-align: right;
        height: 2.35rem;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        flex-direction: row-reverse;
    }

    .stepStatistics .get_centerView {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .stepStatistics .rightBgView {
        height: 2.35rem;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        flex-direction: row;
    }

    .stepStatistics .get_weekBgView {
        height: 0.8235rem;
        line-height: 0.8235rem;
        padding-bottom: 1rem;
        color:rgba(51,51,51,1);
        font-size: 0.76471rem;
    }

    .stepStatistics .get_weekView {
        flex-grow: 1;
        text-align: center;
        font-size: 0.70rem;
        float: left;
        width: 12.85%;
    }

    .stepStatistics .dateBgView {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .stepStatistics .get_dateEmptyView {
        width: 14.28571%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        float: left;
    }



    .stepStatistics .get_dateView {
        width: 14.28571%;
        background: #ffffff;
        position: relative;
        text-align: center;
        float: left;
        height: 3.0588rem;
    }

    .stepStatistics .get_dateView img {
        height: 1.53rem;
        width: 1.53rem;
        display: block;
        margin: 0.35px auto;
        margin-top: 0.235rem;
        margin-bottom: 0.47rem;
    }

    .stepStatistics .get_datesView {
        height: 1.176rem;
        color: rgba(153,153,153,1);
        font-size: 0.70588rem;
        align-items: flex-end;
        justify-content: center;
        text-align: center;
    }

    .stepStatistics .get_dateSelectView .get_datesView .get_yuan {
        width: 1.176rem;
        height: 1.176rem;
        color: #fff;
        margin: 0 auto;
        margin-top: 0.176rem;
        background: rgba(120,211,157,1);
        border-radius: 50%;
    }
    .stepStatistics .getUpTitle{
        text-align: center;
    }
    .stepStatistics .getUpMain{
        width: 95%;
        margin: 0 auto;
        margin-top: 0.82rem;
        background-color: #fff;
        border-radius: 10px;
        padding: 0.7rem 0;
        box-shadow: 0px 2px 10px 2px rgba(102,102,102,0.2);
    }




     .get_dateView .recordTime img{
            height: 0.94rem;
        margin: 0 auto;
        display: block;
         width: auto;
    }






    .get_yuan{
        height: 1.176rem;
        margin-top: 0.176rem;
    }
</style>