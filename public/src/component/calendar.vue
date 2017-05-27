<template id="calendar" >
	<div class="calendar_box">
		<div class="banner">
			<img src="../images/banner.jpg"/>
		</div>


		<div class="rl_header">
			<div class="canlendarBgView">
				<div class="canlendarView">
					<div class="canlendarTopView">
						<div class="leftBgView" >
							<img class="old" src="../images/back.png" @click="oldMonth" />
						</div>
						<div class="centerView">{{cur_year || "--"}} 年 {{cur_month || "--"}} 月</div>
						<div class="rightBgView" >
							<img class="next" src="../images/back.png" @click="nextMonth" />
						</div>
					</div>
					<div class="weekBgView">
						<div class="weekView" v-for="item in weeks_ch">{{item}}</div>
					</div>
					<div class="dateBgView">
						<div class="dateEmptyView"  v-for="item in empytGrids">{{item}}</div>
						<div v-for="(item,index) in days" :key="index" :class="[commonClass,_month == cur_month&&index == today-1? 'dateSelectView' : '']" @click="showSwiper()">
							<div class="datesView">{{item}} </div>
							<img src="../images/face1.png"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--<v-swiper_box v-if="swiperFlag" @click="hideSwiper()"></v-swiper_box>-->

		<div :class="[{show_box:isa,hidden_box:isb}]" @click="hideSwiper()">
			<div id="bg_back" >
				<div class="swiper-container clickBox">
					<div class="swiper-wrapper">
						<div class="swiper-slide">
							<img src="../images/bg_mood_01.png" alt="" />
							<div class="clickBox_time">
								<span>4月13日</span><span>星期1</span><span>08:20:40</span>
								<div class="clickBox_bottom">今天很高兴今天很高兴今天很高兴今天很高兴今天很高兴</div>
							</div>
						</div>
						<div class="swiper-slide">
							<img src="../images/bg_mood_02.png" alt="" />
							<div class="clickBox_time">
								<span>4月13日</span><span>星期2</span><span>08:20:40</span>
								<div class="clickBox_bottom">今天很高兴今天很高兴今天很高兴今天很高兴今天很高兴今天很高兴今天很高兴天很高兴</div>
							</div>
						</div>
						<div class="swiper-slide">
							<img src="../images/bg_mood_04.png" alt="" />
							<div class="clickBox_time">
								<span>4月13日</span><span>星期</span><span>08:20:40</span>
								<div class="clickBox_bottom">今天很高兴今天很高兴今天很高兴今天很高兴今天很高兴今天很高兴今天很高兴天很高兴</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>
<script type="text/javascript">

    var calendar={
		template:'#calendar'
	}
    export default {
        data() {
            return {
                hasEmptyGrid: false,
                cur_year: '',
                cur_month: '',
                weeks_ch : ['日', '一', '二', '三', '四', '五', '六'],
                empytGrids : [],
				days:[],
				isa:true,
                commonClass:'dateView',
                _month:'',
				today:'',
				index:'',
                isa:false,
				isb:true,
                swiper_box:true
			}
        },
        mounted(){                                            //轮播配置
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal'
            })
        },
		/*components:{
			"v-swiper_box":swiper_box
		},*/
		created:function () {
            this.setNowDate();
		 },
		methods:{
			setNowDate: function () {
                var date = new Date();
                var cur_year = date.getFullYear();   /**年份 */
                //console.log(cur_year)
                var cur_month = date.getMonth() + 1;    /**月 */
                //console.log(cur_month)
                var todayIndex = date.getDay() - 1;
                var today = date.getDate();              /**日 */
                //console.log(today)
				this.calculateEmptyGrids(cur_year, cur_month);          /**调用计算空格子*/
                this.calculateDays(cur_year, cur_month);
                var date2 = new Date();
                var _month = date2.getMonth() +1
				this.cur_year=cur_year,
				this.cur_month= cur_month
               	this._month = _month
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
            calculateEmptyGrids(year, month) {                                 /**计算空格子*/
            var firstDayOfWeek = this.getFirstDayOfWeek(year, month);
                //console.log(firstDayOfWeek)
				var empytGrids=[]
                if (firstDayOfWeek > 0) {
                    for (var i = 0; i < firstDayOfWeek; i++) {
						empytGrids.push(i);
                    }
                    //console.log(empytGrids)
						this.hasEmptyGrid=true,
                        this.empytGrids = empytGrids
                   ;
                } else {
                    	this.hasEmptyGrid=false,
                        this.empytGrids=[]
                    }
			},
            calculateDays(year, month) {
                var days = [];
				var thisMonthDays = this.getThisMonthDays(year, month);
				for (var i = 1; i <= thisMonthDays; i++) {
					days.push(i);
                }
				this.days = days
				console.log(days)
			},
            oldMonth:function() {                             //上个月
				var cur_year = this.cur_year;
                var cur_month = this.cur_month;
				var newMonth = cur_month - 1;
				var newYear = cur_year;
				if (newMonth < 1) {
                        newYear = cur_year - 1;
                        newMonth = 12;
				}
					this.calculateDays(newYear, newMonth);
                    this.calculateEmptyGrids(newYear, newMonth);
						this.cur_year= newYear,
                        this.cur_month= newMonth
			},
			nextMonth:function () {                             //下个月
				var cur_year = this.cur_year;
                var cur_month = this.cur_month;
				var newMonth = cur_month + 1;
                var newYear = cur_year;
                if (newMonth > 12) {
                    newYear = cur_year + 1;
                    newMonth = 1;
                }
					this.calculateDays(newYear, newMonth);
                    this.calculateEmptyGrids(newYear, newMonth);
                    	this.cur_year= newYear,
						this.cur_month= newMonth
            },
			showSwiper:function () {                                 //日期点击事件
				this.isa = true;
				this.isb = false
            },
            hideSwiper:function () {                                 //轮播隐藏事件
                this.isa = false;
                this.isb = true
            }
		}

    }
