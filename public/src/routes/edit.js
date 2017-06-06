/**
 * Created by pc on 2017/6/5.
 */
const edit = resolve => require(['../component/Edit.vue'], resolve);
const optionFrist = resolve => require(['../component/optionFrist.vue'], resolve);
const optionThird = resolve => require(['../component/optionThird.vue'], resolve);
const positionList = resolve => require(['../component/positionList.vue'], resolve)


module.exports = {
    path: '/myCenter/myIndex/Edit',
    component: edit,children:[
        {path:"/myCenter/myIndex/Edit/optionFrist",component:optionFrist},
        require('../routes/optionSecond'),
        {path:"/myCenter/myIndex/Edit/optionThird",component:optionThird},
        {path: '/positionList', component: positionList}
    ]

};