import {FETCH_LISTINGS_START, FETCH_LISTINGS_SUCCESS, FETCH_LISTINGS_FAILURE, POST_LISTINGS_START, POST_LISTINGS_SUCCESS, POST_LISTINGS_FAILURE} from "../actions"

const initialState = {listingData: [], editingData: {}, isFetching: false, errors: null};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LISTINGS_START:
      return {...state, listingData: [], isFetching: true, errors: null};
    case FETCH_LISTINGS_SUCCESS:
      return {...state, listingData: action.payload, isFetching: false, errors: null};
    case FETCH_LISTINGS_FAILURE:
      return {...state, listingData: [], isFetching: false, errors: action.payload};
    case POST_LISTINGS_START:
      return {...state, listingData: [], isFetching: true, errors: null};
    case POST_LISTINGS_SUCCESS:
      return {...state, editingData: action.payload, isFetching: false, errors: null};
    case POST_LISTINGS_FAILURE:
      return {...state, listingData: [], isFetching: false, errors: action.payload};
    default:
      return state;
  }
};

export default reducer;