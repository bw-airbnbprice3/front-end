import React from "react";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";

import LogInForm from "./components/User/LogIn";
import ViewAllListings from "./components/Listings/ViewAllListings";
import UserProfile from './components/User/UserProfile';
import UserEdit from './components/User/UserEdit';
import ListingAdd from './components/Listings/ListingAdd';
import Listing from './components/Listings/Listing';
import ListingEdit from './components/Listings/ListingEdit';
import RegistrationForm from './components/User/RegistrationForm';

function App() {
  return (
    <div className={"App"}>
      <Route exact path="/" component={LogInForm}/>
      <Route path="/register" component={RegistrationForm} />

      {/*Private routes can be added here. Just follow the basic template below. This will automatically check if the token is saved in storage. If not, it will redirect them to the login page*/}
      <Switch>
        <PrivateRoute path={"/listings"} component={ViewAllListings}/>
        <PrivateRoute path={"/user/edit"} component={UserEdit} />
        <PrivateRoute path='/listing/add' component={ListingAdd} />
        <PrivateRoute exact path='/listing/id' component={Listing} />
        <PrivateRoute path='/listing/id/edit' component={ListingEdit} />
        <PrivateRoute exact path='/user' component={UserProfile} />
      </Switch>

      {/* <Route path='/register' component={NewUser} /> */}

    </div>
  );
}

export default App;
