import { useState } from 'react';
import '../mainMenu/MainMenu.css';
import { food, pizzaAndBrew, StrawberrySundae, VanillaSundae } from '../../data/datajs';
import FoodCard from '../foodCard/FoodCard';
import CartOrder from '../CartOrder/CartOrder';

function MainMenu() {
    console.log(food);

  return (
    <div className='main-container'>
        <CartOrder />
        <section className='food-items-container'>
            <div className='top-row-items'>
                <div className='single-items first-container'>
                    {
                        food.map((foodItem) => {
                            return (
                                <FoodCard key={foodItem.id} foodItem={foodItem} />
                            )
                        })
                    }
                </div>
                <div className='single-items pizza-container'>
                    {
                        pizzaAndBrew.map((foodItem) => {
                            return (
                                <FoodCard key={foodItem.id} foodItem={foodItem} />
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
                                <FoodCard key={foodItem.id} foodItem={foodItem} />
                            )
                        })
                    }
                </div>
                <div className='single-items pizza-container'>
                    {
                        VanillaSundae.map((foodItem) => {
                            return (
                                <FoodCard key={foodItem.id} foodItem={foodItem} />
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