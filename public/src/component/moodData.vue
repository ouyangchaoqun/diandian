<template id="moodData">
    <div class="moodDataBox">
        <div class="moodDtaHeader">
            <div>在哪方面</div>
            <div>心情占比</div>
            <div>心情条数</div>
        </div>
        <ul class="dataLists">
            <li class="dataList" v-for="data in dataArray">
                <div>
                    <img :src="data.src" alt="">
                    <span>{{data.text}}</span>
                </div>
                <div class="dataPerList">
                    <div class="weui-progress">
                        <div class="weui-progress__bar">
                            <div class="weui-progress__inner-bar" :style="{width:data.Moodwidth}"></div>
                        </div>
                    </div>
                    <div class="moodPer" :style="{left:data.Moodwidth}">{{data.Moodwidth}}</div>
                </div>
                <div>{{data.count}}条</div>
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
                scenesList:xqzs.mood.moodScenesList,
                dataArray:[],
                allCount:''
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
                url: web.API_PATH + 'mood/get/user/statistics/_userId_',
            }).then(function (data) {
                var dataArray = data.data.data.data;
                _this.allCount = data.data.data.allCount;

                for(var i=0;i<dataArray.length;i++){
                    console.log('scenesId:'+dataArray[i].scenesId);
                    var Moodwidth = Math.round(dataArray[i].count/_this.allCount*100)+'%';

                    for(var j=0;j<_this.scenesList.length;j++){
                        console.log('value:'+_this.scenesList[j]);
                        if(dataArray[i].scenesId==_this.scenesList[j].value){
                            dataArray[i].src=web.IMG_PATH +_this.scenesList[j].src;
                            dataArray[i].text=_this.scenesList[j].text
                            dataArray[i].Moodwidth = Moodwidth
                        }
                    }
                }
                _this.dataArray = dataArray;
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
        left:50%;
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
        left:55%;
        margin-left: -5.147rem;
        top:50%;
        margin-top:-5px;
    }
    .dataList div:nth-of-type(3){
        position: absolute;
        right:28px;
        top:0;
        line-height: 50px;
        font-size: 0.9412rem;
        color: #333;
        vertical-align:middle;
        text-align: center;
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
    }

</style>

