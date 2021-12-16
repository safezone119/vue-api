import Vue from 'vue';
import VueRouter from 'vue-router';
// import NewsView from '../views/NewsView.vue';
// import JobsView from '../views/JobsView.vue';
// import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/askDetail.vue';
import createListView from '../views/CreateListView';
Vue.use(VueRouter);

export const router = new VueRouter({
    //해시 값 삭제
    mode: 'history',

    routes:[
        {
            path:'/',
            redirect: '/news',
        },
        {
            path:'/news',
            component: createListView('NewsView'),
            name: "news"
        },
        {
            path:'/jobs',
            component: createListView('JobsView'),
            name: "jobs",
        },
        {
            path:'/ask',
            component: createListView('AskView'),
            name: "ask",
        },
        {
            // USER VIEW // 유저 상세 페이지로 id 값을 파라미터로 넘김
            path:'/user/:id',
            component: UserView,
        },
        {
            path:'/item/:id',
            component: ItemView,
        },
    ]

})