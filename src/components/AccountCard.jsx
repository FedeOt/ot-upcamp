import { deleteAccount } from '../api'
import { formatDate } from '../moment/formatDate'


export const AccountCard = (props) => {


  const handleDelete = async(id) =>{

    const response = await deleteAccount(id);
    console.log(response.status); 
    props.flag.setRerender(!props.flag.reRender); 


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

                    sessionStorage.getItem('role') === 'ROLE_ADMIN' &&
                    <div>
                      <button className='btn btn-info'>Update</button>
                      <button className='btn btn-danger ms-3' onClick={()=> handleDelete(props.account.id)}>Delete</button>
                      <hr />
                    </div>
                  }
                  
                  <span>Created {formatDate(props.account.dateOpened)}</span>
              </div>
          </div>
      
  )
}
