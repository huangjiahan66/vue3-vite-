import axios from "axios";
const baseUrl = "http://123.207.32.32:1888/api";
import useMainStore from "@/stores/modules/main";
const mainStore = useMainStore();

const instance = axios.create({
  baseURL: baseUrl,
  timeout: 8000,
});
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    mainStore.isLoading = true; //请求前 开启loading
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    mainStore.isLoading = false; //请求后结束oading
    return response.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    mainStore.isLoading = false;
    return Promise.reject(error);
  }
);

export default instance;
