import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Field, withFormik} from 'formik';
import * as yup from 'yup';
import { register } from '../store/auth/useAuthActions';
import { connect } from 'react-redux';
// styles
import styled from "styled-components";
import FormOverlay from './style-utils/FormOverlay'

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



function Register ({errors, touched, status}) {

    const [cardState, setCardState] = useState(false);
    const clickHandler = event => {
        setCardState(!cardState);
    }

    return (
        <FormOverlay>
            <Card>
                <Form>
                    <GreetWrap>
                        <Greeting>
                            Register
                        </Greeting>
                        {/* Error handling above each Field */}

                        {touched.fullName && errors.fullName && <p className='error'>{errors.fullName}</p>}
                        <Input type='text' name='fullName' placeholder='Full Name' />

                        {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                        <Input type='text' name='email' placeholder='Email' />
                        
                        {touched.userName && errors.userName && <p className='error'>{errors.userName}</p>}
                        <Input type='text' name='userName' placeholder='Username' />
                        
                        {touched.password && errors.password && <p className='error'>{errors.password} </p>}
                        <Input type='password' name='password' placeholder='Password' />
                        
                        {/* Signs User up */}
                        <Button>
                            <button type='submit'>Register</button>
                        </Button>
                        
                        {/* Closes the motol */}
                        <LinkWrap to='/'>
                            <button onClick={clickHandler}>Close</button>
                        </LinkWrap>
                    </GreetWrap>
                    
                </Form>
            </Card>
            
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

