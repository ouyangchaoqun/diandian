<template id="careMe">
	<div>
		<!--<ul class="notice-list">-->
			<!--<?php foreach ($list as $care) {-->
    <!--$cares_logo = $mood['moodValue'] < MAX_UN_HAPPY_VALUE ? 'mood_icon_baob_pre.png' : 'mood_icon_dianz_pre.png';-->
    <!--?>-->
			<!--<li class="notice-item" data-href="<?=BASE_PATH?>mood/mooddetail/<?=$care['moodId']?>">-->
				<!--<div class="moodcontent">-->
					<!--<?php if($mood_haspic){?><img class="moodpicture" data-w="<?=$moodpicture['width']?>" data-h="<?=$moodpicture['height']?>" src="<?=$moodpicture['path']?><?=PIC_MINI?>"><?php-->
            <!--}elseif($mood_hascontent)-->
            <!--{?><div class="content"><?=$moodcontent?></div><?php-->
            <!--}else{-->
                <!--?><div class="moodvaluepic" style="background-image:url('<?=IMG_PATH?>/list_mood_<?=$mood_valuepicname?>.png')"></div><?php-->
            <!--}?>-->
				<!--</div>-->
				<!--<div class="left">-->
					<!--<div class="face"><img src="<?=wx_small_face($care['faceUrl'])?>"></div>-->
					<!--<div class="info">-->
						<!--<div class="info-user"><?=$care['nickName']?></div>-->
						<!--<div class="info-content">-->
							<!--<img class="info-care-pic" src="<?=IMG_PATH?>/<?=$cares_logo?>">-->
						<!--</div>-->
						<!--<div class="info-time">-->
							<!--<?=friend_date($care['addtime'])?>-->
						<!--</div>-->
					<!--</div>-->
				<!--</div>-->
			<!--</li>-->
			<!--<?php }?>-->
		<!--</ul>-->

	</div>
</template>
<style>
	.notice-list{}
	.notice-item{overflow: hidden;border-bottom: 1px solid#eee;padding:10px 15px;color: #000;}
	.notice-item .moodcontent{width: 60px;height: 60px; float: right;overflow: hidden;background: #f9f9f9}
	.notice-item .moodcontent .moodpicture{width: 100%;height: 100%;}
	.notice-item .moodcontent .moodvaluepic{width: 100%;height: 100%;background-size: 30px 30px;background-position: center;background-repeat: no-repeat}
	.notice-item .moodcontent .content{margin:2px;word-break:break-all;word-wrap:break-word;overflow:hidden;font-size: 12px;color: #666;}
	.notice-item .left{}
	.notice-item .face{float: left;}
	.notice-item .face img{width: 44px;height: 44px;border-radius: 3px;}
	.notice-item .info{font-size: 13px;padding:0px 70px 0px 55px;}
	.notice-item .info .info-user{color: #5e61a2;font-size: 13px;line-height: 1em}
	.notice-item .info .info-content{line-height:1.5em;padding: 8px 0 8px 2px;}
	.notice-item .info .info-content .info-care-pic{width: 14px;vertical-align: middle;}
	.notice-item .info .info-time{font-size: 12px;line-height: 1em;color: #999;}
</style>
<script type="text/javascript">
	var careMe={
		template:'#careMe'
	}

	export default {
		data() {
			return {
				lastMood: null,
				careFrinds:null
			}
		},
		mounted: function () {
			let _this = this;

			//lastmood
			this.$http({
				method: 'GET',
				type: "json",
				url: web.API_PATH + 'mood/find/userlast/[userId]',
			}).then(function (data) {
				if (data.data.data !== null) {
					_this.lastMood = eval(data.data.data);
					//careFrinds
					this.$http({
						method: 'GET',
						type: "json",
						url: web.API_PATH + 'mood/care/query/'+_this.lastMood.id+'/[userId]',
					}).then(function (data) {
						if (data.data.data !== null) {
							_this.careFrinds = eval(data.data.data);
							console.log(_this.careFrinds);
						}
					}, function (error) {
						//error
					});
				}
			}, function (error) {
				//error
			});



		},
		methods:{

		}


	}
</script>
