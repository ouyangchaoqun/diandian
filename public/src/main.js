import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import validate from './component/validate.vue';
import calendar from './component/calendar.vue';
import friends from './component/friends.vue';
import me from './component/me.vue';
import myCenter from './component/myCenter.vue';
import careMe from './component/careMe.vue';
import careDetail from './component/careDetail.vue';
import personal from "./component/personal.vue";
import moodCount from "./component/moodCount.vue";
import friendsCount from "./component/friendsCount.vue";
import remind from "./component/remind.vue";
import privacy from "./component/privacy.vue";
import problem from "./component/problem.vue";
import proposal from "./component/proposal.vue";
import writeMood from "./component/writeMood.vue"
import myIndex from "./component/myIndex.vue"
import friendIndex from "./component/friendIndex.vue"
import PageTransition from "./component/PageTransition.vue"
import friendSet from "./component/friendSet.vue"
import setName from "./component/setName.vue"
import Edit from "./component/Edit.vue"
import optionFrist from "./component/optionFrist.vue"
import optionSecond from "./component/optionSecond.vue"
import optionThird from "./component/optionThird.vue"
import friendCenter from "./component/friendCenter.vue"



    Vue.use(VueRouter)
    Vue.use(VueResource)



VueRouter.prototype.go = function () {
    this.isBack = true;
    console.log(this.isBack);
    window.history.go(-1)
};





var routers=

    [
    {
        path: '/',
        name: 'PageTransition',
        component: PageTransition, // 引入页面切换组件
        children: [{
            path: '',
            component: myCenter  // 父路由访问页面，例如，访问www.aaa.com/ 显示的是Index组件
        },{path:'/writeMood',component:writeMood},
            {path:'/calendar',component:calendar},
            {path:'/friends',component:friends},
            {path:'/me',component:me},
            {path:'/myCenter',component:myCenter},
            {path:'myCenter/careMe',component:careMe},
            {path:'/myCenter/careMe/careDetail',component:careDetail},
            {path:'/myCenter/myIndex',component:myIndex},
            {path:'/myCenter/myIndex/Edit',component:Edit,children:[
                {path:"/myCenter/myIndex/Edit/optionFrist",component:optionFrist},
                {path:"/myCenter/myIndex/Edit/optionSecond",component:optionSecond},
                {path:"/myCenter/myIndex/Edit/optionThird",component:optionThird}
            ]},
            {path:'/myCenter/friendIndex',component:friendIndex},
            {path:'/me/personal',component:personal},
            {path:'/me/personal/validate',component:validate},
            {path:'/me/moodCount',component:moodCount},
            {path:'/me/friendsCount',component:friendsCount},
            {path:'/me/friendsCount/friendCenter',component:friendCenter},
            {path:'/me/friendsCount/friendSet',component:friendSet},
            {path:'/me/friendsCount/friendSet/setName',component:setName},
            {path:'/me/remind',component:remind},
            {path:'/me/privacy',component:privacy},
            {path:'/me/problem',component:problem},
            {path:'/me/proposal',component:proposal}

            ]
    }
    ]

var router = new VueRouter({
    routes:routers
})


new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
});
