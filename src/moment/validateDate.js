import moment from "moment/moment";

export const validateDate = (date) => {
    const newDate = moment(date,"MM-DD-YYYY");
    return newDate.isValid(); 
}