import axios from 'axios'
import qs from 'qs'
import store from "../store";
const env=process.env.NODE_ENV
let baseURL= env === 'development'?'/api':'/'
const instance = axios.create({
  baseURL,
  timeout:150000
})

instance.interceptors.request.use(function (config) {
  if(config.method = 'post'){
    config.data=qs.stringify(config.data);
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    let token = window.localStorage.getItem("token");
    if(token) {
      config.headers.common['token'] = token;
    }
    return config;
  }
  else{
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    let token = window.localStorage.getItem("token");
    if(token) {
      config.headers.common['token'] = token;
    }
    return config;
  }

},function (error) {
  return Promise.reject(error)
})

const xhr={
  fetch(url,data,config,methods) {
     return new Promise((resolve,reject, ) => {
       instance[methods](url, data, config).then(res => {
         if(res.code == 403){
           localStorage.removeItem('token')
         }
         resolve(res.data)
       }).catch(err => {
         reject(err)
       })
     })
   },

  post(url, data, config){
       return this.fetch(url,data,config,'post')
     },
  get(url,data){
     return new Promise((resolve,reject)=>{
       instance.get(url,{params:data}).then(res=>{
         resolve(res)
       }).catch(err=>{
         reject(err)
       })
     })
  }
}

export default xhr
