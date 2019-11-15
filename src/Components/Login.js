import React, { useEffect } from 'react'
//import { axiosWithAuth as axios } from '../utils/axiosConfig'
import { Link } from 'react-router-dom'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'

import axios from 'axios';


const Login = ({ history, status }) => {

  useEffect(() => {
    if (status) {
      axios()
        .post('/auth/login', status)
        .then(res => {
          // console.log(res)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user_id', res.data.user.id)
          localStorage.setItem('name', JSON.stringify(res.data.user.name))
          localStorage.setItem(
            'fullName',
            JSON.stringify(res.data.user.fullName),
          )
        })
        
        .catch(err => console.log(err))
    }
  }, [status])

  return (
    <div>
      <h1>
        Welcome Artist
      </h1>
      <div>

        {/* Start of form */}
        <Form>
          <div>
            <div>
              <Field
                variant='outlined'
                required
                fullWidth
                label='Name'
                name='name'
                type='name'
              />
            </div>
            <div>
              <Field
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
              />
            </div>
          </div>
          <button onClick={null}>
            Log In
          </button>
          <div>
            <Link to='/register'>Need to register?</Link>
            <Link to='/reset'>Forgot Password?</Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default withFormik({
  mapPropsToValues: ({ name, password }) => {
    return {
      name: name || '',
      password: password || '',
    }
  },

  // Validation
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required('Please provide your name.'),
    password: Yup.string().required('Please provide your password.'),
  }),

  // handleSubmit
  handleSubmit(values, { setStatus }) {
    // console.log(values)
    setStatus(values)
  },
})(Login)