import { fireEvent, render, waitFor } from "@testing-library/react";
import { addApiRole, createNewUser } from "../api";
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
    homePhone: "99999999",
    lastName: "SomeLastName",
    locality: "SomeLocality",
    mobilePhone: "99999999",
    password: "demo123!",
    postalCode: "33101",
    region: "SomeRegion",
    ssn: "457-88-9677",
    workPhone: "99999999",
  };

test('Should redirect to the login after creating a new user', async()=>{

    createNewUser.mockResolvedValue({data:{
        id:150
    }})
    addApiRole.mockResolvedValue({}); 
    const view = render(<Registration/>);

    const inputs = {};

    for(let field in testUser){
        inputs[`${field}`] = view.getByTestId(`registration-${field}`); 
    }

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



