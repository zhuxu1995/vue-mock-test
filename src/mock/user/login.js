import Mock from 'better-mock'
const qs = require('qs')
const partner_names = {1: "大黄蜂", 475: "益民超市店", 190222271021: "Avision", 190327299360: "欧美阳光屋", 190823405180: "南丁跨境"}
const partner_ids = "191127484833,191225511169,200927998613,200902936768,200513751494,2010261059004,190823405180,191111467415,200224606551,2009281001507,2012041136432,190222271021,1,200310643617,191227512874,200415701020,200921979551,200426719838,2103181355191,475,200222601847,200604783892,190327299360"
// const user = Mock.mock({
//   name: '@ADMIN',
//   avatar: '@AVATAR',
//   address: '@CITY',
//   position: '@POSITION'
// })
Mock.mock(`${process.env.VUE_APP_API1}/public/login`, 'post',options => {
  let result = {}
  // console.error("请求",options)0.


  const {user_name, password,partner_id} = qs.parse(options.body)

  let success = false
  console.error("user_name, password,partner_id",user_name, password,partner_id)
  // console.error("password==",password === '123456')
  // console.error("username==",user_name === '朵朵')
  if (user_name === '朵朵' && password === '123456' && (partner_id===1||partner_id==='1')) {
    success = true
    result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDdXJyZW50VXNlciI6eyJJZCI6MTMsIkNvbXBhbnlJZCI6MSwiUm9sZSI6MiwiU3ViUm9sZUlkIjoxLCJEaGZ4SWQiOiIiLCJJc0RlYWxlciI6MH0sImV4cCI6MTYxNjgxMzQzOX0.i4fcSw31gcrAV1I0SuPrh2DBGdiS0CHff3V9L5guYdM"
    result.partner_id = "1"
    result.partner_name = "大黄蜂"
  } else if (user_name === '朵朵' && password === '123456' && (partner_id==='0'||partner_id===undefined||partner_id===null) ) {
    success = true
    result.partner_id_names = partner_names
    result.partner_ids = partner_ids
  } else if (user_name === '朵朵' && password === '123456'  && (partner_id!=='0'||partner_id!==undefined||partner_id!==null) ) {
    success = false
  } else {
    success = false
  }

  if (success) {
    result.code = 0
    result.message = Mock.mock('@TIMEFIX').CN + '，欢迎回来'
    // result.data.user = user
    // result.data.token = 'Authorization:' + Math.random()
    // result.data.expireAt = new Date(new Date().getTime() + 30 * 60 * 1000)
  } else {
    result.code = -1
    console.error("partner_id",partner_id,typeof partner_id)
    if ((partner_id===0||partner_id==='0')||partner_id===null||partner_id===undefined) {
      result.Msg = '账户名或密码错误（朵朵/123456）'
    } else {
      result.Msg = '目前只能选择大黄蜂组织'
    }
  }
  return result
})
