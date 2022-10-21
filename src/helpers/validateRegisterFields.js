import { validateDate } from "../moment/validateDate";


export const validateFields = (data) =>{

    const errors = {};
    const emailRegex = new RegExp('[a-z0-9]+@');
    const ssnRegex = new RegExp('[0-9]{3}-[0-9]{2}-[0-9]{4}');

    for(let prop in data){

        if(prop === 'emailAddress'){
            if(data[prop].trim() === '' || !emailRegex.test(data[prop])){
                errors[prop] = true; 
            }
        }
        if(prop === 'ssn'){
            if(data[prop].trim() === '' || !ssnRegex.test(data[prop])){
                errors[prop] = true; 
            } 
        }
        if(prop === 'password'){
            if(data[prop].length < 6){
                errors[prop] = true; 
            }
        }
        if(prop === 'dob'){
            if(!validateDate(data[prop])){
                errors[prop] = true; 
            }
        }
        
        if(data[prop].trim() === ''){
            errors[prop] = true; 
        }

    }

    return errors; 

}




/*export const validateFields = (data) =>{

    const errors = {};
    const emailRegex = new RegExp('[a-z0-9]+@');
    const ssnRegex = new RegExp('[0-9]{3}-[0-9]{2}-[0-9]{4}'); 

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
    if(data.ssn.trim() === '' || !ssnRegex.test(data.ssn)){
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

}*/