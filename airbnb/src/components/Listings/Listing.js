import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const Listing = props => {
    const [listings, setListings] = useState([])

    const currentListing = listings.find(
        listing => listing.id === Number(props.match.params.id)
    );
    console.log(currentListing);
    
    useEffect(() => {
        AxiosWithAuth().get("api/listings/")
        .then(res => {
            setListings(res.data);
        }).catch(err => {console.log(err)})
    }, []);

    return (
        <div>
            { currentListing ?  
                (
                    <div>
                        <h2>{currentListing.property_name}</h2>
                        <div>
                            <p>Room Type:</p>
                            <p>{currentListing.room_type}</p>
                        </div>
                        <div>
                            <p>Address:</p>
                            <p>{currentListing.address}</p>
                        </div>
                        <div>
                            <p>Neighborhood Group:</p>
                            <p>{currentListing.neighborhood_group}</p>
                        </div>
                        <div>
                            <p>Neighborhood:</p>
                            <p>{currentListing.neighborhood}</p>
                        </div>
                        <div>
                            <p>Availability:</p>
                            <p>{currentListing.availability_of_year} days of the year</p>
                        </div>
                        <div>
                            <p>Property Price:</p>
                            <p>€{currentListing.property_price} per night</p>
                        </div>
                        <div>
                            <p>Bedrooms:</p>
                            <p>{currentListing.bedroom_number}</p>
                        </div>
                        <div>
                            <p>Bathrooms:</p>
                            <p>{currentListing.bathroom_number}</p>
                        </div>
                        <div>
                            <p>Minimum Nights:</p>
                            <p>{currentListing.minimum_nights}</p>
                        </div>
                        <div>
                            <p>Amenities:</p>
                            <p>{currentListing.property_amenities}</p>
                        </div>
                    </div>
                )
                : <p>Loading...</p>
            }
            <nav>
                <Link to='/listing/id/edit'>Edit Listing</Link>
                <Link to="/listings">Delete Listing</Link>
                <Link to='/listings'>Return</Link>
            </nav>

        </div>
    )
}

export default Listing;