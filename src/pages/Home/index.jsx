import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";

import api from "../../service/api.js";

import { connect, useDispatch } from "react-redux";
import { setInitialProducts } from "../../store/actions/products";

import { clearProductStore, setProductActived} from "../../store/actions/product";

import { format } from "../../utils/FormatLink";
import { v4 as uuidv4 } from "uuid";

import Products from '../../components/Products';

import {Container, CountProduct, CatalogArea} from '../../components/Container';
import Cart from '../../components/Cart';
import Search from '../../components/Search'

import './style.scss';

function Home({products, quantity}) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await api.get("/catalog");
      dispatch(setInitialProducts(response.data));
    };

    getData();
  }, [dispatch]);

  const handleClickProduct = (product) => {
    dispatch(setProductActived(product));
    history.push(`/product/${format(product.name, true)}`);
  };
  
  return (
    <div className="home" onLoad={() => dispatch(clearProductStore())}>
      <Cart/>
      <Search/>
      <Container>
        <CountProduct>
           {quantity} Itens
        </CountProduct>
        <CatalogArea>
          {products.map((product) => (
            <Products
              handleClickProduct={() => handleClickProduct(product)}
              key={uuidv4()}
              {...product}
            />
          ))}
        </CatalogArea>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.data,
  quantity: state.products.data.length,
 
});

export default connect(mapStateToProps)(Home);
