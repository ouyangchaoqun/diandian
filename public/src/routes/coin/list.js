/**
 *  Created by bear 2017年12月1日 10:28:11
 */
const coinList= resolve => require(['../../component/coin/list.vue'], resolve)
module.exports = {
    path: '/coin/list',
    component: coinList,

}