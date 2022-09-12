import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, waitFor } from '@testing-library/react';
import { postCheckingAccounts } from '../api';
import {CheckingAccountCreation} from '../components/CheckingAccountCreation'


jest.mock('../api/index.js');

test('Should create the checking account with the given info',async()=>{

    const response = {
      status:200
    }

    postCheckingAccounts.mockResolvedValue(response); 
    
    const form = render(<CheckingAccountCreation/>)

    const name = form.getByTestId('account-name');
    const deposit = form.getByTestId('initial-deposit');
    const submit = form.getByTestId('submit'); 

    fireEvent.change(name,{target:{value:'testing'}}); 
    fireEvent.change(deposit,{target:{value:'2500'}}); 
    fireEvent.click(submit);  

    await waitFor(()=>{
      expect(form.getByTestId('success')).toBeInTheDocument(); 
    })
    
  


    
})