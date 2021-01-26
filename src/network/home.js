import {request} from './request'
// 封装url，进行统一管理
export function getHomeMultiData(){
    return request({
        url:'/home/multidata'
    })
}