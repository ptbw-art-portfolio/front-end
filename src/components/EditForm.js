import React from "react";
import {connect} from "react-redux"
import {withFormik, Field} from "formik";
import * as yup from "yup";
import styled from "styled-components";

//Redux Store
import {user} from "../store/auth/useReducer";

//Action Creators
import {updateImageDetails} from "../store/details/useActions";

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
function EditForm ({image_url, title, medium, description, }) {
   return (
      <div>

         <Field type="url" name="image_url" />
         <Field type="text" name="title" />
         <Field type="text" name="medium" />
         <Field type="text" name="description" />
      </div>
   );
}

const mapStateToProps = state => {
   return {
      user_id: state.auth.id,
      ...state.details.imgDetails
   };
};
const mapDispatchToProps = {
   updateImageDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(withFormik({
   mapPropsToValues: props => ({
      image_url: props.image_url || "https://via.placeholder.com/1600x900/464655/d5cfe1",
      title: props.title || "",
      medium: props.medium || "",
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
   handleSubmit: ({user_id, image_url, title, medium, description, updateImageDetails}) => {
      updateImageDetails({
         title,
         medium,
         image_url,
         description,
         user_id
      });
   }
})(EditForm));