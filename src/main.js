// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import FastClick from 'fastclick'
import App from './App'
import router from './router'
import { remInit } from './base/remInit.js'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import { WechatPlugin } from 'vux'
import VueScroller from 'vue-scroller'
import store from './store'
import './assets/animate.css'
Vue.use(VueAwesomeSwiper)
Vue.use(WechatPlugin)
Vue.use(VueScroller)
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
router.beforeEach((to,from,next) => {
    document.title = to.meta.title || '美约通告'
    next()
})