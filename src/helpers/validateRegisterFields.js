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

    return errors; 

}