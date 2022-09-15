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
