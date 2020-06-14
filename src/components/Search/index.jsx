import React from 'react';

import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";

import { toggleSearchVisible,setProductsFound,setSearchText } from "../../store/actions/search";
import { setProductActived } from "../../store/actions/product";
import { v4 as uuidv4 } from "uuid";

import { format } from "../../utils/FormatLink";
import { searchProductsByName } from "../../utils/products";

import { FaArrowLeft, FaSearch } from "react-icons/fa";
import SearchProduct from '../SearchProduct'
import './style.scss';

function Search({ visible, products, productsFound, textSearch }) {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const handleHideSearch = () => {
      dispatch(toggleSearchVisible());
    };
  
    const handleSearchInput = (inputText) => {
      dispatch(setSearchText(inputText));
  
      if (!inputText) {
        dispatch(setProductsFound([]));
      }
  
      if (inputText.trim().length !== 0) {
        const productsFound = searchProductsByName(products, inputText);
  
        dispatch(setProductsFound(productsFound));
      }
    };

    const handleClickProduct = (product) => {
        dispatch(toggleSearchVisible());
        dispatch(setProductsFound([]));
        dispatch(setProductActived(product));
        history.push(`/product/${format(product.name, true)}`);
      };
 
    return (
        
        <div className={`search ${visible === true ? 'search__is-visible' : ''}`}>
            <header className="search__header">
                <button className="search__back " onClick={handleHideSearch} type="button">
                  <FaArrowLeft/>
                </button>
                <p className="search__title">Buscar Produtos</p>
            </header>

            <main className="drawer__content">
                <div className="search__content">
                    <div className="search__form">
                        <input 
                          type="text" 
                          className="search__input" 
                          value={textSearch}
                          onChange={(e) => handleSearchInput(e.target.value)} 
                          placeholder="Buscar por produtos" 
                        />
                    </div>
                </div>
                {productsFound.length === 0 && (
                  <FaSearch className="content__empty"/>
                )}
                
                {productsFound.map((product) => (
                  <SearchProduct
                    key={uuidv4()}
                    {...product}
                    handleClickProduct={() => handleClickProduct(product)}
                  />
                ))}
            </main>
        </div>
    )
}

const mapStateToProps = (state) => ({
  visible: state.search.visible,
  productsFound: state.search.productsFound,
  textSearch: state.search.searchText,
  products: state.products.data,
});

export default connect(mapStateToProps)(Search);