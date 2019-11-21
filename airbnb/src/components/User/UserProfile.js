import React from 'react';
import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "center"
    },

    btn: {
        width: 175,
        marginBottom: 20
    }
});

const UserProfile = props => {
    const classes = useStyles();

    return (
        <div>
            <h1>Welcome User</h1>
            <div className={classes.buttonContainer}>
                <Button className={classes.btn} variant="contained" color={"primary"} size={"large"} margin={"3%"} onClick={() => props.history.push('/user/edit')}>Edit Profile</Button>
                <Button className={classes.btn} variant="contained" color={"secondary"} size={"large"} margin={"3%"} onClick={() => props.history.push('/')}>Log Out</Button>
            </div>
        </div>
    )
};

export default UserProfile;