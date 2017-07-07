<template id="moodData">
    <div class="moodDataBox">
        <div class="moodDtaHeader">
            <div>在哪方面</div>
            <div>心情占比</div>
            <div>心情条数</div>
        </div>
        <ul class="dataLists">
            <li class="dataList" v-for="scenes in scenesList">
                <div>
                    <img :src="moodSrc(scenes.src)" alt="">
                    <span>{{scenes.text}}</span>
                </div>
                <div class="dataPerList">
                    <div class="weui-progress">
                        <div class="weui-progress__bar">
                            <div class="weui-progress__inner-bar addWidth"></div>
                        </div>
                    </div>
                    <div class="moodPer">50%</div>
                </div>
                <div>
                    90
                </div>
            </li>

        </ul>

    </div>
</template>

<script type="text/javascript">

    var moodData={
        template:'#moodData'
    }
    export default {
        data() {
            return {
                scenesList:xqzs.mood.moodScenesList
            }
        },
        methods:{
            moodSrc:function (src) {
                return web.IMG_PATH+src;
            },
        },
        beforeCreate: function () {
            let _this = this;
            //用户信息
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'subscribe/query/subscribes/by/user/_userId_',
            }).then(function (data) {
                var dataArray = data.data.data
                console.log(dataArray);
                _this.dataArray = dataArray;
            }, function (data) {
            });
            this.$http({
                method: 'GET',
                url: web.API_PATH + 'subscribe/query/users/subscribes/_userId_',
            }).then(function (data) {
                var subArray = data.data.data;
                console.log(subArray)
                _this.subArray = subArray;
            }, function (data) {
            });
        }

    }
</script>
<style>
    .moodDataBox{
        background: #fff;
    }
    .moodDtaHeader{
        padding:0 15px;
        height: 50px;
        background: rgba(238,238,238,0.6);
        position: relative;
    }
    .moodDtaHeader div{
        float: left;
        line-height: 50px;
        font-size: 0.8235rem;
        color: #333;
    }
    .moodDtaHeader div:nth-of-type(3){
        float: right;
    }
    .moodDtaHeader div:nth-of-type(2){
        width:3.6rem;
        text-align: center;
        position: absolute;
        left:52%;
        margin-left:-1.8rem;
    }
    .dataLists{
        padding-left: 15px;
    }
    .dataList{
        height: 49px;
        border-bottom: 1px solid #eeeeee;
        position: relative;
    }
    .dataList img{
        height: 1.0588rem;
        width:1.0588rem;
        display: inline-block;
        position: absolute;
        left:0;
        top:50%;
        margin-top: -0.5294rem;
    }
    .dataList span{
        font-size: 0.7647rem;
        color: #333;
        line-height: 50px;
        margin-left: 1.64rem;
    }
    .dataPerList{
        width:10.294rem;
        position: absolute;
        left:52%;
        margin-left: -5.147rem;
        top:50%;
        margin-top:-5px;
    }
    .dataList div:nth-of-type(3){
        position: absolute;
        right:32px;
        top:0;
        line-height: 50px;
        font-size: 1.0588rem;
        color: #333;
    }
    .weui-progress__bar{
        height:10px;
        border-radius: 5px;
        background: rgba(9,187,7,0.15);
    }
    .weui-progress__inner-bar{
        border-radius: 5px;
    }
    .moodPer{
        width:1.41176rem;
        font-size: 11px;
        color: #666666;
        position: absolute;
        top: -20px;
        left:50%;
        margin-left: -0.70588rem;
    }
    .addWidth{
        width:50%;
    }
</style>

