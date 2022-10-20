import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getAllCheckingAccounts, transaction } from '../api';

export const Deposit = () => {


    const [accounts,setAccounts] = useState([]); 
    const [loading,setLoading] = useState(true); 
    const [transactionValues,setTransactionValues] = useState({
        amount:'',
        currentAccount:''
    }) 

    useEffect(()=>{
        getAllCheckingAccounts()
        .then(response =>{
            setAccounts(response.data);
            setLoading(false);  
        },[]); 
    })

    const handleInputChange = ({target})=>{
        
        setTransactionValues({
            ...transactionValues,
            [target.name]:target.value
        }) 
    }

    const handleSubmit = async(e) =>{
        e.preventDefault(); 
        console.log(transactionValues); 
        const response = await transaction('DPT',transactionValues.amount,'Deposit',transactionValues.currentAccount); 
     

    }


  return (
    <div className='p-5'> 
        <form onSubmit={handleSubmit} className='pt-5 border border-dark w-50 p-5 rounded' style={{marginLeft:450}}>
            <h3>Deposit</h3>
            <hr/>
            <span>Select account</span>
            <select name='currentAccount' className='form-select w-25' onChange={handleInputChange}>
                <option value="None">-----</option>
                {
                    !loading && accounts.map((element,index)=> <option key={index} value={element.id}>{element.name}</option>)
                }
            </select>
            <div className='mt-4'>
                <span className='mt-4'>Select amount</span>
                <input onChange={handleInputChange} name='amount' type="text" className='form-control w-25' placeholder='Amount'  />
            </div>

            <button className='btn btn-success mt-4'>Deposit</button>
            
        </form>

    </div>
  )
}
