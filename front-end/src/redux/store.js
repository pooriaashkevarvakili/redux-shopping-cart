import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./features/cart"
import productReducer, { getPosts } from "./features/products"

const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,

    },

})
store.dispatch(getPosts())
export default store