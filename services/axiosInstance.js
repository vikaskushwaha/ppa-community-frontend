import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:2000",
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            localStorage.clear();
            window.location.reload();

        }
        return Promise.reject(error);
    }

)

export default axiosInstance;