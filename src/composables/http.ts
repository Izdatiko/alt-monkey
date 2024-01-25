import axios from 'axios';

const BASEURL = import.meta.env.VITE_BASE_URL

axios.interceptors.request.use((config) => {
        config.baseURL = BASEURL
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)