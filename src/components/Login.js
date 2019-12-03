import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik } from 'formik';
import * as Yup from 'yup';
import styled from "styled-components";
import { connect } from "react-redux";
import {login} from "../store/auth/useAuthActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSignInAlt, faSignOutAlt, faSpinner} from "@fortawesome/free-solid-svg-icons";
import FormOverlay from './style-utils/FormOverlay';



// const FormOverlay = styled.div`
//    background: #f26656b2;
//    background: linear-gradient(74deg, #f26656b2 0%, #4b559cb2 100%);
//    z-index: 1;
//    width: 100%;
//    height: 100%;
//    position: fixed;
//    top: 0;
//    left: 0;
//    overflow: auto;
//    display: flex;
//    justify-content: center;
//    align-items: center;
// `;

const Card = styled.div`

display: flex;
width: 330px;
height: 330px;
flex-wrap: wrap;
flex-direction: column;
justify-items: center;
align-items: center;
background-color: #f2ecdd;
border: solid 4px black;
border-radius: 8px;
font-weight: 600;
box-shadow: 7px 7px 5px #2F4F4F;
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

const LinkWrap = styled(Link)`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 1.4rem;
  text-decoration: none;
`;

const NavIcon = styled(FontAwesomeIcon)`
  margin: .5rem;

  

  :hover {
    color: gray;
  }
`

//Connect to Redux store
const mapStateToProps = state => {
  return {
     ...state.auth
  };
};

const mapDispatchToProps = {
  login
};

function Login({user, resetForm}) {
   useEffect(() => {
      if (cardState) {
         resetForm();
         setCardState(false);
         setIsSubmitting(false);
      }
   }, [user.id]);

  const [cardState, setCardState] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const clickHandler = event => {
    setCardState(!cardState);
  }

  return (
     <>
      {(user.id === -1)
         ? <NavIcon title="Sign In" icon={faSignInAlt} size="2x" onClick= { clickHandler }/>
         : <NavIcon title="Sign Out" icon={faSignOutAlt} size="2x" />
      }
     

    {cardState && 
    <FormOverlay>
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
              label='Name'
              name='email'
              type='email'
              placeholder='Email'
            />

            <Input
              variant='outlined'
              required
              name='password'
              label='Password'
              type='password'
              placeholder='Password'
            />
          
        <Button>
         {(isSubmitting)
            ? <button type="submit" disabled><FontAwesomeIcon icon={faSpinner} size="1x" /></button>
            : <button type="submit">Log In</button>
         }
        </Button>

        <LinkWrap to='/register'>
          <button onClick={clickHandler}>Register</button>
        </LinkWrap>
          <button onClick={clickHandler}>Cancel</button>
        </GreetWrap>
      </Form>
    </Card>
    </FormOverlay>
    }
    
     </>
    
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(
   withFormik({
      mapPropsToValues: ({ email, password, login }) => {
         return {
            email: email || '',
            password: password || '',
            login
         }
      },
   
      // Validation
      validationSchema: Yup.object().shape({
         email: Yup.string()
         .required('Please provide your email.'),
         password: Yup.string().required('Please provide your password.'),
      }),
   
      // handleSubmit
      handleSubmit({ email, password, login }) {
      // handleSubmit(props) {
         console.log({ email, password })
         login({ email, password })
      },
   })(Login)
) 