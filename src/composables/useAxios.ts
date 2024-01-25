import { ref, onMounted } from 'vue';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

type Method = 'get' | 'post' | 'put' | 'delete';

interface QueryParams {
    [key: string]: string | number | boolean;
}

export const useAxios = (url: string, method: Method, queryParams: QueryParams = {}, body: any = null, headers: any = null) => {
    const data = ref(null);
    const error = ref('');
    const isLoading = ref(true);

    const fetchData = () => {
        const searchParams = new URLSearchParams(queryParams);
        const queryString = searchParams.toString();
        const urlWithQueryParams = `${url}${queryString ? `?${queryString}` : ''}`;

        axios[method](urlWithQueryParams, headers, body)
            .then((res: any) => {
                data.value = res.data;
            })
            .catch((err: string) => {
                error.value = err;
            })
            .finally(() => {
                isLoading.value = false;
            });
    };

    onMounted(() => {
        fetchData();
    });

    return { data, error, isLoading, fetchData };
};