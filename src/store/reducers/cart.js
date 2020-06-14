const INITIAL_STATE = {
    items: [],
    count: 0,
    visible: false,
  };
  
  const cart = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "ADD_PRODUCT_TO_CART":
        const newItems = [...state.items, action.product];
        return {
          ...state,
          items: newItems,
          count: newItems.length,
        };
  
      case "TOGGLE_CART_VISIBLE":
        return {
          ...state,
          visible: !state.visible,
        };
  
      case "REMOVE_PRODUCT_TO_CART":
        const newProducts = [...action.products];
        return {
          ...state,
          items: newProducts,
          count: newProducts.length,
        };
  
      default:
        return state;
    }
  };
  
  export default cart;