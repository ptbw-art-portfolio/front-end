import React from "react";
import {connect} from "react-redux"
import {Form, Field, withFormik} from "formik";
import * as yup from "yup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

//Redux Store
import {} from "../store/auth";

const mapStateToProps = state => {
   return {
      
   };
};
const mapDispatchToProps = state => {
   return {
      ...state.auth
   };
};

function NewLogin () {

}

const LoginWithFormik = withFormik({
   mapPropsToValues: {},
   validationSchema: yup.object().shape({

   }),
   handleSubmit: () => {}
})(NewLogin);

export default connect()(NewLogin);