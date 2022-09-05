import {useState,useEffect ,useContext} from 'react';
import { getAllCheckingAccounts } from '../api';
import { myContext } from '../context/Authcontext';
import { AccountCard } from './AccountCard';


export const CheckingAccountsList = () => {

    
    const {user} = useContext(myContext); 
    const [checkingAccounts,setCheckingAccounts] = useState([]);
    const [loading,setLoading] = useState(true); 

    useEffect(()=>{

      getAllCheckingAccounts(user).then(response => {
          setCheckingAccounts(response.data);
          setLoading(false); 
      })

    },[user]); 



  return (
    <div className='row row-cols-4'>

        {
          !loading && checkingAccounts.map((element, index) => <AccountCard key={index} account={element} />)
        }

      </div>
  )
}
