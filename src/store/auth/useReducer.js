import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL } from "./authTypes";

const NO_ERRORS = null;
export const INITIAL_STATE = {
   user: {
      id: -1,
      name: "",
      fullName: "",
   },
   isAuthorizing: false,
   error: NO_ERRORS,
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case LOGIN_START:
         return {
            ...state,
            user: {
               ...state.user
            },
            isAuthorizing: true,
            error: NO_ERRORS
         };
      case LOGIN_SUCCESS:
         return {
            ...state,
            user: action.payload,
            isAuthorizing: false,
            error: NO_ERRORS
         };
      case LOGIN_ERROR:
         return {
            ...state,
            user: {
               ...state.user
            },
            isAuthorizing: false,
            error: action.payload
         };
      case SIGNUP_START:
         return {
            ...state, 
            user: {
               ...state.user
            },
            isAuthorizing: true,
            error: NO_ERRORS 
         };
      case SIGNUP_SUCCESS: 
         return {
            ...state,
            user: action.payload,
            isAuthorizing: false,
            error: NO_ERRORS
         };
      case SIGNUP_FAIL: 
         return {
            ...state,
            user: {
               ...state.user
            },
            isAuthorizing: false,
            error: action.payload
         };
      default:
         return state;
   }
};