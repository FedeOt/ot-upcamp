import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { AccountCard } from '../components/AccountCard';



const INPUTVALUE = "New account"; 

const props = {
    name:'Account name',
    openingBalance:2500,
    dateOpened:'2022-06-22T10:58',
    accountType:{
        name:'Something'
    }
}

test('Should update the account with the new name',()=>{

    const updateComponent = render(<AccountCard account={props}/>); 

     
    const updateButton = updateComponent.getByTestId('update-button');  
    fireEvent.click(updateButton); 

    const updateInput = updateComponent.getByTestId('update-input'); 
    fireEvent.change(updateInput,{target:{value:INPUTVALUE}}); 

  

})