import React from 'react';

import Header from '../../components/Header/Header.jsx';
import ProductInfo from '../../components/ProductInfo/ProductInfo.jsx';
import {useParams} from 'react-router';
import { getProduct } from '../../service';
import Cart from '../../components/Cart/Cart.jsx'
import Search from '../../components/Search/Search.jsx'

import {Container} from '../../components/Styles';

export default function Product() {
  const [product, setProduct] = React.useState([]);
  const {name} = useParams();


  React.useEffect(() => {
      
    setProduct(getProduct(name));
          
  },[name]);
 
  
  return (
  
    <div className="product" >
      
      <Header/>
      <Cart/>
      <Search/>
      <Container>
        <ProductInfo prod={product}/>
      </Container>
    </div>
  );
}
