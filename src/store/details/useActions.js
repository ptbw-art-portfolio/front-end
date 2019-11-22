import {axiosWithAuth as axios} from "../../utils/axiosWithAuth";
import { FETCH_DETAILS_START, FETCH_DETAILS_SUCCESS, FETCH_ARTIST_SUCCESS, FETCH_ERROR } from "./actionTypes";

export function getImageDetails (id) {
   return dispatch => {
      dispatch({type: FETCH_DETAILS_START});
      console.log(`Retrieveing details for image ID-${id}...`);
      
      //GET post by ID
      axios().get(`/posts/${id}`)
         .then(api_resp => {
            const payload = api_resp.data[0];
            console.log(api_resp);
            dispatch({type: FETCH_DETAILS_SUCCESS, payload});

            console.log("Retrieving Artist Name...");
            return axios().get(`/users/${payload.user_id}`);
            // return axios().get(`/users/34`);
         })
         .then(api_resp => {
            console.log((api_resp.data) && api_resp.data);
            if (!api_resp.data || api_resp.data.length === 0) {
               console.log("Failed to retrieve artist!!");
               throw new Error("Artist not found");
            }

            console.log("Success!");
            dispatch({type: FETCH_ARTIST_SUCCESS, payload: api_resp.data[0].fullName});
         })
         .catch(error => {
            const err = (error.response)? error.response : {
               data: {message: `${error.name}: ${error.message}`}, 
               status: 404,
               statusText: "Not Found"
            };
            console.error(err);
            dispatch({type: FETCH_ERROR, payload: err});
         })
   };
};