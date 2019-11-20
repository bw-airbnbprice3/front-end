import React, {useState, useEffect} from "react";
// import {Link} from "react-router-dom";
import {Button, Card, Typography, Link } from '@material-ui/core';
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const ViewAllListings = (props) => {
  const [listings, setListings] = useState([]);
  // Grabs all of the listings that are available from the data end points.
  useEffect(() => {
    AxiosWithAuth().get('api/listings/').then(response => {
      console.log(response.data);
      setListings(response.data);
    })
    .catch(error => console.log(error));
   
  }, []);
  // Need to map over all of the listings here
  return (
    <div>
      <h1>Current Listings</h1>
      {
        listings.map(listing => (
          <Card key={listing.id}>
            <Link onClick={() => props.history.push(`/listing/${listing.id}`)}>
              <Typography variant="h3">
                {listing.property_name}
              </Typography>
              <Typography variant="h4">{listing.neighborhood}</Typography>
            </Link>
            <div>
              <Link onClick={() => props.history.push(`/listing/${listing.id}/edit`)}>
                <Button variant="contained" color="primary">Edit</Button>
              </Link>
              <Button variant="contained" color="secondary">Delete</Button>
            </div>
          
          </Card>     
        ))
      }
    </div>

  );
};

export default ViewAllListings;