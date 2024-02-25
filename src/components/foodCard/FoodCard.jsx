import React from 'react';
import '../foodCard/FoodCard.css';

function FoodCard({ foodItem }) {
    const {id, image, name, price} = foodItem;
  return (
      <div className='foodCard' key={id}>
          <img src={image} alt={name} />
          <div className='info-food-card'>
              <div className='name-section'>
                  <p className='item-name'>{name}</p>
              </div>
              <div className='price-section'>
                  <p className='item-price'>${price}</p>
              </div>
          </div>
      </div>
  )
}

export default FoodCard;