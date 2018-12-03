import axios from 'axios'
import URL from './baseUrl'
const http = {}
var instance = axios.create({
  baseURL: URL
})
instance.defaults.withCredentials = true;

// 响应拦截器即异常处理
instance.interceptors.response.use(
  response => {
    return response.data
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          err.message = '请求出错'
          break
        case 401:
          setTimeout(() => {
            window.location.reload()
          }, 1000)
          return
        case 403:
          err.message = '拒绝访问'
          break
        case 404:
          err.message = '请求错误,未找到该资源'
          break
        case 500:
          err.message = '服务器端出错'
          break
      }
    } else {
      err.message = '连接服务器失败'
    }
    return Promise.reject(err.response)
  }
)


http.post = function (url, data, options) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, options)
      .then(response => {
        if (response.code === 0) {
          resolve(response)
        } else {
          reject(response.msg)
        }
      })
      .catch(e => {
        console.log(e)
      })
  })
}

export default http