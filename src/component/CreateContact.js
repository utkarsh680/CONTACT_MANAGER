import React from 'react'
import styles from "../styles/CreateContact.module.css";

export default function CreateContact() {
  return (
    <div className='form'>
    <div className='wrapper'>
      <input type='text' id='name' className='formInput' required/>
      <label for ='name' className='formLabel'>Name</label>
    </div>
  
    </div>
  )
}
