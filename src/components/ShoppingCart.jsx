import { useState } from "react"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/shoppingCart.css'

const ShoppingCart = () => {
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const openCart = () =>{
        cartIsOpen ? setCartIsOpen(false) : setCartIsOpen(true);
    }

    return (
        <>
            <FontAwesomeIcon icon={faCartShopping} className="shopping-cart" onClick={openCart} />
            <div className={`cart ${cartIsOpen && 'open'}`}></div>
        </>
    )
}

export default ShoppingCart