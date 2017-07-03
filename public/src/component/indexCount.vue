<template id="indexCount">
	<div class="IndexAdd">
		<div>
			<p>{{dayNum}}</p>
			<div>天记录心情</div>

		</div>
		<div class="IndexAddBorder">
			<span></span>
			<p>{{moodNum}}</p>
			<div>条心情数据</div>
			<span></span>
		</div>
		<div>
			<p>{{friendNum}}</p>
			<div>位好友关注</div>
		</div>
	</div>
</template>
<style>

</style>
<script type="text/javascript">
    import Bus from './bus.js';
	var indexCount={
		template:'#indexCount'
	};
    export default {
        data() {
            return {
                moodNum: 0,
                dayNum: 0,
                friendNum: 0
            }
        },
        props: {
       	 	mmm:String
    	},
		mounted:function () {
            //console.log(this.$route.params.Id)
			if(this.$route.params.Id==''||this.$route.params.Id==undefined){
                this.$route.params.Id = '_userId_'
			}
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'mood/query/statistics/years/'+ this.$route.params.Id
            }).then(function (data) {
                var moodCount = data.data.data;
                console.log(moodCount)
				this.moodNum = moodCount[0].count;
				this.dayNum = moodCount[0].happyDay+moodCount[0].unHappyDay
            }, function (data) {
            });
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'user/query/friend/by/user/id/_userId_',
            }).then(function (data) {
				console.log(data)
				var friend_g = data.body.data.generalFriends;
				var friend_sLength = data.body.data.specialFriends.length;
				var friend_gLength = 0;
				for(var i in friend_g){
                    friend_gLength++
				}
				this.friendNum = friend_gLength + friend_sLength
            }, function (data) {
            });

        }

    }

</script>
