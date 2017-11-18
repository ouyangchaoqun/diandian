<template >
    <div class="habit_box" style="height: 100%">
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="my_habit">

            <div class="item " v-for="(item,index) in habits " @click="delOrAddHabit(index)" :class="{on:item.todayAdded==1}" >
                <div class="img"  v-if="item.todayAdded==1" :style="'background: url('+item.iconFinish+') no-repeat center; background-size: 40%;'"></div>
                <div class="img" v-else="" :style="'background: url('+item.iconNotFinish+') no-repeat center; background-size: 40%;'"></div>
                <div class="txt">{{item.title}}</div>
            </div>

            <div class="item" @click="goAdd()">
                <div class="img">+</div>
                <div class="txt">编辑</div>
            </div>
            <div class="clear"></div>

        </div>
        <div class="habit_history">
            <div class="title">历史习惯</div>
            <div class="item" v-for="item in list">
                <div class="time">{{item.month}}.{{item.day}}</div>
                <div class="day_habits">
                    <span v-for="i in item.habits"><img :src="i.iconFinish" /></span>

                </div>
                <div class="clear"></div>
            </div>

        </div>
        <div class="habit_btns">
            <div class="btn btn_s" @click="goStatistics()">
                <div class="img"></div>
                <div class="txt">统计</div>
            </div>
            <div class="btn btn_card" @click="goCard()">
                <div class="img"></div>
                <div class="txt">卡片</div>
            </div>
        </div>
        <div class="addHabit" v-if="animit" >
            <div class="r"></div>
            <div class="good"></div>
        </div>
    </div>
