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

      .placard {
         .art-info {
            width: 50%;
            background-color: red;

            label {
               width: 100%;
      
               span {
                  margin-right: 1rem;
               }
            }
         }

         .post-controls {

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

//render based on error status
const renderDetails = (error, post) => {
   return (<article className="content">{
      (error)
      ? <p className="error">{error.message ? error.message : error.response}</p>
      : (
         <>
            <img src="https://via.placeholder.com/1600x900" alt="A dove" />

            <div className="placard">
               <h2 className="artist">{post.user_id}</h2>
               <h2 className="title">{post.title}</h2>
               <h4 className="art-medium">{post.medium}</h4>
            </div>
               {/* <div className="user-controls">
                  <p>Edit</p>
                  <p>Delete</p>
               </div> */}
            <p className="description">{post.description}</p>
         </>
      )
   }</article>);
};

function ImageDetails({ userToken, match: { params: { id } } }) {
   const [error, setError] = useState();
   const [post, setPost] = useState({
      id: -1,
      title: "",
      medium: "",
      image_url: "",
      description: "",
      likes: "",
      created_at: "",
      updated_at: "",
      user_id: "",
      user_name: ""
   });

   useEffect(() => {
      console.log(`Retrieveing Post: ${id}...`);

      axios(userToken)
         .get(`https://ptbw-art-portfolio.herokuapp.com/posts/${id}`)
         .then(response => {
            return new Promise((resolve, reject) => {
               if (!response.data.data) {
                  console.log("Failed to retrieve post!!");
                  reject(response.data);
               } else {
                  console.log("Success!");
                  resolve(response.data.data[0]);
               }
            });
         })
         .then(response => {
            console.log(response);
         })
         .catch(err => {
            // setError(err);

            if (err.message) {
               console.error(`Server Error: ${err.message}`);
            } else {
               console.error(err.response);
            }
         })
   }, []);

   return <Wrapper>{renderDetails(error, post)}</Wrapper>;
}

export default ImageDetails;


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