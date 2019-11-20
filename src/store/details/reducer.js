import { FETCH_DETAILS_START } from "./actionTypes";

const INITIAL_STATE = {
   isLoading: false,
   error: null,
   imgDetails: {
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
   },
};

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case FETCH_DETAILS_START:
         return {
            
         }
      default:
         return state;
   }
};