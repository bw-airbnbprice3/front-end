import React from "react";
import {AppBar, Toolbar, Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    navContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    navBar: {
        width: "90%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

const NavBar = props => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar className={classes.navContainer}>
                <h1>Hostify</h1>
                <nav className={classes.navBar}>                    
                    {sessionStorage.getItem('token') ?
                        <div>                            
                            <Button color="inherit" onClick={() => props.history.push("/listings")}>View Listings</Button>
                            <Button color="inherit" onClick={() => props.history.push("/add")}>Add New Listing</Button>
                            <Button color="inherit" onClick={() => props.history.push("/user")}>User Profile</Button>
                        </div>
                    :
                        <div />
                    }
                    {sessionStorage.getItem('token') ?
                        <div>
                            <Button color="inherit" onClick={() => props.history.push("/")}>Log Out</Button>
                        </div>
                    : 
                        <div>
                            <Button color="inherit" onClick={() => props.history.push("/")}>Log In</Button>
                            <Button color="inherit" onClick={() => props.history.push("/register")}>Register</Button>
                        </div>
                    }
                </nav>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;