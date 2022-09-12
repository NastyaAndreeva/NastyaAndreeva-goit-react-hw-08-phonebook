import { apiInstance } from 'api';

export const getContacts = () => apiInstance.get('/contacts');

export const postContact = contact => apiInstance.post('/contacts', contact);

export const removeContact = contactId =>
  apiInstance.delete(`/contacts/${contactId}`);
