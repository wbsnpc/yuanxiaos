// npm i vue-router@3.2.0
//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';


const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

    return originalPush.call(this, location).catch(err => err)

}
Vue.use(VueRouter)


//第三方库需要use一下才能用

//定义routes路由的集合，数组类型
//所有页面的跟路由都是Home
//
const routes = [
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {
        path: '/Home',
        component: () =>
            import ('../views/Home.vue'),
        children: [{
                path: 'searchTxt',
                component: () =>
                    import ('../views/searchTxt.vue'),
                meta: {
                    keepAlive: true, //此组件需要被缓存
                    isBack: false, //用于判断上一个页面是哪个
                }
            },
            {
                path: 'detailTxt',
                component: () =>
                    import ('../views/detailTxt.vue'),
                meta: {
                    keepAlive: true, //此组件需要被缓存
                    isBack: false, //用于判断上一个页面是哪个
                }
            },

            {
                path: 'txtRead',
                component: () =>
                    import ('../views/txtRead.vue'),
                meta: {
                    keepAlive: false,
                    isBack: false, //用于判断上一个页面是哪个
                }
            },
            {
                path: 'bookHome',
                component: () =>
                    import ('../views/bookHome.vue'),
                meta: {
                    keepAlive: true, //此组件不需要被缓存
                    isBack: false, //用于判断上一个页面是哪个
                }
            },
            {
                path: 'localBookHome',
                component: () =>
                    import ('../views/localBookHome.vue'),
                meta: {
                    keepAlive: true, //此组件不需要被缓存
                    isBack: false, //用于判断上一个页面是哪个
                }
            },
            { path: '/', redirect: "searchTxt" },
        ]
    },
    { path: '/', redirect: "Home" },
    {
        path: '*',
        component: () =>
            import ('../views/error.vue')
    }
];


// routerPlant(item, routerData.navListObject)


console.log(routes, '路由')

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    routes,
    // mode: 'history',
    // scrollBehavior(to, from, savedPosition) {

    //     console.log(to, 'to')
    //     console.log(from, "from")
    //     console.log(savedPosition, 'savedPosition')
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return {
    //             x: 0,
    //             y: 0
    //         }
    //     }
    // }

});


//抛出这个这个实例对象方便外部读取以及访问
export default router