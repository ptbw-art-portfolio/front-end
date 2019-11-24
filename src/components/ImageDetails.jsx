import React, { useEffect } from "react"
import { connect } from "react-redux";
import { getImageDetails } from "../store/details/useActions";
import { getToken } from "../utils/axiosWithAuth";
import Spinner from "./Spinner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle, faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

//*** Component Styles ***//
import styled from "styled-components";
import {colors, MAX_WIDTH} from "./style-utils/variables";
import { autoScale, customLayout } from "./style-utils/mixins";

const StyledArticle = styled.article`
   .img-wrapper {
      box-shadow: inset 0 0 20px 4px ${colors.darkText};
      margin-bottom: 3rem;
      width: 100%;
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
         width: 100%;
         max-width: ${MAX_WIDTH};

         & > * {
            margin-bottom: 1rem;
         }

         &:last-child {
            margin: auto auto;
         }

         .artist-wrapper {
            ${customLayout("space-between")}

            .artist {
               ${customLayout("flex-start")}
               svg {
                  margin-right: 1rem;
               }
            }

            .user-controls {
               width: 5rem;
               ${customLayout("space-between")}
            }
         }
      }
   }
`;

function ImageDetails({ isLoading, error, imgDetails, match: { params: { id } }, getImageDetails }) {
   //Get image details on load or if match changes somehow
   useEffect(() => getImageDetails(id), []);

   const isLoggedIn = (getToken() !== null);
   // const isLoggedIn = (true);
   let innerHTML;

   if (isLoading) {
   // if (true) {
      innerHTML = <Spinner />
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
                  <div className="artist-wrapper">
                     <div className="artist">
                        <FontAwesomeIcon icon={faUserCircle} size="3x" />
                        <h2>{imgDetails.artist}</h2>
                     </div>
                     {(isLoggedIn) && 
                     <div className="user-controls">
                        <FontAwesomeIcon title="Edit Post" icon={faEdit} size="2x" />
                        <FontAwesomeIcon title="Delete Post" icon={faTrashAlt} size="2x" />
                     </div>}
                  </div>
                  <h2 className="title">{imgDetails.title}</h2>
                  <h4 className="art-medium">{imgDetails.medium}</h4>
               </div>
               <p className="description">{imgDetails.description}</p>
            </div>
         </>
      );
   }

   return <StyledArticle>{innerHTML}</StyledArticle>;
}

export default connect(state => ({...state.details}), {getImageDetails})(ImageDetails);
