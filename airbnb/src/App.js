import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LogInForm from './components/LogIn';
import UserProfile from './components/UserProfile';
import UserEdit from './components/UserEdit';
import ListingAdd from './components/ListingAdd';
import Listing from './components/Listing';
import ListingEdit from './components/ListingEdit';

function App() {
  return (
    <div className="App">
        <Route exact path ='/' component={LogInForm} />
        {/* <Route path='/register' component={NewUser} /> */}
        <Route exact path='/user' component={UserProfile} />
        <Route path='/user/edit' component={UserEdit} />
        {/* <Route exact path='/listings' component={Listings} /> */}
        <Route path='/listings/add' component={ListingAdd} />
        <Route exact path='/listings/id' component={Listing} />
        <Route path='/listings/id/edit' component={ListingEdit} />
    </div>
  );
}

export default App;
