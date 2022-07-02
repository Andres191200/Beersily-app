import { useState } from 'react';
import { useRef } from 'react';
import ReactDOM from 'react-dom';
import '../styles/beerModal.css';
import BeerModalDetails from './BeerModalDetails';


const BeerModal = ({ beer, modalBeerIsOpen, setModalBeerIsOpen }) => {

    return ReactDOM.createPortal(
        <div className={`main-modal-container ${modalBeerIsOpen && 'open'}`}>
            <BeerModalDetails beer={beer} setModalBeerIsOpen={setModalBeerIsOpen} />
        </div>,
        document.getElementById('beer-modal')
    )
}

export default BeerModal;