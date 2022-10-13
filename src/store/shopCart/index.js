import { reqCartList, reqDeleteCartById } from '@/api'
const state = {
  cartList: []
}
const mutations = {
  GetCartList(state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
   async getCartList({ commit }) {
    const { data: res } = await reqCartList()
    if(res.code == 200) {
      commit('GetCartList', res.data)
    }
  },
  async deleteCartById({ commit }, skuId) {
    const { data: res } = await reqDeleteCartById(skuId)
    if(res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }

}

export default {state, mutations, actions, getters}