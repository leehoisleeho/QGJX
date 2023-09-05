// src/router/index.js
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('../src/pages/index.vue'), // 用于展示主页的组件
    },
    {
        path: '/product',
        component: () => import('../src/pages/product/product.vue'), // 用于展示产品的组件
        redirect: '/productList', // 默认重定向到 /product/list
        children: [
            {
                path: '/productList', // 子路由路径可以包含动态参数
                component: () => import('../src/pages/product/productList.vue'), // 子路由组件
                meta: {
                    isChild: true
                }
            },
            {
                path: '/productDetails', // 子路由路径可以包含动态参数
                component: () => import('../src/pages/product/productDetails.vue'), // 子路由组件
                meta: {
                    isChild: true
                }
            },
        ]
    },
    {
        path: '/qualificationList',
        component: () => import('../src/pages/qualificationList.vue'), // 用于展示资质的组件
    },
    {
        path: '/videoList',
        component: () => import('../src/pages/videoList.vue'), // 用于展示视频的组件
    },
    {
        path: '/news',
        component: () => import('../src/pages/news/news.vue'), // 用于展示新闻的组件
        redirect: '/newsList', // 默认重定向到 /product/list
        children: [
            {
                path: '/newsList', // 子路由路径可以包含动态参数
                component: () => import('../src/pages/news/newsList.vue'), // 子路由组件
                meta: {
                    isChild: true
                }
            },
            {
                path: '/newsDetails', // 子路由路径可以包含动态参数
                component: () => import('../src/pages/news/newsDetails.vue'), // 子路由组件
                meta: {
                    isChild: true
                }
            },
        ]
    },
    {
        path: '/about',
        component: () => import('../src/pages/about.vue'), // 用于展示关于的组件
    },
];

// 头部导航的目录
const navList = [
    {
        name: '首页',
        key: 0,
        path: '/'
    },
    {
        name: '产品中心',
        key: 1,
        path: '/product'
    },
    {
        name: '公司资质',
        key: 2,
        path: '/qualificationList'
    },
    {
        name: '视频中心',
        key: 3,
        path: '/videoList'
    },
    {
        name: '新闻中心',
        key: 4,
        path: '/news'
    },
    {
        name: '关于我们',
        key: 5,
        path: '/about'
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
import {navStore} from "/store/index.js";


// 全局前置守卫
router.beforeEach((to, from, next) => {
    const store = navStore()
    const isChild = to.meta.isChild
    // 如果是子路由
    if (isChild) {
        // 子路由的父路由
        let path = null
        routes.forEach(item => {
            let x = item
            if (item.children) {
                item.children.forEach(item => {
                    if (to.path === item.path) {
                        path = x.path
                    }
                })
            }
        })
        const info = navList.filter(item => {
            return item.path === path
        })
        store.setN(info[0].key, info[0].path)
        next()
        return
    }
    // 父路由
    const info = navList.filter(item => {
        return item.path === to.path
    })
    store.setN(info[0].key, info[0].path)
    next()
})
// 全局后置守卫
router.afterEach((to, from) => {
    window.scrollTo(0, 0);
});
export default router;