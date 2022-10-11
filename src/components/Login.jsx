import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getAuthToken } from '../api'



const initialState = {
    username:'',
    password:''
}

export const Login = () => {
  
  const nav = useNavigate(); 


  const [credentials,setCredentials] = useState(initialState); 
  const [error,setError] = useState(false); 

  const handleInputChange = ({target}) =>{

    setCredentials({
      ...credentials,
      [target.name]:target.value})

  }

  const handleSubmit = async(e) =>{
    e.preventDefault(); 

    try{

      const responseToken = await getAuthToken(credentials); 
      const token = responseToken.data.authToken;
      
      const responseRole = await getAuthToken(token); 

      const role = responseRole.data[0].authority + responseRole.data[1].authority ;

      if(role.includes('ADMIN')){
         sessionStorage.setItem('role','ROLE_ADMIN');
      }
      if(role.includes('USER')){
         sessionStorage.setItem('role','ROLE_USER'); 
      }
      
      sessionStorage.setItem('token',token); 
      
      nav('/bank/accounts'); 

    }catch(error){

      setError(true); 


    }
    

  }


  return (
    
      <form onSubmit={handleSubmit} className='login-form'>
        <input data-testid="username" onChange={handleInputChange} value={credentials.username} autoComplete="off" name='username' className='form-control w-75 mx-auto mt-5 text-center' type="text" placeholder='Username' />
        <input data-testid="password" onChange={handleInputChange} value={credentials.password} name='password' className='form-control w-75 mx-auto mt-4 text-center' type="password" placeholder='Password' />
        <button data-testid="login-submit" type='submit' className='btn btn-primary w-75 d-block mx-auto mt-5'>Log In</button>
        <hr />
        {
        error && <div className='alert alert-danger mt-2 text-center'>Wrong credentials!</div>
        }
      </form>
      
      
    
    
    
  )
}
