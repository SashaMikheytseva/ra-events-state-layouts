import React from 'react';
import { ShopCard } from '../ShopCard/ShopCard';
import './CardsView.css';


export const CardsView = ({cards}) => {
  return (
    <div className='cards'>
        {cards.map((card, index) => {
          return (
            <div key={index}>
              <ShopCard cardItem={card} />
            </div>
          )
        })}
    </div>
  )
}
