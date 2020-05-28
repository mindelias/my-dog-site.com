import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Search from "./index";
import {
  GET_FAIL,
  GET_SUCCESS,
  FILTER_FAIL,
  FILTER_SUCCESS,
  GET_SINGLE_FAIL,
  GET_SINGLE_SUCCESS,
  CLEAR_FILTER,
  LOAD_NEXT,
  LOAD_ERROR
} from "../../components/redux/types";

const initial = {
  dataArray: [],
  dataObj: null,
  loading: true,
  error: false,
  filter: [],
};

function reducer(state:any, action: any) {
  switch (action.type) {
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

function renderWithRedux(
  ui:any,
  {
    initialState=initial,
    store= createStore(reducer, initial)
    
  } = {}
) {
  return { ...render(<Provider store={store}> {ui}</Provider>) };
}

it("renders correctly", () => {
  const { queryByTestId, queryByPlaceholderText } = renderWithRedux(<Search />);
  expect(queryByTestId("search-button")).toBeTruthy();
  expect(queryByPlaceholderText("Search")).toBeTruthy();
});

describe("input value", () => {
  it("updates on change", () => {
    const { queryByPlaceholderText } = renderWithRedux(<Search />);
    const searchInput: any = queryByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });
});
