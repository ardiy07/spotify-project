import axios from 'axios';
import Config from 'react-native-config';
import * as Keychain from 'react-native-keychain';

const apiClient = axios.create({
  baseURL: Config.API_URL_SPOTIFY,
  timeout: 10000,
});


// Interceptors untuk token otentikasi
apiClient.interceptors.request.use(
  async config => {
    try {
      const credentials = await Keychain.getGenericPassword();

      if (credentials) {
        const {accessToken} = JSON.parse(credentials.password);
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.log('Error access token: ', error);
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);


// interceptors untuk respons
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response){
            // Server mengembalikan respon dengan status kode di luar 2xx
            console.error('API Error: ', error.response.data);
            return Promise.reject(new Error(error.response.data.error || 'Api Error'));
        }else if(error.request){
            // Tidak ada response dari server
            console.error('No response from api: ', error.request);
            return Promise.reject(new Error('No response from Api'));
        }else{
            // Kesalahan saat konfigurasi permintaan
            console.error('Error setting up request: ', error.message);
            return Promise.reject(new Error(error.message));
        }
    }
);

// Get Request
export const get = async (endpoint, params = {}) => {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
};

// Post Request
export const post = async (endpoint, data = {}) => {
    const respon = await apiClient.post(endpoint, data);
    return respon.data;
}

export default apiClient;
