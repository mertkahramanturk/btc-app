import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {

  list,

} from "./redux/reducers/index";

const reducer = combineReducers({
  
    btcPriceData: list('https://api.coindesk.com/v1/bpi/currentprice.json')

});

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

export default store;
