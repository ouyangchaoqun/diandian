<template>
    <div class="coin_index">
        <div v-title>我的积分</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
        <v-scroll :on-refresh="onRefresh" :on-infinite="onInfinite"  isNotRefresh="true" :isPageEnd="isPageEnd" :isShowMoreText="isShowMoreText">
        <div class="my_coin">
            <div class="word"> <div class="icon"></div><span>{{user.coinAmount}}</span></div>
            <div class="detail"><span @click="goList()">积分明细</span></div>
            <div class="rule" v-show="false">积分规则</div>
        </div>
        <div class="tabs">
            <div :class="{on:tab==1}" @click="tabChange(1)">积分商城</div>
            <div :class="{on:tab==2}" @click="tabChange(2)">每日任务</div>
        </div>
        <div class="cont_tab  swiper-container">
            <div class="swiper-wrapper">
                <div class="tab_c product swiper-slide on "   >
                    <div class="title"><span>精选推荐</span></div>
                    <ul>
                        <li v-for="(item,index) in list"  @click="goProduct(item.goodsId)">
                            <div class="last_count" v-if="item.stock>0">
                                <span>还剩</span>
                                <span class="count">{{item.stock}}件</span>
                            </div>
                            <div class="item">
                                <div class="img"><img :src="item.path"></div>
                                <div class="title">{{item.name}}</div>
                                <div class="coin">
                                    {{item.coinNum}} <span>积分</span>
                                </div>
                                <div class="btn change_over" v-if="item.stock==0">已兑完</div>
                                <template v-else="">
                                    <div class="btn" v-if="user.coinAmount<item.coinNum" @click.stop="getCoin(index)">赚积分</div>
                                    <div class="btn change" v-else="" @click.stop="goProduct(item.goodsId)">去兑换</div>
                                </template>
                            </div>
                        </li>
                        <li class="add_item " v-if="list.length % 2 ==1">
                            <span>敬请期待</span>
                        </li>
                        <div class="clear"></div>
                    </ul>

                </div>
                <div class="tab_c swiper-slide on"   >
                    <div class="task_list">
                        <div :class="'item type'+item.type" v-for="item in taskList">
                            <div class="icon"><img :src="item.icon" ></div>
                            <div class="word">
                                <div class="title">{{item.title}} <span>+{{item.coinNum}}</span></div>
                                <div class="info">{{item.desc}}</div>
                            </div>

                            <div class="btn no" v-if="item.finished" >{{item.btnFinish}}</div>
                            <div class="btn no" v-if="item.finished==-1">{{item.btnFail}}</div>
                            <div class="btn" v-if="item.finished==0" @click="goDo(item.type)">{{item.btnUnFinish}}</div>
                        </div>

                    </div>




                </div>
            </div>
        </div>
        </v-scroll>
    </div>
