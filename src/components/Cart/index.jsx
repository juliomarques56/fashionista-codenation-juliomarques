import React from "react";
import { useHistory } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";

import { connect, useDispatch } from "react-redux";
import { removeProductToCart, addProductToCart, toggleCartVisible, finishPurchase } from "../../store/actions/cart";
import { groupProducts, sumProducts } from "../../utils/products";

import CartProduct from '../CartProduct'

import bagEmpty from '../../assets/img/icon_bag.png';
import { FaArrowLeft } from "react-icons/fa";
import './style.scss';

function Cart({ visible = false, cartItems = [], count }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClickHome = () => {
    dispatch(toggleCartVisible());
    history.push("/");
	};

  const handlePurchase = (product) => {
    const cartPurchase = cartItems.map(
      (item) => item.selectedSize !== product.selectedSize
    );
    dispatch(toggleCartVisible());
    history.push("/");
    dispatch(finishPurchase(cartPurchase));
    
  };
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
                  <img src={bagEmpty} alt=""/>
                  <p>Sua sacola esta vazia!</p>
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
              <div className="button">
                <button type="button" className="button__keepBuying button__keepBuying--style"  onClick={handleClickHome}>Continuar Comprando</button>
                <span className="subtotal">
                  <p>Subtotal - {sumProducts(cartItems)}</p>
                </span>
              </div>
              
              <div className="button">
                <button type="button" className="button__keepBuying button__keepBuying--size" onClick={handlePurchase}>Finalizar Compra</button>
              </div>
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