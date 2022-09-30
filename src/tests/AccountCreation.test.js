import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, waitFor } from '@testing-library/react';
import { createCheckingAccount } from '../api';
import {CheckingAccountCreation} from '../components/CheckingAccountCreation'


jest.mock('../api/index.js');

const response = {
  status:200
}

const account = {
  name:{value:'testing'},
  value:{value:'1200'}
}


test('Should create the checking account with the given info',async()=>{

    

    createCheckingAccount.mockResolvedValue(response); 
    
    const form = render(<CheckingAccountCreation/>)

    const name = form.getByTestId('account-name');
    const deposit = form.getByTestId('initial-deposit');
    const submit = form.getByTestId('submit'); 

    fireEvent.change(name,{target:account.name}); 
    fireEvent.change(deposit,{target:account.value}); 
    fireEvent.click(submit);  

    await waitFor(()=>{
      expect(form.getByTestId('success')).toBeInTheDocument(); 
    })
  
    
})