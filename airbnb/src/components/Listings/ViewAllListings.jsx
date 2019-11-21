import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchListingsData } from "../../actions";
import useStyles from "./ListingMaterialUIStyles";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  Typography,
  CircularProgress
} from "@material-ui/core";
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import CardImg from "../../imgs/apartment.jpg";
import {
  ListingNeighborHood,
  ListingNeighborHoodGroup
} from "./ListingNeighborhoodInfo";

const ViewAllListings = props => {
  const classes = useStyles();
  const sessionStorageUsername = sessionStorage.getItem("username");

  useEffect(() => {
    props.fetchListingsData(sessionStorageUsername);
  }, [sessionStorageUsername]);

  const deleteListing = listing => {
    const sessionStorageUsername = sessionStorage.getItem("username");
    AxiosWithAuth()
      .delete(`api/listings/${sessionStorageUsername}/${listing.id}`)
      .then(response => {
        props.fetchListingsData(sessionStorageUsername);
      })
      .catch(error => console.log(error));
  };

  return (
    <Box className={classes.viewAllListingsContainer}>
      {props.isFetching && (
        <CircularProgress color="primary" style={{ marginTop: "3%" }} />
      )}
      {props.errors && <div>{props.errors}</div>}

      {props.isFetching === false && (
        <>
          <Typography
            variant="h1"
            className={`${classes.viewAlllistingsHeading} fade-in`}
          >
            Current Listings
          </Typography>
          <Box className={classes.viewAllListingsCardBox}>
            {props.listingData.length !== 0 &&
              props.listingData.map(listing => (
                <Card
                  key={listing.id}
                  className={classes.viewAllListingsCard}
                  raised
                >
                  <CardHeader
                    titleTypographyProps={{ variant: "h6" }}
                    title={listing.property_name}
                    subheader={listing.address}
                    className={classes.viewAllListingsCardHeader}
                  />
                  <CardMedia
                    component="img"
                    image={CardImg}
                    className={`${classes.veiwAllListingsCardContent} fade-in`}
                  />
                  <CardContent className={classes.veiwAllListingsCardContent}>
                    <ListingNeighborHoodGroup listing={listing} />
                    <ListingNeighborHood listing={listing} />
                  </CardContent>
                  <CardActions>
                    <ButtonGroup
                      variant="contained"
                      size="large"
                      aria-label="small contained button group"
                    >
                      <Button href={`/listing/${listing.id}`} color="primary">
                        View
                      </Button>
                      <Button href={`/listing/${listing.id}/edit`}>Edit</Button>
                      <Button
                        color="secondary"
                        onClick={() => deleteListing(listing)}
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </CardActions>
                </Card>
              ))}
          </Box>
        </>
      )}
    </Box>
  );
};

const mapStateToProps = state => {
  // console.log('MAP STATE TO PROPS: ', state);
  return {
    listingData: state.listingData,
    isFetching: state.isFetching,
    errors: state.errors,
    isEditing: state.isEditing
  };
};

export default connect(mapStateToProps, { fetchListingsData })(ViewAllListings);
