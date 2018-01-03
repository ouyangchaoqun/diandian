<template >
    <div class="moneyOut">
        <div v-title>余额明细</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <v-scroll :on-refresh="onRefresh" :isNotRefresh="true" :on-infinite="onInfinite" :isPageEnd="isPageEnd" :isShowMoreText="isShowMoreText">
            <ul v-if="list.length!=0">
                <li class="moneyOut_item" v-for="item in list">
                    <div class="time">
                        <span>{{getDateTime(item.addTime)}}</span>
                    </div>
                    <div class="item_type">{{item.type}}</div>
                    <div class="item_right">
                        <span v-if="item.status==0">审核中</span>
                        <template v-if="item.type!='提现'">+</template>
                        <template v-if="item.type=='提现'">-</template>
                        ¥{{item.amount}}
                    </div>
                </li>
            </ul>

            <div class="nothing"  v-if="list.length==0">
                <div style="padding-top:4.4rem">
                    <img src="../images/newNoContent.png" alt="">
                    <div class="nothing_bottom">
                        <p>您还没有收益</p>
                    </div>
                </div>
            </div>

        </v-scroll>


    </div>
</template>

<script type="es6">
    import showLoad from './showLoad.vue';
    import scroll from './lib/scroll.vue';
    import Bus from './bus';
    export default {
        data() {
            return {
                page: 1,
                row: 10,
                isPageEnd: false,
                isShowMoreText: false,
                showLoad: false,
                list: [],
            }
        },
        props:{
            user:{
                type:Object
            }
        },
        components: {
            'v-showLoad': showLoad,
            'v-scroll': scroll,
        },

        mounted: function () {
            this.getList();
        },
        methods:{
            getUserInfo:function () {
                let _this = this;
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
            formatPrice:function(price){
                return  xqzs.string.formatPrice(price)
            },
            getDateTime:function (t) {
                return xqzs.dateTime.formatDateTime(t);
            },
            getList: function (done) {

                let vm = this;
                let url = web.API_PATH + 'user/withdraw/detail' + '/_userId_/' + vm.row+ '/' + vm.page;
                this.rankUrl = url + "?";
                if (web.guest) {
                    this.rankUrl = this.rankUrl + "guest=true"
                }
                if (vm.isLoading || vm.isPageEnd) {
                    return;
                }
                if (vm.page == 1) {
                    vm.showLoad = true;
                }
                vm.isLoading = true;
                vm.$http.get(vm.rankUrl).then((response) => {
                    if(done&&typeof(done)==='function'){
                        done()
                    }
                    console.log(response.data)
                    vm.showLoad = false;
                    vm.isLoading = false;

                    if (response.data.status != 1 && vm.page == 1) {
                        vm.list = [];
                        vm.isPageEnd = true;
                        vm.isShowMoreText = false;
                        Bus.$emit("scrollMoreTextInit", vm.isShowMoreText);
                        return;
                    }
                    let arr = response.data.data;
                    if (arr.length < vm.row) {
                        vm.isPageEnd = true;
                        vm.isShowMoreText = false
                    }else{
                        vm.isShowMoreText = true;
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

            }

        }


    }
</script>
<style>
    .moneyOut{
        background: #fff;
    }
    .moneyOut .yo-scroll{
        background: #fff;
    }
    .moneyOut .moneyOut_item{
        height:2.88235rem;
        line-height: 2.88235rem;
        border-bottom: 1px solid rgba(238,238,238,1);
        padding:0 0.88235rem;
        display: flex;
    }
    .time{
        color:rgba(153,153,153,1);
        font-size: 0.6471rem;
        float: left;
    }
    .item_right{
        font-size: 0.88235rem;
        float: right;
        color:rgba(255,157,24,1);
    }
    .item_right span{
        font-size: 0.76471rem;
        color:rgba(69,75,84,1);
        margin-right: 0.735rem;
    }
    .item_type{
        margin: 0 auto;
        text-align: center;
        color:rgba(36,37,61,0.5);
        font-size: 0.76471rem;
    }
    .moneyOut .nothing{
        text-align: center;
        width: 100%;
        height: 100%;
        background: #fff;
    }
    .nothing img{
        max-width: 100%;
    }
    .nothing .nothing_bottom p {
        font-size: 0.88235rem;
        color: #95979D;
    }
</style>