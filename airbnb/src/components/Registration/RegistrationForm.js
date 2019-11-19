import React from 'react';
import { withFormik } from 'formik';


const RegistrationForm= () => {
    return(
        <div className="registration">
            <h2>Create Your Account!</h2>
            <form action="" className="registration-form">
                <div className="username-group">
                <label htmlFor="username" className="registraton-username-label">
                    User Name:
                </label>
                <input type="text" className="registration-form-input"/>
                </div>
                <div className="password">
                <label htmlFor="password" className="registraton-password-label">
                    Enter Password:
                </label>
                <input type="text" className="registration-form-input"/>
                </div>
                <div>
                <label htmlFor="password2" className="registraton-password2-label">
                    Confirm Password:
                </label>
                <input type="text" className="registration-form-input"/>
                </div>

            </form>
        </div>
    )
}


export default RegistrationForm;