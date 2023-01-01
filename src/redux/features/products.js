import { createSlice } from "@reduxjs/toolkit"

import ProductData from "../productData.js"
const initialState = {
    cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [],
    items: ProductData,
}
const prodctsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    }
})
export default prodctsSlice.reducer