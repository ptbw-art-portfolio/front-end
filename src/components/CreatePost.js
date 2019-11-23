import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { Formik, Field, withFormik, Form } from 'formik';
import * as Yup from 'yup';
// import './CreatePost.css';
import { axiosWithAuth as axios } from '../utils/axiosWithAuth';

const Wrapper = styled.div`
        background: #f26656b2;
        background: linear-gradient(74deg, #f26656b2 0%, #4b559cb2 100%);
        z-index: 1;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        overflow: auto;
        display: flex;
        justify-content: center;
        align-items: center;

    .CreatePost {
        border-radius: .75rem;
        width: 32rem;
        height: 35rem
        padding-top: 3rem;
        padding-bottom: 5rem;
        text-align: center;
        background-color: #fefefe;
        
        border: 1px solid #888;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .inputContainer {
        margin-bottom: 1rem;
    }

    .details {
        margin-top: 2rem;
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
        .max(new Date(), "Date cannot be after today")
        .required("Please enter date piece was created"),
    medium: Yup.string()
        .min(1, "Must have at least one letter")
        .max(30, "Must be shorter than 30 letters")
        .required("Please enter the medium used to create piece"),
    link: Yup.string().url()
        .min(1, "Must have at least one letter")
        .max(100, "Must be shorter than 100 letters")
        .required("Please enter a valid URL"),
    details: Yup.string()
        .min(0, "Please enter details or statement about piece")
        .max(150, "Must be shorter than 150 letters")
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

function CreatePost({touched, errors, status}) {
    const [showModal, setShowModal] = useState(false);
    const exitHandler = () => {
        setShowModal(!showModal);
        console.log("Exit toggled: ", showModal);
    }

    return (
        <Wrapper className="formOverlay">
        <Form className="CreatePost">
            {/* {JSON.stringify(values)} */}
            <section className="fieldContainer">
                <div className="inputContainer">
                    {/* Error handling is above each field */}
                    {touched.title && errors.title && <p className="error">{errors.title}</p>}
                    <Field type="text" name="title" placeholder="Title (required)"
                        className={`TextField ${touched.title && errors.title ? "has-error" : null}`}
                        />
                    {/* onChange={handleChange} onBlur={handleBlur} /> */}
                </div>

                <div className="inputContainer">
                {touched.date && errors.date && <p className="error">{errors.date}</p>}
                    <Field type="date" name="date" placeholder="Date" 
                        className={`TextField ${touched.date && errors.date ? "has-error" : null}`}
                        />
                    {/* onChange={handleChange} onBlur={handleBlur} /> */}
                </div>

                <div className="inputContainer">
                {touched.medium && errors.medium && <p className="error">{errors.medium}</p>}
                    <Field type="text" name="medium" placeholder="Medium" 
                        className={`TextField ${touched.medium && errors.medium ? "has-error" : null}`}
                        />
                    {/* onChange={handleChange} onBlur={handleBlur} /> */}
                </div>

                <div className="inputContainer">
                    {touched.link && errors.link && <p className="error">{errors.link}</p>}
                    <Field type="url" name="link" placeholder="Image Link (required)" 
                        className={`TextField ${touched.link && errors.link ? "has-error" : null}`}
                        />
                    {/* <Error onChange={handleChange} onBlur={handleBlur} /> */}
                </div>

                <div className="inputContainer details">
                    {touched.details && errors.details && <p className="error">{errors.details}</p>}
                    <Field component="textarea" name="details" placeholder="Details" >

                    </Field>
                    {/* <Error touched={touched.details} message={errors.details} /> */}
                </div>
            </section>

            <div className="buttonContainer">
                <button type="submit">Add</button>
                <button type="button" onClick={exitHandler} id="cancel">Cancel</button>

            </div>
        </Form>
        </Wrapper>
    );
}

const CreatePostWithFormik = withFormik({
    mapPropsToValues(values) {
        return{
            title: values.title || "", 
            date: values.date || "", 
            medium: values.medium || "", 
            link: values.link || "", 
            details: values.details || ""
        }
    },

    validationSchema: Yup.object().shape({
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
    })
})(CreatePost)

export default CreatePostWithFormik;