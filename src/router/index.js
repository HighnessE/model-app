import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Card from '@/components/Card/Card'
import Message from '@/components/Message/Message'
import Center from '@/components/Center/Center'
Vue.use(Router)

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/Home',
    name: 'Home',
    component: Home
}, {
    path: '/Card',
    name: 'Card',
    component: Card
}, {
    path: '/Message',
    name: 'Message',
    component: Message
}, {
    path: '/Center',
    name: 'Center',
    component: Center
}]

export default new Router({
    routes
})