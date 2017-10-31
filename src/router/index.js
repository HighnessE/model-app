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
import releaseCard from '@/components/releaseCard/releaseCard'
import cardDetail from '@/components/cardDetail/cardDetail'
Vue.use(Router)

const routes = [{
    path: '/',
    redirect: '/Home'
}, {
    path: '/Home',
    meta: {title:'最新通告'},
    component: Home
}, {
    path: '/Card',
    meta: {title:'模特名片'},
    component: Card
}, {
    path: '/Message',
    meta: {title:'我的消息'},
    component: Message,
    children:[{
        path:':id',
        component:MessageList
    }]
}, {
    path: '/Center',
    meta: {title:'个人中心'},
    component: Center
}, {
    path: '/MsgList',
    meta: {title:'我的消息'},
    component: MessageList
}, {
    path: '/MsgDetail',
    meta: {title:'我的消息'},
    component: MessageDetail
}, {
    path: '/myCardList',
    meta: {title:'我的名片'},
    component: myCardList
}, {
    path: '/myCollect',
    component: myCollect,
    children: [{
        path: 'notifyCollect',
        meta: {title:'通告收藏'},
        component: notifyCollect
    }, {
        path: 'cardCollect',
        meta: {title:'名片收藏'},
        component: cardCollect
    }, {
        path: '/',
        redirect: 'notifyCollect',
        component: notifyCollect
    }]
}, {
    path: '/Setup',
    meta: {title:'设置与隐私'},
    component: Setup
}, {
    path: '/Contact',
    meta: {title:'联系我们'},
    component: Contact
}, {
    path: '/releaseNotify',
    meta: {title:'发布通告'},
    component: releaseNotify
}, {
    path: '/notifyDetail/:vid',
    meta: {title:'通告详情'},
    component: notifyDetail
}, {
    path:'/cardDetail',
    meta:{title:'名片详情'},
    component:cardDetail
}, {
    path:'/releaseCard',
    meta:{title:'发布名片'},
    component:releaseCard
}]

export default new Router({
    routes
})