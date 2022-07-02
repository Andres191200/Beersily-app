import { faRemove, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";



const BeerModalDetails = ({ beer, setModalBeerIsOpen }) => {
    const { name, price, img, type, description, attenuation, ph, ebc, srm, abv } = beer;
    const [textButtonContent, setTextButtonContent] = useState('ADD TO CART');
    const [addToCartButtonClick, setAddToCartButtonClick] = useState(false);

    const closeBeerModal = () => {
        setModalBeerIsOpen(false);
        setAddToCartButtonClick(false)
        setTextButtonContent('ADD TO CART');
    }

    const addToCart = (event) => {
        setAddToCartButtonClick(true);
        setTextButtonContent('');
        setTimeout(() =>{ //Closing modal after added to cart anim
            closeBeerModal()
        },1500)
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
                <div className="price-fav-container">
                    <button className={`beer-modal-add-to-cart-button ${addToCartButtonClick && 'clicked-add-to-cart-button' }`} onClick={(event) => addToCart(event)}>{textButtonContent}</button>
                    <button className="beer-modal-fav-icon"><FontAwesomeIcon icon={faStar} /></button>
                </div>
            </div>
            <button className="close-modal-button" onClick={closeBeerModal}><FontAwesomeIcon icon={faRemove} /></button>
        </div>
    )
}

export default BeerModalDetails