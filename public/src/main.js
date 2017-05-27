import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import validate from './component/validate.vue';
import calendar from './component/calendar.vue';
import friends from './component/friends.vue';
import me from './component/me.vue';
import myCenter from './component/myCenter.vue';
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
            {path:'/myCenter/myIndex',component:myIndex},
            {path:'/myCenter/friendIndex',component:friendIndex},
            {path:'/me/personal',component:personal},
            {path:'/me/personal/validate',component:validate},
            {path:'/me/moodCount',component:moodCount},
            {path:'/me/friendsCount',component:friendsCount},
            {path:'/me/remind',component:remind},
            {path:'/me/privacy',component:privacy},
            {path:'/me/problem',component:problem},
            {path:'/me/proposal',component:proposal}]
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
