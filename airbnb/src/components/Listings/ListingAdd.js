import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {Button, InputAdornment, Container, MenuItem, TextField, CircularProgress} from "@material-ui/core";
import {neighborhoodGroups, neighborhoods, roomTypes} from "../../utils/DataFiles";
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import axios from "axios";
import {postPriceOptimizer} from "../../actions";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn: {
    margin: 10
  }
});

const Edit = (props) => {
  const classes = useStyles();

  // Sets the state for various components. The dropdowns need their own state to allow them to change their input and value
  const sessionStorageUsername = sessionStorage.getItem('username');
  const [updatedValues, setUpdatedValues] = useState([]);

  const [roomType, setRoomType] = useState(0);
  const [neighborhoodGroup, setNeighborhoodGroup] = useState(0);
  const [neighborhood, setNeighborhood] = useState(0);

  const roomTypeHandleChange = event => {
    setRoomType(event.target.value);
    setUpdatedValues({...updatedValues, [event.target.name]: event.target.value});
  };

  const neighborhoodGroupHandleChange = event => {
    setNeighborhoodGroup(event.target.value);
    setUpdatedValues({...updatedValues, [event.target.name]: event.target.value});
  };

  const neighborhoodHandleChange = event => {
    setNeighborhood(event.target.value);
    setUpdatedValues({...updatedValues, [event.target.name]: event.target.value});
  };
  const handleUpdates = event => {
    setUpdatedValues({...updatedValues, [event.target.name]: event.target.value});
  };

  const obtainOptimalPricing = () => {
    console.log(updatedValues);
    // console.log(updatedValues);

    const flaskEndPointsArray = {
      neighborhood_group: updatedValues.neighborhood_group,
      neighborhood: updatedValues.neighborhood,
      room_type: updatedValues.room_type,
      minimum_nights: updatedValues.minimum_nights,
      calculated_host_listings_count: 4,
      availability_of_year: updatedValues.availability_of_year,
      bathroom_number: updatedValues.bathroom_number,
      bedroom_number: updatedValues.bedroom_number
    };

    axios.post(`https://cors-anywhere.herokuapp.com/https://hostify.herokuapp.com/input`, flaskEndPointsArray).then(response => console.log(response)).catch(error => console.log(error));
  };

  const handleChanges = event => {
    setUpdatedValues({...updatedValues, [event.target.name]: event.target.value});
  };

  const addPropertyListing = event => {
    event.preventDefault();

    // Sends the posted request to edit the listing ID, and then on successful completion, routes the user back to the listings page.
    AxiosWithAuth()
      .put(`/api/listings/${sessionStorageUsername}`, updatedValues)
      .then(response => {
        props.history.push('/listings');
      })
      .catch(error => console.log(error, updatedValues));
  };

  // / Sets the proper data values here. Since some of the keys return an integer, and the value requires the string, sets the correct data


  return (

    <Container maxWidth={"md"} margin={"3%"}>

      {props.isFetching && <CircularProgress color="primary" style={{marginTop: "3%"}}/>}

      {props.isFetching === false &&
      <>
        <h2>Add New Listing</h2>
        <form onSubmit={addPropertyListing}>
          <TextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Property Name..."}
            type="text"
            name="property_name"
            placeholder="Name of property"
            onChange={handleUpdates}
          />
          ​
          <TextField
            select
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Property Type..."}
            type="text"
            name="room_type"
            value={roomType}
            onChange={roomTypeHandleChange}
            helperText={"Please select the type of property"}
          >
            {roomTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          ​
          <TextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Address..."}
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleUpdates}
          />
          ​
          <TextField
            select
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Neighborhood Group..."}
            type="text"
            name="neighborhood_group"
            value={neighborhoodGroup}
            onChange={neighborhoodGroupHandleChange}
            helperText={"Please select your neighborhood group"}
          >
            {neighborhoodGroups.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          ​
          <TextField
            select
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Neighborhood..."}
            type="text"
            name="neighborhood"
            value={neighborhood}
            onChange={neighborhoodHandleChange}
            helperText={"Please select your neighborhood"}
          >
            {neighborhoods.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          ​
          <TextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Availability During Year.."}
            type="number"
            name="availability_of_year"
            placeholder="Availability During Year..."
            onChange={handleUpdates}
          />
          ​
          <TextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Property Price Per Night..."}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
              placeholder: "Property Price Per Night..."
            }}
            type="number"
            name="property_price"
            onChange={handleUpdates}
          />
          ​
          <TextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Number of Bedroom(s)..."}
            type="number"
            name="bedroom_number"
            onChange={handleUpdates}
          />
          ​
          <TextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Number of Bathroom(s)..."}
            type="number"
            name="bathroom_number"
            onChange={handleUpdates}
          />
          ​
          <TextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Minimum Number of Night(s)..."}
            type="number"
            name="minimum_nights"
            onChange={handleUpdates}
          />
          ​
          <TextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Property Amenities..."}
            type="text"
            name="property_amenities"
            placeholder="Property Amenities.."
            onChange={handleUpdates}
          />
          ​
          <Container>

            <Button className={classes.btn} size={"large"} margin={"normal"} variant={"outlined"} color={"primary"} onClick={obtainOptimalPricing} >Optimize Price</Button>

            <Link to={"/listing/id"}>
              <Button
                className={classes.btn}
                size={"large"}
                margin={"normal"}
                variant={"contained"}
                color={"secondary"}
              >
                Cancel
              </Button>
            </Link>
            ​
            <Button
              className={classes.btn}
              size={"large"}
              margin={"normal"}
              variant={"contained"}
              color={"primary"}
              type="submit"
            >
              Submit Listing
            </Button>
          </Container>
          ​
        </form>
        ​</>
      }
    </Container>


  );
};

const mapStateToProps = (state) => {
  return {
    listingData: state.listingData,
    isFetching: state.isFetching,
    errors: state.errors,
  };
};

export default connect(mapStateToProps, {postPriceOptimizer})(Edit);