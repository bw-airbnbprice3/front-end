import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {Button, InputAdornment, Container, MenuItem, TextField} from "@material-ui/core";
import {neighborhoodGroups, neighborhoods, roomTypes} from "../../utils/DataFiles";
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import {postListingData} from "../../actions";

const Edit = (props) => {

  useEffect(() => {
    const id = props.match.params.id;
    props.postListingData(id);
  }, []);

  const [updatedValues, setUpdatedValues] = useState(props.editingData);
  const [roomType, setRoomType] = useState(1);
  const [neighborhoodGroup, setNeighborhoodGroup] = useState(1);
  const [neighborhood, setNeighborhood] = useState(1);

  const roomTypeHandleChange = event => {
    setRoomType(event.target.value);
  };

  const neighborhoodGroupHandleChange = event => {
    setNeighborhoodGroup(event.target.value);
  };

  const neighborhoodHandleChange = event => {
    setNeighborhood(event.target.value);
  };

  const handleChanges = event => {
    setUpdatedValues({...updatedValues, [event.target.name]: event.target.value});
    console.log(updatedValues);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(props.editingData);
    // AxiosWithAuth()
    //   .put('/api/listings/id')
    //   .then(response => console.log(response))
    //   .error(error => console.log(error))
  }

  // / Sets the proper data values here. Since some of the keys return an integer, and the value requires the string, sets the correct data


  return (
    <Container maxWidth={"md"} margin={"3%"}>
      {props.isFetching && <h1>Test</h1>}
      <h2>Edit (Property Name)</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          type='text'
          label={"Property Name..."}
          name='property_name'
          helperText='Name of property'
          defaultValue={props.editingData.property_name}
          onChange={handleChanges}
        />
        ​
        <TextField
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
          onChange=handleChanges
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
          defaultValue={props.editingData.address}
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
          onChange=handleChanges
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
          onChange=handleChanges
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
          defaultValue={props.editingData.availability_of_year}
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
          defaultValue={props.editingData.property_price}
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
          defaultValue={props.editingData.bedroom_number}
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
          defaultValue={props.editingData.bathroom_number}
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
          defaultValue={props.editingData.minimum_nights}
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
          defaultValue={props.editingData.property_amenities}
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
      ​
    </Container>

  );
};

const mapStateToProps = (state) => {

  return {
    editingData: state.editingData,
    isFetching: state.isFetching,
    errors: state.errors,
    editingValues: state.editingValues,
  };
};

export default connect(mapStateToProps, {postListingData})(Edit);