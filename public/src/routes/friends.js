/**
 * Created by pc on 2017/6/5.
 */
const friends = resolve => require(['../component/friends.vue'], resolve)
module.exports = {
    path: '/friends',
    component: friends,

}