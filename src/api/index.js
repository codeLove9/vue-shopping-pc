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

export const reqGoodsInfo = (skuid) => {
  return request({
    method: 'get',
    url: `/item/${skuid}`,
  })
}


