import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const registerUser = (userData) => API.post('/users/register', userData);
export const loginUser = (userData) => API.post('/users/login', userData);
export const fetchTasks = () => API.get('/tasks');

export default API;
