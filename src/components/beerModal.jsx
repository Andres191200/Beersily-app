import ReactDOM from 'react-dom';
import { ShoppingCartProvider } from '../context/shoppingReducerContext';
import '../styles/beerModal.css';
import BeerModalDetails from './BeerModalDetails';


const BeerModal = ({ beer, modalBeerIsOpen, setModalBeerIsOpen }) => {
    return ReactDOM.createPortal(
        <div className={`main-modal-container ${modalBeerIsOpen && 'open'}`}>
            <ShoppingCartProvider>
                <BeerModalDetails beer={beer} setModalBeerIsOpen={setModalBeerIsOpen} />
            </ShoppingCartProvider>
        </div>,
        document.getElementById('root')
    )
}

export default BeerModal;