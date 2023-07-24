import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonRifle,
  faArrowLeft,
  faEnvelope,
  faPhone,
  faLocationDot,
  faWifi,
  faBatteryHalf,
  faSignal,
  faDeleteLeft,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aos from "aos";
import { useDetails } from "../hooks";
import { toast } from "react-toastify";

const Home = () => {
  const userContacts = useDetails(); //make useContacts variable and put useDetails
  // useState hook for taking contact details
  const [contacts, setContacts] = useState(userContacts.contacts);

  // delete function
  const onDeleteContact = (id) => {
    userContacts.deleteContact(id);
    toast.success("Contact deleted successfully!", {
      autoClose: 2000,
    });
  };

  useEffect(() => {
    setContacts(userContacts.contacts);
  }, [userContacts.contacts]);

  return (
    <div className={styles.box}>
      <div className={styles.boxContainer}>
        {contacts.map((contact) => {
          return (
            <div key={contact.id}>
              <div className={styles.contactBox}>
                <div className={styles.contactItemBox}>
                  <div className={styles.header}>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className={styles.icon}
                    />
                    <div>Person Information</div>
                    <div className={styles.mobileStyle}>
                      <FontAwesomeIcon
                        icon={faBatteryHalf}
                        className={styles.iconm1}
                      />
                      <FontAwesomeIcon
                        icon={faWifi}
                        className={styles.iconm2}
                      />
                      <FontAwesomeIcon
                        icon={faSignal}
                        className={styles.iconm3}
                      />
                    </div>
                  </div>
                  <div className={styles.nameUserName}>
                    <img
                      src="https://images.unsplash.com/photo-1444069069008-83a57aac43ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60"
                      className={styles.profileImg}
                      alt="profile"
                    />
                    <div className={styles.nameUserNameContent}>
                      <div className={styles.name}>{contact.name}</div>
                      <div className={styles.userNameStyle}>
                        <div className={styles.userName}>
                          {contact.username}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.Information}>
                    <div className={styles.emailInformation}>
                      <div className={styles.emailIcon}>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className={styles.icon1}
                        />
                      </div>
                      <div className={styles.email}>
                        <div className={styles.emailStyle}>User Email</div>
                        <div className={styles.emailContent}>
                          {contact.email}
                        </div>
                      </div>
                    </div>
                    <div className={styles.phoneInformation}>
                      <div className={styles.phoneIcon}>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className={styles.icon2}
                        />
                      </div>
                      <div className={styles.phone}>
                        <div className={styles.phoneStyle}>User Phone</div>
                        <div className={styles.phoneContent}>
                          {contact.phone}
                        </div>
                      </div>
                    </div>
                    <div className={styles.addInformation}>
                      <div className={styles.addIcon}>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className={styles.icon3}
                        />
                      </div>
                      <div className={styles.add}>
                        <div className={styles.addStyle}>User Address</div>
                        <div className={styles.addContent}>
                          {contact.address.suite}, {contact.address.street}
                        </div>
                        <div className={styles.addCity}>
                          {contact.address.city}, {contact.address.zipcode}
                        </div>
                      </div>
                    </div>
                    <div className={styles.companyInformation}>
                      <div className={styles.companyIcon}>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className={styles.icon4}
                        />
                      </div>
                      <div className={styles.company}>
                        <div className={styles.companyStyle}>User Company</div>
                        <div className={styles.companyContent}>
                          {contact.company.name}
                        </div>
                      </div>
                    </div>
                    <div className={styles.delete}>
                      <FontAwesomeIcon
                        icon={faDeleteLeft}
                        className={styles.icon5}
                        onClick={() => {
                          onDeleteContact(contact.id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
