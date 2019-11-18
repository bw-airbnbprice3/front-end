import axios from "axios";

const AxiosWithAuth = () => {
  const token = sessionStorage.getItem('token');

  return axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://airbnb-optimal-price-app.herokuapp.com',
    headers: {authorization: token,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUSH,POST,PATCH,DELETE,OPTIONS'}
  })
};

export default AxiosWithAuth;