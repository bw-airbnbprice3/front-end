import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import LogInForm from "./components/LogIn";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LogInForm} />
      {/* <Route path='/register' component={NewUser} />
        <Route exact path='/user' component={UserProfile} />
        <Route path='/user/edit' component={UserEdit} />
        <Route exact path='/listing/id' component={Listing} />
        <Route path='/listing/id/edit' component={ListingEdit} /> */}
    </div>
  );
}

export default App;
