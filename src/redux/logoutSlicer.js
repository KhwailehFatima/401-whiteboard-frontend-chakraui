import { createSlice } from "@reduxjs/toolkit";

import { actionType } from "../config/constant"; 

const logoutSlice=createSlice({
    name:"logout",
    actionType,
    reducers:{
        REQUEST_LOGOUT:(state)=>{
            state.loading=true;
        },
        LOGOUT_SUCCESS:(state)=>{
            state.loading=false;
            state.isAuth=false;
            state.user={};
           
        },
        LOGOUT_FAILURE:(state,action)=>{
             state.loading=false;
             state.error=action.payload;
        }
    }
});

export const {REQUEST_SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAILURE}=logoutSlice.actions;
export default logoutSlice.reducer;