import React from 'react';
import { withFormik, Form, Field, } from 'formik';


const RegistrationForm= ({values}) => {

    console.log(values);

    return(
        <div className="registration">
            <h2>Create Your Account!</h2>
            <Form>
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
                {/* <input name="password" type="password" className="registration-form-input" value={values.password} onChange={handleChange}/> */}
                </div>
                {/* <div>
                <label htmlFor="password2" className="registraton-password2-label">
                    Confirm Password:
                </label>
                <input name="password2" type="password" className="registration-form-input" onChange={handleChanges}/>
                </div> */}
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
    }
})(RegistrationForm);

export default FormixRegistrationForm;