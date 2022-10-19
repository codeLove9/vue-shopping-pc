import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqUserLogOut } from '@/api'
import { setToken, getToken, removeToken } from '@/utils/token'
const state = {
  code: '',
  token: getToken(),
  userInfo: ''
}
const mutations = {
  GetCode(state, code) {
    state.code = code
  },
  UserLogin(state, token) {
    state.token = token
  },
  UserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  Clear(state) {
    state.token = ''
    state.userInfo = {}
    removeToken()
  }
}
const actions = {
  async getCode({ commit }, phone) {
    const { data: res } = await reqGetCode(phone)
    // console.log(res);
    if(res.code == 200) {
      commit('GetCode', res.data)
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async userRegister({ commit }, data) {
    const { data: res } = await reqUserRegister(data)
    if(res.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async userLogin({commit}, phone) {
    const {data: res} = await reqUserLogin(phone)
    // console.log(res);
    if(res.code == 200) {
      commit('UserLogin', res.data.token)
      setToken(res.data.token)
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async getUserInfo({commit}) {
    const {data: res} = await reqUserInfo()
    // console.log(res);
    if(res.code == 200) {
      commit("UserInfo", res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  async userLogOut({ commit }) {
    const { data: res } = await reqUserLogOut()
    if(res.code == 200) {
      commit('Clear')
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }

}
const getters = {}

export default {state, mutations, actions, getters}