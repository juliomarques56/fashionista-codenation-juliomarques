const INITIAL_STATE = {
    visible: false,
    productsFound: [],
    searchText: "",
  };
  
  const search = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "TOGGLE_SEARCH_VISIBLE":
        return {
          ...state,
          visible: !state.visible,
          searchText: ""
        };
  
      case "SET_PRODUCTS_FOUND":
        return {
          ...state,
          productsFound: action.products,
        };
  
      case "SET_SEARCH_TEXT":
        return {
          ...state,
          searchText: action.searchText,
        };
      default:
        return state;
    }
  };
  
  export default search;