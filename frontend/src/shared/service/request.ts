import axios, { AxiosRequestConfig, } from 'axios';

// Axios default config
const defaultOptions: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const request = axios.create(defaultOptions);

export default request;
