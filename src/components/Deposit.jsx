import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getAllCheckingAccounts } from '../api';

export const Deposit = () => {


    const [accounts,setAccounts] = useState([]); 
    const [loading,setLoading] = useState(true); 
    const [currentAccount,setCurrentAccount] = useState(''); 
    const [amount,setAmount] = useState(''); 

    useEffect(()=>{
        getAllCheckingAccounts()
        .then(response =>{
            setAccounts(response.data);
            setLoading(false);  
        },[]); 
    })

    const handleSelectChange = ({target})=>{
        
        setCurrentAccount(target.value); 
    }


  return (
    <div className='p-5'> 
        <div className='pt-5 border border-dark w-50 p-5 rounded' style={{marginLeft:450}}>
            <h3>Deposit</h3>
            <span>Select account</span>
            <select className='form-select w-25' onChange={handleSelectChange}>
                {
                    !loading && accounts.map((element,index)=> <option key={index} value={element.id}>{element.name}</option>)
                }
            </select>
            <div className='mt-4'>
                <span className='mt-4'>Select amount</span>
                <input type="text" className='form-control w-25' placeholder='Amount'  />
            </div>

            <button className='btn btn-success mt-4'>Deposit</button>
            
        </div>

    </div>
  )
}
