import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Card from '@/components/card/card'
import Message from '@/components/message/message'
import MessageList from '@/components/messageList/messageList'
import MessageDetail from '@/components/messageDetail/messageDetail'
import MsgLeave from '@/components/messageLeave/messageLeave'
import myCardList from '@/components/myCardList/myCardList'
import myCollect from '@/components/myCollect/myCollect'
import Center from '@/components/center/center'
import Setup from '@/components/setup/setup'
import Contact from '@/components/contact/contact'
import notifyDetail from '@/components/notifyDetail/notifyDetail'
import myNotifyDetail from '@/components/myNotifyDetail/myNotifyDetail'
import releaseNotify from '@/components/releaseNotify/releaseNotify'
import releaseCard from '@/components/releaseCard/releaseCard'
import cardDetail from '@/components/cardDetail/cardDetail'
import myCardDetail from '@/components/myCardDetail/myCardDetail'
import stickNotify from '@/components/stickNotify/stickNotify'
import myRelease from '@/components/myRelease/myRelease'
Vue.use(Router)

const routes = [{
	path: '/',
	redirect: '/Home'
}, {
	path: '/Home',
	meta: { title: '最新通告' },
	component: Home
}, {
	path: '/Card',
	meta: { title: '模特名片' },
	component: Card
}, {
	path: '/Message',
	meta: { title: '我的消息' },
	component: Message,
	children: [{
		path: '/Message/Module/:Module',
		component: MessageList
	}]
}, {
	path: '/Center',
	meta: { title: '个人中心' },
	component: Center
}, {
	path: '/MsgDetail',
	meta: { title: '我的消息' },
	component: MessageDetail
}, {
	path: '/MsgLeave/userId/:cid',
	meta: { title: '我的消息' },
	component: MsgLeave
}, {
	path: '/myCardList',
	meta: { title: '我的名片' },
	component: myCardList
}, {
	path: '/myCollect',
	meta: { title: '我的收藏' },
	component: myCollect
}, {
	path: '/Setup',
	meta: { title: '设置与隐私' },
	component: Setup
}, {
	path: '/Contact',
	meta: { title: '联系我们' },
	component: Contact
}, {
	path: '/releaseNotify',
	meta: { title: '发布通告' },
	component: releaseNotify
}, {
	path: '/notifyDetail/:vid',
	meta: { title: '通告详情' },
	component: notifyDetail
}, {
	path: '/myNotifyDetail/:vid',
	meta: { title: '通告详情' },
	component: myNotifyDetail
}, {
	path: '/myRelease',
	meta: { title: '我的发布' },
	component: myRelease
}, {
	path: '/cardDetail/:id',
	meta: { title: '名片详情' },
	component: cardDetail
}, {
	path: '/myCardDetail/:id',
	meta: { title: '名片详情' },
	component: myCardDetail
}, {
	path: '/releaseCard',
	meta: { title: '发布名片' },
	component: releaseCard
}, {
	path: '/stickNotify',
	meta: { title: '置顶通告' },
	component: stickNotify
}, {
	path: '/CardTemplate',
	meta: { title: '选择模板' },
    component: resolve => require(['../components/CardTemplate/CardTemplate'], resolve)
}, {
	path: '/CardChooseImages/:template',
	meta: { title: '选择图片' },
    component: resolve => require(['../components/CardChooseImages/CardChooseImages'], resolve)
}, {
	path: '/platformRules',
	meta: { title: '平台规则' },
    component: resolve => require(['../components/platformRules/platformRules'], resolve)
}]

export default new Router({
	routes
})