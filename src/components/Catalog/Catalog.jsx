import React from 'react';
import {Card, PercentageDiscount, CardBody, CardPrice, CardRegularPrice, CardActualPrice, CardImg, CardName} from '../Card/Card.jsx'

const Catalog = ({catalog}) => (

	catalog.map(product => {
		return (
			
			<Card code_color={product.code_color}>	
				<CardImg image={product.image}/>
				<PercentageDiscount percentageDiscount={product.discount_percentage}/>
				<CardBody>
					<CardName name={product.name}/>
					<CardPrice>
						<CardRegularPrice 
							price={product.regular_price}
							percentageDiscount={product.discount_percentage}
						/>
						<CardActualPrice price={product.actual_price}/>
					</CardPrice>
				</CardBody>
			</Card>	
		);
	})
		
	
)

export default Catalog;
