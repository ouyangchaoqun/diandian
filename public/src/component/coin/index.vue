<template>
    <div class="coin_index">
        <div class="my_coin">
            <div class="word"> <div class="icon"></div><span>1100</span></div>
            <div class="detail"><span>积分明细</span></div>
            <div class="rule" v-show="false">积分规则</div>
        </div>
        <div class="tabs">
            <div :class="{on:tab==1}" @click="tabChange(1)">积分商城</div>
            <div :class="{on:tab==2}" @click="tabChange(2)">每日任务</div>
        </div>
        <div class="cont_tab">
            <div class="tab_c product "  :class="{on:tab==1}">
                <div class="title"><span>精选推荐</span></div>
                <ul>
                    <li>
                        <div class="item" @click="goProduct(1)">
                            <div class="img"><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3622256548,81672705&fm=173&s=B32AF804C48B276E169B88880300E09B&w=550&h=366&img.JPEG"></div>
                            <div class="title">头盔VR眼镜</div>
                            <div class="coin">
                                2800 点豆
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item" @click="goProduct(2)">
                            <div class="img"><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3622256548,81672705&fm=173&s=B32AF804C48B276E169B88880300E09B&w=550&h=366&img.JPEG"></div>
                            <div class="title">头盔VR眼镜</div>
                            <div class="coin">
                                2800 点豆
                            </div>
                        </div>
                    </li>

                    <li>
                        <div class="item" @click="goProduct(3)">
                            <div class="img"><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3622256548,81672705&fm=173&s=B32AF804C48B276E169B88880300E09B&w=550&h=366&img.JPEG"></div>
                            <div class="title">头盔VR眼镜</div>
                            <div class="coin">
                                2800 点豆
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item" @click="goProduct(4)">
                            <div class="img"><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3622256548,81672705&fm=173&s=B32AF804C48B276E169B88880300E09B&w=550&h=366&img.JPEG"></div>
                            <div class="title">头盔VR眼镜</div>
                            <div class="coin">
                                2800 点豆
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <div class="img"><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3622256548,81672705&fm=173&s=B32AF804C48B276E169B88880300E09B&w=550&h=366&img.JPEG"></div>
                            <div class="title">头盔VR眼镜</div>
                            <div class="coin">
                                2800 点豆
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="item">
                            <div class="img"><img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3622256548,81672705&fm=173&s=B32AF804C48B276E169B88880300E09B&w=550&h=366&img.JPEG"></div>
                            <div class="title">头盔VR眼镜</div>
                            <div class="coin">
                                2800 点豆
                            </div>
                        </div>
                    </li>

                    <div class="clear"></div>
                </ul>

            </div>
            <div class="tab_c"  :class="{on:tab==2}">
                <div class="task_list">
                    <div class="item type2">
                        <div class="icon"></div>
                        <div class="word">
                            <div class="title">早起打卡 <span>+1</span></div>
                            <div class="info">早起打卡时段：05:00-10:00</div>
                        </div>
                        <div class="btn">去打卡</div>
                    </div>
                    <div class="item type3">
                        <div class="icon"></div>
                        <div class="word">
                            <div class="title">早睡打卡 <span>+1</span></div>
                            <div class="info">早起打卡时段：05:00-10:00</div>
                        </div>
                        <div class="btn no">已完成</div>
                    </div>

                    <div class="item type1">
                        <div class="icon"></div>
                        <div class="word">
                            <div class="title">记录心情 <span>+1</span></div>
                            <div class="info">记录心情记录心情</div>
                        </div>
                        <div class="btn">去记录</div>
                    </div>

                    <div class="item type7">
                        <div class="icon"></div>
                        <div class="word">
                            <div class="title">邀请好友 <span>+1</span></div>
                            <div class="info">早起打卡时段：05:00-10:00</div>
                        </div>
                        <div class="btn">去打卡</div>
                    </div>

                    <div class="item type6">
                        <div class="icon"></div>
                        <div class="word">
                            <div class="title">记录健康好习惯 <span>+1点豆</span></div>
                            <div class="info">早起打卡时段：05:00-10:00</div>
                        </div>
                        <div class="btn">去打卡</div>
                    </div>

                </div>


            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {
                tab:1
            }
        },
        mounted:function () {




        },
        methods: {
            tabChange:function (v) {
                this.tab=v;
            },
            goProduct:function (id) {
                this.$router.push("/coin/product?id="+id)
            }
        }
    }


