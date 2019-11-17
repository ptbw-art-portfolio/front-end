import React, { useState, useEffect } from "react"
import { connect } from "react-redux";
import { axiosWithAuth as axios } from "../utils/axiosWithAuth";

//*** Component Styles ***//
import styled from "styled-components";
import setup from "./style-utils";
import {MAX_WIDTH, MIN_WIDTH} from "./style-utils/variables";
import { autoScale, customLayout } from "./style-utils/mixins";

const Wrapper = styled.div`
   ${setup};

   & {
      background-color: dodgerblue;
   
      .content {
         background-color: transparent;
         margin: 0 auto;
         min-width: ${MIN_WIDTH};
         max-width: ${MAX_WIDTH};
      }
   
      img {
         ${autoScale}
      }

      .card-wrapper {
         ${customLayout("space-between", "flex-end")};

         .placard {
            width: 70%;
            background-color: red;
         }

         .user-controls {
            background-color: yellow;
            height: 100%;
            ${customLayout("flex-start")};
         }
      }
   }
`;

//Connect to Redux store
const mapStateToProps = state => {
   return {
      userToken: state.auth.token
   };
};

function ImageDetails({ userToken, match: { params: { id } } }) {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState();
   const [imgDetails, setImgDetails] = useState({
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
   });

   useEffect(() => {
      let newDetails = {...imgDetails};
      setIsLoading(true);
      console.log(`Retrieveing details for image ID-${id}...`);

      axios(userToken)
         //GET post by ID
         .get(`/posts/${id}`)
         .then(api_resp => {
            return new Promise((resolve, reject) => {
               if (!api_resp.data.data) {
                  console.log("Failed to retrieve post!!");
                  reject(api_resp.data);
               } else {
                  console.log("Success!");
                  resolve(api_resp.data.data[0]);
               }
            });
         })
         .then(post_data => {
            newDetails = {
               ...newDetails,
               ...post_data
            };
            console.log("Retrieving Artist info...");

            //GET artist by User ID
            return axios(userToken).get(`/users/${post_data.user_id}`);
            // return axios(userToken).get(`/users/34`);
         })
         .then(api_resp => {
            if (!api_resp.data.data || api_resp.data.data.length === 0) {
               console.log("Failed to retrieve artist!!");
               throw new Error("Artist not found");
            }

            console.log("Success!");
            setIsLoading(false);
            newDetails = {
               ...newDetails,
               artist: api_resp.data.data[0].fullName
            };
            setImgDetails(newDetails);
         })
         .catch(problem => {
            setIsLoading(false);
            setError(problem);

            // if (problem.message) {
            //    console.error(`Server Error: ${problem.message}`);
            // } else if (problem.response) {
            //    console.error(problem.response);
            // } else {
            //    console.error(problem);
            // }
         })
   }, [id]);

   return <Wrapper>{renderDetails(isLoading, imgDetails, error, userToken)}</Wrapper>;
}

//render based on error status
const renderDetails = (isLoading, details, err, userToken) => {
   let innerHTML;

   if (isLoading) {
      innerHTML = <p className="spinner">Loading...</p>;
   } else if (err) {
      let message;

      if (err.message) {
         message = `Server Error: ${err.message}`;
      } else if (err.response) {
         message = err.response.toString();
      } else {
         message = JSON.stringify(err, null, 3);
      }

      innerHTML = <p className="error">{message}</p>
   } else {
      innerHTML = (
         <>
            <img src="https://via.placeholder.com/1600x900" alt="A dove" />

            <div className="card-wrapper">
               <div className="placard">
                  <h2 className="artist">{details.artist}</h2>
                  <h2 className="title">{details.title}</h2>
                  <h4 className="art-medium">{details.medium}</h4>
               </div>
               {
                  (userToken)
                  ? (
                     <div className="user-controls">
                        <p>Edit</p>
                        <p>Delete</p>
                     </div>
                  )
                  : null
               }
            </div>
            <p className="description">{details.description}</p>
         </>
      );
   }
   
   return <article className="content">{innerHTML}</article>;
};

export default connect(mapStateToProps)(ImageDetails);


//GET /posts/:id
//response
/*
{
   "data": [
      {
      "id": 3,
      "title": "title3",
      "medium": "paint",
      "image_url": "someURLsdkfjl",
      "description": "Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat. Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
      "likes": 0,
      "created_at": "2019-11-15T02:55:31.235Z",
      "updated_at": "2019-11-15T02:55:31.235Z",
      "user_id": 1
      }
   ]
}
*/

//error
/*
{
   "name": "JsonWebTokenError",
   "message": "invalid signature"
}
*/