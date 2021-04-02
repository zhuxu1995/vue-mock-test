import {request} from '@/services/request'
const API1 = process.env.VUE_APP_API1
const API2 = process.env.VUE_APP_API2

async function login(data){
    return request(`${API1}/public/login`,"post",data)
}
export default{
    login
}