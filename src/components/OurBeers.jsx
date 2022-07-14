import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/ourbeers.css';
import GetBeers from '../utils/GetBeers';
import Beer from './Beer';

const OurBeers = () => {
    const [beers, setBeers] = useState([]);
    const [page, setPage] = useState(1);
    const [maxPerPage, setMaxPerPage] = useState(15);
    const [lastPage, setLastPage] = useState(0);

    console.log(((page - 1) * maxPerPage))
    console.log((page*maxPerPage))

    useEffect(() => {
        GetBeers().then(beers => setBeers(beers))
        setLastPage(Math.ceil(beers.length/maxPerPage))
    }, [maxPerPage, beers.length])

    return (
        <div className="our-beers-main-container">
            <div className="our-beers-container">
                {
                    beers.slice(((page - 1) * maxPerPage), (page*maxPerPage)).map(beer => <Beer beer={beer} />)
                }
            </div>
            <div className="pagination">
                    <p>Page {page} of {lastPage}</p>
                    <button>prev</button>
                    <button>next</button>
            </div>
        </div>
    )
}

export default OurBeers;