import axios from "axios";
const baseurl = import.meta.env.VITE_BACKEND_BASE_API;
const refreshTokenEndpoint = import.meta.env.VITE_REFRESH_ENDPOINT;
const axiosInstance = axios.create({
  baseURL: baseurl,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  },
  (error) => Promise.reject(error)
);

//Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  //handle failed responses.
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest.retry) {
      originalRequest.retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      try {
        const response = await axiosInstance.post(refreshTokenEndpoint, {
          refreshToken: refreshToken,
        });
        localStorage.setItem("accessToken", response.data.accessToken);
        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${response.data.access}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        throw err;
      }
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
