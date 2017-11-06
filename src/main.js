// 导入vue模块
import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入MintUI模块
import MintUI from 'mint-ui'
Vue.use(MintUI);//注册MintUI组件
import 'mint-ui/lib/style.min.css'

import './libs/mui-master/dist/css/mui.min.css'
import './libs/mui-master/examples/hello-mui/css/icons-extra.css'

// 导入自己的样式表
import mycss from './css/app.css'

// 导入自定义的app.vue组件
import App from './components/app.vue'
import HomeCom from './components/home/home.vue' // 导入首页组件
import MemberCom from './components/member/member.vue' // 导入会员组件
import ShopcarCom from './components/shopcar/shopcar.vue' // 导入购物车组件
import SearchCom from './components/search/search.vue' // 导入搜索组件
import NewsListCom from './components/news/newslist.vue' // 导入新闻列表组件
import NewsDetailCom from './components/news/newsDetail.vue' // 导入新闻详细组件
import PhotoListCom from './components/photo/photolist.vue' // 图片列表组件
import PhotoDetailCom from './components/photo/photoDetail.vue' // 图片详细信息页面组件
import GoodsListCom from './components/goods/goodslist.vue' // 商品列表组件
import GoodsDetailCom from './components/goods/goodsdetail.vue' // 商品详细信息组件
import GoodsInfoCom from './components/goods/goodsinfo.vue' // 商品介绍组件
import goodscomment from './components/goods/goodscomments.vue' // 商品评论组件

// 定义路由相关信息
Vue.use(VueRouter);
let router = new VueRouter({
    linkActiveClass: 'mui-active',
    routes: [
        { name: 'index', path: '/', redirect: '/home' },
        { name: 'home', path: '/home', component: HomeCom },
        { name: 'member', path: '/member', component: MemberCom },
        { name: 'shopcar', path: '/shopcar', component: ShopcarCom },
        { name: 'search', path: '/search', component: SearchCom },
        { name: 'newslist', path: '/news/newslist', component: NewsListCom },
        { name: 'newsdetail', path: '/news/newsdetail/:newsid', component: NewsDetailCom },
        { name: 'photolist', path: '/photo/photolist', component: PhotoListCom },
        { name: 'photodetail', path: '/photo/photodetail/:photoid', component: PhotoDetailCom },
        { name: 'goodslist', path: '/goods/goodslist', component: GoodsListCom },
        { name: 'goodsdetail', path: '/goods/goodsdetail/:goodsid', component: GoodsDetailCom },
        { name: 'goodsinfo', path: "/goods/goodsinfo/:goodsid", component: GoodsInfoCom },
        { name: 'goodscomment', path: '/goods/goodscomment/:goodsid', component: goodscomment }
    ]
});

// 导入vue-resource组件
let VueResource = require('vue-resource');
// 注册vue-resource组件
Vue.use(VueResource);
// Vue.http.options.emulateJSON = true;

// 导入moment处理日期
import moment from 'moment'
// 创建处理日期的过滤器
Vue.filter('fmtData', function (input, pattern) {
    return moment(input).format(pattern);
});

// Vue集成PhotoSwipe图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

new Vue({
    el: '#app',
    router,
    render: c => c(App),
    components: {
        MintUI
    }
});