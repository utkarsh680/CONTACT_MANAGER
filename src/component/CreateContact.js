import React, { useState } from "react";
import styles from "../styles/CreateContact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faImage,
  faBuilding,
  faPhone,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { useDetails } from "../hooks";

export default function CreateContact() {
  const useContact = useDetails();
  const [firstName, setFirstName] = useState("");
  const [userName, setUserName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const addContact = () => {
    useContact.addContact({ 
      firstName,
      userName,
      company,
      phone,
      address,
      email,
      id: Math.random(),
    });
  };
  return (
    <div className={styles.main}>
      <div className={styles.profileAdd}>
        <div className={styles.profileImage}>
          <FontAwesomeIcon icon={faImage} className={styles.profileImg} />
        </div>
        <div className={styles.addPicture}>
          <button className={styles.addBtn}>Add Picture</button>
        </div>
      </div>

      <div className={styles.form}>
        <FontAwesomeIcon icon={faUser} className={styles.profile} />
        <div>
          <div className={styles.wrapper}>
            <input
              type="text"
              id="name"
              className="formInputName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label for="name" className="formLabel">
              Full Name
            </label>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <div>
          <div className={`${styles.wrapper} ${styles.marginLeft}`}>
            <input
              type="text"
              id="username"
              className={styles.formInputSurname}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label for="username" className="formLabel">
              Username
            </label>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <FontAwesomeIcon icon={faBuilding} className={styles.profile} />
        <div>
          <div className={styles.wrapper}>
            <input
              type="text"
              id="company"
              className="formInputCompany"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
            />
            <label for="company" className="formLabel">
              Company
            </label>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <FontAwesomeIcon icon={faPhone} className={styles.profile} />
        <div>
          <div className={styles.wrapper}>
            <input
              type="text"
              id="phone"
              className={styles.formInputPhone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label for="phone" className="formLabel">
              Phone
            </label>
          </div>
        </div>
      </div>

      <div className={styles.form}>
        <div>
          <div className={`${styles.wrapper} ${styles.marginLeft}`}>
            <label className={styles.formLabelOption}>Label</label>
            <select>
              <option>Mobile</option>
              <option>Work</option>
              <option>Home</option>
              <option>Work fax</option>
              <option>Home fax</option>
              <option>Pager</option>
              <option>Other</option>
              <option>Custom</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <FontAwesomeIcon icon={faAddressBook} className={styles.profile} />
        <div>
          <div className={styles.wrapper}>
            <input
              type="input"
              id="address"
              className={styles.formInputAdd}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <label for="address">City</label>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.profile} />
        <div>
          <div className={styles.wrapper}>
            <input
              type="text"
              id="email"
              className={styles.formInputEmail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label for="email" className={styles.formLabel}>
              Email
            </label>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <div>
          <div className={`${styles.wrapper} ${styles.marginLeft}`}>
            <label className={styles.formLabelOption}>Label</label>
            <select>
              <option>Home</option>
              <option>Work</option>
              <option>Other</option>
              <option>Custom</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.form}>
        <button onClick={addContact} className={styles.saveBtn}>Save</button>
      </div>
    </div>
  );
}
