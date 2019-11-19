import React from 'react';
import {Link} from 'react-router-dom';
import {withFormik, Form} from 'formik';
import {Button, InputAdornment, Container} from "@material-ui/core";
import {FormikTextField} from "formik-material-fields";
import * as Yup from 'yup';

const Add = ({ values, errors, touched }) => {
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
        ​
                <FormikTextField
                fullWidth
                margin={"normal"}
                variant={"outlined"}
                label={"Property Type..."}
                type='text'
                name='room_type'
                placeholder='Type of property'
                />
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
                fullWidth
                margin={"normal"}
                variant={"outlined"}
                label={"Neighborhood Group..."}
                type='text'
                name='neighborhood_group'
                placeholder='Neighborhood Group'
                />
        ​
                <FormikTextField
                fullWidth
                margin={"normal"}
                variant={"outlined"}
                label={"Neighborhood..."}
                type='text'
                name='neighborhood'
                placeholder='Neighborhood'
                />
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
                    <Button size={"large"} margin={"normal"} variant={"contained"} color={"secondary"}>Cancel</Button>
                </Link>
        ​
                <Button size={"large"} margin={"normal"} variant={"contained"} color={"primary"} type='submit'>Submit
                    Listing</Button>
                </Container>
        ​
            </Form>
        ​
        </Container>
    );
};

const ListingAdd = withFormik({
    mapPropsToValues({property_name, room_type, address, neighborhood_group, neighborhood, availability_of_year, property_price, bedroom_number, bathroom_number, minimum_nights, property_amenities}) {
        return {
          property_name: property_name || '',
          room_type: room_type || '',
          address: address || '',
          neighborhood_group: neighborhood_group || '',
          neighborhood: neighborhood || '',
          availability_of_year: availability_of_year || '',
          property_price: property_price || '',
          bedroom_number: bedroom_number || '',
          bathroom_number: bathroom_number || '',
          minimum_nights: minimum_nights || '',
          property_amenities: property_amenities || ''
        };
      },
  
      validationSchema: Yup.object().shape({
        property_name: Yup.string()
          .required('Property name is required'),
          room_type: Yup.string()
          .required('Room type is required'),
        address: Yup.string()
          .required('Address is required'),
        neighborhood_group: Yup.string()
          .required('Neighborhood group is required'),
        neighborhood: Yup.string()
          .required('Neighborhood is required'),
        availability_of_year: Yup.string()
          .required('Availability is required'),
        property_price: Yup.string()
          .required('Property price is required'),
        bedroom_number: Yup.string()
          .required('Bedroom number is required'),
        bathroom_number: Yup.string()
          .required('Bathroom number is required'),
        minimum_nights: Yup.string()
          .required('Minimum number of nights is required'),
        property_amenities: Yup.string()
          .required('Property amenities is required'),
      }),
      
      handleSubmit(values) {
        console.log('test', values);
      }
})(Add);

export default ListingAdd;