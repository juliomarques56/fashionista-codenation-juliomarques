import React from "react";
import './index.scss';

export function Section(props) {
  return <div className="app">{props.children}</div>
   
}

export function Container(props) {
  return <div className="container">{props.children}</div>;
}

export function CountProduct(props) {
  return <div className="count__product">{props.children}</div>;
}

export function CatalogArea(props) {
    return <div className="catalog__area">{props.children}</div>;
}
  
