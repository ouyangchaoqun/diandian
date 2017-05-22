import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import mood from './component/mood.vue'
import calendar from './component/calendar.vue'
import friends from './component/friends.vue'
import me from './component/me.vue'
import myCenter from './component/myCenter.vue'
Vue.use(VueRouter)
var routers=[
    {path:'/mood',component:mood},
    {path:'/calendar',component:calendar},
    {path:'/friends',component:friends},
    {path:'/me',component:me},
    {path:'/myCenter',component:myCenter},
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