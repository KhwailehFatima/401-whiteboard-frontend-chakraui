import { configureStore } from "@reduxjs/toolkit";

import signupSlicer from './signupSlicer';
import signinSlicer from './signinSlicer';
import logoutSlicer from "./logoutSlicer";

export default configureStore({
    reducer:{
        signup:signupSlicer,
        signin:signinSlicer,
        logout:logoutSlicer
    }
});