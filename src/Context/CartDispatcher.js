
const CartReducer = (state, action) => {
    switch (action.type) {

        case "ADD_TO_CART": {
            const updatedCart = [...state.cart]
            const indexItem = updatedCart.find(item => item.id === action.payload.id)

            if (!indexItem) {
                updatedCart.push({ ...action.payload, quantity: 1 })
                return { ...state, cart: updatedCart, total: state.total + action.payload.price }
            } else {
                const updatedCart = [...state.cart]
                const indexItem = updatedCart.findIndex(item => item.id === action.payload.id)

                const updatedItem = { ...updatedCart[indexItem] }
                updatedItem.quantity++
                updatedCart[indexItem] = updatedItem
                return { ...state, cart: updatedCart, total: state.total + action.payload.price }
            }

        }



        case "MINUS_PRODUCT": {
            const updatedCart = [...state.cart]
            const indexItem = updatedCart.findIndex(item => item.id === action.payload.id)
            const updatedItem = { ...updatedCart[indexItem] }

            if (updatedItem.quantity === 1) {
                const filteredItem = updatedCart.filter(p => p.id != action.payload.id)
                return { ...state, cart: filteredItem, total: state.total - action.payload.price }
            } else {
                updatedItem.quantity--
                updatedCart[indexItem] = updatedItem
                return { ...state, cart: updatedCart, total: state.total - action.payload.price }

            }
        }

        case "LOAD_CART": {
          return  { cart : action.payload}
        }

        default:
            return state
    }
}

export default CartReducer