import '../styles/styles.css';
import '../styles/beers.css';
import { useState } from 'react';
import Beer from './Beer';
import { useEffect } from 'react';

const BEST_BEERS = [
    {
        name: 'Red ginger beer',
        price: 8,
        img: 'https://images.punkapi.com/v2/112.png',
        type:'Ale'
    },
    {
        name: 'Red vodky beer',
        price: 12,
        img: 'https://images.punkapi.com/v2/82.png',
        type:'Lager'
    },
    {
        name: 'Blue lemon w/gin beer',
        price: 12,
        img: 'https://images.punkapi.com/v2/42.png',
        type:'Ale'
    }
    ,
    {
        name: 'Mutant beer',
        price: 15,
        img: 'https://images.punkapi.com/v2/66.png',
        type:'Porter'
    },
    {
        name: 'Mini iron',
        price: 6,
        img: 'https://images.punkapi.com/v2/77.png',
        type:'Blonde Ale'
    },
    {
        name: 'Venom drink',
        price: 15,
        img: 'https://images.punkapi.com/v2/46.png',
        type:'Porter'
    }
]

const Beers = () => {
    const [bestBeers, setBestBeers] = useState(BEST_BEERS)

    return (
        <div className="beers-main-container">
            <div className="beers-container">
                <div className="beers-info-container">
                    <h1>Our best beers...</h1>
                    <p>These are our best beers!!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo necessitatibus dolores expedita unde est iure ab illo placeat assumenda tempora, illum omnis enim ipsum eos sapiente? Assumenda, consequatur tenetur?</p>
                </div>
                <div className="best-beers-container">
                    <div className="best-beers" id="best-beers">
                        {
                            bestBeers.map(beer => <Beer beer={beer} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beers;