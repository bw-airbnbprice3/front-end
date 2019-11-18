import React from 'react';
import { Link } from 'react-router-dom';

const Listing = () => {
    return (
        <div>
            <h2>Property Name</h2>
            <div>
                <p>Property Type:</p>
                <p>Type</p>
            </div>
            <div>
                <p>Location:</p>
                <p>Location, USA</p>
            </div>
            <div>
                <p>Price:</p>
                <p>€50 per night</p>
            </div>
            <div>
                <p>Minimum Stay:</p>
                <p>2 nights</p>
            </div>
            <div>
                <p>Amenities:</p>
                <ul>
                    <li>Amenity 1</li>
                    <li>Amenity 2</li>
                    <li>Amenity 3</li>
                </ul>
            </div>
            <nav>
                <Link to='/edit'>Edit Listing</Link>
                <Link>Delete Listing</Link>
                <Link to='../user'>Return to Dashboard</Link>
            </nav>

        </div>
    )
}

export default Listing;