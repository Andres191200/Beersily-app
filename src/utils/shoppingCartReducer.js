import { CART_ITEMS } from "../components/ShoppingCart";
import { ACTIONS } from "./shoppingCartActions";

export const cartReducer = (state, { type, payload }) => {
    const { beer } = payload
    switch (type) {
        case ACTIONS.ADD_TO_CART:
            return {
                ...state,
                cart:[...state.cart, beer]
            }
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