import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
// Email: '' (cannot be used twice)
// Full Name: ''
// User Name: '' (cannot be used twice)
// Password: ''
function Register () {

    return (
        <Form>
            <Field type='text' name='fullName' placeholder='Full Name' />
            <Field type='text' name='email' placeholder='Email' />
            <Field type='text' name='userName' placeholder='Username' />
            <Field type='password' name='password' placeholder='Password' />
        </Form>
    )
}

export default withFormik({
    mapPropsToValues: (values) => {
        return {
            fullName: values.fullName || '',
            email: values.email || '', 
            userName: values.userName || '',
            password: values.password || ''
        }
    }
}) (Register);

