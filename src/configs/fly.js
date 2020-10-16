import Taro from '@tarojs/taro'
import { ResponseError } from '@/constants/response'
import { TOKEN_KEY } from '@/constants/key'
import { fetchStorage } from '@/utils/storage'

const BASE_URL = process.env.BASE_URL

let Fly
if(process.env.TARO_ENV === 'h5') {
  Fly = require('flyio/dist/npm/fly')
}else {
  Fly = require('flyio/dist/npm/wx')
}
// 全局配置
const fly = new Fly
fly.config.timeout = 10000
fly.config.baseURL = BASE_URL
fly.config.withCredentials = true
fly.interceptors.request.use(request => {
  Taro.showLoading({
    title: '加载中',
  })
  try{
    request.headers[TOKEN_KEY] = fetchStorage(BASE_URL + TOKEN_KEY)
    if (request.method && request.method.toUpperCase() === 'GET') {
      request.params._ = Date.now()
    }
  }catch(e) {
    console.log(e.errMsg || e.toString())
  }
  return Promise.resolve(request)
})

fly.interceptors.response.use(
  response => {
    if (response.data.code === ResponseError) {
      Taro.hideLoading()
      Taro.showToast({
        title: response.data.message,
        icon: 'none',
        duration: 2000
      })
    }
    return response
  },
  error => {
    Taro.hideLoading()
    if(error.message.indexOf('timeout') !== -1) {
      Taro.showToast({
        title: '请求超时',
        icon: 'none',
        duration: 2000
      })
    }else if(error) {
      if(error.status === 401) {
        // 401 进入登录流程，待补充※
      }else {
        let str = '网络不给力哦，请检查网络状态'
        switch (error.status) {
          case 404:
            str = '访问地址不存在'
            break
          case 500:
            str = '访问地址出现异常'
            break
          case 502:
          case 504:
            str = '服务器不在服务区'
            break
          default:
            break
        }
        Taro.showToast({
          title: str,
          icon: 'none',
          duration: 2000
        })
      }
    }else {
      Taro.showToast({
        title: '出现网络错误,请重试',
        icon: 'none',
        duration: 2000
      })
    }
    return Promise.reject(error)
  }
)

export default fly
