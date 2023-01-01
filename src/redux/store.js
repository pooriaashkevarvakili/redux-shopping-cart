import { configureStore } from "@reduxjs/toolkit"
import cartReducer, { getTotals } from "./features/cart"
import productReducer from "./features/products"
const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer
    }
})
store.dispatch(getTotals())
export default store