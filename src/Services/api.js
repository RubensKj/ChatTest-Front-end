import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.25.17:9000/api',
  headers: { 'Content-Type': 'application/json' },
});

export default api;