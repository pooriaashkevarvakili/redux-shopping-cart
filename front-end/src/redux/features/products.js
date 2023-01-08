import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const initialState = {

    products: localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [],
    status: null,
    error: null,
    loading: false
}
export const getPosts = createAsyncThunk(
    'products/getPosts',
    async (thunkAPI) => {
        const res = await fetch('http://localhost:5000/products').then(
            (data) => data.json()
        )
        return res

    })
const prodctsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getPosts.pending]: (state) => {
            state.loading = true
        },
        [getPosts.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.products = payload
        },
        [getPosts.rejected]: (state) => {
            state.loading = false
        },

    }

})

export default prodctsSlice.reducer