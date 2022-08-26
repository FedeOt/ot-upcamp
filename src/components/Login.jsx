import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { myContext } from '../context/Authcontext'
import axios from 'axios'
import '../styles/Login.css'
import { useNavigate } from 'react-router-dom'


const initialState = {
    username:'',
    password:''
}

export const Login = () => {

  const {setUser} = useContext(myContext);
  
  const nav = useNavigate(); 


  const [loginForm,setLoginForm] = useState(initialState); 

  const handleInputChange = ({target}) =>{

    setLoginForm({
      ...loginForm,
      [target.name]:target.value})

  }

  const handleSubmit = async(e) =>{
    e.preventDefault(); 
    const response = await axios.post(`http://localhost:8080/bank/api/v1/auth?password=${loginForm.password}&username=${loginForm.username}`);
    const token = response.data.authToken; 
    setUser(token); 
    console.log(token);   
    nav('/home'); 

  }


  return (
    <form onSubmit={handleSubmit} className='login-form'>
        <input onChange={handleInputChange} value={loginForm.username} autoComplete="off" name='username' className='form-control w-75 mx-auto mt-5 text-center' type="text" placeholder='Username' />
        <input onChange={handleInputChange} value={loginForm.password} name='password' className='form-control w-75 mx-auto mt-4 text-center' type="password" placeholder='Password' />
        <button type='submit' className='btn btn-primary w-75 d-block mx-auto mt-5'>Log In</button>
    </form>
  )
}
