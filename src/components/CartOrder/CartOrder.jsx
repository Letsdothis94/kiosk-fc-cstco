import React, { useEffect, useState } from 'react'
import SelectedItem from '../selectedItem/SelectedItem';
import '../CartOrder/CartOrder.css';
import { useGlobalContext } from '../../Context';

const CartOrder = () => {
    const { cart, total, cancelOrder, handleCheckout, order } = useGlobalContext();
    console.log(cart);

    const [empty, setEmpty] = useState(true);

    const isEmpty = () => {
        if (cart.length === 0) {
            setEmpty(true);
        } else {
            setEmpty(false);
        }
    }

    useEffect(() => {
        isEmpty();
    }, [cart]);
    console.log(`Empty:`, empty);

  return (
      <section className='order-view-screen'>
          <div className='title-view'>
            {empty ? 
                (<div className='title-view-logo-container'>
                    <img src="images/food-mart-high-resolution-logo-transparent.png" className='logo-empty' />
                </div>) : 
                (<p>You can change or remove an item on the receipt by tapping it.</p>)
            }
          </div>
          <div className='order-items-selected'>
            {cart.length === 0 ? 
                (<div className='empty-msg-div'><p className='message-empty'>Please tap your selection to begin your order</p></div>) : ( 
                  cart.map((order) => {
                      return (
                          <SelectedItem key={order.id} order={order}/>
                          )
                        })
                )
            }
          </div>
          <div className='sub-total-div'>
              <p>Sub-Total:</p>
              <p>${total.toFixed(2)}</p>
          </div>
          <div className='btn-cancel' onClick={() => {cancelOrder()}}>
              <p>Cancel Order</p>
          </div>
          <div className='btn-pay'>
              <p role='link' onClick={() => {handleCheckout(cart)}}>Pay for Order</p>
          </div>
      </section>
  )
}

export default CartOrder;