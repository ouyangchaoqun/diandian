<template id="indexCount">
	<div class="IndexAdd">
		<div @click="openMoodCount()">
			<p>{{dayNum}}</p>
			<div>天记录心情</div>
		</div>
		<div class="IndexAddBorder" @click="openMoodData()" >
			<span></span>
			<p>{{moodNum}}</p>
			<div>条心情数据</div>
			<span></span>
		</div>
		<div @click="openFriend()">
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
                friendNum: 0,
                linkFriendList:'',
				linkMoodDat:'',
				linkOpenMoodCount:''
            }
        },
        props: {
       	 	mmm:String
    	},
        methods:{
            openFriend:function () {
                if(this.linkFriendList==''){
                    return ;
				}else{
                    this.$router.push( this.linkFriendList);
				}

            },
            openMoodData:function () {
                if(this.linkMoodDat==''){
                    return ;
                }else{
                    this.$router.push( this.linkMoodDat);
                }

            },
			openMoodCount:function () {
				if(this.linkMoodCount==''){
					return ;
				}else{
					this.$router.push( this.linkMoodCount);
				}

			}

		},
		mounted:function () {
            //console.log(this.$route.params.Id)
			if(this.$route.params.Id==''||this.$route.params.Id==undefined){
                this.$route.params.Id = '_userId_';
                this.linkFriendList="/friendList";
                this.linkMoodDat='/moodData';
				this.linkMoodCount='/monthStatistics';
                console.log('yyyyy')
			}
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'mood/get/user/count/'+ this.$route.params.Id
            }).then(function (data) {
				this.moodNum = data.body.data;
            }, function (data) {
            });
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'mood/get/user/day/count/'+ this.$route.params.Id
            }).then(function (data) {
                this.dayNum = data.body.data;
            }, function (data) {
            });
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'user/query/friend/by/user/id/'+this.$route.params.Id,
            }).then(function (data) {
				console.log(data)
				var friend_g = data.body.data.generalFriends;
				var friend_sLength = data.body.data.specialFriends.length;
				var friend_gLength = 0;
				for(var i in friend_g){
				    for(var j  in friend_g[i] ){
                        friend_gLength++
					}
				}
				this.friendNum = friend_gLength + friend_sLength
            }, function (data) {
            });
        }

    }

</script>
