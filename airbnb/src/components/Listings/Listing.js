import React, {useState, useEffect} from 'react';
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import {Container, Button, Card} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  dataStyle: {
    display: "flex",
    justifyContent: "flex-start",
    padding: "10px 20px",
    marginBottom: 20
  },
  btn: {
    margin: 10
  }
});

const Listing = props => {
  const classes = useStyles();
  const [listings, setListings] = useState([]);
  const sessionStorageUsername = sessionStorage.getItem('username');

  const currentListing = listings.find(
    listing => listing.id === Number(props.match.params.id)
  );

  const deleteListing = () => {
    AxiosWithAuth().delete(`api/listings/${sessionStorageUsername}/${props.match.params.id}`);
    props.history.push("/listings");
  };

  useEffect(() => {
    AxiosWithAuth().get(`api/listings/${sessionStorageUsername}/${props.match.params.id}`)
      .then(res => {
        setListings(res.data);
      }).catch(err => {console.log(err)})
  }, []);

  return (
    <div>
      { currentListing ?
        (
          <Container maxWidth="sm" className="fade-in">
            <h2>{currentListing.property_name}</h2>
            <Card className={classes.dataStyle}>
              <p>Room Type: {currentListing.room_type}</p>
            </Card>
            <Card className={classes.dataStyle}>
              <p>Address: {currentListing.address}</p>
            </Card>
            <Card className={classes.dataStyle}>
              <p>Neighborhood Group: {currentListing.neighborhood_group}</p>
            </Card>
            <Card className={classes.dataStyle}>
              <p>Neighborhood: {currentListing.neighborhood}</p>
            </Card>
            <Card className={classes.dataStyle}>
              <p>Availability: {currentListing.availability_of_year} days of the year</p>
            </Card>
            <Card className={classes.dataStyle}>
              <p>Property Price: €{currentListing.property_price} per night</p>
            </Card>
            <Card className={classes.dataStyle}>
              <p>Bedrooms: {currentListing.bedroom_number}</p>
            </Card>
            <Card className={classes.dataStyle}>
              <p>Bathrooms: {currentListing.bathroom_number}</p>
            </Card>
            <Card className={classes.dataStyle}>
              <p>Minimum Nights: {currentListing.minimum_nights}</p>
            </Card>
            <Card className={classes.dataStyle}>
              <p>Amenities: {currentListing.property_amenities}</p>
            </Card>

            <nav>
              <Button
                className={classes.btn}
                size={"large"}
                margin={"normal"}
                variant={"contained"}
                color={"secondary"}
                onClick={() => deleteListing(currentListing.id)}
              >
                Delete Listing
              </Button>
              <Button
                className={classes.btn}
                size={"large"}
                margin={"normal"}
                variant={"contained"}
                color={"primary"}
                onClick={currentListing ? () => props.history.push(`/listing/${currentListing.id}/edit`) : null}
              >
                Edit Listing
              </Button>
              <Button
                className={classes.btn}
                size={"large"}
                margin={"normal"}
                variant={"contained"}
                color={"primary"}
                onClick={() => props.history.push('/listings')}
              >
                Return
              </Button>
            </nav>
          </Container>
        )
        : <p>Loading...</p>
      }
    </div>
  )
}

export default Listing;