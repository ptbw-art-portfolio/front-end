import { AUTH_START, AUTH_SUCCESS, AUTH_ERROR } from "./authTypes";

const NO_ERRORS = null;
const NO_TOKEN = null;
export const INITIAL_STATE = {
   token: NO_TOKEN,
   isAuthorizing: false,
   error: NO_ERRORS,
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case AUTH_START:
         return {
            ...state,
            isAuthorizing: true,
            authError: NO_ERRORS
         };
      case AUTH_SUCCESS:
         return {
            ...state,
            authToken: action.payload,
            isAuthorizing: false,
            authError: NO_ERRORS
         };
      case AUTH_ERROR:
         return {
            ...state,
            authToken: NO_TOKEN,
            isAuthorizing: false,
            authError: action.payload
         };
      default:
         return state;
   }
};