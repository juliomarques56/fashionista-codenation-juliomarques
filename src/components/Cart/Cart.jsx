import React from 'react';
import './Cart.scss';

function Cart() {

    function hideCart() {
        document.querySelector(".cart").classList.remove("cart__is-visible");
        document.querySelector(".app").classList.remove("app__is-visible");
    }

    return (
        <div className="cart">
            <header className="cart__header">
                <button className="cart__back" onClick={hideCart} type="button"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg></button>
                <p className="cart__title">Sacola ()</p>
            </header>

            <main className="drawer__content">

            </main>
            <footer className="footer">
                <p>Subtotal- R$100,00</p>
            </footer>
        </div>
    )
}

export default Cart;