import React from 'react';
import {Card, PercentageDiscount, CardBody, CardPrice, CardRegularPrice, CardActualPrice, CardImg, CardTitle} from './Card'

class Catalog extends React.Component {
	
	render() {
		const catalog = this.props.catalog;

		return (
			catalog.map(product => {
				return (
					
					<Card>	
						<CardImg image={product.image}/>
						<PercentageDiscount percentageDiscount={product.discount_percentage}/>
						<CardBody>
							<CardTitle name={product.name}/>
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
		);
	}
}

export default Catalog;
