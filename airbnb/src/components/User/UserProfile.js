import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    return (
        <div>
            <h1>Welcome User</h1>
            <nav>
                <Link to='/user/edit'>Edit Profile</Link>
                <Link to='/'>Log Out</Link>
            </nav>
        </div>
    )
};

export default UserProfile;