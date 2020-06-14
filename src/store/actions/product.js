export const setProductActived = (product) => {
    return {
      type: "SET_PRODUCT_ACTIVED",
      product,
    };
  };
  
  export const setSelectedSize = (size) => {
    return {
      type: "SET_SELECTED_SIZE",
      size,
    };
  };
  
  export const toggleErrorSelectedSize = (hasError) => {
    return {
      type: "TOGGLE_ERROR_SELECTED_SIZE",
      hasError,
    };
  };
  
  export const clearProductStore = () => {
    return {
      type: "CLEAR_PRODUCT_STORE"
    };
  };