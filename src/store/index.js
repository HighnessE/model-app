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
    },
    modelCardList: []
}

const mutations = {
    //通告收藏页面编辑按钮切换
    toggleCollectNotify(state) {
        state.editCollectNotify = !state.editCollectNotify
    },
    //名片收藏页面编辑按钮切换
    toggleCollectCard(state) {
        state.editCollectCard = !state.editCollectCard
    },
    UPDATE_MODEL_CARD_DATA(state, dataObj) {
        Object.assign(state.modelCardData, dataObj)
    },
    // 插入或更新创建名片中的模卡列表
    UPDATE_MODEL_CARD_LIST(state, obj) {
        var templateExist = false;
        state.modelCardList.forEach((item, index) => {
            if (item.type == obj.type) {
                state.modelCardList[index].url = obj.url;
                templateExist = true;
                return false;
            }
        });
        if (!templateExist) {
            state.modelCardList.push(obj);
        }
    },
    // 删除创建名片中的模卡列表项
    DELETE_MODEL_CARD_LIST(state, type) {
        state.modelCardList.forEach((item, index)=>{
            if (item.type == type) {
                delete state.modelCardList[index];
                return false;
            }
        });
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
    },
    modelCardListGetter: state => {
        return state.modelCardList
    }
}

const actions = {
    //点击编辑按钮触发的事件，下同
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