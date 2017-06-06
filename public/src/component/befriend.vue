<template id="banner">

</template>
<script>
    var banner = {
        template: '#banner'
    };
    export default {
        data() {
            return {


            }
        },
        mounted: function () {
            let _this=this;
            let userId= _this.$route.query.userid;
            _this.$http.post(web.API_PATH + 'user/be/friend/width/ids/'+userId+'/[userId]').then(response => {
                if (response.data.status === 1||response.data.status===-2||response.data.status===-3) {
                    location.href=web.BASE_PATH + "#/friendCenter?friendId="+userId;   //-1不能相等 -2朋友已经是你的好友 -3 你已经是朋友的好友 1 成功
                }else if(response.data.status===-1){
                    location.href=web.BASE_PATH
                }
            }, response => {
                // error
            });

        }
    }


</script>
