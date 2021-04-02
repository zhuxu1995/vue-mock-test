import axios from 'axios'
const qs = require("qs")
function request(url, method, params, config) {
    switch (method) {
        case "post":
            params = qs.stringify(params)
            return axios.post(url, params, config).then(function(res) {
                if (res.status === 401) {console.error("没有权限")}
                return res.data
            })
        case "get":
            return axios.get(url, params, config);
        default:
            return axios.get(url, params, config);
    }
} 
function loadInterceptors(interceptors, options) {
    const {request, response} = interceptors
    // 加载请求拦截器
    request.forEach(item => {
      let {onFulfilled, onRejected} = item
      if (!onFulfilled || typeof onFulfilled !== 'function') {
        onFulfilled = config => config
      }
      if (!onRejected || typeof onRejected !== 'function') {
        onRejected = error => Promise.reject(error)
      }
      axios.interceptors.request.use(
        config => onFulfilled(config, options),
        error => onRejected(error, options)
      )
    })
    // 加载响应拦截器
    response.forEach(item => {
      let {onFulfilled, onRejected} = item
      if (!onFulfilled || typeof onFulfilled !== 'function') {
        onFulfilled = response => response
      }
      if (!onRejected || typeof onRejected !== 'function') {
        onRejected = error => Promise.reject(error)
      }
      axios.interceptors.response.use(
        response => onFulfilled(response, options),
        error => {
          console.error(error)
          if (error.response && error.response.status === 401) {
            return new Promise(function(resolve, reject) {
              let data = {
                  code: 401,
                  message: '登录超时'
              }
              return reject(data);
            })
          } else if (error.response && error.response.status === 404) {
            return new Promise(function(resolve, reject) {
              let data = {
                  code: 404,
                  message: '不存在'
              }
              return reject(data);
            })
          } else {
            onRejected(error, options)
          }
        }
      )
    })
}
  
export {
    request,
    loadInterceptors
}