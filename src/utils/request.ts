import type { AxiosInstance } from "axios";
import axios from "axios";
import { ElMessage } from "element-plus";

const request: AxiosInstance = axios.create({
  baseURL:
    // "https://mock.mengxuegu.com/mock/653f5db682cf792009576e5b/mxg-vue3-elementplus",
    import.meta.env.VITE_APP_BASE_API as string,
  timeout: 20000,
});

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    const { data } = response;
    if (data.code == 20000) {
      return data;
    }
    ElMessage.error(data.message);
    return Promise.reject(response);
  },
  (error) => {
    const { message, response } = error;
    if (message.indexOf("timeout") != -1) {
      ElMessage.error("网络超时");
    } else if (message == "Network Error") {
      ElMessage.error("网络连接错误");
    } else {
      if (response.data) ElMessage.error(response.statusText);
      else ElMessage.error("接口路径找不到");
    }
    return Promise.reject(error);
  }
);

export default request;
