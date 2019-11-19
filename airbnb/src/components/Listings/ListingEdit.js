import React from 'react';
import { Link } from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const Edit = ({ values, errors, touched }) => {
    return (
        <div>
            <h2>Edit (Property Name)</h2>
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
                    <label>
                        <p>€</p>
                        <Field 
                            type='number'
                            name='property_price'
                            placeholder={0}
                        />
                        <p>per night</p>
                    </label>
                    {touched.property_price && errors.property_price && <p>{errors.property_price}</p>}
                </div>
                <div>
                    <label>
                        <Field 
                            type='number'
                            name='minimun_stay'
                            placeholder={0}
                        />
                        <p>night(s)</p>
                    </label>
                    {touched.minimun_stay && errors.minimun_stay && <p>{errors.minimun_stay}</p>}
                </div>
                <button type='submit'>Submit</button>
            </Form>
            <Link to='/listing/id'>Return to Listing</Link>
        </div>

    );
};

const ListingEdit = withFormik({
    mapPropsToValues({ property_name, property_type, property_location, property_price, minimun_stay }){
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

    handleSubmit(values){
        console.log(values);
    }
})(Edit);

export default ListingEdit;