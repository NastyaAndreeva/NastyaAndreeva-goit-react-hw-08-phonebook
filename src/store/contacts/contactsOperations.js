import { getContacts, postContact, removeContact } from 'api/fetchContact';
import { toast } from 'react-toastify';
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
  async dispatch => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());
    try {
      const { data } = await postContact(contact);
      toast.success(`${data.name} was added`);
      const response = await getContacts();
      dispatch(addContactSuccess(response.data));
    } catch (error) {
      dispatch(addContactError(error.message));
      toast.error(error.message);
    }
  };

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await removeContact(contactId);
    toast.success('The contact was deleted');
    const response = await getContacts();
    dispatch(deleteContactSuccess(response.data));
  } catch (error) {
    dispatch(deleteContactError(error.message));
    toast.error(error.message);
  }
};

const contactOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactOperations;
