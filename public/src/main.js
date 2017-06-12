import App from './App.vue';
import PageTransition from "./component/PageTransition.vue"
import VueViewload from 'vue-viewload'
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueViewload, {
    defaultPic: 'http://img.zcool.cn/community/0161f656b0663e6ac7256cb052d31a.gif',
    errorPic: './images/nopic.jpg',
    threshold: -200,
    effectFadeIn: true,
    callback: function(ele, src) {
        ele.style.border = '1px solid red';
        console.log(ele.nodeName + '...' + src);
    }
});
let routers =
    [
        {
            path: '/',
            name: 'PageTransition',
            component: PageTransition, // 引入页面切换组件
            children: [
                require('./routes/addMood'),
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