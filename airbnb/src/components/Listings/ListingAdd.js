import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {withFormik, Form} from 'formik';
import {Button, InputAdornment, Container, MenuItem} from "@material-ui/core";
import {FormikTextField} from "formik-material-fields";
import * as Yup from 'yup';
import AxiosWithAuth from "../../utils/AxiosWithAuth";

const roomTypes = [
  {
    value: 1,
    label: 'Entire Home/Apartment'
  },
  {
    value: 2,
    label: 'Private Room'
  },
  {
    value: 3,
    label: 'Shared Room'
  },
];

const neighborhoodGroups = [
  {
    value: 1,
    label: 'Mitte'
  },
  {
    value: 2,
    label: 'Pankow'
  },
  {
    value: 3,
    label: 'Tempelhof - Schöneberg'
  },
  {
    value: 4,
    label: 'Friedrichshain - Kreuzberg'
  },
  {
    value: 5,
    label: 'Charlottenburg-Wilm'
  },
  {
    value: 6,
    label: 'Neukölln'
  },
  {
    value: 7,
    label: 'Treptow - Köpenick'
  },
  {
    value: 8,
    label: 'Steglitz - Zehlendorf'
  },
  {
    value: 9,
    label: 'Reinickendorf'
  },
  {
    value: 10,
    label: 'Lichtenberg'
  },
  {
    value: 11,
    label: 'Marzahn - Hellersdorf'
  },
  {
    value: 12,
    label: 'Spandau'
  },
];

