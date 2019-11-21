import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {Button, InputAdornment, Container, MenuItem, TextField, CircularProgress} from "@material-ui/core";
import {neighborhoodGroups, neighborhoods, roomTypes} from "../../utils/DataFiles";
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import {postListingData} from "../../actions";

const Edit = (props) => {

  // Sets the state for various components. The dropdowns need their own state to allow them to change their input and value
  const [updatedValues, setUpdatedValues] = useState(props.listingData);
  const [roomType, setRoomType] = useState(1);
  const [neighborhoodGroup, setNeighborhoodGroup] = useState(1);
  const [neighborhood, setNeighborhood] = useState(1);

  useEffect(() => {
    const id = props.match.params.id;
    props.postListingData(id);
  }, []);

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

  const updatedListing = event => {
    event.preventDefault();
    console.log();

    // Sends the update request to edit the listing ID, and then on successful completion, routes the user back to the listings page.
    AxiosWithAuth()
      .put(`/api/listings/${updatedValues.id}`, updatedValues)
      .then(response => {
        props.history.push('/listings')
      })
      .catch(error => console.log(error));
  };

  // / Sets the proper data values here. Since some of the keys return an integer, and the value requires the string, sets the correct data


  return (

    <Container maxWidth={"md"} margin={"3%"}>

      {props.isFetching && <CircularProgress color="primary" style={{marginTop: "3%"}}/>}

      {props.isFetching === false &&
      <>
        <h2>Edit (Property Name)</h2>
        <form onSubmit={updatedListing}>
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
          ​
          <Container>
            <Link to={"/listing/id"}>
              <Button size={"large"} margin={"normal"} variant={"contained"} color={"secondary"}>Cancel</Button>
            </Link>
            ​
            <Button size={"large"} margin={"normal"} variant={"contained"} color={"primary"} type='submit'>Submit
              Listing</Button>
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

export default connect(mapStateToProps, {postListingData})(Edit);