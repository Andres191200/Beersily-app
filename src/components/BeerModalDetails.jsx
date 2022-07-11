import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import shoppingCartContext, { ShoppingCartProvider } from "../context/shoppingReducerContext";
import { ACTIONS } from "../utils/shoppingCartActions";

const BeerModalDetails = ({ beer, setModalBeerIsOpen }) => {
    const { name, price, img, type, description, attenuation, ph, ebc, srm, abv, id } = beer;
    const [textButtonContent, setTextButtonContent] = useState('ADD TO CART');
    const [addToCartButtonClick, setAddToCartButtonClick] = useState(false);

    const { dispatch } = useContext(shoppingCartContext)

    const closeBeerModal = () => {
        setModalBeerIsOpen(false);
        setAddToCartButtonClick(false)
        setTextButtonContent('ADD TO CART');
    }

    const addToCart = (beer) => {
        setAddToCartButtonClick(true);
        setTextButtonContent('');
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: { beer } })

        // setTimeout(() => { //Closing modal after added to cart anim
        //     closeBeerModal()
        // }, 1500)

    }

    return (
        <div className="beer-modal-container" onClick={(e) => { e.stopPropagation() }}>
            <div className="beer-modal-img">
                <img src={img} alt="beer-img" />
            </div>
            <div className="beer-modal-info">
                <div className="beer-modal-name">
                    <h1>{name}</h1>
                </div>
                <div className="beer-modal-description">
                    <p>{description}</p>
                </div>
                <div className="beer-modal-details">
                    <div className="beer-modal-type"><span>Type: {type}</span></div>
                    <div className="beer-modal-type"><span>Attenuation: {attenuation}</span></div>
                    <div className="beer-modal-type"><span>PH: {ph}</span></div>
                    <div className="beer-modal-type"><span>EBC: {ebc}</span></div>
                    <div className="beer-modal-type"><span>SRM: {srm}</span></div>
                    <div className="beer-modal-type"><span>ABV: {abv}</span></div>
                </div>
                <div className="price-container">
                    <button className={`beer-modal-add-to-cart-button ${addToCartButtonClick && 'clicked-add-to-cart-button'}`} onClick={() => addToCart(beer)}>
                        {textButtonContent}
                    </button>
                    <svg width="20" height="32" viewBox="0 0 201 152">
                        <path className="checkmark-path1" d="M8 95L57 144" stroke="white" strokeWidth="15" strokeLinecap="round" />
                        <path className="checkmark-path2" d="M58 143L193.5 7.5" stroke="white" strokeWidth="15" strokeLinecap="round" />
                    </svg>
                </div>
            </div>
            <button className="close-modal-button" onClick={closeBeerModal}><FontAwesomeIcon icon={faRemove} /></button>
        </div>
    )
}

export default BeerModalDetails