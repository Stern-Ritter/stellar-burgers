import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { composeEnhancers } from "./composeEnhancers";
import { rootReducer } from "./reducers";

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(rootReducer, enhancer);

export default store;
