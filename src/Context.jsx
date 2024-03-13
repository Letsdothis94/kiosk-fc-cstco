import React, { useContext, useState } from "react";
import { food, pizzaAndBrew, StrawberrySundae, VanillaSundae } from './data/data.json';
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [mainFood, setMainFood] = useState(food);
    const [pizzaBrew, setPizzaBrew] = useState(pizzaAndBrew);
    const [berrySundae, setBerrySundae] = useState(StrawberrySundae);
    const [vanillaSundaes, setVanillaSundaes] = useState(VanillaSundae);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (item) => {
        if (cart.includes(item)) {
            item.quantity += 1;
            setTotal(total + item.price);
        } else {
            setCart([...cart, item]);
            setTotal(total + item.price);
        }
    }

    const addMore = (order) => {
        addToCart(order);
    }

    const removeOne = (order) => {
        order.quantity -= 1;
        if(order.quantity <= 0) {
            removeItem(order);
        } else {
            setTotal(total - order.price);
        }
    }

    const removeItem = (order) => {
        setTotal(total - order.price);
        let updatedCart = cart.filter(item => item.id !== order.id);
        order.quantity = 1;
        setCart(updatedCart);
    }

    const cancelOrder = () => {
        cart.map((item) => item.quantity = 1);
        setCart([]);
        setTotal(0);
    }

    const baseUrl = `https://kiosk-food-court.vercel.app/`;

    const handleCheckout = async (order) => {
        const stripe = await stripePromise;
        const lineItems = order.map(item => ({
            price: item.id,
            quantity: item.quantity,
        }))
        const { error } = await stripe.redirectToCheckout({
            lineItems: lineItems,
            mode: 'payment',
            successUrl: baseUrl + '/success',
            cancelUrl: baseUrl + '/',
        });
    }

    return (
        <AppContext.Provider
            value={{
                cart,
                setCart,
                total,
                addToCart,
                mainFood,
                pizzaBrew,
                berrySundae,
                vanillaSundaes,
                cancelOrder,
                addMore,
                removeOne,
                handleCheckout,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };