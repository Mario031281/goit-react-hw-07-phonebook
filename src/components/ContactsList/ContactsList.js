import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  ContactListContainer,
  Item,
  List,
  Button,
} from './ContactsList.styled';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { removeContact, fetchContacts } from 'redux/operations';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const searchQuery = useSelector(selectFilter);
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const filteredContacts = contacts.filter(contact => {
    const name = contact.name || '';
    const query = searchQuery || '';

    return name.toLowerCase().includes(query.toLowerCase());
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(fetchContacts());
      } catch (error) {
        console.log('Error', error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {isLoading}
      {contacts.length === 0 ? (
        <div>Fetching contacts...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <ContactListContainer>
          {filteredContacts.map(({ id, name, number }) => (
            <List key={id}>
              <Item>{name}</Item>
              <Item>{number}</Item>
              <Button onClick={() => dispatch(removeContact(id))}>
                Delete
              </Button>
            </List>
          ))}
        </ContactListContainer>
      )}
    </div>
  );
};
