import { combineReducers } from "redux";

import * as formData from "./ducks/formData.duck";
export const rootReducer = combineReducers({
  formData: formData.reducer,
});

