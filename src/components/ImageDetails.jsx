import React, { useEffect } from "react"
import { connect } from "react-redux";
import { getImageDetails } from "../store/details/useActions";
import { getToken } from "../utils/axiosWithAuth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";

//*** Component Styles ***//
import styled from "styled-components";
import {colors, MAX_WIDTH} from "./style-utils/variables";
import { autoScale, customLayout } from "./style-utils/mixins";

const StyledArticle = styled.article`
   .img-wrapper {
      width: 100%;
      box-shadow: inset 0 0 20px 4px ${colors.darkText};
      ${customLayout("center")}
      
      @media only screen and (min-width: 768px) {
         box-shadow: inset 0 0 20px 4px ${colors.darkText};
         padding: 30px;
      }

      img {
         ${autoScale}
         max-height: 480px;
      }
   }

   .card-wrapper {
      width: 100%;
      max-width: ${MAX_WIDTH};
      margin: 0 auto;
      padding: 1rem;
      ${customLayout("flex-start", "flex-start", "column")};

      .card-info {
         & > * {
            margin-bottom: 1rem;
         }

         &:last-child {
            margin: auto auto;
         }

         .artist {
            height: 4rem;
            svg {
               margin-right: 2rem;
            }

            ${customLayout("flex-start", "center")}
         }
      }

      .user-controls {
         background-color: yellow;
         height: 100%;
         ${customLayout("flex-start")};
      }
   }
`;

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
            <div className="img-wrapper">
               <img src="https://via.placeholder.com/1600x900" alt="A dove" />
            </div>

            <div className="card-wrapper">
               <div className="card-info">
                  <div className="artist">
                     <FontAwesomeIcon icon={faUserCircle} size="3x" />
                     <h2>{imgDetails.artist}</h2>
                  </div>
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
               <p className="description">{imgDetails.description}</p>
            </div>
         </>
      );
   }

   return <StyledArticle>{innerHTML}</StyledArticle>;
}

//Connect to Redux store
const mapStateToProps = state => {
   return {
      ...state.details
   };
};

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