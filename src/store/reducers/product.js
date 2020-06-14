const INITIAL_STATE = {
    product: {},
    selectedSize: null,
    errorSelectedSize: false,
  };
  
  const product = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SET_PRODUCT_ACTIVED":
        return { ...state, product: action.product };
  
      case "SET_SELECTED_SIZE":
        return { ...state, selectedSize: action.size };
  
      case "TOGGLE_ERROR_SELECTED_SIZE":
        return { ...state, errorSelectedSize: action.hasError };
  
      case "CLEAR_PRODUCT_STORE":
        return { ...state, ...INITIAL_STATE };
  
      default:
        return state;
    }
  };
  
  export default product;