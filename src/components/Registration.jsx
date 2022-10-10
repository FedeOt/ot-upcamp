import React, { useState } from "react";
import { InputText } from "./InputText";
import { RadioButton } from "./RadioButton";


const initialState = {
    address: '',
    country: '',
    dob: '',
    emailAddress: '',
    firstName: '',
    gender: "M",
    homePhone: '',
    lastName: '',
    locality: '',
    mobilePhone: '',
    password: '',
    postalCode: '',
    region: '',
    ssn: '',
    title: 'Mr.',
    workPhone: ''
}

export const Registration = () => {


    const [formValues,setFormValues] = useState(initialState); 

    const handleInputChange = ({target}) =>{

        setFormValues({
            ...formValues,
            [target.name]:target.value
        })

    }

    const handleSubmit = (e) =>{
        e.preventDefault(); 

        console.log(formValues); 
    }
    

  return (
    <div style={{ paddingTop: 90}}>
      <form onSubmit={handleSubmit} className="create-user-form">
        <h3>Create new user</h3>
        <hr />
        <div className="row mx-auto">
          <div className="ms-4 mt-4 col-5">
            <div className="mt-3 mb-4">
              <strong>Title</strong>
              <RadioButton onChange={handleInputChange} name='title' checked={formValues.title === 'Mr.'} value='Mr.' label="Mr."/>
              <RadioButton onChange={handleInputChange} name='title' checked={formValues.title === 'Mrs.'} value='Mrs.' label="Mrs."/>
              <RadioButton onChange={handleInputChange} name='title' checked={formValues.title === 'Ms.'} value='Ms.' label="Ms."/>
            </div>

            <div className="mt-3">
              <strong>Gender</strong>
              <RadioButton onChange={handleInputChange} name='gender' checked={formValues.gender === 'M'} value='M' label="M" />
              <RadioButton onChange={handleInputChange} name='gender' checked={formValues.gender === 'F'} value='F' label="F" />
            </div>
            <hr />
            <div className="mt-5">
              <strong>First Name</strong>
              <InputText onChange={handleInputChange} name='firstName' value={formValues.firstName}/>
            </div>

            <div className="mt-3">
              <strong>Last name</strong>
              <InputText onChange={handleInputChange} name='lastName' value={formValues.lastName} />
            </div>

            <div className="mt-3">
              <strong>Email</strong>
              <InputText onChange={handleInputChange} name='emailAddress' value={formValues.emailAddress} />
            </div>

            <div className="mt-3">
              <strong>Password</strong>
              <input type="password" onChange={handleInputChange} name='password' value={formValues.password} className="form-control w-75" />
            </div>

            <div className="mt-3">
              <strong>Address</strong>
              <InputText onChange={handleInputChange} name='address' value={formValues.address} />
            </div>

            
            <div className="mt-3">
              <strong>Birth Date</strong>
              <InputText onChange={handleInputChange} name='dob' value={formValues.dob} />
            </div>
          </div>

          <div className="ms-4 mt-4 col-5">
            <div className="mt-3">
              <strong>Work Phone</strong>
              <InputText onChange={handleInputChange} name='workPhone' value={formValues.workPhone} />
            </div>

            <div className="mt-3">
              <strong>Locality</strong>
              <InputText onChange={handleInputChange} name='locality' value={formValues.locality} />
            </div>
            <div className="mt-3">
              <strong>Mobile Phone</strong>
              <InputText onChange={handleInputChange} name='mobilePhone' value={formValues.mobilePhone} />
            </div>
            <div className="mt-3">
              <strong>Region</strong>
              <InputText onChange={handleInputChange} name='region' value={formValues.region} />
            </div>

            <div className="mt-3">
              <strong>SSN</strong>
              <InputText onChange={handleInputChange} name='ssn' value={formValues.ssn} />
            </div>


            <div className="mt-3">
              <strong>Home Phone</strong>
              <InputText onChange={handleInputChange} name='homePhone' value={formValues.homePhone} />
            </div>

            <div className="mt-3">
              <strong>Postal Code</strong>
              <InputText onChange={handleInputChange} name='postalCode' value={formValues.postalCode} />
            </div>

            <div className="mt-3">
              <strong>Country</strong>
              <InputText onChange={handleInputChange} name='country' value={formValues.country} />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-info">Create</button>
      </form>
    </div>
  );
};
