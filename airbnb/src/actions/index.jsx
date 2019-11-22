import AxiosWithAuth from "../utils/AxiosWithAuth";
import axios from "axios";

export const FETCH_LISTINGS_START = "FETCH_LISTINGS_START";
export const FETCH_LISTINGS_SUCCESS = "FETCH_LISTINGS_SUCCESS";
export const FETCH_LISTINGS_FAILURE = "FETCH_LISTINGS_FAILURE";

export const POST_LOGIN_START = "POST_LOGIN_START";
export const POST_LOGIN_SUCCESS = "POST_LOGIN_SUCCESS";
export const POST_LOGIN_FAILURE = "POST_LOGIN_FAILURE";

export const POST_LISTINGS_START = "POST_LISTINGS_START";
export const POST_LISTINGS_SUCCESS = "POST_LISTINGS_SUCCESS";
export const POST_LISTINGS_FAILURE = "POST_LISTINGS_FAILURE";

export const UPDATE_LISTINGS_START = "UPDATE_LISTINGS_START";
export const UPDATE_LISTINGS_SUCCESS = "UPDATE_LISTINGS_SUCCESS";
export const UPDATE_LISTINGS_FAILURE = "UPDATE_LISTINGS_FAILURE";

export const POST_PRICE_OPTIMIZER_START = "POST_PRICE_OPTIMIZER_START";
export const POST_PRICE_OPTIMIZER_SUCCESS = "POST_PRICE_OPTIMIZER_SUCCESS";
export const POST_PRICE_OPTIMIZER_FAILURE = "POST_PRICE_OPTIMIZER_FAILURE";

export const IS_EDITING = "IS_EDITING";

export const fetchListingsData = (listingUsername) => dispatch => {
  dispatch({type: FETCH_LISTINGS_START});

  AxiosWithAuth()
    .get(`/api/listings/${listingUsername}`)
    .then(response => {
      // console.log(response);
      dispatch({type: FETCH_LISTINGS_SUCCESS, payload: response.data})
      })
    .catch(error => dispatch({type: FETCH_LISTINGS_FAILURE, payload: error.message}));
};

export const postLoginData = () => dispatch => {
  dispatch({type: POST_LOGIN_START});

  AxiosWithAuth()
    .get('/api/login')
    .then(response => dispatch({type: POST_LOGIN_SUCCESS, payload: response.data}))
    .catch(error => dispatch({type: POST_LOGIN_FAILURE, payload: error.data}));
};

export const postListingData = (listingID) => dispatch => {
  dispatch({type: POST_LISTINGS_START});
  const sessionStorageUsername = sessionStorage.getItem("username");

  AxiosWithAuth()
    .get(`/api/listings/${sessionStorageUsername}/${listingID}`)
    .then(response => {
      console.log(response.data[0]);
      dispatch({type: POST_LISTINGS_SUCCESS, payload: response.data[0]})
    })
    .catch(error => dispatch({type: POST_LISTINGS_FAILURE, payload: error.data}));
};

export const updateListingData = (listing) => dispatch => {
  dispatch({type: UPDATE_LISTINGS_START});

  AxiosWithAuth()
    .put('api/listings/', listing)
    .then(response => dispatch({type: UPDATE_LISTINGS_SUCCESS, payload: response.data}))
    .catch(error => dispatch({type: UPDATE_LISTINGS_FAILURE, payload: error.data}));
};

export const postPriceOptimizer = (pricingModelData) => dispatch => {
  dispatch({type: POST_PRICE_OPTIMIZER_START});

  axios
    .post('https://cors-anywhere.herokuapp.com/https://hostify.herokuapp.com/input', pricingModelData)
    .then(response => dispatch({type: POST_PRICE_OPTIMIZER_SUCCESS, payload: response.data}))
    .catch(error => dispatch({type: POST_PRICE_OPTIMIZER_FAILURE, payload: error.data}));
};

export const isEditingListing = () => dispatch => {
  dispatch({type: IS_EDITING});
};