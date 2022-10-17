import { useState, useEffect } from 'react';
import List from './List';
import Form from './Form';
import './List/style.css';

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname:'Loghman',
            phone_number: '+1 6457382396'
        },

        {
            fullname:'Alizada',
            phone_number: '+1 8665938799'
        }
    ]);

    useEffect(() => {
        console.log(contacts);

    }, [contacts])

  return (
    <div id="container">
        <h2>Contacts</h2>
      <List contacts = {contacts}/>
      <Form addContact = {setContacts} contacts= {contacts}/>
    </div>
  )
}

export default Contacts
