import React from 'react';
import '../foodCard/FoodCard.css';

function FoodCard({ foodItem }) {
  return (
      <div className='foodCard' key={foodItem.id}>
          <img src={foodItem.image} alt={foodItem.name} />
          <div className='info-food-card'>
              <div className='name-section'>
                  <p className='item-name'>{foodItem.name}</p>
              </div>
              <div className='price-section'>
                  <p className='item-price'>${foodItem.price}</p>
              </div>
          </div>
      </div>
  )
}

export default FoodCard;