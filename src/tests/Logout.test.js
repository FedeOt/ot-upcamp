import { fireEvent, render, waitFor } from "@testing-library/react";
import axios from "axios";
import { Logout } from "../components/Logout";
import { Login } from "../components/Login";


const credentials = {
    username:'jsmith@demo.io',
    password:'Demo123!'
}
const testingToken = 'SOME_TOKEN'; 
const testingRole = 'ROLE_USER';

const mockedUsedNavigate = jest.fn();


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
   useNavigate: () => mockedUsedNavigate,
}));


jest.mock("axios"); 


describe('Login/logout test suite',()=>{

    it('Should redirect to the login after logout',()=>{
    
        const LogoutComponent = render(<Logout/>); 
        const logOutBtn = LogoutComponent.getByTestId('logout'); 
        fireEvent.click(logOutBtn); 
    
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/'); 
    
    })

    it('Should access into the app after login',async()=>{
        const login = render(<Login/>);
        
        axios.post.mockResolvedValue(testingToken); 
        axios.get.mockResolvedValue(testingRole); 

        const inputUsername = login.getByTestId('username');
        const inputPassword = login.getByTestId('password'); 
        const submitBtn = login.getByTestId('login-submit'); 
        fireEvent.change(inputUsername,{target:{value:credentials.username}}); 
        fireEvent.change(inputPassword,{target:{value:credentials.password}}); 
        fireEvent.click(submitBtn); 

        await waitFor(()=>{
            expect(mockedUsedNavigate).toHaveBeenCalled(); 
        })




    })


})
