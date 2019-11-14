import {axiosWithAuth as axios} from "../../utils/axiosWithAuth";
import {AUTH_START, AUTH_SUCCESS, AUTH_ERROR} from "./authTypes";
//import useLocalStorage hook.

export function login (isSaveLogin) {
   return dispatch => {
      dispatch({type: AUTH_START});
   
      //axios call
      // axios()
      //    .get("/login")
      //    .then(response => {
      //       if (shouldSaveLogin) {
      //          //use the save login hook
      //       }
      //       dispatch({type: AUTH_START, payload: response.data});
      //    })
      //    .catch(error => {
      //       dispatch({type: AUTH_ERROR, payload: error.response});
      //    })
      
      dispatch({type: AUTH_SUCCESS, payload: "ThisIsAnAuthToken"});
   };
};