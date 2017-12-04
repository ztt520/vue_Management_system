// 引入资源
import Vue from 'vue';

// 注册全局组件 S
import MyLi from './components/Commons/MyLi.vue';
import MyUl from './components/Commons/MyUl.vue';

Vue.component(MyUl.name,MyUl);
Vue.component(MyLi.name,MyLi);
// 注册全局组件 E

// 路由相关组件 S
import App from './components/App.vue';
import Home from './components/Home/Home.vue';
import Member from './components/Member/Member.vue';
import Search from './components/Search/Search.vue';
import Shopcart from './components/Shopcart/Shopcart.vue';

// 路由相关组件 E

// VueRouter S
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter();
router.addRoutes([
    // 重定向到首页
    { path: '/',redirect: {
        name: 'home'
    }},
    // 首页
    { name:'home', path:'/home',component: Home},
    // 会员页
    { name:'member', path:'/member',component: Member},
    // 购物车
    { name:'shopcart', path:'/shopcart',component: Shopcart},
    // 查找页
    { name:'search', path:'/search',component: Search}
]);
// VueRouter E

// MintUi S
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);
// MintUi E

// 在之后引入自己编写的css
import './static/css/global.css';



// Axios S
import Axios from 'axios';
Vue.prototype.$axios = Axios;
// 设置默认URL请求基础路径
Axios.defaults.baseURL = 'http://vue.studyit.io/api/';
// Axios E

new Vue ({
    el:'#app',
    render:c=>c(App),
    router
});