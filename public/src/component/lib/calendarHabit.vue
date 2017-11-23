<template >
    <div class="calendarTemplate_box">
            <div class="canlendarBgView">
                <div class="canlendarView">
                    <div class="canlendarTopView">
                        <div class="leftBgView" @click="oldMonth">
                            <img class="old" src="../../images/back.png" />
                        </div>
                        <div class="centerView">{{cur_year || "--"}}年{{cur_month || "--"}}月</div>
                        <div class="rightBgView" @click="nextMonth">
                            <img class="next" src="../../images/back.png" />
                        </div>
                    </div>
                    <div class="weekBgView">
                        <div class="weekView" v-for="item in weeks_ch">{{item}}</div>
                    </div>
                    <div class="dateBgView">
                        <div class="dateEmptyView" v-for="item in empytGrids">{{item.index}}
                            <div class="dateEmptyView_right"></div>
                            <div class="dateEmptyView_bottom"></div>
                        </div>
                        <div v-for="(item,index) in days" :key="index"
                             :class="[commonClass,_month == cur_month&&index == today-1? 'dateSelectView' : '']"
                             @click="showSwiper(index)">
                            <a href="javascript:;">
                                <div class="datesView">{{item.index+1}}
                                    <div class="dateEmptyView_right"></div>
                                    <div class="dateEmptyView_bottom"></div>
                                </div>
                                <img :src="item.smailUrl"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div style="height: 10px;background: #fff"></div>
    </div>
