<template>
    <div class="test_list_box">
        <v-showLoad v-if="showLoad"></v-showLoad>

        <div class="class">
            <div class="item " :class="{on:classId==0}"  @click="changeClass(0)">全部</div>
            <div class="item" v-for="item in testClass" :class="{on:classId==item.id}" @click="changeClass(item.id)">{{item.name}}</div>

        </div>
        <div class="top" @click="order()">
            <div class="order">排序</div>
            <div class="pai"><span>{{orders[orderIndex].label}}</span></div>
            <div class="select_order">
                <div class="itemo" :class="{on:orderDefault==item.value}"  v-for="item in orders" @click="changeOrder(item.value)">{{item.label}}</div>
            </div>
        </div>

        <div class="list">
            <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite" :isPageEnd="isPageEnd" :isShowMoreText="isShowMoreText" :cutHeight="topHeight">

                <div class="item" v-for="item in list">
                    <router-link :to="{ path: '/psychtestDetail', query: { testId: item.id}}">
                        <div class="right"><img :src="item.pic+'?x-oss-process=image/resize,m_fill,h_200,w_200'"></div>
                        <div class="left">
                            <div class="tc">
                                <div class="t">{{item.title}}</div>
                                <div class="sub_t">{{item.sub_title}}</div>
                            </div>
                            <div class="price">¥{{formatPrice(item.price)}}<span>¥{{formatPrice(item.old_price)}}</span>
                            </div>
                            <div class="done_count">{{item.count}}人已测</div>
                        </div>

                        <div class="clear"></div>
                    </router-link>
                </div>
            </v-scroll>
        </div>

    </div>
</template>
<script type="text/javascript">

    import Bus from './bus.js';
    import showLoad from './showLoad.vue';
    import scroll from './lib/scroll.vue';
    export default {
        data() {
            return {
                showLoad:false,
                testClass:[],
                classId:0,
                orderDefault:'sort',
                orderIndex:0,
                orders:[{label:'按默认',value:'sort'},{label:'按时间',value:'add_time'},{label:'按热度',value:'count'},{label:'按价格',value:'price'}],
                list:[],
                page: 1,
                row: 6,
                isPageEnd: false,
                isShowMoreText:false,
                topHeight:58,
                isSelecting:false,

            }
        },
        mounted: function () {
            let　_this=this;
            _this.getClass();
            _this.getList();
            xqzs.wx.setConfig(this);
            _this.topHeight=$(".test_list_box .top").height();


        },
        components: {
            'v-scroll': scroll,
            'v-showLoad': showLoad
        },
        methods: {
            getList: function (done) {
                let vm= this;

                let url = web.API_PATH + "test/get/list/"+vm.classId+"/"+vm.page+"/"+vm.row+"";
                url= url+"?sort_type="+vm.orderDefault;
                let desc="desc";
                if(vm.orderDefault==='price'){
                    desc ='asc';
                }
                url= url+"&desc="+desc;
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
//                    console.log(response)

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
                this.counter=1;
                this.isPageEnd=false;
                this.getList(done);
            },
            changeOrder:function (v) {
                let _this =this;
                _this.orderDefault = v;
                if (_this.orderDefault === 'price') {
                    $(".pai").addClass("on")
                } else {
                    $(".pai").removeClass("on")
                }
                for (let i = 0; i < _this.orders.length; i++) {
                    if (_this.orders[i].value === _this.orderDefault) {
                        _this.orderIndex = i;
                        break;
                    }
                }
                _this.page = 1;
                _this.isPageEnd = false;
                _this.getList();
            },
            order:function () {
                let _this =this;
                _this.isSelecting = !_this.isSelecting;
                if(_this.isSelecting){
                    $(".test_list_box .top").stop().animate({height:$(".select_order").height()+_this.topHeight+"px"},200);
                    $(".pai").addClass("on")
                }else{
                    $(".test_list_box .top").stop().animate({height:_this.topHeight+"px"},200);
                    $(".pai").removeClass("on")
                }


            },
            getClass:function () {
                 let　_this=this;
                _this.$http.get(web.API_PATH+'test/get/class').then(response => {
                    _this.showLoad=false;
                    if(response.data.status===1){
                        _this.testClass = response.data.data;
                    }
                }, response => {
                    _this.showLoad=false;

                });
            },
            changeClass:function (v) {
                this.page=1;
                this.classId=v;
                this.isPageEnd=false;
                this.getList();
            },
            formatPrice:function (v) {
                return xqzs.string.formatPrice(v);
            },
            leftTitle:function (v) {
                return xqzs.shortname(v,7)
            },
            formatTime:function (v) {
                return xqzs.dateTime.formatDate(v)
            },
        }

    }
