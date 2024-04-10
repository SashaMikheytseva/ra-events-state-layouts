import React from 'react';
import './ShopCard.css';

export const ShopCard = ({ cardItem }) => {
  return (
    <div className="shop-card">
        <h2>{cardItem.name}</h2>
        <p>{cardItem.color}</p>
        <img src={cardItem.img}></img>
        <div className="shop-card-bottom">
            <p className="price">${cardItem.price}</p>
            <button className="cart-btn">add to cart</button>
        </div>
    </div>
  )
}
