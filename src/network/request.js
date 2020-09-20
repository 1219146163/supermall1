import axios from 'axios'

export function request(config){
     const instance =  axios.create({
    baseURL:'http://123.207.32.32:8000',//这个实例的公共url,
    timeout:5000 //超时5s
})

//axios的请求拦截器,两个函数参数
instance.interceptors.request.use(config=>{
    return config //拦截完事要记得给人家还回去，人家才能正常继续运行
},err=>{

})

//axios的响应拦截器，也是两个参数函数
instance.interceptors.response.use(res=>{
    return res.data   //响应成功才能继续拦截
},err=>{

})

//发送真正拦截修改后的网络请求
return instance(config)
}
  
    
