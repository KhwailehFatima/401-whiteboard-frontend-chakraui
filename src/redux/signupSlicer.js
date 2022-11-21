import { createSlice } from "@reduxjs/toolkit";

import { actionType } from "../config/constant"; 

const signupSlice=createSlice({
    name:"signup",
    actionType,
    reducers:{
        REQUEST_SIGNUP:(state)=>{
            state.loading=true;
        },
        SIGNUP_SUCCESS:(state,action)=>{
            state.loading=false;
           
        },
        SIGNUP_FAILURE:(state,action)=>{
            state.user={};
            state.loading=false;
            state.isPassword=true;
            state.error=action.payload;
        }
    }
});

export const {REQUEST_SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE}=signupSlice.actions;
export default signupSlice.reducer;