import { apiInstance } from 'api';

export const fetchRegister = credentials =>
  apiInstance.post('/users/signup', credentials);

export const fetchLogin = credentials =>
  apiInstance.post('/users/login', credentials);

export const fetchLogout = () => apiInstance.post('/users/logout');

export const fetchCurrent = () => apiInstance.get('/users/current');
