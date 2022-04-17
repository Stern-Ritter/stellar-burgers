import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeEnhancers } from "./composeEnhancers";
import { rootReducer } from "./reducers";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { wsAllOrdersActions } from "./actions/all-orders";
import { wsUserOrdersActions } from "./actions/user-orders";
import { wsAPI } from "../utils/api";

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(`${wsAPI}/all`, wsAllOrdersActions),
    socketMiddleware(wsAPI, wsUserOrdersActions)
  )
);
const store = createStore(rootReducer, enhancer);

export default store;
