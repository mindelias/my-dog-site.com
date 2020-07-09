
import {
  GET_FAIL,
  GET_SUCCESS,
  FILTER_SUCCESS,
  GET_SINGLE_FAIL,
  GET_SINGLE_SUCCESS,
  CLEAR_FILTER,
  LOAD_NEXT,
  LOAD_ERROR, SET_LOADING
} from "../types";
export interface Istate {
  dataArray: any[];
  dataObj: '';
  loading: boolean;
  error: boolean;
  filter: any[];
}
const initialState = {
  dataArray: [],
  dataObj: null,
  loading: false,
  error: false,
  filter: [],
};

function GiphyReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.isLoading,
      };
    case GET_SUCCESS:
      return {
        ...state,
        loading: false,
        dataArray: action.payload,
        // filter:[]
      };
    case FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        filter: action.payload,
        // dataArray:[]
      };

    case GET_SINGLE_SUCCESS:
      return {
        ...state,
        loading: false,
        dataObj: action.payload,
      };
    case LOAD_NEXT:
      return {
        ...state,
        loading: false,
        dataArray: action.payload,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filter: [],
      };

    case GET_FAIL:
    case LOAD_ERROR:
    case GET_SINGLE_FAIL:
      return {
        ...state,
        loading: false,
        dataArray: null,
        dataObj: null,
        error: action.payload,
      };

    default:
      return state;
  }
}

export default GiphyReducer;
