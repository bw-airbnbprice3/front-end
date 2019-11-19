import React, {useState, useEffect} from 'react';
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import {Container, Button, Card} from '@material-ui/core';

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
                    <Container maxWidth="sm">
                        <h2>{currentListing.property_name}</h2>
                        <Card className="listing-data">
                            <p>Room Type: {currentListing.room_type}</p>
                        </Card>
                        <Card className="listing-data">
                            <p>Address: {currentListing.address}</p>
                        </Card>
                        <Card className="listing-data">
                            <p>Neighborhood Group: {currentListing.neighborhood_group}</p>
                        </Card>
                        <Card className="listing-data">
                            <p>Neighborhood: {currentListing.neighborhood}</p>
                        </Card>
                        <Card className="listing-data">
                            <p>Availability: {currentListing.availability_of_year} days of the year</p>
                        </Card>
                        <Card className="listing-data">
                            <p>Property Price: €{currentListing.property_price} per night</p>
                        </Card>
                        <Card className="listing-data">
                            <p>Bedrooms: {currentListing.bedroom_number}</p>
                        </Card>
                        <Card className="listing-data">
                            <p>Bathrooms: {currentListing.bathroom_number}</p>
                        </Card>
                        <Card className="listing-data">
                            <p>Minimum Nights: {currentListing.minimum_nights}</p>
                        </Card>
                        <Card className="listing-data">
                            <p>Amenities: {currentListing.property_amenities}</p>
                        </Card>
                    </Container>
                )
                : <p>Loading...</p>
            }
            <nav>
                <Button size={"large"} margin={"normal"} variant={"contained"} color={"primary"} onClick={currentListing ? () => props.history.push(`/listing/${currentListing.id}/edit`) : null}>Edit Listing</Button>
                <Button size={"large"} margin={"normal"} variant={"contained"} color={"secondary"} onClick={() => props.history.push("/listings")}>Delete Listing</Button>
                <Button size={"large"} margin={"normal"} variant={"contained"} color={"primary"} onClick={() => props.history.push('/listings')}>Return</Button>
            </nav>

        </div>
    )
}

export default Listing;