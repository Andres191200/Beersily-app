import ReactDOM from 'react-dom';
import '../styles/beerModal.css';


const BeerModal = ({beer, modalBeerIsOpen}) =>{
    const {name, img, price} = beer
    
    return ReactDOM.createPortal(
        <div className={`main-modal-container ${modalBeerIsOpen && 'open'}`}>
            <div className="beer-modal-container">

            </div>
        </div>,
        document.getElementById('beer-modal')
    )
}

export default BeerModal;