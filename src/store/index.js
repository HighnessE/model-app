import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    editCollectNotify: false,
    editCollectCard: false,
    modelCardData: {
        modelName: '',
        modelWeight: '',
        modelHeight: '',
        modelShoes: '',
        modelBust: '',
        modelWaist: '',
        modelHips: ''
    }
}

const mutations = {
    //收藏页面编辑按钮切换
    toggleCollectNotify(state) {
        state.editCollectNotify = !state.editCollectNotify
    },
    toggleCollectCard(state) {
        state.editCollectCard = !state.editCollectCard
    },
    UPDATE_MODEL_CARD_DATA(state, dataObj) {
        Object.assign(state.modelCardData, dataObj)
    }
}

const getters = {
    collectNotifyGetter: state => {
        return state.editCollectNotify
    },
    collectCardGetter: state => {
        return state.editCollectCard
    },
    modelCardDataGetter: state => {
        return state.modelCardData
    }
}

const actions = {
    collectNotifyAction(context) {
        context.commit('toggleCollectNotify')
    },
    collectCardAction(context) {
        context.commit('toggleCollectCard')
    },
    updateModelCardDataAction(context) {
        context.commit('UPDATE_MODEL_CARD_DATA')
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})