import React, { useState } from "react";
import styles from "../styles/CreateContact.module.css";
import { toast } from "react-toastify";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
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
  const useContact = useDetails(); //make a const variable for useDetails

  // create useState hook for all input function
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [email, setEmail] = useState("");
  const addContact = () => {
    // put the condition if input fields are empty
    if (
      name === "" ||
      username === "" ||
      company === "" ||
      phone === "" ||
      city === "" ||
      email === ""
    ) {
      toast.warn("Required fileds are followed by *", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      return;
    }
    // here we take all the details from the input
    useContact.addContact({
      name,
      username,
      company: {
        name: company,
      },
      phone,
      address: {
        city,
        street,
        suite,
        zipcode,
      },
      email,
      id: Math.random(),
    });
    toast.success("contact created successfully!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    setName("");
    setUsername("");
    setCompany("");
    setPhone("");
    setCity("");
    setStreet("");
  };
  return (
    <div className={styles.main}>
      
      <div className={styles.profileAdd}>
        <div className={styles.profileImage}>
          <FontAwesomeIcon icon={faImage} className={styles.profileImg} />
        </div>
        <div className={styles.addPicture}>
          <button className={styles.addBtn}>Add Contact</button>
        </div>
      </div>
      {/* full name input box */}
      <div className={styles.form}>
        <FontAwesomeIcon icon={faUser} className={styles.profile} />
        <div className={styles.wrapper}>
          <input
            type="text"
            id="name"
            className="formInputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <span>*</span>
          <label htmlFor="name" className="formLabel">
            Full Name
          </label>
        </div>
      </div>
      {/* username input box */}
      <div className={styles.form}>
        <div className={`${styles.wrapper} ${styles.marginLeft}`}>
          <input
            type="text"
            id="username"
            className={styles.formInputSurname}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username" className="formLabel">
            Username
          </label>
          <span>*</span>
        </div>
      </div>
      {/* email input box   */}
      <div className={styles.form}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.profile} />
        <div className={styles.wrapper}>
          <input
            type="text"
            id="email"
            className={styles.formInputEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <span>*</span>
        </div>
      </div>
      <div className={styles.form}>
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
      {/* phone input box */}
      <div className={styles.formPhone}>
        <div className={styles.form}>
          <FontAwesomeIcon icon={faPhone} className={styles.profile} />
          <div className={styles.wrapper}>
            <input
              type="text"
              id="phone"
              className={styles.formInputPhone}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <label htmlFor="phone">Phone</label>
            <span>*</span>
          </div>
        </div>
      </div>
      <div className={styles.form}>
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
      {/* conpany input box */}
      <div className={styles.formCompany}>
        <div className={styles.form}>
          <FontAwesomeIcon icon={faBuilding} className={styles.profile} />
          <div className={styles.wrapper}>
            <input
              type="text"
              id="company"
              className={styles.formInputCompany}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              placeholder="Name"
            />
            <label htmlFor="company" className={styles.compnayLabel}>
              Company
            </label>
            <span>*</span>
          </div>
        </div>
      </div>
      {/* address city input box */}
      <div className={styles.formAddress}>
        <div className={styles.form}>
          <FontAwesomeIcon icon={faAddressBook} className={styles.profile} />
          <div className={styles.wrapper}>
            <input
              type="input"
              id="address"
              className={styles.formInputAdd}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              placeholder="city"
            />
            <label htmlFor="address" className={styles.addLabel}>
              Address
            </label>
            <span>*</span>
          </div>
        </div>
      </div>
      {/* address streen input box */}

     
        <div className={styles.form}>
          <div className={`${styles.wrapper} ${styles.marginLeft}`}>
            <input
              type="text"
              id="street"
              className={styles.formInputStreet}
              placeholder="street"
              required
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
          </div>
        </div>
        {/* address suite input box */}
        <div className={styles.form}>
          <div className={styles.address1}>
            <div className={`${styles.wrapper} ${styles.marginLeft}`}>
              <input
                type="text"
                id="suite"
                className={styles.formInputStreet}
                placeholder="suite"
                required
                value={suite}
                onChange={(e) => setSuite(e.target.value)}
              />
            </div>
          </div>
        </div>
      {/* address zipcode input box */}
      <div className={styles.form}>
        <div className={styles.address2}>
          <div className={`${styles.wrapper} ${styles.marginLeft}`}>
            <input
              type="text"
              id="zipcode"
              className={styles.formInputStreet}
              placeholder="zipcode"
              required
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* button */}
      <div className={styles.form}>
        <button onClick={addContact} className={styles.saveBtn}>
          Save
        </button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
