import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favReducer from "./favoriteReducer";
const reducers = combineReducers({
  movieReducer: movieReducer,
  favReducer: favReducer,
});

export default reducers;
