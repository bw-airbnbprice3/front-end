import React from "react";
import {Link} from "react-router-dom";
import {AppBar, Toolbar, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  navContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width: 800px)": {
      flexDirection: "column"
    }
  },
  navTitle: {
    display: "flex",
    alignItems: "baseline",
    "@media(max-width: 800px)": {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  logo: {
    marginRight: 20,
    "&:hover": {
      cursor: "pointer"
    },
    "@media(max-width: 800px)": {
      marginRight: 0,
      marginBottom: -15
    }
  },
  navBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    "@media(max-width: 600px)": {
      flexDirection: "column"
    }
  },
  navLeft: {
    "@media(max-width: 600px)": {
      display: "flex",
      flexDirection: "column"
    }
  },
  navRight: {
    "@media(max-width: 600px)": {
      display: "flex",
      flexDirection: "column"
    }
  },
  btn: {
      "@media(max-width: 800px)": {
          marginBottom: 10
      },
  },
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
        <div className={classes.navTitle}>
          <h1 className={classes.logo}
              onClick={sessionStorage.getItem("token") ? () => props.history.push("/listings") : () => props.history.push("/")}>Hostify</h1>
          {sessionStorage.getItem("token") ? <p>Welcome, {sessionStorage.getItem("username")}!</p> : null}
        </div>
        <nav className={classes.navBar}>
          {sessionStorage.getItem("token") ? (
            <>
              <div className={classes.navLeft}>
                  <Button className={classes.btn}
                          color="inherit"
                          href={"/listings"}
                  >
                    View Listings
                  </Button>
                <Button className={classes.btn}
                        color="inherit"
                        href={"/add"}
                >
                  Add New Listing
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
              <div/>
              <div className={classes.navRight}>
                <Button className={classes.btn} color="inherit" href={"/"} >
                  Log In
                </Button>
                <Button className={classes.btn}
                        color="inherit"
                        href={"/register"}
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
