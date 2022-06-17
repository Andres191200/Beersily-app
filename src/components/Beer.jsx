import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/beer.css'

const Beer = ({ beer }) => {
    const { name, price, img} = beer
    return (
        <div className="beer">
            <div className="name">
                <span>{name}</span>
            </div>
            <img alt='beer' src={img} />
            <div className="beer-info">
                <div className="price">
                    <p>{price} EUR</p>
                </div>
                <div className="add-cart">
                    <FontAwesomeIcon icon={faCartShopping}/>
                </div>
            </div>
        </div>
    )
}

export default Beer