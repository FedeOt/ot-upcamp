import {useState,useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCheckingAccounts } from '../api';
import { updateAccounts } from '../redux/accountSlice';
import { AccountCard } from './AccountCard';




export const CheckingAccountsList = () => {
  
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(true); 
    const [reRender,setRerender] = useState(false); 
     
    const {accounts} = useSelector(state => state.accounts); 
  
    useEffect(()=>{
      
      getAllCheckingAccounts().then(response => {
        dispatch(updateAccounts(response.data))
        setLoading(false); 
      })
      
      
    },[reRender]); 


  return (
    <div>
      
      <h3 className='p-4 text-center'>Checking Accounts</h3>
      <hr />
      <div className='row row-cols-4'>

        {
          !loading && accounts.map((element, index) => <AccountCard key={index} account={element} flag={{reRender,setRerender}}/>)
        }

      </div>

    </div>
    
  )
}
