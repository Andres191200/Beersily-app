import { useState } from "react"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/shoppingCart.css'
import ItemCart from "./ItemCart";

export const CART_ITEMS = {
    cart:[]
};

const ShoppingCart = () => {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const openCart = () => {
        cartIsOpen ? setCartIsOpen(false) : setCartIsOpen(true);
    }

    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" onClick={openCart} />
            <div className={`cart cart-${cartIsOpen && 'open'}`}>
                {CART_ITEMS.cart.length === 0 ? <span>There is no items!</span> : CART_ITEMS.cart.map(item => {
                    return (
                        <ItemCart key={item.id} item={item} />
                    )
                })}
            </div>
        </>
    )
}
export default ShoppingCart;