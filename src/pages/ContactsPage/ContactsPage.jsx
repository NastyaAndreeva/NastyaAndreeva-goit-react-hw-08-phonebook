import { FriendList } from 'components/FriendList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Box } from 'components/ui/Box';
import { useRedux } from 'hooks';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'store/contacts';

const ContactsPage = () => {
  const [selector, dispatch] = useRedux();
  const contacts = selector(contactsSelectors.getAllContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box
        width="400px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        as="section"
      >
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <label htmlFor="filter">
          Find contacts by name
          <Filter />
        </label>
        {contacts.length !== 0 && <FriendList />}
      </Box>
    </>
  );
};

export default ContactsPage;
