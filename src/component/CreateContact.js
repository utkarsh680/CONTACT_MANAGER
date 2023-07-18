import React from 'react'
import styles from "../styles/CreateContact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faUser, faImage, faBuilding, faPhone, faEnvelopeOpen, faCalendarDays, faAddressBook} from '@fortawesome/free-solid-svg-icons'

export default function CreateContact() {
  return (
    <div className={styles.main}>
    <div className={styles.profileAdd}>
     <div className={styles.profileImage}> 
      <FontAwesomeIcon icon={faImage} className = {styles.profileImg}/>
     </div>
     <div className = {styles.addPicture}>
        <button className={styles.addBtn}>Add Picture</button>
     </div>
    </div>
    
    <div className={styles.form}>
    <FontAwesomeIcon icon={faUser} className={styles.profile}/> 
     <div>
     <div className={styles.wrapper}> 
      <input type='text' id='name' className='formInputName' required/>
      <label for ='name' className='formLabel'>First name</label>
    </div> 
    </div>
    
    </div>
    <div className={styles.form}>
     <div>
     <div className={`${styles.wrapper} ${styles.marginLeft}`}> 
      <input type='text' id='sirname' className={styles.formInputSurname} required/>
      <label for ='sirname' className='formLabel'>Surname</label>
    </div> 
    </div>
    
    </div>
    <div className={styles.form}>
    <FontAwesomeIcon icon={faBuilding} className={styles.profile}/> 
     <div>
     <div className={styles.wrapper}> 
      <input type='text' id='company' className='formInputCompany' required/>
      <label for ='company' className='formLabel'>Company</label>
    </div> 
    </div>
    
    </div>
    <div className={styles.form}>
    <FontAwesomeIcon icon={faPhone} className={styles.profile}/> 
     <div>
     <div className={styles.wrapper}> 
      <input type='text' id='phone' className={styles.formInputPhone} required/>
      <label for ='phone' className='formLabel'>Phone</label>
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
    <FontAwesomeIcon icon={faAddressBook} className={styles.profile}/> 
     <div>
     <div className={styles.wrapper}> 
        <input type='input' id='address' className={styles.formInputAdd}required/> 
        <label for ='address' >Address</label>
    </div> 
    </div>
    </div>
    <div className={styles.form}>
    <FontAwesomeIcon icon={faEnvelope} className={styles.profile}/> 
     <div>
     <div className={styles.wrapper}> 
      <input type='text' id='email' className={styles.formInputEmail} required/>
      <label for ='email' className={styles.formLabel}>Email</label>
    </div> 
    </div>
    </div>
    <div className={styles.form}>
     <div>
     <div className={`${styles.wrapper} ${styles.marginLeft}`}> 
     <label  className={styles.formLabelOption}>Label</label>
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
      <button className={styles.saveBtn}>Save</button>
    </div> 
    </div>
  )
}
