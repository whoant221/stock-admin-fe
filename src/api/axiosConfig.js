import axios from 'axios'
import blockChainStorage from '../utils/storage';

const instance = axios.create({
    baseURL:`https://api-stock.votuan.xyz`,
    timeout: 3000,

    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      withCredentials: true,
    }
});

  instance.interceptors.request.use(function (config) {
    const TOKEN = blockChainStorage.getInfoClient()
    config.headers.Authorization = TOKEN ? `Bearer ${TOKEN.data.token}` : ''
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  instance.interceptors.response.use(function (response) {
    return response.data;
  }, function (error) {
    return Promise.reject(error);
  });
export default instance;