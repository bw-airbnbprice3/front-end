import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Button, Card, CardContent, CardActions, Typography, Link } from '@material-ui/core';
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const ViewAllListings = (props) => {
  const [listings, setListings] = useState([]);
  // Grabs all of the listings that are available from the data end points.
  useEffect(() => {
    AxiosWithAuth().get('api/listings/').then(response => {
      setListings(response.data);
    })
    .catch(error => console.log(error));
   
  }, []);
 
  return (
    <Box>
      <Typography variant="h1">Current Listings</Typography>
      {
        listings.map(listing => (
          <Card key={listing.id}>
            <CardContent>
            <Link onClick={() => props.history.push(`/listing/${listing.id}`)}>
              <Typography variant="h3">
                {listing.property_name}
              </Typography>
            </Link>
            <Link onClick={() => props.history.push(`/listing/${listing.id}`)}>
              <Typography variant="h4">{listing.neighborhood}</Typography>
            </Link>
            </CardContent>
            <CardActions>
              <Link onClick={() => props.history.push(`/listing/${listing.id}/edit`)}>
                <Button variant="contained" color="primary">Edit</Button>
              </Link>
              <Button variant="contained" color="secondary">Delete</Button>
            </CardActions>
          </Card>     
        ))
      }
    </Box>

  );
};

export default ViewAllListings;