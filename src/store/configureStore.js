import 'regenerator-runtime/runtime'
import {  createStore } from "redux";
import rootReducer from "../reducers";
//  Returns the store instance
// It can  also take initialState argument when provided
export default function configureStore(initialState) {


  const store = createStore(
    rootReducer,
    initialState
  );
  return store;
}
