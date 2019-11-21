import React, {useState} from "react";
import {Button, Container, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const useStyles = makeStyles({
  formStyle: {
    margin: 10
  },
  btn: {
    marginTop: "2%"
  }
});

const LogIn = props => {
  const classes = useStyles();
  const [loginCredentials, setLoginCredentials] = useState({username: '', password: ''});

  const handleChange = event => {
    setLoginCredentials({...loginCredentials, [event.target.name]: event.target.value});
  };

  const loginUser = event => {
    event.preventDefault();

    AxiosWithAuth()
      .post('api/login/', loginCredentials)
      .then(response => {
        const {data} = response;
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('username', data.username);
        props.history.push("/listings");
      })
      .catch(error => console.log(error));
  };

  return (
    <Container maxWidth={"sm"} className="fade-in">
      <h2>Log In</h2>
      <form className={classes.formStyle} onSubmit={loginUser}>
        <div>
          <TextField required fullWidth onChange={handleChange} margin={"normal"} variant="outlined"
                     label={"Username..."} type="text" name="username"
                     placeholder="Username..."/>
        </div>
        <div>
          <TextField required fullWidth onChange={handleChange} margin={"normal"} variant="outlined"
                     label={"Password..."} type="password" name="password"
                     placeholder="Password..."/>
        </div>
        <Button fullWidth className={classes.btn} variant="contained" color={"primary"} size={"large"} margin={"normal"}
                type="submit">Log In</Button>
        <Button fullWidth className={classes.btn} variant="contained" color={"secondary"} size={"large"}
                margin={"normal"} href={"/register"}>New User? Register Here</Button>
      </form>

    </Container>
  );
};

export default LogIn;
