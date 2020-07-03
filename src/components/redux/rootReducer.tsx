import { combineReducers } from "redux";
import GiphyReducer from "./Giphy/giphy.reducer";
 
export default combineReducers({
  Giphy: GiphyReducer,
   
});
