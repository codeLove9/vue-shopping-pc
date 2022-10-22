export default [
  {
    path: '/center',
    component: () => import('@/view/Center'),
    meta: { showFooter: true },
    children: [
      { path: 'myorder', component: () => import('@/view/Center/myOrder') },
      { path: 'grouporder', component: () => import('@/view/Center/groupOrder') },
      { path: '', redirect: 'myorder' }
    ]
  },
  { path: '/paysuccess', component: () => import('@/view/PaySuccess'), meta: { showFooter: true } },
  {
    path: '/pay',
    component: () => import('@/view/Pay'),
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      if (from.path == '/trade') {
        next()
      } else {
        next(false)
      }
    }
  },
  {
    path: '/trade',
    component: () => import('@/view/Trade'),
    meta: { showFooter: true },
    beforeEnter: (to, from, next) => {
      console.log(from.path)
      if (from.path == '/shopcart') {
        next()
      } else {
        next(false)
      }
    }
  },
  { path: '/shopcart', component: () => import('@/view/ShopCart'), meta: { showFooter: true } },
  { path: '/addcartsuccess', component: () => import('@/view/AddCartSuccess'), meta: { showFooter: true }, name: 'addcartsuccess' },
  { path: '/detail/:skuId', component: () => import('@/view/Detail'), meta: { showFooter: true } },
  { path: '/home', component: () => import('@/view/Home'), meta: { showFooter: true } },
  // 动态路由
  { path: '/search/:keyword?', component: () => import("@/view/Search"), meta: { showFooter: true }, name: 'search' },
  { path: '/login', component: () => import('@/view/Login'), meta: { showFooter: false } },
  { path: '/register', component: () => import('@/view/Register'), meta: { showFooter: false } },
  { path: '/', redirect: '/home' }
]
