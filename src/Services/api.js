import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.208:9000/api',
  headers: { 'Content-Type': 'application/json' },
});

export default api;