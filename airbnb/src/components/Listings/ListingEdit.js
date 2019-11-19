import React from 'react';
import {Link} from 'react-router-dom';
import {withFormik, Form} from 'formik';
import {Button, InputAdornment, Container} from "@material-ui/core";
import {FormikTextField} from "formik-material-fields";
import * as Yup from 'yup';

const Edit = ({values, errors, touched}) => {
  return (
    <Container maxWidth={"md"} margin={"3%"}>
      <h2>Edit (Property Name)</h2>
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

        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Property Type..."}
          type='text'
          name='property_type'
          placeholder='Type of property'
        />

        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Address..."}
          type='text'
          name='address'
          placeholder='Address'
        />

        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Neighborhood Group..."}
          type='text'
          name='neighborhood_group'
          placeholder='Neighborhood Group'
        />

        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Neighborhood..."}
          type='text'
          name='neighborhood'
          placeholder='Neighborhood'
        />

        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Availability During Year.."}
          type='number'
          name='availability_of_year'
          placeholder='Availability During Year...'
        />

        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Property Price Per Night..."}
          InputProps={{
            startAdornment: <InputAdornment position="start">€</InputAdornment>,
            value: null,
            placeholder: 'Property Price Per Night...'
          }}
          type='number'
          name='property_price'
        />

        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Number of Bedroom(s)..."}
          type='number'
          name='bedroom_number'
        />

        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Number of Bathroom(s)..."}
          type='number'
          name='bathroom_number'
        />

        <FormikTextField
          fullWidth
          margin={"normal"}
          variant={"outlined"}
          label={"Minimum Number of Night(s)..."}
          type='number'
          name='minimun_nights'
          placeholder={'0'}
        />

          <FormikTextField
            fullWidth
            margin={"normal"}
            variant={"outlined"}
            label={"Property Amenities.."}
            type='number'
            name='property_amenities'
            placeholder='Property Amenities (separate by comma)...'
          />

        <Container>
          <Link to={"/listings"}>
            <Button size={"large"} margin={"normal"} variant={"contained"} color={"secondary"}>Cancel</Button>
          </Link>

          <Button size={"large"} margin={"normal"} variant={"contained"} color={"primary"} type='submit'>Submit
            Changes</Button>
        </Container>

      </Form>

    </Container>

  );
};

const ListingEdit = withFormik({
  mapPropsToValues({property_name, property_type, property_location, property_price, minimun_stay}) {
    return {
      property_name: property_name || '',
      property_type: property_type || '',
      property_location: property_location || '',
      property_price: property_price || 0,
      minimun_stay: minimun_stay || 0
    };
  },

  validationSchema: Yup.object().shape({
    property_name: Yup.string()
      .required('Property name is required'),
    property_type: Yup.string()
      .required('Property type is required'),
    property_location: Yup.string()
      .required('Location is required'),
    property_price: Yup.string()
      .required('Price is required'),
    minimun_stay: Yup.string()
      .required('Price is required')
  }),

  handleSubmit(values) {
    console.log(values);
  }
})(Edit);

export default ListingEdit;