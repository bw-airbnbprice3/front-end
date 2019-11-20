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


  return (
    <Box className={classes.viewAllListingsContainer} >

      <Typography variant="h1" className={classes.viewAlllistingsHeading}>Current Listings</Typography>

      {
        listings.map(listing => (
          <Card  key={listing.id} className={classes.viewAllListingsCard}>
             <Link className={classes.viewAllListingsCardHeaderLink} onClick={() => props.history.push(`/listing/${listing.id}`)}>
              <CardHeader titleTypographyProps={{variant:'h3' }} title= {listing.property_name}  className={classes.viewAllListingsCardHeader}/>
             </Link>

             {listings.length === 0 &&
                <Box className={classes.viewAllListingsLoading}>
                    <Typography variant="h4">Loading...</Typography>
                </Box>
              }

            <CardContent className={classes.veiwAllListingsCardContent}>
              <Typography variant="h4">{listing.address}</Typography>
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