import '@testing-library/jest-dom/extend-expect'
import {fireEvent, render} from '@testing-library/react'
import { CheckingAccountCreation } from '../components/CheckingAccountCreation'



test('Should create the checking account with the given info',()=>{

    const accountData = {
        name:'testing account',
        deposit:'2300'
    }

    const form = render(<CheckingAccountCreation/>); 
    const nameInput = form.getByTestId('account-name'); 
    const depositInput = form.getByTestId('initial-deposit'); 
    const submitBtn = form.getByTestId('submit'); 

    fireEvent.change(nameInput,{target:{value:accountData.name}}); 
    fireEvent.change(depositInput,{target:{value:accountData.deposit}});
    fireEvent.click(submitBtn); 


    //THIS TEST IS NOT DONE YET.














})