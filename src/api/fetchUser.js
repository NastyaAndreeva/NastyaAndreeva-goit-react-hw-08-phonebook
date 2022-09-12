import { apiInstance } from 'api';

export const fetchRegister = credentials =>
  apiInstance.post('/users/signup', credentials);

export const fetchLogin = credentials =>
  apiInstance.post('/users/login', credentials);

export const fetchLogout = () => apiInstance.post('/users/logout');

export const fetchCurrent = () => apiInstance.get('/users/current');

export const getContacts = () => apiInstance.get('/contacts');

export const postContact = contact => apiInstance.post('/contacts', contact);

export const removeContact = contactId =>
  apiInstance.delete(`/contacts/${contactId}`);
