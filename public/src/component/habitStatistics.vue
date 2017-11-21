<template >
    <div class="habit_statistics_box" >
        <v-showLoad v-if="showLoad"></v-showLoad>
        <div class="item" v-for="item in list">
            <div class="img"  :style="'background: url('+item.iconFinish+') no-repeat center ; background-size: 64%;'"></div>
            <div class="title">
                <div class="t">{{item.title}}</div>
                <div class="s">开始于{{formatTime(item.startTime)}}</div>
            </div>
            <div class="contanue">
                <div class="t">{{item.finishNum}}天</div>
                <div class="s">共完成</div>
            </div>
            <div class="clear"></div>
        </div>

    </div>
</template>
<style>
    .habit_statistics_box{background: #fff;  }
    .habit_statistics_box .item{ margin: 0.88235rem;  -webkit-box-shadow:0px 0px 13px rgba(0,0,0,.18); box-shadow:0px 0px 13px  rgba(0,0,0,.18); border-radius: 0.2rem; padding: 0.88235rem; position: relative}
    .habit_statistics_box .item .img{  display: inline-block;border: 1px solid  rgba(255,153,0,0.5) ; height: 2.3529411764705882352941176470588rem; width: 2.3529411764705882352941176470588rem;  border-radius: 50%; font-size: 2rem; float:left;}
    .habit_statistics_box .item .title{ float:left; margin-left: 0.6rem; line-height: 1}
    .habit_statistics_box .item  .t{ display: block; font-size: 0.88235rem; line-height: 1;  margin-bottom: 0.6rem; margin-top: 0.2rem; color:#666}
    .habit_statistics_box .item  .s{ color:#999; font-size:0.64705882352941176470588235294118rem; line-height: 1}

    .habit_statistics_box .item .contanue{position: absolute; right:0.88235rem; top:.88235rem; text-align: right}


</style>
<script type="text/javascript">

    import showLoad from './showLoad.vue';
    export default {
        data() {
            return {
                showLoad:false,
                list:[]
            }
        },

        mounted: function () {
            let _this = this;
            _this.getList();

        },
        methods:{
            formatTime:function (time) {
              return xqzs.dateTime.formatYearDate(time)
            },
            getList:function () {
                let _this = this;
                //
                _this.showLoad=true;
                _this.$http.get(web.API_PATH+'habit/get/statistics/habit/_userId_').then(response => {
                    _this.showLoad=false;
                    if(response.data.status===1){
                        _this.list= response.data.data;
                    }
                }, response => {
                    _this.showLoad=false;
                });

            }

        },
        components: {
            'v-showLoad': showLoad
        }
    }

</script>

