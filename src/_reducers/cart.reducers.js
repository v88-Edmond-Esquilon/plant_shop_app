import { createSlice } from "@reduxjs/toolkit";
import CartService from "../_services/cart.services";

const initialState = {
    cart_contents: [],
    toggle_remove_item_modal: false,
}

export const CartManagementReducer = createSlice ({
    name: "cart",
    initialState,
    reducers: {
        addToCart: CartService.addToCart,
        removeFromCart: CartService.removeFromCart,
        onToggleRemoveItemModal: CartService.onToggleRemoveItemModal,
        updateCartContent: CartService.updateCartContent,
        onPaymentSuccess: CartService.onPaymentSuccess,
    }
});

export const {
    addToCart,
    removeFromCart,
    onToggleRemoveItemModal,
    updateCartContent,
    onPaymentSuccess,
} = CartManagementReducer.actions;

export default CartManagementReducer.reducer;