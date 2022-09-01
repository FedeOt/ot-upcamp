import React from "react"
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import {AccountCard} from '../components/AccountCard'



test('renders props',()=>{

    
    const props = {
        name:'Testing account',
        openingBalance:2500,
        dateOpened:'02-05-2022',
        accountType:{
            name:'Something'
        }
    }


    const component = render(<AccountCard account={props}/>);

    component.getByText(props.name); 
    component.getByText(`Opening balance $ ${props.openingBalance}`);
    component.getByText(`- Created ${props.dateOpened}`);
    component.getByText(props.accountType.name); 

    



})