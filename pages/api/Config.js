import axios from 'axios';

const BASE_URL = 'http://localhost:3000/';

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': [BASE_URL],
  },
});

export default AxiosInstance;
