import { useReducer } from "react";
import { createContext } from "react";
import { CART_INITIAL_STATE } from "../components/ShoppingCart";
import { cartReducer } from "../utils/shoppingCartReducer";

const shoppingCartContext = createContext();

const ShoppingCartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

    const data = {dispatch}

    return(
        <shoppingCartContext.Provider value={data}>
            {children}
        </shoppingCartContext.Provider>
    )
}

export {ShoppingCartProvider}
export default shoppingCartContext