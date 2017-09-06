<template id="fabulous">
    <div class="fabulous_box">
        <div class="noZanBox" v-if="!fabulousLists">
            <img class="noZanImg" src="../images/noZan.png" alt="">
            <div>还没有人点赞</div>
        </div>
        <v-scroll class="fabulous_scroll" v-if="fabulousLists"  :on-infinite="onInfinite" :isPageEnd="isPageEnd" :isShowMoreText="isShowMoreText">
            <div v-title>赞我的人</div>
            <ul class="fabulousLists" >
                <v-showLoad v-if="showLoad"></v-showLoad>
                <li v-for="fabulousList in fabulousLists">
                    <img :src="fabulousList.faceUrl" alt="">
                    <div class="fabulousName">{{fabulousList.nickName}}</div>
                    <div class="fabulousTime">{{fabulousList.friendTime}}</div>
                </li>
            </ul>
        </v-scroll>
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
                num:20,
                counter:1,
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                isPageEnd:false,
                sleepId:'',
                type:'',
                showLoad:false
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
           this.$http({
               method: 'GET',
               url:web.API_PATH +'sleep/query/cares/'+this.sleepId+'/'+this.type+'/'+this.counter+'/'+this.num+'/_userId_',
           }).then(function (data) {
               this.counter++;
               console.log(data)
               if(data.data.status==1){
                 this.fabulousLists = data.data.data.rows;
                   this.showLoad = false;
               }
           })
        },
        methods:{
            onInfinite(done) {
                let vm = this;
                vm.$http.get(web.API_PATH +'sleep/query/cares/'+vm.sleepId+'/'+vm.type+'/'+vm.counter+'/'+vm.num+'/_userId_').then((response) => {
                    console.log(response)
                    console.log('加载')
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
        padding:10px 15px;
        position: relative;
        line-height: 1;
    }
    .fabulousLists img{
        display: block;
        height:44px;
        width:44px;
        border-radius: 5px;
    }
    .fabulousName{
        font-size: 15px;
        color: #333;
        margin-left:15px;
        margin-top:15px;
    }
    .fabulousTime{
        font-size: 13px;
        color: #999;
        position: absolute;
        right:15px;
        margin-top:16px;
    }
</style>


