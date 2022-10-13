import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../api";
import { ValidateFields } from "../helpers/validateRegisterFields";
import { InputText } from "./InputText";
import { InvalidField } from "./InvalidField";
import { RadioButton } from "./RadioButton";

 
const initialState = {
  address: "",
  country: "",
  dob: "",
  emailAddress: "",
  firstName: "",
  gender: "M",
  homePhone: "",
  lastName: "",
  locality: "",
  mobilePhone: "",
  password: "",
  postalCode: "",
  region: "",
  ssn: "",
  title: "Mr.",
  workPhone: "",
};

export const Registration = () => {

  const nav = useNavigate(); 
  const [formValues, setFormValues] = useState(initialState);
  const [errors,setErrors] = useState({}); 
  const [apiError,setApiError] = useState(null); 

  const handleInputChange = ({ target }) => {
    setErrors({
      ...errors,
      [target.name]:false
    }); 
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const errors = ValidateFields(formValues); 
    
    if(Object.keys(errors).length > 0){
      setErrors(errors); 
    }else{
        
        try{
          await createNewUser(formValues);
          nav('/');
        }catch(err){
          setApiError(err.response.data); 
          console.log(err.response.data); 
        }
    }

   
  };

  return (
    <div style={{ paddingTop: 90 }}>
      <div style={{marginLeft:400}}>
      {
        apiError && apiError.map((el,inx) => <div className="w-75 alert alert-danger" key={inx}>{el}</div>)
      }
      </div>
      

      <form onSubmit={handleSubmit} className="create-user-form">
        <h3>Create new user</h3>
        <hr />
        <div className="row mx-auto">
          <div className="ms-4 mt-4 col-5">
            <div className="mt-3 mb-4">
              <strong>Title</strong>
              <RadioButton
                onChange={handleInputChange}
                name="title"
                checked={formValues.title === "Mr."}
                value="Mr."
                label="Mr."
              />
              <RadioButton
                onChange={handleInputChange}
                name="title"
                checked={formValues.title === "Mrs."}
                value="Mrs."
                label="Mrs."
              />
              <RadioButton
                onChange={handleInputChange}
                name="title"
                checked={formValues.title === "Ms."}
                value="Ms."
                label="Ms."
              />
            </div>

            <div className="mt-3">
              <strong>Gender</strong>
              <RadioButton
                onChange={handleInputChange}
                name="gender"
                checked={formValues.gender === "M"}
                value="M"
                label="M"
              />
              <RadioButton
                onChange={handleInputChange}
                name="gender"
                checked={formValues.gender === "F"}
                value="F"
                label="F"
              />
            </div>
            <hr />
            <div className="mt-5">
              <strong>First Name</strong>
              <InputText
                onChange={handleInputChange}
                name="firstName"
                value={formValues.firstName}
              />
              {
                errors.firstName && <InvalidField text="*First name is required"/>
              }
              
            </div>

            <div className="mt-3">
              <strong>Last name</strong>
              <InputText
                onChange={handleInputChange}
                name="lastName"
                value={formValues.lastName}
              />
               {
                errors.lastName && <InvalidField text="*Last name is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>Email</strong>
              <InputText
                onChange={handleInputChange}
                name="emailAddress"
                value={formValues.emailAddress}
              />
              {
                errors.emailAddress && <InvalidField text="*Invalid email address"/>
              }
            </div>

            <div className="mt-3">
              <strong>Password</strong>
              <input
                type="password"
                onChange={handleInputChange}
                name="password"
                value={formValues.password}
                className="form-control w-75"
              />
              {
                errors.password && <InvalidField text="*Password must be at least 6 characters long"/>
              }
            </div>

            <div className="mt-3">
              <strong>Address</strong>
              <InputText
                onChange={handleInputChange}
                name="address"
                value={formValues.address}
              />

              {
                errors.address && <InvalidField text="*Address is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>Birth Date</strong>
              <InputText
                placeholder="mm/dd/yyyy"
                onChange={handleInputChange}
                name="dob"
                value={formValues.dob}
              />
              {
                errors.dob && <InvalidField text="*Invalid date"/>
              }
            </div>
          </div>

          <div className="ms-4 mt-4 col-5">
            <div className="mt-3">
              <strong>Work Phone</strong>
              <InputText
                onChange={handleInputChange}
                name="workPhone"
                value={formValues.workPhone}
              />
              {
                errors.workPhone && <InvalidField text="*Work phone is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>Locality</strong>
              <InputText
                onChange={handleInputChange}
                name="locality"
                value={formValues.locality}
              />
              {
                errors.locality && <InvalidField text="*Locality is required"/>
              }
            </div>
            <div className="mt-3">
              <strong>Mobile Phone</strong>
              <InputText
                onChange={handleInputChange}
                name="mobilePhone"
                value={formValues.mobilePhone}
              />
              {
                errors.mobilePhone && <InvalidField text="*Mobile phone is required"/>
              }
            </div>
            <div className="mt-3">
              <strong>Region</strong>
              <InputText
                onChange={handleInputChange}
                name="region"
                value={formValues.region}
              />
              {
                errors.region && <InvalidField text="*Region is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>SSN</strong>
              <InputText
                onChange={handleInputChange}
                name="ssn"
                value={formValues.ssn}
              />
              {
                errors.ssn && <InvalidField text="*SSN is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>Home Phone</strong>
              <InputText
                onChange={handleInputChange}
                name="homePhone"
                value={formValues.homePhone}
              />
              {
                errors.homePhone && <InvalidField text="*Home phone is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>Postal Code</strong>
              <InputText
                onChange={handleInputChange}
                name="postalCode"
                value={formValues.postalCode}
              />
              {
                errors.postalCode && <InvalidField text="*Postal code is required"/>   
              }
            </div>

            <div className="mt-3">
              <strong>Country</strong>
              <InputText
                onChange={handleInputChange}
                name="country"
                value={formValues.country}
              />
              {
                errors.country && <InvalidField text="*Country is required"/>
              }
            </div>
          </div>
        </div>
              <hr />
        <button type="submit" style={{height:50}} className="btn btn-info d-block w-25 ms-5 mt-4">
          Create
        </button>
      </form>
      
    </div>
  );
};
