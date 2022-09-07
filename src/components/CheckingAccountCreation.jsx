import { useState } from "react";
import { postCheckingAccounts } from "../api";

const initialState = {
    accountType:'SCK',
    accountOwnership:'IND',
    accountName:'',
    accountOpening:''
}

export const CheckingAccountCreation = () => {

    const [account,setAccount] = useState(initialState); 
    const [successAlert,setSuccessAlert] = useState(false); 
    const [depositError,setDepositError] = useState(false); 

    const handleInputChange = ({target}) =>{

        setAccount({
            ...account,
            [target.name]:target.value
        })

    }
    

    const resetForm = ()=>{
       setAccount(initialState); 
    }
    

    const handleFormSubmit = async(e) =>{
        e.preventDefault(); 
        
        if(Number(account.accountOpening) < 25){
            return setDepositError(true); 
        }


        const response = await postCheckingAccounts(account)

        if(response.status === 200){
            setSuccessAlert(true);
            resetForm(); 
            
        }
    }

    return (
        <div style={{ paddingTop: 120 }}>

            <form onSubmit={handleFormSubmit} className="create-account-form">
                <h3>New Checking Account</h3>
                <div>
                    <strong className="d-block ms-3 mb-2">Select Checking Account Type</strong>
                    <div className="d-inline">
                        <input onChange={handleInputChange} name="accountType" className="form-check-input ms-3" type="radio" value="SCK" id="flexCheckDisabled" checked={account.accountType === "SCK"} />
                        <label className="ms-1"> Standard checking</label>

                    </div>

                    <div className="d-inline">
                        <input onChange={handleInputChange} name="accountType" className="form-check-input ms-3" type="radio" value="ICK" id="flexCheckDisabled" checked={account.accountType === "ICK"} />
                        <label className="ms-1"> Interest checking</label>

                    </div>

                    

                </div>

                <div>
                    <strong className="d-block mt-4 ms-3 mb-2">Select Account Ownership</strong>
                    <div className="d-inline">
                        <input onChange={handleInputChange} name="accountOwnership" className="form-check-input ms-3" type="radio" value="IND" id="flexCheckDisabled" checked={account.accountOwnership === "IND"} />
                        <label className="ms-1"> Individual</label>

                    </div>

                    <div className="d-inline">
                        <input onChange={handleInputChange} name="accountOwnership" className="form-check-input ms-3" type="radio" value="JNT" id="flexCheckDisabled" checked={account.accountOwnership === "JNT"} />
                        <label className="ms-1"> Joint</label>

                    </div>

                    

                </div>

                <div className="ms-3 mt-4">
                    <strong>Account Name</strong>
                    <input type="text" onChange={handleInputChange} autoComplete="off" name="accountName" className="form-control w-75" value={account.accountName}/>

                </div>
                <div className="ms-3 mt-4">
                    <strong>Initial deposit</strong>
                    <input type="text" onChange={handleInputChange} autoComplete="off" name="accountOpening" className="form-control w-75" value={account.accountOpening} />
                    <span className={`${depositError ? 'text-danger' : 'text-dark'}`}>Minimum opening deposit is $25.00</span>

                </div>

                <div className="ms-3 mt-4">
                    <button type="submit" className="btn btn-success">Create</button>
                    <button onClick={resetForm} className="btn btn-danger ms-3">Cancel</button>

                </div>
                
                


            </form>
            {
                    successAlert && <div style={{marginLeft:400}} className="alert alert-success w-50 mt-3">The account has been created</div>
            }
        </div>

    )
}
