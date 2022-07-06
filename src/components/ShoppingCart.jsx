import { useState } from "react"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/shoppingCart.css'
import { useReducer } from "react";
import ItemCart from "./ItemCart";

const INITIAL_CART_STATE = [];
const CART_ITEMS = [];
const ACTIONS = {
    ADD_TO_CART: 'ADD TO CART',
    REMOVE_FROM_CART: 'REMOVE FROM CART',
    CLEAR_CART: 'CLEAR CART'
}

const ShoppingCart = () => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    

    const cartReducer = (state, { type, payload }) => {
        switch (type) {
            case ACTIONS.ADD_TO_CART:
                console.log('add to cart');
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
    const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

    const clickTest = () =>{
        dispatch({type: ACTIONS.ADD_TO_CART})
    }

    const openCart = () => {
        cartIsOpen ? setCartIsOpen(false) : setCartIsOpen(true);
    }

    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" onClick={openCart} />
            <div className={`cart ${cartIsOpen && 'open'}`} onClick={clickTest}>
                {CART_ITEMS.length === 0 ? <span>There is no items!</span> : CART_ITEMS.map(item => {
                    return (
                        <ItemCart key={item.id} item={item}/>
                    )
                })}
            </div>
        </>
    )
}

export default ShoppingCart;