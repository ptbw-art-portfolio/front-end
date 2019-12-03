import React, { useEffect, useState } from "react"
import { connect } from "react-redux";
import {Route, Link, useRouteMatch} from "react-router-dom";
import { getImageDetails, deletePost, clearDetails } from "../store/details/useActions";
import { getToken } from "../utils/axiosWithAuth";
import Spinner from "./Spinner";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle, faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import FormOverlay from "./style-utils/FormOverlay";
import EditForm from "./EditForm";

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
               width: 7rem;
               ${customLayout("space-between")}

               a, button {
                  background: transparent;
                  border: none;
                  color: ${colors.darkText};
                  cursor: pointer;
                  outline: transparent;
                  padding: unset;

                  &:hover {
                     color: ${colors.linkHover};
                     background: transparent;
                  }

                  & > * {
                     font-size: 2.5rem;
                  }
               }
            }
         }
      }
   }
`;

function ImageDetails({ isLoading, error, imgDetails, user_id, match: { params: { id } }, getImageDetails, deletePost, clearDetails, history }) {
   //Get image details on load or if match changes somehow
   useEffect(() => {
      getImageDetails(id);

      return () => {
         console.log("dispatch Clear Details...");
         clearDetails();
      };
   }, []);

   useEffect(() => {
      setIsLoggedIn(user_id && user_id > -1);
   }, [user_id]);

   const {path, url} = useRouteMatch();
   const [isLoggedIn, setIsLoggedIn] = useState(user_id && user_id > -1);
   let innerHTML;

   if (isLoading) {
      innerHTML = <Spinner />
   } else if (error) {
      const message = `Server Error: ${error.data.message} ${error.status}`;
      innerHTML = <p className="error">{message}</p>
   } else if (imgDetails.id === -404){
      history.goBack()
   } else {
      innerHTML = (
         <>
            <div className="img-wrapper">
               {imgDetails.image_url &&
               <a href={imgDetails.image_url || "#"} target="_blank">
                  <img src={imgDetails.image_url} alt="artwork" />
               </a>}
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
                        <Link to={`${url}/update`}><FontAwesomeIcon title="Edit Post" icon={faEdit} /></Link>
                        <button onClick={() => deletePost(history, id)}><FontAwesomeIcon title="Delete Post" icon={faTrashAlt} /></button>
                     </div>}
                  </div>
                  <h2 className="title">{imgDetails.title}</h2>
                  <h4 className="art-medium">{imgDetails.medium}</h4>
               </div>
               <p className="description">{imgDetails.description}</p>
            </div>

            <Route exact path={`${path}/update`} render={props => (
               <FormOverlay><EditForm {...props} /></FormOverlay>
            )} />
         </>
      );
   }

   return <StyledArticle>{innerHTML}</StyledArticle>;
}

export default connect(state => ({...state.details, user_id: state.auth.user.id}), {getImageDetails, deletePost, clearDetails})(ImageDetails);
