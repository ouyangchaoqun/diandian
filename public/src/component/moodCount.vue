<template id="moodCount">
    <div class="moodCount_box">
        <div class="moodNavbar">
            <div class="mooditem moodActive">每周心情指数</div>
            <div class="mooditem">每月心情指数</div>
            <div class="mooditem">每年心情指数</div>
        </div>
       <button>获取</button>
    </div>
</template>
<script type="text/javascript">

    var moodCount={
        template:'#moodCount'
    }
    module.exports=moodCount
</script>
<style>
    .moodCount_box{
        background: #ffffff;
        height:100%;
    }
    .moodNavbar{
        height:44px;
        font-size: 15px;
        display: flex;
        border-bottom: 1px solid #eeeeee;
        background: #ffffff;
    }
    .mooditem{
        height: 42px;
        line-height: 42px;
        float: left;
        text-align: center;
        flex-grow: 1;
        color: #666666;
    }
    .moodActive{
        border-bottom: 2px solid #339900;
        color: #339900;
    }
</style>
<script>
    export default {
        data() {
            return {

            }
        }
        /*methods:{
            getD:function () {
                this.$http.get('http://api.mood.hh-idea.com/api/documentation').then(response => {

                    // get body data
                    console.log(response.body)

                }, response => {
                    // error callback
                });
            }
        }*/
    }
</script>

