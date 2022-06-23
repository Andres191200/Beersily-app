import '../styles/styles.css';
import '../styles/beers.css';
import { useState } from 'react';
import Beer from './Beer';
import BeerModal from './beerModal';

const BEST_BEERS = [
    {
        name: 'Red ginger beer',
        price: 8,
        img: 'https://images.punkapi.com/v2/112.png',
        type:'Ale',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, in fuga! Quidem ipsa voluptas nam veniam minima officiis sequi voluptatem.'
    },
    {
        name: 'Red vodky beer',
        price: 12,
        img: 'https://images.punkapi.com/v2/82.png',
        type:'Lager',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, in fuga! Quidem ipsa voluptas nam veniam minima officiis sequi voluptatem.'
    },
    {
        name: 'Blue lemon w/gin beer',
        price: 12,
        img: 'https://images.punkapi.com/v2/42.png',
        type:'Ale',
        description:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum deleniti, sit voluptas numquam quod eius, cupiditate architecto, nam recusandae aut consectetur laudantium omnis aliquid animi non odio atque. Voluptates!'
    }
    ,
    {
        name: 'Mutant beer',
        price: 15,
        img: 'https://images.punkapi.com/v2/66.png',
        type:'Porter',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, blanditiis pariatur omnis doloremque officia consequuntur fuga vero veniam consequatur nobis voluptatem tenetur quaerat ea quibusdam.'
    },
    {
        name: 'Mini iron',
        price: 6,
        img: 'https://images.punkapi.com/v2/77.png',
        type:'Blonde Ale',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rem veritatis itaque magnam dolorem vel laudantium, ea molestiae? Quasi ipsa officiis voluptas enim praesentium repellat molestias similique mollitia quae error soluta eaque dignissimos cum tempora quos, vel odio vero nam ratione placeat. Quam, ipsa fugiat!'
    },
    {
        name: 'Venom drink',
        price: 15,
        img: 'https://images.punkapi.com/v2/46.png',
        type:'Porter',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat enim cupiditate, quae corporis magnam laboriosam ab quia voluptatibus. Quia sit commodi sed esse mollitia corrupti ipsa vitae error exercitationem architecto quaerat, voluptatum unde itaque tenetur?'
    }
]

const Beers = () => {
    const [bestBeers, setBestBeers] = useState(BEST_BEERS)
    const [modalBeerIsOpen, setModalBeerIsOpen] = useState(false)
    const [beer, setBeer] = useState({})


    return (
        <div className="beers-main-container">
            <div className={`modal-beer`}>
                <BeerModal beer={beer} modalBeerIsOpen={modalBeerIsOpen}/>
            </div>
            <div className="beers-container">
                <div className="beers-info-container">
                    <h1>Our best beers...</h1>
                    <p>These are our best beers!!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo necessitatibus dolores expedita unde est iure ab illo placeat assumenda tempora, illum omnis enim ipsum eos sapiente? Assumenda, consequatur tenetur?</p>
                    <a href="/beers">Our beers</a>
                </div>
                <div className="best-beers-container">
                    <div className="best-beers" id="best-beers">
                        {
                            bestBeers.map(beer => <Beer beer={beer} 
                                modalBeerIsOpen={modalBeerIsOpen} 
                                setModalBeerIsOpen={setModalBeerIsOpen}
                                setBeer={setBeer}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Beers;