</script>
<style>
    .coin_index{ background: #fff;}

    .coin_index .product ul{ margin: 0.38235rem; margin-top: 0}
    .coin_index .product ul li  { width: 50%; float:left;
        overflow: hidden ; margin-bottom: 0.8rem;}
    .coin_index .product ul li .item{ margin:0 0.5rem;}
    .coin_index .product .item .img img{ width: 100%; border-radius: 0.4rem; }
    .coin_index .product .item .title{ font-size: 0.88235rem; color:#333;}
    .coin_index .product .item .coin { font-size: 0.88235rem; color:#E28B27}

    .coin_index .my_coin{
        height: 8.823529411764706rem;
        background:-webkit-gradient(linear, 0 0, right 0, from(#f97f06), to(#ffb336));
    }
    .coin_index .my_coin  .word{ color:#fff; font-size: 2.5rem; text-align: center; padding-top: 2rem; position: relative; display: table;  margin: 0 auto;}
    .coin_index .my_coin  .detail { text-align: center;}
    .coin_index .my_coin  .detail span{ text-align: center; color:#fff; font-size: 0.88235rem; padding-right: 1rem; background: url(../../images/coin_jt.png) no-repeat center right; background-size: 0.4117647058823529rem;  }
    .coin_index .my_coin  .rule{ background: rgba(255,255,255,0.4); height: 1.6rem; width: 4.5rem; text-align: center; color:#fff; font-size: 0.8235rem; border-bottom-left-radius:0.8rem;border-top-left-radius:0.8rem; line-height: 1.6rem; position: absolute; top:1rem; right:0  }
    .coin_index .my_coin .icon{ height: 1.588235294117647rem; width: 1.588235294117647rem; background: url(../../images/coin_douzi.png) no-repeat ; background-size:  1.558823529411765rem;  position: absolute; top:3.3rem; left:-1.8rem; }

    .coin_index .tabs{
        height:3.529411764705882rem; background: #fff;  ; color:#9a9a9a;; line-height: 3.529411764705882rem;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        border-bottom: #eeeeee solid  0.5882352941176471rem;
    }

    .tabs>div.on{ color:#ff8717; position: relative}
    .tabs>div.on:after{ content: ''; display: block; position: absolute; height:0.1176470588235294rem ; overflow: hidden; background: #fb8c11; width: 100%;bottom:0; }
    .tabs>div{
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        flex: 1;
        text-align: center;
    }

    .tab_c{ display: none}
    .tab_c.on{ display: block}
    .coin_index .cont_tab .tab_c>.title{ height: 3.6rem; position: relative}
    .coin_index .cont_tab .tab_c>.title:before{ content: ''; display: block; width: 5.6rem; height: 0.0588235294117647rem; background: #fb8c11;
        overflow: hidden;  position: absolute; top:50%; left:50%; margin-left: -2.8rem; margin-top: -0.029rem; z-index: 1}
    .coin_index .cont_tab .tab_c>.title span{ position: absolute; display: block;  top:0; left:50%; margin-left: -2rem; width: 4rem; color:#333; text-align: center; background: #fff; z-index: 2; font-size: 0.88235rem; line-height: 3.6rem;  }



    .coin_index .cont_tab  .task_list .item{ background: #fff; border-bottom:1px  solid #f1f1f1; height:4rem; margin:  0 0.88235rem; position: relative ; padding: 0.15rem; }
    .coin_index .cont_tab  .task_list .item .icon{ width: 2.117647058823529rem; height: 2.117647058823529rem; border-radius: 50%; background: #ffaa00; position: absolute; top:50%; margin-top: -1.058823529411765rem; }
    .coin_index .cont_tab  .task_list .item .word{ margin-left: 3.2rem; margin-top: 0.9rem; line-height: 1 }
    .coin_index .cont_tab  .task_list .item .word .title{ font-size: 1rem; color:#333;}
    .coin_index .cont_tab  .task_list .item .word .title span{ color:#ff8318; display: inline-block; margin-left: 0.8rem;}
    .coin_index .cont_tab  .task_list .item .word .info{  color:#999;font-size:0.8235294117647059rem; margin-top: 0.4rem;  }
    .coin_index .cont_tab  .task_list .item  .btn{
        border-radius: 0.9117647058823529rem; position: absolute; right:0; top:50%; margin-top: -0.9117647058823529rem;
        color:#fff; text-align: center;
        background:-webkit-gradient(linear, 0 0, right 0, from(#f97f06), to(#ffaf27));
        width: 3.941176470588235rem;
        height: 1.823529411764706rem; line-height: 1.823529411764706rem;
        font-size: 0.88235rem;
    }
    .coin_index .cont_tab  .task_list .item  .btn:active{
        background:-webkit-gradient(linear, 0 0, right 0, from(#f9630c), to(#ffa115));
    }
    .coin_index .cont_tab  .task_list .item  .btn.no{background:#d9d9d9}
    .coin_index .cont_tab  .task_list .item.type1 .icon{
        background: url(../../images/coin_task_type_1.png); background-size: 100%;
    }
    .coin_index .cont_tab  .task_list .item.type2 .icon{
        background: url(../../images/coin_task_type_2.png); background-size: 100%;
    }
    .coin_index .cont_tab  .task_list .item.type3 .icon{
        background: url(../../images/coin_task_type_3.png); background-size: 100%;
    }
    .coin_index .cont_tab  .task_list .item.type6 .icon{
        background: url(../../images/coin_task_type_6.png); background-size: 100%;
    }
    .coin_index .cont_tab  .task_list .item.type7 .icon{
        background: url(../../images/coin_task_type_7.png); background-size: 100%;
    }


</style>