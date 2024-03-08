import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    const addToCart = (foodItem) => {
        if (cart.includes(foodItem.id)) {
            foodItem.quantity += 1;
        } else {
            setCart([...cart, foodItem]);
        }
    }

    return (
        <AppContext.Provider
            value={{
                cart,
                setCart,
                total,
                addToCart,
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