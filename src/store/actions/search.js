export const toggleSearchVisible = () => {
    return {
      type: "TOGGLE_SEARCH_VISIBLE",
    };
  };
  
  export const setProductsFound = (products) => {
    return {
      type: "SET_PRODUCTS_FOUND",
      products,
    };
  };
  
  export const setSearchText = (searchText) => {
    return {
      type: "SET_SEARCH_TEXT",
      searchText,
    };
  };