import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Edit = ({ values, errors, touched }) => {
    return (
        <div>
            <h2>Edit Profile</h2>
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
                <button type='submit'>Submit</button>
            </Form>
            <Link to='/user'>Return to Dashboard</Link>
        </div>

    );
};

const UserEdit = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .min(3, 'Password must be 3 characters or longer')
            .required('Password is required')
    }),

    handleSubmit(values){
        console.log(values);
    }
})(Edit);

export default UserEdit;