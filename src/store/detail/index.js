import { reqGoodsInfo, reqAddOrUpdateShopCart } from '@/api'
import { getUUID } from '@/utils/uuid_token'
const state = {
  goodInfo: {},
  uuid_token: getUUID()
}

const mutations = {
  getGoodInfo(state, goodInfo) {
    state.goodInfo = goodInfo
  },
}

const actions = {
  async getGoodList({ commit }, skuId) {
    const { data: res } = await reqGoodsInfo(skuId)
    if(res.code == 200) {
      commit('getGoodInfo', res.data)
    }
  },
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    const { data: res } = await reqAddOrUpdateShopCart(skuId, skuNum)
    if(res.code == 200) {
      return 'ok'
    } else{
      return Promise.reject(new Error('faile'))
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