import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import store from '@/store'

Vue.use(VueRouter)

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

let router =  new VueRouter({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { y: 0 }
  }
})

router.beforeEach(async (to, from, next) => {
    // console.log(store);
    let token = store.state.User.token
    let name =  store.state.User.userInfo.name
    if(token) {
        if(to.path == '/login' || to.path == '/register') {
            next('/home')
        } else {
            // 如果去得不是登录页
            // 如果存在用户名
            if(name) {
                next()
            } else {
                // 不存在用户名那就派发用户名
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // 派发了用户名还是报错，原因是token失效了，清除登录信息并重新登录
                    await store.dispatch('userLogOut')
                    next('login')
                }
            }
        }
    } else {
        // 未登录不能去交易页、支付页、个人中心页
        // 可以去home页、搜索页
        let cantPath = ['/trade', '/pay', '/center']
        cantPath.forEach(item => {
            if(to.path.indexOf(item) != -1) {
                next('/login?redirect='+ to.path)
            } else {
                next()
            }
        })
    }
})

export default router