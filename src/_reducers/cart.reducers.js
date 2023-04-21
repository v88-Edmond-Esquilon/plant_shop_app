import { createSlice } from "@reduxjs/toolkit";
import CartService from "../_services/cart.services";

const initialState = {

}

export const CartManagementReducer = createSlice ({
    name: "cart",
    initialState,
    reducers: {

    }
});

export const {

} = CartManagementReducer.actions;

export default CartManagementReducer.reducer;