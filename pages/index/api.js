
import request from '../../utils/request.js'

export function fetchDataList() {
    console.log('------fetchDataList-----')
    return request(`/goods/productInfo`)
}
