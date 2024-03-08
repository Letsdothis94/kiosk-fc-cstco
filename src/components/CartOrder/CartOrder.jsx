import React from 'react'
import SelectedItem from '../selectedItem/SelectedItem';
import '../CartOrder/CartOrder.css';
import { useGlobalContext } from '../../Context';

const CartOrder = () => {
    const { cart, total, cancelOrder} = useGlobalContext();
    console.log(cart);

  return (
      <section className='order-view-screen'>
          <div className='title-view'>
              <p>You can change or remove an item on the receipt by tapping it.</p>
          </div>
          <div className='order-items-selected'>
              {
                cart.map((order) => {
                    return (
                        <SelectedItem key={order.id} order={order}/>
                    )
                })
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
              <p>Pay for Order</p>
          </div>
      </section>
  )
}

export default CartOrder;