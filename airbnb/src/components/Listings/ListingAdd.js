import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withFormik, Form } from "formik";
import { Button, InputAdornment, Container, MenuItem } from "@material-ui/core";
import { FormikTextField } from "formik-material-fields";
import * as Yup from "yup";
import AxiosWithAuth from "../../utils/AxiosWithAuth";
import {makeStyles} from "@material-ui/core/styles";

import {
  roomTypes,
  neighborhoodGroups,
  neighborhoods
} from "../../utils/DataFiles";

const useStyles = makeStyles({
  btn: {
      margin: 10
  }
});

const Add = props => {
  const classes = useStyles();
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

  return (
    <Container maxWidth={"md"} margin={"3%"}>
      <h2>Add Listing</h2>
      <Form>
        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Property Name..."}
          type='text'
          name='property_name'
          placeholder='Name of property'
        />
        ​
        <FormikTextField
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
        </FormikTextField>
        ​
        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Address..."}
          type='text'
          name='address'
          placeholder='Address'
        />
        ​
        <FormikTextField
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
        </FormikTextField>
        ​
        <FormikTextField
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
        </FormikTextField>
        ​
        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Availability During Year.."}
          type='number'
          name='availability_of_year'
          placeholder='Availability During Year...'
        />
        ​
        <FormikTextField
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
        />
        ​
        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Number of Bedroom(s)..."}
          type='number'
          name='bedroom_number'
        />
        ​
        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Number of Bathroom(s)..."}
          type='number'
          name='bathroom_number'
        />
        ​
        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Minimum Number of Night(s)..."}
          type='number'
          name='minimum_nights'
        />
        ​
        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Property Amenities..."}
          type='text'
          name='property_amenities'
          placeholder='Property Amenities..'
        />
        ​
        <Container>
          <Link to={"/listing/id"}>
            <Button className={classes.btn} size={"large"} margin={"normal"} variant={"contained"} color={"secondary"}>Cancel</Button>
          </Link>
          ​
          <Button className={classes.btn} size={"large"} margin={"normal"} variant={"contained"} color={"primary"} type='submit'>Submit
            Listing</Button>
        </Container>
        ​
      </Form>
      ​
    </Container>
  );
};

const ListingAdd = withFormik({
  mapPropsToValues({
    property_name,
    room_type,
    address,
    neighborhood_group,
    neighborhood,
    availability_of_year,
    property_price,
    bedroom_number,
    bathroom_number,
    minimum_nights,
    property_amenities
  }) {
    return {
      property_name: property_name || "",
      room_type: room_type || "",
      address: address || "",
      neighborhood_group: neighborhood_group || "",
      neighborhood: neighborhood || "",
      availability_of_year: availability_of_year || "",
      property_price: property_price || "",
      bedroom_number: bedroom_number || "",
      bathroom_number: bathroom_number || "",
      minimum_nights: minimum_nights || "",
      property_amenities: property_amenities || ""
    };
  },

  validationSchema: Yup.object().shape({
    property_name: Yup.string().required("Property name is required"),
    room_type: Yup.string().required("Room type is required"),
    address: Yup.string().required("Address is required"),
    neighborhood_group: Yup.string().required("Neighborhood group is required"),
    neighborhood: Yup.string().required("Neighborhood is required"),
    availability_of_year: Yup.string().required("Availability is required"),
    property_price: Yup.string().required("Property price is required"),
    bedroom_number: Yup.string().required("Bedroom number is required"),
    bathroom_number: Yup.string().required("Bathroom number is required"),
    minimum_nights: Yup.string().required(
      "Minimum number of nights is required"
    ),
    property_amenities: Yup.string().required("Property amenities is required")
  }),

  handleSubmit(values, props) {
    const sessionStorageUsername = sessionStorage.getItem("username");
    values = { ...values, host_username: sessionStorageUsername };
    console.log(values);
    AxiosWithAuth()
      .post("api/listings/", values)
      .then(response => {
        console.log(response);
        props.props.history.push("/listings");
      })
      .catch(error => {
        // console.log(error.response.data.message);
        console.log(error);
      });
  }
})(Add);

export default ListingAdd;
