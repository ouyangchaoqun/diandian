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
               <div class="adress_detail" v-if="true">
                   <span>您还没有填写收货信息，马上去填写。</span>
               </div>
               <div class="adress_detail" v-if=" false">
                   <span>陈小刚</span><span>15717725580</span>
                   <div>浙江省 杭州市 滨江区 前陌路聚光中心</div>
               </div>
                <div style="clear: both"></div>
           </div>
           <div class="product_detail">
               <div class="product_detail_header">商品介绍</div>
               <div v-html=" goods.description">
                   <!--<img src="../../images/product_detail.jpg" alt="">-->

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
            }
        },
        mounted:function () {
            this.getDetail();
        },
        methods: {
            goSetAdress:function () {
                this.$router.push('address')
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
    .product_top img{width:100%;display: block;margin-bottom: 1px;}
    .product_main{padding:1.0588235rem 0.88235rem 0.88235rem 0.88235rem;background: #fff;margin-bottom: 0.588235rem;}
    .product_main h3{font-size: 1rem;color:rgba(51,51,51,1);line-height: 1;margin-bottom: 0.6rem;}
    .product_main_del{color:rgba(226,139,39,1);font-size: 1.5294rem;height:2rem;line-height: 2rem;display:flex;position: relative;width: 100%; }
    .product_main_del span{font-size: 0.76471rem;display: block;margin-left: 0.8235rem;margin-right: 0.9411rem;}
    .product_price{color:rgba(176,174,174,1);font-size: 0.70588rem;text-decoration:line-through;}
    .product_main_del .product_freight{position: absolute;right:0;text-decoration:none;}
    .product_adress{margin-bottom:1px;font-size: 0.76471rem;color:rgba(153,153,153,1);padding:1rem 0.88235rem;line-height: 1;background: #fff;position: relative}
    .product_adress i{font-style: normal;float: left}
    .product_adress span{color:rgba(51,51,51,1);}
    .product_detail_header{color:rgba(51,51,51,1);font-size: 0.8235rem;line-height: 2.94rem;background: #fff;padding:0 0.88235rem;}
    .adress_detail{float: left;margin-left: 0.588235rem;}
    .adress_detail div{padding-top: 0.588235rem;}
    video{max-width:100%;}
</style>