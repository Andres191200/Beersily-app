import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import beerModalContext from '../context/beerModalContext';
import '../styles/beer.css';
import BeerModal from './beerModal';

const Beer = ({ beer }) => {
    const { image_url, name, srm } = beer
    const { modalBeerIsOpen, setModalBeerIsOpen } = useContext(beerModalContext)
    console.log(beer)
    return (
        <>
            <div className={`${modalBeerIsOpen && 'open'}`}>
                <BeerModal beer={beer} modalBeerIsOpen={modalBeerIsOpen} setModalBeerIsOpen={setModalBeerIsOpen} />
            </div>
            <div className="our-beers-beer" onClick={() => {
                setModalBeerIsOpen(true);
                console.log(modalBeerIsOpen)
            }} >
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
        </>
    )
}

export default Beer