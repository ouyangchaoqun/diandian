<template id="calendar">
	<div >
		<div class="banner">
			<img src="../images/banner.jpg"/>
		</div>
		<!--banner end -->
		<!--<div class="bg_box" hidden="{{flag}}" bindtap="bg_box">
		<swiper class="swiper_box" hidden="{{flag}}">
		  <block wx:for="{{imgUrls}}">
		    <swiper-item>
		      <img src="{{item}}" class="slide-img"/>
		      <div class="clickBox_time" >
				<text>4月13日</text><text>星期四</text><text>08:20:40</text>
				<div class="clickBox_bottom">今天很高兴今天很高兴今天很高兴今天很高兴今天很高兴</div>
			  </div>
		    </swiper-item>
		  </block>
		</swiper>
		</div>
		<div class="rl_header">
		    <div class="canlendarBgdiv">
		      <div class="canlendardiv">
		        <div class="canlendarTopdiv">
		          <div class="leftBgdiv" bindtap="handleCalendar" data-handle="prev">
		            <img class="old" src="../imgs/back.png"/>
		          </div>
		          <div class="centerdiv">{{cur_year || "--"}} 年 {{cur_month || "--"}} 月</div>
		          <div class="rightBgdiv" bindtap="handleCalendar" data-handle="next">
		            <img class="next" src="../imgs/back.png"/>
		          </div>
		      </div>
		      <div class="weekBgdiv">
		        <div class="weekdiv" wx:for="{{weeks_ch}}" wx:key="{{index}}" data-idx="{{index}}">{{item}}       </div>
		      </div>
		      <div class="dateBgdiv">
		        <div wx:if="{{hasEmptyGrid}}" class="dateEmptydiv" wx:for="{{empytGrids}}" wx:key="{{index}}" data-idx="{{index}}">
		        </div>
		        <div class="datediv {{_month == cur_month&&index == today-1 ? 'dateSelectdiv' : ''}}" wx:for="{{days}}" wx:key="{{index}}" data-idx="{{index}}" bindtap="swiper_box">
		        
		          <div class="datesdiv">{{item}}</div>
		          <img src="../imgs/rili_xl.png"/>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>		-->

	</div>
</template>

<script type="text/javascript">
	var calendar={
		template:'#calendar'
	}
	module.exports=calendar
</script>

<style>
	.banner{
	  width: 100%;
	}
	.banner img{
		display: block;
		width: 100%;
	}
</style>