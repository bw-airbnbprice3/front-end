import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    logo: {
        width: "9%",
        "&:hover": {
            cursor: "pointer"
        }
    },
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
  // destroys the token and the username session that is being stored and redirects the user to the login page.
  const destroySessionStorage = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    props.history.push("/");
  };

  return (
    <AppBar position="static">
      <Toolbar className={classes.navContainer}>
        <h1 className={classes.logo} onClick={sessionStorage.getItem("token") ? () => props.history.push("/listings") : () => props.history.push("/")}>Hostify</h1>
        <nav className={classes.navBar}>
          {sessionStorage.getItem("token") ? (
            <>
              <div>
                <Button
                  color="inherit"
                  onClick={() => props.history.push("/listings")}
                >
                  View Listings
                </Button>
                <Button
                  color="inherit"
                  onClick={() => props.history.push("/add")}
                >
                  Add New Listing
                </Button>
                <Button
                  color="inherit"
                  onClick={() => props.history.push("/user")}
                >
                  User Profile
                </Button>
              </div>
              <div>
                <Button color="inherit" onClick={destroySessionStorage}>
                  Log Out
                </Button>
              </div>
            </>
          ) : (
            <>
              <div />
              <div>
                <Button color="inherit" onClick={() => props.history.push("/")}>
                  Log In
                </Button>
                <Button
                  color="inherit"
                  onClick={() => props.history.push("/register")}
                >
                  Register
                </Button>
              </div>
            </>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
