import React from "react";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    logo: {
        "&:hover": {
            cursor: "pointer"
        }
    },
    navContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "@media(max-width: 800px)": {
            flexDirection: "column"
        }
    },
    navBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        "@media(max-width: 600px)":{
            flexDirection: "column"
        }
    },
    navLeft: {
        "@media(max-width: 600px)":{
            display: "flex",
            flexDirection: "column"
        }
    },
    navRight: {
        "@media(max-width: 600px)":{
            display: "flex",
            flexDirection: "column"
        }
    },
    btn: {
        "@media(max-width: 800px)":{
            marginBottom: 10
        }
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
      <Toolbar className={`${classes.navContainer} nav-container`}>
        <h1 className={classes.logo} onClick={sessionStorage.getItem("token") ? () => props.history.push("/listings") : () => props.history.push("/")}>Hostify</h1>
        <nav className={classes.navBar}>
          {sessionStorage.getItem("token") ? (
            <>
              <div className={classes.navLeft}>
                <Button className={classes.btn}
                  color="inherit"
                  onClick={() => props.history.push("/listings")}
                >
                  View Listings
                </Button>
                <Button className={classes.btn}
                  color="inherit"
                  onClick={() => props.history.push("/add")}
                >
                  Add New Listing
                </Button>
                <Button className={classes.btn}
                  color="inherit"
                  onClick={() => props.history.push("/user")}
                >
                  User Profile
                </Button>
              </div>
              <div className={classes.navRight}>
                <Button className={classes.btn} color="inherit" onClick={destroySessionStorage}>
                  Log Out
                </Button>
              </div>
            </>
          ) : (
            <>
              <div />
              <div className={classes.navRight}>
                <Button className={classes.btn} color="inherit" onClick={() => props.history.push("/")}>
                  Log In
                </Button>
                <Button className={classes.btn}
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
