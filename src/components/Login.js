import React, { useEffect } from 'react'
//import { axiosWithAuth as axios } from '../utils/axiosConfig'
import { Link } from 'react-router-dom'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import styled from "styled-components"

import axios from 'axios';


const Card = styled.div`
display: flex;
width: 35%;
margin: 0 auto;
flex-wrap: wrap;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #11a7f7;
border: solid 4px black;
border-radius: 8px;
font-weight: 600;
font-size: 18px;
box-shadow: 7px 7px 5px; #2F4F4F;
 -moz-box-shadow: 7px 7px 5px #2F4F4F;
 -webkit-box-shadow: 7px 7px 5px #2F4F4F;
 -khtml-box-shadow: 7px 7px 7px #2F4F4F;
 `;

 const Input = styled.div`
    width: 70%;
    margin: 0 auto;
    margin-bottom: 15px;
 `;

 const Button = styled.div`
 width: 50%;
 margin: 0 auto;
 margin-bottom: 15px;
`;

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
     
      <Card>

        {/* Start of form */}
        <Form>
          <div>
          <h1>
        Welcome Artist
      </h1>
            <Input>
              <Field
                variant='outlined'
                required
                fullWidth
                label='Name'
                name='name'
                type='name'
                placeholder='UserName'
              />
            </Input>
            <Input>
              <Field
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                placeholder='Password'
              />
            </Input>
          </div>
          <Button>
          <button onClick={null}>
            Log In
          </button>
          </Button>
          <div>
            <Link to='/register'>Need to register?</Link>
          </div>
        </Form>
      </Card>
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