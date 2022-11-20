import { createContext, useContext, useReducer } from "react";
import base64 from "base-64";
import { signUp, login, logout } from "../actions/authActions";
import { actionType } from "../config/initials";
import { authReducer } from "../reducers/authReducer";
import { useToast } from "@chakra-ui/react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = (props) => {

  const [ userData, dispatch ] = useReducer( authReducer, actionType);
// console.log("userData",userData)
  const toast = useToast();

  const handleSignup = (e) => {
    e.preventDefault();
      if (e.target.password.value === e.target.confirmPassword.value) {
        const data = {
          userName: e.target.userName.value,
          email: e.target.email.value,
          password: e.target.password.value,
          role: e.target.role.value,
        };
        
        signUp( dispatch, data );
        // console.log(userData);
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        
      } else {
        signUp( dispatch, { error: 'password dont match' } );
        console.log('error');
      }
       
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    const user = {
      userName: e.target.userName.value,
      password: e.target.password.value,
    };
      const encoded = base64.encode(`${user.userName}:${user.password}`);
      login( dispatch, encoded );
      console.log(userData);
  };

  const handleLogout = () => {
    logout( dispatch );
  };

  const value={ userData, handleLogout, handleSignin, handleSignup };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;