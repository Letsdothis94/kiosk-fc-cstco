import React from 'react';
import '../mainMenu/MainMenu.css';
import { food, pizzaAndBrew, StrawberrySundae, VanillaSundae } from '../../data/datajs';
import FoodCard from '../foodCard/FoodCard';

function MainMenu() {
    console.log(food);

  return (
    <div className='main-container'>
        <section className='order-view-screen'>
            <div className='title-view'>
                <p>You can change or remove an item on the receipt by tapping it.</p>
            </div>
            <div className='order-items-selected'>
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
            </div>
            <div className='sub-total-div'>
                <p>Sub-Total:</p>
                <p>$0.00</p>
            </div>
            <div className='btn-cancel'>
                <p>Cancel Order</p>
            </div>
            <div className='btn-pay'>
                <p>Pay for Order</p>
            </div>
        </section>
        <section className='food-items-container'>
            <div className='top-row-items'>
                <div className='single-items first-container'>
                    {
                        food.map((foodItem) => {
                            return (
                                <FoodCard foodItem={foodItem} />
                            )
                        })
                    }
                </div>
                <div className='single-items'>
                    {
                        pizzaAndBrew.map((foodItem) => {
                            return (
                                <FoodCard foodItem={foodItem} />
                            )
                        })
                    }
                </div>
            </div>
            <div className='bot-row-items'>
                <div className='single-items first-container'>
                    {
                        StrawberrySundae.map((foodItem) => {
                            return (
                                <FoodCard foodItem={foodItem} />
                            )
                        })
                    }
                </div>
                <div className='single-items'>
                    {
                        VanillaSundae.map((foodItem) => {
                            return (
                                <FoodCard foodItem={foodItem} />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </div>
  )
}

export default MainMenu;