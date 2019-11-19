import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Container, Card, Typography, Link as MaterialLink} from '@material-ui/core';
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const ViewAllListings = () => {
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
            <Link to={`/listing/${listing.id}`}>
            <Typography variant="h3">
              <MaterialLink>
              {listing.property_name}
              </MaterialLink>
            </Typography>
            <Typography variant="h4">{listing.neighborhood}</Typography>
            </Link>
            <div>
              <Link to={`/listing/${listing.id}/edit`}>
              <button>Edit</button>
              </Link>
              <button>Delete</button>
            </div>
          
          </Card>     
        ))
      }
    </div>

  );
};

export default ViewAllListings;