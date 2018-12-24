import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_SUCCESS,
  FETCHING_COIN_DATA_FAIL
} from "../Actions/ActionTypes";

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
};

function fetchingCoinData(state, action) {
  return {
    ...state,
    isFetching: true
  };
}

function fetchingCoinDataSuccess(state, action) {
  return {
    ...state,
    isFetching: false,
    data: action.payload,
    hasError: false,
    errorMessage: null
  };
}

function fetchingCoinDataFail(state, action) {
  return {
    ...state,
    isFetching: false,
    data: action.payload,
    hasError: true,
    errorMessage: action.err
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return fetchingCoinData(state, action);
    case FETCHING_COIN_DATA_SUCCESS:
      return fetchingCoinDataSuccess(state, action);
    case FETCHING_COIN_DATA_FAIL:
      return fetchingCoinDataFail(state, action);
    default:
      return state;
  }
}
