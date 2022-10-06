import { configureStore } from "@reduxjs/toolkit";
import accountReducer from './accountReducer'; 



export const store = configureStore({
    reducer:{
        accounts:accountReducer
    }
}); 