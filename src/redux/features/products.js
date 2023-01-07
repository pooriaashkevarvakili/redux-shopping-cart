import { createSlice } from "@reduxjs/toolkit"

import proudctData from "../productData"
const initialState = {
    products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
    items: proudctData
}

const prodctsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    }
})

export default prodctsSlice.reducer