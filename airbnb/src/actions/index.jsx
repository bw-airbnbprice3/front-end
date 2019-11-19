import AxiosWithAuth from "../utils/AxiosWithAuth";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

export const fetchListingsData = () => dispatch => {
  dispatch({type: FETCH_START});

  AxiosWithAuth()
    .get('/api/listings/')
    .then(response => dispatch({type: FETCH_SUCCESS, payload: response.data}))
    .catch(error => dispatch({type: FETCH_FAILURE, payload: error.message}))
};