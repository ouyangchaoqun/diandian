/**
 *  Created by bear 2017年12月1日 10:28:11
 */
const coinAddress= resolve => require(['../../component/coin/address.vue'], resolve)
module.exports = {
    path: '/coin/address',
    component: coinAddress,

}