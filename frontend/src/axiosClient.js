import axios from "axios";

const axiosClient =  axios.create({
    baseURL: 'http://127.0.0.1:8000/api/auth',
    withCredentials: true,
});

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('ACCESS_TOKEN');
    config.headers = {
        ...config.headers,  
        'Accept': 'application/json',  
        'Authorization': token ? `Bearer ${token}` : '',
    };
    return config;
});


axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        try{
            // console.log("hello bilal");
            const {response} = error;
            if(response.status === 401){
                localStorage.removeItem("ACCESS_TOKEN");
            }
        }
        catch(err){
            console.log(err);
        }
        throw error;
    }
);

export default axiosClient;
