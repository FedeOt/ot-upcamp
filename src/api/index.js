import axios from "axios";

export const getAllCheckingAccounts = (user) =>{

    
    return axios.get('http://localhost:8080/bank/api/v1/user/account/checking',{
        headers:{
          Authorization:`Bearer ${user}`
        }
      })

}