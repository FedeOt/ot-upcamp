import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import {AccountCard} from '../components/AccountCard'
import { formatDate } from "../moment/formatDate"



test('Should render the AccountCard component with the specified props',()=>{

    
    const props = {
        name:'Account name',
        openingBalance:2500,
        dateOpened:'2022-06-22T10:58',
        accountType:{
            name:'Something'
        }
    }


    const component = render(<AccountCard account={props}/>);

    const name = component.getByText(props.name); 
    const openingBalance = component.getByText(`Opening balance $ ${props.openingBalance}`);
    const dateOpened = component.getByText(`Created ${formatDate(props.dateOpened)}`);
    const accountTypeName = component.getByText(props.accountType.name); 

    expect(name).toHaveTextContent(props.name); 
    expect(openingBalance).toHaveTextContent(`Opening balance $ ${props.openingBalance}`);
    expect(dateOpened).toHaveTextContent(`Created ${formatDate(props.dateOpened)}`); 
    expect(accountTypeName).toHaveTextContent(props.accountType.name); 
    
});