<template>

    <div class="coin_list">
        <div v-title>积分明细</div>
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite"  :isPageEnd="isPageEnd" :isShowMoreText="isShowMoreText">


        <div class="my_coin">
            <div class="word">当前积分：<span>{{user.coinAmount}}</span></div>
        </div>
        <div class="list">
            <div class="item" v-for="item in list">
                <div class="name">{{item.type}}
                <span v-if="item.name">[{{item.name}}]</span></div>
                <div class="time">{{formatTime(item.addTime)}}</div>
                <div class="coin"><span v-if="item.coinNum>0">+</span>{{item.coinNum}}</div>
            </div>
        </div>
        <div class="no_coin_record" v-if="list.length==0&&!isLoading">
            没任何收获，快去做任务赚积分吧！
        </div>
        </v-scroll>

    </div>

</template>
<script>
    import Bus from '../bus.js';

    import scroll from '../lib/scroll.vue';
    import showLoad from '../showLoad.vue';
    export default {
        data() {
            return {
                list:[],
                page: 1,
                row: 15,
                isPageEnd: false,
                isLoading:false,
                isShowMoreText:false,
                showLoad:false,
                user:{}
            }
        },
        mounted:function () {
            this.getList();
            this.getUserInfo();
        },
        methods: {
            getUserInfo:function () {
                let _this=this;
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.data !== null) {
                        _this.user = eval(data.data.data);
                    }
                }, function (error) {
                    //error
                });
            },
            formatTime:function (v) {
                return xqzs.dateTime.formatYearDate(v)
            },
            getList: function (done) {
                let vm= this;
                let url = web.API_PATH + "coin/get/coin/detail/_userId_/"+vm.page+"/"+vm.row+"";
                console.log(vm.isLoading)
                console.log(vm.isPageEnd)
                if (vm.isLoading || vm.isPageEnd) {
                    return;
                }
                if (vm.page == 1) {
                    vm.showLoad = true;
                }
                vm.isLoading = true;
                vm.$http.get(url).then((response) => {
                    if(done&&typeof(done)==='function'){
                        done()
                    }
                    vm.showLoad = false;
                    vm.isLoading = false;

                    if(response.data.status!=1){
                        vm.list = [];
                        return;
                    }



                    let arr = response.data.data;
                    //
                    if (arr.length < vm.row) {
                        vm.isPageEnd = true;
                        vm.isShowMoreText = false
                    }else{
                        vm.isShowMoreText =true;
                    }
                    Bus.$emit("scrollMoreTextInit", vm.isShowMoreText);



                    if (vm.page == 1) {
                        vm.list = arr;
                    } else {
                        vm.list = vm.list.concat(arr);
                    }




                    if (arr.length == 0) return;
                    vm.page = vm.page + 1;

                }, (response) => {
                    vm.isLoading = false;
                    vm.showLoad = false;
                });

            },
            onInfinite(done) {
                this.getList(done);
            },
            onRefresh(done) {
                this.page=1;
                this.isPageEnd=false;
                this.getList(done);
            },
        },
        components: {
            'v-scroll': scroll,
            'v-showLoad': showLoad
        }
    }


</script>
<style>
    .coin_list .yo-scroll{ background: #fff}
    .coin_list  .no_coin_record{ background: url(../../images/coin_list_no_record.png) no-repeat center top; text-align: center; color:#FC9B2C; font-size: 0.88235rem; padding-top:11rem ;
        width:100%; height: 2rem;; background-size:11.14705882352941rem; margin-top: 6rem;}
    .coin_list{ background: #fff;}
    .coin_list .my_coin{
        height: 3.6rem;
        background:-webkit-gradient(linear, 0 0, right 0, from(#f97f06), to(#ffb336));
        line-height: 3.6rem; color:#fff; font-size: 0.9411764705882353rem; padding-left: 1rem;
    }
    .coin_list .my_coin span{ font-size:1.764705882352941rem; }
    .coin_list  .list{ margin-left: 1rem;}
    .coin_list  .list .item{ line-height: 1; border-bottom: 1px solid #eee;
        height:3.1rem; padding-top: 0.9rem; position: relative}
    .coin_list  .list .item .name{ font-size: 0.88235rem;; color:#333;}
    .coin_list  .list .item .time{ color:#999; font-size: 0.7058823529411765rem  ; margin-top: 0.5rem;}
    .coin_list  .list .item    .coin{ position: absolute;top:0; right:1.233rem; line-height:4rem; color:#FC9B2C; font-size: 1.411764705882353rem; }
</style>