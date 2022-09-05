import { createContext, useState } from 'react'


export const myContext = createContext(); 

export const Authcontext = ({children}) => {

  const [user,setUser] = useState('');


  return (
    <myContext.Provider
    value={{user,setUser}}
    >
        {children}
    </myContext.Provider>
  )
}
