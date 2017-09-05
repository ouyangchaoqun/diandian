<template id="fabulous">
    <div class="fabulous_box">
        <div v-title>赞我的人</div>
        <div class="noZanBox">
            <img class="noZanImg" src="../images/noZan.png" alt="">
            <div>还没有人点赞</div>
        </div>
    </div>
</template>
<script type="text/javascript">

    var fabulous = {
        template: '#fabulous'
    }
    export default {
        data() {
            return {

            }
        }

    }
</script>
<style>
    .fabulous_box{
        height:100%;
        background: #fff;

    }
    .noZanBox{
        margin-top: 45%;
    }
    .noZanImg{
        display: block;
        width:9.235rem;
        margin: 0 auto;
        margin-bottom: 1.3rem;
    }
    .noZanBox div{
        font-size: 0.88235rem;
        color: #999;
        text-align: center;
    }
</style>


