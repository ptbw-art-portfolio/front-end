import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";
import { connect } from "react-redux";
import {login} from "../store/auth/useAuthActions";


const Card = styled.div`
display: flex;
width: 30%;
margin: 15% 35%;
position: fixed;
z-index: 1;
flex-wrap: wrap;
flex-direction: column;
justify-items: center;
align-items: center;
background-color: #f2ecdd;
border: solid 4px black;
border-radius: 8px;
font-weight: 600;
box-shadow: 7px 7px 5px; #2F4F4F;
 -moz-box-shadow: 7px 7px 5px #2F4F4F;
 -webkit-box-shadow: 7px 7px 5px #2F4F4F;
 -khtml-box-shadow: 7px 7px 7px #2F4F4F;
 `;

 const Input = styled(Field)`
    width: 100%;
    margin: 0 auto;
    margin-bottom: 15px;
 `;

 const Button = styled.div`
 width: 100%;
 margin: 0 auto;
 margin-bottom: 15px;
`;

const Greeting = styled.h1`
font-size: 2.2rem;
margin: 20px auto;
`;

const GreetWrap = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const LinkWrap = styled.div`
  width: 100%;
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
          <GreetWrap>
              <Greeting>
                Welcome Artist
              </Greeting>
            
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
            
          
          <Button>
          <button onClick={login}>
          
            Log In
          </button>
          </Button>

          <LinkWrap>
            <Link to='/register'>Need to register?</Link>
          </LinkWrap>
          </GreetWrap>
        </Form>
      </Card>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withFormik({
    mapPropsToValues: ({ email, password, login, history }) => {

      return {
        email: email || '',
        password: password || '',
        login,
        history
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