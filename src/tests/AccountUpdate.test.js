import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { getRole } from '../helpers/sessionStorage'; 
import { AccountCard } from "../components/AccountCard";
import { updateAccount } from "../api";


jest.mock('../helpers/sessionStorage'); 
jest.mock('../api/index'); 

const inputValue = "New name";

const account = {
  name: "Account name",
  openingBalance: 2500,
  dateOpened: "2022-06-22T10:58",
  accountType: {
    name: "Something",
  },
};

const updatedAccount = {
  name: inputValue,
  openingBalance: 2500,
  dateOpened: "2022-06-22T10:58",
  accountType: {
    name: "Something",
  },
};


const setRerender = () => false;
const reRender = false;

test("Should update the account with the new name", async () => {
  getRole.mockReturnValue("ROLE_ADMIN");
  updateAccount.mockResolvedValue(); 
   
   const updateComponent = render(
     <AccountCard account={account} flag={{ reRender, setRerender }} />
   );

  const updateButton = updateComponent.getByTestId("update-button"); 
  fireEvent.click(updateButton);
  const updateInput = updateComponent.getByTestId("update-input");
  const submitButton = updateComponent.getByTestId("submit");
  fireEvent.change(updateInput, { target: { value: inputValue } });
  fireEvent.click(submitButton);

  await waitFor(()=>{
    expect(updateInput).not.toBeInTheDocument();
  })

  const updated = render(<AccountCard account={updatedAccount} flag={{ reRender, setRerender }} />)

  await waitFor(()=>{
    expect(updated.getByText(inputValue)).toBeInTheDocument();
  })

});
