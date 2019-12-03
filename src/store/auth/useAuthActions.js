import {axiosWithAuth as axios, setToken, getToken, setUserData, getUserData} from "../../utils/axiosWithAuth";
import {LOGIN_START, LOGIN_SUCCESS, LOGIN_END, LOGIN_ERROR, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL} from "./authTypes";

/* User Data
{
   token: "",
   user: {
      created_at: "2019-11-21T23:47:12.420Z"
      email: "peterparker@mail.com"
      fullName: "Peter Parker"
      id: 1
      updated_at: "2019-11-21T23:47:12.420Z"
      username: "peter-parker
   }
}
*/
export function autoLogin () {
   return dispatch => {
      dispatch({type: LOGIN_START});

      const data = getUserData();
      if (data.user) {
         dispatch({type: LOGIN_SUCCESS, payload: data.user})
      } else {
         dispatch({type: LOGIN_END});
      }
   };
};

export function login (credentials, closeForm) {
   return dispatch => {
      dispatch({type: LOGIN_START});
   
      axios()
         .post("/auth/login", credentials)
         .then(response => {
            dispatch({type: LOGIN_SUCCESS, payload: response.data.user});
            // setToken(response.data.token);
            setUserData(response.data);

            if (closeForm && typeof closeForm === "function") closeForm();
         })
         .catch(error => {
            dispatch({type: LOGIN_ERROR, payload: error.response});
         })
   };
};

export const register = (newUser, history) => dispatch => {
   dispatch({type: SIGNUP_START});
   console.log('IS WORKING!!!!!!!!!!!')
   axios()
      .post("/auth/signup", newUser)
      .then(response => {
         console.log(response)
         dispatch({type: SIGNUP_SUCCESS, payload: response.data.user});

         if (history && history.goBack) history.goBack();
      })
      .catch(error => {
         console.log(error.response)
         dispatch({type: SIGNUP_FAIL, payload: error.response});
      })
};
