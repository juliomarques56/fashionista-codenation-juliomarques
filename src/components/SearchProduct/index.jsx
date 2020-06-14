
import React from "react";
import ImgUnavailable from '../../assets/img/img_unavailable.png';

function SearchProduct({
    image,
    name,
    actual_price,
    installments,
    handleClickProduct,
  }) {
   
    return (
        <div className="product__list__item cursor" onClick={handleClickProduct}>
            <div className="product__list__row">
                <figure className="product__image">
                    <img src={image ? image:ImgUnavailable} alt={name} />
                </figure>
                <div className="product__list__info">
                    <p className="product__list__name">{name}</p> 
                </div>
                <div className="product__list__pricing">
                    <div class="product__list__current">{actual_price}</div>
                    <div className="product__list__installments">{installments}</div>
                </div>
            </div>
        </div>
    );
  }
  
  export default SearchProduct;