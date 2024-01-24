import "./App.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid"; // Corrected import statement
import Header from "./component/Header";
import AddContact from "./component/AddContact";
import ContactList from "./component/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const retrieveContacts =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
    setContacts(retrieveContacts);
  }, []);

  const addContacthandler = (newContact) => {
    setContacts((prevContacts) => {
      const updatedContacts = [
        ...prevContacts,
        { id: uuidv4(), ...newContact },
      ];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const removecontacthandler = (id) => {
    const newcontacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newcontacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newcontacts));
  };
  return (
    <>
      <Header />
      <AddContact addContacthandler={addContacthandler} />
      <ContactList
        contact={contacts}
        removeContactHandler={removecontacthandler}
      />
    </>
  );
}

export default App;
