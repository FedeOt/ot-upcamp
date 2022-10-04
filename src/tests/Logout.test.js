import { fireEvent, render } from "@testing-library/react";
import axios from "axios";
import { Logout } from "../components/Logout";
import { Login } from "../components/Login";



const mockedUsedNavigate = jest.fn();

const credentials = {
    username:'jsmith@demo.io',
    password:'Demo123!'
}
const testingToken = 'SOME_TOKEN'; 
const testingRole = 'ROLE_USER';

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

jest.mock('axios');



describe('Login/logout test suite',()=>{

    it('Should redirect to the login after logout',()=>{
    
        const LogoutComponent = render(<Logout/>); 
        const logOutBtn = LogoutComponent.getByTestId('logout'); 
        fireEvent.click(logOutBtn); 
    
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/'); 
    
    
    
    })

    it('Should access into the app after login',()=>{
        const login = render(<Login/>);
        
        axios.post.mockResolvedValue(testingToken); 
        axios.get.mockResolvedValue(testingRole); 
         




    })


})
