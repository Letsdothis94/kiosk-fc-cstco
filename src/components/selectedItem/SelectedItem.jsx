import React from 'react';

function SelectedItem() {
  return (
      <div className='selected-item'>
          <p>Hotdog & Soda</p>
          <div className='pic-edit-price-section'>
              <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/costco-hot-dog-soda.jpg?quality=82&strip=1" height="70px" width="70px" alt='hotdog' />
              <div className='quantity-edit'>
                  <p>Quantity: 1</p>
                  <button>Edit</button>
              </div>
              <div className='price-selected'>
                  <p>$2.99</p>
              </div>
          </div>
      </div>
  )
}

export default SelectedItem;