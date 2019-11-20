import React, {useState, useEffect} from "react";
import useStyles from './ListingMaterialUIStyles';
import { Box, Button, Card, CardContent, CardHeader, CardActions, Typography, Link } from '@material-ui/core';
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const ViewAllListings = (props) => {
  const classes = useStyles();

  const [listings, setListings] = useState([]);
  // Grabs all of the listings that are available from the data end points.
  useEffect(() => {
    AxiosWithAuth().get('api/listings/').then(response => {
      setListings(response.data);
    })
    .catch(error => console.log(error));
   
  }, []);
  console.log(listings);
  return (
    <Box className={classes.viewAllListingsContainer} >

      <Typography variant="h1" className={classes.viewAlllistingsHeading}>Current Listings</Typography>
      
      {
        listings.map(listing => (
          <Card  key={listing.id} display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" >
             <Link onClick={() => props.history.push(`/listing/${listing.id}`)}>
              <CardHeader title= {listing.property_name} />
             </Link>
            <CardContent>
            <Typography variant="h4">{listing.address}</Typography>
              
                {/* <Typography variant="h3">
                 
                </Typography> */}
             
            
            {/* <Link onClick={() => props.history.push(`/listing/${listing.id}`)}>
              <Typography variant="h4">{listing.neighborhood}</Typography>
            </Link> */}
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