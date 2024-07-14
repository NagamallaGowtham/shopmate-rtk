import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    cartItems: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action) => {
            const indexItem = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (indexItem === -1) {
                state.count += 1
                state.cartItems.push({...action.payload, quantity: 1})
            } else {
                state.cartItems[indexItem].quantity += 1
            }
        },
        remove: (state, action) => {
            const indexItem = state.cartItems.findIndex(item => item.id === action.payload.id)
            if (indexItem !== -1) {
                if (state.cartItems[indexItem].quantity > 1) {
                    state.cartItems[indexItem].quantity -= 1
                } else {
                    state.cartItems.splice(indexItem, 1)
                    state.count -= 1
                }
            }
            // const newCartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
            // state.cartItems = newCartItems
        }
    }
})

export default cartSlice.reducer
export const {add, remove} = cartSlice.actions