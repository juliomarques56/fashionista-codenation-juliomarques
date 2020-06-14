import { combineReducers } from "redux";

import products from "./products";
import product from "./product";
import cart from "./cart";
import search from "./search";

export default combineReducers({
  products,
  product,
  cart,
  search,
});