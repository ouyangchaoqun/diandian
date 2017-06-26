/**
 * Created by pc on 2017/6/5.
 */
const subscribeList = resolve => require(['../component/subscribeList.vue'], resolve)
module.exports = {
    path: '/me/subscribe/subscribeList/:id',
    component: subscribeList,

}