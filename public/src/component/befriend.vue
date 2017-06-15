<template id="banner">
    <div v-title>成为朋友</div>
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
            _this.$http.post(web.API_PATH + 'user/be/friend/width/ids/'+userId+'/_userId_').then(response => {
                if (response.data.status === 1||response.data.status===-2||response.data.status===-3) {
                    _this.$router.push("/friendCenter?friendId="+userId);  //-1不能相等 -2朋友已经是你的好友 -3 你已经是朋友的好友 1 成功
                }else if(response.data.status===-1){
                    _this.$router.push("/");
                }
            }, response => {
                // error
            });

        }
    }


</script>
