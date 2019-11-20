import React from 'react';
import { withFormik, Form } from 'formik';
import {FormikTextField} from "formik-material-fields";
import {Button} from "@material-ui/core";
import * as yup from 'yup';
import AxiosWithAuth from '../../utils/AxiosWithAuth';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    formStyle: {
      margin: 10
    },
    btn: {
      margin: 10
    }
  });

const RegistrationForm= (props) => {
    const classes = useStyles();

    return(
        <div className="registration">
            <h2>Create Your Account!</h2>
            <Form className={classes.formStyle}>
                <div className="username-group">
                    <FormikTextField margin={"normal"} variant="outlined" label={"Create Username"} type="text" name="username" placeholder="Create Username"/>
                </div>
                <div>
                    <FormikTextField margin={"normal"} variant="outlined" label={"Create Password"} type="password" name="password" placeholder="Create Password"/>
                </div>
                    <Button className={classes.btn} variant="contained" color={"primary"} size={"large"} margin={"normal"} type="submit" disabled={props.isSubmitting ? true : false}>Register</Button>
            </Form>
        </div>
    )
}

const FormikRegistrationForm = withFormik({
    mapPropsToValues({username, password}){
        return {
            username: username || "",
            password: password || ""
        };
    },

    validationSchema: yup.object().shape({
        username: yup.string().required("Please Enter A Username."),
        password: yup.string().required("Please Enter A Password.")
    }),

    handleSubmit(values, props){
        AxiosWithAuth().post('/api/register/', values)
        .then(response => {
            console.log(response);
            props.props.history.push("/");
        })
        .catch(err => console.log(err));
    }

})(RegistrationForm);

export default FormikRegistrationForm;