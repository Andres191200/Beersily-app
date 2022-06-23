import ReactDOM from 'react-dom';
import '../styles/beerModal.css';
import BeerModalDetails from './BeerModalDetails';


const BeerModal = ({beer, modalBeerIsOpen}) =>{
    return ReactDOM.createPortal(
        <div className={`main-modal-container ${modalBeerIsOpen && 'open'}`}>
            <BeerModalDetails beer={beer}/>
        </div>,
        document.getElementById('beer-modal')
    )
}

export default BeerModal;