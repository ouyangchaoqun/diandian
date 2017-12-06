/**
 *  Created by bear 2017年12月1日 10:28:11
 */
const coinIndex= resolve => require(['../../component/coin/index.vue'], resolve)
module.exports = {
    path: '/coin/index',
    component: coinIndex,

}