</script>

<style>
	.show_box{
		visibility: inherit;
	}
	.hidden_box{
		visibility: hidden;
	}
	.calendar_box{
		height:100%;
		background: #ffffff;
		padding-bottom: 100px;
	}
	.banner{
	  width: 100%;
	}
	.banner img{
		display: block;
		width: 100%;
	}
	.rl_header{
		height:60px;
		position: relative;

	}
	.old{
		left:30px;
		height:24px;
		width:24px;
		position: absolute;
		top:10px;
		display: block;
	}
	.next{
		right:30px;
		transform: rotate(180deg);
		height:24px;
		width:24px;
		position: absolute;
		top:10px;
		display: block;
	}
	.week_day text{
		flex: 1;
		text-align: center;
		color:#828080;
		font-size: 12px;
	}
	.canlendarBgView {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.canlendarView {
		color: #17b7b2;
		display: flex;
		flex-direction: column;
	}

	.canlendarTopView {
		height: 40px;
		font-size: 14px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.leftBgView {
		text-align: right;
		height: 40px;
		display: flex;
		flex-direction: row-reverse;
	}

	.centerView {
		width: 50%;
		height: 40px;
		text-align: center;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		color:#666666;
	}

	.rightBgView {
		height: 40px;
		display: flex;
		flex-direction: row;
	}


	.weekBgView {
		height: 25px;
		line-height: 25px;
		opacity: 0.5;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.weekView {
		flex-grow: 1;
		text-align: center;
		font-size: 14px;
		color:#333;
		border-bottom:1px solid #eeeeee;

	}

	.dateBgView {
		height: 250px;
		width:100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.dateEmptyView {
		width: 14%;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		border-right:1px solid #eeeeee;
		border-bottom:1px solid #eeeeee
	}

	.dateView {
		width: 14%;
		color: #fff;
		display: flex;
		flex-direction:column;
		justify-content: center;
		border-right:1px solid #eeeeee;
		border-bottom:1px solid #eeeeee
	}
	.dateView img{
		height:30px;
		width:30px;
		display:block;
		margin:5px auto;
	}

	.datesView {

		height: 30px;
		color: #828080;
		font-size: 13px;
		display: flex;
		align-items: center;
		justify-content: center;

	}
	.dateSelectView{
		background:#fef8e5;
	}

	.clickBox_time{
		position:absolute;
		text-align:center;
		padding:0 20px;
		bottom:6px;
		font-size:14px;
		color:#999999;
		height:72px;
		overflow: hidden;
	}
	.clickBox_time span{
		margin:0 5px;
	}
	.clickBox_bottom{
		margin-top:6px;
	}
	.bg_box{

		position:fixed;
		top: 0;left: 0;
		background: rgba(0,0,0,0.5);
		height:100%;width:100%;
		z-index:1;

	}

	.swiper_box{

		position: absolute;
		top:25%;
		left:50%;
		margin-left: -100px;
	}
	#bg_back{
		position:fixed;
		top: 0;left: 0;
		background: rgba(0,0,0,0.5);
		height:100%;width:100%;
		z-index:100;
	}
	.clickBox {
		width: 100%;
		text-align: center;
		z-index:100;
		border-radius: 10px;
		position: absolute;
		top:30%;
		font-size: 18px;
		color: #666666;
		height:auto;
	}
	.clickBox img{
		width:90%;
		height:auto;
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
		line-height: 22px;
	;
	}

	.clickBox_bottom {
		font-size: 13px;
		color: #333333;
		line-height: 20px;
		padding: 0 36px;
		overflow: auto;
		height: 36px;


	}


</style>