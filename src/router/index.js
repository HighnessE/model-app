import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Card from '@/components/card/card'
import Message from '@/components/message/message'
import MessageList from '@/components/messageList/messageList'
import MessageDetail from '@/components/messageDetail/messageDetail'
import myCardList from '@/components/myCardList/myCardList'
import myCollect from '@/components/myCollect/myCollect'
import notifyCollect from '@/components/notifyCollect/notifyCollect'
import cardCollect from '@/components/cardCollect/cardCollect'
import Center from '@/components/center/center'
import Setup from '@/components/setup/setup'
import Contact from '@/components/contact/contact'
import notifyDetail from '@/components/notifyDetail/notifyDetail'
import releaseNotify from '@/components/releaseNotify/releaseNotify'
Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/Home'
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
}, {
    path: '/MsgList',
    name: 'MsgList',
    component: MessageList
}, {
    path: '/MsgDetail',
    name: 'MsgDetail',
    component: MessageDetail
}, {
    path: '/myCardList',
    name: 'myCardList',
    component: myCardList
}, {
    path: '/myCollect',
    component: myCollect,
    children: [{
        path: 'notifyCollect',
        name: 'notifyCollect',
        component: notifyCollect
    }, {
        path: 'cardCollect',
        name: 'cardCollect',
        component: cardCollect
    }, {
        path: '/',
        redirect: 'notifyCollect',
        component: notifyCollect
    }]
}, {
    path: '/Setup',
    name: 'Setup',
    component: Setup
}, {
    path: '/Contact',
    name: 'Contact',
    component: Contact
}, {
    path: '/releaseNotify',
    name: 'releaseNotify',
    component: releaseNotify
}, {
    path: '/notifyDetail',
    name: 'notifyDetail',
    component: notifyDetail
}]

export default new Router({
    routes
})