const neighborhoods = [
  {
    value: 1,
    label: 'Brunnenstr Süd',
  },
  {
    value: 2,
    label: 'Prenzlauer Berg Nordwest',
  },
  {
    value: 3,
    label: 'Prenzlauer Berg Südwest',
  },
  {
    value: 4,
    label: 'Schöneberg-Nord',
  },
  {
    value: 5,
    label: 'Helmholtzplatz',
  },
  {
    value: 6,
    label: 'Frankfurter Allee Süd FK',
  },
  {
    value: 7,
    label: 'nördliche Luisenstadt',
  },
  {
    value: 8,
    label: 'südliche Luisenstadt',
  },
  {
    value: 9,
    label: 'Tempelhofer Vorstadt',
  },
  {
    value: 10,
    label: 'Prenzlauer Berg Süd',
  },
  {
    value: 11,
    label: 'Moabit Ost',
  },
  {
    value: 12,
    label: 'Prenzlauer Berg Nord',
  },
  {
    value: 13,
    label: 'Otto-Suhr-Allee',
  },
  {
    value: 14,
    label: 'Schillerpromenade',
  },
  {
    value: 15,
    label: 'Alt  Treptow',
  },
  {
    value: 16,
    label: 'Alexanderplatz',
  },
  {
    value: 17,
    label: 'Neue Kantstraße',
  },
  {
    value: 18,
    label: 'Ostpreußendamm',
  },
  {
    value: 19,
    label: 'Schmöckwitz/Karolinenhof/Rauchfangswerder',
  },
  {
    value: 20,
    label: 'Neuköllner Mitte/Zentrum',
  },
  {
    value: 21,
    label: 'Frankfurter Allee Nord',
  },
  {
    value: 22,
    label: 'Kantstraße',
  },
  {
    value: 23,
    label: 'Schmargendorf',
  },
  {
    value: 24,
    label: 'Regierungsviertel',
  },
  {
    value: 25,
    label: 'Reuterstraße',
  },
  {
    value: 26,
    label: 'Schöneberg-Süd',
  },
  {
    value: 27,
    label: 'Blankenfelde/Niederschönhausen',
  },
  {
    value: 28,
    label: 'Friedrichshagen',
  },
  {
    value: 29,
    label: 'Südliche Friedrichstadt',
  },
  {
    value: 30,
    label: 'Moabit West',
  },
  {
    value: 31,
    label: 'Wiesbadener Straße',
  },
  {
    value: 32,
    label: 'West 3',
  },
  {
    value: 33,
    label: 'Blankenburg/Heinersdorf/Märchenland',
  },
  {
    value: 34,
    label: 'Rummelsburger Bucht',
  },
  {
    value: 35,
    label: 'Friedenau',
  },
  {
    value: 36,
    label: 'Brunnenstr. Nord',
  },
  {
    value: 37,
    label: 'Ost 2',
  },
  {
    value: 38,
    label: 'Volkspark Wilmersdorf',
  },
  {
    value: 39,
    label: 'Pankow Zentrum',
  },
  {
    value: 40,
    label: 'Pankow Süd',
  },
  {
    value: 41,
    label: 'Osloer Straße',
  },
  {
    value: 42,
    label: 'Drakestr.',
  },
  {
    value: 43,
    label: 'West 1',
  },
  {
    value: 44,
    label: 'Prenzlauer Berg Ost',
  },
  {
    value: 45,
    label: 'Buckow Nord',
  },
  {
    value: 46,
    label: 'Karlshorst',
  },
  {
    value: 47,
    label: 'Karl-Marx-Allee-Nord',
  },
  {
    value: 48,
    label: 'Alt-Lichtenberg',
  },
  {
    value: 49,
    label: 'Düsseldorfer Straße',
  },
  {
    value: 50,
    label: 'Zehlendorf Nord',
  },
  {
    value: 51,
    label: 'Tiergarten Süd',
  },
  {
    value: 52,
    label: 'Neu Lichtenberg',
  },
  {
    value: 53,
    label: 'Rudow',
  },
  {
    value: 54,
    label: 'Mierendorffplatz',
  },
  {
    value: 55,
    label: 'Wedding Zentrum',
  },
  {
    value: 56,
    label: 'Karl-Marx-Allee-Süd',
  },
  {
    value: 57,
    label: 'Altglienicke',
  },
  {
    value: 58,
    label: 'Lichtenrade',
  },
  {
    value: 59,
    label: 'Westend',
  },
  {
    value: 60,
    label: 'Mahlsdorf',
  },
  {
    value: 61,
    label: 'West 5',
  },
  {
    value: 62,
    label: 'Rixdorf',
  },
  {
    value: 63,
    label: 'Biesdorf',
  },
  {
    value: 64,
    label: 'Zehlendorf Südwest',
  },
  {
    value: 65,
    label: 'Johannisthal',
  },
  {
    value: 66,
    label: 'Barstraße',
  },
  {
    value: 67,
    label: 'Marienfelde',
  },
  {
    value: 68,
    label: 'Heerstraße Nord',
  },
  {
    value: 69,
    label: 'Albrechtstr',
  },
  {
    value: 70,
    label: 'Buckow',
  },
  {
    value: 71,
    label: 'Baumschulenweg',
  },
  {
    value: 72,
    label: 'Halensee',
  },
  {
    value: 73,
    label: 'Schloß Charlottenburg',
  },
  {
    value: 74,
    label: 'Kurfürstendamm',
  },
  {
    value: 75,
    label: 'Schloßstr',
  },
  {
    value: 76,
    label: 'Nord 1',
  },
  {
    value: 77,
    label: 'Karow',
  },
  {
    value: 78,
    label: 'Nord 2',
  },
  {
    value: 79,
    label: 'Rahnsdorf/Hessenwinkel',
  },
  {
    value: 80,
    label: 'Gatow/Kladow',
  },
  {
    value: 81,
    label: 'Lankwitz',
  },
  {
    value: 82,
    label: 'Parkviertel',
  },
  {
    value: 83,
    label: 'Alt-Hohenschönhausen Süd',
  },
  {
    value: 84,
    label: 'Weißensee',
  },
  {
    value: 85,
    label: 'Schönholz/Wilhelmsruh/Rosenthal',
  },
  {
    value: 86,
    label: 'Weißensee Ost',
  },
  {
    value: 87,
    label: 'Alt-Hohenschönhausen Nord',
  },
  {
    value: 88,
    label: 'Gropiusstadt',
  },
  {
    value: 89,
    label: 'Britz',
  },
  {
    value: 90,
    label: 'Tempelhof',
  },
  {
    value: 91,
    label: 'Ost 1',
  },
  {
    value: 92,
    label: 'Kaulsdorf',
  },
  {
    value: 93,
    label: 'Hellersdorf-Nord',
  },
  {
    value: 94,
    label: 'Marzahn-Mitte',
  },
  {
    value: 95,
    label: 'MV 1',
  },
  {
    value: 96,
    label: 'Adlershof',
  },
  {
    value: 97,
    label: 'Heerstrasse',
  },
  {
    value: 98,
    label: 'Teltower Damm',
  },
  {
    value: 99,
    label: 'Köllnische Heide',
  },
  {
    value: 100,
    label: 'Friedrichsfelde Nord',
  },
  {
    value: 101,
    label: 'Grunewald',
  },
  {
    value: 102,
    label: 'Plänterwald',
  },
  {
    value: 103,
    label: 'Buchholz',
  },
  {
    value: 104,
    label: 'Wilhelmstadt',
  },
  {
    value: 105,
    label: 'West 4',
  },
  {
    value: 106,
    label: 'Fennpfuhl',
  },
  {
    value: 107,
    label: 'Köpenick-Nord',
  },
  {
    value: 108,
    label: 'Bohnsdorf',
  },
  {
    value: 109,
    label: 'Mariendorf',
  },
  {
    value: 110,
    label: 'Frankfurter Allee Süd',
  },
  {
    value: 111,
    label: 'MV 2',
  },
  {
    value: 112,
    label: 'Marzahn-Süd',
  },
  {
    value: 113,
    label: 'Siemensstadt',
  },
  {
    value: 114,
    label: 'Müggelheim',
  },
  {
    value: 115,
    label: 'Charlottenburg Nord',
  },
  {
    value: 116,
    label: 'Oberschöneweide',
  },
  {
    value: 117,
    label: 'Buch',
  },
  {
    value: 118,
    label: 'Niederschöneweide',
  },
  {
    value: 119,
    label: 'Spandau Mitte',
  },
  {
    value: 120,
    label: 'Dammvorstadt',
  },
  {
    value: 121,
    label: 'Brunsbütteler Damm',
  },
  {
    value: 122,
    label: 'Hakenfelde',
  },
  {
    value: 123,
    label: 'Köpenick-Süd',
  },
  {
    value: 124,
    label: 'Neu-Hohenschönhausen Nord',
  },
  {
    value: 125,
    label: 'Hellersdorf-Süd',
  },
  {
    value: 126,
    label: 'Grünau',
  },
  {
    value: 127,
    label: 'Falkenhagener Feld',
  },
  {
    value: 128,
    label: 'Haselhorst',
  },
  {
    value: 129,
    label: 'West 2',
  },
  {
    value: 130,
    label: 'Altstadt-Kietz',
  },
  {
    value: 131,
    label: 'Friedrichsfelde Süd',
  },
  {
    value: 132,
    label: 'Neu-Hohenschönhausen Süd',
  },
  {
    value: 133,
    label: 'Malchow, Wartenberg und Falkenberg',
  },
  {
    value: 134,
    label: 'Kölln/Vorstadt/Spindlersf',
  },
  {
    value: 135,
    label: 'Hellersdorf-Ost',
  },
  {
    value: 136,
    label: 'Allende-Viertel',
  },
  ];

const Add = () => {
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
          label={"Property Type..."}
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
          label={"Property Type..."}
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
      property_amenities: property_amenities || '',
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
    const sessionStorageUsername = sessionStorage.getItem('username');
    values = ({...values, host_username: sessionStorageUsername});
    console.log(values);
    AxiosWithAuth().post('api/listings/', values)
      .then(response => console.log(response))
      .catch(error => {
        // console.log(error.response.data.message);
        console.log(error);
      });
  }
})(Add);

export default ListingAdd;