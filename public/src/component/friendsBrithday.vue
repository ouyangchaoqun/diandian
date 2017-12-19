<template>
    <div class="friendsBrithday_box">
        <div v-title>好友生日</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
            <div class="friendsBrithday_top"></div>
            <ul class="friendsBrithday_ul">
                <li v-for="item in list">
                    <img :src="item.faceUrl" alt="">
                    <div class="info_left">
                        <div>{{item.nickName}}</div>
                        <span v-if="item.isLunar!=1">{{item.birthday[1]}}月{{item.birthday[2]}}日</span>
                        <span v-if="item.isLunar==1">{{item.monthN}}{{item.dayN}}</span>
                    </div>
                    <div class="info_right">
                        <div class="isToday" v-if="item.diff_days==0">今天</div>

                        <div v-if="item.diff_days!=0" class="div_size">{{item.diff_days}}<span  class="span_color">天</span>
                        </div>

                        <span>距{{item.years_old}}岁生日</span>
                    </div>
                </li>
            </ul>
    </div>

</template>
<script>
    import showLoad from './showLoad.vue';
    export default {
        data() {
            return {
                list:[],
                showLoad:false,
                user:{},
                monthN:'',
                dayN:'',
                showLoad:true
            }
        },
        mounted:function () {
            this.getList();
            this.getUserInfo();
        },
        methods: {
            isLeap:function (isLeap,M,D,_this) {
                if( isLeap==0||isLeap==1){
                    _this.monthN =  calendar.toChinaMonth(M);
                    if(isLeap==1) {
                        _this.monthN= "闰"+ _this.monthN;
                    }
                    _this.dayN = calendar.toChinaDay(D);
                }
            },
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
            getList: function () {
                let _this = this;
                _this.$http.get( web.API_PATH + 'birthday/get/list/relation/_userId_').then(function (data) {
                    if(data.data.data !== null){
                        console.log(_this.list)
                        let datas = data.data.data;
                        for(let i = 0;i<datas.length;i++){
                            _this.isLeap(datas[i].isLeap,datas[i].birthday[1],datas[i].birthday[2],datas[i])
                        }
                        _this.list =datas;
                        _this.showLoad = false;
                    }
                })

            },
        },
        components: {
            'v-showLoad': showLoad
        }
    }


</script>
<style>
    .friendsBrithday_box{
        background: #fff;
    }
    .friendsBrithday_top{
        height:0.88235rem;
        background: rgba(238,238,238,1);
    }
    .friendsBrithday_ul{
        padding:0 1.176rem;
    }
    .friendsBrithday_ul li{
        height:3.235rem;
        padding-top:1.176rem;
        border-bottom: 1px solid rgba(238,238,238,1);
        color:rgba(153,153,153,1);
    }
    .friendsBrithday_ul img{
        width:2.35rem;
        height:2.35rem;
        border-radius: 50%;
        float: left;
    }
    .info_left{
        float: left;
        margin-left: 0.88235rem;
    }
    .info_left div{
        color:rgba(51,51,51,1);
        font-size: 0.88235rem;
    }
    .info_left span{
        font-size: 0.8235rem;
    }
    .info_right{
        float: right;
    }
    .info_right div{
        color:rgba(217,52,50,1);
        font-size: 0.88235rem;
        line-height: 1;
    }
    .info_right span{
        font-size: 0.70588rem;
    }
    .info_right .isToday{
        text-align: right;
        font-size: 0.88235rem;
    }
    .info_right .div_size{
        font-size: 1.176rem;
        text-align: right;
    }
    .info_right .span_color{
        color:rgba(217,52,50,1);
    }
</style>