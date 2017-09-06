<template id="fabulous">
    <div class="fabulous_box">
        <div class="noZanBox" v-if="!fabulousLists">
            <img class="noZanImg" src="../images/noZan.png" alt="">
            <div>还没有人点赞</div>
        </div>
             <div v-title>赞我的人</div>
            <ul class="fabulousLists" >
                <v-showLoad v-if="showLoad"></v-showLoad>
                <li v-for="fabulousList in fabulousLists">
                    <img :src="fabulousList.faceUrl" alt="">
                    <div class="fabulousName">{{fabulousList.nickName}}</div>
                    <div class="fabulousTime">{{fabulousList.friendTime}}</div>
                </li>
            </ul>

    </div>
</template>
<script type="text/javascript">
    import showLoad from './showLoad.vue';
    import scroll from './lib/scroll.vue';
    var fabulous = {
        template: '#fabulous'
    }
    export default {
        data() {
            return {
                fabulousLists:[],
                num:10000,
                counter:1,
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                isPageEnd:false,
                sleepId:'',
                type:'',
                showLoad:false,
                isShowMoreText:true
            }
        },
        components: {
            'v-showLoad':showLoad,
            'v-scroll': scroll
        },
        mounted:function () {
            this.sleepId = this.$route.query.sleepId;
            this.type = this.$route.query.type;
            this.showLoad = true;
            this.getFabulousList();
            this.updateRead();
        },
        methods:{
            updateRead:function () {
                let _this= this;
                ///api/v1/sleep/notice/read/{sleepId}/{type}/{userId}
                _this.$http.post(web.API_PATH + 'sleep/notice/read/'+this.sleepId+'/'+this.type+'/_userId_', {})
                    .then(
                        (response) => {

                        }
                    );

            },
            getFabulousList:function () {
                let _this = this;
                _this.showLoad = true;
                _this.$http({
                    method: 'GET',
                    url:web.API_PATH +'sleep/query/cares/'+_this.sleepId+'/'+_this.type+'/'+_this.counter+'/'+_this.num+'/_userId_',
                }).then(function (data) {
                    if(data.data.status==1){
                        _this.fabulousLists = data.data.data.rows;
                    }
                    _this.showLoad = false;
                    if (_this.fabulousLists.length <_this.num) {
                        _this.isPageEnd=true;
                    }
                })
            },
            onInfinite(done) {
                let vm = this;
                vm.$http.get(web.API_PATH +'sleep/query/cares/'+vm.sleepId+'/'+vm.type+'/'+(vm.counter + 1)+'/'+vm.num+'/_userId_').then((response) => {
                    vm.counter++;
                    vm.pageEnd = vm.num * vm.counter;
                    vm.pageStart = vm.pageEnd - vm.num;
                    let arr = response.data.data.rows;
                    let i = 0;
                    let end = vm.pageEnd;
                    console.log(arr)
                    for (; i < arr.length; i++) {
                        vm.fabulousLists.push(arr[i]);
                    }
                    if (arr.length <vm.num) {
                        vm.isPageEnd=true;
                    }
                    console.log(vm.isPageEnd)

                    done() // call done
                }, (response) => {
                    console.log('error');
                });
            }
        }

    }
</script>
<style>
    .fabulous_box{
        height:100%;
        background: #fff;

    }
    .fabulous_box .fabulous_scroll{
        background: #fff;
        height:100%;
    }
    .fabulous_scroll .inner{
        height: 100%;
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
    .fabulousLists li{
        display: flex;
        border-bottom: 1px solid #eee;
        padding:0.588rem 0.88235rem;
        position: relative;
        line-height: 1;
    }
    .fabulousLists img{
        display: block;
        height:2.588rem;
        width:2.588rem;
        border-radius: 0.3rem;
    }
    .fabulousName{
        font-size: 0.88235rem;
        color: #333;
        margin-left: 0.88235rem;
        margin-top: 0.88235rem;
    }
    .fabulousTime{
        font-size: 0.765rem;
        color: #999;
        position: absolute;
        right:0.88235rem;
        margin-top:0.94rem;
    }
</style>


