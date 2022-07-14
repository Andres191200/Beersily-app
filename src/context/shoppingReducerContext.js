import { useReducer } from "react";
import { createContext } from "react";
import { cartReducer } from "../utils/shoppingCartReducer";
import {CART_ITEMS} from "../components/ShoppingCart"

const shoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, CART_ITEMS);
    const data = { dispatch }

    return (
        <shoppingCartContext.Provider value={data}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export { ShoppingCartProvider }
export default shoppingCartContext