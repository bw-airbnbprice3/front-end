import React from 'react';
import { withFormik } from 'formik';


const RegistrationForm= ({values, handleChange}) => {

    console.log(values);

    return(
        <div className="registration">
            <h2>Create Your Account!</h2>
            <form action="" className="registration-form">
                <div className="username-group">
                <label htmlFor="username" className="registraton-username-label">
                    User Name:
                </label>
                <input name="username"type="text" className="registration-form-input" value={values.username} onChange={handleChange} />
                </div>
                <div className="password">
                <label htmlFor="password" className="registraton-password-label">
                    Enter Password:
                </label>
                <input name="password" type="password" className="registration-form-input" value={values.password} onChange={handleChange}/>
                </div>
                {/* <div>
                <label htmlFor="password2" className="registraton-password2-label">
                    Confirm Password:
                </label>
                <input name="password2" type="password" className="registration-form-input" onChange={handleChanges}/>
                </div> */}
                <button type="submit" className="sumbit">Submit</button>
            </form>
        </div>
    )
}


const FormixRegistrationForm = withFormik({
    mapPropsToValues({username, password}){
        return {
            username: username || '',
            password: password || ''
        }
    }
})(RegistrationForm);

export default FormixRegistrationForm;