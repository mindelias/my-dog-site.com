import axios from "axios";
import {
  GET_FAIL,
  GET_SUCCESS,
  GET_SINGLE_FAIL,
  GET_SINGLE_SUCCESS,
  FILTER_SUCCESS,
  FILTER_FAIL,
  CLEAR_FILTER
} from "../types";
import { BASE_URL, API_KEY } from "../../../utils/";

interface queryInput {
  input: string;
}
// interface AmountType {
//   amount: string;
//   accountNumber: string;
// }
// type depositType = Pick<AmountType, "amount">;

export const loadGifs = () => async (dispatch: any) => {
  try {
    const res = await axios.get(BASE_URL + `/trending?api_key=${API_KEY}`);
    console.log(res.data);
    dispatch({
      type: GET_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_FAIL,
      payload: error.response,
    });
    console.log(error.response);
  }
};

export const FilterGifs = (input: string) => async (dispatch: any) => {
  try {
    const res = await axios.get(
      BASE_URL + `/search?api_key=${API_KEY}&q=${input}`
    );
    dispatch({
      type: FILTER_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: FILTER_FAIL,
      payload: error.response,
    });
    console.log(error.response);
  }
};

export const loadSingleGifs = (id: any) => async (dispatch: any) => {
  try {
    console.log("loader", id)
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`
    );
    console.log(res.data)
    dispatch({
      type: GET_SINGLE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_FAIL,
      payload: error.response,
    });
    console.log(error.response);
  }
};

// clear filter
// export const clearFilter = () => {
//   dispatch({ type: clear_filter });
// };

export const ClearFilter = () => async (dispatch: any) => {
  dispatch({ type: CLEAR_FILTER});
};
