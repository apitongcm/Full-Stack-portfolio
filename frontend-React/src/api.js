import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  // If request is not GET, require token
  //if (config.method !== "get" && token) {
    //config.headers.Authorization = `Bearer ${token}`;
  //}
  if (token && !config.url.includes("feedback"))
  {
    if(config.method !== "get" && token){
        config.headers.Authorization = `Bearer ${token}`;
    }
  }else{
    if(config.method == "get" && token){
        config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;
