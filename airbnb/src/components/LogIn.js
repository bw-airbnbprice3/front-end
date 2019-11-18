import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const LogIn = ({ values, errors, touched }) => {
  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: ""
  });

  return (
    <div>
      <h2>Log In</h2>
      <Form>
        <div>
          <Field type="text" name="username" placeholder="Username" />
          {touched.username && errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <Field type="password" name="password" placeholder="Password" />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Log In</button>
      </Form>
    </div>
  );
};

const LogInForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username required"),
    password: Yup.string()
      .min(3, "Password must be 6 characters or longer")
      .required("Password is required")
  }),

  handleSubmit(values) {
    console.log(values);
    AxiosWithAuth()
      .post("/api/login/", values)
      .then(response => {
        const { data } = response;
        sessionStorage.setItem("token", data.token);
        console.log(response);
      })
      .catch(error => console.log(error));
  }
})(LogIn);

export default LogInForm;
