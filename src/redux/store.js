import { configureStore } from "@reduxjs/toolkit";
import accountReducer from '../redux/accountSlice'; 



export const store = configureStore({
    reducer:{
        accounts:accountReducer
    }
}); 