<template >
    <div class="habit_add_box" >
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="my_habit">
            <div class="title">我的好习惯</div>
            <div class="item on" v-for="(item,index) in habits" v-if="item.added==1">
                <div class="close" @click="deleteHabit(index)">+</div>
                <div class="img"  :style="'background: url('+item.iconFinish+') no-repeat center; background-size: 64%; '"></div>
                <div class="txt">{{item.title}}</div>
            </div>


            <div class="clear"></div>

        </div>
        <div class="my_habit no_b_b">
            <div class="title">待添加的好习惯</div>
            <div class="item" v-for="(item,index) in habits" v-if="item.added!=1"  @click="add(index)">
                <div class="close" >+</div>
                <div class="img"  :style="'background: url('+item.iconNotFinish+') no-repeat center; background-size: 64%; '"></div>
                <div class="txt">{{item.title}}</div>
            </div>

            <div class="clear"></div>

        </div>
    </div>
</template>
<style>
    .habit_add_box{ background: #fff}
    .habit_add_box .my_habit{ padding: 0.6rem 0.88235rem; padding-bottom: 1rem; border-bottom: #F5F5F5 solid 0.55882352941176470588235294117647rem}
    .habit_add_box .my_habit .item{  width: 25%; float:left; text-align: center; color:#999; font-size: 0.70588235294117647058823529411765rem ;  margin-top: 0.8rem; position: relative  }
    .habit_add_box .my_habit .item .img{  display: inline-block;border: 1px solid rgba(217,217,217,0.5) ; ; height: 2.9411764705882352941176470588235rem; width: 2.9411764705882352941176470588235rem;  border-radius: 50%; font-size: 2rem;  line-height:2.7rem;  overflow: hidden;}
    .habit_add_box .my_habit .item .txt{color:#666}
    .habit_add_box .my_habit .item.on .img{border: 1px solid  rgba(255,153,0,0.5)  ;}
    .habit_add_box .my_habit .item.on .txt{ color:#666}
    .habit_add_box .my_habit .item .close{ transform: rotate(45deg); -webkit-transform: rotate(45deg); height: 0.88235rem; width: 0.88235rem; border-radius: 50%; border: 1px solid #ccc; color:#ccc; line-height: 0.82rem; position: absolute;left:50%;top:-0.6rem; margin-left: -2rem;}
    .habit_add_box .my_habit .item .close:active{border: 1px solid #FF9900; color:#FF9900}
    .habit_add_box .my_habit .title{ font-size: 0.88235rem; padding-left: 0.6rem; padding-top: 0.4rem; padding-bottom: 0.4rem; color:#666}
    .habit_add_box .no_b_b{ border-bottom: 0}
    .habit_add_box .no_b_b .item .close{transform: rotate(0deg); -webkit-transform: rotate(0deg);border: 1px solid #FF9900; color:#FF9900;}
    .habit_add_box .no_b_b .item:active .close{border: 1px solid #ccc; color:#ccc}
</style>
<script type="text/javascript">
    import showLoad from './showLoad.vue';
    export default {
        data() {
            return {
                habits:[],
                showLoad:false

            }
        },

        mounted: function () {
            this.getAllHabit()
        },
        methods:{
            add:function (index) {
                let _this=this;

                //限制数量
                let count=0;
                for(let i=0;i< _this.habits.length;i++){
                    if( _this.habits[i].added==1){
                        count++;
                    }
                }
                if(count==7){
                    xqzs.weui.tip("最多能同时添加七个习惯");
                    return ;
                }

                _this.showLoad=true;
                let id = _this.habits[index].id
                _this.$http.put(web.API_PATH + 'habit/put/habit/kind/_userId_/'+id, {}).then(response => {
                    _this.showLoad=false;
                    if (response.data.status === 1) {
                        _this.habits[index].added=1;
                        _this.$set(_this.habits,index,_this.habits[index])
                    }
                });
            },
            deleteHabit:function (index) {//
                let _this=this;
                //限制数量
                let count=0;
                for(let i=0;i< _this.habits.length;i++){
                    if( _this.habits[i].added==1){
                        count++;
                    }
                }
                if(count==1){
                    xqzs.weui.tip("最少需要保留一个习惯");
                    return ;
                }

                _this.showLoad=true;
                let id = _this.habits[index].id
                _this.$http.put(web.API_PATH + 'habit/del/habit/_userId_/'+id, {}).then(response => {
                    _this.showLoad=false;
                    if (response.data.status === 1) {
                        _this.habits[index].added=0;
                        _this.$set(_this.habits,index,_this.habits[index])
                    }
                });
            },
            getAllHabit:function () { //habit/get/all/habit
                let _this = this;
                _this.showLoad = true;
                _this.$http.get(web.API_PATH + 'habit/get/all/habit/_userId_').then(response => {
                    _this.showLoad = false;
                    if (response.data.status === 1) {
                        _this.habits = response.data.data;
                    }
                }, response => {
                    _this.showLoad = false;
                });

            }

        },
        components: {
            'v-showLoad': showLoad
        }
    }

</script>
