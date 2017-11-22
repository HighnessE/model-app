// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import { remInit } from './base/remInit.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { WechatPlugin,ConfirmPlugin,ToastPlugin } from 'vux'
import infiniteScroll from 'vue-infinite-scroll'
import VueLazyLoad from 'vue-lazyload'
import './assets/animate.css'
import 'swiper/dist/css/swiper.css'
import 'vue-croppa/dist/vue-croppa.css'
import Croppa from 'vue-croppa'
Vue.use(ConfirmPlugin)
Vue.use(Croppa)
Vue.use(VueAwesomeSwiper)
Vue.use(WechatPlugin)
Vue.use(infiniteScroll)
Vue.use(VueLazyLoad,{
    preLoad:1.3,
    error:require('./base/img/error.jpg'),
    loading:require('./base/img/loading.gif'),
    attempt:1
})
Vue.use(ToastPlugin)
// FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')

//每次页面加载执行（授权）
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || '美约通告'
    next()
})