import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Cookie from 'js-cookie'
import myPort from './js/myPort.js'
import jquery from 'jquery'
import methods from './assets/store/methods'
import router from './router/index.js'


// import Common from './js/common.js'
// Vue.use(Common);

// console.log(VueJsonp.install)

// Vue.use(vueJsonp)
import { VueJsonp } from 'vue-jsonp'

Vue.use(VueJsonp) // $jsonp被挂载到vue原型上,可直接使用vm.$jsonp()



Vue.config.productionTip = false
Vue.prototype.myCookie = Cookie
Vue.prototype.myPort = myPort
Vue.prototype.$ = jquery
Vue.prototype.methods = methods


router.beforeEach((to, from, next) => {
    console.log(to)
    next()
})




new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app')