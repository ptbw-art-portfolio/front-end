import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik} from 'formik';
import * as yup from 'yup';
import { axiosWithAuth as axios } from '../utils/axiosWithAuth';
import { register } from '../store/auth/useAuthActions';
import { connect } from 'react-redux';
import FormOverlay from './style-utils/FormOverlay'



function Register ({errors, touched, status}) {

    return (
        <FormOverlay>
            <Form>
                {/* Error handling above each Field */}

                {touched.fullName && errors.fullName && <p className='error'>{errors.fullName}</p>}
                <Field type='text' name='fullName' placeholder='Full Name' />

                {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                <Field type='text' name='email' placeholder='Email' />
                
                {touched.userName && errors.userName && <p className='error'>{errors.userName}</p>}
                <Field type='text' name='userName' placeholder='Username' />
                
                {touched.password && errors.password && <p className='error'>{errors.password} </p>}
                <Field type='password' name='password' placeholder='Password' />
                
                {/* Signs User up */}
                <button type='submit'>Register</button>
                {/* Closes the motol */}
                <button>Close</button>
            </Form>
        </FormOverlay>
    )
}
// Email: '' (cannot be used twice)
// Full Name: ''
// User Name: '' (cannot be used twice)
// Password: ''
const mapStateToProps = (state) => {
    return {
        ...state.auth
    }
}

const RegisterWithFormik = withFormik({
    mapPropsToValues: (values) => {
        return {
            // makes the values set to strings if empty
            fullName: values.fullName || '',
            email: values.email || '', 
            userName: values.userName || '',
            password: values.password || '',
            register
        }
    }, 
    // Validates the required fields
    validationSchema: yup.object().shape({
        fullName: yup.string().required('Full Name is Required!'),
        email: yup.string().required('Email is Required!'),
        userName: yup.string().required('Username is Required!'),
        password: yup.string().required('Password is Required!')
    }),
    handleSubmit: (values, formikBag) => {
        console.log(register)
        console.log(values)
        formikBag.props.register(values);
    }
})(Register)

export default connect(mapStateToProps, {register})(RegisterWithFormik);

