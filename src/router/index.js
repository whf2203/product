import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';


// 加载路由页面
const Index = () =>
    import ('@/views/Index');
Vue.use(VueRouter);

export default new VueRouter({
    routes: [{
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '*',
            redirect: '/index'
        }
    ]
})