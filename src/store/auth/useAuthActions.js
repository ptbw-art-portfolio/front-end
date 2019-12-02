import {axiosWithAuth as axios, setToken} from "../../utils/axiosWithAuth";
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL} from "./authTypes";

export function login (credentials, history) {
   return dispatch => {
      dispatch({type: LOGIN_START});
   
      axios()
         .post("/auth/login", credentials)
         .then(response => {
            dispatch({type: LOGIN_SUCCESS, payload: response.data.user});
            setToken(response.data.token);
            history.push("/");
         })
         .catch(error => {
            dispatch({type: LOGIN_ERROR, payload: error.response});
         })
   };
};

export const register = (newUser) => dispatch => {
      dispatch({type: SIGNUP_START});
   console.log('IS WORKING!!!!!!!!!!!')
      axios()
         .post("/auth/signup", newUser)
         .then(response => {
            console.log(response)
            dispatch({type: SIGNUP_SUCCESS, payload: response.data.user});
         })
         .catch(error => {
            console.log(error.response)
            dispatch({type: SIGNUP_FAIL, payload: error.response});
         })
   };
