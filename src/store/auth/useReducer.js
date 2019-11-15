import { AUTH_START, AUTH_SUCCESS, AUTH_ERROR } from "./authTypes";

const NO_ERRORS = null;
const NO_TOKEN = null;
export const INITIAL_STATE = {
   token: NO_TOKEN,
   isAuthorizing: false,
   error: NO_ERRORS,
};

export default (state = INITIAL_STATE, action) => {
   console.log(action.type);

   switch (action.type) {
      case AUTH_START:
         return {
            ...state,
            isAuthorizing: true,
            error: NO_ERRORS
         };
      case AUTH_SUCCESS:
         return {
            ...state,
            token: action.payload,
            isAuthorizing: false,
            error: NO_ERRORS
         };
      case AUTH_ERROR:
         return {
            ...state,
            token: NO_TOKEN,
            isAuthorizing: false,
            error: action.payload
         };
      default:
         return state;
   }
};