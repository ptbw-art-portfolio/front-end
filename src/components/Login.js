import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Field, withFormik } from 'formik'
import * as Yup from 'yup'
import styled from "styled-components"
import { connect } from "react-redux";
import {login} from "../store/auth/useAuthActions";


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

 const Input = styled(Field)`
    width: 70%;
    margin: 0 auto;
    margin-bottom: 15px;
 `;

 const Button = styled.div`
 width: 50%;
 margin: 0 auto;
 margin-bottom: 15px;
`;

//Connect to Redux store
const mapStateToProps = state => {
  return {
     ...state.auth
  };
};

const mapDispatchToProps = {
  login
};

function Login({user, isAuthorizing, error, login, history}) {
  
  return (
     
      <Card>

        {/* Start of form */}
        <Form>
          <div>
            <h1>
              Welcome Artist
            </h1>
            
              <Input
                variant='outlined'
                required
                fullWidth
                label='Name'
                name='email'
                type='email'
                placeholder='Email'
              />
            
            
              <Input
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                placeholder='Password'
              />
            
          </div>
          <Button>
          <button onClick={login}>
          
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

export default connect(mapStateToProps, mapDispatchToProps)(
  withFormik({
    mapPropsToValues: ({ email, password, login, history }) => {
    // mapPropsToValues: (props) => {
      // console.log(props)
      return {
        email: email || '',
        password: password || '',
        login,
        history
        // email: props.email || '',
        // password: props.password || '',
        // login: props.login
      }
    },
  
    // Validation
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required('Please provide your email.'),
      password: Yup.string().required('Please provide your password.'),
    }),
  
    // handleSubmit
    handleSubmit({ email, password, login, history }) {
    // handleSubmit(props) {
      console.log({ email, password })
      login({ email, password }, history)
    },
  })(Login)

) 