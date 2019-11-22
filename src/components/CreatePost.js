import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import './CreatePost.css';
import { axiosWithAuth as axios } from '../utils/axiosWithAuth';

const Wrapper = styled.div`
    .CreatePost {
        border-radius: .75rem;
        width: 32rem;
        padding-top: 3rem;
        padding-bottom: 5rem;
        text-align: center;
        background-color: #fefefe;
        border: 1px solid #888;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .fieldContainer {
    width: 100%;
    }

    .TextField {
        width: 80%;
        margin-top: 1rem;
    }

    .buttonContainer {
        width: 80%;
        display: flex;
        justify-content: space-between;
        border-radius: .35rem;
        margin-top: 1rem;
    }

    button {
        width: 10rem;
    }

    .form-message {
        font-size: .75rem;
        padding-top: .25rem;
    }
    .form-message.valid {
        color: limegreen;
    }
    .form-message.invalid {
        color: crimson;
    }
`
const validationSchema = Yup.object().shape({
    title: Yup.string()
        .min(1, "Must have at least one letter")
        .max(30, "Must be shorter than 30 letters")
        .required("Please enter a name"),
    date: Yup.date()
        .min('01/01/1900', "Date must be after 01/01/1900")
        .max(new Date(), "Date cannot be after today"),
        // .required("Please enter date piece was created"),
    medium: Yup.string()
        .min(1, "Must have at least one letter")
        .max(30, "Must be shorter than 30 letters"),
        // .required("Please enter the medium used to create piece"),
    link: Yup.string().url()
        .min(1, "Must have at least one letter")
        .max(100, "Must be shorter than 100 letters")
        .required("Please enter a valid URL"),
    details: Yup.string()
        .min(0, "Please enter details or statement about piece")
        .max(150, "Must be shorter than 150 letters"),
        // .required("Please enter details or statement about piece"),
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

function CreatePost(props) {
    return (
        <Wrapper>
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
                        <section className="fieldContainer">
                            <div className="inputContainer">
                                <input type="text" name="title" placeholder="Title (required)"
                                    className={`TextField ${touched.title && errors.title ? "has-error" : null}`}
                                    onChange={handleChange} onBlur={handleBlur} value={values.title} />
                                <Error touched={touched.title} message={errors.title} />
                            </div>

                            <div className="inputContainer">
                                <input type="date" name="date" placeholder="Date" 
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
                                <input type="url" name="link" placeholder="Image Link (required)" 
                                    className={`TextField ${touched.link && errors.link ? "has-error" : null}`}
                                    onChange={handleChange} onBlur={handleBlur} value={values.link} />
                                <Error touched={touched.link} message={errors.link} />
                            </div>

                            <div className="inputContainer">
                                <textarea rows="5" cols="30" name="details" placeholder="Description (up to 150 chars)" maxLength="150"
                                    className={`TextField ${touched.details && errors.details ? "has-error" : null}`}
                                    onChange={handleChange} onBlur={handleBlur} value={values.details}>
                                </textarea>
                                <Error touched={touched.details} message={errors.details} />
                            </div>
                        </section>

                        <div className="buttonContainer">
                            <button type="submit" disabled={isSubmitting}>Add</button>
                            <button type="button" id="cancel"
                                onClick={props.onClose}>Cancel</button>

                        </div>
                    </form>
                )}
            </Formik>
        </Wrapper>
    );
}

export default CreatePost;