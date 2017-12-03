import axios from 'axios';
import { message, Modal } from 'antd';
import store from '../store';

const confirm = Modal.confirm;

// var baseUrl = process.env.NODE_ENV == "development"?'/api':process.env.BASE_API
// 创建axios实例
const service = axios.create({
    // baseURL: baseUrl,
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000,                  // 请求超时时间
  // transformResponse: [function (data) {
  //   // Do whatever you want to transform the data 
 
  //   return JSON.parse(data);
  // }],
});

// request拦截器
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['X-Token'] = store.getters.token; // 让每个请求携带自定义token 请根据实际情况自行修改
  }
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
    const res = response.data;
    if (res.status == 0) {
      message.error('出现错误！');

      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        confirm({
        title: '已退出请重新登录！',
        content: '请重新登录！',
        onOk() {
            console.log('OK');
        },
        onCancel() {
            console.log('Cancel');
        },
    });
      }
      return Promise.reject(error);
    } else {
      return response.data;
    }
  },
  error => {
    console.log('err' + error);// for debug
    message.error('服务器出错！');
    return Promise.reject(error);
  }
)

export default service;