</script>
<style>
    .test_list_box{ background: #fff}
    .test_list_box .class{ width: 20%; float:left; height: 100%; background: #F4F4F7 ; overflow-y: auto}
    .test_list_box .class .item{ height:2.882352941176471rem; font-size:0.8235294117647059rem; ;
        line-height:2.882352941176471rem;text-align: center }
    .test_list_box .class .item.on{ background: #fff; font-size: 0.9411764705882353rem; font-weight: bold;position: relative}
    .test_list_box .class .item.on:after{ height: 100%; width: 1px ; background: #F4F4F7; display: block; position: absolute; right:0; top:0; content: ' '}

    .test_list_box .class .item.on:before{ height: 100%; width: 0.1764705882352941rem; ; background: #00B400; display: block; position: absolute; left:0; top:0; content: ' '}

    .test_list_box  .top{  height:2.882352941176471rem; font-size:0.75rem; width: 80% ;float:right;    overflow: hidden; position: absolute; right: 0 ; top:0;
        line-height:2.882352941176471rem; border-bottom: 1px solid #eee; z-index: 1000; background: #fff   }
    .test_list_box  .top .order{ padding-left: 0.88235rem; font-size:0.75rem; color:#666}

    .test_list_box  .top .pai{ display: inline-block; position: absolute; top:0; right: 0.88235rem;}
    .test_list_box  .top .pai span{ display: inline-block; float:left;}
    .test_list_box  .top .pai:after{ content: ' ';display: inline-block; float:left; background: url(../images/test_list_down.png) no-repeat; height: 0.3823529411764706rem; width: 0.7647058823529412rem; background-size: 0.7rem; margin-left: 0.3rem; margin-top: 1.3rem; transition: all .3s;}
    .test_list_box  .top .pai.on:after{     -webkit-transform: translateY(-50%) rotate(-90deg);
        transform:   rotate(-180deg); }


    .test_list_box .list{ width: 80%; float:left;padding: 0;   line-height: 1; position: absolute; top:2.89rem; right:0}
     .test_list_box .list .item:first-child{ padding-top: 0.2rem;}
    .test_list_box   .list .item{ border-bottom: 1px solid #eee; padding: 0.88235rem; margin-left:0.88235rem; padding-left: 0 }
    .test_list_box   .list .left{ position: relative}
    .test_list_box   .list .right{ width:5.294117647058824rem; height:5.294117647058824rem;float:right; margin-left: 0.3rem;border-radius: 6px; overflow: hidden }
    .test_list_box   .list .right img{min-width:100%;height:100%; }
    .test_list_box   .list .t{ font-size: 0.8235294117647059rem; color:#555; line-height: 1.2rem; width: 90%;font-weight: bold}

    .test_list_box   .list .left  .tc{ height: 3.3rem}

    .test_list_box   .list .sub_t{font-size: 0.7058823529411765rem; color:#999; margin-top: 0.3rem;}
    .test_list_box   .list .price{ color:#FF6600;;font-size: 0.7647058823529412rem; margin-top: 1rem; display: inline-block; }
    .test_list_box   .list .price span{color:#999; font-size: 0.6470588235294118rem; text-decoration:line-through; margin-left: 0.3rem }
    .test_list_box   .list  .done_count{ color:#999; font-size: 0.6470588235294118rem;  display: inline-block; text-align: right; position: absolute; right:6rem; bottom:0 }


    .test_list_box .yo-scroll{ background: #fff;}
    .test_list_box  .select_order{
        padding:  0.1rem 0.88235rem;       background: #fff;
    }
    .test_list_box  .select_order .itemo{ line-height: 2.4rem; text-align: right; padding-right: 1rem; color:#999}
    .test_list_box  .select_order .itemo.on{ background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMjEgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ0LjEgKDQxNDU1KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5pY29uX+mAieS4rTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSLmlrnmoYjkv67mlLnosIPmlbQiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgPHBvbHlsaW5lIGlkPSJpY29uX+mAieS4rSIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50cz0iMSA5IDguNjkyMzA3NjkgMTQgMjAgMSI+PC9wb2x5bGluZT4KICAgIDwvZz4KPC9zdmc+) no-repeat center right ; background-size: 0.6rem; color:#555}
</style>