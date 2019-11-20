import {axiosWithAuth as axios, setToken} from "../../utils/axiosWithAuth";
import { FETCH_DETAILS_START, FETCH_DETAILS_SUCCESS } from "./actionTypes";

export function getImageDetails (id) {
   return dispatch => {
      dispatch({type: FETCH_DETAILS_START});
      console.log(`Retrieveing details for image ID-${id}...`);
      
      //GET post by ID
      axios().get(`/posts/${id}`)
         .then(api_resp => {
            // dispatch({type: FETCH_DETAILS_SUCCESS, payload: api_resp});
            console.log(api_resp);
            // return new Promise((resolve, reject) => {
            //    if (!api_resp.data.data) {
            //       console.log("Failed to retrieve post!!");
            //       reject(api_resp.data);
            //    } else {
            //       console.log("Success!");
            //       resolve(api_resp.data.data[0]);
            //    }
            // });
         })
   };
   // return dispatch => {
 


   //       .then(post_data => {
   //          newDetails = {
   //             ...newDetails,
   //             ...post_data
   //          };
   //          console.log("Retrieving Artist info...");

   //          //GET artist by User ID
   //          return axios(userToken).get(`/users/${post_data.user_id}`);
   //          // return axios(userToken).get(`/users/34`);
   //       })
   //       .then(api_resp => {
   //          if (!api_resp.data.data || api_resp.data.data.length === 0) {
   //             console.log("Failed to retrieve artist!!");
   //             throw new Error("Artist not found");
   //          }

   //          console.log("Success!");
   //          setIsLoading(false);
   //          newDetails = {
   //             ...newDetails,
   //             artist: api_resp.data.data[0].fullName
   //          };
   //          setImgDetails(newDetails);
   //       })
   //       .catch(problem => {
   //          setIsLoading(false);
   //          setError(problem);

   //          // if (problem.message) {
   //          //    console.error(`Server Error: ${problem.message}`);
   //          // } else if (problem.response) {
   //          //    console.error(problem.response);
   //          // } else {
   //          //    console.error(problem);
   //          // }
   //       })
   // };
};