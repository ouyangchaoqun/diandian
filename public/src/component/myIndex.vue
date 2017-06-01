<template id="myIndex">

    <div style="position: relative">
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite">
            <div class="myIndex_box">
                <div class="banner index_banner">
                    <img src="../images/banner.jpg"/>
                    <div class="userHeaderImg">
                        <img src="../images/13.jpg" alt="">
                    </div>
                </div>
                <!--banner end -->

                <div class="chart_box">
                    <v-chart></v-chart>
                </div>

                <div class="myMood_list" v-for="item in downdata">
                    <img class="moodImg" :src="item.moodValueUrl" alt="">
                    <div class="moodImg_right" >
                        <div class="moodState" :class="{'unhappy_txt_color':item.moodValue<=4,'happy_txt_color':item.moodValue>4}">{{item.moodValueText}}</div>

                        <template v-if="currTime-item.addTime<=20*60 && (item.content=='' || item.content==null)  ">
                            <router-link :to="item.editLink" class="editMood">
                                20分钟内可以补充文字和图片
                                <img src="../images/bianji.png" alt="">
                            </router-link>
                        </template>
                        <template v-if=" (item.content!=''&& item.content!=null)  ">
                            <div class="moodContext">{{item.content}}</div>

                            <div class="moodPhotoLists" v-if="item.haspicture">

                                <div class="moodPhotoList" v-for="pic in item.pics">
                                    <img :src="pic.smallUrl" :data-bigPic="pic.bigUrl" :data-w="pic.picwidth"
                                         :data-h="pic.picheight" :style="pic.styleObject" @click="showBigImg(item.pics,pic)">
                                </div>

                            </div>
                        </template>


                        <div class="moodLoc">{{item.address}}</div>
                        <div class="moodTime">
                            <span>{{item.outTime}}</span>
                            <div class="moodFollow">
                                <span class="followCount">0</span>
                                <img class="followtype" src="../images/list_dianz_nor.png" alt="">
                                <span class="followCount">0</span>
                                <img class="followtype" src="../images/comments.png"
                                     style="width: 18px;margin-top: 3px;" alt="">
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </v-scroll>
    </div>


</template>

<script  >


    import chart from "./chart.vue"
    import scroll from './lib/scroll.vue';
    import wx from 'weixin-js-sdk';
    var myIndex = {
        template: '#myIndex'
    };
    export default {
        data() {
            return {
                counter: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
                num: 10,  // 一次显示多少条
                pageStart: 0, // 开始页数
                pageEnd: 0, // 结束页数
                listdata: [], // 下拉更新数据存放数组
                downdata: [],  // 上拉更多的数据存放数组
                currTime: xqzs.dateTime.getTimeStamp()
            }
        },
        methods: {
            showBigImg:function (list,curr) {

                var current = curr.bigUrl;
                var $data = [];
                for(var i =0;i<list.length;i++){
                    $data.push(list[i].bigUrl);
                }

                wx.previewImage({
                    current: current, // 当前显示图片的http链接
                    urls: $data // 需要预览的图片http链接列表
                });

            },

            getList(){
                let vm = this;
                vm.$http.get(web.API_PATH + 'mood/query/user/page/[userId]/' + 1 + "/" + vm.num).then((response) => {
                    vm.downdata = response.data.data.rows;
                    vm.downdata = xqzs.mood.initMoodsData(vm.downdata);
                    vm.$nextTick(function(){
                        myResizePicture(vm);//渲染完成
                    })
                }, (response) => {
                    console.log('error');
                });
            },
            onRefresh(done) {
                this.getList();
                done() // call done
            },
            onInfinite(done) {
                let vm = this;
                vm.$http.get(web.API_PATH + 'mood/query/user/page/[userId]/' + (vm.counter + 1) + "/" + vm.num).then((response) => {
                    vm.counter++;
                    vm.pageEnd = vm.num * vm.counter;
                    vm.pageStart = vm.pageEnd - vm.num;
                    let arr = response.data.data.rows;
                    let i = 0;
                    let end = vm.pageEnd;
                    arr = xqzs.mood.initMoodsData(arr);
                    for (; i < arr.length; i++) {
                        vm.downdata.push(arr[i]);
                     }
                    vm.$nextTick(function(){
                        myResizePicture();//渲染完成
                    });
                    if (arr.length === 0) {
                        this.$el.querySelector('.load-more').style.display = 'none';
                        this.$el.querySelector('.load-finish').style.display = 'block';
                        return;
                    }

                    done() // call done
                }, (response) => {
                    console.log('error');
                });
            },


        },
        mounted: function () {
            let _this = this;
            this.getList();


        },



        components: {
            'v-scroll': scroll, "v-chart": chart
        }
    }




</script>
<style>
    .editMood {
        height: 34px;
        line-height: 34px;
        font-size: 14px;
        color: #999999;
        background: #dcdcdc;
        display: block;
        padding-left: 10px;
        border-radius: 5px;
        margin-bottom: 10px;
        position: relative;
    }

    .editMood img {
        position: absolute;
        top: 7px;
        right: 10px;
        width: 20px;
    }

    .myIndex_box {
        padding-bottom: 50px;
    }

    .index_banner {
        position: relative;
    }

    .userHeaderImg {
        height: 64px;
        width: 64px;
        position: absolute;
        left: 50%;
        bottom: -32px;
        margin-left: -32px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        padding: 2px;
    }

    .userHeaderImg img {
        height: 64px;
        width: 64px;
        border-radius: 50%;
        margin: auto;
        display: block;
    }

    .chart_box {
        height: 190px;
        padding: 40px 0 20px 0;
        background: #ffffff;
        margin-bottom: 5px;
    }

    .myMood_list {
        background: #ffffff;
        padding: 16px 10px;
        margin-bottom: 1px;
    }

    .moodImg {
        width: 40px;
        height: 40px;
        display: block;
        float: left;
    }

    .moodImg_right {
        margin-left: 50px;
    }

    .moodState {
        font-size: 14px;
         margin-bottom: 6px;
    }

    .moodContext {
        font-size: 14px;
        color: #333333;
        line-height: 20px;
        margin-bottom: 10px;
    }

    .moodPhotoLists {
        display: flex;
        height: auto;
        margin-right: 20px;
        margin-bottom: 15px;
    }

    .moodPhotoList {
        float: left;
        margin-right: 0.3125rem;
        width: 4.8675rem;
        height: 4.8675rem;
        overflow: hidden;
        position: relative;
    }

    .moodLoc {
        font-size: 12px;
        color: #516591;
        margin-bottom: 5px;
    }

    .moodTime {
        font-size: 12px;
        color: #787878;
        height: 20px;
        line-height: 20px;
    }

    .moodFollow {
        float: right;
    }

    .followCount {
        float: left;
        margin-left: 5px;
    }

    .followtype {
        width: 24px;
        margin-top: -2px;
        margin-left: 5px;
        float: left;
    }

    .moodImg_right .moodPhotoLists.two>div {
        width: 7.5rem;
        height: 6rem;
    }
    .moodImg_right .moodPhotoLists.one>div {
        width: 10.7rem;
        height: 8.1rem;
    }



</style>