import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {fetchListingsData} from "../../actions";
import useStyles from "./ListingMaterialUIStyles";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  Link
} from "@material-ui/core";
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import {
  ListingNeighborHood,
  ListingNeighborHoodGroup
} from "./ListingNeighborhoodInfo";

const ViewAllListings = props => {
  const classes = useStyles();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const sessionStorageUsername = sessionStorage.getItem("username");
    props.fetchListingsData(sessionStorageUsername);
  }, []);

  const deleteListing = listing => {
    AxiosWithAuth()
      .delete(`api/listings/${listing.id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };

  return (

    <Box className={classes.viewAllListingsContainer}>
      {props.isFetching && <span>Loading State...</span>}
      {props.errors && <div>{props.errors}</div>}

      <Typography variant="h1" className={classes.viewAlllistingsHeading}>
        Current Listings
      </Typography>

      {listings.map(listing => (
        <Card key={listing.id} className={classes.viewAllListingsCard}>
          <Link
            className={classes.viewAllListingsCardHeaderLink}
            onClick={() => props.history.push(`/listing/${listing.id}`)}
          >
            <CardHeader
              titleTypographyProps={{variant: "h4"}}
              title={listing.property_name}
              className={classes.viewAllListingsCardHeader}
            />
          </Link>

          {listings.length === 0 && (
            <Box className={classes.viewAllListingsLoading}>
              <Typography variant="h4">Loading...</Typography>
            </Box>
          )}

          <CardContent className={classes.veiwAllListingsCardContent}>
            <ListingNeighborHoodGroup listing={listing}/>
            <ListingNeighborHood listing={listing}/>
            <Typography variant="button">{listing.address}</Typography>
          </CardContent>
          <CardActions>
            <Link
              href={`/listing/${listing.id}/edit`}
            >
              <Button variant="contained" color="primary">
                Edit
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteListing(listing)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

const mapStateToProps = state => {
  return {
    listingData: state.listingData,
    isFetching: state.isFetching,
    errors: state.errors
  };
};

export default connect(mapStateToProps, {fetchListingsData})(ViewAllListings);
