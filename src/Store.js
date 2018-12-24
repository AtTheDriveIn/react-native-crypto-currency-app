import { Platform } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "remote-redux-devtools";
import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";

import RootReducer from "./Reducers";

const middlewares = [thunk, promise, logger];

const initialState = {};

const Store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default Store;
