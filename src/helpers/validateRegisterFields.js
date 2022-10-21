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

