import { reqCategoryList, reqBannerList, reqFloorList } from "@/api"

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}

const mutations = {
  CategoryList(state, categoryList) {
    state.categoryList = categoryList
  },
  BannerList(state, bannerList) {
    state.bannerList = bannerList
  },
  FloorList(state, floorList) {
    state.floorList = floorList
  }
}

const actions = {
  async getCategoryList({ commit }) {
    const { data :res} = await reqCategoryList()
    // console.log(res.data.slice(0,-1));
    if(res.code == 200) {
      commit('CategoryList', res.data.slice(0,-1))
    }
  },
  async getBannerList({ commit }) {
     const { data :res} = await reqBannerList()
    //  console.log(res);
    if(res.code == 200) {
      commit('BannerList', res.data)
    }
  },
  async getFloorList({ commit }) {
    const { data:res } = await reqFloorList()
    if(res.code == 200) {
      commit('FloorList', res.data)
    }
  }
}

const getters = {

}

export default {
  state, mutations, actions, getters
}