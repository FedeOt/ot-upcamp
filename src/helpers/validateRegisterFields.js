import { validateDate } from "../moment/validateDate";

export const ValidateFields = (data) =>{

    const errors = {};
    const emailRegex = new RegExp('[a-z0-9]+@','g')

    if(data.firstName.trim() === ''){
        errors.firstName = true; 
    }
    if(data.lastName.trim() === ''){
        errors.lastName = true; 
    }
    if(data.emailAddress.trim() === '' || !emailRegex.test(data.emailAddress)){
        errors.emailAddress = true; 
    }
    if(data.address.trim() === ''){
        errors.address = true; 
    }
    if(data.password.length < 6){
        errors.password = true; 
    }
    if(!validateDate(data.dob)){
        errors.dob = true; 
    }
    if(data.workPhone.trim() === ''){
        errors.workPhone = true; 
    }
    if(data.locality.trim() === ''){
        errors.locality = true; 
    }
    if(data.mobilePhone.trim() === ''){
        errors.mobilePhone = true; 
    }
    if(data.region.trim() === ''){
        errors.region = true; 
    }
    if(data.ssn.trim() === ''){
        errors.ssn = true; 
    }
    if(data.homePhone.trim() === ''){
        errors.homePhone = true; 
    }
    if(data.postalCode.trim() === ''){
        errors.postalCode = true; 
    }
    if(data.country.trim() === ''){
        errors.country = true; 
    }

    return errors; 

}