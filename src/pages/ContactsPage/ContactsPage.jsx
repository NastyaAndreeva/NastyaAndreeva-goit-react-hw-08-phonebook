import { FriendList } from 'components/FriendList';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Box } from 'components/ui/Box';
import { useRedux } from 'hooks';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'store/contacts';
import { Span } from 'components/ui/Span';
import { Label } from 'components/ui/Label';
import { Heading } from 'components/ui/Heading';
import { SecondaryHeading } from 'components/ui/SecondaryHeading';

const ContactsPage = () => {
  const [selector, dispatch] = useRedux();
  const contacts = selector(contactsSelectors.getAllContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Box
        width="480px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        as="section"
      >
        <Heading>Phonebook</Heading>
        <ContactForm />
        <SecondaryHeading>Contacts</SecondaryHeading>
        <Label htmlFor="filter">
          <Span>Find contacts by name</Span>
          <Filter />
        </Label>
        {contacts.length !== 0 && <FriendList />}
      </Box>
    </>
  );
};

export default ContactsPage;
