import { render } from "@testing-library/react";
import { Registration } from "../components/Registration";



jest.mock('../api/index'); 

const testUser = {
    address: "Fake street 123th",
    country: "USA",
    dob: "10/10/1990",
    emailAddress: "something@demo.io",
    firstName: "SomeName",
    gender: "M",
    homePhone: "",
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

test('Should redirect to the login after create a new user',()=>{

    
    const view = render(<Registration/>);
    const addressInput = view.getByTestId('registration-address'); 

    expect(addressInput).toBeInTheDocument(); 






})



