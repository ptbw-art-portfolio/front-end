import { 
   FETCH_DETAILS_START, 
   FETCH_DETAILS_SUCCESS, 
   FETCH_ARTIST_SUCCESS, 
   FETCH_ERROR,
   UPDATE_DETAILS_START
} from "./actionTypes";

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
      case FETCH_DETAILS_SUCCESS:
         return {
            ...state,
            isLoading: true,
            error: NO_ERROR,
            imgDetails: {
               ...state.imgDetails,
               ...action.payload
            }
         }
      case FETCH_ARTIST_SUCCESS:
         return {
            ...state,
            isLoading: false,
            error: NO_ERROR,
            imgDetails: {
               ...state.imgDetails,
               artist: action.payload
            }
         };
      case FETCH_ERROR:
         return {
            ...state,
            isLoading: false,
            error: action.payload
         }
      default:
         return state;
   }
};