import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    editCollectNotify:false,
    editCollectCard:false
}

const mutations = {
    //收藏页面编辑按钮切换
    toggleCollectNotify(state) {
        state.editCollectNotify = !state.editCollectNotify 
    },
    toggleCollectCard(state) {
        state.editCollectCard = !state.editCollectCard 
    },
}

const getters = {
    collectNotifyGetter:state => {
        return state.editCollectNotify
    },
    collectCardGetter:state => {
        return state.editCollectCard
    },
}

const actions = {
    collectNotifyAction(context) {
        context.commit('toggleCollectNotify')
    },
    collectCardAction(context) {
        context.commit('toggleCollectCard')
    },
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})