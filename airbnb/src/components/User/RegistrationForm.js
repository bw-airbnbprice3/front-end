import React from 'react';
import { withFormik, Form, Field, } from 'formik';
import * as yup from 'yup';


const RegistrationForm= ({values, touched, errors}) => {

    console.log(values);

    return(
        <div className="registration">
            <h2>Create Your Account!</h2>
            <Form>
                <div className="errors">
                {touched.username && errors.username && (<p>{errors.username}</p>)}
                {touched.password && errors.password && (<p>{errors.password}</p>)}
                </div>
                <div className="username-group">
                <label htmlFor="username" className="registraton-username-label">
                    User Name:
                </label>
                <Field name="username" type="text" placeholder="Create Username" />
                </div>
                <div className="password">
                <label htmlFor="password" className="registraton-password-label">
                    Enter Password:
                </label>
                <Field name="password" type="password" placeholder="Enter Password"></Field>
                </div>
                <button type="submit" className="sumbit">Submit</button>
            </Form>
        </div>
    )
}

const FormixRegistrationForm = withFormik({
    mapPropsToValues({username, password}){
        return {
            username: username || '',
            password: password || ''
        };
    },

    validationSchema: yup.object().shape({
        username: yup.string().required('Please Enter A Username.'),
        password: yup.string().required('Please Enter A Password.')
    })


})(RegistrationForm);

export default FormixRegistrationForm;