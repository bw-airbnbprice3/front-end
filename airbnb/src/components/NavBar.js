import React from "react";
import {AppBar, Toolbar, Button} from '@material-ui/core';

const NavBar = props => {
    return (
        <AppBar position="static">
            <Toolbar className="nav-bar">
                <h1>Hostify</h1>
                <nav className="nav">                    
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