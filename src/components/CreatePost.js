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
        <Formik initialValues={{title: "", date: "", medium: "", link: "", details: ""}}>
            {({values, errors, touched, handleChange, handleBlur}) => (
                <form className="CreatePost">
                    {/* {JSON.stringify(values)} */}
                    <input type="text" className="TextField" name="title" placeholder="Title" onChange={handleChange} onBlur={handleBlur} value={values.title} />
                    <input type="text" className="TextField" name="date" placeholder="Date" onChange={handleChange} onBlur={handleBlur} value={values.date} />
                    <input type="text" className="TextField" name="medium" placeholder="Medium" onChange={handleChange} onBlur={handleBlur} value={values.medium} />
                    <input type="text" className="TextField" name="link" placeholder="Image Link" onChange={handleChange} onBlur={handleBlur} value={values.link} />
                    <input type="text" className="TextField" name="details" placeholder="Description" onChange={handleChange} onBlur={handleBlur} value={values.details} />
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