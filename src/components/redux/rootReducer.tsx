import { combineReducers } from "redux";
import GiphyReducer from "./ImagesRedux/getImages.reducer";
 
export default combineReducers({
  Giphy: GiphyReducer,
   
});