</template>
<script type="text/javascript">
    import Bus from '../bus.js';


    export default {
        data() {
            return {
                hasEmptyGrid: false,
                cur_year: '',
                cur_month: '',
                weeks_ch: ['日', '一', '二', '三', '四', '五', '六'],
                empytGrids: [],
                days: [],
                commonClass: 'dateView',
                _month: '',
                today: '',
                index: '',
                isShow: false,
                isHidden: true,
                swiper_box: true,
                dayMoods: [],
                dayMoods2: [],
                dayMoods3: [],
                mySwiper: null,
                maxMonthNum: 4,
                nowMonth: null,
                nowYear: null,
                empLength:null,
                dayLenght:null
            }
        },
        props: {
            habitId: 0,
            icon:String  ,
            iconON:String,
        },
        mounted: function () {
            console.log(this.habitId)
            this.setNowDate();
            //轮播配置
            let _this = this;
            _this.mySwiper = new Swiper('.swiper-container', {

            });


            Bus.$on('oldMonthClick',function () {
                _this.oldMonth()
            })
        },
        created: function () {
            $(".calendar_box").click()
        },
        methods: {
            setNowDate: function () {
                let date = new Date();
                let cur_year = date.getFullYear();
                /**年份 */
                let cur_month = date.getMonth() + 1;
                /**月 */
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
            setContentHeight:function (days) {
                var lines = Math.ceil(days/7);
                var hh = $('.canlendarTopView').outerHeight(true)+$('.weekBgView').outerHeight(true);
                var itemHeight = $('.dateView:eq(0)').height();
                $('.content-slide').height(itemHeight*lines+hh+10);
            },
            showSwiper: function (index) {
                let _this = this;
                let calendarCount=0;
                for(var i=0;i<=index;i++){
                    calendarCount += _this.days[i].moods.length;
                }
                if(_this.dayMoods3=[]){//获取当月所有数据
                    for(var i=0;i<_this.days.length;i++){
                        _this.dayMoods3 = _this.dayMoods3.concat(_this.days[i].moods)
                    }
                }

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
                _this.empLength = _this.empytGrids.length;
                console.log(_this.empLength)
            },
            calculateDays(year, month) {

                let _this = this;
                let defaultImgUrl = _this.icon;
                let days = [];
                let thisMonthDays = this.getThisMonthDays(year, month);
                let monthchange = month;
                if (month < 10) monthchange = "0" + monthchange;


                for (let i = 1; i <= thisMonthDays; i++) {
                    days.push({index: i - 1, date: "", smailUrl: defaultImgUrl, moods: []});
                }

                this.days = days;
                days = [];
                _this.$http.get(web.API_PATH + 'habit/query/calendar/list/_userId_/'+_this.habitId+'?date=' + year + '-' + monthchange + '-01').then(response => {
                    if (response.data.status === 1) {
                        if (thisMonthDays > 0) {
                            for (let i = 1; i <= thisMonthDays; i++) {
                                let dayChange = i;
                                if (i < 10) dayChange = "0" + i;
                                let dateStr = year + "-" + monthchange + "-" + dayChange;
                                let moods = [];
                                let smailUrl = _this.icon;
                                for (let j = 0; j < response.data.data.length; j++) {
                                    if (dateStr === response.data.data[j].dt) {
                                        smailUrl =_this.iconON;
                                    }
                                }

                                days.push({index: i - 1, date: dateStr, smailUrl: smailUrl});
                            }


                        }

                        this.days = days

                    } else {
                        for (let i = 1; i <= thisMonthDays; i++) {
                            days.push({index: i - 1, date: "", smailUrl: defaultImgUrl});
                        }
                    }
                }, response => {
                    for (let i = 1; i <= thisMonthDays; i++) {
                        days.push({index: i - 1, date: "", smailUrl: defaultImgUrl});
                    }
                });

                _this.dayLenght = this.days.length
                console.log(_this.dayLenght)
                //
            },
            oldMonth: function () {
                if(this.$route.params.Id!=''&&this.$route.params.Id!=undefined&&this.$route.params.Id!='_userId_'){
                    return;
                }

               //上个月
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
                    this.cur_year = newYear;
                    this.cur_month = newMonth;

                this.setContentHeight(this.dayLenght+this.empLength)



            },
            nextMonth: function () {
                //下个月
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


                this.setContentHeight(this.dayLenght+this.empLength);
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
        }

    }
</script>

<style>
    .calendarTemplate_box{
        height:auto;
    }
    .show_box_cal {
        visibility: inherit;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
    }

    .hidden_box {
        visibility: hidden;
    }

    .calendar_box {
        height: 100%;
        background: #ffffff;
    }

    .banner {
        width: 100%;
    }

    .banner img {
        display: block;
        width: 100%;
    }

    .rl_header {
        height: 60px;
        position: relative;

    }

    .old {
        left: 15px;
        height: 20px;
        width: 20px;
        position: absolute;
        top: 8px;
        display: block;
    }


    .next {
        right: 15px;
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
        height: 20px;
        width: 20px;
        position: absolute;
        top: 8px;
        display: block;
        margin-top: 0 !important
    }

    .week_day text {
        flex: 1;
        text-align: center;
        color: #828080;
        font-size: 12px;
    }

    .canlendarBgView {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ffffff;
        position: relative;
    }
    .canlendarBgView:after{ content: "";
        height:1px; background: #f1f1f1; position: absolute; bottom:0; display: block; width: 100%; }

    .canlendarView {
        display: flex;
        flex-direction: column;
    }

    .canlendarTopView {
        height: 36px;
        font-size: 17px;
        display: flex;
        display: -webkit-box;
        display: -webkit-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 11px;
    position: relative;
    }
    .canlendarTopView .centerView{ margin-top: 3px;}

    .leftBgView {
        text-align: right;
        height: 40px;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }

    .centerView {
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        height: 36px;
        text-align: center;
        align-items: center;
        justify-content: center;
        color: #666666;
        line-height: 36px;
    }

    .rightBgView {
        height: 40px;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
    }

    .weekBgView {
        height: 25px;
        line-height: 25px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid rgba(238,238,238,0.7);
        padding-bottom: 7px;
        color:#828080
    }

    .weekView {
        flex-grow: 1;
        text-align: center;
        font-size: 12px;
        float: left;
        width: 14.28571%;
     }

    .dateBgView {
        height: auto;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .dateEmptyView {
        width: 14.28571%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        float: left;
        height: 66px;
    }

    .dateEmptyView_right {
        width: 1px;
        height: 100%;
        background: #eeeeee;
        position: absolute;
        right: 0;
        top: 0;
        opacity: 0.7;
    }

    .dateEmptyView_bottom {
        height: 1px;
        width: 100%;
        background: #eeeeee;
        position: absolute;
        bottom: 0;
        left: 0;
        opacity: 0.7;
    }

    .dateView {
        width: 14.28571%;
        display: flex;
        background: #ffffff;
        flex-direction: column;
        justify-content: center;
        position: relative;
    text-align: center;
        float: left;
    }

    .dateView img {
        height: 26px;
        width: 26px;
        display: block;
        margin: 6px auto;
        margin-top: 4px;
        margin-bottom: 8px;
    }

    .datesView {
        height: 28px;
        color: #828080;
        font-size: 13px;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 2px;
        text-align: center;
    }

    .dateSelectView {
        background: #fef8e5;
    }

    .clickBox_time {
        position: absolute;
        text-align: center;
        padding: 0 20px;
        bottom: 6px;
        font-size: 14px;
        color: #999999;
        height: 72px;
        overflow: hidden;
    }

    .clickBox_time span {
        margin: 0 5px;
    }

    .clickBox_bottom {
        margin-top: 6px;
    }

    .bg_box {

        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        height: 100%;
        width: 100%;
        z-index: 1;

    }

    .swiper_box {

        position: absolute;
        top: 25%;
        left: 50%;
        margin-left: -100px;
    }

    #bg_back {
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 1000;
    }

    .clickBox {
        width: 100%;
        text-align: center;
        z-index: 100;
        position: absolute;
        top: 2.52rem;
        height: auto;
        transition: top 1s;
    }

    .clickBox_time {
        position: absolute;
        bottom: 5%;
        width: 90%;
        height: 30%;
        left: 50%;
        margin-left: -50%;
    }

    .clickBox_time span {
        font-size: 12px;
        color: #999999;
        margin: 0 5px;
        line-height: 22px;;
    }


    .swiper-slide {
        height: auto;
    }


</style>