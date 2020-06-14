import React from "react";

import ImgUnavailable from '../../assets/img/img_unavailable.png';

import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import './style.scss'

function CartProduct({
    name,
    actual_price,
    installments,
    image,
    selectedSize,
    sizes,
    quantity,
    RemoveOneProduct,
    AddProduct,
    RemoveProduct,
  }) {

    const handleRemoveOneProduct = () => {
      RemoveOneProduct();
    };
  
    const handleRemoveProduct = () => {
      RemoveProduct();
    };
  
    const handleAddProduct = () => {
      AddProduct();
    };

    return (
        
            <div className="product__list__item">
              <div className="product__list__row">
                  <figure className="product__image">
                  <img src={image ? image:ImgUnavailable} alt={name} />
                  </figure>
                  <div className="product__list__info">
                      <p className="product__list__name">{name}</p>
                      <p className="product__list__size">
                          <span>
                              Tam:
                                  {sizes
                                  .filter((size) => selectedSize === size.sku)
                                  .map((size) => size.size)}
                          </span>
                      </p>
                      <div class="product__list__quantity">
                          <button type="button" className="cart__icons" onClick={handleRemoveOneProduct}>
                            <FaMinus/>
                          </button>
                          <span className="product__list__input">{quantity}</span>
                          <button type="button" className="cart__icons" onClick={handleAddProduct}>
                            <FaPlus/>
                          </button>
                      </div>
                  </div>
                  <div className="product__list__pricing">
                      <div class="product__list__current">{actual_price}</div>
                      <div className="product__list__installments">{installments}</div>
                  </div>
                 
              </div>
              <div className="cart__remove">
                <button type="button" className="trash" onClick={handleRemoveProduct}>
                  <FaTrashAlt/>
                </button>
              </div>
            </div>
        
    )
}
    
export default CartProduct;