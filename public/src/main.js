import App from './App.vue';
Vue.use(VueRouter);
Vue.use(VueResource);
let routers =
    [
        {
            path: '/',
            name: 'App',
            component: App, // 引入页面切换组件
            children: [
                require('./routes/addMood'),
                require('./routes/index'),
                require('./routes/calendar'),
                require('./routes/me'),
                require('./routes/notice'),
                /*require('./routes/noticeDetail'),*/
                require('./routes/moodDetail'),
                require('./routes/careMe'),
               /* require('./routes/careDetail'),*/
                require('./routes/myIndex'),
                require('./routes/edit'),
                require('./routes/personal'),
                require('./routes/validate'),
                require('./routes/moodCount'),
                require('./routes/moodData'),
                require('./routes/friendList'),
                require('./routes/friendsMoods'),
                require('./routes/treeHole'),
                require('./routes/friendCenter'),
                require('./routes/friendSet'),
                require('./routes/setName'),
                require('./routes/remind'),
                require('./routes/subscribe'),
               // require('./routes/subscribeList'),
                require('./routes/subscribeDetail'),
                require('./routes/privacy'),
                require('./routes/problem'),
                require('./routes/proposal'),
                //require('./routes/positionList'),
                require('./routes/befriend'),
                require('./routes/aboutUs'),
               // require('./routes/interview'),
                require('./routes/monthStatistics'),
                require('./routes/collect'),
                require('./routes/record')
            ]
        }
    ];

let router = new VueRouter({
    routes: routers
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});

Vue.directive('title', {
    inserted: function (el, binding) {
        document.title = el.innerText;
        el.remove()
    }
})