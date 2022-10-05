import { reqGetSearchInfo } from '@/api'
const state = {
  searchList: {}
}

const mutations = {
  SearchInfo(state, searchList) {
    state.searchList = searchList
  }
}

const actions = {
  async GetSearchInfo({ commit }, params = {}) {
    const { data: res } = await reqGetSearchInfo(params)
    // console.log(res.data);
    if(res.code == 200) {
      commit('SearchInfo', res.data)
    }
  }
}

const getters = {
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  goodsList(state) {
    // console.log(state.searchList.goodsList);
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  }
}

export default {state, mutations, actions, getters}