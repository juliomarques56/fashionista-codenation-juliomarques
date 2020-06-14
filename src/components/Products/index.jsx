import React from 'react';

import ImgUnavailable from '../../assets/img/img_unavailable.png';

import './style.scss';

function Products({
	image,
	name,
	regular_price,
	actual_price,
	discount_percentage,
	handleClickProduct,
  }) {

	return (
		<div className="card" onClick={handleClickProduct}>	
			<img src={image ? image:ImgUnavailable} className="card__img" alt={name} />
			{discount_percentage ? 
				<div className="card__percentageDiscount">
					<span className="percentageDiscount">{discount_percentage} <br/> OFF</span>
				</div>
			: ''}
			
			<div className="card__body">
			<h5 className="card__name ">{name}</h5>
				<div className="card__pricing">
					{discount_percentage ? 
						<div>
							<span className="card__price card__price--from">{regular_price}</span>
							<span className="card__price card__price--to">{actual_price}</span>
						</div>
						:<span className="card__price">{actual_price}</span>
					}
				</div>
			</div>
		</div>	
	);
		
  }

export default Products;
