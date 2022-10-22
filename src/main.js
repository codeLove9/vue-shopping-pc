import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import store from '@/store'
import './mock/mockServer'
import 'swiper/css/bundle'
import 'swiper/bundle'
import * as API from '@/api'
import  { Button, MessageBox } from 'element-ui'
import VueLazyload from 'vue-lazyload'
import lazy from '@/assets/lazy.gif'
import '@/plugins/validate'

Vue.config.productionTip = false

Vue.component('TypeNav', TypeNav)
Vue.component('Carousel', Carousel)
Vue.component('Pagination', Pagination)
Vue.component(Button.name, Button);
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.use(VueLazyload, {
  loading: lazy
})

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
