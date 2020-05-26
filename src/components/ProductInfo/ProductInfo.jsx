import React from 'react';
import { ProductName, ProductPrice, ProductRegularPrice, ProductInstallments, ProductButton, ProductActualPrice, ProductBtn, ProductFilter } from '../CardSingle/CardSingle.jsx'
import { CardImg} from '../Card/Card.jsx'
import './ProductInfo.scss'


function ProductInfo({prod}) {

    const getSizes = (prod) => {
        const Sizes = prod.sizes.filter(tam => tam.available === true);
        return Sizes
    }
    
    return(
        prod.map(product => {
            return (
                
                <div className="productSingle" name={product.name}>	
                    <figure className="ProductSingle__img">
                        <CardImg image={product.image}/>
                    </figure>
                    
                    <div className="productSingle__descriptions">
                        <ProductName name={product.name}/>
                        <ProductPrice>
                            <ProductRegularPrice 
                                price={product.regular_price}
                                percentageDiscount={product.discount_percentage}
                            />
                            <ProductActualPrice price={product.actual_price}/>
                            <ProductInstallments installments={product.installments}/>
                        </ProductPrice>
                        <div className="productSingle__sizes">
                           <span> Escolha o tamanho</span>
                            <ProductBtn>
                                {getSizes(product).map(tam => {
                                     return (
                                         <ProductFilter sizes={tam.size}/>
                                     )
                                })}
                               
                           
                            </ProductBtn>
                        </div>
                        <div className="ProductSingle__button">
                            <ProductButton/>
                        </div>
                    </div>     
                </div>	
            );
        })
	)	
	
}

export default ProductInfo;
