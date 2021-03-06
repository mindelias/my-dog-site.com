import axios from "axios";
import {
  GET_FAIL,
  GET_SUCCESS,
  GET_SINGLE_FAIL,
  GET_SINGLE_SUCCESS,
  FILTER_SUCCESS,
  FILTER_FAIL,
  CLEAR_FILTER,
  LOAD_ERROR,
  LOAD_NEXT,
  SET_LOADING,
} from "../types";

interface queryInput {
  input: string;
}
export const loading = (isLoading: boolean) => ({
  type: SET_LOADING,
  isLoading,
});

export const loadGifs = () => async (dispatch: any) => {
  dispatch(loading(true));
  try {
    const res = await axios.get("https://dog.ceo/api/breed/hound/images");
    localStorage.setItem("Array", res.data.message);
    dispatch({
      type: GET_SUCCESS,
      payload: res.data.message,
    });
    dispatch(loading(false));
  } catch (error) {
    dispatch(loading(false));
    dispatch({
      type: GET_FAIL,
      payload: error.response,
    });
    console.log(error.response);
  }
};

export const FilterGifs = (input: string) => async (dispatch: any) => {
  dispatch(loading(true));
  try {
    const res = await axios.get(`https://dog.ceo/api/breed/${input}/images`);
    dispatch({
      type: FILTER_SUCCESS,
      payload: res.data.message,
    });
    dispatch(loading(false));
  } catch (error) {
    console.log(error.data);
    dispatch(loading(false));
    dispatch({
      type: FILTER_FAIL,
      payload: error.response.data.message,
    });
    console.log(error.response.data.message);
  }
};

export const loadSingleGifs = (id: any, data: any) => async (dispatch: any) => {
  try {
    // eslint-disable-next-line
    const res = data.find((item: string, index: number) => {
      if (index === id) {
        return item;
      }
    });
    console.log(res);
    console.log(data);
    dispatch({
      type: GET_SINGLE_SUCCESS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_FAIL,
      payload: "something went wrong",
    });
    console.log(error.response);
  }
};

export const loadnext = (offset: number, data: any[]) => async (
  dispatch: any
) => {
  try {
    // console.log("loader", page);
    const res = await data.slice(offset, offset + 100);
    console.log(res);
    dispatch({
      type: LOAD_NEXT,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: LOAD_ERROR,
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
  dispatch({ type: CLEAR_FILTER });
};
