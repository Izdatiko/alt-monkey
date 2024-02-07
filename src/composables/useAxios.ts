import { ref, onMounted } from 'vue';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

type Method = 'get' | 'post' | 'put' | 'delete';

export const useAxios = (url: string, method: Method, body: any = null, headers: any = null) => {
    const data = ref(null);
    const error = ref('');
    const isLoading = ref<boolean>(true);

    const fetchData = async () => {
        await axios[method](url , headers, body)
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

    // onMounted(() => {
    //     fetchData();
    // });

    return { data, error, isLoading, fetchData };
};

