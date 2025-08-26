import axios from 'axios'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    
    (config) =>{
        const token = localStorage.getItem(ACCESS_TOKEN)
        if(token){
            console.log(token)
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    }, 
    
    (error)=>{
    console.log(error)
    return Promise.reject.error
    }

)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry // prevent infinite loop
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);

        const res = await axios.post(
            api.post("api/token/refresh/", { refresh: refreshToken })
        //   `${import.meta.env.VITE_API_URL}/api/token/refresh/`,
        //   { refresh: refreshToken }
        );

        const newAccess = res.data.access;
        localStorage.setItem(ACCESS_TOKEN, newAccess);

        // Update Authorization and retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token expired", refreshError);
        // Optional: redirect to login page or logout
      }
    }

    return Promise.reject(error);
  }
);
export default api