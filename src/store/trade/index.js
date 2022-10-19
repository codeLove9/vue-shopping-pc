import { reqAddressInfo, reqOderInfo } from '@/api'

const state = {
  addressInfo: [],
  orderInfo: {}
}
const mutations = {
  GetAddressInfo(state, addressInfo) {
    state.addressInfo = addressInfo
  },
  GetOderInfo(state, orderInfo) {
    state.orderInfo = orderInfo
  }
}
const actions = {
  async getAddressInfo({ commit }) {
    const { data: res } = await reqAddressInfo()
    if(res.code == 200) {
      commit('GetAddressInfo', res.data)
    }
  },
  async getOderInfo({commit}) {
    const { data: res } = await reqOderInfo()
    if(res.code == 200) {
      commit('GetOderInfo', res.data)
    }
  }
}
const getters = {}

export default {state,mutations,actions,getters
}