import '../styles/styles.css';
import '../styles/beers.css';
import { useState } from 'react';
import BestBeer from './BestBeer';
import BeerModal from './beerModal';
import BEST_BEERS from '../utils/BestBeers';


const Beers = () => {
    const [bestBeers, setBestBeers] = useState(BEST_BEERS)
    const [modalBeerIsOpen, setModalBeerIsOpen] = useState(false)
    const [beer, setBeer] = useState({})




    return (
        <div className="beers-main-container" id="beers">
            <div className={`modal-beer`}>
                <BeerModal beer={beer} modalBeerIsOpen={modalBeerIsOpen} setModalBeerIsOpen={setModalBeerIsOpen} />
            </div>
            <div className="beers-container">
                <div className="beers-info-container">
                    <h1>Our best beers...</h1>
                    <p>These are our best beers!!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo necessitatibus dolores expedita unde est iure ab illo placeat assumenda tempora, illum omnis enim ipsum eos sapiente? Assumenda, consequatur tenetur?</p>
                    <a target='_blank' href="/beers">Our beers</a>
                </div>
                <div className="best-beers-container">
                    <div className="best-beers" id="best-beers">
                        {
                            bestBeers.map(beer => <BestBeer key={beer.id} beer={beer}
                                setModalBeerIsOpen={setModalBeerIsOpen}
                                setBeer={setBeer} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beers;