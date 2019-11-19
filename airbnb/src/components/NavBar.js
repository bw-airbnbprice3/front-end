import React from "react";
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';

const NavBar = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <nav className="nav-bar">
                    <div>
                        <Button color="inherit" onClick={() => props.history.push("/listings")}>View Listings</Button>
                        <Button color="inherit" onClick={() => props.history.push("/listing/add")}>Add New Listing</Button>
                        <Button color="inherit" onClick={() => props.history.push("/user")}>User Profile</Button>
                    </div>
                    <div>
                        <Button color="inherit" onClick={() => props.history.push("/")}>Log In</Button>
                        <Button color="inherit" onClick={() => props.history.push("/register")}>Register</Button>
                    </div>
                </nav>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;