import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div>
            <h1>Welcome User</h1>
            <nav>
                <Link to='/listings/add'>Add New Listing</Link>
                <Link to='/user/edit'>Edit Profile</Link>
                <Link to='/'>Log Out</Link>
            </nav>
            <div>
                <h2>Listings</h2>
                <div>
                    <p>Map listings here</p>
                </div>
            </div>
        </div>
    )
};

export default UserProfile;