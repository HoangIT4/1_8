import axiosClient from './axiosClient.js';

export const logout = () => axiosClient.post('/logout');

export const login = () => axiosClient.post('/login');

export const register = () => axiosClient.post('/register');

export const getUser = () => axiosClient.get('/users');
export const addUser = data => axiosClient.post('/users', data);
export const updateUser = (id, data) => axiosClient.put(`/users/${id}`, data);