</template>
<style>
    .habit_box{ background: #fff; overflow: scroll}
    .habit_box .my_habit{ padding: 0.6rem 0.88235rem; padding-bottom: 1rem; border-bottom: #F5F5F5 solid 0.55882352941176470588235294117647rem}
    .habit_box .my_habit .item{  width: 25%; float:left; text-align: center; color:#999; font-size: 0.70588235294117647058823529411765rem ;  margin-top: 0.8rem;  }
    .habit_box .my_habit .item .img{  display: inline-block;border: 1px solid #DCDCDC ; height: 2.9411764705882352941176470588235rem; width: 2.9411764705882352941176470588235rem;  border-radius: 50%; font-size: 2rem;  line-height:2.7rem;  overflow: hidden;}
    .habit_box .my_habit .item .txt{color:#DCDCDC}
    .habit_box .my_habit .item.on .img{border: 1px solid #FF9900 ;}
    .habit_box .my_habit .item.on .txt{ color:#333}


    .habit_box .habit_history{ position: relative;}
    .habit_box .habit_history .title{ color:#4A4949; font-size:0.82352941176470588235294117647059rem; font-weight: bold; padding-left: 0.88235rem; padding-top: 0.6rem; }
    .habit_box .habit_history .item .time{ font-size: 0.70588235294117647058823529411765rem;color:#999;float:left;line-height:2rem; margin-left: 0.88235rem }
    .habit_box .habit_history:before{width: 1px; height:100%; background: #eee; content: ' '; display: block; position: absolute; top:2rem; left:3.4rem;  }
    .habit_box .habit_history .item .day_habits img{ height:1rem; }
    .habit_box .habit_history .item .day_habits{ line-height: 2.2rem; margin-left: 1.6rem;float:left}
    .habit_box .habit_history .item .day_habits span{display: inline-block; width:2rem; text-align: center }
    .habit_box .habit_history .item{ position: relative}
    .habit_box .habit_history .item:before{content:"";display:block; position:absolute; top:.8rem; left:3.3rem;height: 0.29411764705882352941176470588235rem;width: 0.29411764705882352941176470588235rem; border-radius: 50%; background: #FF9900}

    .habit_btns{ position: fixed; bottom:2rem; right:1.2rem}
    .habit_btns .btn{ height: 2.4rem; width: 2.6rem; ;background: #FF9900; border-radius: 3px; text-align: center; color:#fff; font-size: 0.82rem;  padding-top: 0.3rem; margin-bottom: 1rem;  }
    .habit_btns .btn_s .img{ background: url(../images/habit_btn_s.png) no-repeat center; background-size: 44%; height: 1rem; width: 100%; }
    .habit_btns .btn_card .img{ background: url(../images/habit_btn_card.png) no-repeat center; background-size: 44%; height: 1rem; width: 100%; }


    .habit_box .addHabit{ width: 9.8823529411764705882352941176471rem; height: 9.8823529411764705882352941176471rem;  position: fixed; top:50%;left:50%; margin-left: -4.9411764705882352941176470588235rem; margin-top: -4.9411764705882352941176470588235rem;

        -webkit-animation: big 3.5s ;
        animation: big 3.5s ;

        animation-fill-mode:forwards;
        -webkit-animation-fill-mode:forwards;


    }
    .habit_box .addHabit .r{ background: url(../images/habit_today_add_good_r.png) no-repeat; background-size: 100%; height: 100%;
        -webkit-animation: round 2.5s  ;
          animation: round 2.5s ;
        animation-delay:0.5s;
        -webkit-animation-delay:0.5s; /* Safari 和 Chrome */
        animation-fill-mode:forwards;
        -webkit-animation-fill-mode:forwards;
    }
    .habit_box .addHabit .good{ background: url(../images/habit_today_add_good.png) no-repeat; background-size: 7.705882352941176rem;width:7.705882352941176rem; height: 6.911764705882353rem; position: absolute; left:1.088235294117647rem;top:1.485294117647059rem;}



    @keyframes big {
        0% {
            transform:scale(0)translate3d(0, 0, 0);
            -webkit-transform:scale(0)translate3d(0, 0, 0);
        }

        20% {
            transform:scale(1) translate3d(0, 0, 0);
            -webkit-transform:scale(1) translate3d(0, 0, 0);
        }

       80% {
            transform:scale(1) translate3d(0, 0, 0);
            -webkit-transform:scale(1) translate3d(0, 0, 0);
        }

        100% {
            transform:scale(0) translate3d(0, -300px, 0);
            -webkit-transform:scale(0) translate3d(0, -300px, 0);

        }



    }

    @keyframes round {
        0% {
            opacity: 1;
            transform: rotate(0deg);
            -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
        }


        80% {
            opacity: 1;
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg); /* Safari 和 Chrome */
        }


        100% {
            opacity: 0;
            transform: rotate(360deg);
            -webkit-transform: rotate(360deg); /* Safari 和 Chrome */
        }

    }


</style>
<script type="text/javascript">
    import Bus from './bus.js';
    import showLoad from './showLoad.vue';
    export default {
        data() {
            return {
                habits:[],
                list:[],
                page: 1,
                row: 12,
                isPageEnd: false,
                isShowMoreText:false,
                showLoad:false,
                animit:false
            }
        },

        mounted: function () {
            this.getList();
        },
        methods:{


            delOrAddHabit:function (index) {
                let item = this.habits[index];
                if(item.todayAdded==1){
                    this.delHabit(index);
                }else{
                    this.addHabit(index);
                }
            },

            addHabit:function (index) {
                let _this=this;
                _this.animit=true;
                let id = _this.habits[index].id
                _this.$http.put(web.API_PATH + 'habit/put/habit/today/_userId_/'+id, {}).then(response => {

                    setTimeout(function () {
                        _this.animit=false;
                    },3200)
                    if (response.data.status === 1) {
                        _this.habits[index].todayAdded=1;
                        _this.$set(_this.habits,index,_this.habits[index]);
                        _this.$nextTick(function () {
                            $(".my_habit .item .img").css({"background-size":"40%"})
                        })
                    }
                });
            },
            delHabit:function (index) { ///{userId}/{habitId}
                let _this=this;
                _this.showLoad=true;
                let id = _this.habits[index].id;
                _this.$http.put(web.API_PATH + 'habit/del/habit/today/_userId_/'+id, {}).then(response => {
                    _this.showLoad=false;
                    if (response.data.status === 1) {
                        _this.habits[index].todayAdded=0;
                        _this.$set(_this.habits,index,_this.habits[index]);
                        _this.$nextTick(function () {
                            $(".my_habit .item .img").css({"background-size":"40%"})
                        })
                    }
                });
            },

            getList: function (done) {
                let vm= this;

                let url = web.API_PATH + "habit/get/home/page/_userId_/"+vm.page+"/"+vm.row+"";


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
                    vm.habits=response.data.data.habits;
                    let arr = response.data.data.habitList;
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
                    vm.$nextTick(function () {
                        $(".habit_history").height( $(".habit_history").height())
                    });
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
                this.counter=1;
                this.isPageEnd=false;
                this.getList(done);
            },
            goStatistics:function () {
                this.$router.push("/habit/statistics")
            },
            goCard:function () {
                this.$router.push("/habit/card")
            },
            goAdd:function () {
                this.$router.push("/habit/add")
            }
        },
        components: {
            'v-showLoad': showLoad
        }
    }

</script>
