import axiosClient from './axiosClient.js';

export const getCustomer = () => axiosClient.post('/customers');
