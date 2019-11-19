import React from "react";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";

<<<<<<< HEAD
import LogInForm from "./components/LogIn";
import ViewAllListings from "./components/Listings/ViewAllListings";

function App() {
  return (
    <div className={"App"}>
      <Route exact path="/" component={LogInForm}/>

      {/*Private routes can be added here. Just follow the basic template below. This will automatically check if the token is saved in storage. If not, it will redirect them to the login page*/}
      <Switch>
        <PrivateRoute path={"/listings"} component={ViewAllListings}/>
      </Switch>
      {/* <Route path='/register' component={NewUser} />
          <Route exact path='/user' component={UserProfile} />
          <Route path='/user/edit' component={UserEdit} />
          <Route exact path='/listing/id' component={Listing} />
          <Route path='/listing/id/edit' component={ListingEdit} /> */}
=======
import LogInForm from './components/LogIn';
import UserProfile from './components/UserProfile';
import UserEdit from './components/UserEdit';
import ListingAdd from './components/ListingAdd';
import Listing from './components/Listing';
import ListingEdit from './components/ListingEdit';

function App() {
  return (
    <div className="App">

      <Route exact path="/" component={LogInForm} />
      {/* <Route path='/register' component={NewUser} /> */}
      <Route exact path='/user' component={UserProfile} />
      <Route path='/user/edit' component={UserEdit} />
      {/* <Route exact path='/listings' component={Listings} /> */}
      <Route path='/listings/add' component={ListingAdd} />
      <Route exact path='/listings/id' component={Listing} />
      <Route path='/listings/id/edit' component={ListingEdit} />
>>>>>>> 32268b991b0c8baf21b5227dca1051871b0786ce
    </div>
  );
}

export default App;
