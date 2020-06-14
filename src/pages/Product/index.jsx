import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import { addProductToCart } from "../../store/actions/cart";
import { setSelectedSize, toggleErrorSelectedSize } from "../../store/actions/product";

import ProductInfo from '../../components/ProductInfo';
import Cart from '../../components/Cart'
import Search from '../../components/Search'
import {Container} from '../../components/Container';

import './style.scss'

function Product({ product }) {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!product?.name) {
      history.push("/");
    }
  }, [history, product]);

  const addProductCart = (sizeProduct) => {
    const productToCart = {
      ...product,
      selectedSize: sizeProduct,
    };

    dispatch(addProductToCart(productToCart));
  };

  const toggleErrorSize = (hasError) => {
    dispatch(toggleErrorSelectedSize(hasError));
  };

  const addSelectedSize = (size) => {
    dispatch(setSelectedSize(size));
  };

  return (
    
    <div className="product" >
      <Cart/>
      <Search/>
      <Container>
        <ProductInfo 
          addProductCard={addProductCart}
          toggleErrorSize={toggleErrorSize}
          addSelectedSize={addSelectedSize}
          {...product}
        />
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  product: state.product.product,
});


export default connect(mapStateToProps)(Product);
