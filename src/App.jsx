import React from 'react';
import Routes from "./routes";
import { BrowserRouter } from 'react-router-dom';

import { connect } from "react-redux";

import Header from './components/Header'

function App({ visibleCart = false, visibleSearch = false }) {

  return (
    <div className={`app ${visibleCart === true || visibleSearch === true? 'app__is-visible' : ''}`}>
      <BrowserRouter>
        <Header/>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => ({
  
  visibleCart: state.cart.visible,
  visibleSearch: state.search.visible,
});

export default connect(mapStateToProps)(App);