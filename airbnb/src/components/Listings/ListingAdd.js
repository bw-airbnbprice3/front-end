import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {Button, InputAdornment, Container, MenuItem, TextField, CircularProgress, Typography} from "@material-ui/core";
import {neighborhoodGroups, neighborhoods, roomTypes} from "../../utils/DataFiles";
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import axios from "axios";
import {postPriceOptimizer} from "../../actions";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  btn: {
    margin: 10,
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
  const [optimalPrice, setOptimalPrice] = useState('');

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
  const handleChanges = event => {
    setUpdatedValues({...updatedValues, [event.target.name]: event.target.value});
  };

  const obtainOptimalPricing = () => {
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

    axios
      .post(`https://cors-anywhere.herokuapp.com/https://hostify.herokuapp.com/input`, flaskEndPointsArray)
      .then(response => {
        setOptimalPrice(response.data);
      })
      .catch(error => console.log(error));
  };

  const addPropertyListing = event => {
    event.preventDefault();

    const fixedUpdatedValues = {
      host_username: sessionStorageUsername,
      address: updatedValues.address,
      availability_of_year: Number(updatedValues.availability_of_year),
      bathroom_number: Number(updatedValues.bathroom_number),
      bedroom_number: Number(updatedValues.bedroom_number),
      minimum_nights: Number(updatedValues.minimum_nights),
      neighborhood: updatedValues.neighborhood,
      neighborhood_group: updatedValues.neighborhood_group,
      property_amenities: updatedValues.property_amenities,
      property_name: updatedValues.property_name,
      property_price: Number(updatedValues.property_price),
      room_type: 2
    };

    // Sends the posted request to edit the listing ID, and then on successful completion, routes the user back to the listings page.
    AxiosWithAuth()
      .post(`/api/listings/${sessionStorageUsername}/`, fixedUpdatedValues)
      .then(response => {
        props.history.push('/listings');
      })
      .catch(error => console.log(error));
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
            required
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            type='text'
            label={"Property Name..."}
            name='property_name'
            helperText='Name of property'
            defaultValue={props.listingData.property_name}
            onChange={handleChanges}
          />
          ​
          <TextField
            required
            select
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Property Type..."}
            type='text'
            name='room_type'
            value={roomType}
            onChange={roomTypeHandleChange}
            helperText={'Please select the type of property'}>
            {roomTypes.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          ​
          <TextField
            required
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Address..."}
            type='text'
            name='address'
            helperText='Address'
            defaultValue={props.listingData.address}
            onChange={handleChanges}
          />
          ​
          <TextField
            required
            select
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Neighborhood Group..."}
            type='text'
            name='neighborhood_group'
            value={neighborhoodGroup}
            onChange={neighborhoodGroupHandleChange}
            helperText={'Please select your neighborhood group'}>
            {neighborhoodGroups.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          ​
          <TextField
            required
            select
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Neighborhood..."}
            type='text'
            name='neighborhood'
            value={neighborhood}
            onChange={neighborhoodHandleChange}
            helperText={'Please select your neighborhood'}>
            {neighborhoods.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          ​
          <TextField
            required
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Availability During Year.."}
            type='number'
            name='availability_of_year'
            helperText='Availability During Year...'
            defaultValue={props.listingData.availability_of_year}
            onChange={handleChanges}
          />
          ​
          <TextField
            required
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Property Price Per Night..."}
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
              placeholder: 'Property Price Per Night...'
            }}
            type='number'
            name='property_price'
            defaultValue={props.listingData.property_price}
            onChange={handleChanges}
          />
          ​
          <TextField
            required
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Number of Bedroom(s)..."}
            type='number'
            name='bedroom_number'
            defaultValue={props.listingData.bedroom_number}
            onChange={handleChanges}
          />
          ​
          <TextField
            fullWidth
            required
            margin={"normal"}
            variant={"outlined"}
            label={"Number of Bathroom(s)..."}
            type='number'
            name='bathroom_number'
            defaultValue={props.listingData.bathroom_number}
            onChange={handleChanges}
          />
          ​
          <TextField
            fullWidth
            required
            margin={"normal"}
            variant={"outlined"}
            label={"Minimum Number of Night(s)..."}
            type='number'
            name='minimum_nights'
            defaultValue={props.listingData.minimum_nights}
            onChange={handleChanges}
          />
          ​
          <TextField
            required
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Property Amenities..."}
            type='text'
            name='property_amenities'
            placeholder='Property Amenities..'
            defaultValue={props.listingData.property_amenities}
            onChange={handleChanges}
          />

          {optimalPrice && <Typography variant={"h5"} color={"primary"}>{optimalPrice}</Typography>}

          ​
          <Container>

            <Button className={classes.btn} size={"large"} margin={"normal"} variant={"outlined"} color={"primary"} onClick={obtainOptimalPricing} >Optimize Price</Button>

            <Link to={"/listings"}>
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