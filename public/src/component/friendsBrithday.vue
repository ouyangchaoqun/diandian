<template>
    <div class="friendsBrithday_box">
        <div v-title>好友生日</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
            <div class="friendsBrithday_top"></div>
            <div class="myBrithday_box" v-if="user">
                <div class="myBrithday_box myBrithday_inBox">
                    <img class="faceImg" :src="user.faceUrl" alt="">
                    <div class="info_left">
                        <div :class="{noBirthStyle:myBirth==null}">{{user.nickName}}</div>
                        <template v-if="myBirth!=null">
                            <span v-if="myBirth.isLunar!=1">{{myBirth.birthday[1]}}月{{myBirth.birthday[2]}}日</span>
                            <span v-if="myBirth.isLunar==1">{{myBirth.monthN}}{{myBirth.dayN}}</span>
                        </template>

                    </div>
                    <div class="info_right" @click="goPersonal()">
                        <template v-if="myBirth==null">
                            <div style="line-height: 2.88rem;color:rgba(0,102,255,1)">去设置</div>
                        </template>

                        <template v-if="myBirth!=null">
                            <div class="isToday" v-if="myBirth.diff_days==0">今天</div>
                            <div v-if="myBirth.diff_days!=0" class="div_size">{{myBirth.diff_days}}<span  class="span_color">天</span>
                            </div>

                            <span><template v-if="myBirth.diff_days!=0">距</template>{{myBirth.years_old}}岁生日</span>
                        </template>
                        <img src="../images/me_btn_right.png" alt="">
                    </div>

                </div>
            </div>
            <ul class="friendsBrithday_ul">
                <li v-for="item in list" v-if="user==null||item.userId!=user.id">
                    <img class="faceImg" :src="item.faceUrl" alt="">
                    <div class="info_left">
                        <div>{{item.nickName}}</div>
                        <span v-if="item.isLunar!=1">{{item.birthday[1]}}月{{item.birthday[2]}}日</span>
                        <span v-if="item.isLunar==1">{{item.monthN}}{{item.dayN}}</span>
                    </div>
                    <div class="info_right">
                        <div class="isToday" v-if="item.diff_days==0">今天</div>

                        <div v-if="item.diff_days!=0" class="div_size">{{item.diff_days}}<span  class="span_color">天</span>
                        </div>

                        <span><template v-if="item.diff_days!=0">距</template>{{item.years_old}}岁生日</span>
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
                showLoad:false,
                isNull:false,
                myBirth:null
            }
        },
        mounted:function () {

            this.getUserInfo();
        },
        methods: {
            goPersonal:function () {
              this.$router.push('/me/personal')
            },
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
                    _this.getList();
                }, function (error) {
                    //error
                });
            },
            formatTime:function (v) {
                return xqzs.dateTime.formatYearDate(v)
            },
            getList: function () {
                let _this = this;
                _this.showLoad =  true;
                _this.$http.get( web.API_PATH + 'birthday/get/list/relation/_userId_').then(function (data) {
                        let datas = data.data.data;
                        console.log(datas)
                        for(let i = 0;i<datas.length;i++){
                            _this.isLeap(datas[i].isLeap,datas[i].birthday[1],datas[i].birthday[2],datas[i])
                            if(_this.user&&datas[i].userId== _this.user.id){
                                _this.myBirth = datas[i];
                            }
                        }
                        _this.list =datas;
                    _this.$nextTick(function () {
                        let arrLength = _this.list.length;
                        console.log(arrLength)
                        if(arrLength>0){
                            _this.isNull = false
                        }else{
                            _this.isNull = true
                        }
                    })

                    _this.showLoad = false;
                })

            },
        },
        components: {
            'v-showLoad': showLoad
        }
    }


</script>
<style>
    .noBirthStyle{
        line-height: 2.88rem;
    }
    .friendsBrithday_box .myBrithday_box{
        width:88%;
        padding:0.3rem;
        border:1px solid rgba(222,219,219,1);
        border-radius: 0.147rem;
        margin:0 auto;
        margin-bottom: 0.294rem;
        background: rgba(248,248,248,1);
    }
    .friendsBrithday_box .myBrithday_inBox{
        height:2.88rem;
        width:99%;
        margin-bottom: 0;
        padding:1.176rem 0;
        color:rgba(153,153,153,1);
    }
    .myBrithday_inBox .info_right{
        margin-right: 1.647rem;
        position: relative;
    }
    .myBrithday_inBox .info_right img{
        position: absolute;
        width:0.588235rem;
        right:-1rem;
        top:35%;
    }
    .friendsBrithday_box .noFriends_box div{
        text-align: center;
        width:100%;
        position: absolute;
        top:60%;
    }
    .friendsBrithday_box .noFriends_box img{
        width: 220px;
        position: absolute;
        top: 10%;
        left: 50%;
        margin-left: -110px;
    }
    .friendsBrithday_box{
        background: #fff;
    }
    .friendsBrithday_top{
        height:1.176rem;
        background: rgba(255,255,255,1);
    }
    .friendsBrithday_ul{
        padding:0 1.176rem;
    }
    .friendsBrithday_ul li{
        height:2.64rem;
        padding:0.88235rem 0;
        border-bottom: 1px solid rgba(238,238,238,1);
        color:rgba(153,153,153,1);
    }
    .faceImg{
        width:2.35rem;
        height:2.35rem;
        border-radius: 50%;
        float: left;
    }
    .myBrithday_box .faceImg{
        width:2.88rem;
        height:2.88rem;
        margin-left: 0.88235rem;
    }
    .friendsBrithday_box .info_left{
        float: left;
        margin-left: 0.88235rem;
    }
    .friendsBrithday_box .info_left div{
        color:rgba(51,51,51,1);
        font-size: 0.88235rem;
    }
    .friendsBrithday_box .info_left span{
        font-size: 0.8235rem;
    }
    .friendsBrithday_box .info_right{
        float: right;
    }
    .friendsBrithday_box .info_right div{
        color:rgba(217,52,50,1);
        font-size: 0.88235rem;
        line-height: 1;
    }
    .friendsBrithday_box .info_right span{
        font-size: 0.70588rem;
    }
    .friendsBrithday_box .info_right .isToday{
        text-align: right;
        font-size: 0.88235rem;
    }
    .friendsBrithday_box .info_right .div_size{
        font-size: 1.176rem;
        text-align: right;
    }
    .friendsBrithday_box .info_right .span_color{
        color:rgba(217,52,50,1);
    }
</style>