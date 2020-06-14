import React from "react";

import { v4 as uuidv4 } from "uuid";

import { connect, useDispatch } from "react-redux";
import { removeProductToCart, addProductToCart, toggleCartVisible } from "../../store/actions/cart";
import { groupProducts, sumProducts } from "../../utils/products";

import CartProduct from '../CartProduct'

import { FaArrowLeft } from "react-icons/fa";
import './style.scss';

function Cart({ visible = false, cartItems = [], count }) {
    const dispatch = useDispatch();

  const RemoveOneProduct = (product) => {
    const productToRemove = { ...product };

    const indexProduct = cartItems.findIndex((item) => {
      return (
        item.name === productToRemove.name &&
        item.selectedSize === productToRemove.selectedSize
      );
    });

    const newItemsCart = cartItems.filter(
      (_item, index) => index !== indexProduct
    );

    dispatch(removeProductToCart(newItemsCart));
  };

  const RemoveProduct = (product) => {
    const newItemsCart = cartItems.filter(
      (item) => item.selectedSize !== product.selectedSize
    );

    dispatch(removeProductToCart(newItemsCart));
  };

  const AddProduct = (product) => {
    delete product.quantity;

    dispatch(addProductToCart(product));
  };

    const handleHiddenCart = () => {
        dispatch(toggleCartVisible());
      };

    return (
        <div className={`cart ${visible === true ? 'cart__is-visible' : ''}`}>
            <header className="cart__header">
                <button className="cart__back" onClick={handleHiddenCart} type="button">
                  <FaArrowLeft/>
                </button>
                <p className="cart__title">Sacola ({count})</p>
            </header>

            <main className="drawer__content">
              {count === 0 && (
                <span className="cart__empty">
                  Sua sacola está vazia
                </span>
                
              )}
              {cartItems.reduce(groupProducts, []).map((product) => (
                  <CartProduct
                      key={uuidv4()}
                      RemoveOneProduct={() => RemoveOneProduct(product)}
                      AddProduct={() => AddProduct(product)}
                      RemoveProduct={() => RemoveProduct(product)}
                      {...product}
                  />
              ))}
            </main>
            <footer className="footer">
                <p>Subtotal - {sumProducts(cartItems)}</p>
            </footer>
        </div>
    )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.items,
    count: state.cart.count,
    visible: state.cart.visible,
});
  
export default connect(mapStateToProps)(Cart);