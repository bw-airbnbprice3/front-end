import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import LogInForm from "./components/User/LogIn";
import ViewAllListings from "./components/Listings/ViewAllListings";
import UserProfile from "./components/User/UserProfile";
import UserEdit from "./components/User/UserEdit";
import ListingAdd from "./components/Listings/ListingAdd";
import Listing from "./components/Listings/Listing";
import ListingEdit from "./components/Listings/ListingEdit";
import NavBar from "./components/NavBar";
import FormikRegistrationForm from "./components/User/RegistrationForm";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#b9888c',
      main: '#885b5f',
      dark: '#5a3135',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className={"App"}>
        <Route path="/" component={NavBar} />
        <Route exact path="/" component={LogInForm} />
        <Route path="/register" component={FormikRegistrationForm} />
  
        {/*Private routes can be added here. Just follow the basic template below. This will automatically check if the token is saved in storage. If not, it will redirect them to the login page*/}
        <Switch>
          <PrivateRoute path={"/listings"} component={ViewAllListings} />
          <PrivateRoute path={"/user/edit"} component={UserEdit} />
          <PrivateRoute path="/add" component={ListingAdd} />
          <PrivateRoute exact path="/listing/:id" component={Listing} />
          <PrivateRoute path="/listing/:id/edit" component={ListingEdit} />
          <PrivateRoute exact path="/user" component={UserProfile} />
        </Switch>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
