import { useState } from 'react';
import '../mainMenu/MainMenu.css';
import { food, pizzaAndBrew, StrawberrySundae, VanillaSundae } from '../../data/datajs';
import FoodCard from '../foodCard/FoodCard';
import CartOrder from '../CartOrder/CartOrder';
import { useGlobalContext } from '../../Context';

function MainMenu() {
    const { mainFood, pizzaBrew, berrySundae, vanillaSundaes } = useGlobalContext();
    console.log(mainFood);

  return (
    <div className='main-container'>
        <CartOrder />
        <section className='food-items-container'>
            <div className='top-row-items'>
                <div className='single-items first-container'>
                    {
                        mainFood.map((foodItem) => {
                            return (
                                <FoodCard key={foodItem.id} foodItem={foodItem} />
                            )
                        })
                    }
                </div>
                <div className='single-items pizza-container'>
                    {
                        pizzaBrew.map((foodItem) => {
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
                        berrySundae.map((foodItem) => {
                            return (
                                <FoodCard key={foodItem.id} foodItem={foodItem} />
                            )
                        })
                    }
                </div>
                <div className='single-items pizza-container'>
                    {
                        vanillaSundaes.map((foodItem) => {
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