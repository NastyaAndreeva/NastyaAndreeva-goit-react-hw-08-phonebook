import styled from 'styled-components';
import { useEffect } from 'react';
import { RiContactsBook2Line } from 'react-icons/ri';
import { Button } from 'components/ui/Button';
import { theme } from 'stylesConfig/theme';
import { useRedux } from 'hooks';
import { contactsOperations, contactsSelectors } from 'store/contacts';

const FriendListStyled = styled.ul`
  list-style: none;
  padding: 0;
  width: 400px;
`;

const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  span {
    margin: 5px;
  }
`;

export const FriendList = () => {
  const [selector, dispatch] = useRedux();
  const contacts = selector(contactsSelectors.getAllContacts);
  const filter = selector(contactsSelectors.getFilter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const deleteContactbyId = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  const getFilteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  return (
    <FriendListStyled>
      {getFilteredContacts().map(({ id, name, number }) => (
        <FriendListItem key={id}>
          <div>
            <RiContactsBook2Line fill={theme.colors.backgroundBlueBtn} />
            <span>{name}: </span>
            <span>{number}</span>
          </div>

          <Button type="button" onClick={() => deleteContactbyId(id)}>
            Delete
          </Button>
        </FriendListItem>
      ))}
    </FriendListStyled>
  );
};
