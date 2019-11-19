import React from 'react';
// import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './CreatePost.css';

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(1, "Must have at least one letter")
        .max(30, "Must be shorter than 30 letters")
        .required("Please enter a name"),
    date: Yup.string()
        .min(10, "Date must follow MM/DD/YYYY format")
        .max(10, "Date must follow MM/DD/YYYY format"),
        // .required("Please enter date piece was created"),
    medium: Yup.string()
        .min(1, "Must have at least one letter")
        .max(30, "Must be shorter than 30 letters"),
        // .required("Please enter the medium used to create piece"),
    link: Yup.string()
        .min(1, "Must have at least one letter")
        .max(30, "Must be shorter than 30 letters")
        .required("Please enter a valid URL"),
    details: Yup.string()
        .min(1, "Must have at least one letter")
        .max(300, "Must be shorter than 300 letters")
        .required("Please enter details or statement about piece"),
})

function CreatePost() {
    return (
        <Formik 
            initialValues={{title: "", date: "", medium: "", link: "", details: ""}}
            validationSchema={validationSchema}>

            {({values, errors, touched, handleChange, handleBlur}) => (
                <form className="CreatePost">
                    {/* {JSON.stringify(values)} */}
                    <input type="text" name="title" placeholder="Title"
                        className={`TextField ${touched.title && errors.title ? "has-error" : null}`}
                        onChange={handleChange} onBlur={handleBlur} value={values.title} />

                    <input type="text" name="date" placeholder="Date" 
                        className={`TextField ${touched.date && errors.date ? "has-error" : null}`}
                        onChange={handleChange} onBlur={handleBlur} value={values.date} />

                    <input type="text" name="medium" placeholder="Medium" 
                        className={`TextField ${touched.medium && errors.medium ? "has-error" : null}`}
                        onChange={handleChange} onBlur={handleBlur} value={values.medium} />

                    <input type="text" name="link" placeholder="Image Link" 
                        className={`TextField ${touched.link && errors.link ? "has-error" : null}`}
                        onChange={handleChange} onBlur={handleBlur} value={values.link} />

                    <input type="text" name="details" placeholder="Description" 
                        className={`TextField ${touched.details && errors.details ? "has-error" : null}`}
                        onChange={handleChange} onBlur={handleBlur} value={values.details} />

                    <div className="buttonContainer">
                        <button type="button">Add</button>
                        <button type="button">Cancel</button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default CreatePost;