</template>
<script>
    import Bus from '../bus.js';

    import showLoad from '../showLoad.vue';
    import scroll from '../lib/scroll.vue';



    export default {
        data() {
            return {
                tab:1,
                list:[],
                page: 1, //默认已经显示出15条数据 count等于一是让从16条开始加载
                row: 4,  // 一次显示多少条

                showAll:false,
                showLoad:false,
                isPageEnd:false,
                isShowMoreText:true,
                taskList:[],user:{},
                isLoading:false,
                shareOnePersonCoin:5,
                mySwiperPre:null,
                tabHeight:[]
            }
        },
        mounted:function () {
            this.getList(); //商城列表
            this.getTaskList() ; //任务列表
            this.getUserInfo();

            let _this=this;
            this.$nextTick(function () {
                _this.mySwiperPre = new Swiper('.cont_tab', {
                    slidesPerView: 1,
                    onInit: function(swiper){

                    },
                    onSlideChangeEnd: function(swiper){
                        _this.tab=swiper.activeIndex+1;
                        if( _this.tab==2){
                            this.isShowMoreText=false
                        }else{
                            if(!this.isPageEnd)
                                this.isShowMoreText=true
                        }
                        Bus.$emit("scrollMoreTextInit", this.isShowMoreText);


                        $(".swiper-slide").each(
                            function () {
                               _this.tabHeight.push($(this).height())
                            }
                        )

                        $(".cont_tab ").height( _this.tabHeight[swiper.activeIndex])
                    }
                });
                this.mySwiperPre.slideTo(0);
            })
        },
        methods: {
            goDo:function (type) {
                let _this=this;
                if(type==7){
                    _this.showLoad=true;
                    this.$http({
                        method: 'GET',
                        type: "json",
                        url: web.API_PATH + 'coin/push/coin/card/_userId_/1',
                    }).then(function (data) {
                        _this.showLoad=false;
                        if (data && data.data.status == 1) {
                            xqzs.weui.dialog({
                                title:'邀请卡已经发送',
                                msg:'前往公众号查看你的专属名片',
                                submitText:'查看',
                                submitFun:function () {
                                    try {
                                        WeixinJSBridge.call('closeWindow');
                                    }catch (e){
                                    }
                                }
                            })
                        }
                    })
                }else{
                    this.$router.push("/")
                }

            },
            getCoin:function (index) {
                let _this=this;
                let product= this.list[index];
                let lastCount = Math.ceil((product.coinNum -  this.user.coinAmount) / this.shareOnePersonCoin);
                let  html =    '<div class="get_coin">' +
                '                    <div class="close"></div>'+
                '                    <div class="img">'+'<img src="'+product.path+'" />'+'</div>\n' +
                '                    <div class="h1">积分不足</div>\n' +
                '                    <div class="con">已有'+this.user.coinAmount+'积分，每邀请1位好友支持可得'+this.shareOnePersonCoin+'积分，<span>邀请'+lastCount+'位好友</span>关注“好一点”公众号可立即兑换</div>\n' +
                '                    <div class="line"></div>\n' +
                '                    <div class="info">注：更多获取积分方式，请去每日任务查看</div>\n' +
                '                    <div class="btn">邀请好友赚积分</div>\n' +
                '                </div>';
                xqzs.weui.dialogCustom(html);
                $(".get_coin .close").click(function () {
                    $(".js_dialog .weui-mask").click();
                });
                $(".get_coin .btn").click(function () {
                    _this.showLoad=true;
                    $(".js_dialog .weui-mask").click();
                    _this.$http.get(web.API_PATH + 'coin/push/coin/card/_userId_/'+product.goodsId).then(response => {
                         if (response.data.status == 1) {
                            _this.showLoad = false;
                            xqzs.weui.dialog({
                                title: '邀请卡',
                                msg: '前往公众号查看你的邀请卡',
                                submitText: '查看',
                                submitFun: function () {
                                    try {
                                        WeixinJSBridge.call('closeWindow');
                                    } catch (e) {
                                    }
                                }
                            })
                        }

                    }, function (error) {
                        _this.showLoad = false;
                    });

                })
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
            getTaskList:function () {
                let _this=this;
                this.$http.get(web.API_PATH+'coin/get/task/_userId_').then((response) => {

                    _this.taskList = response.data.data;
                    console.log(this.taskList)
                    for(let i =0;i< this.taskList.length;i++){

                        if(_this.taskList[i].type==7){
                            _this.shareOnePersonCoin= _this.taskList[i].coinNum;
                            break;
                        }
                    }

                })
            },
            tabChange:function (v) {
                if(v!=this.tab){
                    this.mySwiperPre.slideTo(v-1);
                }
                console.log("bbbbbbbbb3b23333bbbbbbbbbbbb")


            },
            goProduct:function (id) {
                this.$router.push("/coin/product?goodsId="+id)
            },
            goList:function () {
                this.$router.push('list')
            },

            getList: function (done) {
                console.log("rrrrrrrrrrrrrrrrr")
                let vm= this;
                let url = web.API_PATH + "coin/get/goods/"+vm.page+"/"+vm.row+"";

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
                    vm.$nextTick(function () {
                         $(".product .item .img img").height($(".product .item .img img").width())
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
                this.page=1;
                this.isPageEnd=false;
                this.getList(done);
            },
        },
        components: {
            'v-scroll': scroll,
            'v-showLoad':showLoad,
        },
        updated:function () {
            var obj =  $(".cont_tab .product ul li")
            xqzs.weui.active(obj);
            $(".cont_tab .product  ul li .btn ").on("touchstart",function () {
                event.stopPropagation();
            });



        }
    }


</script>
<style>
    .coin_index{ background: #fff;}


    .get_coin{ position: fixed;    z-index: 1001; top:50%; left:50%; width: 80%; height:26rem; margin-left: -40%; margin-top: -13rem; background: #fff; border-radius: 0.8rem; text-align: center; line-height: 1}
    .get_coin .img{ width:9.411764705882353rem; margin: 0 auto ; height:9.411764705882353rem; text-align: center; margin-top: 1.647058823529412rem;}
    .get_coin .img img{ max-width: 100%; max-height: 100%; }
    .get_coin .h1{ margin-top: 1rem; margin-bottom: 1rem; font-size: 1rem; color:#000; font-weight: bold}
    .get_coin .con{ font-size: 0.7647058823529412rem; color:#666; line-height: 1.5rem; margin: 0 1.5rem; text-align: left;}
    .get_coin .con span{ color:#333; font-weight: bold}
    .get_coin .line{ height: 1px; width: 85%; margin: 0.8rem auto; background: #f1f1f1}
    .get_coin .info{ color:#666; font-size: 0.7647058823529412rem;}
    .get_coin .btn{background: #FC9B2C; border-radius: 0.15rem; line-height: 2rem; font-size: 0.8235rem; color:#fff; text-align: center; width: 80%; margin: 0 auto;position: absolute; bottom:1.3rem;left:50%; margin-left: -40%; }
    .get_coin .close{ background: url(../../images/coin_close.png) no-repeat; width: 0.8235294117647059rem; background-size:  0.8235294117647059rem;height: 0.8235294117647059rem; position: absolute; top:0.88235rem; right:0.88235rem;}


    .coin_index .product ul{ margin-bottom: 1.176470588235294rem; }
    .coin_index .product ul li  {position:relative ;background: #fff; width: 50%; float:left;  overflow: hidden ;  padding-top: 0.88235rem; padding-bottom: 0.88235rem; border-top:1px solid #eee; height: 12.17647058823529rem; }

     .coin_index .product ul li:nth-child(odd):after{ content: ''; height: 100%; width: 1px; position: absolute; right:0;top:0;background: #eee}
    .coin_index .product ul li .item{ margin:0 0.88235rem; position: relative}
    .coin_index .product ul li    .last_count{ position: absolute; top:0.6rem; right:0.6rem;z-index: 1; background: #333; padding: 0.2rem  0.3rem; }
    .coin_index .product ul li .last_count:after{ content: ''; display: block; width: 0; position: absolute;  bottom:-0.4rem; left:0.5rem;
        height: 0;
        border-left: 0.2rem solid transparent;
        border-right: 0.6rem solid transparent;
        border-top: 0.6rem solid #333;}
    .coin_index .product ul li.add_item{  text-align: center; color:#ddd; position: relative; background: url(../../images/coin_index_add_item_bg.png) no-repeat #fff center; background-size: 4.6rem; ; background-position-y: 3.2rem}
    .coin_index .product ul li.add_item span{display: inline-block;line-height:1; height: 1rem; position: absolute;
       top:62%; left:0;width: 100%; font-size: 1.6rem;}
    .coin_index .product ul li    .last_count span{ display: block; text-align: center; line-height: 1.3; font-size:0.5294117647058824rem; color:#FFFAF4 ; }
    .coin_index .product ul li    .last_count span.count{ color:#FF9933 }
    .coin_index .product .item .img img{ width: 100%;  }
    .coin_index .product .item .title{ font-size: 0.7058823529411765rem; color:#333; margin-top: 0.1rem;}
    .coin_index .product .item .coin { font-size:0.88235rem; color:#FC9B2C; margin-top: 0.35rem;}
    .coin_index .product .item .coin span{ color:#B1AFAF ; font-size:0.6470588235294118rem; }
    .coin_index .product .item .btn{background: #FF0000; border-radius: 0.3rem; line-height: 1.3rem; font-size: 0.6470588235294118rem; color:#fff; text-align: center; width: 2.882352941176471rem; position: absolute; right: 0; bottom:0rem;}
    .coin_index .product .item .btn:active{background: #e60000;}
    .coin_index .product .item .btn.change{background: #FC9B2C;}
    .coin_index .product .item .btn.change:active{background: #ee9329;}
    .coin_index .product .item .btn.change_over{     background: #d9d9d9;
        color: #fff;}

    .coin_index .my_coin{ height: 4.6rem;  background:-webkit-gradient(linear, 0 0, right 0, from(#f97f06), to(#ffb336)); position: relative }
    .coin_index .my_coin  .word{ color:#fff; font-size: 2.5rem; text-align: center; padding-top: 1rem; position: relative; display: table;  margin-left: 3rem;;  line-height: 1}
    .coin_index .my_coin  .detail { position: absolute; right:1.2rem; top:1.5rem;}
    .coin_index .my_coin  .detail span{ text-align: center; color:#fff; font-size: 0.88235rem; padding-right: 1rem; background: url(../../images/coin_jt.png) no-repeat center right; background-size: 0.4117647058823529rem;  }
    .coin_index .my_coin  .rule{ background: rgba(255,255,255,0.4); height: 1.6rem; width: 4.5rem; text-align: center; color:#fff; font-size: 0.8235rem; border-bottom-left-radius:0.8rem;border-top-left-radius:0.8rem; line-height: 1.6rem; position: absolute; top:1rem; right:0  }
    .coin_index .my_coin .icon{ height: 1.588235294117647rem; width: 1.588235294117647rem; background: url(../../images/coin_coin_icoin2.png) no-repeat ; background-size:  1.1rem;  position: absolute; top:2.1rem; left:-1.5rem; }

    .coin_index .tabs{
        height:3.529411764705882rem; background: #fff;  ; color:#9a9a9a;; line-height: 3.529411764705882rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        border-bottom: #eeeeee solid  0.5882352941176471rem;
    }

    .tabs>div.on{ color:#FC9B2C; position: relative; font-weight: bold}
    .tabs>div.on:after{ content: ''; display: block; position: absolute; height:0.1176470588235294rem ; overflow: hidden; background: #FC9B2C; width: 80%;bottom:0; margin-left: 10% }
    .tabs>div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
    }

    .tab_c{ display: none}
    .tab_c.on{ display: block}
    .coin_index .cont_tab .tab_c>.title{ height: 3.6rem; position: relative; background: #fff;}
    .coin_index .cont_tab .tab_c>.title:before{ content: ''; display: block; width: 5.6rem; height: 0.0588235294117647rem; background: #FC9B2C;
        overflow: hidden;  position: absolute; top:50%; left:50%; margin-left: -2.8rem; margin-top: -0.029rem; z-index: 1}
    .coin_index .cont_tab .tab_c>.title span{ position: absolute; display: block;  top:0; left:50%; margin-left: -2rem; width: 4rem; color:#333; text-align: center; background: #fff; z-index: 2; font-size: 0.88235rem; line-height: 3.6rem;  }


    .coin_index .cont_tab  .task_list{background: #fff;}
    .coin_index .cont_tab  .task_list .item{ background: #fff; border-bottom:1px  solid #f1f1f1; height:4rem; margin:  0 0.88235rem; position: relative ; padding: 0.15rem; }
    .coin_index .cont_tab  .task_list .item .icon{ width: 2.117647058823529rem; height: 2.117647058823529rem;   position: absolute; top:50%; margin-top: -1.058823529411765rem; }
    .coin_index .cont_tab  .task_list .item .word{ margin-left: 3.2rem; margin-top: 0.9rem; line-height: 1 }
    .coin_index .cont_tab  .task_list .item .word .title{ font-size: 0.8235294117647059rem; color:#333;}
    .coin_index .cont_tab  .task_list .item .word .title span{ color:#FC9B2C; display: inline-block; margin-left: 0.5rem;}
    .coin_index .cont_tab  .task_list .item .word .info{  color:#999;font-size:0.7058823529411765rem; margin-top: 0.5rem;  }
    .coin_index .cont_tab  .task_list .item  .btn{
        border-radius: 0.9117647058823529rem; position: absolute; right:0; top:50%; margin-top: -0.9117647058823529rem;
        color:#fff; text-align: center;
        background:#FC9B2C;
        width: 3.941176470588235rem;
        height: 1.823529411764706rem; line-height: 1.823529411764706rem;
        font-size: 0.7647058823529412rem;
    }
    .coin_index .cont_tab  .task_list .item  .btn:active{
        background: #e78c2a;
    }
    .coin_index .cont_tab  .task_list .item  .btn.no{background:#d9d9d9}
    .coin_index .cont_tab  .task_list .item .icon img{ width: 100%; height: 100%;

    }



</style>