import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div>
            <h1>Welcome User</h1>
            <nav>
                <Link to='./listings'>View Listings</Link>
                <Link to='./listings/add'>Add New Listing</Link>
                <Link to='/user/edit'>Edit Profile</Link>
                <Link to='/'>Log Out</Link>
            </nav>
        </div>
    )
};

export default UserProfile;