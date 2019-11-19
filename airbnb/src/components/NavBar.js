import React from "react";
import {AppBar, Toolbar, Button} from '@material-ui/core';

const NavBar = props => {

  // destroys the token and the username session that is being stored and redirects the user to the login page.
  const destroySessionStorage = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    props.history.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <nav className="nav-bar">

          {sessionStorage.getItem('token') ?
            <>
              <div>
                <Button color="inherit" onClick={() => props.history.push("/listings")}>View Listings</Button>
                <Button color="inherit" onClick={() => props.history.push("/add")}>Add New Listing</Button>
                <Button color="inherit" onClick={() => props.history.push("/user")}>User Profile</Button>
              </div>
              <div>
                <Button color="inherit" onClick={destroySessionStorage}>Log Out</Button>
              </div>
            </>
            :
            <>
            <div />
            <div>
              <Button color="inherit" onClick={() => props.history.push("/")}>Log In</Button>
              <Button color="inherit" onClick={() => props.history.push("/register")}>Register</Button>
            </div>
            </>
          }
        </nav>
      </Toolbar>
    </AppBar>
  )
};

export default NavBar;