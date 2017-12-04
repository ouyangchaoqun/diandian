<template>
    <div class="product_box">
        <div v-title>商品详情</div>
        <v-showLoad v-if="showLoad"></v-showLoad>
       <div class="product_top">
           <div class="swiper-container product_box_swiper">
               <div class="swiper-wrapper">
                   <div class="swiper-slide" v-for="img in goods.pictures">
                       <img :src="img.path" alt="">
                   </div>
               </div>
               <div class="swiper-pagination"></div>
           </div>
           <div class="product_main">
               <h3>{{goods.name}}</h3>
               <div class="product_main_del">{{goods.coinNum}}
                   <span>点豆</span>
                    <div class="product_price">¥{{goods.price}}</div>
                    <div class="product_price product_freight">运费：包邮</div>
               </div>
           </div>
           <div class="product_adress" @click="goSetAdress()">
               <i>配送至：</i>
               <div class="adress_detail" v-if="!address">
                   <span>您还没有填写收货信息，马上去填写。</span>
               </div>
               <div class="adress_detail" v-else="">
                   <span>{{address.userName}}</span><span>{{address.mobile}}</span>
                   <div>{{provinceName}} {{cityName}} {{areaName}} {{address.address}}</div>
               </div>
               <img class="right_go" src="../../images/me_jt.png"/>
                <div style="clear: both"></div>
           </div>
           <div class="product_detail">
               <div class="product_detail_header">商品介绍</div>
               <div v-html=" goods.description">


               </div>

           </div>
           <div class="btn_bottom  " @click="change()">
               <div class="btn_change" >立即兑换</div>
           </div>
           <div id="check_change" style="display: none;">
           <div class="check_change up" v-if="check">
               <div class="close"></div>
               <div class="img">
                   <img :src="goods.pictures[0].path" alt="">
               </div>
               <div class="coin"><span>{{goods.coinNum}}</span></div>
               <div class="clear"></div>
               <div class="line"></div>
               <div class="btn_change check_change_btn" >确认兑换</div>
           </div>
           </div>
       </div>
    </div>
