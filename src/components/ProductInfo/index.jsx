import React from 'react';
import { connect } from "react-redux";
import ImgUnavailable from '../../assets/img/img_unavailable.png';

import './style.scss';

function ProductInfo({
    image,
    name,
    actual_price,
    on_sale,
    discount_percentage,
    regular_price,
    installments,
    sizes = [],
    addProductCard,
    toggleErrorSize,
    addSelectedSize,
    errorSelected,
    selectedSize,
  }) {

    const handleAddProduct = () => {
        if (selectedSize == null) {
          toggleErrorSize(true);
          return;
        }
        toggleErrorSize(false);
        addProductCard(selectedSize);
    };

    const handleSelectedSize = (size) => {
        addSelectedSize(size);
    };

    return (
        
        <div className="productSingle" name={name}>	
            <figure className="ProductSingle__img">
                <img src={image ? image:ImgUnavailable} className="card__img" alt={name} />
                {discount_percentage ? <span className="card__percentageDiscount">{discount_percentage} OFF</span>: ''}
            </figure>
            
            <div className="productSingle__descriptions">
                <h5 className="product__name ">{name}</h5>
                <div className="card__pricing">
                    {discount_percentage ? 
						<div>
							<span className="product__price product__price--from">{regular_price}</span>
							<span className="product__price product__price--to">{actual_price}</span>
						</div>
						:<span className="product__price">{actual_price}</span>
					}
                    <span className="product__installments">em até {installments}</span>
                </div>
                <div className="product__sizes">
                    <span> Escolha o tamanho</span>
                    
                    <div className="sizes">
                        
                        {sizes.map(
                            (size) =>
                                size.available && (
                                <button
                                    type="button" 
                                    className={"size " + (selectedSize === size.sku ? "size--selected": '')}
                                    onClick={() => handleSelectedSize(size.sku)}
                                    key={size.sku}
                                >
                                    {size.size}
                                </button>
                                )
                        )}
                    </div>
                    {errorSelected && (
                        <span className="error__size">
                            Escolha um tamanho
                        </span>
                        )}
                </div>
                <div className="ProductSingle__button">
                    <button type="button" className="button__addProduct" onClick={handleAddProduct}>Adicionar à Sacola</button>
                </div>
            </div>     
        </div>	
    );

		
	
}

const mapStateToProps = (state) => ({
    errorSelected: state.product.errorSelectedSize,
    selectedSize: state.product.selectedSize,
  });
  
  export default connect(mapStateToProps)(ProductInfo);
