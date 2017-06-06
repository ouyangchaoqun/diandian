import App from './App.vue';
import PageTransition from "./component/PageTransition.vue"
Vue.use(VueRouter);
Vue.use(VueResource);

let routers =
    [
        {
            path: '/',
            name: 'PageTransition',
            component: PageTransition, // 引入页面切换组件
            children: [
                require('./routes/writeMood'),
                require('./routes/index'),
                require('./routes/calendar'),
                require('./routes/me'),
                require('./routes/notice'),
                require('./routes/noticeDetail'),
                require('./routes/careMe'),
                require('./routes/careDetail'),
                require('./routes/myIndex'),
                require('./routes/edit'),
                require('./routes/personal'),
                require('./routes/validate'),
                require('./routes/moodCount'),
                require('./routes/friendList'),
                require('./routes/friendsMoods'),
                require('./routes/friendCenter'),
                require('./routes/friendSet'),
                require('./routes/setName'),
                require('./routes/remind'),
                require('./routes/privacy'),
                require('./routes/problem'),
                require('./routes/proposal'),
                //require('./routes/positionList'),
                require('./routes/befriend')

            ]
        }
    ];

let router = new VueRouter({
    routes: routers
});

Vue.http.options.emulateJSON = true;

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

 VueRouter.prototype.go = function () {
     console.log("bac")
    this.isBack = true
    window.history.go(-1)
}