</template>
<script>
    import showLoad from '../showLoad.vue';
    export default {
        data() {
            return {
                goodsId:'',
                goods:{},
                showLoad:false,
                address:null,
                user:{coinAmount:0},
                shareOnePersonCoin:5,
                check:false,
            }
        },
        mounted:function () {
            this.getDetail();
            this.getAddress();
            $(".product_top").height( $(document).height()-60);
            this.getUserInfo();
            this.getTaskList();
        },
        methods: {
            change:function () {
                let _this=this;
                if(_this.user.coinAmount<_this.goods.coinNum){
                    this.getCoin();
                    return;
                }

                if( !_this.address){
                    xqzs.weui.tip("请先添加地址！",function () {
                       _this.goSetAdress();
                    });
                    return;
                }

                this.check=true;
                this.$nextTick(function () {

                    xqzs.weui.dialogCustom($("#check_change").html());
                    $(".check_change").addClass("up").removeClass("down")

                    $(".check_change .close").click(function () {
                        $(".check_change").removeClass("up").addClass("down")
                        $(".js_dialog .weui-mask").click();
                    })
                    $(".check_change_btn").click(function () {
                        _this.changeCheck();
                    })
                })



            },
            changeCheck:function () {
                let _this=this;
                $(".check_change .close").click();
                _this.$http.post(web.API_PATH + 'coin/buy/goods/'+_this.goods.id+"/_userId_/"+ _this.address.addressId +"/1",{})
                    .then(function (res) {
                        console.log(res)
                        if(res.body.status==1&&res.body.data){


                            let  html =    '<div class="get_coin">' +
                                '                    <div class="close"></div>'+
                                '                    <div class="img coin_change_success"></div>\n' +
                                '                    <div class="h1">恭喜你，兑换成功</div>\n' +
                                '                    <div class="con">请耐心等待，发货成功后快递单号会通公众对话窗口发送给你。</div>\n' +
                                '                    <div class="line"></div>\n' +
                                '                    <div class="info">(注：积分消费记录详情请在积分明细中查看）</div>\n' +
                                '                    <div class="btn coin_success_btn">OK</div>\n' +
                                '                </div>';
                            xqzs.weui.dialogCustom(html);
                            $(".get_coin .close").click(function () {
                                $(".js_dialog .weui-mask").click();
                            });
                            $(".get_coin .coin_success_btn").click(function () {
                                _this.$router.go(-1);
                            })



//



                        }
                        else if(res.body.status==9000008){
                            this.getCoin();
                        }else if(res.body.status==9000009){
                            xqzs.weui.tip("地址错误")
                        }else if(res.body.status==9000004){
                            xqzs.weui.tip("商品不足")
                        }


                    });
            },
            getCoin:function () {
                let product= this.goods;
                console.log(product)
                let lastCount = Math.ceil((product.coinNum -  this.user.coinAmount) / this.shareOnePersonCoin);
                let  html =    '<div class="get_coin">' +
                    '                    <div class="close"></div>'+
                    '                    <div class="img">'+'<img src="'+product.pictures[0].path+'" />'+'</div>\n' +
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
                    //发送邀请卡
                })
            },

            getTaskList:function () {
                this.$http.get(web.API_PATH+'coin/get/task/_userId_').then((response) => {


                    for(let i =0;i< this.taskList.length;i++){
                        this.taskList = response.data.data;
                        if(this.taskList[i].type==7){
                            this.shareOnePersonCoin= this.taskList[i].point;
                            break;
                        }
                    }

                })
            },

            getUserInfo:function () {

                let _this=this;
                _this.showLoad=true;
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'user/find/by/user/Id/_userId_',
                }).then(function (data) {//es5写法
                    _this.showLoad=false;
                    if (data.data.data !== null) {
                        _this.user = eval(data.data.data);
                    }
                }, function (error) {
                    //error
                });
            },
            goSetAdress:function () {
                this.$router.push('address')
            },
            getAddress:function () {

                let _this=this;
                _this.$http({
                    method: 'GET',
                    type: "json",
                    url: web.API_PATH + 'coin/get/address/_userId_',
                }).then(function (data) {//es5写法
                    if (data.data.data !== null) {
                        _this.address = eval(data.data.data);
                        if( _this.address.province) _this.provinceName =  _this.address.province;
                        if( _this.address.city) _this.cityName =  _this.address.city;
                        if( _this.address.area) _this.areaName =  _this.address.area;
                    }
                }, function (error) {
                    //error
                });
            },
            getDetail:function () {
                let _this = this;
                _this.showLoad=true;
                _this.goodsId = _this.$route.query.goodsId;
                _this.$http.get(web.API_PATH+'coin/get/goodsDetail/'+_this.goodsId).then((response)=>{
                    console.log(response.data.data)
                        _this.showLoad=false;
                    _this.goods = response.data.data;
                    this.$nextTick(function () {
                        var productSwiper = new Swiper ('.product_box_swiper', {

                            // 如果需要分页器
                            pagination: '.swiper-pagination',
                            observer:true,//修改swiper自己或子元素时，自动初始化swiper
                            observeParents:true//修改swiper的父元素时，自动初始化swiper
                        })
                    })
                })
            }
        },
        components: {
            'v-showLoad':showLoad,
        },
        updated:{

        }
    }


