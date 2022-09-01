import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AccountCard } from '../components/AccountCard';
import { Sidebar } from '../components/Sidebar';
import { myContext } from '../context/Authcontext';


export const MainScreen = () => {

  const {user} = useContext(myContext); 
  const [checkingAccounts,setCheckingAccounts] = useState([]);
  const [loading,setLoading] = useState(true); 

  useEffect(()=>{

      axios.get('http://localhost:8080/bank/api/v1/user/account/checking',{
        headers:{
          Authorization:`Bearer ${user}`
        }
      }).then(response => {
          setCheckingAccounts(response.data);
          setLoading(false); 
      })

  },[]); 

  
  return (
    <div>
      
        <Sidebar />
      

      <div className='row row-cols-4'>

        {
          !loading && checkingAccounts.map((element, index) => <AccountCard key={index} account={element} />)
        }

      </div>





    </div>
  )
}
