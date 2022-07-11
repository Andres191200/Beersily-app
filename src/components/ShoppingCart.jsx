import { useState } from "react"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/shoppingCart.css'
import ItemCart from "./ItemCart";

export const CART_ITEMS = [];
export const CART_INITIAL_STATE = []

const ShoppingCart = () => {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const openCart = () => {
        cartIsOpen ? setCartIsOpen(false) : setCartIsOpen(true);
    }

    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" onClick={openCart} />
            <div className={`cart ${cartIsOpen && 'open'}`}>
                {CART_ITEMS.length === 0 ? <span>There is no items!</span> : CART_ITEMS.map(item => {
                    return (
                        <ItemCart key={item.id} item={item} />
                    )
                })}
            </div>
        </>
    )
}
export default ShoppingCart;