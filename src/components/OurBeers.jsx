import { useState } from 'react';
import '../styles/ourbeers.css';
import GetBeers from '../utils/GetBeers';
import Beer from './Beer';

const OurBeers = () =>{
    const [beers,setBeers] = useState([])
    GetBeers().then(beers => setBeers(beers))

    return(
        <div className="our-beers-main-container">
            <div className="our-beers-container">
                {beers.map(beer => <Beer beer={beer}/>)}
            </div>
        </div>
    )
}

export default OurBeers;