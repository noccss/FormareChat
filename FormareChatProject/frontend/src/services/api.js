import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:27017',
});

export default api;