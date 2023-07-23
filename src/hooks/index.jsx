import { useContext, useEffect, useState } from "react"
import { UserContext } from "../providers/UserProvider";

export const useDetails = () => {
    return useContext(UserContext);
}

export const useProvideDetails = () => {
    const [contacts, setContacts] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        setContacts(data);
        console.log(data);
      };

      useEffect(() => {
        fetchData();
      }, []);

      const deleteContact = (id) => {
        console.log('hello', id)
        const newContacts = contacts.filter((contact) => contact.id !== id);
        setContacts(newContacts);
      };

      const addContact = (contact) => {
        console.log('add', contact)
        const newContacts = [contact, ...contacts]
        setContacts(newContacts);
      };

      return {
        contacts,
        deleteContact,
        addContact,
      }
}
