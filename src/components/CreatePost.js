import React from 'react';
// import styled from 'styled-components';
import { Formik } from 'formik';
import './CreatePost.css';

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