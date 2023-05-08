import { useContext, useReducer, createContext, useEffect } from 'react'
import CartReducer from "./CartDispatcher"

const CartContext = createContext()
const CartContextDispatcher = createContext()


const initialState = {
    cart: [],
    total: 0
}

export default function CartProvider({ children }) {

    const [cart, dispatch] = useReducer(CartReducer, JSON.parse(localStorage.getItem("FOOD")) || initialState)

    useEffect(() => {
        localStorage.setItem("FOOD", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={cart}>
            <CartContextDispatcher.Provider value={dispatch}>
                {children}
            </CartContextDispatcher.Provider>
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
export const useCartActions = () => useContext(CartContextDispatcher)