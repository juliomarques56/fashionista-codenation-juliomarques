import React from "react";

export function Card(props) {
  return (
    <a href="/" className="card" data-testid="character">
      {props.children}
    </a>
   
  );
}


export function CardImg(props) {
  return <img src={props.image} className="card-img-top" alt={props.alt} />;
}

export function PercentageDiscount(props) {
  return props.percentageDiscount ? <span className="card__percentageDiscount">{'- ' + props.percentageDiscount}</span>: '';
}

export function CardBody(props) {
  return <div className="card-body">{props.children}</div>;
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

export function CardTitle(props) {
  return <h5 className="card-title">{props.name}</h5>;
}

