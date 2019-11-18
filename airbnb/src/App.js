import React from "react";
import {Route, Switch} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import "./App.css";

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
    </div>
  );
}

export default App;
