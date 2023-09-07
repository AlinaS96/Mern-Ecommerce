import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: [],
    user: null,
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        createCart: (state, action) => {
            state.user = action.payload.user
        },
        addProduct: (state, action) => {
            let index = undefined;
            index = state.products.findIndex(x=>x.productId===action.payload.products.productId)
            console.log(index)
            
            if (index === -1|| index===undefined) {
                state.products = [...state.products, action.payload.products]
            } else {
                state.products[index].quantity +=action.payload.quantity
            }
            
            state.totalQuantity += action.payload.quantity;
            state.totalPrice += action.payload.price;
        },
        removeProduct: (state, action) => {
            // const pos = state.products.map(e => e.productId).indexOf(action.payload.productId)
            const pos =state.products.findIndex(x=>x.productId===action.payload.productId)
            console.log(pos)
            if(pos!==-1){
            state.products.splice(pos, 1)
            }
        }
    }
})

export const { createCart, addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer