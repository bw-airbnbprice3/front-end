import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const LogIn = ({ values, errors, touched }) => {
    return (
        <div>
            <h2>Log In</h2>
            <Form>
                <div>
                    <Field 
                        type='text'
                        name='username'
                        placeholder='Username'
                    />
                    {touched.username && errors.username && <p>{errors.username}</p>}
                </div>
                <div>
                    <Field 
                        type='password'
                        name='password'
                        placeholder='Password'
                    />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>
                <button type='submit'>Log In</button>
            </Form>
        </div>

    );
};

const LogInForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username required'),
        password: Yup.string()
            .min(6, 'Password must be 6 characters or longer')
            .required('Password is required')
    }),

    handleSubmit(values){
        console.log(values);
    }
})(LogIn);

export default LogInForm;