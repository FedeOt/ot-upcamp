import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addApiRole, createNewUser } from "../api";
import { initialState } from "../data/registrationInitialState";
import { validateFields } from "../helpers/validateRegisterFields";
import { InputText } from "./InputText";
import { InvalidFieldMessage } from "./InvalidFieldMessage";
import { RadioButton } from "./RadioButton";




export const Registration = () => {

  const nav = useNavigate(); 
  const [formValues, setFormValues] = useState(initialState);
  const [errors,setErrors] = useState({}); 
  const [apiError,setApiError] = useState(null); 

  const handleInputChange = ({ target }) => {
    setApiError(null); 
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
    const errors = validateFields(formValues); 
    
    if(Object.keys(errors).length > 0){
      setErrors(errors); 
    }else{
        
        try{
          const response = await createNewUser(formValues);
          await addApiRole(response.data.id); 
          nav('/');
        }catch(err){
          console.log(err); 
          setApiError(err.response.data.message); 
        }
    }

   
  };

  return (
    <div style={{ paddingTop: 90 }}>
      <div style={{marginLeft:400}}>
      {
        apiError && <div className="w-75 alert alert-danger">{apiError}</div>
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
                testId="registration-firstName"
              />
              {
                errors.firstName && <InvalidFieldMessage text="*First name is required"/>
              }
              
            </div>

            <div className="mt-3">
              <strong>Last name</strong>
              <InputText
                onChange={handleInputChange}
                name="lastName"
                value={formValues.lastName}
                testId="registration-lastName"
              />
               {
                errors.lastName && <InvalidFieldMessage text="*Last name is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>Email</strong>
              <InputText
                onChange={handleInputChange}
                name="emailAddress"
                value={formValues.emailAddress}
                testId="registration-emailAddress"
              />
              {
                errors.emailAddress && <InvalidFieldMessage text="*Invalid email address"/>
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
                data-testid="registration-password"
              />
              {
                errors.password && <InvalidFieldMessage text="*Password must be at least 6 characters long"/>
              }
            </div>

            <div className="mt-3">
              <strong>Address</strong>
              <InputText
                onChange={handleInputChange}
                name="address"
                value={formValues.address}
                testId="registration-address"
              />

              {
                errors.address && <InvalidFieldMessage text="*Address is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>Birth Date</strong>
              <InputText
                placeholder="mm/dd/yyyy"
                onChange={handleInputChange}
                name="dob"
                value={formValues.dob}
                testId="registration-dob"
              />
              {
                errors.dob && <InvalidFieldMessage text="*Invalid date"/>
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
                testId="registration-workPhone"
              />
              {
                errors.workPhone && <InvalidFieldMessage text="*Work phone is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>Locality</strong>
              <InputText
                onChange={handleInputChange}
                name="locality"
                value={formValues.locality}
                testId="registration-locality"
              />
              {
                errors.locality && <InvalidFieldMessage text="*Locality is required"/>
              }
            </div>
            <div className="mt-3">
              <strong>Mobile Phone</strong>
              <InputText
                onChange={handleInputChange}
                name="mobilePhone"
                value={formValues.mobilePhone}
                testId="registration-mobilePhone"
              />
              {
                errors.mobilePhone && <InvalidFieldMessage text="*Mobile phone is required"/>
              }
            </div>
            <div className="mt-3">
              <strong>Region</strong>
              <InputText
                onChange={handleInputChange}
                name="region"
                value={formValues.region}
                testId="registration-region"
              />
              {
                errors.region && <InvalidFieldMessage text="*Region is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>SSN</strong>
              <InputText
                placeholder="###-##-####"
                onChange={handleInputChange}
                name="ssn"
                value={formValues.ssn}
                testId="registration-ssn"
              />
              {
                errors.ssn && <InvalidFieldMessage text="*Invalid SSN Ex: 999-99-9999"/>
              }
            </div>

            <div className="mt-3">
              <strong>Home Phone</strong>
              <InputText
                onChange={handleInputChange}
                name="homePhone"
                value={formValues.homePhone}
                testId="registration-homePhone"
              />
              {
                errors.homePhone && <InvalidFieldMessage text="*Home phone is required"/>
              }
            </div>

            <div className="mt-3">
              <strong>Postal Code</strong>
              <InputText
                onChange={handleInputChange}
                name="postalCode"
                value={formValues.postalCode}
                testId="registration-postalCode"
              />
              {
                errors.postalCode && <InvalidFieldMessage text="*Postal code is required"/>   
              }
            </div>

            <div className="mt-3">
              <strong>Country</strong>
              <InputText
                onChange={handleInputChange}
                name="country"
                value={formValues.country}
                testId="registration-country"
              />
              {
                errors.country && <InvalidFieldMessage text="*Country is required"/>
              }
            </div>
          </div>
        </div>
              <hr />
        <button data-testid="registration-submit" type="submit" style={{height:50}} className="btn btn-info d-block w-25 ms-5 mt-4">
          Create
        </button>
      </form>
      
    </div>
  );
};
