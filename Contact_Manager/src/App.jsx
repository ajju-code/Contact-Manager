import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import AddContact from "./component/AddContact";
import ContactList from "./component/ContactList";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContacthandler = (newcontacts) => {
    console.log(newcontacts);
    setContacts([...contacts, newcontacts]);
  };

  useEffect =
    (() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    },
    [contacts]);
  return (
    <>
      <Header />
      <AddContact addContacthandler={addContacthandler} />
      <ContactList contact={contacts} />
    </>
  );
}

export default App;
