import React from 'react';
import './ItemsView.css';
import { ShopItem } from '../ShopList/ShopItem';

export const ItemsView = ({cards}) => {
  return (
    <div className='items-list'>
       {cards.map((card, index) => {
          return (
            <div key={index}>
              <ShopItem item={card} />
            </div>
          )
        })}
    </div>
  )
}
