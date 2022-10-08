import Home from '@/view/Home'
import Login from '@/view/Login'
import Search from '@/view/Search'
import Register from '@/view/Register'
import Detail from '@/view/Detail'
export default [
  { path:'/detail/:skuid', component: Detail, meta: { showFooter: true } },
  { path:'/home', component: Home, meta: { showFooter: true } },
  // 动态路由
  { path:'/search/:keyword?', component: Search,meta: { showFooter: true }, name: 'search' },
  { path:'/login', component: Login, meta: { showFooter: false } },
  { path:'/register', component: Register,meta: { showFooter: false } },
  { path: '/', redirect: '/home'}
]