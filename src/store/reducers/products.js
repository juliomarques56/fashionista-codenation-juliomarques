const INITIAL_STATE = {
    data: [],
  };
  
  const products = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "SET_INITAL_PRODUCTS":
        return { ...state, data: action.products };
  
      default:
        return state;
    }
  };
  
  export default products;