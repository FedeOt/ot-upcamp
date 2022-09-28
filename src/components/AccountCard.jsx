import { useState } from 'react';
import { deleteAccount } from '../api'
import { getRole } from '../axios/Instance';
import { formatDate } from '../moment/formatDate'
import { UpdateInput } from './UpdateInput';


export const AccountCard = (props) => {

  const [inputOpen,setInputOpen] = useState(false); 

  const handleDelete = async(id) =>{

    await deleteAccount(id); 
    props.flag.setRerender(!props.flag.reRender); 
  }

  const toggleInput = () =>{
    setInputOpen(!inputOpen); 
  }
  

  return (
      
          <div className="card bg-dark text-light h-25 col-5 mt-5 ms-5">
              <div className="card-body">
                  <h5 className="card-title">{props.account.name}</h5>
                  <hr />
                  <p className="card-text">Opening balance $ {props.account.openingBalance}</p>
                  <p className='card-text'><strong>Type</strong> {props.account.accountType.name}</p>
                  <p className='card-text'><strong>Number </strong> {props.account.accountNumber}</p>
                  <hr />
                  {
                    inputOpen && <UpdateInput reRender={props.flag.reRender} setRerender={props.flag.setRerender} accountId={props.account.id} toggleInput={toggleInput}/>
                  }
                  { 

                    getRole() === 'ROLE_ADMIN' &&
                    <div>
                      <button data-testid="update-button" className='btn btn-info' onClick={toggleInput}>Update</button>
                      <button className='btn btn-danger ms-3' onClick={()=> handleDelete(props.account.id)}>Delete</button>
                      <hr />
                    </div>
                  }
                  
                  <span>Created {formatDate(props.account.dateOpened)}</span>
                
              </div>
          </div>
      
  )
}
