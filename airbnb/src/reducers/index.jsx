import {FETCH_START, FETCH_SUCCESS, FETCH_FAILURE} from "../actions"

const initialState = {listingData: [], isFetching: false, errors: null};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {...state, listingData: [], isFetching: true, errors: null};
    case FETCH_SUCCESS:
      return {...state, listingData: action.payload, isFetching: false, errors: null};
    case FETCH_FAILURE:
      return {...state, listingData: [], isFetching: false, errors: action.payload};
    default:
      return state;
  }
};

export default reducer;