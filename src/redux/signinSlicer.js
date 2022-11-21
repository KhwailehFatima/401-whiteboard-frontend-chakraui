import { createSlice } from "@reduxjs/toolkit";

import { actionType } from "../config/constant"; 

const signinSlice=createSlice({
    name:"signin",
    actionType,
    reducers:{
        REQUEST_LOGIN:(state)=>{
            state.loading=true;
        },
        LOGIN_SUCCESS:(state,action)=>{
            state.loading=false;
            state.isAuth=true;
            state.user=action.payload;
        },
        LOGIN_FAILURE:(state,action)=>{
            state.user={};
            state.loading=false;
            state.isNotLogged=true;
            state.error=action.payload;
        }
    }
});

export const {REQUEST_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE}=signinSlice.actions;
export default signinSlice.reducer;