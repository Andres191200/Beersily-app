import { ACTIONS } from "./shoppingCartActions";

export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.ADD_TO_CART:
            console.log(payload);
            break;
        case ACTIONS.REMOVE_FROM_CART:
            console.log('remove from cart');
            break;
        case ACTIONS.CLEAR_CART:
            console.log('clear cart');
            break;
        default:
            return state;
    }
}