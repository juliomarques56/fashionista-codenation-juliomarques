import { createStore } from "redux";
import rootReducer from "./reducers/index";

import { getState, setState } from "../utils/localStorage";

const persistedStateCart = getState("cart");
const persistedStateProduct = getState("product");

const store = createStore(rootReducer, {
  cart: persistedStateCart?.cart,
  product: persistedStateProduct?.product,
});

store.subscribe(() => {
  setState("cart", { cart: store.getState().cart });
  setState("product", { product: store.getState().product });
});

export default store;