import moment from "moment/moment";

export const validateDate = (date) => {
    const newDate = moment(date);
    return newDate.isValid(); 
}