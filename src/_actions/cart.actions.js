import { addToCart, removeFromCart, onToggleRemoveItemModal, updateCartContent, onPaymentSuccess } from "../_reducers/cart.reducers";

export const CartActions = {
    addToCart: (params) => {
        return (dispatcher) => {
            dispatcher(addToCart(params));
        }
    },
    removeFromCart: (params) => {
        return (dispatcher) => {
            dispatcher(removeFromCart(params));
        }
    },
    onToggleRemoveItemModal: (params) => {
        return (dispatcher) => {
            dispatcher(onToggleRemoveItemModal(params));
        }
    },
    updateCartContent: (params) => {
        return (dispatcher) => {
            dispatcher(updateCartContent(params));
        }
    }, 
    onPaymentSuccess: (params) => {
        return (dispatcher) => {
            dispatcher(onPaymentSuccess(params));
        }
    },
}   