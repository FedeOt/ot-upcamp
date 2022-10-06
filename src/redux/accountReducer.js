import {createSlice} from '@reduxjs/toolkit'

const accountSlice = createSlice({
    name:'accounts',
    initialState:{
        accounts:[]
    },
    reducers:{
        getAccounts(state,action){
            state.accounts = action.payload; 
        }
    }
}); 

export const {getAccounts} = accountSlice.actions;
export default accountSlice.reducer; 