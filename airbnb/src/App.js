import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LogInForm from './components/LogIn';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="App">
        <Route exact path ='/' component={LogInForm} />
        {/* <Route path='/register' component={NewUser} /> */}
        <Route exact path='/user' component={UserProfile} />
        {/* <Route path='/user/edit' component={UserEdit} />
        <Route path='/listings/add' component={AddListing} />
        <Route exact path='/listings/id' component={Listing} />
        <Route path='/listings/id/edit' component={ListingEdit} /> */}
    </div>
  );
}

export default App;
