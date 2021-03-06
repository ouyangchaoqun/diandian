import App from './App.vue';
import appTransition from "./component/appTransition.vue"
Vue.use(VueRouter);
Vue.use(VueResource);
let routers =
    [
        {
            path: '/',
            name: 'appTransition',
            component: appTransition, // 引入页面切换组件
            children: [
                require('./routes/addMood'),
                require('./routes/index'),
                require('./routes/calendar'),
                require('./routes/newCalendar'),
                require('./routes/me'),
                require('./routes/notice'),
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
                require('./routes/monthStatistics'),
                require('./routes/collect'),
                require('./routes/rankList'),
                require('./routes/sleepRank'),
                require('./routes/record'),
                require('./routes/luck'),
                require('./routes/constellationLuck'),
                require('./routes/getUpStatistics'),
                require('./routes/stepStatistics'),
                require('./routes/music'),
                require('./routes/birthday'),
                require('./routes/moodCountPie'),
                require('./routes/moodCountPage'),
                require('./routes/fabulous'),
                require('./routes/psychtest'),
                require('./routes/psychtestDetail'),
                require('./routes/testQuestions'),
                require('./routes/testList'),
                require('./routes/testResult'),
                require('./routes/testLeavMessage'),
                require('./routes/more'),
                require('./routes/habit'),
                require('./routes/habitAdd'),
                require('./routes/habitStatistics'),
                require('./routes/habitCard'),
                require('./routes/habitDetail'),
                require('./routes/sign'),
                require('./routes/signRoom'),
                require('./routes/coin/index'),
                require('./routes/coin/list'),
                require('./routes/coin/address'),
                require('./routes/coin/product'),
                require('./routes/myAmount'),
                require('./routes/friendsBrithday'),
                require('./routes/moneyOut'),
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
        console.log(el);

            document.title = el.innerText;

        el.remove()
    },
    update: function (el, binding) {
        setTimeout(function () {
            document.title = el.innerText;
        },10)

        el.remove()
    }
})


