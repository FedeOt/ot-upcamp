import { useState } from 'react'
import { updateAccount } from '../api';
import {InputText} from './InputText'


export const UpdateInput = (props) => {

  const [inputValue,setInputValue] = useState(''); 
  const [newNameEmpty,setNewNameEmpty] = useState(false); 

  const handleInputChange = (e) =>{
    setNewNameEmpty(false); 
    setInputValue(e.target.value)
    
  }

  const handleSubmit = async(e) =>{
      e.preventDefault();
      if(inputValue.trim() === ''){
        return setNewNameEmpty(true); 
      }
       
      await updateAccount(props.accountId,inputValue); 
      props.toggleInput();
      props.setRerender(!props.reRender);  

  }

  return (
    <div>
      <div className='mb-3'>
        <strong>New Name</strong>
        <InputText 
          testId="update-input"
          onChange={handleInputChange}
          name="update-input" 
          value={inputValue}

          
          />
          
          <button data-testid="submit" onClick={handleSubmit} className='btn btn-success mt-3'>Save</button>
          {
            newNameEmpty && <span className='text-danger ms-4'>New name is required</span>
          }
      </div>
        
      <hr />
  
    </div>
  )
}
