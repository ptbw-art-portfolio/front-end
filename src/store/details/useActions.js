import {axiosWithAuth as axios} from "../../utils/axiosWithAuth";
import { 
   FETCH_DETAILS_START, 
   FETCH_DETAILS_SUCCESS, 
   FETCH_ARTIST_SUCCESS, 
   FETCH_ERROR,
   UPDATE_DETAILS_START,
   UPDATE_DETAILS_SUCCESS,
   UPDATE_DETAILS_ERROR
} from "./actionTypes";

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

export function updateImageDetails ({image_id, ...details}) {
   return dispatch => {
      dispatch({type: UPDATE_DETAILS_START});

      axios()
         .put("/posts/", details)
         .then(response => {
            dispatch({type: UPDATE_DETAILS_SUCCESS});
            console.log(response.data);
         })
         .catch(error => {
            console.error(error.response);
            dispatch({type: UPDATE_DETAILS_ERROR, payload: error.response});
         })
   };
}

/*
created_at: "2019-11-22T00:47:26.885Z"
date: null
description: "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim."
id: 1
image_url: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1115&q=80"
likes: 0
medium: "paint"
title: "Lady With Eye"
updated_at: "2019-11-22T00:47:26.885Z"
user_id: 1
*/