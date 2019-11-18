import axios from "axios";

const AxiosWithAuth = () => {
  const token = sessionStorage.getItem('token');

  return axios.create({
    baseURL: 'https://airbnb-optimal-price-app.herokuapp.com',
    headers: {authorization: token}
  })
};

export default AxiosWithAuth;