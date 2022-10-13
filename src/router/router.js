import Home from '@/view/Home'
import Login from '@/view/Login'
import Search from '@/view/Search'
import Register from '@/view/Register'
import Detail from '@/view/Detail'
import AddCartSuccess from '@/view/AddCartSuccess'
import ShopCart from '@/view/ShopCart'
export default [
  { path:'/shopcart', component: ShopCart, meta: { showFooter: true } },
  { path:'/addcartsuccess', component: AddCartSuccess, meta: { showFooter: true }, name: 'addcartsuccess' },
  { path:'/detail/:skuId', component: Detail, meta: { showFooter: true } },
  { path:'/home', component: Home, meta: { showFooter: true } },
  // 动态路由
  { path:'/search/:keyword?', component: Search,meta: { showFooter: true }, name: 'search' },
  { path:'/login', component: Login, meta: { showFooter: false } },
  { path:'/register', component: Register,meta: { showFooter: false } },
  { path: '/', redirect: '/home'}
]