import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { getRole } from '../axios/Instance';
import { AccountCard } from '../components/AccountCard';

jest.mock('../axios/instance.js');

const INPUTVALUE = "New account"; 

const account = {
    name:'Account name',
    openingBalance:2500,
    dateOpened:'2022-06-22T10:58',
    accountType:{
        name:'Something'
    }
}

const setRerender = () => false;
const reRender = false;

test('Should update the account with the new name',async()=>{

    
    getRole.mockReturnValue('ROLE_ADMIN'); 

    const updateComponent = render(<AccountCard account={account} flag={{reRender,setRerender}}/>); 

     
    const updateButton = updateComponent.getByTestId('update-button');  
    fireEvent.click(updateButton); 

    const updateInput = updateComponent.getByTestId('update-input');
    const submitButton = updateComponent.getByTestId('submit'); 
    fireEvent.change(updateInput,{target:{value:INPUTVALUE}}); 
    fireEvent.click(submitButton);

    await waitFor(()=>{
        expect(updateInput).not.toBeInTheDocument(); 
    })


  

})