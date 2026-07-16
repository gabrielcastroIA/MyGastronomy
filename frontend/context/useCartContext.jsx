import { createContext, useState } from "react";

const CartContext = createContext()

export function CartProvider({ Children }) {
    const [cartItems, setCartItems] = useState()

    const addToCart = (itemToAdd) => {

    }

    const removeFromCart = (itemId) => {

    }

    return (
        <CartContext.Provider value={{ removeFromCart, addToCart, cartItems }}>
            {Children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const context = useContext(CartContext)

    if (!context) {
        console.log('voce esta fora do CartContext')
    }

    return context
}