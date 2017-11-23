<template >
    <div class="habit_detail_box" >
        <div v-title>健康习惯</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="head">
            <div class="img"><img :src="detail.iconFinish"> </div>
            <div class="counts">参与人数 {{detail.realUserCount}}人</div>
        </div>
        <v-calendarTemplate :habitId="id" :iconON="iconON" :icon="icon" v-if="calendar"></v-calendarTemplate>
        <div class="title">{{detail.descTitle}}</div>
        <div class="content" v-html="detail.descContent"></div>

    </div>
</template>
<style>
    .habit_detail_box{background: #fff;  }
    .habit_detail_box .head{ border-bottom: 1px solid  #eee; margin-bottom: 0.3rem; padding: 0.88235rem; font-size: 1rem;background: #f1f1f1}
    .habit_detail_box .head .img{float:left; width: 1.5rem; height: 1.5rem; margin-right: 0.8rem; }
    .habit_detail_box .head .img img{ width: 100%; height: 100%;}
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
                detail:{}

            }
        },

        mounted: function () {
            let _this = this;
            _this.getDetail();


        },
        methods:{

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
                        _this.detail.descContent= _this.detail.descContent.replace(/\r\n/g,"<br>");
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

