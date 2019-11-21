import React, { useEffect } from "react"
import { connect } from "react-redux";
import { getImageDetails } from "../store/details/useActions";
import { getToken } from "../utils/axiosWithAuth";

//*** Component Styles ***//
import styled from "styled-components";
import { autoScale, customLayout } from "./style-utils/mixins";

const Wrapper = styled.div`
   background-color: dodgerblue;
   
   img {
      ${autoScale}
   }

   .card-wrapper {
      ${customLayout("space-between", "flex-end")};

      .card-info {
         width: 70%;
         background-color: red;
      }

      .user-controls {
         background-color: yellow;
         height: 100%;
         ${customLayout("flex-start")};
      }
   }
`;

//Connect to Redux store
const mapStateToProps = state => {
   return {
      ...state.details
   };
};

const mapDispatchToProps = {
   getImageDetails
};

function ImageDetails({ isLoading, error, imgDetails, match: { params: { id } }, getImageDetails }) {
   //Get image details on load or if match changes somehow
   useEffect(() => getImageDetails(id), []);

   const isLoggedIn = (getToken() !== null);
   let innerHTML;

   if (isLoading) {
      innerHTML = <p className="spinner">Loading...</p>;
   } else if (error) {
      const message = `Server Error: ${error.data.message} ${error.status}`;
      innerHTML = <p className="error">{message}</p>
   } else {
      innerHTML = (
         <>
            <img src="https://via.placeholder.com/1600x900" alt="A dove" />

            <div className="card-wrapper">
               <div className="card-info">
                  <h2 className="artist">{imgDetails.artist}</h2>
                  <h2 className="title">{imgDetails.title}</h2>
                  <h4 className="art-medium">{imgDetails.medium}</h4>
               </div>
               {
                  (isLoggedIn)
                     ? (
                        <div className="user-controls">
                           <p>Edit</p>
                           <p>Delete</p>
                        </div>
                     )
                     : null
               }
            </div>
            <p className="description">{imgDetails.description}</p>
         </>
      );
   }

   return <Wrapper><article className="content">{innerHTML}</article></Wrapper>;
}

export default connect(mapStateToProps, {getImageDetails})(ImageDetails);


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