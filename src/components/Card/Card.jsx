import React from "react";
import './Card.scss';

import { Link } from 'react-router-dom';
import ImgUnavailable from '../../assets/img/img_unavailable.png';


export function Card(props) {
  return <Link to={`/Product/${props.code_color}`} className="card">{props.children}</Link>
}

export function CardImg(props) {
  return <img src={props.image ? props.image:ImgUnavailable} className="card__img" alt={props.alt} />;
}

export function PercentageDiscount(props) {
  return props.percentageDiscount ? <span className="card__percentageDiscount">{'- ' + props.percentageDiscount}</span>: '';
}

export function CardBody(props) {
  return <div className="card__body">{props.children}</div>;
}

export function CardName(props) {
  return <h5 className="card__name ">{props.name}</h5>;
}

export function CardPrice(props) {
  return <div className="card__pricing">{props.children}</div>;
}

export function CardRegularPrice(props) {
return props.percentageDiscount ? <div className="card__price card__price--from">{props.price}</div>: '';
}

export function CardActualPrice(props) {
  return <div className="card__price card__price--to">{props.price}</div>;
}
