import request from './request'

export const reqCategoryList = () => {
  return request({
    method: 'get',
    url: 'product/getBaseCategoryList'
  })
}
