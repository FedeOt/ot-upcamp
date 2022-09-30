import { useState } from "react";
import { createCheckingAccount } from "../api";
import { InputText } from "./InputText";
import { RadioButton } from "./RadioButton";
import { ValidationMessage } from "./ValidationMessage";

const initialState = {
    accountType: 'SCK',
    accountOwnership: 'IND',
    accountName: '',
    accountOpening: ''
}

export const CheckingAccountCreation = () => {

    const [account, setAccount] = useState(initialState);
    const [successAlert, setSuccessAlert] = useState(false);
    const [depositError, setDepositError] = useState(false);
    const [nameError,setNameError] = useState(false); 

    const handleInputChange = ({ target }) => {

        setAccount({
            ...account,
            [target.name]: target.value
        })
        setNameError(false);
        setDepositError(false); 
    }


    const resetForm = () => {
        setAccount(initialState);
        setNameError(false);
        setDepositError(false); 
    }


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if(account.accountName.trim() === ''){
            return setNameError(true); 
        }

        if (Number(account.accountOpening || account.accountOpening === '') < 25) {
            return setDepositError(true);
        }

        const response = await createCheckingAccount(account)

        if (response.status === 200) {
            setSuccessAlert(true);
            resetForm();
            setTimeout(() => {
                setSuccessAlert(false); 
            }, 2000);
        }
    }

    return (
        <div style={{ paddingTop: 120 }}>

            <form onSubmit={handleFormSubmit} className="create-account-form border border-dark">
                <h3 className="bg-dark">New Checking Account</h3>
                <div>
                    <strong className="d-block ms-3 mb-2">Select Account type</strong>
                    <RadioButton label="Standard checking" name="accountType" onChange={handleInputChange} checked={account.accountType === 'SCK'} value="SCK" />
                    <RadioButton label="Interest checking" name="accountType" onChange={handleInputChange} checked={account.accountType === 'ICK'} value="ICK" />
                </div>

                <div>
                    <strong className="d-block mt-4 ms-3 mb-2">Select Account Ownership</strong>
                    <RadioButton label="Individual" name="accountOwnership" onChange={handleInputChange} checked={account.accountOwnership === 'IND'} value="IND" />
                    <RadioButton label="Joint" name="accountOwnership" onChange={handleInputChange} checked={account.accountOwnership === 'JNT'} value="JNT" />    
                </div>

                <div className="ms-3 mt-4">
                    
                    <strong>Account Name</strong>
                    <InputText onChange={handleInputChange} testId="account-name" name="accountName" value={account.accountName}/>
                    <ValidationMessage error={nameError} text="Account name is required"/>

                </div>
                <div className="ms-3 mt-4">
                    <strong>Initial deposit</strong>
                    <InputText onChange={handleInputChange} testId="initial-deposit" name="accountOpening" value={account.accountOpening} />
                    <ValidationMessage error={depositError} text="Minimum opening deposit is $25.00"/>
                    

                </div>

                <div className="ms-3 mt-4">
                    <button data-testid="submit" type="submit" className="btn btn-success">Create</button>
                    <button type="button" onClick={resetForm} className="btn btn-danger ms-3">Cancel</button>

                </div>




            </form>
            {
                successAlert && <div data-testid="success" style={{ marginLeft: 400 }} className="alert alert-success w-50 mt-3">The account has been created</div>
            }
        </div>

    )
}
