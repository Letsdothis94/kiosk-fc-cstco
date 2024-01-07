import React, { useState } from 'react';
import '../mainMenu/MainMenu.css';
import { food, pizzaAndBrew, StrawberrySundae, VanillaSundae } from '../../data/datajs';
import FoodCard from '../foodCard/FoodCard';
import SelectedItem from '../selectedItem/SelectedItem';

function MainMenu() {
    console.log(food);
    const [order, setOrder] = useState([]);

    const additem = () => {
        setOrder([foodItem, ...order]);
    }

  return (
    <div className='main-container'>
        <section className='order-view-screen'>
            <div className='title-view'>
                <p>You can change or remove an item on the receipt by tapping it.</p>
            </div>
            <div className='order-items-selected'>
                <SelectedItem />
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