import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';

const NavBar = props => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                    <nav>
                        <Button color="inherit" onClick={() => props.history.push("/listings")}>View Listings</Button>
                        <Link to="/listing/add">Add New Listing</Link>
                        <Link to="/user">User Profile</Link>
                        <Link to="/">Log In</Link>
                        <Link to="/register">Register</Link>
                    </nav>
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default NavBar;