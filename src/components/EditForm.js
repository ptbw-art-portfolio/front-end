import React from "react";
import {connect} from "react-redux"
import {Form, Field, withFormik} from "formik";
import * as yup from "yup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

//Action Creators
import {updateImageDetails} from "../store/details/useActions";

//Styled Components
import styled from "styled-components";
import { customLayout } from "./style-utils/mixins";
import { colors } from "./style-utils/variables";
const StyledForm = styled(Form)`
   width: 32rem;
   height: 45rem;
   border-radius: 5px;
   background-color: ${colors.formBackground};
   ${customLayout("center", "center", "column")};

   & > * {
      margin-bottom: 1rem;
      width: 25.6rem;
   }

   .form-title {
      color: ${colors.accent};
      margin-bottom: 3rem;
      ${customLayout("space-around", "center")};

      h2 {
         color: ${colors.accent};
      }
   }

   .error {
      color: red;
   }

   input {
      color: ${colors.darkText};
      font-size: 1.4rem;
      line-height: 1.6;
      
   }
   
   .controls {
      margin: 5rem 0 0;
      ${customLayout("flex-end")};

      button {
         background-color: transparent;
         border: 0.25rem ${colors.accent} solid;
         border-radius: 9px;
         color: ${colors.accent};
         cursor: pointer;
         outline: ${colors.accent};
         height: 3.5rem;
         width: 3.5rem;
      }
      button:last-child {
         margin-left: 2rem;
      }
      button:hover {
         color: ${colors.formBackground};
         background-color: ${colors.accent};
      }
      /* button:last-child {
         margin-top: 1rem;
      } */
   }
`;

/*
const NO_DETAILS = {
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
};
*/
function EditForm ({image_url, title, medium, description, history, errors, touched}) {
   return (
      <StyledForm>
         <div className="form-title">
            <h2>Edit Post</h2>
            <FontAwesomeIcon icon={faEdit} size="4x" />
         </div>
         {touched.image_url && errors.image_url && <p className="error">{errors.image_url}</p>}
         <Field type="url" name="image_url" />
         {touched.title && errors.title && <p className="error">{errors.title}</p>}
         <Field type="text" name="title" />
         {touched.medium && errors.medium && <p className="error">{errors.medium}</p>}
         <Field type="text" name="medium" />
         {touched.description && errors.description && <p className="error">{errors.description}</p>}
         <Field type="text" name="description" />
         <div className="controls">
            <button type="submit"><FontAwesomeIcon className="done" icon={faCheck} /></button>
            <button type="submit" onClick={event => {
               event.preventDefault();
               history.goBack();
            }}><FontAwesomeIcon className="done" icon={faTimes} /></button>
         </div>
      </StyledForm>
   );
}

const mapStateToProps = state => {
   return {
      ...state.details.imgDetails
   };
};
const mapDispatchToProps = {
   updateImageDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
   mapPropsToValues: props => ({
      title: props.title || "",
      medium: props.medium || "",
      image_url: props.image_url || "https://via.placeholder.com/1600x900/464655/d5cfe1",
      description: props.description || "",
      user_id: props.user_id,
      image_id: props.id,
      updateImageDetails: props.updateImageDetails
   }),
   validationSchema: yup.object().shape({
      image_url: yup.string().url("Please enter the URL for the image"),
      title: yup.string().required("Please enter a title for the peice"),
      medium: yup.string().required("From which medium is the artwork created?"),
      description: yup.string().required("Please enter a description")
   }),
   handleSubmit: ({updateImageDetails, ...newDetails}) => {
      console.log("Update post!");
      updateImageDetails(newDetails);
   }
})(EditForm));