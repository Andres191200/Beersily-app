import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/beer.css';

const Beer = ({ beer }) => {
    const { image_url, name, srm } = beer
    
    return (
        <div className="our-beers-beer">
            <div className="our-beers-beer-img">
                <img src={image_url} alt="beer img" />
            </div>
            <div className="our-beers-beer-info">
                <div className="our-beers-beer-name">
                    <span>{name}</span>
                </div>
                <div className="our-beers-price-rate">
                    <p>4.9 <FontAwesomeIcon icon={faStar} /></p>
                    <p className="our-beers-price">{srm}</p>
                </div>
            </div>
        </div>
    )
}

export default Beer