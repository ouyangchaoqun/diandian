import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import mood from './component/mood.vue';
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
Vue.use(VueRouter)
var routers=[
    {path:'/mood',component:mood},
    {path:'/calendar',component:calendar},
    {path:'/friends',component:friends},
    {path:'/me',component:me},
    {path:'/myCenter',component:myCenter},
    {path:'/me/personal',component:personal},
    {path:'/me/moodCount',component:moodCount},
    {path:'/me/friendsCount',component:friendsCount},
    {path:'/me/remind',component:remind},
    {path:'/me/privacy',component:privacy},
    {path:'/me/problem',component:problem},
    {path:'/me/proposal',component:proposal},
    {path:'/',redirect:'/myCenter'}
]
 
var router = new VueRouter({
    routes:routers
})
 
new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})