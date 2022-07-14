import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/beerModal.css'
import '../styles/bestBeer.css'

const BestBeer = ({ beer, setModalBeerIsOpen, setBeer }) => {
    const { name, price, img } = beer;

    const openBeerModal = () => {
        setModalBeerIsOpen(true)
        setBeer(beer)
    }

    return (
        <div className="beer" onClick={openBeerModal}>
            <div className="name">
                <span>{name}</span>
            </div>
            <img alt='beer' src={img} />
            <div className="beer-info">
                <div className="price">
                    <p>{price} EUR</p>
                </div>
                <div className="add-cart">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
            </div>
        </div>
    )
}

export default BestBeer