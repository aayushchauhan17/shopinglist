import listReducer from "./listReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  listReducer: listReducer,
});

export default rootReducer;
