import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise-middleware";
import rootReducer from "./reducers";
import reduxThunk from "redux-thunk";

const middleware = [reduxThunk, promise];

export default createStore(rootReducer, applyMiddleware(...middleware));