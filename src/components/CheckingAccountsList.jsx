import {useState,useEffect} from 'react';
import { getAllCheckingAccounts } from '../api';
import { AccountCard } from './AccountCard';




export const CheckingAccountsList = () => {
  
    const [checkingAccounts,setCheckingAccounts] = useState([]);
    const [loading,setLoading] = useState(true); 
    const [reRender,setRerender] = useState(false); 
    

    

    useEffect(()=>{

      getAllCheckingAccounts().then(response => {
          setCheckingAccounts(response.data);
          setLoading(false); 
      })
      

    },[reRender]); 



  return (
    <div>
      
      <h3 className='p-4 text-center'>Checking Accounts</h3>
      <hr />
      <div className='row row-cols-4'>

        {
          !loading && checkingAccounts.map((element, index) => <AccountCard key={index} account={element} flag={{reRender,setRerender}}/>)
        }

      </div>

    </div>
    
  )
}
