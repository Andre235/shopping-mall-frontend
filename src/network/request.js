import Axios from "axios";

//使用Promise对象对网络请求进行封装
export function request(config){
  // 创建Axios实例
  const instance = Axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 5000
  })

  // instance实例的请求拦截器
  instance.interceptors.request.use(
    config => { // 请求成功时进行拦截
      return config;  // 注意：在请求时进行拦截时，必须要返回拦截的config对象
    },
    error => { // 请求失败时进行拦截
      console.log(error);
    }
  )

  // 响应拦截
  instance.interceptors.response.use(
    res => {
      return res.data  //在响应成功时，拦截器进行处理，只返回data
    },
    err => {
      console.log(err);
    }
  )

  // 发送真正的网络请求
  return instance(config)
}

