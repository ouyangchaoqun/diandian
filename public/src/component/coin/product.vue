<template>
    <div class="product_box">
       <div class="product_top">
           <img src="../../images/product_top.jpg" alt="">
           <div class="product_main">
               <h3>愿所有相遇，/都恰逢其时</h3>
               <div class="product_main_del">2800
                   <span>点豆</span>
                    <div class="product_price">¥38.9</div>
                    <div class="product_price product_freight">运费：包邮</div>
               </div>
           </div>
           <div class="product_adress">
               配送至：<span>您还没有填写收货信息，马上去填写。</span>
           </div>
           <div class="product_detail">
               <div class="product_detail_header">商品介绍</div>
               <div>
                   <img src="../../images/product_detail.jpg" alt="">
               </div>
           </div>
       </div>
    </div>
</template>
<script>

    export default {
        data() {
            return {

            }
        },
        mounted:function () {

        },
        methods: {

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
    .product_adress{margin-bottom:1px;font-size: 0.76471rem;color:rgba(153,153,153,1);padding:1rem 0.88235rem;line-height: 1;background: #fff;}
    .product_adress span{color:rgba(51,51,51,1);margin-left: 0.588rem;}
    .product_detail_header{color:rgba(51,51,51,1);font-size: 0.8235rem;line-height: 2.94rem;background: #fff;padding:0 0.88235rem;}

</style>