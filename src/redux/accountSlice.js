import {createSlice} from '@reduxjs/toolkit'

const accountSlice = createSlice({
    name:'accounts',
    initialState:{
        accounts:[]
    },
    reducers:{
        updateAccounts(state,action){
            state.accounts = action.payload; 
        }
    }
}); 

export const {updateAccounts} = accountSlice.actions;
export default accountSlice.reducer; 