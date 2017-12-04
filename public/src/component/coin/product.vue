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
               <div class="btn_change cant" v-if="user.coinAmount<goods.coinNum">积分不足</div>
               <div class="btn_change" v-else="">立即兑换</div>
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
                user:{coinAmount:0}
            }
        },
        mounted:function () {
            this.getDetail();
            this.getAddress();
            $(".product_top").height( $(document).height()-60);
            this.getUserInfo();
        },
        methods: {
            change:function () {


                let _this=this;
                if( !_this.address){
                    xqzs.weui.tip("请先添加地址！")
                    return;
                }
                if(_this.user.coinAmount<_this.goods.coinNum){
                    xqzs.weui.tip("积分不足！")
                    return;
                }
                _this.$http.post(web.API_PATH + 'coin/buy/goods/'+_this.goods.id+"/_userId_/"+ _this.address.addressId +"/1",{})
                    .then(function (res) {
                        console.log(res)
                        if(res.body.status==1&&res.body.data){
                            xqzs.weui.toast("success","兑换成功",function () {
                                _this.$router.go(-1);
                            })
                        }


                    });
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
    .btn_change{ background: #FC9B2C ; border-radius: 0.3rem; margin:   0.88235rem;  height: 2.588235294117647rem;z-index: 111; color:#fff; line-height: 2.588235294117647rem; text-align: center }
    .btn_change.cant ,.btn_change.cant:active{ background: #ccc ; color:#999;}
    .btn_change:active{background: #d88325;}

    .btn_bottom {   ;position:fixed; bottom:0; width: 100%}
</style>