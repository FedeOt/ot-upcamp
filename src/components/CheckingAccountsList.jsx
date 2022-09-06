import {useState,useEffect} from 'react';
import { getAllCheckingAccounts } from '../api';
import { AccountCard } from './AccountCard';


export const CheckingAccountsList = () => {

    
     
    const [checkingAccounts,setCheckingAccounts] = useState([]);
    const [loading,setLoading] = useState(true); 

    useEffect(()=>{

      getAllCheckingAccounts().then(response => {
          setCheckingAccounts(response.data);
          setLoading(false); 
      })

    },[]); 



  return (
    <div className='row row-cols-4'>

        {
          !loading && checkingAccounts.map((element, index) => <AccountCard key={index} account={element} />)
        }

      </div>
  )
}
