import axiosWithAuth as axios from "./utils/axiosWithAuth";
import {AUTH_START, AUTH_SUCCESS, AUTH_ERROR} from "./authTypes";

export function login () {
   return dispatch => {
      dispatch({type: FETCH_VILLAGE_START});
   
      //axios call
      axios
         .get("http://localhost:3333/smurfs")
         .then(response => {
            dispatch({type: FETCH_VILLAGE_END, payload: response.data});
         })
         .catch(error => {
            dispatch({type: FETCH_VILLAGE_ERROR, payload: error.response});
         })
   };
};