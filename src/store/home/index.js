import { reqCategoryList } from "@/api"

const state = {
  categoryList: []
}

const mutations = {
  CategoryList(state, categoryList) {
    state.categoryList = categoryList
  }
}

const actions = {
  async getCategoryList({ commit }) {
    const { data :res} = await reqCategoryList()
    // console.log(res.data.slice(0,-1));
    if(res.code == 200) {
      commit('CategoryList', res.data.slice(0,-1))
    }
  }
}

const getters = {

}

export default {
  state, mutations, actions, getters
}