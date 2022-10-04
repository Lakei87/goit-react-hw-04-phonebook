import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Notification from './Notification';

export default function App() {
  const [contacts, setContacts] = useState(
    (JSON.parse(localStorage.getItem('contacts')) || [])
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({name, number}) => {
    const isContactInList = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

    if (isContactInList) {
      return alert(`${name} is already in contacts`);
    } else {
        const contact = {
          id: nanoid(),
          name,
          number,
        };
      
      setContacts(prev => ([...prev, contact]));
    };
  };

  const handleFilterChange = e => {
    const { value } = e.currentTarget;
    setFilter(value);
  };

  const filtersContactList = () => {
    const valueInLowerCase = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(valueInLowerCase));
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div
      style={{
        textAlign: 'center',
      }}
    >

      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      {contacts.length === 0
        ? (<Notification message={'Phonebook is empty. Please add new contact.'} />)
        : <>
          <Filter onChange={handleFilterChange} value={filter} />
          <ContactList contacts={filtersContactList()} onBtnClick={deleteContact} />
        </>}

    </div>
  );
};