import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import {AccountCard} from '../components/AccountCard'
import { formatDate } from "../moment/formatDate"

const props = {
    name:'Account name',
    currentBalance:2500,
    dateOpened:'2022-06-22T10:58',
    accountType:{
        name:'Something'
    }
}

test('Should render the AccountCard component with the specified props',()=>{


    const component = render(<AccountCard account={props}/>);

    const name = component.getByText(props.name); 
    const openingBalance = component.getByText(`Current balance $ ${props.currentBalance}`);
    const dateOpened = component.getByText(`Created ${formatDate(props.dateOpened)}`);
    const accountTypeName = component.getByText(props.accountType.name); 

    expect(name).toHaveTextContent(props.name); 
    expect(openingBalance).toHaveTextContent(`Current balance $ ${props.currentBalance}`);
    expect(dateOpened).toHaveTextContent(`Created ${formatDate(props.dateOpened)}`); 
    expect(accountTypeName).toHaveTextContent(props.accountType.name); 
    
});