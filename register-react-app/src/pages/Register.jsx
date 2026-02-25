
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function Register(){
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
              <div className="m-[0 auto] w-[400px] pt-[50px]">
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
                        }
                        if (!values.phone_number) {
                            errors.phone_number = 'Required';
                        }
                        if (!values.password) {
                            errors.password = 'Required';
                        }
                        if (!values.confirm_password) {
                            errors.confirm_password = 'Required';
                        }
                        return errors;
                    }} 
                    onSubmit = {(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form className="flex flex-col items-center justify-center gap-[20px]">
                            <fieldset className="pl-[40px] w-full flex flex-col gap-[20px] justify-start items-start">
                                <legend className="ml-[40px] mb-[50px] text-[36px] font-bold">Register Here</legend>
                                <label htmlFor="name">Name:</label>
                                <Field type="text" name="name" placeholder="Enter your name" className=" border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none w-full p-2" />
                                <ErrorMessage name="name" component="div" className="text-red-500 text-[6px]" />
                                <label htmlFor="surname">Surname:</label>
                                <Field type="text" name="surname" className="border border-gray-300" />
                                <ErrorMessage name="surname" component="div" className="text-red-500" />
                                <label htmlFor="email">Email:</label>
                                <Field type="email" name="email" className="input-field" />
                                <ErrorMessage name="email" component="div" className="text-red-500" />
                                <label htmlFor="phone_number">Phone Number:</label>
                                <Field type="text" name="phone_number" className="input-field" />
                                <ErrorMessage name="phone_number" component="div" className="text-red-500" />
                                <label htmlFor="password">Password:</label>
                                <Field type="password" name="password" className="input-field" />
                                <ErrorMessage name="password" component="div" className="text-red-500" />
                                <label htmlFor="confirm_password">Confirm Password:</label>
                                <Field type="password" name="confirm_password" className="input-field" />
                                <ErrorMessage name="confirm_password" component="div" className="text-red-500" />
                                <button type="submit" disabled={isSubmitting} className="submit-btn">Register</button>
                            </fieldset>
                        </Form>
                    )}
                </Formik>
              </div>
            
            </div>
        </div>
    )
}