import '../foodCard/FoodCard.css';
import { useGlobalContext } from '../../Context';

function FoodCard({ foodItem }) {
   const { addToCart } = useGlobalContext();
    const {id, image, name, price} = foodItem;

  return (
      <div className='foodCard' key={id} onClick={() => {addToCart(foodItem)}}>
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