</script>
<style>




    .check_change{ height: 12rem; background: #fff;position: fixed ; bottom:0; z-index: 101001;   left:0; width: 100% }
    .check_change.up{-webkit-animation: go_top ease .3s forwards;  animation: go_top ease .3s forwards;}
    .check_change.down{-webkit-animation: go_down ease .3s forwards;  animation: go_down ease .3s forwards;}
    .check_change .img{ margin-top: 0.88235rem; margin-left: 0.88235rem; display: inline-block; float:left ;height: 5.882352941176471rem;}
    .check_change .line{ height: 1px; background: #f1f1f1; overflow: hidden; width: 100%; margin-top: 1rem;}
    .check_change .close{ background: url(../../images/coin_close.png) no-repeat; background-size: 0.8235294117647059rem; height: 0.8235294117647059rem; width: 0.8235294117647059rem; position: absolute; right:0.88235rem; top:0.88235rem;}
    .check_change img{ max-width: 5.882352941176471rem; max-height: 5.882352941176471rem;}
    .check_change .coin { display: inline-block; float:left ; font-size: 1.058823529411765rem; background: url(../../images/coin_coin_icon.png) no-repeat; background-size:0.7647058823529412rem; padding-left: 1rem; background-position:  0 0.3rem; margin-left: 1rem; margin-top: 1rem; color:#FF9933  }

    @keyframes go_down {
        0% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(0, 100%, 0);
            -webkit-transform: translate3d(0, 100%, 0);
        }
    }

    @keyframes go_top {
        0% {
            transform: translate3d(0, 100%, 0);
            -webkit-transform: translate3d(0, 100%, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
            -webkit-transform: translate3d(0, 0, 0);

        }
    }

    .get_coin{ position: fixed;    z-index: 1001; top:50%; left:50%; width: 80%; height:26rem; margin-left: -40%; margin-top: -12rem; background: #fff; border-radius: 0.8rem; text-align: center; line-height: 1}
    .get_coin .img{ width:9.411764705882353rem; margin: 0 auto ; height:9.411764705882353rem; text-align: center; margin-top: 1.647058823529412rem;}
    .get_coin .img img{ max-width: 100%; max-height: 100%; }
    .get_coin .h1{ margin-top: 1rem; margin-bottom: 1rem; font-size: 1rem; color:#000; font-weight: bold}
    .get_coin .con{ font-size: 0.7647058823529412rem; color:#666; line-height: 1.5rem; margin: 0 1.5rem; text-align: left;}
    .get_coin .con span{ color:#333; font-weight: bold}
    .get_coin .line{ height: 1px; width: 85%; margin: 0.8rem auto; background: #f1f1f1}
    .get_coin .info{ color:#666; font-size: 0.7647058823529412rem;}
    .get_coin .btn{background: #f97f06; border-radius: 0.3rem; line-height: 2rem; font-size: 0.8235rem; color:#fff; text-align: center; width: 80%; margin: 0 auto;position: absolute; bottom:1.3rem;left:50%; margin-left: -40%; }
    .get_coin .close{ background: url(../../images/coin_close.png) no-repeat; width: 0.8235294117647059rem; background-size:  0.8235294117647059rem;height: 0.8235294117647059rem; position: absolute; top:0.88235rem; right:0.88235rem;}
    .get_coin .coin_change_success{ background: url(../../images/coin_change_success.png) no-repeat center ; background-size: 8.382352941176471rem; }



    .product_box{  background: #fff }
    .product_top{ padding-bottom:3rem; overflow-y: auto }
    .product_top img{width:100%;display: block;margin-bottom: 1px;}
    .product_main{padding:1.0588235rem 0.88235rem 0.88235rem 0.88235rem;background: #fff;border-bottom: 0.588235rem solid #f4f4f8;}
    .product_main h3{font-size: 1rem;color:rgba(51,51,51,1);line-height: 1;margin-bottom: 0.6rem;}
    .product_main_del{color:rgba(226,139,39,1);font-size: 1.5294rem;height:2rem;line-height: 2rem;display:flex;position: relative;width: 100%; }
    .product_main_del span{font-size: 0.76471rem;display: block;margin-left: 0.8235rem;margin-right: 0.9411rem;}
    .product_price{color:rgba(176,174,174,1);font-size: 0.70588rem;text-decoration:line-through;}
    .product_main_del .product_freight{position: absolute;right:0;text-decoration:none;}
    .product_adress{border-bottom:1px    solid #f4f4f8;font-size: 0.76471rem;color:rgba(153,153,153,1);padding:1rem 0.88235rem;line-height: 1;background: #fff;position: relative}
    .product_adress .right_go{ position: absolute; right:0.88235rem; width: 16px; top:50%; margin-top: -8px;}
    .product_adress:active{ background: #f1f1f1}
    .product_adress i{font-style: normal;float: left}
    .product_adress span{color:rgba(51,51,51,1);}
    .product_detail_header{color:rgba(51,51,51,1);font-size: 0.8235rem;line-height: 2.94rem;background: #fff;padding:0 0.88235rem; }
    .adress_detail{float: left;margin-left: 0.588235rem;}
    .adress_detail div{padding-top: 0.588235rem;}
    .product_detail{ background: #fff;}
    video{max-width:100%;}
     .btn_bottom  .btn_change, .check_change .btn_change{ background: #FC9B2C ; border-radius: 0.3rem; margin:   0.88235rem;  height: 2.588235294117647rem;z-index: 111; color:#fff; line-height: 2.588235294117647rem; text-align: center }
    .btn_bottom  .btn_change:active, .check_change .btn_change:active{background: #d88325;}

    .btn_bottom {   ;position:fixed; bottom:0; width: 100%}
</style>