import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getAllCheckingAccounts } from '../api';

export const Deposit = () => {


    const [accounts,setAccounts] = useState([]); 
    const [loading,setLoading] = useState(true); 

    useEffect(()=>{
        getAllCheckingAccounts()
        .then(response =>{
            setAccounts(response.data);
            setLoading(false);  
        },[]); 
    })

    const handleSelectChange = ({target})=>{
        console.log(target.value); 
    }


  return (
    <div> 
        <h3>Deposit</h3>
        <select onChange={handleSelectChange}>
            {
                !loading && accounts.map((element,index)=> <option key={index} value={element.id}>{element.name}</option>)
            }
            
            
        </select>

    </div>
  )
}
