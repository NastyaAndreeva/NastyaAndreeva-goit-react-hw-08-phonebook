import { getContacts, postContact, removeContact } from 'api/fetch';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactError,
  addContactSuccess,
  addContactRequest,
  deleteContactError,
  deleteContactRequest,
  deleteContactSuccess,
} from './contactsAction';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await getContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact =
  ({ name, number }) =>
  dispatch => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());

    postContact(contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch(error => dispatch(addContactError(error.message)));
  };

const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest());

  removeContact(contactId)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error.message)));
};

const contactOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactOperations;
