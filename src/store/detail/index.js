import { reqGoodsInfo } from '@/api'
const state = {
  goodInfo: {}
}

const mutations = {
  getGoodInfo(state, goodInfo) {
    state.goodInfo = goodInfo
  }
}

const actions = {
  async getGoodList({ commit }, skuid) {
    const { data: res } = await reqGoodsInfo(skuid)
    if(res.code == 200) {
      commit('getGoodInfo', res.data)
    }
  }
}

const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || {}
  }
}

export default {
  state, mutations, actions, getters
}