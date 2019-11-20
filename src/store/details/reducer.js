import { FETCH_DETAILS_START } from "./actionTypes";

const NO_ERROR = null;
const NO_DETAILS = {
   id: -1,
   title: "",
   medium: "",
   image_url: "",
   description: "",
   likes: "",
   created_at: "",
   updated_at: "",
   user_id: "",
   artist: ""
};
const INITIAL_STATE = {
   isLoading: false,
   error: NO_ERROR,
   imgDetails: NO_DETAILS
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case FETCH_DETAILS_START:
         return {
            ...state,
            isLoading: true,
            error: NO_ERROR,
            imgDetails: NO_DETAILS
         }
      default:
         return state;
   }
};