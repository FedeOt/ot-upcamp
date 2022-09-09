import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render} from '@testing-library/react'
import axios from 'axios'
import { CheckingAccountCreation } from '../components/CheckingAccountCreation'

//this test is not finished yet

test('Should create the checking account with the given info',async()=>{

    const accountData = {
        name:'testing account',
        deposit:'2300'
    }
    
    try{
        const response = await axios.post(('http://localhost:8080/bank/api/v1/auth', {},
        {
          params: {
            username: 'jsmith@demo.io',
            password: 'Demo123!'
          }
        }
        ));
        sessionStorage.setItem('token',response.data.authToken); 
    }catch(err){

        console.log(err); 

    }
    
    const form = render(<CheckingAccountCreation/>); 

    
    const nameInput = form.getByTestId('account-name'); 
    const depositInput = form.getByTestId('initial-deposit'); 
    const submitBtn = form.getByTestId('submit'); 

    fireEvent.change(nameInput,{target:{value:accountData.name}}); 
    fireEvent.change(depositInput,{target:{value:accountData.deposit}});
    fireEvent.click(submitBtn); 
    expect(form.getByTestId('success')).toBeInTheDocument(); 
})