import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/view/Home'
import Login from '@/view/Login'
import Search from '@/view/Search'
import Register from '@/view/Register'

// 重写push|replace方法
//先把VueRouter的push和replace方法保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
    // 此函数上下文(this指向)为VueRouter的一个实例
    if (resolve && reject) {    //如果我们自己指定了成功/失败的回调，则自己传入
        originPush.call(this, location, resolve, reject)
        //若此时直接使用originPush()方法，则函数内的this指向window（内部代码将无法执行）。故应用call或apply方法修改this指向
    } else {    //如果我们没有指定成功/失败的回调，则自动帮我们生成，防止报错
        originPush.call(this, location, () => { }, () => { })

    }
}

// replace方法同理
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

export default new VueRouter({
  routes:[
    { path:'/home', component: Home, meta: { showFooter: true } },
    // 动态路由
    { path:'/search/:iptValue?', component: Search,meta: { showFooter: true }, name: 'search' },
    { path:'/login', component: Login, meta: { showFooter: false } },
    { path:'/register', component: Register,meta: { showFooter: false } },
    { path: '/', redirect: '/home'}
  ]
})