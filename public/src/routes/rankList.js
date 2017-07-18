/**
 * Created by lanjiangweb on 2017/7/14.
 */
const rankList = resolve => require(['../component/rankList.vue'], resolve)
module.exports = {
    path: '/rankList/:Type/:Value',
    component: rankList,

}
///:Type/:Value'