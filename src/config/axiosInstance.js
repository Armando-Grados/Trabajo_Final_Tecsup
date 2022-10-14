import axios from "axios";

const axiosInstance =  axios.create({
    baseURL: import.meta.BASE_API_URL
});

export default axiosInstance;