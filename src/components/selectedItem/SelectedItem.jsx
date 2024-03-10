import { useGlobalContext } from '../../Context';
import '../selectedItem/SelectedItem.css';
import { useState } from 'react';

function SelectedItem({ order }) {
    const { id, image, name, price, quantity } = order;
    const { addMore, removeOne } = useGlobalContext();
    const [update, setUpdate] = useState(true);

    const updateAmount = () => {
        setUpdate(!update);
    }

  return (
      <div className='selected-item' key={id}>
          <p>{name}</p>
          <div className='pic-edit-price-section'>
              <img src={image} height="70px" width="70px" alt='hotdog' />
              <div className='quantity-edit'>
                { update ? 
                    <p>Quantity: {quantity}</p> :
                    <p>Quantity: 
                        <button id='btn-upte' onClick={() => {addMore(order)}}>🔼</button>
                            {quantity} 
                        <button id='btn-upte' onClick={() => {removeOne(order)}}>🔽</button>
                    </p>
                }
                <button onClick={() => {updateAmount()}}>Edit</button>
              </div>
              <div className='price-selected'>
                  <p>${price}</p>
              </div>
          </div>
      </div>
  )
}

export default SelectedItem;