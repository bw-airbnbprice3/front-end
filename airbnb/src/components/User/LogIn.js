import React from "react";
import { Link } from "react-router-dom";
import {withFormik, Form} from "formik";
import {FormikTextField} from "formik-material-fields";
import {Button} from "@material-ui/core";
import * as Yup from "yup";
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const LogIn = (props) => {
  return (
    <div>
      <h2>Log In</h2>
      <Form>
        <div>
          <FormikTextField margin={"normal"} variant="outlined" label={"Username..."} type="text" name="username" placeholder="Username..."/>
        </div>
        <div>
          <FormikTextField margin={"normal"} variant="outlined" label={"Password..."} type="password" name="password" placeholder="Password..."/>
        </div>
        <Button variant="contained" color={"primary"} size={"large"} margin={"normal"} type="submit">Log In</Button>
      </Form>
      <Link to="/register">New User? Register Here</Link>
    </div>
  );
};

const LogInForm = withFormik({
  mapPropsToValues({username, password, history}) {
    return {
      username: username || "",
      password: password || "",
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
  }),

  handleSubmit(values, props) {
    // console.log(values);
    AxiosWithAuth()
      .post("/api/login/", values)
      .then(response => {
        const {data} = response;
        sessionStorage.setItem("token", data.token);
        // Had to pass in props.props because of the HOC that is referring back to the form where props are being drilled down
        props.props.history.push("/listings");
      })
      .catch(error => console.log(error));
  }
})(LogIn);

export default LogInForm;
