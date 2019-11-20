import {axiosWithAuth as axios, setToken} from "../../utils/axiosWithAuth";
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR} from "./authTypes";

export function login (credentials) {
   return dispatch => {
      dispatch({type: LOGIN_START});
   
      axios()
         .post("/auth/login", credentials)
         .then(response => {
            dispatch({type: LOGIN_SUCCESS, payload: response.data.user});
            setToken(response.data.token);
         })
         .catch(error => {
            dispatch({type: LOGIN_ERROR, payload: error.response});
         })
   };
};