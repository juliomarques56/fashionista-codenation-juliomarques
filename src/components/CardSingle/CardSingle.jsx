import React from "react";
import './CardSingle.scss'


export function ProductInstallments(props) {
  return <div className="card__installments">em até {props.installments}</div>;
}

export function ProductName(props) {
  return <h5 className="product__name ">{props.name}</h5>;
}

export function ProductPrice(props) {
  return <div className="card__pricing">{props.children}</div>;
  }

export function ProductRegularPrice(props) {
  return props.percentageDiscount ? <div className="product__price card__price--from">{props.price}</div>: '';
}

export function ProductActualPrice(props) {
  return <div className="product__price card__price--to">{props.price}</div>;
}
  
export function ProductBtn(props) {
  return <div className="card__productBtn">{props.children}</div>;
}

export function ProductFilter(props) {
  return <button type="button" className="card__producFilter">{props.sizes}</button>;
}

export function ProductButton(props) {
  return <button type="button" className="card__producButton">Adicionar à Sacola</button>;
}