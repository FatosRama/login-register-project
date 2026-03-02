import {Formik, Field, ErrorMessage, Form} from 'formik';
import axios from 'axios';



export default function Login(){
    return(
        
            <div className="w-full h-screen bg-blue-500 flex items-center justify-center">
                <div className="bg-white w-[500px] h-[500px] m-[0 auto] rounded-[8px]">
                    <Formik
                        initialValues = {{email: '', password:''}}
                        validate = {values => {
                            const errors = {};
                            if(!values.email){
                                errors.email = 'Required';
                            }else if(!/\S+@\S+\.\S+/.test(values.email)){
                                errors.email = 'Invalid email address';
                            }
                            if(!values.password){
                                errors.password = 'Required';
                            }
                            return errors;
                        }}
                        
                        onSubmit = {async (values, {setSubmitting, resetForm, setStatus})=>{
                            setStatus(null);
                            try{
                                const response = await axios.get('http://localhost:5000/login',{
                                    params: {
                                        email: values.email,
                                        password: values.password,
                                    }
                                });
                                alert('Success: ' + response.data.message);
                                resetForm();
                            }catch(error){
                                console.error('Login error:', error);
                                const errMsg = error.response?.data?.message || error.message || 'Login failed. Please try again.';
                                setStatus({error: errMsg});
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    
                    
                    
                    >
                        {({isSubmitting, status}) => (
                        <Form className="flex flex-col p-[20px] pt-[40px] items-center w-full h-full">
                            <fieldset className="flex flex-col gap-[10px] w-[400px] h-[400px] justify-center">
                                <legend className="text-[36px] font-bold text-white-500 text-center">Login here:</legend>
                                {status?.error && <p className="text-red-500 text-[14px] font-semibold">{status.error}</p>}
                                <label htmlFor="email" className="text-[16px]">Email:</label>
                                <ErrorMessage name="email" component="p" className="text-red-500 text-[14px]" />
                                <Field type="email" name="email" placeholder="Enter your email" className="border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none w-full mb-[10px]"/>
                                <label htmlFor="password" className="text-[16px]">Password:</label>
                                <ErrorMessage name="password" component="p" className="text-red-500 text-[14px]" />
                                <Field type="password" name="password" placeholder="Enter your password" className="border-b-2 border-gray-300 focus:border-b-2 focus:border-blue-500 focus:outline-none w-full mb-[10px]"/>
                                <button type="submit" disabled={isSubmitting} className={`border w-full h-10 mt-[20px] text-white font-semibold rounded ${isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>{isSubmitting ? 'Logging in...' : 'Login'}</button>
                            </fieldset>
                        </Form>
                        )}
                    </Formik>
                </div>
            </div>
       
    );
}