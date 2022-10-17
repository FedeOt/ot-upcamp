import { fireEvent, render, waitFor } from "@testing-library/react";
import { addRoleApi, createNewUser } from "../api";
import { Registration } from "../components/Registration";



jest.mock('../api/index'); 

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const testUser = {
    address: "Fake street 123th",
    country: "USA",
    dob: "10/10/1990",
    emailAddress: "something@demo.io",
    firstName: "SomeName",
    gender: "M",
    homePhone: "99999999",
    lastName: "SomeLastName",
    locality: "SomeLocality",
    mobilePhone: "99999999",
    password: "demo123!",
    postalCode: "33101",
    region: "SomeRegion",
    ssn: "457-88-9677",
    title: "Mr.",
    workPhone: "99999999",
  };

test('Should redirect to the login after create a new user', async()=>{

    createNewUser.mockResolvedValue({data:{
        id:150
    }})
    addRoleApi.mockResolvedValue({}); 
    const view = render(<Registration/>);

    const inputs = {};

    inputs.address = view.getByTestId('registration-address');  
    inputs.country = view.getByTestId('registration-country');
    inputs.dob = view.getByTestId('registration-dob');
    inputs.emailAddress = view.getByTestId('registration-email'); 
    inputs.firstName = view.getByTestId('registration-firstName'); 
    inputs.homePhone = view.getByTestId('registration-homePhone'); 
    inputs.lastName = view.getByTestId('registration-lastName'); 
    inputs.locality = view.getByTestId('registration-locality'); 
    inputs.mobilePhone = view.getByTestId('registration-mobilePhone'); 
    inputs.password = view.getByTestId('registration-password'); 
    inputs.postalCode = view.getByTestId('registration-postalCode'); 
    inputs.region = view.getByTestId('registration-region'); 
    inputs.ssn = view.getByTestId('registration-ssn'); 
    inputs.workPhone = view.getByTestId('registration-workPhone'); 

    for(let input in inputs){
        fireEvent.change(inputs[`${input}`],
        {target:
            {value:testUser[`${input}`]}
        }); 
    }
    
    const submitBtn = view.getByTestId('registration-submit'); 

    fireEvent.click(submitBtn);

    await waitFor(()=>{

        expect(mockedUsedNavigate).toHaveBeenCalled(); 
    })
    
    



})



