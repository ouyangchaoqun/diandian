/**
 * Created by bear 2017年12月1日 10:28:11
 */
const coinProduct= resolve => require(['../../component/coin/product.vue'], resolve)
module.exports = {
    path: '/coin/product',
    component: coinProduct,

}