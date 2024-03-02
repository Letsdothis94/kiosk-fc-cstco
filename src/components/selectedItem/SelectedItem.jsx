import '../selectedItem/SelectedItem.css';

function SelectedItem({ order }) {
    const { id, image, name, price, quantity } = order;

  return (
      <div className='selected-item' key={id}>
          <p>{name}</p>
          <div className='pic-edit-price-section'>
              <img src={image} height="70px" width="70px" alt='hotdog' />
              <div className='quantity-edit'>
                  <p>Quantity: {quantity}</p>
                  <button>Edit</button>
              </div>
              <div className='price-selected'>
                  <p>${price}</p>
              </div>
          </div>
      </div>
  )
}

export default SelectedItem;