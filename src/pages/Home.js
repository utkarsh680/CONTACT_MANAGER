import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonRifle} from '@fortawesome/free-solid-svg-icons'
import styles from "../styles/Home.module.css";
export default function Home() {
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

  return (
    <div className={styles.box} >
      {contacts.map((contact) => {
       return(
        <div key={contact.id}>
        <div className={styles.contactBox}>
         <div className={styles.contactItemBox}>   
        <img src="https://cdn-icons-png.flaticon.com/512/2202/2202112.png" alt="profile" className={styles.profileImg}/>
        <div className={styles.nameContent}>
        {contact.name}
        </div>
        <div className={styles.email}>
        email
        </div>
        <div className={styles.emailContent}>
        {contact.email}
        </div>
        <div className={styles.contact}>
        contact
        </div>
        <div className={styles.contactContent}>
        {contact.phone}
        </div>
        <div className={styles.address}>
        Address
        </div>
        <div className={styles.addressContent}>
        {contact.address.city}
        </div>

        <div className={styles.company}>
        Company
        </div>
        <div className={styles.companyContent}>
        {contact.company.name}
        </div>
        </div>
        </div>
        </div>
       )
      })}
    </div>
  );
}
