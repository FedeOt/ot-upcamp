import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { getAllCheckingAccounts, executeTransaction } from '../api';

export const Transaction = (props) => {


    const [accounts,setAccounts] = useState([]); 
    const [loading,setLoading] = useState(true); 
    const [transactionValues,setTransactionValues] = useState({
        amount:'',
        id:''
    }); 
    const [error,setError] = useState(false); 
    const [success,setSuccess] = useState(false); 

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
        try{
            await executeTransaction({
                ...transactionValues,
                type:props.type,
                description:props.type,
                
            });
            setSuccess(true); 
            setTimeout(() => {
                setSuccess(false); 
            }, 3000);

        }catch(err){
            setError(true);
            console.log(err);  
        }
        
        
        

    }


  return (
    <div className='p-5'> 
        <form onSubmit={handleSubmit} className='pt-5 border border-dark w-50 p-5 rounded' style={{marginLeft:450}}>
            <h3>{props.type === 'DPT' ? 'Deposit': 'Withdrawal'}</h3>
            <hr/>
            <span>Select account</span>
            <select data-testid="transaction-account" name='id' className='form-select w-25' onChange={handleInputChange}>
                <option value="None">-----</option>
                {
                    !loading && accounts.map((element,index)=> <option key={index} value={element.id}>{element.name}</option>)
                }
            </select>
            <div className='mt-4'>
                <span className='mt-4'>Select amount</span>
                <input data-testid="transaction-amount" onChange={handleInputChange} name='amount' type="text" className='form-control w-25' placeholder='Amount'  />
            </div>

            <button data-testid="transaction-submit" className='btn btn-success mt-4'>{props.type === 'DPT' ? 'Deposit': 'Withdrawal' }</button>
            
        </form>

        {
            error && <div className='alert alert-danger w-50 mt-3' style={{marginLeft:450}}> Something went wrong! </div>
        }

        {
            success && <div data-testid="transaction-success" className='alert alert-success w-50 mt-3' style={{marginLeft:450}}>Transaction has been done</div>
        }

    </div>
  )
}
