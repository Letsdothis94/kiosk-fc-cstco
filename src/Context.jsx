import React, { useContext, useState, useEffect } from "react";
import { food, pizzaAndBrew, StrawberrySundae, VanillaSundae } from './data/data.json';

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

    useEffect(() => {
        cart
    }, [addToCart]);

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