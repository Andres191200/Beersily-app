import { faRemove, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const BeerModalDetails = ({ beer, setModalBeerIsOpen }) => {
    const { name, price, img, type, description, attenuation, ph, ebc, srm, abv } = beer;

    const closeBeerModal = () =>{
        setModalBeerIsOpen(false);
    }
    
    return (
        <div className="beer-modal-container">
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
                    <button className="beer-modal-add-to-cart-button">Add To Cart</button>
                    <button className="beer-modal-fav-icon"><FontAwesomeIcon icon={faStar}/></button>
                </div>
            </div>
            <button className="close-modal-button" onClick={closeBeerModal}><FontAwesomeIcon icon={faRemove}/></button>
        </div>
    )
}

export default BeerModalDetails