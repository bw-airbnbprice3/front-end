import React, {useState} from 'react';
import {Button, Container, TextField} from "@material-ui/core";
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

const RegistrationForm = (props) => {
    const classes = useStyles();
    const [loginCredentials, setLoginCredentials] = useState({username: '', password: ''});

    const handleChange = event => {
        setLoginCredentials({...loginCredentials, [event.target.name]: event.target.value});
    };

    const registerUser = event => {
        event.preventDefault();

        AxiosWithAuth()
          .post('api/register/', loginCredentials)
          .then(response => {
              props.history.push("/");
          })
          .catch(error => console.log(error));
    };

    return(
        <Container maxWidth={"sm"} className="registration fade-in">
            <h2>Create Your Account!</h2>
            <form className={classes.formStyle} onSubmit={registerUser} >
                <div className="username-group">
                    <TextField required fullWidth margin={"normal"} variant="outlined" label={"Create Username"} type="text" name="username" placeholder="Create Username" onChange={handleChange} />
                </div>
                <div>
                    <TextField required fullWidth margin={"normal"} variant="outlined" label={"Create Password"} type="password" name="password" placeholder="Create Password" onChange={handleChange} />
                </div>
                    <Button fullWidth className={classes.btn} variant="contained" color={"primary"} size={"large"} margin={"normal"} type="submit">Register</Button>
            </form>
        </Container>
    )
}


export default RegistrationForm;