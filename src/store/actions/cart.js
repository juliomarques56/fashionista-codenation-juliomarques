export const addProductToCart = (product) => {
    return {
      type: "ADD_PRODUCT_TO_CART",
      product,
    };
  };
  
  export const removeProductToCart = (products) => {
    return {
      type: "REMOVE_PRODUCT_TO_CART",
      products,
    };
  };
  
  export const toggleCartVisible = () => {
    return {
      type: "TOGGLE_CART_VISIBLE",
    };
  };

  export const finishPurchase = (products) => {
    return {
      type: "FINISH_PURCHASE_CART",
      products,
    };
  };
