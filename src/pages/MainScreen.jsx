import React from 'react'
import { useContext } from 'react';
import { Sidebar } from '../components/Sidebar';
import { myContext } from '../context/Authcontext';


export const MainScreen = () => {

   
  
  const {user} = useContext(myContext); 

  
  return (
    <div>
        <Sidebar/>
        <div className='alert alert-info' style={{overflowWrap:'break-word'}}>
          Current token: {user}
        </div>
         
      

      
    </div>
  )
}
