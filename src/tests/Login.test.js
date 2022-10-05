import { fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { Login } from "../components/Login";



const credentials = {
    username:'jsmith@demo.io',
    password:'Demo123!'
}
const testingToken = 'SOME_TOKEN'; 
const testingRole = 'ROLE_USER';

const mockedUsedNavigate = jest.fn();

jest.mock('axios'); 

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
}));



test('Should access into the app after login',async()=>{
    
    const login = render(<Login/>);
    
    axios.post.mockResolvedValue({data:testingToken});  
    axios.get.mockResolvedValue({data:[{authority:testingRole},'']}); 

    const inputUsername = login.getByTestId('username');
    const inputPassword = login.getByTestId('password'); 
    const submitBtn = login.getByTestId('login-submit'); 
    act(()=>{
        fireEvent.change(inputUsername,{target:{value:credentials.username}}); 
        fireEvent.change(inputPassword,{target:{value:credentials.password}}); 
        fireEvent.click(submitBtn);
    })
     
    
    await waitFor(()=>{
        expect(mockedUsedNavigate).toHaveBeenCalled(); 
    })
    




})
