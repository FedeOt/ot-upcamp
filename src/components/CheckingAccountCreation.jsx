import { useState } from "react";
import { postCheckingAccounts } from "../api";



export const CheckingAccountCreation = () => {

    const [accountType,setAccountType] = useState("SCK"); 
    const [accountOwnership,setAccountOwnership] = useState("IND");
    const [accountName,setAccountName] = useState("");
    const [accountOpening,setAccountOpening] = useState(""); 
    const [successAlert,setSuccessAlert] = useState(false); 


    const handleFormSubmit = async(e) =>{
        e.preventDefault(); 
        const response = await postCheckingAccounts({
            accountType,
            accountOwnership,
            accountName,
            accountOpening
        })

        if(response.status === 200){
            setSuccessAlert(true); 
        }
    }

    return (
        <div style={{ paddingTop: 120 }}>

            <form onSubmit={handleFormSubmit} className="create-account-form">
                <h3>New Checking Account</h3>
                <div>
                    <strong className="d-block ms-3 mb-2">Select Checking Account Type</strong>
                    <div className="d-inline">
                        <input onChange={(e)=> setAccountType(e.target.value)} name="accountType" className="form-check-input ms-3" type="radio" value="SCK" id="flexCheckDisabled" checked={accountType === "SCK"} />
                        <label className="ms-1"> Standard checking</label>

                    </div>

                    <div className="d-inline">
                        <input onChange={(e)=> setAccountType(e.target.value)} name="accountType" className="form-check-input ms-3" type="radio" value="ICK" id="flexCheckDisabled" checked={accountType === "ICK"} />
                        <label className="ms-1"> Interest checking</label>

                    </div>

                    

                </div>

                <div>
                    <strong className="d-block mt-5 ms-3 mb-2">Select Account Ownership</strong>
                    <div className="d-inline">
                        <input onChange={(e)=> setAccountOwnership(e.target.value)} name="accountOwnership" className="form-check-input ms-3" type="radio" value="IND" id="flexCheckDisabled" checked={accountOwnership === "IND"} />
                        <label className="ms-1"> Individual</label>

                    </div>

                    <div className="d-inline">
                        <input onChange={(e)=> setAccountOwnership(e.target.value)} name="accountOwnership" className="form-check-input ms-3" type="radio" value="JNT" id="flexCheckDisabled" checked={accountOwnership === "JNT"} />
                        <label className="ms-1"> Joint</label>

                    </div>

                    

                </div>

                <div className="ms-3 mt-4">
                    <strong>Account Name</strong>
                    <input type="text" onChange={(e)=>setAccountName(e.target.value)} className="form-control w-75" value={accountName}/>

                </div>
                <div className="ms-3 mt-4">
                    <strong>Initial deposit</strong>
                    <input type="text" onChange={(e)=>setAccountOpening(e.target.value)} className="form-control w-75" value={accountOpening} />

                </div>

                <div className="ms-3 mt-4">
                    <button type="submit" className="btn btn-success">Crear</button>
                    <button className="btn btn-danger ms-3">Cancelar</button>

                </div>
                


            </form>
            
        </div>

    )
}
