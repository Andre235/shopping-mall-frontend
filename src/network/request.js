import Axios from "axios";

//使用Promise对象对网络请求进行封装
export function request(config){
  // 创建Axios实例
  const instance1 = Axios.create({
    baseURL: "http://152.136.185.210:8000/api/z8",
    timeout: 5000
  })

  // instance1实例的请求拦截器
  instance1.interceptors.request.use(
    config => { // 请求成功时进行拦截
      console.log("请求成功时进行拦截");
      console.log(config);
      return config;  // 注意：在请求时进行拦截时，必须要返回拦截的config对象
    },
    error => { // 请求失败时进行拦截
      console.log("请求失败时进行拦截");
      console.log(error);
    }
  )

  // 响应拦截
  instance1.interceptors.response.use(
    res => {
      console.log("响应成功时进行拦截");
      return res.data  //在响应成功时，拦截器进行处理，只返回data
    },
    err => {
      console.log("响应失败时进行拦截");
      console.log(err);
    }
  )

  // 发送真正的网络请求
  return instance1(config)
}

