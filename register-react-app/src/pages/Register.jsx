
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register(){
    const navigate = useNavigate();
    return(
        <div className="flex h-screen bg-white-500">
            <div className="w-1/3 h-full bg-blue-500">
                <div className="flex flex-col items-center justify-center gap-8 pt-64">
                    <div className="text-white text-5xl font-bold">
                        <h1>Register Now!</h1>
                    </div>
                    <div className="text-lg text-white font-semibold">
                        <p>Fill out the form and register now!</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="115" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                </div>
            </div>
            <div className="w-2/3 h-full ">
              <div className="m-[0 auto] w-[700px] pt-[50px] pl-[300px]">
                <Formik
                    initialValues={{ name: '',  surname: '', email: '', phone_number: '', password: '', confirm_password: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }
                        if (!values.surname) {
                            errors.surname = 'Required';
                        }   
                        if (!values.email) {
                            errors.email = 'Required';
                        }else if (!/\S+@\S+\.\S+/.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }
                        if (!values.phone_number) {
                            errors.phone_number = 'Required';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        }
                        if (!values.confirm_password) {
                            errors.confirm_password = 'Required';
                        }else if (values.password !== values.confirm_password) {
                            errors.confirm_password = 'Passwords do not match';
                        }
                        return errors;
                    }} 
                    onSubmit = {async (values, {setSubmitting, resetForm, setStatus}) => {
                        setStatus(null);
                        try{
                            const response = await axios.post('http://localhost:5000/register', {
                                name: values.name,
                                surname: values.surname,
                                email: values.email,
                                phone_number: values.phone_number,
                                password: values.password,
                            },
                            {
                                headers: { 'Content-Type': 'application/json' },
                            }
                        );
                        
                        alert('Success: ' + response.data.message);
                        resetForm();
                        navigate('/login');
                        
                        } catch (error) {
                            console.error('Registration error:', error);

                            const errMsg = error.response?.data?.error || error.message ||'Registration failed. Please try again.';

                             setStatus({ error: errMsg });
                        } finally {
                            setSubmitting(false);
                        }
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col items-center justify-center ">
                            <fieldset className="pl-[40px] w-full flex flex-col justify-start items-start">
                                <legend className="ml-[40px] mb-[25px] text-[36px] font-bold">Register Here</legend>
                                <label htmlFor="name" className="text-[16px]">Name:</label>
                                <ErrorMessage name="name" component="p" className="text-red-500 text-[14px]" />
                                <Field type="text" name="name" placeholder="Enter your name" className="border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none w-full p-2" />
                                
                                <label htmlFor="surname" className=" mt-[5px] text-[16px]">Surname:</label>
                                <ErrorMessage name="surname" component="p" className="text-red-500 text-[14px]" />
                                <Field type="text" name="surname" placeholder="Enter your surname" className=" border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none w-full p-2" />
                                
                                <label htmlFor="email" className=" mt-[5px] text-[16px]">Email:</label>
                                <ErrorMessage name="email" component="p" className="text-red-500 text-[14px]" />
                                <Field type="email" name="email" placeholder="Enter your email" className=" border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none w-full p-2" />
                                
                                <label htmlFor="phone_number" className=" mt-[5px] text-[16px]">Phone Number:</label>
                                <ErrorMessage name="phone_number" component="p" className="text-red-500 text-[14px]" />
                                <Field type="text" name="phone_number" placeholder="Enter your phone number" className=" border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none w-full p-2" />
                                
                                <label htmlFor="password" className=" mt-[5px] text-[16px]">Password:</label>
                                <ErrorMessage name="password" component="p" className="text-red-500 text-[14px]" />
                                <Field type="password" name="password" placeholder="Enter your password" className=" border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none w-full p-2" />
                                
                                <label htmlFor="confirm_password" className=" mt-[5px] text-[16px]">Confirm Password:</label>
                                <ErrorMessage name="confirm_password" component="p" className="text-red-500 text-[14px]" />
                                <Field type="password" name="confirm_password" placeholder="Confirm your password" className=" border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none w-full p-2" />
                                
                                <button type="submit" disabled={isSubmitting} className={`border w-full h-10 mt-[20px] text-white font-semibold rounded ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>{isSubmitting ? 'Registering...' : 'Register'}</button>
                            </fieldset>
                        </Form>
                    )}
                </Formik>
              </div>
            
            </div>
        </div>
    )
}