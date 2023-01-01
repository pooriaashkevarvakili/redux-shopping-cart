import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            const item = state.cart.findIndex(items => items.id === action.payload.id)
            if (item >= 0) {
                state.cart[item].quantity += 1
                toast.info(`incresed ${state.cart[item].name} cart quantity`, {
                    position: 'bottom-left'
                })
            } else {
                const tempProudct = { ...action.payload, quantity: 1 }
                state.cart.push(tempProudct)
                toast.success(`${action.payload.name} added to cart`, {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))

        },
        remove(state, action) {
            const nextItems = state.cart.filter(cart => cart.id !== action.payload.id)
            state.cart = nextItems
            localStorage.setItem('cart', JSON.stringify(state.cart))
            toast.error(`${action.payload.name} remove from to cart`, {
                position: 'bottom-left'
            })
        },

        decrement(state, action) {
            const itemIndex = state.cart.findIndex((cart) => cart.id === action.payload.id)
            if (state.cart[itemIndex].quantity > 1) {
                state.cart[itemIndex].quantity -= 1
                toast.info(`${action.payload.name} decrement from to cart`, {
                    position: 'bottom-left'
                })
            } else if (state.cart[itemIndex].quantity === 1) {
                const nextItems = state.cart.filter(cart => cart.id !== action.payload.id)
                state.cart = nextItems
                toast.error(`${action.payload.name} remove from to cart`, {
                    position: 'bottom-left'
                })
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        },
        clear(state, action) {
            state.cart = []
            toast.error(`cart cleaned`, {
                position: 'bottom-left'
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        },
        getTotals(state, action) {
            let { total, quantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantity } = cartItem;
                    const itemTotal = price * cartQuantity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantity;
                    return cartTotal;
                },
                {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        },
    }
})
export const { addTocart, remove, clear, decrement, getTotals } = cartSlice.actions
export default cartSlice.reducer