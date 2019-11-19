import React, {useState} from 'react';
import { withFormik } from 'formik';


const RegistrationForm= () => {
    const [ user, setUser] = useState();

    const handleChanges = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submitForm = e => {
        e.preventDefault();
        console.log(user)
    }

    return(
        <div className="registration">
            <h2>Create Your Account!</h2>
            <form action="" className="registration-form">
                <div className="username-group">
                <label htmlFor="username" className="registraton-username-label">
                    User Name:
                </label>
                <input name="username"type="text" className="registration-form-input" onChange={handleChanges}/>
                </div>
                <div className="password">
                <label htmlFor="password" className="registraton-password-label">
                    Enter Password:
                </label>
                <input name="password" type="password" className="registration-form-input" onChange={handleChanges}/>
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


export default RegistrationForm;