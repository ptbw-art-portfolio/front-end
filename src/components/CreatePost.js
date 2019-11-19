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
});

const Error = ({ touched, message}) => {
    if (!touched) {
        return <div className="form-message invalid">&nbsp;</div>;
    }
    if (message) {
        return <div className="form-message invalid">{message}</div>;
    }
    return <div className="form-message valid">Thank you!</div>;
};

function CreatePost() {
    return (
        <Formik 
            initialValues={{title: "", date: "", medium: "", link: "", details: ""}}
            validationSchema={validationSchema}
            onSubmit={(values, {setSubmitting, resetForm}) => {
                setSubmitting(true);
                alert(JSON.stringify(values, null, 2));
                // remove alert and place axios call or save function call here
                resetForm();
                setSubmitting(false);
            }}>

            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <form className="CreatePost" onSubmit={handleSubmit}>
                    {/* {JSON.stringify(values)} */}
                    <div className="inputContainer">
                        <input type="text" name="title" placeholder="Title (required)"
                            className={`TextField ${touched.title && errors.title ? "has-error" : null}`}
                            onChange={handleChange} onBlur={handleBlur} value={values.title} />
                        <Error touched={touched.title} message={errors.title} />
                    </div>

                    <div className="inputContainer">
                        <input type="text" name="date" placeholder="Date" 
                            className={`TextField ${touched.date && errors.date ? "has-error" : null}`}
                            onChange={handleChange} onBlur={handleBlur} value={values.date} />
                        <Error touched={touched.date} message={errors.date} />
                    </div>

                    <div className="inputContainer">
                        <input type="text" name="medium" placeholder="Medium" 
                            className={`TextField ${touched.medium && errors.medium ? "has-error" : null}`}
                            onChange={handleChange} onBlur={handleBlur} value={values.medium} />
                        <Error touched={touched.medium} message={errors.medium} />
                    </div>

                    <div className="inputContainer">
                        <input type="text" name="link" placeholder="Image Link (required)" 
                            className={`TextField ${touched.link && errors.link ? "has-error" : null}`}
                            onChange={handleChange} onBlur={handleBlur} value={values.link} />
                        <Error touched={touched.link} message={errors.link} />
                    </div>

                    <div className="inputContainer">
                        <input type="text" name="details" placeholder="Description" 
                            className={`TextField ${touched.details && errors.details ? "has-error" : null}`}
                            onChange={handleChange} onBlur={handleBlur} value={values.details} />
                        <Error touched={touched.details} message={errors.details} />
                    </div>

                    <div className="buttonContainer">
                        <button type="submit" disabled={isSubmitting}>Add</button>
                        <button type="button">Cancel</button>
                    </div>
                </form>
            )}
        </Formik>
    );
}

export default CreatePost;