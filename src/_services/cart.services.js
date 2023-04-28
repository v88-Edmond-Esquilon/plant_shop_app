
const addToCart = (state, action) => {
    state.cart_contents.push(action.payload);
}

const removeFromCart = (state, action) => {
    const cart_id = action.payload;

    state.cart_contents = state.cart_contents.filter(item => item.id !== cart_id);
};
  
const updateCartContent = (state, action) => {
    const item_id = action.payload.id;
    const new_quantity = action.payload.new_quantity;
    const new_price = action.payload.new_price;

    const updated_cart_contents = state.cart_contents.map((item) => {
        if (item.id === item_id) {
            return {
                ...item,
                quantity: new_quantity,
                item_price: new_price,
            };
        }
        return item;
    });

    return {
        ...state,
        cart_contents: updated_cart_contents,
    };
}

const onToggleRemoveItemModal = (state, action) => {
    state.toggle_remove_item_modal = action.payload;
}

const onPaymentSuccess = (state, action) => {
    state.cart_contents = [];
}

const CartService = {
    addToCart,
    removeFromCart,
    onToggleRemoveItemModal,
    updateCartContent,
    onPaymentSuccess
}

export default CartService;