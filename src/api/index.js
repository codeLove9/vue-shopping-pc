import request from './request'
import mockRequest from './mockRequest'

export const reqCategoryList = () => {
  return request({
    method: 'get',
    url: '/product/getBaseCategoryList'
  })
}

export const reqBannerList = () => {
  return mockRequest({
    method: 'get',
    url: '/banner'
  })
}

export const reqFloorList = () => {
  return mockRequest({
    method: 'get',
    url: '/floor'
  })
}

// mock的list接口
// export const reqGetSearchInfo = (params) => {
//   return mockRequest({
//     method: 'post',
//     url: '/list',
//     data: params
//   })
// }

export const reqGetSearchInfo = (params) => {
  return request({
    method: 'post',
    url: '/list',
    data: params
  })
}

export const reqGoodsInfo = (skuId) => {
  return request({
    method: 'get',
    url: `/item/${skuId}`,
  })
}

export const reqAddOrUpdateShopCart = (skuId,skuNum) => {
  return request({
    method: 'post',
    url: `/cart/addToCart/${skuId}/${skuNum}`,
  })
}

export const reqCartList = () => {
  return request({
    method: 'get',
    url:`/cart/cartList`
  })
}

export const reqDeleteCartById = (skuId) => {
   return request({
    method: 'delete',
    url:`/cart/deleteCart/${skuId}`
  })
}

export const reqUpdateCheckedById = ({ skuId, isChecked }) => {
  return request({
    method: 'get',
    url: `/cart/checkCart/${skuId}/${isChecked}`
  })
}

export const reqGetCode = (phone) => {
  return request({
    method: 'get',
    url: `/user/passport/sendCode/${phone}`
  })
}

export const reqUserRegister = (data) => {
  return request({
    method: 'post',
    url: '/user/passport/register',
    data
  })
}

export const reqUserLogin = (data) => {
  return request({
    method: 'post',
    url: '/user/passport/login',
    data
  })
}

export const reqUserInfo = () => {
  return request({
    method: 'get',
    url: '/user/passport/auth/getUserInfo'
  })
}

export const reqUserLogOut = () => {
  return request({
    method: 'get',
    url: '/user/passport/logout'
  })
}

export const reqAddressInfo = () => {
  return request({
    method: 'get',
    url: '/user/userAddress/auth/findUserAddressList'
  })
}

export const reqOderInfo = () => {
  return request ({
    method: 'get',
    url: '/order/auth/trade'
  })
}

export const reqSubmitOrder = (tradeNo, data) => {
  return request({
    method: 'post',
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data
  })
}

export const reqPayInfo = (orderId) => {
  return request({
    method:'get',
    url: `/payment/weixin/createNative/${orderId}`
  })
}
