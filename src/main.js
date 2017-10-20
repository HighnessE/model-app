// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import { remInit } from './base/remInit.js'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)

Vue.config.productionTip = false

Vue.prototype.$http = axios
    /* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box')