import React from 'react'
import styles from "../styles/CreateContact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faUser, faImage, faBuilding, faPhone, faEnvelopeOpen, faCalendarDays} from '@fortawesome/free-solid-svg-icons'

export default function CreateContact() {
  return (
    <div className='main'>
    <div className='profileAdd'>
     <div className='profileImage'> 
      <FontAwesomeIcon icon={faImage} className='profileImg'/>
     </div>
     <div className = 'addPicture'>
        <button className='addBtn'>Add Picture</button>
     </div>
    </div>
    
    <div className='form'>
    <FontAwesomeIcon icon={faUser} className='profile'/> 
     <div>
     <div className='wrapper'> 
      <input type='text' id='name' className='formInputName' required/>
      <label for ='name' className='formLabel'>First name</label>
    </div> 
    </div>
    
    </div>
    <div className='form'>
     <div>
     <div className='wrapper marginLeft'> 
      <input type='text' id='name' className='formInputSurname' required/>
      <label for ='name' className='formLabel'>Surname</label>
    </div> 
    </div>
    
    </div>
    <div className='form'>
    <FontAwesomeIcon icon={faBuilding} className='profile'/> 
     <div>
     <div className='wrapper'> 
      <input type='text' id='name' className='formInputCompany' required/>
      <label for ='name' className='formLabel'>Company</label>
    </div> 
    </div>
    
    </div>
    <div className='form'>
    <FontAwesomeIcon icon={faPhone} className='profile'/> 
     <div>
     <div className='wrapper'> 
      <input type='text' id='name' className='formInputPhone' required/>
      <label for ='name' className='formLabel'>Phone</label>
    </div> 
    </div>
    
    </div>
    
    <div className='form'>
     <div>
     <div className='wrapper marginLeft'> 
     <label for ='name' className='formLabelOption'>Label</label>
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
    <div className='form'>
    <FontAwesomeIcon icon={faEnvelope} className='profile'/> 
     <div>
     <div className='wrapper'> 
      <input type='text' id='name' className='formInputEmail' required/>
      <label for ='name' className='formLabel'>Email</label>
    </div> 
    </div>
    </div>
    <div className='form'>
     <div>
     <div className='wrapper marginLeft'> 
     <label for ='name' className='formLabelOption'>Label</label>
     <select> 
        <option>Home</option>
        <option>Work</option>
        <option>Other</option>
        <option>Custom</option>
      </select>
    </div> 
    </div>
    </div>
    <div className='form'>
    <FontAwesomeIcon icon={faCalendarDays} className='profile'/> 
     <div>
     <div className='wrapper'> 
        <input type='date' id='name' className='formInputDate' required/> 
        <label for ='name' >Singnificant date</label>
    </div> 
    </div>
    </div>
    <div className='form'>
     <div>
     <div className='wrapper marginLeft'> 
     <label for ='name' className='formLabelOption'>Label</label>
     <select> 
        <option>Birthday</option>
        <option>Aniversary</option>
        <option>Other</option>
        <option className='active'>Custom</option>
      </select>
    </div> 
    </div>
    </div>
    <div className='form'>
      <button className='saveBtn'>Save</button>
    </div>
    
    </div>
  )
}
