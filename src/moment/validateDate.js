import moment from "moment";

export const validateDate = (date) => {
    const newDate = moment(date,"MM-DD-YYYY");
    return newDate.isValid(); 
}