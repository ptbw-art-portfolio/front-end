import { 
   FETCH_DETAILS_START, 
   FETCH_DETAILS_SUCCESS, 
   FETCH_ARTIST_SUCCESS, 
   FETCH_ERROR,
   UPDATE_DETAILS_START,
   UPDATE_DETAILS_SUCCESS,
   UPDATE_DETAILS_ERROR
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
   isUpdating: false,
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
      case UPDATE_DETAILS_START:
         return {
            ...state,
            error: NO_ERROR,
            imgDetails: {
               ...state.imgDetails
            },
            isUpdating: true
         };
      case UPDATE_DETAILS_SUCCESS:
         return {
            ...state,
            error: NO_ERROR,
            imgDetails: {
               ...state.imgDetails,
               ...action.payload
            },
            isUpdating: false
         };
      case UPDATE_DETAILS_ERROR:
         return {
            ...state,
            imgDetails: {
               ...state.imgDetails
            },
            isUpdating: false,
            error: action.payload
         };
      case FETCH_ERROR:
         return {
            ...state,
            isLoading: false,
            error: action.payload
         };
      default:
         return state;
   }
};