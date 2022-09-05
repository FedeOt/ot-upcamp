import axios from 'axios'


export const Instance = axios.create({
    
    baseURL:'http://localhost:8080/bank/api/v1',
    headers:{
        'Authorization':`Bearer ${sessionStorage.getItem('token')}`
    }

})
