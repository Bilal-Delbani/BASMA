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
    response => response,
    async error => {
        const originalRequest = error.config; // Save the failed request

        // If the response is 401 (Unauthorized)
        if (error.response && error.response.status === 401) {

            try {
                const refreshResponse = await axios.post('http://127.0.0.1:8000/api/auth/refresh');

                // Save the new token
                const newToken = refreshResponse.data.access_token;
                localStorage.setItem('ACCESS_TOKEN', newToken);

                // Update the Authorization header of the failed request
                originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

                // Retry the failed request with the new token
                return axios(originalRequest);
            } catch (refreshError) {
                console.error("Token refresh failed. Logging out...");
                localStorage.removeItem('ACCESS_TOKEN');
                window.location.href = '/guest/login';
            }
        }

        return Promise.reject(error);
    }
);






export default axiosClient;
