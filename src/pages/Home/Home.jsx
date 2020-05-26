import React from 'react';

import Header from '../../components/Header/Header.jsx';
import Catalog from '../../components/Catalog/Catalog.jsx';
import { getProducts } from '../../service';


import '../../App.scss';
import {Container, CountProduct, CatalogArea} from '../../components/Styles';
import Cart from '../../components/Cart/Cart.jsx';
import Search from '../../components/Search/Search.jsx'

import './Home.scss';

export default function Home() {

  const [catalog, setCatalog] = React.useState([]);
  const [itemCount, setItemCount] = React.useState(0);
 

  React.useEffect(() => {
    setCatalog(getProducts);
    setItemCount(Object.keys(getProducts()).length);
  }, []);

  
  return (
    <div className="home" >
      
      <Header/>
      <Cart/>
      <Search/>
      <Container>
        <CountProduct>
            {itemCount} Itens
        </CountProduct>
        <CatalogArea>
          <Catalog
          catalog={catalog}
          />
        </CatalogArea>
      </Container>
    </div>
  );
}
