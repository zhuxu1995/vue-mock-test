import Mock from 'better-mock'
import '@/mock/user/login'
// import '@/mock/user/routes'
// import '@/mock/user/auth'
// import '@/mock/user/user'
// import '@/mock/user/xiaoxitongzhi'
// import '@/mock/user/store'
// 设置全局延时
Mock.setup({
  timeout: '300-600'
})
