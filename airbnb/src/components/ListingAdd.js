import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Add = ({ values, errors, touched }) => {
    return (
        <div>
            <h2>Add Listing</h2>
            <Form>
                <div>
                    <Field 
                        type='text'
                        name='property_name'
                        placeholder='Name of property'
                    />
                    {touched.property_name && errors.property_name && <p>{errors.property_name}</p>}
                </div>
                <div>
                    <Field 
                        type='text'
                        name='property_type'
                        placeholder='Type of property'
                    />
                    {touched.property_type && errors.property_type && <p>{errors.property_type}</p>}
                </div>
                <div>
                    <Field 
                        type='text'
                        name='property_location'
                        placeholder='Location'
                    />
                    {touched.property_location && errors.property_location && <p>{errors.property_location}</p>}
                </div>
                <div>
                    <label>
                        <p>€</p>
                        <Field 
                            type='number'
                            name='property_price'
                            placeholder='0'
                        />
                        <p>per night</p>
                    </label>
                    {touched.property_price && errors.property_price && <p>{errors.property_price}</p>}
                </div>
                <button type='submit'>Submit</button>
            </Form>
            <Link to='/user'>Return to Dashboard</Link>
        </div>

    );
};

const ListingAdd = withFormik({
    mapPropsToValues({ property_name, property_type, property_location, property_price }){
        return {
            property_name: property_name || '',
            property_type: property_type || '',
            property_location: property_location || '',
            property_price: property_price || ''
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
            .required('Property price is required')
    }),

    handleSubmit(values){
        console.log(values);
    }
})(Add);

export default ListingAdd;