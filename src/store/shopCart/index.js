import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from '@/api'
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
    if (res.code == 200) {
      commit('GetCartList', res.data)
    }
  },
  async deleteCartById({ commit }, skuId) {
    const { data: res } = await reqDeleteCartById(skuId)
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    const { data: res } = await reqUpdateCheckedById({ skuId, isChecked })
    if (res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    // console.log(getters);
    let promiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1? dispatch('deleteCartById', item.skuId) : ''
      // console.log(promise);
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  },
  updateAllCartChecked({dispatch, getters}, isChecked) {
    let promiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = dispatch('updateCheckedById', { skuId: item.skuId, isChecked })
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)
  }
}
const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
}

export default { state, mutations, actions, getters }
