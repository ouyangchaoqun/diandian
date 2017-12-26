<template >
    <div class="habit_detail_box" >
        <div v-title>{{detail.title}}</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="head">
            <div class="t">数据统计</div>
            <div class="statistics">
                <div class="item">
                   <div class="mainbox">
                       <div class="count">
                           <span>{{detail.realUserCount}}</span> 人
                       </div>
                       <div class="line"></div>
                       <div class="tip">参与人数</div>
                   </div>
                </div>
                <div class="item">
                    <div class="mainbox">
                    <div class="count">
                        <span>{{finishDay}}</span> 天
                    </div>
                    <div class="line"></div>
                    <div class="tip">本月完成</div>
                </div>
                </div>
            </div>

        </div>
        <div class="h"></div>
        <v-calendarTemplate :habitId="id" :iconON="iconON" :icon="icon" v-if="calendar"  @ievent = "ievent"></v-calendarTemplate>
        <div class="title">{{detail.descTitle}}</div>
        <div class="content" v-html="detail.descContent"></div>

    </div>
</template>
<style>



    .habit_detail_box{background: #fff;  }
    .habit_detail_box .head{  padding: 0.88235rem; font-size: 1rem;background: #fff
    }.habit_detail_box .head .t{ font-size: 0.8235294117647059rem; color:#333; border-left:2px  solid #ff9a00; line-height: 1; padding-left: 0.5rem;}
     .habit_detail_box .head .img{float:left; width: 1.5rem; height: 1.5rem; margin-right: 0.8rem; }
    .habit_detail_box .head .img img{ width: 100%; height: 100%;}
    .habit_detail_box .head  .statistics { display: -webkit-box;
        display: -webkit-flex;
        display: flex; margin-top: 0.8rem;}
    .habit_detail_box .head .statistics .item{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
    }
    .habit_detail_box .head  .mainbox{line-height: 1}
    .habit_detail_box .head  .count span{ font-size: 1.6rem; color:#ff9a00;line-height: 1}
    .habit_detail_box .head .mainbox{ width: 70%; margin: 0 auto; font-size:0.8235294117647059rem; color:#999; }
    .habit_detail_box .head .mainbox .line{ height: 1px ; background: #e7e4e4; width: 100%;
        overflow: hidden; margin: 0.6rem 0}
    .habit_detail_box .h{ height: 0.7rem; background: #f8f8f8}
     .habit_detail_box .title{ margin: 0 0.88235rem; text-align: center; padding: 0.88235rem; font-size: 1rem; color:#333; border-bottom: 1px solid #f1f1f1}
    .habit_detail_box .content{ padding: 0.88235rem; font-size: 0.88235rem; color:#666}

</style>
<script type="text/javascript">

    import showLoad from './showLoad.vue';
    import calendarTemplate from './lib/calendarHabit.vue'
    export default {
        data() {
            return {
                showLoad:false,
                id:this.$route.query.id,
                calendar:false,
                detail:{},
                finishDay:0

            }
        },

        mounted: function () {
            let _this = this;
            _this.getDetail();


        },
        methods:{

            ievent(...data){
                this.finishDay=data[0];
                console.log('allData:',data);//
            },
            getDetail:function () {
                let _this = this;
                //
                _this.showLoad=true;
                _this.$http.get(web.API_PATH+'habit/get/detail/'+this.id).then(response => {
                    _this.showLoad=false;
                    if(response.data.status===1){
                        _this.iconON=response.data.data.iconFinish;
                        _this.icon=response.data.data.iconNotFinish;
                        _this.calendar=true;
                        _this.detail=response.data.data;
//                        _this.detail.descContent= _this.detail.descContent.replace(/\r\n/g,"<br>");
                    }
                }, response => {
                    _this.showLoad=false;
                });

            }

        },
        components: {
            'v-showLoad': showLoad,
            'v-calendarTemplate':calendarTemplate,
        }
    }

</script>

